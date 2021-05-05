<template>
    <section class="Foto bg-black" id="foto">
        <h1 class="text-white ml-10 mb-10">/ Foto</h1>
        <masonry
            class="px-10 relative"
            :cols="{ default: 2, 400: 1 }"
            :gutter="50"
        >
            <div v-for="(foto, index) in fotos" :key="index">
                <img :src="foto" alt="Foto" class="Foto__foto mb-12" />
            </div>
            <div
                class="Foto__moreInfo flex flex-row justify-center absolute  items-center cursor-pointer text-white py-10 md:py-0"
            >
                <div class="Foto__moreInfo__containerImgs relative  mr-6">
                    <img
                        src="../assets/images/icons/circle.svg"
                        alt="circle"
                        class=""
                    />
                    <img
                        src="../assets/images/icons/arrow.svg"
                        alt="arrow"
                        class="Foto__arrow absolute animate-right ml-5"
                    />
                </div>
                <p @click="ir('/Fotos')" class="Foto__moreInfo__text">
                    Más info
                </p>
            </div>
        </masonry>
    </section>
</template>
<script>
import ansiedad from "../assets/images/fotos/ansiedad.jpg";
import belinda from "../assets/images/fotos/belinda.jpg";
import blur from "../assets/images/fotos/blur.jpg";
import monito from "../assets/images/fotos/monito.png";
import pinup from "../assets/images/fotos/pinup.jpg";
import bruxo from "../assets/images/fotos/bruxo.jpg";
import bruxo1 from "../assets/images/fotos/bruxo1.jpg";
export default {
    data() {
        return {
            fotos: [ansiedad, blur, belinda, bruxo1, monito, pinup, bruxo]
        };
    },
    methods: {
        ir(destino) {
            this.$router.push(destino);
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Foto {
    height: 100%;
    @include screen(tablet) {
        height: 100%;
    }
    &__foto:hover {
        transform: scale(1.05);
        transition: 500ms;
    }
    &__moreInfo {
        @include screen(tablet) {
            right: 15rem;
            margin-top: 5rem;
        }
    }
    &__arrow {
        margin-top: -1.4rem;
    }
}
</style>
