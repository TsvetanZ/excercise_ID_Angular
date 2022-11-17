import { Component, ComponentFactoryResolver, Inject, Optional } from '@angular/core';
import { MyClass, myCustomToken } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  users = [
    {
      name: 'Ivan'
    },
    {
      name: 'Pesho'
    }
  ];


  constructor (
   // @Inject(myCustomToken) test1:string,
  // @Optional() @Inject(myCustomToken) test1: string,
  // @Inject('Test') test: string
 // test: MyClass// заместваме го с @Inject (MyClass) test: MyClass // това е едно и също с 
 
 ) {
 //console.log(test)

   //setInterval(() => {
    //  this.counter ++;
    //}, 3000);
 }
  addUserHandler = (nameInput: HTMLInputElement) :void => {
    const { value: name } = nameInput;
    //this.users.push({ name });
    this.users = this.users.concat({name})
    nameInput.value = '';
  }
}
