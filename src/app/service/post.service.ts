import { Injectable } from "@angular/core";
import { post } from "../model/post";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PostService{

    async  loadAllPosts():Promise<post[]>{
      const response =   await fetch('https://jsonplaceholder.typicode.com/posts');
       const payload = await  response.json() as post[];
       return  payload;
      
    }

}