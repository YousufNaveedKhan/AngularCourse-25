import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  studentName = "Hanzala";
  studentAge = 17;
  isActive = false;
  students = ["Hanzala", "Aneesa", "Sajida", "Asaad"];
}
