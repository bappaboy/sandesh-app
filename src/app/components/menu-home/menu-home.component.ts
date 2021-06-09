import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  menuList: Menu[] = []
  constructor() { }

  ngOnInit(): void {
    this.menuList.push(
      <Menu>({ title: 'Chicken Biriyani', price: '200', imageKey: 'cb', variations: 'With whole fried eggs, one potato & raita' }),
      <Menu>({ title: 'Chicken Curry', price: '200', imageKey: 'cc', variations: 'Kosha, Do-pyaza, Butter & Rezala styled' }),
      <Menu>({ title: 'Paneer Curry', price: '200', imageKey: 'pc', variations: 'Kosha, Do-pyaza, Butter & Rezala styled' }),
      <Menu>({ title: 'Pulao', price: '120', imageKey: 'cc', variations: 'Jeera Rice, Basanti pulao & Peas pulao' }),
      <Menu>({ title: 'Cholar dal', price: '100', imageKey: 'cd', variations: '' }),
      <Menu>({ title: 'Aloo Dum', price: '100', imageKey: 'ad', variations: '' }),
      <Menu>({ title: 'Dimer Kosha', price: '100', imageKey: 'ec', variations: 'Bengali styled egg curry' }),
    )
  }

}
