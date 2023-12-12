import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  districts=[
    {
    id:1,
    title:"Trivandrum",
    image:"https://www.ekeralatourism.net/wp-content/uploads/2019/01/places-to-visit.jpg",
    discription:"The capital city of Kerala, Thiruvananthapuram, popularly known by its colonial name Trivandrum, is a quiet, green, clean city with much to offer. Apart from several serene religious places, there are also beautiful beaches, hills, places of historical relevance, museums and a zoo. Basically, Trivandrum has something to offer no matter what your interests are, making it a very versatile destination."

  },
  {
    id:2,
    title:"Kollam",
    image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
    discription:"Kollam has been on the route map of spice traders for a very long time. Legendary explorers like Ibn Battuta to Marco Polo have talked about the prominence of Kollam district for centuries."
  },
  {
    id:3,
    title:"Pathanamthitta",
    image:"https://www.honeymoontourskerala.com/wp-content/uploads/2016/09/p1-1.gif",
    discription:"Pathanamthitta has boundaries with Idukki, and Kottayam districts in the northern side, Kollam district in the south, Alappuzha district in the west and has boundaries with Tamilnadu in the eastern sideways."
  }
]

}
