import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  user?: string; // Add the ? modifier to make the property optional
  movie?: string; // Add the ? modifier to make the property optional

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {}
  // Define the submitRequest method
  submitRequest() {
    // Logic to handle form submission
    console.log('submit request button clicked');

    let request_form_data = {
      user: this.user,
      movie: this.movie,
    };

    // here is where i was working on last
    this.http
      .post('http://localhost:4000/request-form', request_form_data)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('request has been submitted successfully :)');
        this.router.navigateByUrl('/');
      });
  }
}
