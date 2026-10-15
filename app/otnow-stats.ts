"use client";

import { useEffect, useState } from "react";

export const OTNOW_STATS_API = "https://otnow-stats.sil6428-archtech.workers.dev/api/stats";

export type OTNowStats = {
  generatedAt: string;
  reportingInstallations: number;
  totalItems: number;
};

let cachedStats: OTNowStats | null = null;
let pendingRequest: Promise<OTNowStats> | null = null;

function count(value: unknown, label: string) {
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < 0) throw new Error(`Invalid OTNow ${label}`);
  return number;
}

async function loadStats(): Promise<OTNowStats> {
  if (cachedStats) return cachedStats;
  if (pendingRequest) return pendingRequest;

  pendingRequest = fetch(OTNOW_STATS_API, { headers: { accept: "application/json" } })
    .then(async (response) => {
      if (!response.ok) throw new Error(`OTNow statistics returned ${response.status}`);
      const body = (await response.json()) as {
        generatedAt?: unknown;
        summary?: { reportingInstallations?: unknown; totalItems?: unknown };
      };
      const stats = {
        generatedAt: typeof body.generatedAt === "string" ? body.generatedAt : "",
        reportingInstallations: count(body.summary?.reportingInstallations, "reporting-installation count"),
        totalItems: count(body.summary?.totalItems, "item count"),
      };
      cachedStats = stats;
      return stats;
    })
    .finally(() => {
      pendingRequest = null;
    });
  return pendingRequest;
}

export function useOTNowStats() {
  const [stats, setStats] = useState<OTNowStats | null>(cachedStats);

  useEffect(() => {
    let active = true;
    void loadStats()
      .then((next) => {
        if (active) setStats(next);
      })
      .catch(() => {
        // Static fallback copy keeps the portfolio useful if the independent service is unavailable.
      });
    return () => {
      active = false;
    };
  }, []);

  return stats;
}

export function formatOTNowOutcome(stats: OTNowStats) {
  return `${stats.totalItems.toLocaleString("en-US")} Canvas items organized · ${stats.reportingInstallations.toLocaleString("en-US")} opt-in reporting installations`;
}
