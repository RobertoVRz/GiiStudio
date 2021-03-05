<template>
    <section class="Servicios w-screen bg-black relative" id="servicios">
        <img
            src="../assets/images/icons/circle.png"
            alt="circle"
            class="Servicios__bgCircle absolute animate-bounce"
        />
        <h1 class="text-white Servicios__section ml-5 mb-10 md:ml-10">
            /Servicios
        </h1>
        <div
            class="flex flex-col justify-between pl-10 pr-5 md:flex-row md:pl-20"
        >
            <h1 class="Servicios__title text-white">
                ESTOS SON ALGUNOS DE LOS <span class="text-dorado"> SERVICIOS </span> QUE OFRECEMOS
            </h1>
            <div class="Servicios__list text-white flex flex-col md:flex-row">
                <ul class="Servicios__list__item">
                    <li class="Servicios__list__item__titulo text-dorado">Video Digital</li>
                    <li>• Largometrajes</li>
                    <li>• Cortometrajes</li>
                    <li>• Documentales</li>
                    <li>• Comerciales</li>
                    <li>• Fashion films</li>
                    <li>• VFX</li>
                    <li>• Series</li>
                    <li>• Video clips</li>
                    <li>• Corporativo</li>
                    <li>• Institucional</li>
                    <li>• Eventos especiales</li>
                </ul>

                <ul class="Servicios__list__item">
                    <li class="Servicios__list__item__titulo text-dorado">Audio</li>
                    <li>• Mezcla</li>
                    <li>• Mastering</li>
                    <li>• Grabacion de discos</li>
                    <li>• Arreglos musicales</li>
                    <li>•Grabaciones con musicos de sesión</li>
                    <li>• Diseño sonoro</li>
                    <li>• Sonido directo</li>
                    <li>• Jingles para radio y TV</li>
                    <li>• Montaje musical para promociones</li>
                </ul>

                <ul class="Servicios__list__item">
                    <li class="Servicios__list__item__titulo text-dorado">Fotografía</li>
                    <li>• Social</li>
                    <li>• Fashion</li>
                    <li>• Artistica</li>
                    <li>• Producto</li>
                    <li>• Publicitaria</li>
                    <li>• Documental</li>
                </ul>
            </div>
        </div>
        <div
            class="Servicios__moreInfo flex flex-row justify-center items-center cursor-pointer text-white py-10 md:py-0"
        >
            <div class="Servicios__moreInfo__containerImgs relative  mr-6">
                <img
                    src="../assets/images/icons/circle.svg"
                    alt="circle"
                    class=""
                />
                <img
                    src="../assets/images/icons/arrow.svg"
                    alt="arrow"
                    class="Servicios__arrow absolute animate-right ml-5"
                />
            </div>
            <p @click="ir('/Servicios')" class="Servicios__moreInfo__text">
                Más info
            </p>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        ir(destino) {
            this.$router.push(destino);
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Servicios {
    height: 100%;
    @include screen(tablet) {
        height: 800px;
    }
    &__bgCircle {
        right: 2rem;
        top: -5rem;
        @include screen(tablet) {
            right: 35rem;
        }
    }
    &__title {
        font-size: 30px;
        line-height: 35px;
        @include screen(tablet) {
            font-size: 55px;
            line-height: 87px;
            width: 443px;
            height: 574px;
        }
    }
    &__list__item {
        margin-top: 2rem;
        width: 250px;
        line-height: 32px;
        @include screen(tablet) {
            margin-top: 3rem;
        }
        &__titulo {
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
    &__arrow {
        margin-top: -1.4rem;
    }
}
</style>
