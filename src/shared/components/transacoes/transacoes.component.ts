import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReleaseService } from 'src/core/services/release.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})


export class TransacoesComponent {

  valueTransactions: any;
  dataSource: any;
  displayedColumns = ['id', 'valor_total', 'valor_liquido', 'canal_venda', 'data', 'status'];

  constructor(
    private appReleaseService: ReleaseService
  ) { 
    this.appReleaseService.getJSON().subscribe((data) =>{
      this.dataSource = new MatTableDataSource(data.items)
      console.log(this.dataSource)
    })
  }


  ngOnInit() {
    this.appReleaseService.getJSON().subscribe(data => {
      this.valueTransactions = data
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.valueTransactions.filter = filterValue.trim().toLowerCase();
  }


}
