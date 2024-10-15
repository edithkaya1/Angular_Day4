import { Component } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  blogForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required),
    registrationDate: new FormControl('', Validators.required) 
  }   
  );
  onSubmit (){
    console.log(this.blogForm.value);
    if (this.blogForm.valid){
      let firstName = this.blogForm.value.firstName;
      let lastName = this.blogForm.value.lastName;
      let email = this.blogForm.value.email;
      let message = this.blogForm.value.message;
      let startingDate = this.blogForm.value.registrationDate;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for your message",
        showConfirmButton: false,
        timer: 1500
      });
      // window.alert("Thank you for your message!")
      this.blogForm.reset();
    }
  }
}
