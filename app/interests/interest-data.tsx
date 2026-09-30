import type { InterestDetailData } from "./interest-detail";

export const badmintonData: InterestDetailData = {
  index: "01",
  title: "Badminton",
  label: "Regional competitor · Singles and doubles",
  summary:
    "Regional competition taught me to make quick decisions with incomplete information, control movement under pressure, recover after mistakes, and improve weak habits through deliberate repetition.",
  visual: (
    <div className="court-visual" aria-hidden="true">
      <div className="court-lines"><i /><i /><i /><i /></div>
      <div className="shuttle"><span /><b /></div>
      <small>MATCH POINT</small>
    </div>
  ),
  facts: [
    ["Level", "Regional competition"],
    ["Formats", "Singles and doubles"],
    ["Status", "Still playing"],
    ["Focus", "Movement, timing, decision-making"],
  ],
  sections: [
    {
      title: "Competing at regionals",
      paragraphs: [
        "Reaching regional competition gave me a clear measure of how much detail matters. A small change in positioning, timing, or shot choice affects the entire rally.",
        "Matches also taught me to stay composed when momentum shifts. There is little time to dwell on the last point because the next serve starts immediately.",
      ],
    },
    {
      title: "What the sport taught me",
      paragraphs: [
        "Badminton made patience practical. Improvement comes from separating a weak movement into smaller parts, repeating the footwork, reading patterns earlier, and correcting small habits until the better choice still holds up when a rally becomes fast.",
      ],
      bullets: [
        "Watch an opponent's positioning before choosing a shot",
        "Recover to a useful position after every movement",
        "Adjust during a match instead of waiting until it ends",
        "Keep effort consistent when a game becomes difficult",
      ],
    },
    {
      title: "How I think during a rally",
      paragraphs: [
        "A rally is a short feedback loop. I watch the opponent's balance and court position, choose a shot that creates the next useful situation, then recover before I know exactly what is coming back. Good movement is not only getting to the shuttle; it is arriving in a position that leaves options for the following shot.",
        "Singles makes space management and endurance obvious, while doubles makes communication, rotation, and fast front-to-back decisions more visible. In both formats, forcing a low-percentage winner is usually less reliable than creating pressure through placement and recovering well enough to play the next ball.",
      ],
    },
    {
      title: "The practice loop",
      paragraphs: [
        "When a movement breaks down, I try to isolate it instead of replaying full games and hoping it improves. Footwork patterns, serve and return, contact point, recovery, and shot consistency can each be repeated slowly enough to identify the mistake, then increased in speed until the correction survives pressure.",
        "That process is close to how I troubleshoot technical work: reduce the problem, observe one boundary, make one change, retest, and only then reintroduce the full system.",
      ],
    },
    {
      title: "Why I still play",
      paragraphs: [
        "I like the speed, but I keep coming back for the problem-solving. Every opponent creates a different match, and every rally gives immediate feedback.",
      ],
    },
    {
      title: "What I want to improve next",
      paragraphs: [
        "I want to keep improving movement efficiency, shot selection under pressure, and the ability to recognize patterns earlier in a match. The goal is not to describe myself through an old result; it is to keep the habits that made regional competition possible active through regular play and deliberate practice.",
      ],
    },
  ],
  nextSlug: "3d-printing",
  nextTitle: "3D printing",
};

