import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from '../../heroes/heroe.component';

import { ContadorComponent } from './contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent]
    
})
    
export class ContadorModule{

}