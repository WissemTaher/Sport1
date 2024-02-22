import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any=[];

  constructor(private router:Router,private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((response)=>{
      this.teams=response.teams;
    });
    
  }
  showTeam(id){
    this.router.navigate([`teamPlayers/${id}`]);
    }
}
