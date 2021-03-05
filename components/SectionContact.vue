<template>
    <section class="Contacto bg-dorado" id="contacto">
        <div
            class="Contacto__info flex md:flex-row flex-col justify-around items-center text-white"
        >
            <div class="text-center">
                <h1>
                    Llámanos
                </h1>
                <a href="tel:+525531740768">553 174 0768</a>
            </div>

            <div class="text-center">
                <h1>
                    Escríbenos
                </h1>
                <a href="mailto: giistudioinfo@gmail.com">giistudioinfo@gmail.com</a>
            </div>
        </div>
        <div
            class="Contacto__footer bg-black h-10 text-white flex flex-row items-center justify-between px-5"
        >
            <p>
                Gii Studio® 2021
            </p>
            <div class="flex flex-row ">
                <p class="mr-1 md:mr-5">
                    Terminos y condiciones
                </p>
                <p>
                    Aviso de privacidad
                </p>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Contacto {
    height: 100%;
    &__info {
        height: 500px;
        font-size: 20px;
        @include screen(tablet) {
            font-size: 2rem;
        }
    }
    &__footer {
        font-size: 10px;
        @include screen(tablet) {
            font-size: 1rem;
        }
    }
}
</style>
