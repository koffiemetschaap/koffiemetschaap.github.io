<script setup lang="ts">
    import { site } from '@/assets/js/siteData'
</script>
<template>
    <footer class="c-page-footer o-page-wrap">
        <div class="c-page-footer__container">
            <p>
                Kanaalstraat 69C <br>
                3531CB Utrecht <br>
                KVK: 80026362 <br>
                BTW: NL003382661B59
            </p>
            <p>
                &#169; 2023 <strong class="o-brand-copy">{{ site.short_name }}</strong>
            </p>
            <div>
                <ul class="u-reset-list u-inline-flex u-flex@md u-flex-gap u-justify-end@md u-margin-bottom-body">
                    <li>

                        <a class="u-no-underline"
                           href="https://www.linkedin.com/in/vue3/"
                           rel="noreferrer"
                           target="_blank"
                           title="Externe link naar LinkedIn van Wouter Schaap"><i class="icon-linkedin icon--lg"></i><span
                                  class="u-screen-reader-text">(Opent in een nieuw venster)</span></a>
                    </li>
                    <li>

                        <a class="u-no-underline"
                           href="https://open.spotify.com/playlist/35z62N0d9uwsoNHFXUrGeK?si=8c08ae4b075d4783"
                           rel="noreferrer"
                           target="_blank"
                           title="Externe link naar Spotify playlist van Koffie met Schaap"><i
                               class="icon-spotify icon--lg"></i><span class="u-screen-reader-text">(Opent in een nieuw
                                venster)</span></a>
                    </li>
                </ul>
                <p>
                    <a href="/files/CV_2022.pdf"
                       title="Link naar pdf met mijn CV"
                       target="_blank">CV</a><br>
                    <a href="https://drive.google.com/file/d/1rqmfB-mn-MZ3QplwU0nnHSTqiGgNzbmc/view?usp=sharing"
                       title="Link naar pdf met mijn Portfolio"
                       target="_blank">Portfolio</a><br>
                    <a href="/files/algemene_voorwaarden.pdf"
                       title="Link naar pdf met algemene voorwaarden"
                       target="_blank">Algemene voorwaarden</a>
                </p>
            </div>
        </div>
    </footer>
</template>