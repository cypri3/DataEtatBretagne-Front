import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SousAxePlanRelance } from '../models/axe.models';
import { FranceRelanceHttpService } from '../services/france-relance.http.service';

@Injectable({ providedIn: 'root' })
export class FranceRelanceResolvers
  
{
  constructor(private service: FranceRelanceHttpService) {}

  resolve(): Observable<SousAxePlanRelance[] | Error> {
    return this.service.getSousAxePlanRelance();
  }
}
