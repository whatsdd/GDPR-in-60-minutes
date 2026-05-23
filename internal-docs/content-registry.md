# Content Registry

> Internal tracking file. Maps each course module / video segment to its corresponding markdown page.
> Update this file every time a chapter is added, renamed, or its timestamps shift.

Last updated: 2026-05-22 (Modules 6 to 10 drafted; core 10-chapter book is complete)

## Status legend

- 🟢 Published (markdown written, video linked, sources verified)
- 🟡 Drafted (markdown started, awaiting video sync or source verification)
- 🔴 Stub only (page reserved in nav, no body)
- ⚪ Planned (not yet created)

## Module index

| # | Title | Markdown file | Video timestamp | Status |
|---|---|---|---|---|
| 1 | Foundations of GDPR | `docs/modules/01-foundations.md` | 00:00 – 06:00 | 🟡 |
| 2 | Key Definitions | `docs/modules/02-definitions.md` | 06:00 – 12:00 | 🟡 |
| 3 | Core Principles | `docs/modules/03-principles.md` | 12:00 – 18:00 | 🟡 |
| 4 | Lawful Bases for Processing | `docs/modules/04-lawful-bases.md` | 18:00 – 24:00 | 🟡 |
| 5 | Data Subject Rights | `docs/modules/05-data-subject-rights.md` | 24:00 – 32:00 | 🟡 |
| 6 | Controller and Processor Duties | `docs/modules/06-controller-processor.md` | 32:00 – 38:00 | 🟡 |
| 7 | Security and Breach Notification | `docs/modules/07-security-breach.md` | 38:00 – 44:00 | 🟡 |
| 8 | International Data Transfers | `docs/modules/08-international-transfers.md` | 44:00 – 50:00 | 🟡 |
| 9 | DPO, DPIA, and Accountability | `docs/modules/09-dpo-dpia.md` | 50:00 – 56:00 | 🟡 |
| 10 | Penalties and Enforcement | `docs/modules/10-penalties.md` | 56:00 – 60:00 | 🟡 |

> Timestamp ranges are placeholders based on the "60 minute" target length. They will be locked once the final cut is delivered.

## Module scope details (v2)

Each module is approximately 6 minutes of video plus a longer written companion. Scope is shaped by:
- the GDPR text order itself (Chapters I to XI),
- the IAPP CIPP/E 2025-2026 Body of Knowledge (5 domains, 14 EDPB guidelines explicitly examinable),
- the most recent EDPB guidance and opinions (2022 to 2025),
- the user-confirmed audience mix (founders/SMB, engineers/PMs, DPOs).

### Module 1: Foundations of GDPR (Articles 1 to 3)

- Why the GDPR exists: Charter of Fundamental Rights Article 8, the move from Directive 95/46/EC to a single Regulation in 2016, full applicability since 25 May 2018.
- Material scope (Art. 2): what counts and what is excluded (household exception, law enforcement covered by the LED).
- Territorial scope (Art. 3): establishment in the Union, targeting EU data subjects, monitoring behaviour in the Union.
- Builder call-out: when a US or APAC SaaS falls under the GDPR via Art. 3(2).
- EDPB Guidelines 3/2018 on Territorial Scope.

### Module 2: Key Definitions (Article 4)

- Personal data, processing, controller, processor, recipient, third party.
- Consent, pseudonymisation, profiling, restriction.
- Special categories (preview of Art. 9).
- EDPB Guidelines 07/2020 on the concepts of controller and processor.
- EDPB Opinion 22/2024 on processor / sub-processor obligations (sub-processor cascade clarified).

### Module 3: Core Principles (Article 5)

- Lawfulness, fairness, transparency.
- Purpose limitation, data minimisation, accuracy.
- Storage limitation, integrity and confidentiality.
- Accountability as the meta-principle (the controller must demonstrate compliance).
- Builder call-out: how Art. 5 maps to product decisions (logs retention, default field opt-out, schema review).

### Module 4: Lawful Bases for Processing (Articles 6 to 10)

- The six lawful bases of Art. 6(1): consent, contract, legal obligation, vital interests, public interest, legitimate interests.
- Special categories under Art. 9 and the ten conditions for processing them.
- Children's consent (Art. 8).
- EDPB Guidelines 05/2020 on consent.
- EDPB Guidelines 2/2019 on Art. 6(1)(b) (contract necessity).
- EDPB Guidelines 1/2024 on processing based on Art. 6(1)(f) (legitimate interest, three-step test).
- Compliance call-out: documenting the lawful basis before processing starts.

### Module 5: Data Subject Rights (Articles 12 to 22)

