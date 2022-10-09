import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    // Class Mantığı
    super(base.http)
  }

  public getUsers() {
    return this.base.getReq('/users');
  }

}
