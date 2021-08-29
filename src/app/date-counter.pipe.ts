import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value: any): number {
   

   let createYr = value.slice(0, -16);
  ;
   
   let createMonth = value.slice(5, -13)
  

   let createDate = value.slice(8, -10)
  

   let createMoment:any = new Date(createYr, createMonth-1, createDate);
   

   let today:any = new Date();

   var difference=Math.abs(createMoment-today);
   var diffInSeconds = difference*0.001;
   const seconds = 86400;
   var daysSince = Math.floor(diffInSeconds/seconds);
   
   return daysSince;
  }

}
