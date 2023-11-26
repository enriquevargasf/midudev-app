import { Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; //lazy loading the imagenes


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midudev-app';


  //constructor(private http: HttpClient){}

  changeTitle(){
    this.title = 'changed';
  }

 
}
