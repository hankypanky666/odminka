import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService],
  animations: [
    trigger('toggleMenu', [
      state('close', style({ opacity: 0, display: 'none' })),
      transition('close => open', [
        animate(200, style({ opacity: '1' }))
      ]),
      transition('open => close', [
        animate(200, style({ opacity: '0' }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  public menuList: Menu;

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    this.menuService.getMenu()
      .subscribe(res => {
        console.log(res);
        this.menuList = res;
      })
  }

}
