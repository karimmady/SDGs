import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-recieved-requests',
  templateUrl: './recieved-requests-ngo.component.html',
  styleUrls: ['./recieved-requests-ngo.component.css']
})
export class RecievedRequestsNgoComponent implements OnInit {

  recievedRequests: any;
  requests = [];
  projects: any;
  ngo: any;
  selectedValue = null;

  constructor(
    private requestService: RequestService,
    private projectService: ProjectService
  ) { }

  async ngOnInit() {
    this.ngo = JSON.parse(localStorage.getItem('info'));
    this.projects = await this.projectService.getCreatedProjects();
  }

  async getRequests() {
    if (this.selectedValue) {
      this.requests = [];
      this.recievedRequests = await this.requestService.getRecievedRequests(this.selectedValue);
      let row = [];
      for (var i = 0; i < this.recievedRequests.length; i++) {
        if (row.length < 2)
          row.push(this.recievedRequests[i])

        if (row.length == 2) {
          this.requests.push(row)
          row = [];
        }
      }
      if (row.length > 0)
        this.requests.push(row);
    } else {
      this.requests = [];
    }
  }

  async updateRequests(event) {
    await this.getRequests();
  }
}