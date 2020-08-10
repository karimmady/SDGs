import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }
  question:any

  setQuestion(data){
    this.question = data;
  }
  getQuestion(){
    return this.question;
  }
}
