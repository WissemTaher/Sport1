import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerUrl:string="http://localhost:3000/players";
constructor(private httpClient:HttpClient) { }

addPlayer(obj){
  console.log("here the object from the FE",obj);
return this.httpClient.post <{message:String}>(this.playerUrl,obj);
}
getAllPlayers(){
  return this.httpClient.get <{players:any,message:string}>(this.playerUrl);
}
getPlayerById(id){
  return this.httpClient.get <{player:any}>(`${this.playerUrl}/${id}`);
}
updatePlayer(newObj){
  return this.httpClient.put <{message:string}>(this.playerUrl,newObj);
    }
deletePlayer(id){
      return this.httpClient.delete <{message:string}>(`${this.playerUrl}/${id}`);
    }
 
}

