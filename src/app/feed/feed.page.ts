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
      image: 'https://i.scdn.co/image/ab67616d0000b273e2e093427065eaca9e2f2970',

      content: 'Nata Montana sale mañana a las 12:00 PM viejillos eaa.',
      user: {
        name: 'Natanael Cano',
        date: 'Hace 1 hora',
        avatar: 'https://th.bing.com/th/id/OIP.UxG3rlImzU5muMpoRVzgSQHaHa?rs=1&pid=ImgDetMain'
      }
    },
    {
      image: 'https://th.bing.com/th/id/R.98eef5af5a19d7080845fe51311d957f?rik=Zl7Frh%2b5bpFi2w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-zKX8CREi3QY%2fT2OMZgW3s6I%2fAAAAAAAAWzg%2f5sFH754c6sw%2fs1600%2fLos-mas-Hermosos-Paisajes-Naturales_04.jpg&ehk=A5duiR2F2V2mfQjbuU33wpthxZXzqvPo5UMVfvokH9Y%3d&risl=&pid=ImgRaw&r=0',
      content: 'Me gusta esta imagen',
      user: {
        name: 'Brenda',
        date: 'Hace 2 horas',
        avatar: 'https://th.bing.com/th/id/R.a3c477b7d7022f7f68ad053a5fe8bcc9?rik=oNqKpKt1kf6RJQ&pid=ImgRaw&r=0'
      }
    },
  ];

  constructor() { }

  ngOnInit() {}
}