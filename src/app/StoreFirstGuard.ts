import { StoreComponent } from "./store/store.component";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class StoreFirstGuard {

  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if(route.component !== StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;

}

}

// ActivateRouterSnapshot - is not an Observable - it queries the component property of the
// corresponding route {} (in the routertree)only once

// Route Guard - ActivateRouterSnapshot (not an Observable)

// RouteParams - ActivateRouter (Observable)
