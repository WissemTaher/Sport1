import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams:any=[];
  constructor(private router:Router , private teamService:TeamService) { }

  ngOnInit() {
    // this.teams=JSON.parse(localStorage.getItem("teams") || "[]");
    this.teamService.getAllTeams().subscribe((response)=>{
      this.teams=response.teams;
      console.log(response.message);
  
    });
  }
  display(x:number){
    this.router.navigate([`teamInfo/${x}`]);
  }
  edit(x:number){
    this.router.navigate([`editTeam/${x}`]);

  }
  delete(x:number){
    // for (let i = 0; i < this.teams.length; i++) {
    // if (this.teams[i].id == x) {
    //   this.teams.splice(i,1);
    //   break;
    // }  
      
    // // }
    // localStorage.setItem("teams",JSON.stringify(this.teams));
    this.teamService.deleteTeam(x).subscribe((response)=>{
      alert(response.message);
      this.teamService.getAllTeams().subscribe((response)=>{
        this.teams=response.teams;
        console.log(response.message);
        this.router.navigate(["admin"]);
        
      })
    });
  }
}
