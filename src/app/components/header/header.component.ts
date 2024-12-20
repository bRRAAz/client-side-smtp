import { Component } from '@angular/core';
import { InfoUserResumeHeaderComponent } from "../info-user-resume-header/info-user-resume-header.component";
import { ControlNavBarComponent } from "../control-nav-bar/control-nav-bar.component";

@Component({
  selector: 'app-header',
  imports: [InfoUserResumeHeaderComponent, ControlNavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
