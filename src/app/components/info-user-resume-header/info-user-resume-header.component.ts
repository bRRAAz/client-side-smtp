import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-user-resume-header',
  imports: [],
  templateUrl: './info-user-resume-header.component.html',
  styleUrl: './info-user-resume-header.component.scss'
})
export class InfoUserResumeHeaderComponent {

  @Input() name: string = 'João Vitor'
  @Input() email: string = 'jvtomedi@gmail.com'

}
