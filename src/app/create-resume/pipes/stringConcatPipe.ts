import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'concat'
})
export class StringConcatPipe implements PipeTransform {
   transform(str1: string, str2: string,  isComma: boolean): string {
       if (isComma){
        return str1 + ',' +  str2;
       }else{
        return str1 + ' ' +  str2;
       }
   }
}
