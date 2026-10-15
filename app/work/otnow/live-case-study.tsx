"use client";

import { formatOTNowOutcome, useOTNowStats } from "../../otnow-stats";
import CaseStudy, { type CaseStudyData } from "../case-study";

export default function LiveOTNowCaseStudy({ data }: { data: CaseStudyData }) {
  const stats = useOTNowStats();
  const facts = stats
    ? data.facts.map(([label, value]) => [label, label === "Product outcome" ? formatOTNowOutcome(stats) : value] as [string, string])
    : data.facts;

  return <CaseStudy data={{ ...data, facts }} />;
}
