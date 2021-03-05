<template>
    <section
        class="SectionSwiper h-screen bg-black flex flex-col items-center justify-center pt-40"
    >
        <div class="w-screen h-auto">
            <div class="swiper-container ">
                <div class="swiper-wrapper">
                    <div
                        v-for="img in carousel"
                        :key="img"
                        class="swiper-slide flex justify-center"
                    >
                        <img
                            class="SectionSwiper__img"
                            :src="img"
                            alt="Carousel Image"
                        />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <h1 class="SectionSwiper__title text-white">Gii Studio</h1>
    </section>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import img1 from "~/assets/images/carousel/1.jpg";
import img2 from "~/assets/images/carousel/2.jpg";
import img3 from "~/assets/images/carousel/3.jpg";
import img4 from "~/assets/images/carousel/4.jpg";
import img5 from "~/assets/images/carousel/5.jpg";

export default {
    mounted() {
        this.slider();
    },
    data() {
        return {
            carousel: [img1, img2, img3, img4, img5]
        };
    },
    methods: {
        slider() {
            new Swiper(".swiper-container", {
                effect: "slide",
                autoplay: true,
                loop: true,
                centeredSlides: true,
                slidesPerView: 1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.SectionSwiper {
    &__title {
        font-size: 3rem;
        margin-top: 8rem;
        @include screen(tablet) {
            font-size: 10rem;
            margin-top: 8rem;
        }
    }
    &__img {
        height: 50vh;
        object-fit: contain;
    }
}
.swiper-container {
    height: 105%;
    z-index: 0;
}
.swiper-pagination {
    @include screen(tablet) {
        margin-bottom: -1rem !important;
    }
}
.swiper-pagination-bullet {
    background-color: white;
    border: 1px solid white !important;
    opacity: 1 !important;
    height: 10px;
    width: 10px;
    @include screen(tablet) {
        height: 13px;
        width: 13px;
    }
}
.swiper-pagination-bullet-active {
    background-color: black;
    border: 1px solid white !important;
}
</style>
