import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminComponent } from '../pages/admin/admin.component';

@Injectable()
export class ConfirmUpdateGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(
    component: AdminComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.form && component.form.dirty) {
      let confirm = window.confirm("Non hai salvato. Sei sicuro?");
      return of(confirm);
    } else {
      return true;
    }
  }
}