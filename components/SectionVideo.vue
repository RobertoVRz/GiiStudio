<template>
    <section
        class="SeccVideo  bg-black flex flex-col justify-between py-10 md:py-20 md:flex-row"
        id="video"
    >
        <div class="SeccVideo__optionsDiv md: pl-10">
            <h1 class="text-white">/Video</h1>
            <br /><br />
            <ul class="text-white pl-5">
                <li>Video</li>
                <li>Video</li>
                <li>Video</li>
                <li>Video</li>
                <li>Video</li>
            </ul>
        </div>
        <div class="SeccVideo__container flex justify-start">
            <iframe
                src="https://player.vimeo.com/video/323344032"
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
