import { Component, OnInit } from '@angular/core';
import { OrderVM } from 'src/app/view-models';
import { OrderService } from 'src/app/services';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: OrderVM[]= [];
  orderVs: OrderVM[]= [];
  constructor(private readonly orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAll().then((res) => {
      this.orders = res;
       this.orderVs = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

  search(textSearch) {
    if(textSearch.length ==0) {
      this.orderVs = this.orders;
    }
    else {
      this.orderVs = this.orders.filter(p => p.id == textSearch);
    }
  }

}
