import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  editTeamForm:FormGroup;
  team:any={};
  teams:any=[];
  id:any;
  constructor(private activatedRoute:ActivatedRoute, private teamService:TeamService, private router:Router) { }

  ngOnInit() {
    // this.teams=JSON.parse(localStorage.getItem("teams") || "[]");
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.teamService.getTeamById(this.id).subscribe((response)=>{
this.team=response.team;
});
    // for (let i = 0; i < this.teams.length; i++) {
    //   if (this.teams[i].id == this.id) {
    //     this.team = this.teams[i];
    //     break;
    //   }
      
    // }
  }
  editTeam(){
    this.teamService.updateTeam(this.team).subscribe((response)=>{
      alert(response.message);
      this.router.navigate(["admin"])
      
    });
  }
}
