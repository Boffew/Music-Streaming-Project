import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from './../../services/current-user/current-user.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public coverUrl : string ="https://res.cloudinary.com/dfxonocct/image/upload/v1698215036/pexels-vishnu-r-nair-1105666_wr1zgc.jpg"

  constructor(private currentUserService : CurrentUserService, private router : Router) { }

  ngOnInit(): void {
      if (this.currentUserService.isLoggedIn())
        this.router.navigateByUrl("/tabs")
  }

}
