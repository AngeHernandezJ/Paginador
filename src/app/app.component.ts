import { Component, ViewChild } from '@angular/core';
import { PeriodicElement } from './shared/interfaces/PeriodElement';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSortModule, MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

const ELEMENT_DATA: PeriodicElement[] = [
        { "name": "Hydrogen", "position": 1, "weight": 1.008, "symbol": "H" },
        { "name": "Helium", "position": 2, "weight": 4.0026, "symbol": "He" },
        { "name": "Lithium", "position": 3, "weight": 6.94, "symbol": "Li" },
        { "name": "Beryllium", "position": 4, "weight": 9.0122, "symbol": "Be" },
        { "name": "Boron", "position": 5, "weight": 10.81, "symbol": "B" },
        { "name": "Carbon", "position": 6, "weight": 12.011, "symbol": "C" },
        { "name": "Nitrogen", "position": 7, "weight": 14.007, "symbol": "N" },
        { "name": "Oxygen", "position": 8, "weight": 15.999, "symbol": "O" },
        { "name": "Fluorine", "position": 9, "weight": 18.998, "symbol": "F" },
        { "name": "Neon", "position": 10, "weight": 20.180, "symbol": "Ne" }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pag-app';
  @ViewChild('paginator') paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  displayedColumns: string[] = ['position','name', 'weight', 'symbol'];
  constructor( private _liveAnnouncer:LiveAnnouncer) {}
  dataSource: MatTableDataSource<PeriodicElement>;
  ngAfterViewInit(){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  announceSortChange(sortState:Sort) {
    if(sortState.direction){
        this._liveAnnouncer.announce(`sorted'${sortState.direction} ending`) ;
    } else {
        this._liveAnnouncer.announce('sorting cleared');
    }
  }
}
