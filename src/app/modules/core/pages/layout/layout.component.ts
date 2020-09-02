import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-doctor-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu: NbMenuItem[] = [];
  manager: NbMenuItem[] = [
    {
      title: 'Products',
      icon: 'home-outline',
      url: '/#/core/manager/product',
      home: true,
    },
    {
      title: 'Collections',
      icon: 'briefcase-outline',
      url: '/#/core/manager/collection',
    },
    {
      title: 'Orders',
      icon: 'credit-card-outline',
      url: '/#/core/manager/order',
    },
    {
      title: 'Categories',
      icon: 'credit-card-outline',
      url: '/#/core/manager/category',
    },
  ];
 
  constructor() { }

  ngOnInit() {
    this.menu = this.manager;
  }

}
