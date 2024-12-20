import { Component, Input } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-nav-bar',
  imports: [NavBarComponent, CommonModule],
  templateUrl: './control-nav-bar.component.html',
  styleUrl: './control-nav-bar.component.scss'
})
export class ControlNavBarComponent {

  @Input() isVisible: boolean = false;

  visibility(){
    this.isVisible = !this.isVisible
    console.log(this.isVisible)
  }
}