export const printingData: InterestDetailData = {
  index: "02",
  title: "3D printing & design",
  label: "From digital model to physical object",
  summary:
    "I enjoy turning digital geometry into physical builds, then solving the orientation, support, scaling, tolerance, assembly, and finishing problems that the screen does not reveal.",
  visual: (
    <div className="printer-visual" aria-hidden="true">
      <div className="printer-frame"><span className="printer-head" /><i className="print-bed" /><b className="print-model" /></div>
      <div className="layer-readout">LAYER <strong>284</strong><span /></div>
    </div>
  ),
  facts: [
    ["Process", "Model, slice, print, assemble, finish"],
    ["Large build", "Elden Ring-inspired katana"],
    ["Prop build", "Replica hand cannon"],
    ["Focus", "Scale, tolerances, and finishing"],
  ],
  sections: [
    {
      title: "From a file to a finished piece",
      paragraphs: [
        "Printing is only one stage. Before a build starts, I need to check scale, orientation, supports, and how separate parts will connect. After printing, the work moves to fitting, sanding, assembly, and finishing.",
        "That full process is what interests me. A digital model looks complete, but the physical version exposes every weak measurement and awkward connection.",
      ],
    },
    {
      title: "Planning before the first layer",
      paragraphs: [
        "I begin by checking whether the model is watertight, correctly scaled, and divided in a way the printer can physically produce. Orientation changes strength, visible layer direction, support use, print time, and which surface receives the cleanest finish, so the default orientation is rarely an automatic choice.",
        "For multipart work, I also think about alignment and assembly before slicing. A joint needs enough clearance to fit after real printer tolerances, enough material to survive handling, and a location that can be sanded or hidden. Small test pieces are cheaper evidence than discovering a bad joint after every full section has printed.",
      ],
    },
    {
      title: "The larger builds",
      paragraphs: [
        "My larger projects include a katana inspired by Elden Ring and a replica hand cannon. Both required the designs to be divided into printable pieces and assembled into a convincing final form.",
      ],
      bullets: [
        "Scale pieces so they fit the printer and the finished prop",
        "Plan joints before committing to a long print",
        "Test tolerances with smaller samples",
        "Use sanding and finishing to hide layer lines and seams",
      ],
    },
    {
      title: "What a failed print tells me",
      paragraphs: [
        "A failure usually points to a specific assumption: the first layer did not adhere, an overhang needed different support, a tall part moved, a joint was too tight, a wall was too thin, or the chosen orientation placed stress along weak layer lines. I try to change the cause rather than immediately reslicing the same part with random settings.",
        "Keeping the failed part is useful because it makes the defect physical. I can compare layer quality, measure the actual clearance, mark where a seam should move, or test an adhesive and reinforcement method before repeating the complete build.",
      ],
    },
    {
      title: "Why I like the process",
      paragraphs: [
        "3D printing gives me a direct loop between design and evidence. If an idea does not work, the physical part shows why through a weak overhang, poor joint, warped edge, visible seam, or incorrect clearance. I adjust one cause, print again, and compare the result instead of treating the failed part as wasted effort.",
      ],
    },
    {
      title: "How it appears in this portfolio",
      paragraphs: [
        "The room's printer is an interactive model of the process rather than a static icon. Its bed, gantry, carriage, hotend, filament path, controls, and layer-by-layer chess-set build turn the object into a small explanation of how material becomes a finished set over time.",
        "That model also reflects the main reason I enjoy printing: the interesting work is the sequence between an idea and the finished object, including preparation, constraints, iteration, assembly, and evidence from the result.",
      ],
    },
  ],
  nextSlug: "reading",
  nextTitle: "Reading",
};

