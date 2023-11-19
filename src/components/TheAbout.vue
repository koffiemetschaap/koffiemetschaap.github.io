<script setup lang="ts">
    /// <reference types="vite/client" />
    /// <reference types="vite-svg-loader" />
    import ritualsSvg from '@/assets/svg/rituals.svg?component'
    import shoebySvg from '@/assets/svg/shoeby.svg?component'
    import nsSvg from '@/assets/svg/ns.svg?component'
    import dsSvg from '@/assets/svg/ds.svg?component'
    import briteSvg from '@/assets/svg/brite.svg?component'
    import corioSvg from '@/assets/svg/corio.svg?component'
</script>
<template>
    <section class="c-about u-margin-bottom-block">
        <div class="c-about__copy u-show-v-scroll">
            <p class="u-margin-bottom">
                <strong class="o-brand-copy"> In het kort over mij</strong><br />
                Allereerst welkom. De afgelopen 9 jaar heb ik voor veel
                verschillende bedrijven in internationale teams gewerkt als
                Front-end developer. In 2020 ben ik als zelfstandig ondernemer
                begonnen in Utrecht om meer vrijheid en een betere werk prive balans
                te hebben.
            </p>
            <p>
                Mijn focus ligt op het maken van mooie dingen. Dat doe ik in mijn
                werk door mijn kennis van CSS te combineren met mijn interesse voor
                toegankelijkheid en design. Ik geloof dat de beste
                gebruikerservaring ontstaat als een website niet alleen goed, snel
                en mooi werkt, maar ook voor iedereen toegankelijk is.
            </p>
        </div>
        <div class="c-about__companies">
            <p class="u-show-v-scroll u-margin-bottom">
                In dienstverband, gedetacheerd en als freelancer heb ik gewerkt voor
                o.a.
            </p>
            <div class="c-logo-grid">
                <ritualsSvg />
                <shoebySvg />
                <nsSvg />
                <briteSvg />
                <corioSvg />
                <dsSvg />
            </div>
        </div>
    </section>
</template>