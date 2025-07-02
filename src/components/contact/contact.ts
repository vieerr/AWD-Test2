import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Gracias por contactarnos! Nos pondremos en contacto pronto.');
    this.closeModal();
    this.resetForm();
  }
  closeModal() {
    const modal = document.getElementById('contact_modal') as HTMLDialogElement;
    modal?.close();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
