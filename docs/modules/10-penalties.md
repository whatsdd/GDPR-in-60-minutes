---
title: "Module 10: Fines, Enforcement, and What to Read Next"
description: "How GDPR fines really work, three real enforcement stories, the 2025 EDPB focus, and where to go from here."
outline: deep
---

# Module 10: Fines, Enforcement, and What to Read Next

<VideoEmbed
  src="https://www.youtube-nocookie.com/embed/PLACEHOLDER_ID_MODULE_10"
  title="Module 10: Fines, Enforcement, and What to Read Next"
  timestamp="56:00 to 60:00"
  caption="The fines are not the only risk, but they are the loudest. How they really work, and three real cases."
/>

This is the final chapter of the core book. Fines get the headlines, but enforcement is broader than that: warnings, reprimands, processing bans, public communications. This chapter walks through how the financial side works, three real cases worth knowing, the 2025 enforcement focus, and a short reading list to keep you current.

The rules live in <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e6479-1-1" label="Articles 83 and 84 of the GDPR" />.

::: info Why this chapter matters
Fines are the loudest enforcement tool but not the only one. The reputational hit and the operational disruption from a public investigation usually cost more than the cheque itself. Knowing how the calculation works helps you have a calmer conversation with your board the day a complaint lands.
:::

## The two tiers of administrative fines (Article 83)

Two tiers, two caps. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e6479-1-1" label="Article 83" />

| Tier | Cap | Triggers |
|---|---|---|
| Lower tier (Art. 83(4)) | Up to **EUR 10 million** or **2% of global annual turnover**, whichever is **higher** | Mostly procedural failings: no ROPA, no DPA, no DPO when required, no DPIA when required, failure to notify a breach. |
| Upper tier (Art. 83(5)) | Up to **EUR 20 million** or **4% of global annual turnover**, whichever is **higher** | Substantive failings: no lawful basis, ignoring data-subject rights, unlawful international transfers, breaching the principles in Article 5. |

The "or" is **higher**, not lower. For a EUR 10 billion turnover company, the upper-tier cap is EUR 400 million, not EUR 20 million.

## How fines are actually calculated (EDPB Guidelines 04/2022)

The EDPB's <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-042022-calculation-administrative-fines-under-gdpr_en" target="_blank" rel="noopener noreferrer">Guidelines 04/2022 on the calculation of administrative fines</a> set out a five-step method that every supervisory authority now follows. In plain words:

1. **Classify the infringement** as lower-tier (Art. 83(4)) or upper-tier (Art. 83(5)).
2. **Identify the starting amount** based on the seriousness of the infringement and the size of the company (the EDPB tables give bands).
3. **Adjust for aggravating and mitigating factors** from Article 83(2): intent vs. negligence, prior infringements, cooperation, the categories of data affected, etc.
4. **Apply the legal maximum** (the cap from the table above).
5. **Sense-check for effectiveness, proportionality, and dissuasiveness.**

The output is a written reasoned decision. Most decisions are public. Reading three or four is a fast way to develop intuition for how this works in practice.

## Three real enforcement stories

### 1. CNIL against Google, December 2021 (cookie banner)

The French regulator (CNIL) fined Google EUR 150 million for making it harder to refuse cookies than to accept them. Users on google.fr and youtube.com could accept all cookies in one click but had to navigate several menus to refuse. The fairness leg of Article 5 and the consent rules in Articles 6 and 7 came into play.

The CNIL summary is at <a href="https://www.cnil.fr/en/cookies-google-fined-150-million-euros" target="_blank" rel="noopener noreferrer">cnil.fr</a>. A separate but related fine of EUR 60 million hit Meta on the same day for the same reason.

Take-away: cookie banner design is a fairness question, not just a consent question.

### 2. Garante against ChatGPT, March 2024

The Italian regulator (Garante) issued a temporary ban on ChatGPT in 2023 and, after investigation, fined OpenAI EUR 15 million in late 2024. Issues included no clear lawful basis for training data, transparency failures, and inadequate measures for children.

Take-away: training large models on scraped personal data is now a settled enforcement risk in Europe, not an open question. Lawful basis and transparency are the two pressure points.

### 3. Irish DPC against Meta, May 2023 (international transfers)

The Irish Data Protection Commission fined Meta EUR 1.2 billion (yes, billion) for transferring EU user data to the US under SCCs that the regulator considered inadequate given US surveillance law. The order also required Meta to suspend transfers within five months.

Take-away: Schrems II is not theory. The transfer-tool you sign matters and the supplementary measures are not optional for large flows.

## The 2025 EDPB Coordinated Enforcement Framework

Every year the EDPB picks a focus area and all the national regulators coordinate enforcement on that topic. **The 2025 focus is the right to erasure (Article 17)**.

What that means in practice for 2025 and into 2026:

- Expect more inquiries about deletion workflows.
- Expect questions about how you handle erasure across backups, logs, and processors.
- The findings will be summarised in a public EDPB report, which historically becomes a de-facto checklist.

