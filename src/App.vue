<script setup lang="ts">
    import { site } from '@/assets/js/siteData'
    import { useHead } from '@unhead/vue'
    import { useScrollAnimation } from '@/assets/js/scrollAnimation'
    import TheHeader from './components/TheHeader.vue';
    import TheIntro from './components/TheIntro.vue';
    import TheAbout from './components/TheAbout.vue';
    import TheFooter from './components/TheFooter.vue';
    import TheServices from './components/TheServices.vue';
    import TheTestimonials from './components/TheTestimonials.vue';
    import TheContact from './components/TheContact.vue';

    useScrollAnimation()

    useHead({
        title: site.title,
        meta: [{ name: 'description', content: site.description },
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#ffb600' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    })
</script>

<template>
    <TheHeader />
    <div class="o-page-wrap">
        <TheIntro />
        <TheAbout />
        <TheServices />
        <TheTestimonials />
        <TheContact />
    </div>
    <TheFooter />
</template>