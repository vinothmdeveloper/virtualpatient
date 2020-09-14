import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-getmobilenumber',
  templateUrl: './getmobilenumber.page.html',
  styleUrls: ['./getmobilenumber.page.scss'],
})
export class GetmobilenumberPage implements OnInit {

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

}
