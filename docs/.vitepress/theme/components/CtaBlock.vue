<template>
  <aside class="cta-block" :aria-label="`Connect with ${contact.creatorName}`">
    <div class="cta-block__inner">
      <div class="cta-block__text">
        <h3 class="cta-block__title">Got a question about your own setup?</h3>
        <p class="cta-block__lede">
          This site is the written sidekick to the YouTube channel
          <strong>{{ contact.channelName }}</strong> by {{ contact.creatorName }}.
          Watch the short videos, send her a message, or grab a free chat to talk through your situation.
        </p>
      </div>
      <div class="cta-block__actions">
        <a class="cta-btn cta-btn--primary" :href="contact.youtube" target="_blank" rel="noopener noreferrer">
          ▶ Watch on YouTube
        </a>
        <a class="cta-btn" :href="contact.linkedin" target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
        <a class="cta-btn cta-btn--ghost" :href="contact.consultation" target="_blank" rel="noopener noreferrer">
          Book a free consultation
        </a>
      </div>
    </div>
    <p class="cta-block__fineprint">
      Educational content. Not legal advice. For binding interpretations, consult qualified counsel or your supervisory authority.
    </p>
  </aside>
</template>

<script setup>
import { contact } from '../data/contact.js'
</script>

<style scoped>
.cta-block {
  margin: 3rem 0 1.5rem;
  padding: 1.75rem 1.75rem 1.25rem;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}
.cta-block__inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
@media (min-width: 720px) {
  .cta-block__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}
.cta-block__title {
  margin: 0 0 0.4rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}
.cta-block__lede {
  margin: 0;
  font-size: 0.97rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  max-width: 48ch;
}
.cta-block__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}
.cta-btn:hover {
  transform: translateY(-1px);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.cta-btn--primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}
.cta-btn--primary:hover {
  background: var(--vp-c-brand-2);
  color: var(--vp-c-bg);
}
.cta-btn--ghost {
  background: transparent;
}
.cta-block__fineprint {
  margin: 1.1rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}
</style>
