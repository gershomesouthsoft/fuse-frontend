import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import {MatSort, MatTableDataSource} from '@angular/material';
// interface Food {
//     value: string;
//     viewValue: string;
//   }
// interface Country {
//   id: number;
//   name: string;
// }

//   export interface PeriodicElement {
//     payee: string;
//     child: string;
//     weeks3: string;
//     weeks2: string;
//     weeks1: string;
//     current: string;
//     pending_amount: string;
//     over_payment: string;
//     pending_credit_notes: string;
//     over_pending_amount: string;
//   }
@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit , AfterViewInit{
  expanttoogle: boolean = false;
  ELEMENT_DATA = [];
  columns: string[] = ['payee', 'child', 'weeks3', 'weeks2','weeks1','current','pending_amount','over_payment','pending_credit_notes','over_pending_amount'];
  dataSource = new MatTableDataSource();
  countries: any = [];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    // pageLength = 100;
    pageSize = 5;
    pageSizeOptions: number[] = [5, 15, 25, 100];
    // pageChangeEvent(event) {}
    constructor(private _liveAnnouncer: LiveAnnouncer, private _httpClient: HttpClient, private el: ElementRef<HTMLElement>){}

    ngOnInit(): void {
      this.paginator.pageIndex = 0;
        this._httpClient.get(`./assets/table/table.json`).subscribe((data: any)=>{
          this.dataSource.data  = data.ELEMENT_DATA;
        });
        console.log(this.dataSource.data.length);
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.paginator);
      const lastBtn = this.el.nativeElement.querySelector(
        '.mat-paginator-navigation-last'
      );
      if (lastBtn) {
        lastBtn.innerHTML = '&#8594;';
      }
      const firstBtn = this.el.nativeElement.querySelector(
        '.mat-paginator-navigation-first'
      );
      if (firstBtn) {
        firstBtn.innerHTML = '&#8592;';
      }
      const secondbtn = this.el.nativeElement.querySelector('.mat-paginator-navigation-previous');
      if(secondbtn){
        secondbtn.innerHTML = '1'
      }

      const secondbtnlast = this.el.nativeElement.querySelector('.mat-paginator-navigation-next');
      if(secondbtnlast){
        secondbtnlast.innerHTML = '2'
      }
    }
    announceSortChange(sortState: Sort) {
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
    changPage(e){
      console.log(e);
    }
    pageChanged(e){
      console.log(e);
    }
    expantMore(){
      this.expanttoogle = !this.expanttoogle;
    }
}
