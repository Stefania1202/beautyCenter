import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/modules/posts/post.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: Post[], searchSalon: string): Post[] {
    if (!posts || !searchSalon) {
      return posts;
    }
    return posts.filter(post => post.city.toLowerCase().indexOf(searchSalon.toLowerCase()) !== -1);
  }
}
