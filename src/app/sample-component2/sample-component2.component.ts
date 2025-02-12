import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-component2',
  standalone: false,
  templateUrl: './sample-component2.component.html',
  styleUrls: ['./sample-component2.component.css']
})
export class SampleComponent2Component {
  @Input() data: string[] = []; 
}
