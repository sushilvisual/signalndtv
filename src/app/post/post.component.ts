import { Component, input } from '@angular/core';
import { post } from '../model/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts= input.required<post[]>({alias:'data'});
  posts1= input<post[]>([],{alias:'data'});

}
