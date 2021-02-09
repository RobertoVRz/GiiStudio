<template>
    <section
        class="SectionProyect flex flex-col items-center bg-black relative md:py-20"
        id="proyecto"
    >
        <img
            class="SectionProyect__figure absolute animate-spin"
            src="~/assets/images/icons/triangle.png"
        />
        <div
            class="flex flex-col items-center justify-around w-screen md:flex-row"
        >
            <div class="SectionProyect__textDiv mt-20 md:mt-0 text-white">
                <p>/Gii Studio</p>
                <br />
                <p class="pl-5">
                    Breve descripción todas estas borrascas que nos suceden son
                    señales de que presto ha de serenar el tiempo y han de
                    sucedernos bien las cosas; porque no es posible que el mal
                    ni el bien sean durables, y de aquí se sigue que, habiendo
                    durado mucho el mal, el bien está ya cerca.
                </p>
            </div>
            <img
                class="SectionProyect__imgLogo mt-10 md:mt-0"
                src="~/assets/images/icons/logoCircle.png"
            />
        </div>
        <Table class="my-10 md:my-20" />
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/main.scss";
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
