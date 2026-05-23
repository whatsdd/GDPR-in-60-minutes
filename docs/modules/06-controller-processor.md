---
title: "Module 6: When You Hire Vendors"
description: "Controllers, processors, joint controllers, DPAs, sub-processors, and the records you have to keep. The paperwork side of the GDPR, in plain English."
outline: deep
---

# Module 6: When You Hire Vendors

<VideoEmbed
  src="https://www.youtube-nocookie.com/embed/PLACEHOLDER_ID_MODULE_06"
  title="Module 6: When You Hire Vendors"
  timestamp="32:00 to 38:00"
  caption="Who is on the hook when something goes wrong, and what your contracts have to say."
/>

Most of the practical paperwork in a GDPR programme sits in this chapter: who is responsible when something goes wrong, what your vendor contracts have to say, what records you must keep, and how the chain of sub-suppliers works. The rules live in <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3491-1-1" label="Chapter IV of the GDPR (Articles 24 to 43)" />.

The four personas we have been following make this easier to picture: Florinha (Lisbon plant shop), Quadrant (Berlin SaaS), Aoife (Dublin freelance UX consultant), Skyloop (Helsinki mobile-app studio).

::: info Why this chapter matters
Almost every fine you read about includes one or more of these failures: no Data Processing Agreement with a vendor, a copy-paste DPA that does not match the work, no record of processing, or a sub-processor nobody knew about. The good news is that most of this is a one-afternoon job once you sit down with it.
:::

## You as the controller (Article 24)

If you decide what data to collect and what to do with it, you are the **controller**. The controller carries the main legal weight. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3491-1-1" label="Article 24" />

The Article spells out three responsibilities:

1. Put in place "appropriate technical and organisational measures" to make sure (and be able to show) that you handle data the right way.
2. Review and update those measures regularly.
3. Where it fits, adopt internal data-protection policies.

In practice, the proof a regulator looks for is: a written list of what you do with personal data (your ROPA, see below), the DPAs you signed with vendors, your privacy notice, your DSAR and breach logs, and any LIAs or DPIAs you have run.

## Privacy by design and by default (Article 25)

Build privacy into the product. Default settings should be the least intrusive option. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3565-1-1" label="Article 25" />

The EDPB's <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en" target="_blank" rel="noopener noreferrer">Guidelines 4/2019 on Article 25</a> translate this into product-design terms. The lens for engineers and product managers:

- **Default off, not default on.** Newsletter opt-in. Public profiles. Optional tracking. All of these should be off until the user actively turns them on.
- **Collect less.** Every form field is a decision. Default to "do not collect" until somebody can name why it is needed.
- **Short retention.** Pick a number, write it down, automate the delete job. "Forever by accident" is not a retention period.
- **Separate accounts and admin controls.** Not everyone on the team needs the full customer list. Least privilege.
- **Pseudonymise where useful.** A customer-ID in analytics beats an email address.

### Worked example: Skyloop's new feature toggle

Skyloop ships a "share your achievements with friends" feature. The default for new sign-ups is **off**. A small in-app card explains what sharing means before they turn it on. The friends-list scope asks for the minimum: name and avatar, not full contacts. That is Article 25 in code.

## Joint controllers (Article 26)

If you and another company **both decide** what to do with the same data, you are joint controllers. You have to put an "arrangement" in writing that explains who handles what. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3631-1-1" label="Article 26" />

The arrangement has to make clear, among other things, who answers data-subject rights requests and who is the first contact point.

### Worked example: Quadrant and an analytics partner

Quadrant runs a joint webinar series with a partner. They share the registration list and both decide how to follow up. Both want to send their own marketing. That is joint controllership.

Their one-page arrangement says:

- Quadrant runs the registration form and sets the consent text.
- Both companies receive the list and can email registrants.
- Quadrant handles any DSAR that lands in either inbox.
- The privacy notice on the registration page names both companies.

Compare to: a Quadrant webinar where the partner gets a copy of the list to send a single thank-you email on Quadrant's behalf only. That is processor-controller, not joint.

## Processor contracts (Article 28)

If you hire a vendor to handle data on your behalf, you need a written contract (a "Data Processing Agreement" or DPA). <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3702-1-1" label="Article 28" />

Article 28(3) gives you the minimum content. The DPA must say that the processor:

- Acts only on the controller's written instructions.
- Makes sure its staff are bound by confidentiality.
- Applies appropriate security (Article 32).
- Does not engage another processor (sub-processor) without your authorisation.
- Helps you respond to DSARs.
- Helps you with breach notifications and DPIAs.
- Deletes or returns the data when the contract ends.
- Gives you the information you need to demonstrate compliance, and accepts audits.

Most reputable SaaS vendors publish a standard DPA on their website. You sign it, you file it, you write the date in your vendor register.

### Worked example: Florinha picking a new email tool

Florinha picks an EU-based email tool, "PostBolt." Her vetting checklist:

- DPA: yes, PostBolt publishes one. Florinha signs the version dated April 2025.
- Sub-processors: PostBolt lists eight (AWS Ireland, Cloudflare, a deliverability tool, a few support tools). The list is on a public URL Florinha bookmarks.
- Notice of sub-processor changes: 30 days, with the right to object.
- Where the data sits: EU (Ireland).
- Security: ISO 27001 certified, SOC 2 Type II report available.
- Breach notification: PostBolt notifies Florinha within 24 hours of becoming aware.
- Audit rights: a yearly summary of the SOC 2 report; on-site audits only if there has been a confirmed serious incident.

Florinha files the DPA, adds PostBolt to her vendor register (see ROPA below), and moves on. Total time spent: 45 minutes.

