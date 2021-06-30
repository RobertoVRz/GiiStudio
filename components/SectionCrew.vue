<template>
    <section class="Crew bg-black text-white relative pb-10" id="crew">
        <h1 class="ml-10 mb-10">/ Crew</h1>
        <img
            src="../assets/images/icons/round.png"
            alt="circle"
            class="Crew__bgSphere absolute animate-spin"
        />
        <div class="hidden md:flex Crew__desktop flex-row justify-around">
            <ul>
                <li
                    class="Crew__list mt-2 cursor-pointer"
                    v-for="(miembro, index) in biografias"
                    :key="index"
                    @click="select(miembro, index)"
                    :class="
                        index !== activeValue
                            ? 'Crew__list--noActive'
                            : 'Crew--active my-5'
                    "
                >
                    {{ miembro.name }}
                </li>
            </ul>
            <div
                class="flex flex-row justify-center items-center"
                v-if="info != null"
            >
                <div class="Crew__info">
                    <p>{{ info.name }}</p>
                    <p>{{ info.puesto }}</p>
                    <br />
                    <p v-html="info.bio"></p>
                </div>
                <img class="Crew__img" :src="info.img" alt="crew Member" />
            </div>
        </div>
        <div class="flex flex-row relative md:hidden">
            <ul>
                <li
                    class="flex flex-col md:flex-row"
                    v-for="(miembro, index) in biografias"
                    :key="index"
                >
                    <Acordion
                        class="cursor-pointer mt-5"
                        @click.native="open(index)"
                        :active="index == activeValue ? true : false"
                        :name="miembro.name"
                        :puesto="miembro.puesto"
                        :bio="miembro.bio"
                    />
                    <img
                        v-if="index == activeValue ? true : false"
                        :src="miembro.img"
                        alt="crew Member"
                        class="Crew__img md:absolute"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import Gii from "../assets/images/crew/gii.jpg";
import cesar from "../assets/images/crew/cesar.jpg";
import chijoki from "../assets/images/crew/chijioke.jpg";
import denver from "../assets/images/crew/denver.jpg";
import charlie from "../assets/images/crew/charly.jpg";
import gerardo from "../assets/images/crew/gerardo.jpg";
import gisel from "../assets/images/crew/gisel.jpg";
import jime from "../assets/images/crew/jime.jpg";
import rolo from "../assets/images/crew/rolo.jpg";
import rotz from "../assets/images/crew/rotz.jpg";
import santi from "../assets/images/crew/santi.jpg";
import serch from "../assets/images/crew/serch.jpg";
import fer from "../assets/images/crew/Fer.jpg";
import Riccardo from "../assets/images/crew/Riccardo.jpg";
import Max from "../assets/images/crew/Max.jpg";
import Roll from "../assets/images/crew/Rooll.jpg";

