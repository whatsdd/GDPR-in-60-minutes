<template>
  <div class="video-embed">
    <div class="video-embed__wrapper">
      <iframe
        :src="src"
        :title="title"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div v-if="timestamp || caption" class="video-embed__meta">
      <span v-if="timestamp" class="video-embed__ts">⏱ {{ timestamp }}</span>
      <span v-if="caption" class="video-embed__caption">{{ caption }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'GDPR companion video' },
  timestamp: { type: String, default: '' },
  caption: { type: String, default: '' }
})
</script>

<style scoped>
.video-embed {
  margin: 1.5rem 0;
}
.video-embed__wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.video-embed__wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.video-embed__meta {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  align-items: center;
}
.video-embed__ts {
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
</style>
