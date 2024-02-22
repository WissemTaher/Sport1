import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';



@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm:FormGroup;
  match:any={};

  constructor(private router:Router , private matchService:MatchService) { }

  ngOnInit() {
  }

  addMatch(){
    console.log("match object",this.match);
  //  let matchesTab = JSON.parse(localStorage.getItem("matches")||"[]");
  //  this.match.id =generateId(matchesTab);
  //  matchesTab.push(this.match);
  //  localStorage.setItem("matches",JSON.stringify(matchesTab));
  this.matchService.addMatch(this.match).subscribe((response)=>{
  console.log(response.message);

  });
   this.router.navigate(["admin"]);
};
  
  // T=[{id:2},{id:3},{id:4},]
//   generateId(T:any){
// let max;
// if (T.length==0) {
//   max = 0;

// } else {
//   max = T[0].id;
//   for (let i = 0; i < T.length; i++) {
//     if (T[i].id > max) {
//       max = T[i].id
//     }
    
//   }
// }
// return max+1;
//   }


}
