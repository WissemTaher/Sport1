import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  match:any={};

  matchesTab:any=[];

  id:any;
  
  constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
// get id value from active path
// this.matchesTab = JSON.parse(localStorage.getItem("matches")|| "[]");

this.id = this.activatedRoute.snapshot.paramMap.get("id");
console.log(this.id);

// search object by id 
    // for (let i = 0; i < this.matchesTab.length; i++) {

    //   if (this.match=this.matchesTab[i].id == this.id) {
    //     this.match = this.matchesTab[i];
    //     break;
this.matchService.getMatchById(this.id).subscribe((response)=>{
  this.match=response.match;
});
      }
      
    }
 