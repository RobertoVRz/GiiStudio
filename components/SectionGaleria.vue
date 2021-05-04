<template>
    <section class="Galeria bg-black pt-10" id="galeria">
        <h1 class="text-white ml-10 mb-10">/ Galería de Arte</h1>
        <div class="flex justify-center items-center py-40 md:py-64">
            <h1 class="Galeria__prox text-white">PRÓXIMAMENTE</h1>
        </div>
    </section>
</template>
<script>
import video from "../assets/video/giistore.mp4";
export default {
    data() {
        return {
            video: video
        };
    },
    methods: {}
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Galeria {
    height: 100%;
    &__prox {
        font-size: 1.5rem;
        @include screen(tablet) {
            font-size: 5rem;
        }
    }
}
</style>