export const readingData: InterestDetailData = {
  index: "03",
  title: "Web novels, manhwa & manga",
  label: "Long stories and detailed worlds",
  summary:
    "I like long stories that take time to establish consistent rules, competing interpretations, and consequences, then make an apparently small detail matter hundreds of chapters later.",
  visual: (
    <div className="books-visual" aria-hidden="true">
      <div className="book book-one"><small>01</small><strong>LORD OF THE<br />MYSTERIES</strong><span>IN PROGRESS</span></div>
      <div className="book book-two"><small>02</small><strong>REVEREND<br />INSANITY</strong><span>IN PROGRESS</span></div>
      <div className="page-count">BOOKMARK / 2026</div>
    </div>
  ),
  facts: [
    ["Currently reading", "Lord of the Mysteries"],
    ["Also reading", "Reverend Insanity"],
    ["Formats", "Web novels, manhwa, manga"],
    ["Preference", "Dense worlds and patient development"],
  ],
  sections: [
    {
      title: "What I am reading",
      paragraphs: [
        "I am currently working through Lord of the Mysteries and Reverend Insanity. Both are long-form stories with enough room to establish detailed worlds, competing motivations, and consequences that build over time.",
      ],
    },
    {
      title: "How I follow very long stories",
      paragraphs: [
        "With long serial fiction, I pay attention to institutions, power systems, promises, recurring symbols, and what information is available to each character. A later decision is more convincing when it follows from knowledge and constraints that were already present, even if their importance was not obvious at the time.",
        "I also like comparing interpretations. Two characters can observe the same event and act differently because their goals, incentives, history, or incomplete information are different. That makes the conflict feel structural rather than created only by a missing conversation.",
      ],
    },
    {
      title: "What keeps me interested",
      paragraphs: [
        "I pay attention to how a story establishes its rules, who understands those rules, and whether later events respect the limits already shown. I also prefer character development that appears through choices and consequences instead of being explained all at once.",
      ],
      bullets: [
        "Worldbuilding with consistent internal rules",
        "Long-term character development",
        "Early details that become important later",
        "Conflicts without simple answers",
      ],
    },
    {
      title: "What I take from the format",
      paragraphs: [
        "Serialized stories have to maintain continuity across a large amount of material. The best ones repeat enough context to remain readable without erasing the consequences of earlier chapters. That balance makes me notice how systems are explained, how expectations are established, and how a long project preserves its own internal logic.",
        "The habit carries into technical documentation. A reader should be able to understand the current section, but important assumptions and earlier decisions should not disappear simply because the project has grown.",
      ],
    },
    {
      title: "Why long stories work for me",
      paragraphs: [
        "A long story has space to let ideas develop. When the pacing is patient, the payoff feels earned because I have spent enough time understanding the people and the world involved.",
      ],
    },
    {
      title: "An ongoing record",
      paragraphs: [
        "This page records what I am reading now rather than pretending to be a permanent ranking. As I finish or pause a series, I want to update it with the ideas, structures, or character choices that stayed memorable and add new work only after I have spent enough time with it to say why it belongs here.",
      ],
    },
  ],
  nextSlug: "photography",
  nextTitle: "Photography",
};

export const photographyData: InterestDetailData = {
  index: "04",
  title: "Photography",
  label: "Light, colour, and everyday scenes",
  summary:
    "Photography gives me a reason to slow down and notice how light, colour, structure, repetition, and negative space can make an ordinary scene worth keeping.",
  visual: (
    <div className="photo-visual" aria-hidden="true">
      <div className="photo-frame photo-a"><span>01</span></div>
      <div className="photo-frame photo-b"><span>02</span></div>
      <div className="photo-frame photo-c"><span>03</span></div>
      <small>CONTACT SHEET / IN PROGRESS</small>
    </div>
  ),
  facts: [
    ["Subjects", "Street details and everyday moments"],
    ["Style", "Simple edits and strong colour"],
    ["Gallery", "VSCO"],
    ["Status", "Ongoing"],
  ],
  links: [{ label: "View my VSCO", href: "https://sy1len.vsco.site" }],
  sections: [
    {
      title: "What I look for",
      paragraphs: [
        "I am drawn to scenes with clear light, strong colour, or one detail that changes the frame. Most of the photographs start with something small that makes me stop walking.",
      ],
      bullets: [
        "Light falling across ordinary spaces",
        "Colour combinations that hold a frame together",
        "Street details people usually pass",
        "Simple compositions without heavy editing",
      ],
    },
    {
      title: "Choosing the frame",
      paragraphs: [
        "Most of my photographs begin with one relationship: a line meeting a shadow, repeated windows, a bright colour inside a quiet scene, reflected light, or an ordinary object separated by negative space. Moving a few steps or waiting for the light often changes the image more than adding a stronger edit later.",
        "The frame is also a decision about exclusion. Removing a distracting edge, choosing where a building ends, or allowing empty space around the subject changes the order in which the viewer notices information.",
      ],
    },
    {
      title: "How I approach editing",
      paragraphs: [
        "I prefer edits that support what was already present. The goal is to keep the place recognizable while clarifying the light, colour, and visual hierarchy. Cropping, contrast, and sequence should strengthen the observation rather than turn it into a different scene.",
      ],
    },
    {
      title: "Selecting and sequencing",
      paragraphs: [
        "A single image can work on its own while still feeling wrong beside the next one. When I add work to the gallery, I consider colour, brightness, subject distance, direction, and visual weight so the sequence has rhythm rather than looking like every acceptable photo was uploaded at once.",
        "I prefer a smaller selection that shows how I notice a place over a large feed with no relationship between images. The VSCO gallery is therefore an evolving edit, not a complete archive of everything captured.",
      ],
    },
    {
      title: "A visual record",
      paragraphs: [
        "Over time, the photos become a record of what caught my attention. The gallery is less about a fixed theme and more about the way I notice places and moments.",
      ],
    },
    {
      title: "Connection to interface work",
      paragraphs: [
        "Photography made hierarchy and negative space easier for me to notice in interfaces. A page also needs a clear first point of attention, supporting information, intentional empty space, and restraint in the number of elements asking for emphasis.",
        "The portfolio uses that connection through limited accent colours, large editorial headings, dark quiet surfaces, and interactive objects that reveal more detail only when the viewer chooses them.",
      ],
    },
  ],
  nextSlug: "home-lab",
  nextTitle: "Home lab",
};

