import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    super(base.http)
  }

  //#region  getPost
  public getPosts() {
    return this.base.getReq('/posts');
  }
  //#endregion

  //#region updatePost
  public updatePosts(id: any, data: any) {
    return this.base.putReq('/posts/' + id, data);
  }
  //#endregion


}
