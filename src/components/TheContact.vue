<script setup lang="ts">
    import { site } from '@/assets/js/siteData'
</script>

<template>
    <section class="u-margin-bottom-block">
        <div
             class="u-show-v-scroll u-flex u-flex-column u-flex-row@md u-flex-gap-block@to-md u-flex-gap@md u-flex-gap-block@lg u-align-center u-margin-bottom">
            <blockquote class="o-brand-copy u-show-v-scroll">
                Samenwerken begint <br>
                met een kop koffie <br>
                en een goed gesprek. <br>
                Dat is <strong>Koffie met Schaap</strong>
            </blockquote>
            <img class="c-flying-sheep u-show-v-scroll"
                 srcset="/img/coffee-256.png 1x, /img/coffee-256@2x.png 2x"
                 src="/img/coffee-256.png"
                 alt="Koffie met Schaap mascotte zweeft naar een kop koffie"
                 width="256"
                 height="192">

        </div>
        <div class="u-margin-bottom u-show-v-scroll">
            <span class="c-coffee-orb"></span>
            <p class="u-text-lg u-inline">Vanaf <strong>{{ site.available }}</strong> ben ik weer beschikbaar voor nieuwe
                opdrachten
            </p>
        </div>
        <div
             class="u-show-v-scroll u-margin-bottom u-flex-column@to-md u-flex-gap-double u-inline-flex u-flex-gap u-align-center">
            <a class="o-button u-no-underline"
               :href="`mailto:${site.email}`">Stuur mij een bericht</a>
            <span>Of bel <a class='u-no-underline'
                   :href="`tel:${site.phone}`">{{ site.phone }}</a></span>
        </div>
    </section>
</template>