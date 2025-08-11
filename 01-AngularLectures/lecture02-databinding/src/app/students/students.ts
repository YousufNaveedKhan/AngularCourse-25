import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  studentName: string = 'Ahmed';
  studentAge: number = 17;
  isActive: boolean = false;

  studentsList = ['Hanzala', 'Asaad', 'Sajida', 'Aneesa'];

  showMessage() {
    alert(`Hello, This is a message from Students Component!`);
  }
}
