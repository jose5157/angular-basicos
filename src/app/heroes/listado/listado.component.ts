import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {

  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    //const heroeBorrado = this.heroes.shift();
  //console.log(heroeBorrado);


}
}
