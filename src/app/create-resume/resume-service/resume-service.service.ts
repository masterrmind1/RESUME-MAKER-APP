import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {

  data = new Subject();
  printSubject = new Subject();
  constructor() { }

  setResumeData(data): any{
    this.data.next(data);
  }

  getResumeData(): Observable<any>{
    return this.data.asObservable();
  }

  sendPrintCommand(): any{
    console.log("service send print")
    this.printSubject.next('');
  }

  getPrintCommand(): Observable<any>{
    console.log("service return print")
    return this.printSubject.asObservable();
  }
}
