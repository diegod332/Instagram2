import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage implements OnInit {
  posts = [
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: 'Post 1',
      subtitle: 'Subtitulo 1',
      content: 'Este es el contenido del post 1.'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: 'Post 2',
      subtitle: 'Subtitulo 2',
      content: 'Este es el contenido del post 2.'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: 'Post 3',
      subtitle: 'Subtitulo 3',
      content: 'Este es el contenido del post 3.'
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: 'Post 4',
      subtitle: 'Subtitulo 4',
      content: 'Este es el contenido del post 4.'
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }
}