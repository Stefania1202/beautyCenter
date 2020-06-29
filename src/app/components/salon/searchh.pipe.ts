import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/modules/posts/post.model';

@Pipe({
  name: 'searchh'
})
export class SearchhPipe implements PipeTransform {

  transform(posts: Post[], searchCity: string): Post[] {
    if (!posts || !searchCity) {
      return posts;
    }
    return posts.filter(post => post.name.toLowerCase().indexOf(searchCity.toLowerCase()) !== -1);
  }
}