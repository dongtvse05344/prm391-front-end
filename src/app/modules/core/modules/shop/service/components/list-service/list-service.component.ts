import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/basic-services/service.service';
import { ServiceVM } from 'src/app/view-models';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {
  services: ServiceVM[] = [];
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getAll().then((res) => this.services = res);
  }

}
