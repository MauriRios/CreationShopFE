import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent implements OnInit {
  
  dynamicSlides = [
    {
      id: 1,
      src:'assets/img/sponsor1.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/img/sponsor2.png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/img/sponsor3.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/img/veuve-clicquot.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/img/vat-69.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      src:'assets/img/trapiche.png',
      alt:'Side 6',
      title:'Side 6'
    },
    {
      id: 7,
      src:'assets/img/tanqueray.png',
      alt:'Side 7',
      title:'Side 7'
    },
    {
      id: 8,
      src:'assets/img/smirnoff.png',
      alt:'Side 8',
      title:'Side 8'
    },
    {
      id: 9,
      src:'assets/img/singleton.png',
      alt:'Side 9',
      title:'Side 9'
    },
    {
      id: 10,
      src:'assets/img/pehuania.png',
      alt:'Side 10',
      title:'Side 10'
    },
    {
      id: 11,
      src:'assets/img/moet-chandon.png',
      alt:'Side 11',
      title:'Side 11'
    },
    {
      id: 12,
      src:'assets/img/mascota.png',
      alt:'Side 12',
      title:'Side 12'
    },
    {
      id: 13,
      src:'assets/img/latitud-33.png',
      alt:'Side 13',
      title:'Side 13'
    },
    {
      id: 14,
      src:'assets/img/las-moras.png',
      alt:'Side 14',
      title:'Side 14'
    },
    {
      id: 15,
      src:'assets/img/johnnie-walker.png',
      alt:'Side 15',
      title:'Side 15'
    },
    {
      id: 16,
      src:'assets/img/jameson.png',
      alt:'Side 16',
      title:'Side 16'
    },
    {
      id: 17,
      src:'assets/img/isenbeck.png',
      alt:'Side 17',
      title:'Side 17'
    },
    {
      id: 18,
      src:'assets/img/heineken.png',
      alt:'Side 18',
      title:'Side 18'
    },
    {
      id: 19,
      src:'assets/img/gordons.png',
      alt:'Side 19',
      title:'Side 19'
    },
    {
      id: 20,
      src:'assets/img/fernet-branca.png',
      alt:'Side 20',
      title:'Side 20'
    },
    {
      id: 21,
      src:'assets/img/chandon.png',
      alt:'Side 21',
      title:'Side 21'
    },
    {
      id: 22,
      src:'assets/img/blue-moon.png',
      alt:'Side 22',
      title:'Side 22'
    },
    {
      id: 23,
      src:'assets/img/beefeater.png',
      alt:'Side 23',
      title:'Side 23'
    },
    {
      id: 24,
      src:'assets/img/baron-b.png',
      alt:'Side 24',
      title:'Side 24'
    },
    {
      id: 25,
      src:'assets/img/baileys.png',
      alt:'Side 25',
      title:'Side 25'
    },
    {
      id: 26,
      src:'assets/img/absolut.png',
      alt:'Side 26',
      title:'Side 26'
    },
  ]

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 5
      },
      840: {
        items: 6
      },

      1040: {
        items: 9
      }
    },
    nav: false
  }

  ngOnInit(): void {

}

}
