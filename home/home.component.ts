import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target as HTMLFormElement)
    emailjs.sendForm('service_dte4ecg', 'template_o1c0ld9', e.target as HTMLFormElement, 'szFNhaJujU5Xuw9YL')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        location.reload();
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
