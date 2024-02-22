import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { TeamComponent } from './components/team/team.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurblogsComponent } from './components/ourblogs/ourblogs.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleTableComponent } from './components/article-table/article-table.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { FilterPipe } from './pipes/filter.pipe';
import { JwtInterceptorServiceService } from './services/jwt-interceptor-service.service';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { TeamPlayersComponent } from './components/team-players/team-players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { WeatherComponent } from './components/weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScoreComponent,
  
    BlogsComponent,
    NextMatchComponent,
    TeamComponent,
    VideosComponent,
    OurblogsComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    SignupComponent,
    LoginComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    ArticleComponent,
    ArticleTableComponent,
    BannerComponent,
    MatchInfoComponent,
    AsterixPipe,
    EditMatchComponent,
    EditPlayerComponent,
    PlayerInfoComponent,
    EditTeamComponent,
    TeamInfoComponent,
    FilterPipe,
    ProfileComponent,
    SearchComponent,
    TeamPlayersComponent,
    TeamsComponent,
    TeamComponent,
    WeatherComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorServiceService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
