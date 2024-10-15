import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cosmetics : {name: string, type: string, price: number, image: string}[] = [
    {
      name: "Boost",
      type: "Sports", 
      price: 58.40,
      image: "https://ringana-media-library.imgix.net/2023/10/R_Produktfoto_sport-boost_2000x2000_Award.png?s=280a0cbdecb9d110026f13b42b9e433e"
    },
    {
      name: "Adds effect",
      type: "Skin care",
      price: 60.90,
      image: "https://ringana-media-library.imgix.net/2022/07/ringana-fresh-add-15ml-effect.png?s=557dd083edd7e8aa26c83e48f9a9e62e"
    },
    {
      name: "Spermidine",
      type: "Supplements",
      price: 95.90,
      image: "https://ringana-media-library.imgix.net/2024/03/RINGANA-Produktfoto-beyond-spermedine-2000x2000-1.png?s=ec10e6e0fbb718ea13c622bb3549a515"
    }]
}
