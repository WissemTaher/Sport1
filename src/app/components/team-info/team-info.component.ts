import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
team:any={};
teamTab:any=[];
id:any;
  constructor(private activatedRoute:ActivatedRoute , private teamService:TeamService) { }

  ngOnInit() {
    // this.teamTab=JSON.parse(localStorage.getItem("teams") || "[]");

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    // for (let i = 0; i < this.teamTab.length; i++) {

    //   if (this.team=this.teamTab[i].id == this.id) {
    //     this.team = this.teamTab[i];
    //     break;
    //   }
      
    // }
    this.teamService.getTeamById(this.id).subscribe((response)=>{
      this.team=response.team;
  });
  }
}

