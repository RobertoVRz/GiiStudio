<template>
    <section
        class="SeccVideo  bg-black flex flex-col justify-between py-10 md:py-20 md:flex-row"
        id="video"
    >
        <div class="SeccVideo__optionsDiv md: pl-10">
            <h1 class="text-white">/Video</h1>
            <br /><br />
            <ul class="text-white pl-5">
                <li class="cursor-pointer" @click="changeVideo(1)">
                    Demo Reel
                </li>
                <li class="cursor-pointer" @click="changeVideo(2)">
                    Comerciales
                </li>
                <li class="cursor-pointer" @click="changeVideo(3)">Accion</li>
                <li class="cursor-pointer" @click="changeVideo(4)">Video</li>
                <li class="cursor-pointer" @click="changeVideo(5)">Video</li>
            </ul>
        </div>
        <div class="SeccVideo__container flex justify-start">
            <iframe
                :src="videoSrc"
                width="100%"
                height="100%"
                class="SeccVideo__container__video"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            videoSrc: "https://player.vimeo.com/video/323344032"
        };
    },
    methods: {
        changeVideo(video) {
            switch (video) {
                case 1:
                    this.videoSrc = "https://player.vimeo.com/video/323344032";
                    break;
                case 2:
                    this.videoSrc = "https://player.vimeo.com/video/322557835";
                    break;
                case 3:
                    this.videoSrc = "https://player.vimeo.com/video/388956794";
                    break;
                case 4:
                    this.videoSrc = "https://player.vimeo.com/video/323344032";
                    break;
                case 5:
                    this.videoSrc = "https://player.vimeo.com/video/323344032";
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";
.SeccVideo {
    height: 100%;
    &__optionsDiv {
        @include screen(tablet) {
            width: 400px;
        }
    }
    &__container {
        width: 100vw;
        height: 200px;
        @include screen(tablet) {
            width: 80vw;
            height: 650px;
        }
    }
}
</style>
