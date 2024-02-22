import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm:FormGroup;
  player:any={};
  players:any=[];
  id:any;
  constructor(private activatedRoute:ActivatedRoute , private playerService:PlayerService, private router:Router) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem("players")|| "[]");
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe((response)=>{
      this.player=response.player;
    })
//     for (let i = 0; i < this.players.length; i++) {
//       if (this.players[i].id == this.id) {
//         this.player = this.players[i];
//         break;
//   }

// }
  }
  editPlayer(){
    this.playerService.updatePlayer(this.player).subscribe((response)=>{
      alert(response.message);
      this.router.navigate(["admin"])
      
    });
  }
}