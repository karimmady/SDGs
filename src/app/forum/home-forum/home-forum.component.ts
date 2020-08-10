import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-forum',
  templateUrl: './home-forum.component.html',
  styleUrls: ['./home-forum.component.css']
})
export class HomeForumComponent implements OnInit {

  questions = [
    {
      "title":"Which is better?",
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus, fringilla leo ac, vehicula nunc. Nunc ultricies tortor justo, sed euismod justo semper vel. Ut tortor ex, blandit eget massa sit amet, scelerisque iaculis tortor. Phasellus vel blandit nisl. Lorem ipsum dolor sit amet.",
      "by": "Dell",
      "answers":[
        {
          "by":"dell",
          "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus,"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus,"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        },
        {
          "by":"dell",
          "answer":"yes for sure"
        }
      ]
    },
    {
      "question": "hi hello",
      "by": "Dell"
    },
    {
      "question": "hi hello",
      "by": "Dell fdsfsfdfsfsdfsd dfsdfsfsdf sfdfds"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus, fringilla leo ac, vehicula nunc. Nunc ultricies tortor justo, sed euismod justo semper vel. Ut tortor ex, blandit eget massa sit amet, scelerisque iaculis tortor. Phasellus vel blandit nisl. Lorem ipsum dolor sit amet.",
      "by": "Dell"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus, fringilla leo ac, vehicula nunc. Nunc ultricies tortor justo, sed euismod justo semper vel. Ut tortor ex, blandit eget massa sit amet, scelerisque iaculis tortor. Phasellus vel blandit nisl. Lorem ipsum dolor sit amet.",
      "by": "Dell"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus, fringilla leo ac, vehicula nunc. Nunc ultricies tortor justo, sed euismod justo semper vel. Ut tortor ex, blandit eget massa sit amet, scelerisque iaculis tortor. Phasellus vel blandit nisl. Lorem ipsum dolor sit amet.",
      "by": "Dell"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sodales enim. Cras varius ex maximus, fringilla leo ac, vehicula nunc. Nunc ultricies tortor justo, sed euismod justo semper vel. Ut tortor ex, blandit eget massa sit amet, scelerisque iaculis tortor. Phasellus vel blandit nisl. Lorem ipsum dolor sit amet.",
      "by": "Dell"
    },
  ]
  validateForm: FormGroup;
  showAskQuestionModal = false;

  constructor(private ForumService: ForumService, private Router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation()
  }

  showAskQuestion() {
    this.showAskQuestionModal = true;
  }
  handleCancel() {
    this.showAskQuestionModal = false;
  }
  validation() {
    this.validateForm = this.fb.group({
      question: [null, [Validators.required]],
      title: [null, [Validators.required]]
    });
  }

  viewQuestion(data){
    this.ForumService.setQuestion(data);
    this.Router.navigate(["forum/question"])
  }
  async submitQuestion() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status == "VALID") {
     console.log(this.validateForm.value)
    }

  }
}
