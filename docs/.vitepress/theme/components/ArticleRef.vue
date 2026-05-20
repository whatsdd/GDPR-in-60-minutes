<template>
  <a class="article-ref" :href="href" target="_blank" rel="noopener noreferrer">
    <span class="article-ref__badge">EUR-Lex</span>
    <span class="article-ref__label">{{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<style scoped>
.article-ref {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--vp-c-brand-soft);
  transition: background 0.2s ease;
}
.article-ref:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
.article-ref__badge {
  font-size: 0.7rem;
  font-weight: 700;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  letter-spacing: 0.04em;
}
</style>
