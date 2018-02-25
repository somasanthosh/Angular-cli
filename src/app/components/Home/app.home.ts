import { Component , Inject} from '@angular/core';
import {errorData} from './error';
import {FilterByErrorType} from './app.pipe';
import {testing, fullName} from './app.test';
import * as $ from 'jquery';
import {ExcelService} from './app.excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.home.html',
   styleUrls: ['../../app.component.css'],
   providers: [ExcelService]
 })
export class HomeComponent {
 data:any [] = new Array();
 filterDataH: string = 'H';
 errorDataList: Array<errorData> = [];
  testData: any[] = [
    {
      id:1,
      severity: 'H',
      error:'DL17',
      name:'san',
      rejected:'Y'
    } , {
      id:2,
      severity: 'H',
      error:'DL17',
      name:'san1',
      rejected:'Y'
    },  {
      id:3,
      severity: 'H',
      error:'DL34',
      name:'san2',
      rejected:'Y'
    },  {
      id:4,
      severity: 'H',
      error:'DL17',
      name:'san3',
      rejected:' '
    },  {
      id:5,
      severity: 'H',
      error:'DL34',
      name:'san4',
      rejected:'Y'
    }, {
      id:6,
      severity: 'H',
      error:'H01',
      name:'san5',
      rejected:'Y'
    },
     {
      id:7,
      severity: 'W',
      error:'MM34',
      name:'san6',
      rejected:'N'
    },  {
      id:8,
      severity: 'W',
      error:'DL17',
      name:'san7',
      rejected:'F'
    },  {
      id:9,
      severity: 'H',
      error:'DL17',
      name:'san8',
      rejected:'F'
    },  {
      id:10,
      severity: 'W',
      error:'DL17',
      name:'san9',
      rejected:'F'
    },
    {
      id:11,
      severity: 'H',
      error:'SANTHOSHTEST',
      name:'san9',
      rejected:'F'
    }];

constructor(@Inject(ExcelService) public _reportService){
this.data.push(this.testData);
}

  ngOnInit() {
/*  $('[data-toggle="tooltip"]').tooltip({
    title: function () {
        return this.getData(this.id);
    }
}); */
  console.log(fullName);
 console.log(Array.isArray(this.testData));
let hardErrors = this.testData.filter(ts=>ts.severity === 'H');
    console.log(hardErrors);
let hardErrorsSorted = hardErrors.sort(this.mySorter);
console.log('after sorting hard errors');
console.log(hardErrorsSorted);
 let warnings = this.testData.filter(ts1=>ts1.severity === 'W');

 let warningsSorted = warnings.sort(this.mySorter);
console.log(warnings);

console.log(Array.isArray(this.errorDataList));
for(let i=0;i<hardErrorsSorted.length;i++){
  
  if(i!=hardErrorsSorted.length-1){

  if(hardErrorsSorted[i].error!= hardErrorsSorted[i+1].error){
    
let errorCount =  this.getCount(hardErrorsSorted, hardErrorsSorted[i].error);
this.errorDataList.push({errorCode: hardErrorsSorted[i].error, errorCodeType: 'H', errorCodeTotalCount: errorCount});
    } 
} else{
       if(hardErrorsSorted.includes(hardErrorsSorted[i].error, 0)){

      } else {
        let errorCount = this.getCount(hardErrorsSorted, hardErrorsSorted[i].error);
        this.errorDataList.push({errorCode: hardErrorsSorted[i].error, errorCodeType: 'H', errorCodeTotalCount: errorCount});
      }
    }
}
for(let i=0;i<warningsSorted.length; i++){
  if(i!=warningsSorted.length-1){
  if(warningsSorted[i].error!= warningsSorted[i+1].error){
let errorCount =  this.getCount(warningsSorted,  warnings[i].error);
this.errorDataList.push({errorCode: warningsSorted[i].error, errorCodeType: 'W', errorCodeTotalCount: errorCount});
  }
} else{
       if(warningsSorted.includes(warningsSorted[i].error, 0)){

      } else {
        let errorCount = this.getCount(warningsSorted, warningsSorted[i].error);
        this.errorDataList.push({errorCode: warningsSorted[i].error, errorCodeType: 'W', errorCodeTotalCount: errorCount});
      }
  }
}
console.log(this.errorDataList);
  }

getCount(data1: any, columnValue1: string): number {
  let count = data1.filter(ct=>ct.error === columnValue1);
return count.length;
}

mySorter(a: any, b:any) : any  {
let er1 = a.error.toUpperCase();
let er2 = b.error.toUpperCase();
if(er1<er2){
return -1;
}
if(er1>er2){
  return 1;
}
 }
 test(){
   return 'testing to see';
 }
  getData(id: any){
console.log(id);
  }
checkallharderrors() {
console.log('select all clicked');
console.log($('input[type="checkbox"]#herror').is(':checked'));
 $('#herror').each(function(){
if(this.checked === false){
  this.click();
}


 });
}
hideallharderrors() {
console.log($('input[type="checkbox"]#herror').is(':checked'));
  
}
getExcelReport() {
this._reportService.exportAsExcelFile(this.testData, 'test');
}
}