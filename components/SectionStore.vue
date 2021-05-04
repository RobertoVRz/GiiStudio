<template>
    <section class="Video bg-black pt-10" id="store">
        <h1 class="text-white ml-10 mb-10">/ Gii Store</h1>
        <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe
                src="https://player.vimeo.com/video/544873311"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p>
            <a href="https://vimeo.com/544873311">Gii Store</a> from
            <a href="https://vimeo.com/giistudio">Gii Studio</a> on
            <a href="https://vimeo.com">Vimeo</a>.
        </p>
    </section>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Video {
    height: 100%;
}
</style>
