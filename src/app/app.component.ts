import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe'

  onNavigate (feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD4ySuAaFNqOIRDrJhwvDR-7Gwbtn7V0ZM",
      authDomain: "https://ng-recipe-book-e4e6b.firebaseapp.com"
    });
  }
}