If you do one thing because of this chapter: walk through Module 5 (Right of Erasure section) again, then run your own deletion test. Pick a test user, delete them, and look for them everywhere: production, backups, analytics warehouse, email tool, support tool. Where you can still find them, write it down and fix it.

## Member State criminal penalties (Article 84)

The GDPR lets each country layer its own criminal penalties on top of the administrative ones. <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e6534-1-1" label="Article 84" />

Examples:

- France's *Code pénal* punishes some data-protection breaches with up to five years' imprisonment and EUR 300,000 in fines for individuals.
- Germany's *Bundesdatenschutzgesetz* adds criminal sanctions for certain wilful misuse.
- Most countries reserve criminal sanctions for the worst cases (deliberate misuse, identity theft, large-scale unlawful sale of data).

Operational point: criminal liability usually attaches to **individuals**, not just the company. The CEO, CISO, or the person who actively did the wrong thing can be personally on the hook.

## Where to go next

You have reached the end of the book. To stay current:

- **The text itself.** Bookmark <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer">EUR-Lex Reg. (EU) 2016/679</a>. Every claim on this site links into it.
- **EDPB updates.** The <a href="https://www.edpb.europa.eu/news/news_en" target="_blank" rel="noopener noreferrer">EDPB news page</a> publishes guidelines, opinions, and enforcement summaries.
- **Your national supervisory authority.** Most publish a newsletter or RSS feed. The CNIL and ICO have particularly readable English-language updates.
- **The Resources page on this site** at [/guide/resources](/guide/resources) lists the EDPB guidelines and national authorities you will need most.
- **The Playbooks**, shipping after this chapter, give you ready-to-use Excel templates for DSARs, breach response, and vendor vetting.
- **Noor's channel.** New videos cover fresh cases and EDPB opinions as they drop. <a href="https://www.youtube.com/@GDPRbyN00R" target="_blank" rel="noopener noreferrer">youtube.com/@GDPRbyN00R</a>.

## Common pitfalls

::: danger Four mistakes that come up when the regulator does show up
1. **Treating fines as the only risk.** Reputational damage, operational disruption, and lost deals usually cost more than the cheque.
2. **Ignoring small national authorities.** A complaint to your country's regulator triggers exactly the same five-step calculation as a complaint to the CNIL.
3. **No remediation plan after an inquiry.** Authorities reduce fines for genuine cooperation and a credible remediation plan. They increase them for stonewalling.
4. **No internal "lessons learned" loop.** Each incident, fine, or complaint should produce a written change to your policies, training, or product. If nothing changes, the next incident is bigger.
:::

## Module 10 takeaways

- Two tiers of fines: EUR 10m / 2% lower, EUR 20m / 4% upper. The higher of the two figures is the cap.
- The EDPB Guidelines 04/2022 five-step method is now the standard calculation everywhere.
- Three landmark cases worth knowing: CNIL Google (2021), Garante ChatGPT (2024), Irish DPC Meta (2023).
- The 2025 EDPB enforcement focus is the right to erasure. Test your deletion workflow now.
- Criminal penalties under Article 84 can attach to individuals.
- Cooperation reduces fines. Stonewalling increases them.

## Final self-audit (the whole book)

This is the cumulative check. If you can tick most of these, you have a real privacy programme.

- [ ] We have a privacy notice that meets Article 13/14 minimum content.
- [ ] We can name a lawful basis for every batch of personal data we hold.
- [ ] We have a written ROPA covering all activities.
- [ ] We have a signed DPA on file for every vendor that touches personal data.
- [ ] We know which transfer tool covers every system that processes data outside the EEA, and we have a TIA for the non-adequacy ones.
- [ ] We have a runbook for handling DSARs in the one-month deadline.
- [ ] We have a one-page incident response plan and have run at least one tabletop in the past 12 months.
- [ ] We have a DPIA on file for at least one recent high-risk project.
- [ ] We have decided whether we need a DPO, and we have written down why or why not.
- [ ] We know which national authority is our lead and how to reach them.

## Source anchors

- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e6479-1-1" label="Article 83 GDPR (administrative fines)" />
- <ArticleRef href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e6534-1-1" label="Article 84 GDPR (national criminal penalties)" />
- EDPB <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-042022-calculation-administrative-fines-under-gdpr_en" target="_blank" rel="noopener noreferrer">Guidelines 04/2022 on calculation of administrative fines</a>
- EDPB <a href="https://www.edpb.europa.eu/our-work-tools/general-guidance/edpb-coordinated-enforcement-actions_en" target="_blank" rel="noopener noreferrer">Coordinated Enforcement Framework 2025 (right to erasure)</a>
- CNIL deliberation against Google, December 2021. <a href="https://www.cnil.fr/en/cookies-google-fined-150-million-euros" target="_blank" rel="noopener noreferrer">Public summary</a>.
- Garante decision on OpenAI / ChatGPT, December 2024.
- Irish DPC decision against Meta IE, May 2023.

::: info You finished the core book
Three Playbook chapters follow: handling a DSAR in 30 days, responding to a breach in 72 hours, and vetting a new SaaS vendor in 30 minutes. Each ships with a downloadable Excel template.
:::

<CtaBlock />
