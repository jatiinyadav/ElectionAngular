import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  name1: string = "Jatin Yadav";
  name2: string = "Apoorva Kumar";
  name3: string = "Deepak Mishra";
  name4: string = "Bhavy Mishra";

  subtitle1: string = "Developer";
  subtitle2: string = "Law";
  subtitle3: string = "Law";
  subtitle4: string = "Law";

  description1: string = "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";
  description2: string = "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";
  description3: string = "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";
  description4: string = "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";

}
