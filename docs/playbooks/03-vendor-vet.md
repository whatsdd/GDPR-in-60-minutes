---
title: "Playbook 3: Vet a New SaaS Vendor in 30 Minutes"
description: "A focused 30-minute checklist for assessing a new SaaS vendor against the GDPR, with a downloadable Excel vendor register."
outline: deep
---

# Playbook 3: Vet a New SaaS Vendor in 30 Minutes

You are about to sign up for a new SaaS tool that will touch customer data. Email, analytics, CRM, support, scheduling, payments. This Playbook is the focused 30-minute checklist for getting the GDPR side right before the credit card goes in. It is the operational version of [Module 6 (When You Hire Vendors)](/modules/06-controller-processor), paired with a downloadable Excel vendor register that doubles as the vendor portion of your ROPA.

::: tip Background reading
Module 6 explains the legal "why" behind Article 28 DPAs and the sub-processor cascade. You do not have to read it first, but it gives the legal context for every step.
:::

## Before you start

Three things to put in place once, so each vendor takes 30 minutes instead of two hours.

1. **A standard vendor questionnaire** (10 to 15 questions, see below).
2. **A red-flag list** for the DPA: phrases that should make you push back.
3. **The vendor register.** Use the Excel template below or your own equivalent.

## The 30-minute runbook

### Minutes 0 to 5: Set the role and the scope

Answer in writing, in the vendor register row:

- **Vendor name** and **Service** (one line each).
- **Role**: Processor, Joint controller, or Separate controller?
- **Data categories**: what will the vendor see? Email addresses, names, payment data, special-category data?
- **Lawful basis**: which of the six from Module 4 covers the activity this vendor supports?

If you cannot answer these five in five minutes, stop. You do not yet know enough about what the vendor will do to vet them.

### Minutes 5 to 15: The DPA review

Open the vendor's Data Processing Agreement (usually a public PDF or a click-through during signup). Check for the eight Article 28(3) clauses:

| Clause | Watch for |
|---|---|
| Process only on documented instructions | Should not say "for our own purposes too." |
| Confidentiality of staff | Standard. Reject if absent. |
| Article 32 security measures | A summary table or a link to a security page. |
| Sub-processor authorisation | Public list + notice of changes + your right to object. |
| Help with DSARs | Concrete commitment, not "we may consider." |
| Help with breach notification | A timeline (24 hours typical). |
| Help with DPIAs | Standard. |
| Delete or return data at end | And the timeline. |

### Red flags in the DPA

::: danger Push back or walk away if you see any of these
- "We may use the data for our own purposes, including marketing or training models." (Makes them a separate controller, not a processor.)
- "Sub-processors may be added without notice." (Breaks your ability to do a Transfer Impact Assessment.)
- "Breach notification within 7 days." (You have 72 hours; you need notice in 24.)
- "Data will be returned in our proprietary format only." (Locks you in and may break Article 20 portability for your users.)
- "Audits subject to our prior approval and our terms." (Reasonable scoping is fine; veto power is not.)
- No DPA at all, just standard terms. (Article 28 is explicit. Walk away.)
:::

### Minutes 15 to 22: Transfers and security

Check, in the vendor register row:

- **Country of processing.** Where do the servers live?
- **Transfer mechanism.** If outside the EEA: adequacy decision, 2021 SCCs, BCRs?
- **For US vendors**: is the company self-certified to the EU-US Data Privacy Framework? Check at <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer">dataprivacyframework.gov</a>.
- **Security baseline.** ISO 27001:2022 certification? SOC 2 Type II report? At minimum, a public security page.
- **Encryption.** Data at rest and in transit, both. Bring-your-own-key (BYOK) if the data is sensitive.

If the answers are not all green, do a quick **Transfer Impact Assessment** before signing. The TIA can be one paragraph for low-risk vendors and a page for the riskier ones.

### Minutes 22 to 28: Sub-processors

Open the vendor's sub-processor list (every reputable vendor has one). Skim for:

- **Where the sub-processors are based.** A sub-processor in the US is a transfer leg too.
- **Any sub-processor you would not approve directly.** If the vendor uses a small unknown analytics tool with no DPA, that is your problem too.
- **Notice period for changes.** 30 days is standard. Less than 15 is a yellow flag.

Add the sub-processor list to your file. Bookmark the URL for re-checks.

### Minute 28 to 30: Sign, log, and schedule the review

- Sign the DPA (or click through). File a PDF copy.
- Complete the vendor register row, especially **DPA signed date** and **Next review date** (12 months out is a good default).
- Set a calendar reminder for the review.

You are done.

## The Excel template

[**Download vendor-register.xlsx**](/checklists/vendor-register.xlsx)

Columns: Vendor name, Service, Role, Country of processing, Sub-processors, DPA signed date, DPA expiry, Data categories, Lawful basis, Transfer mechanism, Security reviewed, Last review date, Next review date, Risk rating, Owner, Status.

Use one row per vendor. The vendor register doubles as the vendor portion of your Article 30 ROPA, so keeping it current is two birds with one spreadsheet.

## A worked example: Florinha picks a new email tool

(Same Florinha we have been using since Module 4.)

Florinha is replacing her transactional email tool. She picks **PostBolt** (an EU-based email vendor).

| Minutes | Action |
|---|---|
| 0 to 5 | Vendor: PostBolt. Service: Transactional email. Role: Processor. Data: customer email + name. Lawful basis: Contract necessity (order confirmation emails). |
| 5 to 15 | DPA reviewed: all eight clauses present. No red flags. Signed April 2025 version. |
| 15 to 22 | Country: Ireland (EU). Transfer mechanism: none needed. Security: ISO 27001 certified, SOC 2 Type II summary available. Encryption: yes, at rest and in transit. |
| 22 to 28 | Sub-processors: AWS Ireland, Cloudflare, two deliverability tools. All listed publicly. 30 days notice of changes with right to object. |
| 28 to 30 | DPA filed. Vendor register row added: `Vendor: PostBolt, DPA signed 2025-04-12, Next review 2026-04-12`. Calendar reminder set. |

Total elapsed: 26 minutes. Florinha goes back to packing plants.

## What to do if it goes wrong

- **The vendor refuses to sign your standard DPA.** Most reputable SaaS vendors only offer their own. Read it carefully against the eight clauses. If theirs covers the same ground (even with different wording), it is fine.
- **The vendor's DPA is much shorter than yours.** That can be a sign they skipped clauses. Compare line by line.
- **The vendor is the only option in the market.** Document the choice in your vendor register with a short risk note. Add belt-and-braces measures (encryption, minimisation) on your side. Plan for a future migration.
- **You inherited a vendor with no DPA.** Stop using them for personal data, or get a DPA signed before you keep using them. Do not paper it over.
- **The vendor changes sub-processors and you object.** Article 28(2) gives you the right to object. Most contracts also let you terminate without penalty if you do.

## When to call for help

For any vendor that will process:

- Special-category data (health, biometric, financial in regulated contexts),
- More than 100,000 records,
- Data of EU citizens from a US-based vendor not on the DPF list,
- Or anything for a regulated industry (fintech, health, education),

talk to a privacy lawyer **before** signing. The 30 minutes saved by skipping that call is the most expensive 30 minutes in your year.

<CtaBlock />
