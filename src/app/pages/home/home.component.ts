import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtpCardComponent } from '../../components/smtp-card/smtp-card.component';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SmtpCardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    {
      title: "Configuração",
      icon: "/assets/image/settings-3.svg"
    },
    {
      title: "Template",
      icon: "/assets/image/stack-3.svg"
    },
    {
      title: "Enviar",
      icon: "/assets/image/mail-2.svg"
    },
    {
      title: "SMTP",
      icon: "/assets/image/key-3.svg"
    }
  ]
}
