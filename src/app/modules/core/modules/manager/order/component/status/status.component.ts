import { Component, OnInit } from '@angular/core';
import { OrderService, DeliveryStatusService } from 'src/app/services';
import { OrderVM, DeliveryStatusVM } from 'src/app/view-models';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  statusId: Number;
  orderVM : OrderVM;
  deliveryStatus: DeliveryStatusVM[];
  constructor(private readonly orderService: OrderService,
    private readonly deliveryStatusService: DeliveryStatusService
    ) { }

  loadData() {
    this.orderService.getById().then(
      (rs) => {
        this.orderVM = rs;
      }
    ).catch((e) => {
      console.error(e);

    }); 
  }
  ngOnInit() {
    this.loadData();
    this.deliveryStatusService.getAll(
      
    ).then((rs) => {
      this.deliveryStatus = rs;
    }).catch((err)=> console.error(err));
   }

   onAddStatus() {
     if(this.statusId != null) {
      this.orderService.updateStatus(this.statusId).then(
          (rs) => {
            this.loadData()
          }
        ).catch((e) => console.error(e));
     }
   }
  

}
