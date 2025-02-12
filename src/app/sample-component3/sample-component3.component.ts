import { Component } from '@angular/core';
import { Component3Service } from '../SiblingCompnent/component3.service';

@Component({
  selector: 'app-sample-component3',
  standalone: false,
  templateUrl: './sample-component3.component.html',
  styleUrl: './sample-component3.component.css'
})
export class SampleComponent3Component {

     constructor(private sibling : Component3Service){}

    clearAllData(){
      this.sibling.clearData();
    }
}
