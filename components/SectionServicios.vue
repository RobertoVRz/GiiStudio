<template>
    <section class="Servicios bg-black" id="servicios">
        <h1 class="text-white servicios__section">/Servicios</h1>
        <div class="flex flex-row justify-between">
            <h1 class="Servicios__title text-white">PONER UNA FRASE O COPY BIEN CHIDORI</h1>
            <div class="Servicios__list text-white flex flex-row">
                <div class="Servicios__list__item-1">
                    <ul>
                        <li>Largometrajes</li>
                        <li>Cortometrajes</li>
                        <li>Documentales</li>
                        <li>Comerciales</li>
                        <li>Fashion films</li>
                        <li>VFX</li>
                        <li>Series</li>
                        <li>Video clips</li>
                        <li>Corporativo</li>
                        <li>Institucional</li>
                        <li>Eventos especiales</li>
                    </ul>
                </div>
                <div class="Servicios__list__item-2">
                    <ul>
                        <li>Social</li>
                        <li>Fashion</li>
                        <li>Artistica</li>
                        <li>Producto</li>
                        <li>Publicitaria</li>
                        <li>Documental</li>
                    </ul>
                </div>
                <div class="Servicios__list__item-3">
                    <ul>
                        <li>Mezcla</li>
                        <li>Mastering</li>
                        <li>Grabacion de discos</li>
                        <li>Arreglos musicales y grabaciones con musicos de sesión</li>
                        <li>Diseño sonoro</li>
                        <li>Sonido directo</li>
                        <li>Jingles para radio y TV</li>
                        <li>Montaje musical para promociones</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mas-info flex flex-row text-white">
            <div class="mas-info__icon">
                <img src="../assets/images/icons/circle.svg" alt="circle" id="circle">
                <img src="../assets/images/icons/arrow.svg" alt="arrow" id="arrow">
            </div>
            <div class="mas-info__text">
                <p>Más info</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.Servicios{
    height: 800px;
}
.servicios__section{
    margin-left: 105px;
    margin-bottom: 55px;
}
.Servicios__title{
    margin-left: 115px;
    margin-right: 340px;
    font-size: 72px;
    line-height: 87px;
    width: 443px;
    height: 574px;
}
.Servicios__list__item-1{
    margin-top: 50px;
    margin-right: 78px;
    line-height: 32px;
}
.Servicios__list__item-2{
    margin-top: 81px;
    margin-right: 78px;
    line-height: 32px;
}
.Servicios__list__item-3{
    margin-top: 112px;
    line-height: 32px;
}
.mas-info{
    align-items: flex-end;
    justify-content: center;
}
.mas-info__icon{
    position: relative;
    display: inline-block;
    margin-right: 20px;
}
#circle{
    display: block;
    max-width: 100%;
    height: auto;
}
#arrow {
    position: absolute;
    top: 12px;
    left: 17.5px;
}
</style>
