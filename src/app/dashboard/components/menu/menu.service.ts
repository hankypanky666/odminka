import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {

  constructor( private http: Http ) { }

  public getMenu(): Observable<Menu> {
    return this.http.get(`assets/db/menu.json`)
      .map(res => res.json())
      .catch(err => Observable.throw(err))
  }

}
