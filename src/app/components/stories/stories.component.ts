import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // 👈 Importa IonicModule

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule] // 👈 Agrega IonicModule aquí
})
export class StoriesComponent implements OnInit {

  // 👇 Define la historia del usuario actual
  userStory = { 
    username: 'Yo', 
    image: 'https://th.bing.com/th/id/OIP.RP6q_IchUHbl6131Mo04pQHaHa?rs=1&pid=ImgDetMain' 
  };

  stories = [
    { username: 'Goku', image: 'https://orig00.deviantart.net/fa10/f/2017/107/7/2/goku_dbs_by_xyelkiltrox-db647dj.png' },
    { username: 'Brenda', image: 'https://th.bing.com/th/id/R.a3c477b7d7022f7f68ad053a5fe8bcc9?rik=oNqKpKt1kf6RJQ&pid=ImgRaw&r=0' },
    { username: 'Ovi', image: 'https://th.bing.com/th/id/OIP.0cCGP06FFN7nD2t7LE2pRAHaHp?rs=1&pid=ImgDetMain' },
    { username: 'Natanael Cano', image: 'https://th.bing.com/th/id/OIP.UxG3rlImzU5muMpoRVzgSQHaHa?rs=1&pid=ImgDetMain' },
    { username: 'Peso Pluma', image: 'https://th.bing.com/th/id/OIP.ey3MnjIqRDkPyDrCKks8UQHaEs?rs=1&pid=ImgDetMain' },
    { username: 'Carlos', image: 'https://th.bing.com/th/id/R.7a5aa57989ff23819a53c74b1f0e5d63?rik=3jIPmDH0L23uPQ&pid=ImgRaw&r=0' },
    { username: 'Pedro', image: 'https://th.bing.com/th/id/R.e8df2cdc6758bbc8fbdaa2c9e5017585?rik=lv1cCa9y1RgPqw&riu=http%3a%2f%2fwww.horizontedematamoros.com.mx%2fwp-content%2fuploads%2f2020%2f04%2f261573955281_XXL.jpg&ehk=BScKWs5gTpxVhJVeerBMG%2bqW1zP%2bS%2bjDquHSWuonE%2fM%3d&risl=&pid=ImgRaw&r=0' },
  ];

  constructor() {}

  ngOnInit() {}

}
