import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private accoutService = inject(AccountService);
  title = 'client';

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    let userString = localStorage.getItem('user');
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accoutService.currentUser.set(user);
  }

}
