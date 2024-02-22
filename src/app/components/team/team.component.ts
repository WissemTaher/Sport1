import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() X:any={};
  teamsTab:any=[];

  constructor(private teamService:TeamService, private router:Router) { }

  ngOnInit() {
   
    }
    update(objs:any) {
      this.teamsTab = objs;
  }
  
}
