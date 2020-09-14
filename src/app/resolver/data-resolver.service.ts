import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {

  constructor(private dateService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.dateService.getData(id);
  }

}
