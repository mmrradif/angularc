import { Spot } from './../../models/spot';
import { BookingSpot } from './../../models/booking-spot';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.css']
})
export class MasterViewComponent {

  spotList : Spot[] = [];
  bookingList : BookingSpot[] = [];

  constructor(
    private dataSvc : DataService
  ){}

  ngOnInit(): void {

    this.dataSvc.getSpotList().subscribe(x => {
      this.spotList = x;
    });
    this.dataSvc.getBookingEntries().subscribe(x => {
      this.bookingList = x;
    });
  }

  getSpotName(id : any){
    let data = this.spotList.find(x => x.spotId == id);
    return data?data.spotName : '';
  }


}
