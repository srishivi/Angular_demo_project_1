import { Injectable } from "@angular/core";

@Injectable()
export class StoreFirstGuard {
  canActivate(): boolean {
    if (window.location.href.includes("store")) {
      return true;
    }
    alert("Please visit the Store first");
    return false;
  }

}
