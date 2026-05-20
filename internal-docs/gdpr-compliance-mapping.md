# GDPR Compliance Mapping

> Internal tracking file. Maps each site section to its primary official source (EUR-Lex Article / Recital, EDPB guideline).
> Every regulatory claim in user-facing pages must trace back to a row in this table before publication.

Last updated: 2026-05-20

## Primary source policy

1. **Tier 1 (always cite when claim is regulatory)**: EUR-Lex consolidated text of Regulation (EU) 2016/679.
   Root URL: https://eur-lex.europa.eu/eli/reg/2016/679/oj
2. **Tier 2 (cite for interpretation, guidelines, opinions)**: European Data Protection Board (EDPB) adopted guidelines, recommendations, and opinions.
   Root URL: https://www.edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en
3. **Tier 3 (cite only as supplement)**: National supervisory authority guidance (CNIL, ICO pre-Brexit, BfDI, Garante, etc.). Never the sole source for a claim.
4. **Forbidden as primary source**: blog posts, news articles, vendor white papers, AI-generated summaries.

## Module → Article mapping

| Module | Section topic | Primary GDPR Article(s) | Recital(s) | EDPB guideline reference |
|---|---|---|---|---|
| 1. Foundations | Subject matter and objectives | Art. 1 | Rec. 1–4 | — |
| 1. Foundations | Material scope | Art. 2 | Rec. 14–21 | — |
| 1. Foundations | Territorial scope | Art. 3 | Rec. 22–25 | EDPB Guidelines 3/2018 on Territorial Scope |
| 2. Definitions | Personal data, processing, controller, processor, consent, etc. | Art. 4 | Rec. 26–37 | EDPB Guidelines 07/2020 on concepts of controller and processor |
| 3. Principles | Lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, accountability | Art. 5 | Rec. 39 | — |
| 4. Lawful bases | Lawfulness of processing | Art. 6 | Rec. 40–50 | EDPB Guidelines 2/2019 on Art. 6(1)(b); 8/2020 on targeting of social media users |
| 4. Lawful bases | Conditions for consent | Art. 7 | Rec. 32, 42, 43 | EDPB Guidelines 05/2020 on consent |
| 4. Lawful bases | Children's consent | Art. 8 | Rec. 38 | — |
| 4. Lawful bases | Special categories | Art. 9 | Rec. 51–56 | — |
| 4. Lawful bases | Criminal convictions data | Art. 10 | Rec. 50 | — |
| 5. Data subject rights | Transparent information | Art. 12 | Rec. 58–60 | EDPB Guidelines on transparency (WP260 endorsed) |
| 5. Data subject rights | Information to be provided | Art. 13–14 | Rec. 60–62 | — |
| 5. Data subject rights | Right of access | Art. 15 | Rec. 63–64 | EDPB Guidelines 01/2022 on the right of access |
| 5. Data subject rights | Right to rectification | Art. 16 | Rec. 65 | — |
| 5. Data subject rights | Right to erasure ("to be forgotten") | Art. 17 | Rec. 65–66 | — |
| 5. Data subject rights | Right to restriction | Art. 18 | Rec. 67 | — |
| 5. Data subject rights | Right to data portability | Art. 20 | Rec. 68 | EDPB Guidelines on the right to data portability (WP242 endorsed) |
| 5. Data subject rights | Right to object | Art. 21 | Rec. 69–70 | — |
| 5. Data subject rights | Automated decisions, profiling | Art. 22 | Rec. 71–72 | EDPB Guidelines on automated decision-making (WP251 endorsed) |
| 6. Controller & processor | Responsibility of the controller | Art. 24 | Rec. 74 | — |
| 6. Controller & processor | Data protection by design and default | Art. 25 | Rec. 78 | EDPB Guidelines 4/2019 on Art. 25 |
| 6. Controller & processor | Joint controllers | Art. 26 | Rec. 79 | — |
| 6. Controller & processor | Processor obligations | Art. 28 | Rec. 81 | EDPB Guidelines 07/2020 |
| 6. Controller & processor | Records of processing activities | Art. 30 | Rec. 82 | — |
| 7. Security & breach | Security of processing | Art. 32 | Rec. 83 | — |
| 7. Security & breach | Notification of breach to supervisory authority | Art. 33 | Rec. 85–86 | EDPB Guidelines 9/2022 on personal data breach notification |
| 7. Security & breach | Communication of breach to data subject | Art. 34 | Rec. 86–88 | EDPB Guidelines 9/2022 |
| 8. International transfers | General principle | Art. 44 | Rec. 101 | — |
| 8. International transfers | Adequacy decisions | Art. 45 | Rec. 103–107 | — |
| 8. International transfers | Appropriate safeguards (SCCs, BCRs) | Art. 46 | Rec. 108–109 | EDPB Recommendations 01/2020 on supplementary measures |
| 8. International transfers | Derogations | Art. 49 | Rec. 111–115 | EDPB Guidelines 2/2018 on derogations under Art. 49 |
| 9. DPO & DPIA | Data Protection Impact Assessment | Art. 35 | Rec. 84, 89–93 | EDPB Guidelines on DPIA (WP248 endorsed) |
| 9. DPO & DPIA | Prior consultation | Art. 36 | Rec. 94 | — |
| 9. DPO & DPIA | Designation of the DPO | Art. 37 | Rec. 97 | EDPB Guidelines on DPOs (WP243 endorsed) |
| 9. DPO & DPIA | Position and tasks of the DPO | Art. 38–39 | Rec. 97 | — |
| 10. Penalties | General conditions for administrative fines | Art. 83 | Rec. 148–150 | EDPB Guidelines 04/2022 on calculation of fines |
| 10. Penalties | Penalties | Art. 84 | Rec. 152 | — |

## Citation format used in user pages

In markdown, the `<ArticleRef>` component renders an EUR-Lex pill:

```vue
<ArticleRef
  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e1888-1-1"
  label="Article 5 GDPR"
/>
```

Plain text mentions still acceptable inline (e.g., "Article 5(1)(c)"), but every regulatory page must include at least one `<ArticleRef>` pointing to the canonical source.

## Verification workflow

Before any module page moves from 🟡 to 🟢 in `content-registry.md`:

- [ ] Every Article or Recital number cited has a matching row in this file.
- [ ] Every `<ArticleRef>` link opens to the correct CELEX anchor on EUR-Lex.
- [ ] If an EDPB guideline is mentioned, the link points to the official EDPB publication page (PDF or HTML), not a mirror.
- [ ] No fine amount, deadline, or threshold is stated without a Tier-1 citation.
