import { Component, OnInit } from '@angular/core';
import { Component3Service } from '../SiblingCompnent/component3.service';

@Component({
  selector: 'app-sample-component1',
  standalone: false,
  templateUrl: './sample-component1.component.html',
  styleUrl: './sample-component1.component.css'
})
export class SampleComponent1Component implements OnInit {
  userInput: string = '';
  textData: string[] = []; 

  constructor(private sharedService : Component3Service) {}


  ngOnInit() {

    this.sharedService.newData.subscribe(() => {
      this.textData = []; 
    });
  }

  saveData() {
    if (this.userInput.trim()) {
      this.textData.push(this.userInput); 
      this.userInput = ''; 
    }
  }
  }

