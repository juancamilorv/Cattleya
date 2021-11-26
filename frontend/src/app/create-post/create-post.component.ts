import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  content: string = 'Hola a todos';
  texto: string = '';
  errorMessage = 'Este campo es requerido.';

  constructor(public postService: PostService) {}

  ngOnInit(): void {}

  showText() {
    this.content = this.texto;
  }

  addPost(form: NgForm) {
    if (form.valid) {
      this.postService.addPost(form.value);
      form.resetForm();
    }
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
