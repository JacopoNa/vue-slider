// CONSEGNA
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

// BONUS
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

var app = new Vue(
    {
        el: '#root',
        data: {
            // indice dell'array
            currentCountry: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods: {
            showNextPicture() {
                if(this.currentCountry < this.slides.length - 1) {
                    // Incrementa di 1 currentCountry fino all'ultima foto
                    this.currentCountry++;
                } else {
                    this.currentCountry = 0;
                }
            },
            showPreviousPicture() {
                if(this.currentCountry > 0) {
                    // Incrementa di 1 currentCountry fino all'ultima foto
                    this.currentCountry--;
                } else {
                    this.currentCountry = this.slides.length - 1;
                }
            },
            // al click su una thumb, si visualizza in grande l'immagine corrispondente
            showCurrentPicture(index) {
                this.currentCountry = index
            },
            
            // ogni 3 secondi mostra la foto successiva automaticamente
            start() {
                this.startPlay = setInterval(this.showNextPicture, 3000);
            },

            // hover sullo slider, stop autoplay
            stopAutoplay() {
                clearInterval(this.startPlay)
            },

            // hover sullo slider, restart autoplay
            restartAutoplay() {
                this.start();
            }
        },
        mounted() {
            this.start();
        }
    }
)