import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
export class CustomReuseStrategy implements RouteReuseStrategy {

  private handlers: {[key: string]: DetachedRouteHandle} = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if ( route.data.key === 'statistics' || route.data.key === 'forms' || route.data.key === 'ui-elements' || route.data.key === 'maps' ) {
      return;
    }

    if (handle) {
      this.handlers[route.data.key] = handle;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[route.data.key];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if ( !route.routeConfig ) {
      return null;
    }
    return this.handlers[route.data.key];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
