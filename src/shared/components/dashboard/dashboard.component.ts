import { Component } from '@angular/core';
import { ReleaseService } from 'src/core/services/release.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private appSettingsService: ReleaseService
  ) { }


  valueTransactions: any

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(data => {
      this.valueTransactions = data;
    });
  }


}
