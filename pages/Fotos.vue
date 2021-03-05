<template>
    <div
        class="h-screen w-screen bg-black flex flex-col justify-center items-center"
    >
        <h1 class="prox text-white">PRÓXIMAMENTE</h1>
        <h2 @click="ir('/')" class="text-white cursor-pointer mt-20">
            Regresar
        </h2>
    </div>
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
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.prox {
    font-size: 1.5rem;
    @include screen(tablet) {
        font-size: 5rem;
    }
}
</style>
