---
title: "Module 9: When You Need a Privacy Review and a Privacy Officer"
description: "Data Protection Impact Assessments (DPIAs), Data Protection Officers (DPOs), and the accountability paperwork that ties the book together."
outline: deep
---

# Module 9: When You Need a Privacy Review and a Privacy Officer

<VideoEmbed
  src="https://www.youtube-nocookie.com/embed/PLACEHOLDER_ID_MODULE_09"
  title="Module 9: When You Need a Privacy Review and a Privacy Officer"
  timestamp="50:00 to 56:00"
  caption="Two formal artefacts almost every privacy programme produces, and the seven artefacts that make accountability real."
/>

Two formal artefacts almost every privacy programme produces:

- A **DPIA** (Data Protection Impact Assessment) when a project is risky enough to need a privacy review before it ships.
- A **DPO** (Data Protection Officer) when the law says you must have a designated privacy contact, or when you decide voluntarily that one would help.

The rules live in <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4435-1-1" label="Articles 35 to 39 of the GDPR" />. This chapter walks through both, with worked examples from the four personas: Florinha, Quadrant, Aoife, Skyloop.

::: info Why this chapter matters
DPIAs are the most common artefact regulators ask for when they investigate a new product or feature. The "we never did one" answer turns a soft conversation into a hard one. The good news: a useful DPIA takes a focused half-day, not a quarter.
:::

## When a DPIA is mandatory (Article 35)

A DPIA is required when processing is "likely to result in a high risk" to people. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4435-1-1" label="Article 35" />

Three explicit triggers:

1. **Systematic and extensive evaluation** of people based on automated decisions (Article 35(3)(a)). Includes profiling that produces legal or similarly significant effects.
2. **Large-scale processing of special-category data** (Article 9) or **criminal-conviction data** (Article 10).
3. **Systematic monitoring of public areas** on a large scale (CCTV, store-floor cameras with analytics, etc.).

Each national supervisory authority also publishes a **blacklist** (processing that always requires a DPIA) and often a **whitelist** (processing that does not). Always check your lead authority's list before you skip the DPIA.

::: tip A pragmatic shortcut
If your project ticks any of these, do a DPIA: new use of AI for decisions about people, biometric identification, location tracking, large-scale health data, scoring or profiling for risk decisions, data combined from multiple sources for the first time.
:::

## What a DPIA actually contains

Article 35(7) lists the minimum content:

- A systematic description of the processing and its purposes.
- An assessment of necessity and proportionality.
- An assessment of risks to the rights and freedoms of people.
- The measures envisaged to address the risks.

That fits on two to four pages for most projects. The endorsed reference is **WP248** (the DPIA guidelines originally adopted by the Article 29 Working Party and endorsed by the EDPB).

### Worked example: Skyloop launches AI-powered recommendations

Skyloop wants to add a feature: AI-driven personalised product recommendations using purchase history, browsing behaviour, and device signals.

The DPIA (4 pages):

1. **Description.** What the model takes in (purchase history, session events, device type), what it outputs (a top-10 recommended list), who can see it (the user only).
2. **Necessity and proportionality.** Could a simpler approach work? Tested: a non-AI "most popular" baseline. Result: conversion 27% lower. The AI use is necessary for the business goal and proportionate to the user benefit.
3. **Risks identified.** (a) Profiling could feel intrusive. (b) Model drift could produce odd recommendations. (c) Inference about sensitive attributes from purchase data (medical-adjacent products).
4. **Mitigations.** (a) Transparent in-app explanation: "based on what you bought." (b) User control: toggle to disable recommendations. (c) Pre-launch and quarterly audit of recommendations for sensitive-category drift. (d) Data minimisation: model retrained on a 12-month window, not all-time. (e) No special-category data used as a feature.
5. **Conclusion.** Residual risk: low to moderate. No prior consultation with the regulator required. DPIA filed, owner Skyloop's privacy lead, review in 12 months or sooner if the model materially changes.

### A 7-question DPIA pre-check for engineers

Before sprint planning, walk through these. Two or more "yes" answers means start the DPIA.

1. Does the feature use AI to make a decision about a person?
2. Does the feature use biometric data to identify a person?
3. Does the feature track people across services, locations, or sessions on a large scale?
4. Does the feature process health, race, religion, sexuality, political opinions, trade union, or genetic data?
5. Does the feature target or affect children specifically?
6. Does the feature combine data from sources that were collected separately?
7. Could a wrong outcome from this feature cause legal, financial, or reputational harm to a person?

Pin this to your product spec template. It is the cheapest DPIA insurance you can buy.

## Prior consultation (Article 36)

If the DPIA shows the residual risk is still **high** after mitigations, you must consult the supervisory authority before launching. They have up to 14 weeks to reply.

This is rare. Most DPIAs land at low or moderate residual risk after sensible mitigations. If yours does not, that is itself a signal: pause and rethink the design.

## When a DPO is mandatory (Article 37)

A Data Protection Officer is required in three situations:

1. The processing is by a **public authority or body** (other than courts).
2. Your **core activity** consists of regular and systematic monitoring of people **on a large scale**.
3. Your **core activity** consists of large-scale processing of **special-category data** or **criminal-conviction data**.

"Core activity" is the keyword. A small business that uses CCTV at the door does not have monitoring as a core activity. A 20-person ad-tech firm whose product is behavioural targeting does.

