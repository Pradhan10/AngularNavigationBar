import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

let myApp;

describe('AppComponent', () => {
  beforeEach(async(() => {
    myApp = new AppComponent();
  }));

  it('should create the app', () => {
    expect(myApp).toBeDefined();
  });

  it(`should have as title property`, () => {
    expect(myApp.title).toBeDefined();
  });


});
