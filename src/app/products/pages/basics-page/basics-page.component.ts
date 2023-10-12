import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'durbey'
  public nameUper: string = 'DURBEY'
  public titleName: string = 'DuRbeY CHavarrIa'


  public customDate: Date = new Date();

}
