import { Injectable } from '@angular/core';
import { ServiceVM, ServiceCM, ServiceUM } from 'src/app/view-models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getAll = (): Promise<ServiceVM[]> => {
    const array: ServiceVM[] = localStorage.getItem('services') ? JSON.parse(localStorage.getItem('services')) : [];
    return Promise.resolve(array);
  }

  getById = (id: string): Promise<ServiceVM> => {
    const array: ServiceVM[] = localStorage.getItem('services') ? JSON.parse(localStorage.getItem('services')) : [];
    const model: ServiceVM = array.find(e => e.Id === id) ? array.find(e => e.Id === id) : null;
    return Promise.resolve(model);
  }

  create = (data: ServiceCM): Promise<ServiceVM> => {
    const array: ServiceVM[] = localStorage.getItem('services') ? JSON.parse(localStorage.getItem('services')) : [];
    const model: ServiceVM = {...data, Id: uuidv4()};
    array.push(model);
    localStorage.setItem('services', JSON.stringify(array));
    return Promise.resolve(model);
  }

  update = (data: ServiceUM): Promise<ServiceVM> => {
    const array: ServiceVM[] = localStorage.getItem('services') ? JSON.parse(localStorage.getItem('services')) : [];
    const index = array.findIndex(e => e.Id === data.Id);
    if (index > -1) {
      array[index] = data;
      localStorage.setItem('services', JSON.stringify(array));
      return Promise.resolve(array[index]);
    } else {
      return Promise.reject({message: 'Id not found'});
    }
  }

  delete = (id: string): Promise<ServiceVM> => {
    const array: ServiceVM[] = localStorage.getItem('services') ? JSON.parse(localStorage.getItem('services')) : [];
    const index = array.findIndex(e => e.Id === id);
    if (index > -1) {
      const model = array[index];
      array.splice(index, 1);
      localStorage.setItem('services', JSON.stringify(array));
      return Promise.resolve(model);
    } else {
      return Promise.reject({message: 'Id not found'});
    }
  }
}
