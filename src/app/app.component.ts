import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alumnos', url: '/alumno-list', icon: 'people' },
    { title: 'Profesor', url: '/profesor-list', icon: 'school' }
  ];

  constructor() {}
}
