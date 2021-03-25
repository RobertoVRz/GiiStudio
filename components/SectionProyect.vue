<template>
    <section
        class="SectionProyect flex flex-col items-center bg-black relative md:py-40"
        id="proyecto"
    >
        <img
            class="SectionProyect__figure absolute animate-spin"
            src="~/assets/images/icons/triangle.png"
        />
        <div
            class="flex flex-col items-center justify-around w-screen md:flex-row"
        >
            <div class="SectionProyect__textDiv mt-20  text-white">
                <p>/Gii Studio</p>
                <br />
                <p class="pl-5">
                    Somos una casa productora constituída por un equipo de
                    especialistas encargado de crear experiencias únicas e
                    inigualables. Para nosotros es importante que los
                    espectadores sean parte de la historia que queremos contar.
                    <br /><br />
                    Creamos ambientes favorables y de calidad en cada escena.
                    Por medio de tecnología avanzada, buscamos resaltar las
                    imágenes, haciendo sincronía con audio e iluminación.
                    <br /><br />
                    Tenemos como objetivo sobrepasar lo convencional, cubriendo
                    de manera creativa, profesional y coherente todas las
                    necesidades de nuestros clientes.
                </p>
            </div>
            <img
                class="SectionProyect__imgLogo mt-10 md:mt-0"
                src="~/assets/images/icons/logoCircle.png"
            />
        </div>
        <Table class="my-10 md:my-20" />
        <section class="text-white w-screen">
            <p class="ml-10">/Workshop</p>
            <div class="flex flex-col justify-around items-center md:flex-row w-screen">
                <img class="w-screen md:w-1/2 md:px-5 mt-10" src="~/assets/images/curso/cine.jpg" />
                <img class="w-screen md:w-1/2 md:px-5 mt-10" src="~/assets/images/curso/foto.jpg" />
            </div>
        </section>
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/app.scss";
.SectionProyect {
    height: 100%;
    width: 100vw;
    &__textDiv {
        width: 90vw;
        @include screen(tablet) {
            width: 750px;
        }
    }
    &__imgLogo {
        height: 200px;
        @include screen(tablet) {
            height: 450px;
        }
    }
    &__figure {
        left: 10rem;
        top: 0rem;
        height: 100px;
        @include screen(tablet) {
            left: 8rem;
            top: 1rem;
            height: 200px;
        }
    }
}
</style>
