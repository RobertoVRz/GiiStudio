<template>
    <section class="Crew bg-black text-white" id="crew">
        <h1>/ Crew</h1>
        <div class="flex flex-row">
            <ul>
                <li v-for="(miembro, index) in biografias" :key="index">
                    <Acordion
                        class="cursor-pointer"
                        @click.native="open(index)"
                        :active="index == activeValue ? true : false"
                        :name="miembro.name"
                        :puesto="miembro.puesto"
                        :bio="miembro.bio"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            activeValue: 0,
            biografias: [
                {
                    name: "Gii",
                    puesto: "CEO de Gii Studio y Gii Store ",
                    bio:
                        "Cuenta con el Curso Cinema Lighting experience I y II <br> Ha participado como asistente de video en producciones televisivas, campañas publicitarias, series y cortometrajes. Los premios logrados en colaboración han sido: Hollywood Venus Award en el cortometraje “La Decisión de Lola”, publicación para la revista “Vogue Italia”, exposición de fotografía en el Palacio Municipal de San Pedro Cholula “Vino Naturalmente” con 14 obras de la serie los 3 tesoros del norte. <br /> Ha colaborado con Roger Gonzalez Show, Red Jesus, Lali Espósito, Eva Vazquez, Claudia Quijaz; así como en La Voz México y México Tiene Talento."
                },
                {
                    name: "Rolando Ocampo ",
                    puesto: "Director de series y películas ",
                    bio:
                        "Cursó la Licenciatura en Administración de Empresas egresado de la Universidad Central y Bibliotecología en la Universidad Javeriana. <br /> Es Director de Cine Colombiano. Entre sus producciones más destacadas se encuentran: De Brutas Nada (2019), Rosario Tijeras 3 (2019), La Piloto l y ll (2017), El Chivo (2014) La Bella y las Bestias (2018), Amar y muerte (2018), La viuda Negra ll (2016), La Esquina del Diablo (2018), Salvador de Mujeres (2010). <br /> Galardonado en 2019 con el premio a mejor director por la serie Amar a Muerte y nominado en los Premios TVyNovelas México como “Mejor Director” por la serie La Piloto 2. <br /> Ha participado en producciones de importantes, empresas y canales como Sony Pictures, Univisión, Televisa, Azteca y Lemon Studios. "
                }
            ]
        };
    },
    methods: {
        open(index) {
            this.activeValue = index;
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Crew {
    height: 100%;
}
</style>