The exact lines have been litigated. The endorsed reference is **WP243** (the DPO guidelines from the Article 29 Working Party, endorsed by the EDPB).

### Small-business reality check

Most small businesses do **not** need a DPO under Article 37. They still benefit from a clear privacy contact, often called a "privacy lead." That role is voluntary and you can give it to anyone. Many small businesses do this.

### Worked example: Quadrant appoints a part-time DPO

Quadrant grows past 60 employees and starts processing meaningful volumes of customer behavioural data for a fraud-detection product. The product team's leadership concludes that the "regular and systematic monitoring on a large scale" trigger probably applies.

Quadrant's approach:

- They contract a fractional external DPO (one day a week) from a privacy consultancy.
- The DPO has direct reporting line to the CEO (not to a product manager who would have a conflict).
- The DPO's contact is published in the privacy notice and registered with the Berlin supervisory authority.
- Internally, the DPO runs the DPIA reviews, drafts the LIAs, advises on DPAs, and handles complex DSARs.

## DPO position and tasks (Articles 38 and 39)

If you do have a DPO, the law adds three protections so the role can actually work:

- The DPO has to be involved early, in **every** matter that touches personal data.
- The DPO reports to the highest level of management.
- The DPO must not be instructed how to perform tasks and cannot be penalised for doing the job.

The Article 39(1) tasks list:

- Inform and advise the controller and processor about their obligations.
- Monitor compliance with the GDPR and internal policies.
- Provide advice on DPIAs.
- Cooperate with the supervisory authority.
- Act as the contact point for the authority and for data subjects.

Conflicts of interest are taken seriously. The DPO should not also be the person whose decisions they are reviewing. A common safe arrangement: DPO sits in legal or compliance, not in engineering or marketing.

## The seven accountability artefacts

Accountability is what ties the whole book together. By Module 9, the artefacts the regulator might ask for are:

| Artefact | Where it comes from | Where it lives |
|---|---|---|
| Privacy notice | Module 5 | Public on your website |
| ROPA (records of processing) | Module 6 | Internal spreadsheet or tool |
| DPAs with each vendor | Module 6 | A folder, easy to find |
| LIA (legitimate interests assessment) | Module 4 | One per activity using Art. 6(1)(f) |
| DPIA | This module | One per high-risk project |
| DSAR log | Module 5 | A register with dates, systems, outcomes |
| Breach log | Module 7 | A register with the 72-hour deadline computed |

If you can produce these on request, you are running a real privacy programme. If you cannot, the regulator will assume you are not, regardless of how solid the rest looks.

::: tip Three of these become Excel templates
The Playbooks shipping after Module 10 give you ready-to-use Excel files for the **DSAR log**, the **breach log**, and the **vendor register** (which doubles as the vendor portion of your ROPA).
:::

## Common pitfalls

::: danger Four mistakes that show up in nearly every DPIA-related fine
1. **DPIA after launch.** The whole point is to do it before. A retrofit DPIA does not help anyone.
2. **"We have a DPO" but no independence.** A DPO who reports to the head of marketing and is told to back off when there is a conflict is not really a DPO.
3. **DPIA that is a checkbox.** Listing risks without mitigations, or listing mitigations without owners and deadlines, is not a DPIA. It is a memo.
4. **No documented LIA when you rely on legitimate interests.** This bites in routine inquiries, not just for big projects.
:::

## Module 9 takeaways

- Article 35: a DPIA is required when processing is likely to result in high risk. Three explicit triggers, plus the national blacklists.
- A useful DPIA is two to four pages: description, necessity, risks, mitigations, conclusion.
- The 7-question pre-check belongs in your product spec template.
- Article 37: a DPO is mandatory in three situations (public body, large-scale monitoring as core activity, large-scale special-category processing as core activity).
- The DPO needs real independence and a direct line to top management.
- The seven accountability artefacts are the regulator's checklist when they show up.

## Quick self-audit

- [ ] We have a DPIA template (or use the CNIL PIA tool) and at least one DPIA on file for a recent high-risk project.
- [ ] Our product spec template includes the 7-question pre-check.
- [ ] We have decided whether we need a DPO under Article 37, and we have written down why or why not.
- [ ] If we have a DPO, they report to top management and there is no role conflict.
- [ ] Our privacy notice names the DPO or the privacy contact and gives a working email.
- [ ] We can produce, on request, our ROPA, DPAs, LIAs, DPIAs, DSAR log, and breach log within a working day.

## Source anchors

- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4435-1-1" label="Article 35 GDPR (DPIA)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4587-1-1" label="Article 36 GDPR (prior consultation)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4612-1-1" label="Article 37 GDPR (DPO designation)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4674-1-1" label="Article 38 GDPR (DPO position)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e4710-1-1" label="Article 39 GDPR (DPO tasks)" />
- WP248 (DPIA Guidelines, endorsed by the EDPB).
- WP243 (DPO Guidelines, endorsed by the EDPB).
- <a href="https://www.cnil.fr/en/cnils-open-source-pia-software-makes-data-protection-impact-assesment-easier" target="_blank" rel="noopener noreferrer">CNIL PIA software</a> (a free desktop tool that walks you through a DPIA).

::: info Next up
Module 10 closes the book: how the fines really work, three real enforcement stories, and where to read next.
:::

<CtaBlock />
