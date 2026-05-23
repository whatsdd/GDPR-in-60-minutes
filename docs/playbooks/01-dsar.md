---
title: "Playbook 1: Handle a DSAR in 30 Days"
description: "A step-by-step runbook for handling a Data Subject Access Request from intake to delivery, with a downloadable Excel log."
outline: deep
---

# Playbook 1: Handle a DSAR in 30 Days

A customer just emailed asking for all the data you hold on them. You have **30 days**. This Playbook is the operational runbook for getting it done without panic, paired with a downloadable Excel template you can drop into your team's shared drive.

::: tip Background reading
This Playbook turns the theory in [Module 5 (What People Can Ask You)](/modules/05-data-subject-rights) into a runbook. You do not have to read Module 5 first, but it explains the legal "why" behind every step here.
:::

## Before you start

Five things to put in place once, so the next DSAR is faster.

1. **One inbox** for DSARs (e.g. `privacy@yourcompany.com`). Advertise it in your privacy notice.
2. **An owner.** One named person handles the DSAR or coordinates the handover. Not "the privacy team" in the abstract.
3. **A systems list.** Every place customer data lives: product DB, help-desk, email tool, billing, analytics, backups.
4. **A redaction rule.** Decide in advance how you redact third-party names and identifiers from a DSAR bundle.
5. **The DSAR log.** Use the Excel template below or your own equivalent.

## The runbook

### Day 0: Intake

The request lands in the privacy inbox. The owner:

- Creates a ticket / row in the DSAR log.
- Sends an auto-reply within 24 hours confirming receipt and explaining the timeline.
- Notes the request type (Access, Erasure, Rectification, Portability, Object, Restriction, Information, Automated decision).

::: tip Auto-reply template
"Hi [name], we received your request on [date]. We will get back to you within one calendar month, by [date]. If we need more time to handle a complex request, we will let you know within that first month."
:::

### Day 1: Verify identity

The aim is proportionate, not paranoid. Use the matrix:

| Request type | Risk | Identity check |
|---|---|---|
| Right of access from the email on file | Low | Reply from a separate channel asking the user to click a one-time link in their account, or to confirm a recent unique fact (last order date). |
| Right of access where the email does not match the account | Medium | Ask for two pieces of self-asserted info that cross-reference (account ID + recent transaction date). |
| Erasure or rectification of sensitive data | High | Magic link plus a recent verifiable detail. Document the verification. |
| Anyone asking on someone else's behalf (parent, lawyer) | Highest | Written authority from the data subject and ID of the requester. |

Do not demand a passport or utility bill for routine requests. That is itself an Article 12 violation.

### Days 2 to 14: Gather the data

Walk your systems list. For each system:

- Search for the user.
- Export the relevant fields.
- Note in the DSAR log which system was searched and what was found.

Cover everything that holds personal data: production database, help-desk, email-marketing tool, billing, support tickets, analytics warehouse, customer-success notes, **backups if practical**, and any spreadsheets one of your colleagues maintains on the side.

Common misses:

- Slack DMs and channel mentions of the customer.
- Customer feedback forms.
- Old call recordings.
- The "leads" CSV in someone's Dropbox.

### Days 14 to 21: Review and redact

Two passes:

- **Completeness pass.** Did we cover every system? Re-check the systems list.
- **Redaction pass.** Look for third-party personal data in the bundle. Names of your employees who handled the user's tickets, email addresses of other customers, internal comments mentioning specific people. Redact these.

Note every redaction in the DSAR log. The regulator may ask later why something was withheld.

### Days 21 to 28: Deliver

Send the bundle to the user. A common shape:

- A short cover letter in plain language, listing what is inside and pointing to the privacy notice for the legal bits.
- A ZIP file (or password-protected PDF) with the data, organised by system.
- A reminder of the user's other rights (rectification, erasure) and how to use them.

Send through a secure channel. If you ask for a delivery password, share it on a different channel from the file.

### Day 28 to 30: Close the loop

- Mark the DSAR log entry as fulfilled.
- File the bundle and cover letter for your records (typically 1 to 3 years).
- Add the systems-list refresh to your quarterly to-do if anything was missed.

### When you need an extension

Article 12(3) allows up to **two extra months** for genuinely complex requests. You must tell the user within the first month. Don't quietly slip past day 30.

## The Excel template

[**Download dsar-log.xlsx**](/checklists/dsar-log.xlsx)

Columns: Request ID, Received date, Type, Requester name, Requester contact, Identity verified, Systems searched, Bundle delivered date, Days elapsed, Redactions made, Outcome, Notes.

The template includes one example row in italic grey so you can see the format, plus a footer link back to this page. Use one row per request. Sort by Received date.

## A worked example: Quadrant

(Same Quadrant we have been using since Module 4.)

A free-tier user emails `privacy@quadrant.example` saying: "Send me everything you have on me, please."

| Day | Action |
|---|---|
| 0 | Ticket opened. Auto-reply sent. DSAR log row created: `DSAR-2026-007`. |
| 1 | Magic-link identity check. User confirms via account. |
| 2-12 | Engineering exports from the product DB, help-desk SaaS, and the email tool. CSVs saved to a shared folder. |
| 12 | Privacy lead reviews. Two redactions needed: an internal employee name in an old ticket, and a third-party email referenced in a comment. |
| 15 | Cover letter drafted. ZIP packaged with three CSVs. |
| 17 | Bundle sent. Identity-verified link expires in 7 days. |
| 18 | Log row marked "Fulfilled". Notes: "Two third-party redactions, both noted in cover letter." |

Cycle time: 18 days. Plenty of headroom.

## What to do if it goes wrong

- **The user complains the bundle is incomplete.** Take it seriously. Re-walk the systems list. If something was missed, supplement promptly and acknowledge.
- **The user wants the redactions undone.** You can decline if the redactions protect third-party rights, but explain why in plain language.
- **The request is mass-produced ("send everything on me, my family, and my colleagues").** You can refuse or charge a reasonable fee for "manifestly unfounded or excessive" requests under Article 12(5). Document the reasons.
- **You will miss the 30 days.** Notify the user before the deadline, explain why, and give a realistic new date. Then prioritise.
- **The user files a complaint with the regulator.** Cooperate. Your DSAR log is your best evidence that the process was followed. Reduces fines significantly.

## When to call for help

If a DSAR involves a complex legal claim, a high-profile complainant, a journalist, or sensitive special-category data, talk to a privacy lawyer in your country **before** you respond. A 30-minute call early is cheaper than a wrong reply later.

<CtaBlock />
