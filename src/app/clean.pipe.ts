import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {
  REPLACE_STRING = "$%#@!";

  transform(value: any, args?: any): any {
    let result = value;
    if (typeof(args) == "string") {
      args.split(",").forEach(word => {
        result = result.replace(word, this.REPLACE_STRING);
      });
    }
    
    return result;
  }

}
