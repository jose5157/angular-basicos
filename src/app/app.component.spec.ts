import { TestBed } from '@angular/core/testing';
import { AppComponent } from "./AppComponent";
import { ContadorComponent } from './contador/contador/contador.component';
import { Component } from '@angular/core';
import { HeroeComponent } from './heroes/heroe.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent ,
       // ContadorComponent,
       // HeroeComponent,
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    //const fixture = TestBed.createComponent(AppComponent);
    const fixture = TestBed.createComponent(ContadorComponent); 
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bases'`, () => {
    //const fixture = TestBed.createComponent(AppComponent);
    const fixture = TestBed.createComponent(ContadorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bases');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('bases app is running!');
  });
});
