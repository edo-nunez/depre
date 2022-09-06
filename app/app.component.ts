import { Component, NgModule } from '@angular/core';
import { HistoriaDepre } from './modelo/historia-depre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public depreGuardada: Array <HistoriaDepre> = [];
  public nuevoHistorial: HistoriaDepre = {
    id: 0,
    nombre: '',
    detalle: '',
    imagen: ''
  }
  public imagen: string = 'https://www.juliapascual.com/wp-content/uploads/trastorno-depresivo-1.jpg'
  public imagen2: string = 'https://static4.abc.es/media/bienestar/2019/10/26/depresion--kunB--620x349@abc.jpg';
  public imagen3: string = 'https://lamenteesmaravillosa.com/wp-content/uploads/2015/12/6-signos-silenciosos-de-la-depresi%C3%B3n.jpg';
  public imagen4: string = 'https://www.nationalgeographic.com.es/medio/2020/01/07/depresion-y-ansiedad_2a453bd3_1280x853.jpg';

  public cambiarNombre(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }

  public cambiarDetalle(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.detalle = elemento.value;
  }

  public cambiarImagen(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.imagen = elemento.value;
  }

  public guardarHistorial(): void {
    // 1 nivel
    const copia: HistoriaDepre = {
      ...this.nuevoHistorial
    }
    copia.id = this.depreGuardada.length + 1;
    this.depreGuardada.push(copia);
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';
  }


}
