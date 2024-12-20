import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smtp-card',
  standalone: true,
  imports: [],
  templateUrl: './smtp-card.component.html',
  styleUrl: './smtp-card.component.scss'
})
export class SmtpCardComponent {

  @Input() title!: string
  @Input() icon!: string
}
