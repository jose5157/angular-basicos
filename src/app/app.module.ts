import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './AppComponent';

//crear un modulo llamado ContadorModule
//hacer las declaraciones y exportaciones.

//import { HeroeComponent } from './heroes/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
   // HeroeComponent,
   // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,

    //importaraqui
    ContadorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
