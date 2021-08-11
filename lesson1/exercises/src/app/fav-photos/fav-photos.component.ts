import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pix So Fav They Are Considered On Fleek';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://preview.redd.it/vu7halmtq1k41.jpg?width=960&crop=smart&auto=webp&s=cdc1f0b75589269cd7e14f30812b57acb56b02ac';
  image3 = 'https://funnyasduck.net/wp-content/uploads/2013/08/funny-guinea-pig-sun-glasses-animal-deal-with-it-pics.jpg';

  constructor() { }

  ngOnInit() {
  }

}