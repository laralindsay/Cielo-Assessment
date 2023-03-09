import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from 'src/core/models/release-interface';


const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>(); 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mobile = false

  ngOnInit() {
    
  }

  
}
