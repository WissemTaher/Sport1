import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() X:any;
 


  constructor(private playerService:PlayerService,) { }

  ngOnInit() {
   
  }

}
