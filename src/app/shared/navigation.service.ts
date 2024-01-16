import { Injectable, WritableSignal, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class NavigationService {
  isOpen: WritableSignal<boolean> = signal(false);

  toggleMenu(state?: boolean | undefined):void {
    this.isOpen.set(state !== undefined ? state : !this.isOpen());
  }
}
