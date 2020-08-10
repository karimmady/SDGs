import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum-question',
  templateUrl: './forum-question.component.html',
  styleUrls: ['./forum-question.component.css']
})
export class ForumQuestionComponent implements OnInit {

  question:any;
  showReplyModal = false;
  validateForm: FormGroup;

  constructor(private ForumService:ForumService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.question = this.ForumService.getQuestion();
    this.validation();
  }
  showReply(){
    this.showReplyModal = true;
  }

  handleCancel() {
    this.showReplyModal = false;
  }
  validation() {
    this.validateForm = this.fb.group({
      answer: [null, [Validators.required]]
    });
  }
  submitReply(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status == "VALID") {
     console.log(this.validateForm.value)
    }
  }

}
