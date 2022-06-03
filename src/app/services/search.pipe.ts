import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../components/interface';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(shows: News[], search = ''): News[] {
    if (!search.trim()) {
      return shows;
    }
    return shows.filter((show) => {
      return show.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
