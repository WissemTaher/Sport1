import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
// players:any=[];
playerstab:any=[];

  constructor(private router:Router , private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe((response)=>{
      this.playerstab=response.players;
      console.log("this is a meesage from BE",response.message);
  
    });
  }
  display(x:number){
    this.router.navigate([`playerInfo/${x}`]);

  }
  edit(x:number){
    this.router.navigate([`editPlayer/${x}`]);
    
  }
  delete(x:number){
    // for (let i = 0; i < this.playerstab.length; i++) {
    // if (this.playerstab[i].id == x) {
    //   this.playerstab.splice(i,1);
    //   break;
    // }  
      
    // }

    // localStorage.setItem("players",JSON.stringify(this.playerstab));
    this.playerService.deletePlayer(x).subscribe((response)=>{
      alert(response.message);
      this.playerService.getAllPlayers().subscribe((response)=>{
        this.playerstab=response.players;
        console.log( response.players);
        this.router.navigate(["admin"]);
        
      })
    });
  }

}