::: tip We have a full Playbook for this
**Playbook 3: Vet a new SaaS vendor in 30 minutes** is the operational version of this section, with a downloadable Excel vendor register. It lands after Module 10.
:::

## Sub-processors and the cascade (EDPB Opinion 22/2024)

Your processors usually rely on other companies (cloud hosts, deliverability tools, AI providers). Those are sub-processors. The 2024 EDPB Opinion 22/2024 clarified that the obligations cascade: every sub-processor on the chain has to be bound by the same data-protection terms as the original processor.

### Worked example: Aoife's Google Workspace

Aoife uses Google Workspace for client email.

- **Controller**: Aoife.
- **Processor**: Google (the Workspace service).
- **Sub-processor**: Google Cloud (the underlying infrastructure).

Aoife signs Google's Workspace DPA, accepts the published sub-processor list, and is done. She does not need a separate DPA with Google Cloud, because Google's DPA already passes the obligations down.

What she **does** need to do:

- Re-check the sub-processor list once a year.
- Note the international transfer mechanism (Standard Contractual Clauses + the EU-US Data Privacy Framework, see Module 8).

## Records of processing activities (Article 30, the "ROPA")

A written list of what you do with personal data. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3829-1-1" label="Article 30" />

There is an **under-250-employees myth** worth busting. Article 30(5) lets you skip the ROPA only if all three of these are true:

1. You have fewer than 250 employees, **and**
2. Your processing is occasional, **and**
3. Your processing is not likely to result in a risk to people, **and** does not involve special-category data or criminal-conviction data.

A 5-person SaaS that processes customer emails every day **does not qualify** for the exemption. Almost no business does. Just write the ROPA.

A useful starter ROPA has these columns:

| Column | What goes in it |
|---|---|
| Activity | "Customer order processing", "Newsletter", "Hiring", etc. |
| Purpose | One sentence |
| Lawful basis | One of the six from Module 4 |
| Data categories | Names, emails, addresses, etc. |
| People categories | Customers, employees, leads, etc. |
| Recipients | Internal team, vendors |
| International transfers | Country + transfer mechanism |
| Retention | "Until account closes + 30 days", "10 years for invoices", etc. |
| Security measures | Encryption, access controls, etc. |

If you are a processor (not a controller), Article 30(2) requires a similar but slightly different record. Most teams keep both views in one spreadsheet.

::: tip Excel template incoming
The Playbook 3 download (`vendor-register.xlsx`) doubles as a starter ROPA for the vendor-touching parts of your activity.
:::

## Main establishment (EDPB Opinion 04/2024)

If you operate across borders in the EU, your "main establishment" decides which national regulator is your lead. The 2024 EDPB Opinion 04/2024 tightened the criteria: it is the place where decisions about purposes and means are actually taken, not just where the HQ is registered on paper.

Why it matters: the lead regulator becomes your single point of contact for cross-border issues under the GDPR's one-stop-shop mechanism. Picking it wrong (or having no clear answer) means every regulator can come knocking on the same issue.

For most small EU businesses this is moot, because they operate from a single country. For multi-country teams it is worth a deliberate decision, written down.

## Common pitfalls

::: danger Four mistakes that show up in roughly half of all vendor-related fines
1. **No DPA at all.** "We thought the terms of service covered it." They do not. Article 28 is explicit: a separate contract with specific content.
2. **A copy-paste DPA that does not match the actual work.** A DPA that names "advertising services" when the vendor is your help desk is worse than no DPA at all, because it shows you did not read it.
3. **No ROPA, on the wrong assumption you are exempt.** The under-250-employees exemption is much narrower than people think. Just write it.
4. **A sub-processor nobody told you about.** Your processor must notify you of changes. If they do not, that is a contract breach AND your problem with the regulator.
:::

## Module 6 takeaways

- The controller decides why and how. The processor only follows the controller's instructions.
- Article 24: be in a position to demonstrate compliance.
- Article 25: build privacy in, default to least intrusive.
- Article 26: joint controllers need a written arrangement.
- Article 28: every processor needs a DPA with the eight Article 28(3) clauses.
- Sub-processors cascade. Their obligations match yours via the chain.
- Article 30 ROPA: almost every business needs one. The exemption is narrow.
- EDPB Opinion 04/2024: main establishment is decided by where decisions actually happen.

## Quick self-audit

- [ ] We can name our role (controller, joint controller, or processor) for each system we use.
- [ ] We have a signed DPA on file for every vendor that touches personal data.
- [ ] Each DPA we hold covers the eight Article 28(3) clauses.
- [ ] We have a written record of processing (a ROPA) that lists all our processing activities.
- [ ] We have a list of every sub-processor in the chain, and we re-check it at least yearly.
- [ ] Default settings in our product are the least intrusive option.
- [ ] We have an internal rule that no new vendor signs up before its DPA is on file.

## Source anchors

- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3491-1-1" label="Article 24 GDPR (controller responsibility)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3565-1-1" label="Article 25 GDPR (data protection by design and by default)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3631-1-1" label="Article 26 GDPR (joint controllers)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3702-1-1" label="Article 28 GDPR (processor)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e3829-1-1" label="Article 30 GDPR (records of processing)" />
- EDPB <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en" target="_blank" rel="noopener noreferrer">Guidelines 4/2019 on Article 25</a>
- EDPB <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en" target="_blank" rel="noopener noreferrer">Guidelines 07/2020 on controller and processor</a>
- EDPB Opinion 22/2024 (sub-processor obligations); EDPB Opinion 04/2024 (main establishment).

::: info Next up
Module 7 covers what "appropriate security" actually means and what to do in the first 72 hours after something goes wrong.
:::

<CtaBlock />
