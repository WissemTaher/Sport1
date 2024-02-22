import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matchesTab:any=[];
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  //  this.matchesTab=JSON.parse(localStorage.getItem("matches") || "[]");
  this.matchService.getAllMatches().subscribe((response)=>{
    this.matchesTab=response.matches;
    console.log(response.message);

  });
  }
  update(objs:any) {
    this.matchesTab = objs;
    }
}
