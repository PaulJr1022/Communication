import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Component3Service {

  private data = new Subject<void>();

  newData = this.data.asObservable();

  clearData() {
    this.data.next(); // Notify all components
  }
 
}
