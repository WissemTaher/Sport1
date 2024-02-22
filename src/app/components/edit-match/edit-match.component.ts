import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editMatchForm:FormGroup;
  match:any={};
  matches:any=[];
  id:any;
  constructor(private activatedRoute:ActivatedRoute , private matchService:MatchService, private router:Router) { }

  ngOnInit() {
// this.matches=JSON.parse(localStorage.getItem("matches") || "[]");
this.id = this.activatedRoute.snapshot.paramMap.get("id");
this.matchService.getMatchById(this.id).subscribe((response) =>{
  this.match=response.match;

});
// for (let i = 0; i < this.matches.length; i++) {
//   if (this.matches[i].id == this.id) {
//     this.match = this.matches[i];
//     break;
//   }
  
// }

  }

  editMatch(){
this.matchService.updateMatch(this.match).subscribe((response) =>{
  alert(response.message);
  this.router.navigate(["admin"]);
});
   
  }
}
