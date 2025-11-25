import { NgIf } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { Component, Inject, OnInit, Signal, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';
import { post } from './model/post';
import { PostService } from './service/post.service';
import { PostComponent } from './post/post.component';
type counter={
   value:number
} 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  
})
export class AppComponent   {
     count=signal(0)
     arr= signal<Array<number>>([1,2,3,4]);
     computed = computed(()=>{
         return  this.arr().length;
     });
    ]]




    hg
     numberCounter = signal<counter>({value:1});
    incr() {
      this.count.update((a)=>a+1);
      this.arr.update((a)=>[...a,1]);
      this.numberCounter.update((a)=>({...a,value:a.value+1}));
    }
    decr(){
      this.count.update((a)=>a-1);
    }
}
