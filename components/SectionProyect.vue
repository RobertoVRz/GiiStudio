<template>
    <section
        class="SectionProyect flex flex-col items-center bg-black md:py-20" id="proyecto"
    >
        <div class="flex flex-col items-center justify-around w-screen md:flex-row">
            <div class="SectionProyect__textDiv text-white">
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
                class="SectionProyect__imgLogo"
                src="~/assets/images/icons/logoCircle.png"
            />
        </div>
        <Table class="my-10" />
    </section>
</template>

<style lang="scss">
.SectionProyect {
    height: 100%;
    width: 100vw;
    &__textDiv {
        width: 750px;
    }
    &__imgLogo {
        height: 450px;
    }
}
</style>
