<template>
    <section
        class="SeccVideo  bg-black flex flex-col justify-between  py-10 md:py-20 md:flex-row"
        id="video"
    >
        <div class="SeccVideo__optionsDiv md:pl-10">
            <h1 class="ml-5 text-white">/Video</h1>
            <br /><br />
            <ul
                class="flex flex-row flex-wrap justify-between p-2 text-white md:flex-col md:pl-5 md:mt-3"
            >
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 1 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(1)"
                >
                    Demo Reel 
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 2 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(2)"
                >
                    Comerciales
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 3 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(3)"
                >
                    Accion
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 4 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(4)"
                >
                    Mapping
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 5 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(5)"
                >
                    Animación
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 6 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(6)"
                >
                    Reflejos
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 7 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(7)"
                >
                    Reel Drone
                </li>
                <li
                    class=" SeccVideo__linkVideo cursor-pointer ml-3 mb-5"
                    :class="videoActive == 8 ? 'SeccVideo--activeVideo' : ''"
                    @click="changeVideo(8)"
                >
                    Reel Comedia Tele
                </li>
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
            videoSrc: "https://player.vimeo.com/video/539878914",
            videoActive: 1
        };
    },
    methods: {
        changeVideo(video) {
            switch (video) {
                case 1:
                    this.videoSrc = "https://player.vimeo.com/video/539878914";
                    this.videoActive = video;
                    break;
                case 2:
                    this.videoSrc = "https://player.vimeo.com/video/322557835";
                    this.videoActive = video;
                    break;
                case 3:
                    this.videoSrc = "https://player.vimeo.com/video/388956794";
                    this.videoActive = video;
                    break;
                case 4:
                    this.videoSrc = "https://player.vimeo.com/video/510335403";
                    this.videoActive = video;
                    break;
                case 5:
                    this.videoSrc = "https://player.vimeo.com/video/510323195";
                    this.videoActive = video;
                    break;
                case 6:
                    this.videoSrc = "https://player.vimeo.com/video/510046004";
                    this.videoActive = video;
                    break;
                case 7:
                    this.videoSrc = "https://player.vimeo.com/video/524136439";
                    this.videoActive = video;
                    break;
                case 8:
                    this.videoSrc = "https://player.vimeo.com/video/489103413";
                    this.videoActive = video;
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.SeccVideo {
    height: 100%;
    &__optionsDiv {
        @include screen(tablet) {
            width: 400px;
        }
    }
    &__linkVideo:hover {
        letter-spacing: 1px;
        transition: 500ms;
    }
    &__linkVideo::after {
        content: "";
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 500ms;
    }
    &__linkVideo:hover::after {
        width: 100%;
    }
    &--activeVideo::after {
        width: 100%;
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
