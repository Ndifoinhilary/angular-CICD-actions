import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  number1 : string = '';
  number2 : string = ''
  isChecked : boolean = false;

  isCheck(){
    this.isChecked = !this.isChecked;
  }
}
