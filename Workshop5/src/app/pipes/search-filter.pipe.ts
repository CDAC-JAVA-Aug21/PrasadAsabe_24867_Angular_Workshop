import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search = args.toLowerCase();
    return value.filter(movie => {
      let movieName = movie.name.toLowerCase();
      return movieName.indexOf(search) !== -1 ;
    });
  }

}
