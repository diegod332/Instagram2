import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false
})
export class CardPostComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit() {}

  likePost() {
    console.log('Post likeado');
  }

  commentPost() {
    console.log('Comentando post');
  }

  sharePost() {
    console.log('Post compartido');
  }
}