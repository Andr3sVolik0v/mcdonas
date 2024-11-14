/* Variables. */

/* Variable para el Slider (Donut de Cacao, Nutella, KitKat). */

var swiper = new Swiper (".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

/* Funciones. */

/* Función para alertar de que la opción de "Compra" y "Menú" no está disponible. */

function boton() {
    window.alert("Esta función todavia no está disponible");
}