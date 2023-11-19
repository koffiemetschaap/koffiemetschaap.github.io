<script setup lang="ts">
    import { site } from '@/assets/js/siteData'
</script>

<template>
    <header class="c-page-header o-page-wrap u-margin-bottom">
        <div class="c-page-header__container">
            <div class="c-brand">

                <img class="c-brand__logo"
                     srcset="/img/logo-64.png 1x, /img/logo-64@2x.png 2x"
                     src="/img/logo-64.png"
                     :alt="`Logo van ${site.title}`"
                     width="64"
                     height="64">
                <h1 class="c-brand__title o-brand-copy">{{ site.short_name }}</h1>
            </div>
            <span class="u-flex u-flex-column@to-md u-flex-gap u-align-end@md">
                <span><i class="icon-paper-plane"></i> <a :href="`mailto:${site.email}`">{{ site.email }}</a></span>
                <span><i class="icon-phone-alt"></i> <a class="u-no-underline"
                       :href="`tel:${site.phone}`">{{ site.phone }}</a></span>
            </span>
        </div>
    </header>
</template>