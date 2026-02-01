import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../service/list-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public username: string = '';
  public password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: ListService
  ) {}

  public onSubmit() {
    this.authService.login('');

    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/list-details';

    this.router.navigateByUrl(returnUrl);
  }
}
