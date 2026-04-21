import { useState } from "react";

const sections = [
  {
    id: "basics",
    title: "PEO 101",
    subtitle: "What you need to know cold",
    color: "#7c3aed",
    items: [
      {
        q: "What is a PEO?",
        a: "A Professional Employer Organization enters into a co-employment arrangement with client companies. The PEO becomes the employer of record for administrative purposes — payroll, taxes, benefits — while the client retains full control over hiring, firing, and day-to-day management.",
        tag: "Core Concept"
      },
      {
        q: "What does 'co-employment' mean?",
        a: "Both the PEO and the client company are legally considered employers. Employees appear on the PEO's EIN for payroll and tax purposes, but report to and are managed by the client. This is why PEOs need licenses — they're taking on legal employer obligations.",
        tag: "Core Concept"
      },
      {
        q: "What services does Rippling PEO provide?",
        a: "Payroll processing and tax filings under Rippling's EIN, benefits administration (health, dental, vision, workers' comp), HR compliance across all states, risk management, and employer-of-record functions. All managed through Rippling's software platform.",
        tag: "Rippling Specific"
      },
      {
        q: "What is Rippling's competitive advantage as a PEO?",
        a: "Software-first model. Legacy PEOs (ADP, Paychex) are service-heavy and manual. Rippling automates state registrations, tax withholding, and workers' comp enrollment through its platform. The software does what humans used to do — which is why the licensing infrastructure has to be airtight.",
        tag: "Rippling Specific"
      },
      {
        q: "Is Rippling a CPEO (Certified PEO)?",
        a: "No. Rippling is not IRS-certified as a CPEO. They argue CPEO certification doesn't solve the key problem for their tech clients — equity compensation (RSUs, stock options) creates payroll tax restart issues that CPEO legislation doesn't address. They also note CPEO certification can be revoked with only 10 days notice, exposing clients.",
        tag: "Rippling Specific"
      },
      {
        q: "What's the difference between Rippling PEO and Rippling EOR?",
        a: "PEO = co-employment, domestic US only. Client must have a US legal entity. Rippling shares employer status. EOR = sole employer, international. Client has no entity in that country. Rippling IS the employer entirely. Your role is PEO only — domestic licensing across US states.",
        tag: "Critical Distinction"
      },
    ]
  },
  {
    id: "licensing",
    title: "State Licensing",
    subtitle: "The core of your role",
    color: "#dc2626",
    items: [
      {
        q: "How many states require PEO licensing?",
        a: "Approximately 37 states require formal PEO licensing or registration. The remaining ~13 states have no specific PEO licensing law — Rippling can operate there under standard business/employer registration. Rippling operates in all 50 states, so you'd manage ~37 active license relationships.",
        tag: "Key Number"
      },
      {
        q: "What does a state PEO license file contain?",
        a: "License/registration certificate, surety bond (active, correct amount), Certificate of Insurance for workers' comp, audited financial statements, quarterly reports (some states), working capital documentation, controlling person background checks (some states), Secretary of State business entity registration, designated agent for service of process.",
        tag: "Your Day-to-Day"
      },
      {
        q: "What is a surety bond and why is it required?",
        a: "A financial guarantee to the state that Rippling can cover its employer obligations (payroll taxes, workers' comp, unemployment insurance) if it ever fails to remit them. If Rippling defaults, the state can file a claim against the bond. Bond amounts vary by state — some are static, some are dynamic and recalculate annually based on prior year payroll volume.",
        tag: "Key Concept"
      },
      {
        q: "What happens if a license lapses?",
        a: "It's not just a paperwork problem — it's a product outage. Rippling legally cannot operate as a co-employer in that state. Clients with employees there are exposed to liability. In North Dakota specifically, a bond lapse triggers automatic license revocation the NEXT DAY with a full reapplication required.",
        tag: "Stakes"
      },
      {
        q: "What does a typical annual renewal cycle involve?",
        a: "Renewal application, updated audited financial statements (usually due 90-120 days after fiscal year end), updated bond (some states recalculate amounts annually), updated workers' comp certificate of insurance, payment of renewal fees. Some states also require quarterly filings — client lists, SUI wage reports, CPA-certified financial statements.",
        tag: "Your Day-to-Day"
      },
      {
        q: "What are material change notifications?",
        a: "Most licensed states require Rippling to notify the regulatory agency within 30-45 days of any material change — new executive, address change, corporate restructuring, ownership change. Your job is to make sure internal teams flag these changes to you so you can file the required notifications on time.",
        tag: "Ongoing Obligation"
      },
      {
        q: "Which states have the most complex licensing requirements?",
        a: "Texas (full license required even for 1 employee, tiered working capital requirements, no temp license), North Carolina (quarterly GAAP financials, annual independent legal opinion required), Oklahoma (quarterly CPA certifications), Arkansas (two separate bonds required), North Dakota (automatic revocation on bond lapse), Vermont (bond scales with payroll volume).",
        tag: "Know These"
      },
      {
        q: "Which states have NO PEO licensing requirement?",
        a: "About 13 states including New York, Massachusetts, Oregon, Connecticut, Washington state, Virginia, Ohio, and others. Important: no licensing doesn't mean no complexity — NY and MA have extremely complex employment law even without PEO licensing requirements.",
        tag: "Know These"
      },
    ]
  },
  {
    id: "employment",
    title: "Employment Law",
    subtitle: "Track 2 — what Rippling manages for clients",
    color: "#d97706",
    items: [
      {
        q: "What employment law dimensions vary by state?",
        a: "Wage and hour laws (minimum wage, overtime rules, break requirements), paid leave mandates (PFML, PFL, disability insurance), pay equity and transparency laws (salary history bans, posting requirements), termination rules (final pay timing, WARN Act equivalents), tax complexity (local payroll taxes, state income tax rates).",
        tag: "Framework"
      },
      {
        q: "Which states are most complex for employment law?",
        a: "California (critical — daily overtime, same-day final pay, CalSavers, pay transparency), New York (NYC local taxes, NY PFL, WARN Act 90 days), DC (just cause termination, Universal Paid Leave), Colorado (pay transparency applies to remote postings), Washington state (WA Cares Fund — only mandatory long-term care payroll deduction in nation).",
        tag: "Know These"
      },
      {
        q: "What is California daily overtime?",
        a: "California requires overtime pay after 8 hours in a single day — not just after 40 hours in a week like federal law. Double time kicks in after 12 hours in a day. This is one of the most common compliance issues for Rippling clients expanding into California.",
        tag: "California"
      },
      {
        q: "What is the WA Cares Fund?",
        a: "Washington State's mandatory long-term care insurance contribution — the only one of its kind in the US. Both employers and employees contribute via payroll deduction. Combined with PFML (paid family and medical leave), Washington has two mandatory payroll contribution programs stacked together — operationally complex.",
        tag: "Washington"
      },
      {
        q: "What is Colorado's pay transparency law?",
        a: "Colorado requires salary range AND benefits disclosure in all job postings — including remote roles that Colorado residents could apply to. This means companies not physically in Colorado may still have obligations. Directly affects Rippling's tech clients who post remote jobs.",
        tag: "Colorado"
      },
      {
        q: "What is the NJ WARN Act?",
        a: "New Jersey's version requires 90 days notice (vs federal 60) AND mandatory severance pay on covered layoffs. Severance requirement is unique nationally — most states don't mandate severance. Rippling clients need to understand this exposure before conducting layoffs in NJ.",
        tag: "New Jersey"
      },
    ]
  },
  {
    id: "operations",
    title: "PEO Operations",
    subtitle: "How the teams work together",
    color: "#059669",
    items: [
      {
        q: "What does PEO Ops do?",
        a: "Client onboarding into the PEO, state employer tax account setup per client, workers' comp enrollment, day-to-day service delivery and client relationship management. They're the operational team executing the PEO service. They need you to confirm licensing is current before they can onboard clients in new states.",
        tag: "Cross-Functional"
      },
      {
        q: "What does Legal & Compliance do vs PEO Ops?",
        a: "Legal interprets regulatory requirements and owns Rippling's own licenses. PEO Ops operationalizes the service delivery for clients. Your role sits between them — you own the licensing portfolio and act as liaison. When Ops wants to expand to a new state, you tell them whether the license is in place.",
        tag: "Your Role"
      },
      {
        q: "How does product compliance work?",
        a: "When a state changes a PEO law, Legal interprets it → you define what Rippling's process or platform needs to change → you coordinate with Product/Engineering to implement it → you QA whether the implementation satisfies the regulatory requirement. You're not coding but you're the bridge between legal interpretation and technical execution.",
        tag: "Your Role"
      },
      {
        q: "Where does Finance play in licensing?",
        a: "Finance provides the audited financial statements you need for license renewals. They own working capital calculations that determine bond amounts in some states. They process actual bond premium payments. You need a strong relationship with Finance because several of your compliance deadlines are gated on Finance delivering documents to you on time.",
        tag: "Cross-Functional"
      },
      {
        q: "What is the new state expansion process?",
        a: "PEO Ops identifies a new state they want to serve clients in → they come to Legal/Compliance (you) to confirm licensing status → if not licensed, you initiate the application process (can take weeks to months) → license issued → Ops can onboard clients. You have to get ahead of this proactively, not reactively.",
        tag: "Process"
      },
    ]
  },
  {
    id: "international",
    title: "EOR vs PEO",
    subtitle: "Clearing up the international confusion",
    color: "#0891b2",
    items: [
      {
        q: "What is EOR (Employer of Record)?",
        a: "Used for international hiring where the client has no legal entity in that country. Rippling becomes the SOLE employer — not co-employer. They handle local employment contracts, payroll in local currency, local labor law compliance, benefits per country requirements. Client directs the work but Rippling is the legal employer entirely.",
        tag: "Key Distinction"
      },
      {
        q: "PEO vs EOR — the simple distinction",
        a: "PEO: Client already has a US legal entity. Rippling co-employs for administrative purposes. Domestic US only. EOR: Client has NO entity in that country. Rippling IS the employer. Used internationally. Your role covers PEO only — domestic US state licensing.",
        tag: "Key Distinction"
      },
      {
        q: "Why might Jennifer have mentioned international licensing?",
        a: "Rippling's EOR product operates in 80+ countries as of 2025. Each country has its own employer registration, labor law compliance, and regulatory requirements. That's a separate compliance function from your PEO licensing role. Jennifer may have mentioned it to give you the full picture of Rippling's compliance landscape — but your role is focused on domestic PEO state licensing.",
        tag: "Context"
      },
      {
        q: "Does your role touch EOR at all?",
        a: "Unlikely directly — EOR is a separate product with its own compliance infrastructure. The JD specifically mentions PEO licensing. However, understanding EOR helps you see the full scope of Rippling's compliance landscape and shows product knowledge in your interview. It may also come up in the 'assist with other legal and compliance projects' catch-all.",
        tag: "Your Role"
      },
      {
        q: "How does Rippling's EOR work in 80 countries?",
        a: "Rippling partners with local entities in each country to serve as the local employer. They handle employment contracts under local labor law, payroll in local currency, mandatory benefits (which vary dramatically by country), termination rules, and regulatory filings. Scale is massive — 80 countries means 80 different regulatory frameworks.",
        tag: "Context"
      },
    ]
  },
  {
    id: "interview",
    title: "Interview Prep",
    subtitle: "What to know for Thursday",
    color: "#db2777",
    items: [
      {
        q: "What is Rippling's pay range for this role?",
        a: "$95,000 - $145,000 USD per year for SF Bay Area. Given your experience level (4 years compliance, paralegal background, technical skills), target $110,000-$120,000 as your anchor. Don't undercut yourself coming from nonprofit.",
        tag: "Comp"
      },
      {
        q: "The role title says 'Associate' — what does that mean?",
        a: "The JD says 'Specialist' in the text but 'Associate' in the title on the ATS. Worth clarifying with Mary — this may affect level, comp, and growth trajectory. Ask: 'I noticed the title says Associate in the system — can you clarify the level and how it maps to the team structure?'",
        tag: "Clarify Thursday"
      },
      {
        q: "What are the strongest STAR stories to prepare?",
        a: "1) Building compliance infrastructure from scratch (ASES/ELO-P program launch). 2) Managing external audit successfully (CLA audit April 2026). 3) Identifying and mitigating compliance risk proactively. 4) Cross-functional coordination to achieve compliance outcome. 5) Learning a complex new domain quickly and applying it.",
        tag: "Prep"
      },
      {
        q: "What questions should you ask Mary?",
        a: "1) 'Where does the PEO licensing infrastructure currently stand — am I inheriting a system or building from scratch?' 2) 'What does success look like in the first 90 days?' 3) 'What's been the biggest challenge managing the state portfolio as Rippling scales?' 4) 'What do you wish you had known coming into this role?'",
        tag: "Your Questions"
      },
      {
        q: "Should you mention the state matrix you built?",
        a: "Yes — this is the right audience. Mary will understand exactly what she's looking at. Don't lead with it but reference it naturally: 'As I was researching the role, I started mapping the licensing and employment law complexity across states — I'd love to share that if it would be useful.' It signals you've already started doing the job.",
        tag: "Your Edge"
      },
      {
        q: "What's the hybrid policy?",
        a: "Rippling requires at least 3 days per week in office under current policy. The role is listed as LI-Hybrid. San Francisco office. Factor this into your commute planning from your current location.",
        tag: "Logistics"
      },
    ]
  }
];

