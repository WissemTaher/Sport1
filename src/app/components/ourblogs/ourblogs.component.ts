import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.css']
})
export class OurblogsComponent implements OnInit {
article:any=[{date:"25/01/2025",description:"RealMadrid vs PSG",title:"Final Game"},
{date:"26/07/2025",description:"Barcelona vs Lille",title:"Final Game Chamipions League"},
]
  constructor() { }

  ngOnInit() {
  }

}
