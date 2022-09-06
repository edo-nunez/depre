import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-depre',
  templateUrl: './mostrar-depre.component.html',
  styleUrls: ['./mostrar-depre.component.scss']
})
export class MostrarDepreComponent {

@Input() public imagen:string = '';
private depreError: string = 'https://www.redeszone.net/app/uploads-redeszone.net/2021/09/Error-404-01-e1633683457508.jpg?x=480&quality=40';
public cambiarDepreError(): void {
  this.imagen = this.depreError }

}
