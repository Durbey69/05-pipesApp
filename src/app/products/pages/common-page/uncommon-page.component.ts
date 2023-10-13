import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UnCommonPageComponent {

    //i18n Select
    public name: string = 'Durbey';
    public gender: 'male'|'female' = 'male'
    public invitationMap = {
      male: 'invitarlo',
      female: 'invitarla'
    }


    changeClient():void{
      this.name = 'Melissa'
      this.gender = 'female'
    }


    //i18nPlural
    public clients: string[] = ['Durbey','Alexis','Piedad','Lorena','Isaza','Karolhayn','Yesid','Alberto']
    public clientsMap = {
       '=0':'no tenemos ningun cliente esperando',
       '=1':'tenemos un cliente esperando.',
       '=2':'tenemos 2 clientes esperando',
       'other': 'tenemos # clientes esperando'
    }

    deleteClient():void{
      this.clients.shift();
    }

    public person = {
      name: 'Durbey',
      age: 28,
      address: 'Colombia, Medallo'
    }

    //Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log('tap:', value))
    );

    public promiseValue: Promise<string> = new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve('Tenemos la data de la promesa')
      },3500)
    })


}
