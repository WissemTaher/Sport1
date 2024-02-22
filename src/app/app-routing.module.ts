import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { OurblogsComponent } from './components/ourblogs/ourblogs.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamPlayersComponent } from './components/team-players/team-players.component';
import { SearchComponent } from './components/search/search.component';
import { TeamsComponent } from './components/teams/teams.component';
import { WeatherComponent } from './components/weather/weather.component';







const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"score",component:ScoreComponent},
  {path:"addMatch",component:AddMatchComponent},
  {path:"addPlayer",component:AddPlayerComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"Subscription",component:SignupComponent},
  {path:"signupAdmin",component:SignupComponent},
  {path:"SignIN",component:LoginComponent},
  {path:"Allmatches",component:MatchesComponent},
  {path:"allPlayers",component:PlayersComponent},
  {path:"admin",component:AdminComponent},
  {path:"ourBlogs",component:OurblogsComponent},
  {path:"article",component:ArticleComponent},
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"editMatch/:id",component:EditMatchComponent},
  {path:"editPlayer/:id",component:EditPlayerComponent},
  {path:"playerInfo/:id",component:PlayerInfoComponent},
  {path:"editTeam/:id",component:EditTeamComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"profile",component:ProfileComponent},
  {path:"teamPlayers/:id",component:TeamPlayersComponent},
  {path:"search",component:SearchComponent},
  {path:"teams",component:TeamsComponent},
  {path:"weather",component:WeatherComponent},
















 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
