import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() X:any;
@Output() newMatches:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  scoreColor(T1,T2){
if (T1>T2) {

  return "green"

} else if (T1<T2) {

  return "orange"

} else{

  return "blue"
}
  }
  scoreTeam(T1,T2){
  if (T1>T2) {
    return 'win'
  }else if (T1<T2) {
    return 'loss'
  }else{
    return 'draw'
  }
}
delete(id){
  let matchesTab=JSON.parse(localStorage.getItem("matches") || "[]")
  for (let i = 0; i < matchesTab.length; i++) {
    if (matchesTab[i].id == id) {
     matchesTab.splice(i,1);
     this.newMatches.emit(matchesTab);
     break;
    }
    
  }
localStorage.setItem("matches",JSON.stringify(matchesTab));
}
}
