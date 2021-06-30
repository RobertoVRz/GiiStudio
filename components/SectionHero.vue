<template>
    <section class="hero">
        <video-background
            overlay="linear-gradient(0deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.42))"
            :src="video"
            style="width: 100vw; height: 100vh;"
        >
            <div class="h-full flex justify-center items-center">
                <h1 class="hero__title text-white">Gii Studio</h1>
            </div>
        </video-background>
    </section>
</template>
<script>
import video from "@/assets/video/video.mp4";
export default {
    data() {
        return {
            video
        };
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.hero {
    &__title {
        font-size: 3rem;
        @include screen(tablet) {
            font-size: 8rem;
        }
    }
}
</style>
