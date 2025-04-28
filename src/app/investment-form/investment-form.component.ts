// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-investment-form',
//   imports: [],
//   templateUrl: './investment-form.component.html',
//   styleUrl: './investment-form.component.css'
// })
// export class InvestmentFormComponent {

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class InvestmentFormComponent implements OnInit {
  investmentForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.investmentForm = this.fb.group({
      goal: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      amount: ['', [Validators.required, Validators.min(999)]],
      riskLevel: ['', Validators.required],
      horizonType: ['', Validators.required],
    });

    this.initializeTextToSpeech();
  }

  
  initializeTextToSpeech(): void {
    const fields = document.querySelectorAll('input, select, button');

    fields.forEach(field => {
      field.addEventListener('focus', () => {
        this.speakText(field);
      });
    });
  }


  speakText(element: Element): void {
    const text = element.getAttribute('aria-label') || element.getAttribute('placeholder') || element.textContent;
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Normal speaking rate
      utterance.pitch = 1; // Default pitch
      window.speechSynthesis.speak(utterance);
    }
  }

  selectRisk(risk: string): void {
    this.investmentForm.patchValue({ riskLevel: risk });
    this.speakText(document.querySelector(`.risk-buttons .btn:contains('${risk}')`)!);
  }

  selectHorizon(horizon: string): void {
    this.investmentForm.patchValue({ horizonType: horizon });
    this.speakText(document.querySelector(`.horizon-buttons .btn:contains('${horizon}')`)!);
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      console.log('Form Submitted!', this.investmentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  logout() {
    // Optional: Clear any stored session data here
    this.router.navigate(['']); // navigate to login page
  }
  products() {
    // Optional: Clear any stored session data here
    this.router.navigate(['/products']); // navigate to login page
  }
  home() {
    // Optional: Clear any stored session data here
    this.router.navigate(['/landing']); // navigate to login page
  }
}