export default function PEOStudyGuide() {
  const [activeSection, setActiveSection] = useState("basics");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (sectionId, idx) => {
    const key = `${sectionId}-${idx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const current = sections.find(s => s.id === activeSection);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Georgia', serif", color: "#e5e5e5" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "1.5rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: "0.6rem", fontFamily: "monospace", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
            Interview Prep · Mary Interview · Thursday
          </div>
          <h1 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.3rem", letterSpacing: "-0.02em", color: "#f5f5f5" }}>
            PEO Licensing Study Guide
          </h1>
          <p style={{ fontSize: "0.75rem", color: "#444", margin: 0, fontFamily: "monospace" }}>
            Everything you need to know · 6 modules · Click any card to expand
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem 2rem" }}>

        {/* Section nav */}
        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "0.4rem 0.9rem",
                borderRadius: "3px",
                border: activeSection === s.id ? `1px solid ${s.color}` : "1px solid #1e1e1e",
                background: activeSection === s.id ? `${s.color}22` : "transparent",
                color: activeSection === s.id ? s.color : "#555",
                cursor: "pointer",
                fontSize: "0.72rem",
                fontFamily: "monospace",
                fontWeight: activeSection === s.id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Section header */}
        <div style={{ marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: `1px solid ${current.color}33` }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: 0, color: current.color }}>{current.title}</h2>
            <span style={{ fontSize: "0.75rem", color: "#444", fontFamily: "monospace" }}>{current.subtitle}</span>
          </div>
          <div style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "#333", marginTop: "0.3rem" }}>
            {current.items.length} items · click to expand
          </div>
        </div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {current.items.map((item, idx) => {
            const key = `${current.id}-${idx}`;
            const isOpen = openItems[key];
            return (
              <div
                key={idx}
                style={{
                  border: `1px solid ${isOpen ? current.color + "66" : "#1a1a1a"}`,
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "border-color 0.15s",
                }}
              >
                <div
                  onClick={() => toggleItem(current.id, idx)}
                  style={{
                    padding: "0.85rem 1.1rem",
                    background: isOpen ? "#0f0f0f" : "#090909",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{
                      padding: "0.1rem 0.5rem",
                      borderRadius: "2px",
                      fontSize: "0.58rem",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      background: `${current.color}22`,
                      color: current.color,
                      border: `1px solid ${current.color}44`,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#e5e5e5", fontWeight: 600 }}>{item.q}</span>
                  </div>
                  <span style={{ fontSize: "0.6rem", color: "#333", fontFamily: "monospace", flexShrink: 0 }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>
                {isOpen && (
                  <div style={{
                    padding: "1rem 1.1rem",
                    background: "#0c0c0c",
                    borderTop: `1px solid ${current.color}33`,
                    fontSize: "0.8rem",
                    color: "#bbb",
                    lineHeight: 1.7,
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.3rem" }}>
          {sections.map(s => (
            <div
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                height: 3,
                flex: 1,
                borderRadius: "2px",
                background: activeSection === s.id ? s.color : "#1a1a1a",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "0.5rem", fontSize: "0.6rem", fontFamily: "monospace", color: "#333", textAlign: "center" }}>
          {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length} modules
        </div>

      </div>
    </div>
  );
}
