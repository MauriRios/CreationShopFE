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
      src:'assets/img/sponsor1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/img/sponsor2.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      src:'assets/img/sponsor2.png',
      alt:'Side 6',
      title:'Side 6'
    },
    {
      id: 7,
      src:'assets/img/sponsor1.png',
      alt:'Side 7',
      title:'Side 7'
    },
    {
      id: 8,
      src:'assets/img/sponsor2.png',
      alt:'Side 8',
      title:'Side 8'
    },
    {
      id: 9,
      src:'assets/img/sponsor3.png',
      alt:'Side 9',
      title:'Side 9'
    },
    {
      id: 10,
      src:'assets/img/sponsor1.png',
      alt:'Side 10',
      title:'Side 10'
    },
    {
      id: 11,
      src:'assets/img/sponsor2.png',
      alt:'Side 11',
      title:'Side 11'
    },
    {
      id: 12,
      src:'assets/img/sponsor2.png',
      alt:'Side 12',
      title:'Side 12'
    }
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
        items: 2
      },
      400: {
        items: 3
      },
      840: {
        items: 5
      },

      1040: {
        items: 8
      }
    },
    nav: false
  }

  ngOnInit(): void {

}

}
