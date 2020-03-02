import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfinityBarService {

  private loaderSubject = new Subject<{ show: boolean }>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }
  show() {
    this.loaderSubject.next({ show: true } as { show: boolean });
  }
  hide() {
    this.loaderSubject.next({ show: false } as { show: boolean });
  }
}
