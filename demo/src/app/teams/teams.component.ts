import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';

@Component({
  selector: 'st-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  URL : string = 'http://localhost:3000/teams';
  teams: Team[];
  constructor(private http: HttpClient) {

  }

  getTeams() {
    this.http.get(this.URL)
      .subscribe(response => this.teams = <Team[]>response);
  }

  ngOnInit(): void {
    this.getTeams();
  }


  addTeam(name: string) {
    this.http.post(this.URL, {"name": name })
      .subscribe((result) => {
        console.log(result);
        this.getTeams();
      }
      )
  }

  deleteTeam(id: number) {

    this.http.delete(`${this.URL}/${id}`)
      .subscribe((result) => {
        console.log(`Deleted team with id : ${id}`);
        this.getTeams();
      })
  }

}
