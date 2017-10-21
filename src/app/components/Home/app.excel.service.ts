import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
      let openJson = json.filter(op=>op.rejected === 'N' || op.rejected === ' ');
      let rejectedJson = json.filter(op=>op.rejected === 'Y');
      let fixedJson = json.filter(op=>op.rejected === 'F');
       const openws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(openJson);
       const rejectedws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rejectedJson);
       const fixedws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(fixedJson);
   /*  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };*/
    const workbook: XLSX.WorkBook = { Sheets: { 'Open': openws, 'Rejected': rejectedws ,'Fixed':fixedws}, SheetNames: ['Open', 'Rejected', 'Fixed']};
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }); 
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}