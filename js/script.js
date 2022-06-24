// CONSEGNA
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

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
            }
        }
    }
)