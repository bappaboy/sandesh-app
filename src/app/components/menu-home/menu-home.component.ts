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
      <Menu>({ title: 'Chicken Biriyani', price: '200', veg: false ,imageKey: 'cb', variations: 'With whole fried eggs, one potato & raita' }),
      <Menu>({ title: 'Chicken Curry', price: '200', veg: false ,imageKey: 'cc', variations: 'Kosha, Do-pyaza, Butter & Rezala styled' }),
      <Menu>({ title: 'Paneer Curry', price: '200', veg: true ,imageKey: 'pc', variations: 'Kosha, Do-pyaza, Butter & Rezala styled' }),
      <Menu>({ title: 'Pulao', price: '120', veg: true ,imageKey: 'pu', variations: 'Jeera Rice, Basanti pulao & Peas pulao' }),
      <Menu>({ title: 'Cholar dal', price: '100', veg: true ,imageKey: 'cd', variations: 'Delicious pulses ' }),
      <Menu>({ title: 'Aloo Dum', price: '100', veg: true ,imageKey: 'ad', variations: 'Juicy potato curry' }),
      <Menu>({ title: 'Dimer Kosha', price: '100', veg: false, imageKey: 'ec', variations: 'Bengali styled egg curry' }),
      <Menu>({ title: 'Macher Kalia', price: '150', veg: false, imageKey: 'mk', variations: 'Bengali styled fish curry' }),
      <Menu>({ title: 'Pui chochori', price: '50',veg: true , imageKey: 'pui-c', variations: 'Bengali styled veg curry' }),
    )
  }

}
