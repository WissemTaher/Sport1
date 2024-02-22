import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
teamForm:FormGroup;
team:any={};
  constructor(private router:Router , private teamService:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    console.log("Team Object",this.team);
    // let teamTab=JSON.parse(localStorage.getItem("teams") || "[]");
    // this.team.id = generateId(teamTab);
    // teamTab.push(this.team);
    // localStorage.setItem("teams",JSON.stringify(teamTab));
    this.teamService.addTeam(this.team).subscribe((response)=>{
    console.log("here the response from the BE"+"",response.message);
    
    
      });
       this.router.navigate(["admin"]);
    
  }
}
