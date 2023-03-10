import { Component } from '@angular/core';
import { ReleaseService } from 'src/core/services/release.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})


export class TransacoesComponent {

  valueTransactions: any;

  constructor(
    private appReleaseService: ReleaseService
  ) { }


  ngOnInit() {
    this.appReleaseService.getJSON().subscribe(data => {
      this.valueTransactions = data
      console.log(this.valueTransactions)
    });
  }


}
