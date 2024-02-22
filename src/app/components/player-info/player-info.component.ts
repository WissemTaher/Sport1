import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
player:any={};
playersTab:any=[];
id:any;
  constructor(private activatedRoute:ActivatedRoute , private playerService:PlayerService) { }

  ngOnInit() {
    // this.playersTab = JSON.parse(localStorage.getItem("players")|| "[]");

this.id = this.activatedRoute.snapshot.paramMap.get("id");
console.log(this.id)
// for (let i = 0; i < this.playersTab.length; i++) {

//   if (this.player=this.playersTab[i].id == this.id) {
//     this.player = this.playersTab[i];
//     break;
//   }
  
// }
this.playerService.getPlayerById(this.id).subscribe((response)=>{
  this.player=response.player;
})
  }

}
