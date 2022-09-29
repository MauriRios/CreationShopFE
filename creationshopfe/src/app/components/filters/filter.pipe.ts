import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const item of value) {
      if (item.marca.toLowerCase().startsWith(arg.toLowerCase())){
        resultPosts.push(item);
      };
    };
    return resultPosts;
  }

    }


