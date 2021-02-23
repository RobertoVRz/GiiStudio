<template>
    <section class="Crew bg-black text-white" id="crew">
        <h1>/ Crew</h1>
        <div class="flex flex-row relative">
            <ul>
                <li
                    class="flex flex-col md:flex-row "
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
import meli from "../assets/images/crew/meli.jpg";
import rolo from "../assets/images/crew/rolo.jpg";
import rotz from "../assets/images/crew/rotz.jpg";
import santi from "../assets/images/crew/santi.jpg";
import serch from "../assets/images/crew/serch.jpg";
import fer from "../assets/images/crew/Fer.jpg";

export default {
    data() {
        return {
            activeValue: null,
            biografias: [
                {
                    name: "Gii",
                    puesto: "CEO de Gii Studio y Gii Store ",
                    bio:
                        "Cuenta con el Curso Cinema Lighting experience I y II <br /><br /> Ha participado como asistente de video en producciones televisivas, campañas publicitarias, series y cortometrajes. Los premios logrados en colaboración han sido: Hollywood Venus Award en el cortometraje “La Decisión de Lola”, publicación para la revista “Vogue Italia”, exposición de fotografía en el Palacio Municipal de San Pedro Cholula “Vino Naturalmente” con 14 obras de la serie los 3 tesoros del norte. <br /><br /> Ha colaborado con Roger Gonzalez Show, Red Jesus, Lali Espósito, Eva Vazquez, Claudia Quijaz; así como en La Voz México y México Tiene Talento.",
                    img: Gii
                },
                {
                    name: "Rolando Ocampo ",
                    puesto: "Director de series y películas ",
                    bio:
                        "Cursó la Licenciatura en Administración de Empresas egresado de la Universidad Central y Bibliotecología en la Universidad Javeriana. <br /><br /> Es Director de Cine Colombiano. Entre sus producciones más destacadas se encuentran: De Brutas Nada (2019), Rosario Tijeras 3 (2019), La Piloto l y ll (2017), El Chivo (2014) La Bella y las Bestias (2018), Amar y muerte (2018), La viuda Negra ll (2016), La Esquina del Diablo (2018), Salvador de Mujeres (2010). <br /><br /> Galardonado en 2019 con el premio a mejor director por la serie Amar a Muerte y nominado en los Premios TVyNovelas México como “Mejor Director” por la serie La Piloto 2. <br /><br /> Ha participado en producciones de importantes, empresas y canales como Sony Pictures, Univisión, Televisa, Azteca y Lemon Studios. ",
                    img: Gii
                },
                {
                    name: "Santiago Barreiro ",
                    puesto: "Director de fotografía",
                    bio:
                        "Cursó la carrera de Cinematografía en “The los Angeles Film School” <br /> Fotógrafo mexicano, entre sus proyectos más destacados se encuentran: AMARRES de DOPAMINE, CAPÍTULOS 1 y 2 (2019), La Búsqueda (2019), fotografía de la pieza de videoarte Le grand macabre de György (2019); fotografía de los filmes: Más allá del éxtasis, Familias del fuego, Mosquita muerta y Walter lola; fotografía de las series: Adictos Season 1, Buchonas, La bella y las bestias, Señora de acero Season 5. <br /><br />  Galardonado en 2005 con el premio “Short Film Award” por el corto “Glory box”, en 2010 con el premio “People Choice Award” por el corto “El hombre fotosintético”, en 2019 con el premio “Best Live Action Narrative” por el corto “Fuego en el Sótano” y premiado como “Mejor corto mexicano” en el GIFF siendo selección oficial para Latino Film Festival de Chicago. Considera que sus más grandes logros a lo largo de su carrera han sido: guardar silencio, observar la luz y cuidar al de junto.",
                    img: santi
                },
                {
                    name: "Gerardo Traeger",
                    puesto: "",
                    bio:
                        "Pintor egresado de la Académie de la Grande Chaumiere así como en el Musée des Arts Décoratifs. Cuenta con experiencia como pintor, trabajando en el taller del artista francés Patrice de Pracontal. Diplomado en Pintura Romántica Alemana por el Kunsthalle Bremen. Fue asistente y alumno del Maestro Santos Balmori. Ha sido curador y co-curador en exposiciones como Santos Balmori (Un Pintor al Margen) y Messico Circa. Durante 30 años se ha dedicado a promover y exponer artistas emergentes. <br><br> Nombrado curador y miembro del Advisory board de las ferias de arte contemporáneo Hot Art, Basel Suiza y Hot Art, Mexico City. Es miembro del Consejo de MIAA (Museo Itinerante de Arte Actual)",
                    img: gerardo
                },
                {
                    name: "Carlos Martínez ",
                    puesto: "Foquista",
                    bio:
                        "Cursó la Licenciatura en Ciencias de la Comunicación (UVAQ)<br /><br />Sus actualizaciones en teoría y técnica más recientes han sido: Curso “Técnicas Avanzadas de Iluminación para series - VOL.2” (impartido por Santiago Barreiro), Máster Class en Cinematográfica (S.T.P.C/CDMX) y Taller de Fotografía Cinematográfica Ricardo Benet (Fábrica de Imágenes/Morelia, Mich.)<br /><br />Entre sus participaciones más recientes destacan: Madre Solo Hay Dos (2020), Amarres (2019), LAIF (2019), EL Dragón: El Regreso de un Guerrero (2019) y Amar a Muerte (2019).<br /><br />Ha colaborado con cinefotógrafos como: José Casillas (el burrito), Santiago Barreiro, Lorenzo Zuazua, Eliott Reguera, Hobardo Augusto Chicangana (COLOMBIA), Ignacio Prieto, Jerónimo Goded, Adrián Patino, Geronimo Denti, Galo Olivares, Emiliano Chaparro, Sandra de Silba, Natalia Cuevas, Sara Purgatorio, Alejandro Chavez, Sergio Donis, Jorge Medina, Yaasib Tobelix Vazquez, entre otros.",
                    img: charlie
                },
                {
                    name: "Denver",
                    puesto: "Gaffer",
                    bio:
                        "Ha participado en series como: El Capo, La Bella y las Bestias, Señora de Acero, Amarres, Amar a muerte, entre otras. Ha participado en casas productoras como LEMON FILMS, ARGOS, TELEMEXICO, AXOLOTE FILMS, PERRO AZUL, entre otras.<br><br>Ha colaborado con fotógrafos como: Santiago Barreiro, Javier Mora, Geronimo Goded, Sebastián Gonzalez, José Grimalo, entre otros.<br><br>Se ha dedicado a la creación de documentales como “La tiendita” y “La cueva del diablo”, así como a impartir cursos de fotografía y técnicas avanzadas de iluminación para series en el CCC.",
                    img: denver
                },
                {
                    name: "Riccardo Arriola",
                    puesto: "Fotógrafo",
                    bio:
                        "Cursó la carrera de Cine y fotografía en el Centro de Capacitación Cinematográfica. Se ha especializado en film, cine, impresión de imágenes por métodos tradicionales y fine art printer.<br><br>Parte de su obra “Still Photographer” se ha impreso en revistas como: Im not perfect Zine (Portugal), RGSP Magazine (Barcelona), Nhüdes Magazine (Alemania), Nart Magazine (USA) y Vogue (Italia). Esta obra también fue parte de exposiciones individuales y colectivas en CDMX, Veracruz y Londres.",
                    img: Gii
                },
                {
                    name: "César",
                    puesto: "Asistente de fotografía ",
                    bio:
                        "Cursó la carrera de Cinematografía en la Universidad de la Comunicación.<br><br>Ha participado como creador de contenido en Wache Skateboards, Hey Dog Shoes, Salon Bach, Vans Royal SS, Tours Comida CDMX, North Tattoo. Ha participado como streaming en Mutek, Abierto Mexicano de Diseño, AVF, Video Memoria Caravan, Calaveras y Gatitos al Mictlan, Paste Up, Black Canvas, Círculo de Oro y Rumbo a Cannes. Ha participado como realizador en Kibal FILMS, Los Suárez ft Yoga Fire, Codigo KM “La empresa”, Elio Toffana ft Montebel, Danzatorio, Dr. Crash - Atrapados 1,2 y 3, Digitalism y Bort. Ha participado como asistente de producción en Cine 16. Galardonado con el premio a Mejor Diseño Sonoro.",
                    img: cesar
                },
                {
                    name: "Max",
                    puesto: "Vuelo de Dron ",
                    bio:
                        "Fotógrafo. Ha colaborado como fotógrafo (Content y Perro Negro) y como asistente de cámara (Producción audiovisual CINEMA y Angels Sing).<br><br> Ha participado en el Documental Sicte como documentarista.",
                    img: Gii
                },
                {
                    name: "Sergio Cuellar",
                    puesto: "Director de Orquesta",
                    bio:
                        "Cursó la Licenciatura en Dirección Coral en el Conservatorio Nacional de Música. Tiene estudios de órgano y piano. Ha tomado cursos especializados de Dirección Coral con: Jorge Cozatl, Josep Pratz, Dante Andreo, Ana María Raga, Federico Trindade, Digna Guerra, Ana Bratriz Fernández de Briones, Patricia Morales, Iramar Rodríguez. <br><br>Ha colaborado en la parroquia de San Francisco Cuhuacán, Cor Dicaris, Ensamble Vocal Euterpe, Coro del Círculo de Derecho Penal del ITAM y Barítono del ensamble Vok-6.",
                    img: serch
                },
                {
                    name: "Chijioke",
                    puesto: "Productor, escritor y artista musical",
                    bio:
                        "Cuenta con experiencia en producción instrumental, creación de álbumes de E.P. Galardonado con el premio “artista favorito” Akua Ibom, Nigeria<br>Ha colaborado con Dj-Zealscott, Gifted Queen G y M-jase.",
                    img: chijoki
                },
                {
                    name: "FE",
                    puesto: "Productor musical",
                    bio:
                        "Especialista en producción musical, teatro e ingeniería electrónica. Obtuvo una beca completa para estudiar en la Universidad de Berkeley el “Curso del músico modelo”. Es profesor de música (guitarra y voz). Ha participado en musicales como Jesus Super Estrella. Galardonado con 3 premios a Mejor Actor. <br> Ha colaborado con el Microteatro Acapulco",
                    img: Gii
                },
                {
                    name: "Rotz",
                    puesto: "Sonido Directo",
                    bio:
                        "Cursó la Licenciatura en Comunicación egresado de la UDLAP.<br><br>Productor, locutor y coordinador de contenidos en programas como “La Clínica Rock” e “Ibero TV”. Se ha capacitado en productor de eventos y audio personalizado en música en vivo. Se ha desempeñado en Sonido de Largometrajes y Series como: Dibujando el Cielo, Fallax, Gringo, Corazón de Mezquite, Gringa, Desafío Sobre Fuego Latinoamérica, Club de Cuervos (3T), Prisionero,  Rosario Tijeras (3T), Historia de un Crimen, entre otros.<br><br>Ha colaborado con 2 agrupaciones musicales como compositor, ejecutante y productor. También ha participado en giras musicales internacionales como ingeniero en audio.",
                    img: rotz
                },
                {
                    name: "Fer Sama",
                    puesto: "Director de animación y arte digital",
                    bio:
                        "Cursó la Licenciatura en Publicidad egresado de la Universidad de la Comunicación. Cuenta con Curso de Edición de Video, Curso de Fotografía, Curso de Color por la eduMac. <br><br>Ha trabajado como realizador, fotógrafo y animador digital en distintos canales de Televisión Cultural. Ha participado en exposiciones como artista plástico en: Galería Terreno Baldío, Subasta My Hero, Paralelas X, XI, XII, Simbiosis del Arte.<br><br>Ha colaborado en diferentes proyectos creativos con artistas como: David LaChampelle, Josse Stone, Regina Orozco, Vazquez Sound, Ricardo Aleman y Eugenio Bartiloti)",
                    img: fer
                },
                {
                    name: "Jim Rivera",
                    puesto: "Diseñadora Gráfica",
                    bio:
                        "Cursó la Licenciatura en Comunicación Visual y con una especialidad en visualización creativa por la Universidad de la Comunicación. Cursó los Talleres de Pintura del Cuerpo Humano (ARSCITE) y Pintura del Cuerpo Humano (Talleres S22)<br><br>Diseña publicaciones, logotipos, gráficos y posters para cortometrajes, redes sociales, videos y podcast. Ha colaborado con Ilustraciones para la portada del PodCast Queerit.<br><br>Una de sus pinturas se expuso en el museo Art Gallery 21 de Londres y 2 de sus ilustraciones han sido publicadas en la revista “Pata de Mono”.<br><br>Galardonada por su pieza artística en Benetton “Tejiendo futuros de quién eres”",
                    img: Gii
                },
                {
                    name: "Gisel Casas",
                    puesto: "Actriz, Guionista y Directora de escena",
                    bio:
                        "Cursó la carrera de Actuación en Teatro, Cine y Televisión (Argos CasAzul), así como la Licenciatura en Artes Escénicas en la Expresión Teatral (UDG).<br><br>Cursó el Diplomado Interdisciplinario en las Artes (CNA) así como el Diplomado en Dirección y Danza (CNA) y Artes en la Educación (CNA). Cuenta con un Curso Alerta, dinámica para actores y técnicas posmodernas de movimiento (CCU UNAM)<br><br>Ha participado en la Dirección puesta en escena en “La Guerra de los Pasteles” y “Tres miradas” (ENART / INBA), en la actuación como Maria en el cortometraje “La Decisión de Lourdes”, así como en la creación de Cápsulas para Canal11. Uno de sus grandes logros ha sido participar en la dirección, dramaturga y actuación en “El niño y El Quetzal” (Circuitos de la UNAM, Teatro Sor Juana y Teatro del Dinosaurio)<br><br>Ha colaborado con su actuación con ARGOS en “Ultravioleta” y “El señor de los Cielos”, como locutora base en la Secretaría de Cultura y como actriz y directora en la Secretaría de Cultura Alas y Raíces.<br><br>Reconocimiento a “Mejor Actriz” en Southern Shorts Awards (2020)",
                    img: gisel
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
    @include screen(tablet) {
        height: 1400px;
    }

    &__img {
        @include screen(tablet) {
            right: 5rem;
            //margin-top: -5rem;
            width: 500px;
            height: 600px;
            object-fit: cover;
        }
    }
}
</style>