- Transparent information (Arts. 12 to 14): privacy notice content.
- Right of access (Art. 15) and EDPB Guidelines 01/2022.
- Rectification (Art. 16), erasure (Art. 17, current EDPB CEF 2025 enforcement focus), restriction (Art. 18).
- Data portability (Art. 20) and right to object (Art. 21).
- Automated decisions and profiling (Art. 22).
- Practical: building a DSAR intake workflow that hits the one-month deadline.

### Module 6: Controller and Processor Duties (Articles 24 to 30)

- Controller responsibility (Art. 24); data protection by design and by default (Art. 25, EDPB Guidelines 4/2019).
- Joint controllers (Art. 26) and the Art. 26 arrangement.
- Processor contracts (Art. 28) and the sub-processor chain.
- Records of processing activities (Art. 30).
- EDPB Opinion 04/2024 on the notion of main establishment of a controller.
- Builder call-out: minimum clauses in any vendor data processing addendum.

### Module 7: Security and Breach Notification (Articles 32 to 34)

- Security of processing (Art. 32): risk-based, state of the art, plus the four illustrative measures.
- Notification to the supervisory authority within 72 hours (Art. 33).
- Communication to data subjects when high risk (Art. 34).
- EDPB Guidelines 9/2022 on personal data breach notification.
- Practical: a one-page breach triage checklist (who, when, where, what).

### Module 8: International Data Transfers (Articles 44 to 49)

- General principle (Art. 44).
- Adequacy decisions (Art. 45): current list and the EU-US Data Privacy Framework.
- Appropriate safeguards (Art. 46): SCCs, BCRs.
- Derogations for specific situations (Art. 49).
- EDPB Recommendations 01/2020 on supplementary measures post-Schrems II.
- Builder call-out: choosing the right transfer tool when a US cloud is unavoidable.

### Module 9: DPO, DPIA, and Accountability (Articles 35 to 39)

- When a DPIA is mandatory (Art. 35) and how to run one in practice.
- Prior consultation with the supervisory authority (Art. 36).
- DPO designation, position, and tasks (Arts. 37 to 39).
- EDPB Guidelines on DPIA (WP248) and on DPOs (WP243), both endorsed by the EDPB.
- Practical: a 7-question DPIA pre-check engineers can run before sprint planning.

### Module 10: Penalties, Enforcement, and the Year Ahead

- The two tiers of administrative fines (Art. 83): up to EUR 10 million / 2% and up to EUR 20 million / 4% of global annual turnover.
- EDPB Guidelines 04/2022 on the calculation of administrative fines.
- Member State criminal penalties (Art. 84).
- Notable enforcement themes (CNIL, Garante, IE DPC, BfDI patterns).
- The 2025 EDPB Coordinated Enforcement Framework on the right to erasure: what to expect.
- Where to go next: full GDPR text, EDPB updates, national supervisory authorities.

## Optional bonus module (only if a v2 video season is planned)

- AI systems and the GDPR: EDPB Opinion 28/2024 on the use of personal data in AI models. Not in the 60-minute v1 cut.


## Meta pages

| Page | File | Status |
|---|---|---|
| Homepage | `docs/index.md` | 🟢 |
| Getting started | `docs/guide/getting-started.md` | ⚪ |
| About the series | `docs/guide/about-the-series.md` | ⚪ |
| Glossary | `docs/guide/glossary.md` | ⚪ |
| Resources & references | `docs/guide/resources.md` | ⚪ |
| Compliance self-audit | `docs/guide/self-audit.md` | ⚪ |

## Sources of inspiration for the v2 outline

| Source | How it shaped the outline |
|---|---|
| Udemy: "Build EU GDPR data protection compliance from scratch (CIPT)" (linked by user) | Used as loose inspiration only. Confirmed practitioner ordering: scope → definitions → principles → lawful bases → rights → controller/processor → security → transfers → DPO/DPIA → enforcement. No headings copied. |
| IAPP CIPP/E Body of Knowledge 2025-2026 (5 domains, restructured in 2025) | Anchored which EDPB guidelines to weave into each module. 14 EDPB guidelines are examinable under CIPP/E; all 14 are referenced across our 10 modules. |
| EDPB published guidelines (2018 to 2025) | Each module now names the specific EDPB document (number + year), not a vague reference. |
| EDPB Coordinated Enforcement Framework 2025 (right to erasure focus) | Module 5 elevates Art. 17, and Module 10 flags the 2025 CEF theme. |

## Outstanding inputs

1. Final YouTube embed IDs (one per module) before any module flips to 🟢.
2. Optional: timestamp precision once the final cut is delivered. The 6-minutes-per-module split is a working assumption.
