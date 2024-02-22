import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
@Component({
selector: 'app-team-players',
templateUrl: './team-players.component.html',
styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent implements OnInit {
players: any=[];
id: any;
name:string;
constructor(private teamService: TeamService, private activatedRoute:
ActivatedRoute) { }
ngOnInit() {
this.id = this.activatedRoute.snapshot.paramMap.get("id");
console.log(this.id);
this.teamService.getPlayersbyTeam(this.id).subscribe((response) =>
{
console.log(response);
this.name = response.team.name;
this.players = response.team.players;
console.log(response.team.players);
})
}
}

