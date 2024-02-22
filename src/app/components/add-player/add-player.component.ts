import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm:FormGroup;
  player:any={};
  teams: any=[];
  teamId:any;
  constructor(private router:Router , private playerService:PlayerService, private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((result)=>{
      console.log(result);
      this.teams = result.teams;
    })
  }

  addPlayer(){
console.log("player object",this.player);
// let playersTab=JSON.parse(localStorage.getItem("players")|| "[]");
// this.player.id=generateId(playersTab);
// playersTab.push(this.player);
// localStorage.setItem("players",JSON.stringify(playersTab));
this.player.teamId=this.teamId;
console.log("the id of Team",this.player.teamId);

this.playerService.addPlayer(this.player).subscribe((response)=>{
  console.log("here the response from the Be" + "",response.message);
})
}

selectteamId(event) {
  console.log("here event",event.target.value);
  console.log("here id from name ",event.target.value);

  this.teamId=event.target.value;
  }
}