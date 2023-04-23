import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})

export class TeamsListComponent {

  @Input() name: string = "";
  @Input() subtitle: string = "";
  @Input() image: string = "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png";
  @Input() description: string = "";
  @Input() linkedinLink: string = "";
  @Input() emailLink: string = "";


}
