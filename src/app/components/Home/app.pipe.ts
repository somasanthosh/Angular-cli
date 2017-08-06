import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'filterbyerrortype'})
export class FilterByErrorType implements PipeTransform {
  transform(data: any[], errorType: string): any[] {
     return  data.filter(ft=>ft.errorCodeType === errorType);
  }
}