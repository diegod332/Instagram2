import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  posts = [
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }
}