export const homeLabData: InterestDetailData = {
  index: "05",
  title: "The Proxmox home lab",
  label: "Old hardware, new jobs",
  summary:
    "I am turning older computers into a controlled Proxmox environment where I can practise virtualization, segmented networking, storage, backups, monitoring, and service recovery through direct use.",
  visual: (
    <div className="rack-visual" aria-hidden="true">
      <div className="rack-unit"><span>NODE 01</span><i /><i /><b>ONLINE</b></div>
      <div className="rack-unit"><span>NODE 02</span><i /><i /><b>BUILDING</b></div>
      <div className="rack-unit"><span>STORAGE</span><i /><i /><b>READY</b></div>
      <div className="rack-footer"><span /> PROXMOX VE / HOME LAB</div>
    </div>
  ),
  facts: [
    ["Platform", "Proxmox VE"],
    ["Hardware", "Repurposed computers"],
    ["Focus", "Virtualization and networking"],
    ["Status", "Current build"],
  ],
  sections: [
    {
      title: "Why reuse old computers",
      paragraphs: [
        "The project started because I wanted practical experience with virtualization and already had older hardware available. Reusing it gives each machine a purpose and gives me room to experiment without treating every mistake as a disaster.",
      ],
    },
    {
      title: "The build order",
      paragraphs: [
        "I am treating the lab as a staged system rather than installing every service at once. The first stage is inventory: processor, memory, storage health, network interfaces, firmware, power use, and which machine can remain available for management. The next stages are the hypervisor, management addressing, storage ownership, isolated virtual networks, backup destination, and a known restore test.",
        "Only after those foundations are understandable does a self-hosted service become useful. That order prevents a broken experiment from also becoming the only copy of its data or the only place where the recovery instructions were stored.",
      ],
    },
    {
      title: "What I am building",
      paragraphs: [
        "The goal is a small environment for Linux and Windows virtual machines, separated services, networking tests, storage, backups, and resource monitoring. I am learning the setup by operating it, documenting assumptions, reproducing problems, restoring known-good states, and rebuilding parts when the first approach does not work.",
      ],
      bullets: [
        "Create and manage virtual machines",
        "Separate services and test network boundaries",
        "Monitor storage, memory, and processor use",
        "Prove that backups can restore a service instead of only confirming that a backup file exists",
        "Find useful jobs for hardware that would otherwise sit unused",
      ],
    },
    {
      title: "Network and recovery rules",
      paragraphs: [
        "Management, normal services, and intentionally vulnerable experiments should not share one unrestricted network. I want to observe and control the paths between them, restrict administrative access, and keep internet exposure off by default until a service has a documented reason and update plan.",
        "A backup is not complete because a scheduled job produced a file. I want to restore a guest or service into an isolated location, confirm that the expected data and configuration return, record the time and dependencies, and update the procedure when the test reveals a missing secret or undocumented step.",
      ],
    },
    {
      title: "Why it is useful",
      paragraphs: [
        "The home lab turns networking and systems concepts into something concrete. Instead of only reading about a configuration, I can deploy it, break it, observe the result, and repair it.",
      ],
    },
    {
      title: "What I will document as it grows",
      paragraphs: [
        "The long-term record will include the hardware inventory, network diagram, addressing plan, virtual-machine purpose, resource allocation, service dependencies, backup location, restore evidence, notable failures, and the reason for each externally reachable path.",
        "I will keep planned and completed work separate. A topology idea belongs in the roadmap; a working service belongs in the lab record only after it has been deployed, tested, and recovered in the environment described here.",
      ],
    },
  ],
  nextSlug: "badminton",
  nextTitle: "Badminton",
};
