import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {
  transform(value: Array<any>, searchString: string): any {
/*     console.log(
      value.filter((ele) =>
        ele.title
          .toLowerCase()
          .trim()
          .includes(searchString.toLowerCase().trim())
      )
    ); */
    return value.filter((ele) =>
      ele.title.toLowerCase().trim().includes(searchString.toLowerCase().trim())
    ).length;
  }
}