export default {
    data() {
        return {
            activeValue: null,
            info: null,
            biografias: [
                {
                    name: "Gii",
                    puesto: "CEO de Gii Studio y Gii Store ",
                    bio:
                        "<p class='text-justify'>Cuenta con conocimientos en cine por parte de la Universidad de la Comunicación en la Ciudad de México (UC, 2017), en actuaría y sistemas computacionales por parte de la Universidad de las Américas Puebla (UDLAP, 2012). Cursó Cinema Lighting Experience I y II (HD LABs, 2020).<br /><br /> Ha participado en producciones televisivas, campañas publicitarias, videoclips, películas series y cortometrajes como asistente de fotografía. Los premios logrados en colaboración con Santiago Barreiro y Eva Vázquez han sido: “Best Live Action Narrative” por el corto “Fuego en el Sótano” y premiado como “Mejor corto mexicano” en el GIFF siendo selección oficial para Latino Film Festival de Chicago. Su participación en la película Water Lola, en series en “La Bella y las Bestias” y Señora Acero T5. Ha publicado para revistas digitales “Vogue Italia”, “The Artist Community”. En 2018 tiene su primera exposición de fotografía en el Palacio Municipal de San Pedro Cholula “Vino Naturalmente” con 14 obras de la serie los 3 Tesoros del Norte.<br><br>Lanza su primer sencillo “Instinto” el 11 de Febrero del 2021, por 3KMKZ en la CDMX. ",
                    img: Gii
                },
                {
                    name: "Rolando Ocampo ",
                    puesto: "Director de series y películas ",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Administración de Empresas egresado de la Universidad Central y Bibliotecología en la Universidad Javeriana. <br><br>Es Director de Cine Colombiano. Entre sus producciones más destacadas se encuentran: De Brutas Nada (2019), Rosario Tijeras 3 (2019), La Piloto l y ll (2017), El Chivo (2014), La Bella y las Bestias (2018), Amar y Muerte (2018), La Viuda Negra ll (2016), La Esquina del Diablo (2018) y Salvador de Mujeres (2010). Galardonado en 2019 con el premio a mejor director por la serie Amar a Muerte y nominado en los Premios TV y Novelas México como “Mejor Director” por la serie La Piloto 2.<br><br>Ha participado en producciones de importantes, empresas y canales como Sony Pictures, Univisión, Televisa, Azteca y Lemon Studios. ",
                    img: rolo
                },
                {
                    name: "Santiago Barreiro ",
                    puesto: "Director de fotografía",
                    bio:
                        "<p class='text-justify'>Cursó la carrera de Cinematografía en “The los Angeles Film School”<br><br>Fotógrafo mexicano, entre sus proyectos más destacados se encuentran: Amarres de Dopamine, Capítulos 1 y 2 (2019), La Búsqueda (2019), fotografía de la pieza de videoarte Le grand macabre de György (2019); fotografía de los filmes: Más allá del éxtasis, Familias del fuego, Mosquita Muerta y Walter Lola; fotografía de las series: Adictos 1T, Buchonas, La Bella y las Bestias, Señora de Acero T5.  <br><br>Ha colaborado con National Geographic, HD LABs.<br><br>Galardonado en 2005 con el premio “Short Film Award” por el corto “Glory Box”, en 2010 con el premio “People Choice Award” por el corto “El hombre fotosintético”, en 2019 con el premio “Best Live Action Narrative” por el corto “Fuego en el Sótano” y premiado como “Mejor corto mexicano” en el GIFF siendo selección oficial para Latino Film Festival de Chicago.",
                    img: santi
                },
                {
                    name: "Carlos Martínez ",
                    puesto: "Foquista",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Ciencias de la Comunicación (UVAQ)<br /><br />Sus actualizaciones en teoría y técnica más recientes han sido: “Cinema Lighting Experience” - Vol ll (impartido por Santiago Barreiro), Master Class en Cinematográfica (S.T.P.C/CDMX) y Taller de Fotografía Cinematográfica Ricardo Benet (Fábrica de Imágenes/Morelia, Mich.)<br /><br />Entre sus participaciones más recientes destacan: Madre Solo Hay Dos (2020), Amarres (2019), LAIF (2019), EL Dragón: El Regreso de un Guerrero (2019) y Amar a Muerte (2019).<br /><br />Ha colaborado con cinefotógrafos como: José Casillas (El Burrito), Santiago Barreiro, Lorenzo Zuazua, Eliott Reguera, Hobardo Augusto Chicangana (Colombia), Ignacio Prieto, Jerónimo Goded, Adrián Patino, Geronimo Denti, Galo Olivares, Emiliano Chaparro, Sandra de Silba, Natalia Cuevas, Sara Purgatorio, Alejandro Chavez, Sergio Donis, Jorge Medina, Yaasib Tobelix Vazquez, entre otros.",
                    img: charlie
                },
                {
                    name: "Denver",
                    puesto: "Gaffer",
                    bio:
                        "<p class='text-justify'>Ha participado en series como: El Capo, La Bella y las Bestias, Señora de Acero, Amarres, Amar a Muerte, entre otras. Ha participado en casas productoras como Lemon Films, Argos, Axolote Films, Perro Azul, entre otras.<br /><br />Ha colaborado con fotógrafos como: Santiago Barreiro, Javier Mora, Geronimo Goded, Sebastián Gonzalez, José Grimalo, entre otros.<br /><br />Se ha dedicado a la creación de documentales como “La Tiendita” y “La Cueva del Diablo”, así como a impartir cursos de fotografía y técnicas avanzadas de iluminación para series en el CCC.",
                    img: denver
                },
                {
                    name: "Riccardo Arriola",
                    puesto: "Fotógrafo",
                    bio:
                        "<p class='text-justify'>Cursó la carrera de Cine y Fotografía en el Centro de Capacitación Cinematográfica. <br /><br />Se ha especializado en film, cine, impresión de imágenes por métodos tradicionales y fine art printer.<br /><br />Parte de su obra “Still Photographer” se ha impreso en revistas como: Im not perfect Zine (Portugal), RGSP Magazine (Barcelona), Nhüdes Magazine (Alemania), Nart Magazine (USA) y Vogue (Italia). Esta obra también fue parte de exposiciones individuales y colectivas en CDMX, Veracruz y Londres.",
                    img: Riccardo
                },
                {
                    name: "César",
                    puesto: "Asistente de fotografía ",
                    bio:
                        "<p class='text-justify'>Cursó la carrera de Cine en la Universidad de la Comunicación.<br /><br />Ha participado como creador de contenido en Wache Skateboards, Hey Dog Shoes, Salon Bach, Vans Royal SS, Tours Comida CDMX, North Tattoo. Ha participado como streaming en Mutek, Abierto Mexicano de Diseño, AVF, Video Memoria Caravan, Calaveras y Gatitos al Mictlan, Paste Up, Black Canvas, Círculo de Oro y Rumbo a Cannes. Ha participado como realizador en Kibal FILMS, Los Suárez ft Yoga Fire, Codigo KM “La empresa”, Elio Toffana ft Montebel, Danzatorio, Dr. Crash - Atrapados 1, 2 y 3, Digitalism y Bort. <br /><br />Ha participado como asistente de producción en Cine 16. Galardonado con el premio a mejor diseño sonoro.",
                    img: cesar
                },
                {
                    name: "Max",
                    puesto: "Asistente de Dron ",
                    bio:
                        "<p class='text-justify'>Fotógrafo. Ha colaborado como fotógrafo (Content y Perro Negro) y como asistente de cámara (Producción audiovisual CINEMA y Angels Sing).<br><br> Ha participado en el Documental Sicte como documentarista.",
                    img: Max
                },
                {
                    name: "Gerardo Traeger",
                    puesto: "Director de arte",
                    bio:
                        "<p class='text-justify'>Pintor egresado de la Académie de la Grande Chaumiere así como en el Musée des Arts Décoratifs. Cuenta con experiencia como pintor, trabajando en el taller del artista francés Patrice de Pracontal. Diplomado en Pintura Romántica Alemana por el Kunsthalle Bremen. Fue asistente y alumno del Maestro Santos Balmori. Ha sido curador y co-curador en exposiciones como Santos Balmori (Un Pintor al Margen) y Messico Circa. Durante 30 años se ha dedicado a promover y exponer artistas emergentes. <br><br> Nombrado curador y miembro del Advisory board de las ferias de arte contemporáneo Hot Art, Basel Suiza y Hot Art, Mexico City. Es miembro del Consejo de MIAA (Museo Itinerante de Arte Actual).",
                    img: gerardo
                },
                {
                    name: "Sergio Cuellar",
                    puesto: "Director de Orquesta",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Dirección Coral en el Conservatorio Nacional de Música. <br /><br />Tiene estudios de órgano y piano. Ha tomado cursos especializados de Dirección Coral con: Jorge Cozatl, Josep Pratz, Dante Andreo, Ana María Raga, Federico Trindade, Digna Guerra, Ana Bratriz Fernández de Briones, Patricia Morales, Iramar Rodríguez. <br /><br />Ha colaborado en la parroquia de San Francisco Cuhuacán, Cor Dicaris, Ensamble Vocal Euterpe, Coro del Círculo de Derecho Penal del ITAM y Barítono del ensamble Vok-6.",
                    img: serch
                },
                {
                    name: "Chijioke",
                    puesto: "Productor, escritor y artista musical",
                    bio:
                        "<p class='text-justify'>Cuenta con experiencia en producción instrumental, creación de álbumes de E.P. Galardonado con el premio “artista favorito” Akua Ibom, Nigeria.<br><br>Ha colaborado con Dj-Zealscott, Gifted Queen G y M-jase.",
                    img: chijoki
                },
                {
                    name: "Roll",
                    puesto: "Productor y cantante regional R&B",
                    bio:
                        "<p class='text-justify'>Cursó la licenciatura en Administración de Empresas en la UDLAP. Cuenta con cursos de estrategia y planeación. <br><br>Ha colaborado en campañas gubernamentales, en radio y cine. También ha colaborado con ENDEABOR, IPAM e IMPI. ",
                    img: Roll
                },
                {
                    name: "Rotz",
                    puesto: "Sonido Directo",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Comunicación egresado en la UDLAP.<br /><br />Productor, locutor y coordinador de contenidos en programas como “La Clínica Rock” e “Ibero TV”. Se ha capacitado en productor de eventos y audio personalizado en música en vivo. Se ha desempeñado en sonido de largometrajes y series como: Dibujando el Cielo, Fallax, Gringo, Corazón de Mezquite, Gringa, Desafío Sobre Fuego Latinoamérica, Club de Cuervos (T3), Prisionero,  Rosario Tijeras (T3), Historia de un Crimen, entre otros.<br /><br />Ha colaborado con 2 agrupaciones musicales como compositor, ejecutante y productor. También ha participado en giras musicales internacionales como ingeniero en audio.",
                    img: rotz
                },
                {
                    name: "Fer Sama",
                    puesto: "Director de animación y arte digital",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Publicidad egresado de la Universidad de la Comunicación. Cuenta con curso de edición de video, curso de fotografía, curso de corrección de color por la eduMac.<br /><br />Ha trabajado como realizador, fotógrafo y animador digital en distintos canales de televisión cultural. Ha participado en exposiciones como artista plástico en: Galería Terreno Baldío, Subasta My Hero, Paralelas X, XI, XII, Simbiosis del Arte.<br /><br />Ha colaborado en diferentes proyectos creativos con artistas como: David LaChampelle, Josse Stone, Regina Orozco, Vazquez Sound, Ricardo Aleman y Eugenio Bartiloti).",
                    img: fer
                },
                {
                    name: "Jim Rivera",
                    puesto: "Diseñadora Gráfica",
                    bio:
                        "<p class='text-justify'>Cursó la Licenciatura en Comunicación Visual y con una especialidad en visualización creativa en la Universidad de la Comunicación. Cursó los talleres de pintura del cuerpo humano (ARSCITE) y pintura del cuerpo humano (Talleres S22).<br /><br />Diseña publicaciones, logotipos, gráficos, portadas para artistas, posters para cortometrajes, redes sociales y revistas. Ha colaborado con ilustraciones para la portada del podcast Queerit. Una de sus pinturas se expuso en el museo Art Gallery 21 de Londres y 2 de sus ilustraciones han sido publicadas en la revista “Pata de Mono”.<br /><br />Galardonada por su pieza artística en Benetton “Tejiendo futuros de quién eres”.",
                    img: jime
                },
                {
                    name: "Gisel Casas",
                    puesto: "Actriz, Guionista y Directora de escena",
                    bio:
                        "<p class='text-justify'>Cursó la carrera de Actuación en Teatro, Cine y Televisión en Argos Casa Azul, así como la Licenciatura en Artes Escénicas en Expresión Teatral (UDG). Cursó el diplomado Interdisciplinario en las Artes (CNA) así como el diplomado en dirección y danza (CNA) y artes en la educación (CNA). Cuenta con los cursos: dinámica para actores y técnicas posmodernas de movimiento (UNAM).<br /><br />Ha participado en la dirección puesta en escena en “La Guerra de los Pasteles” y “Tres miradas” (ENART / INBA), en la actuación como María en el cortometraje “La Decisión de Lourdes”, así como en la creación de Cápsulas para Canal11. Ha colaborado con su actuación con ARGOS en “Ultravioleta” y “El señor de los Cielos”, como locutora base en la Secretaría de Cultura como actriz y directora en la Secretaría de Cultura Alas y Raíces. <br /><br />Uno de sus grandes logros ha sido participar en la dirección, dramaturgia y actuación en “El niño y El Quetzal” (Circuitos de la UNAM, Teatro Sor Juana y Teatro del Dinosaurio). <br /><br />Reconocimiento a “Mejor Actriz” en Southern Shorts Awards (2020).",
                    img: gisel
                }
            ]
        };
    },
    methods: {
        open(index) {
            this.activeValue = index;
        },
        select(persona, index) {
            this.info = persona;
            this.activeValue = index;
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Crew {
    height: 100%;
    @include screen(tablet) {
        height: 100%;
    }
    &__bgSphere {
        right: 1rem;
        top: 0;
    }

    &__img {
        @include screen(tablet) {
            right: 5rem;
            //margin-top: -5rem;
            width: 400px;
            height: 500px;
            object-fit: cover;
            z-index: 5 !important;
        }
    }
    &__desktop {
        z-index: 5 !important;
    }
    &__info {
        width: 550px;
        padding-right: 1rem;
    }
    &__list {
        font-size: 1.5rem !important;
        margin-top: 1.5rem !important;
        &--noActive {
            font-size: 20px;
            line-height: 15px;
        }
        &--noActive:hover {
            letter-spacing: 1px;
            transition: 500ms;
        }
    }
    &__list::after {
        content: "";
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 500ms;
    }
    &__list:hover::after {
        width: 100%;
    }
    &--active::after {
        width: 100%;
    }
}
</style>
