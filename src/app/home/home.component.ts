import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuList;
  active = 'm00';
  constructor(private data: DataService) { }

  getCategories() {
    const catList = [];
    for (const item of this.menuList) {
      if (catList.includes(item.category)) {
          continue;
      }
      catList.push(item.category);
    }
    return catList;
  }
  getDetails(cat) {
    const details = [];
    for (const item of this.menuList) {
      if (cat === item.category) {
        details.push(item);
      }
    }
    return details;
  }
  isVeg(vegflag) {
    console.log(vegflag);
    if (vegflag === 'nonveg') {
      return true;
    }
    return false;
  }
  // scrollToDiv(id) {
  //   console.log(this.active);
  //   const temp = $('#' + this.active);
  //   temp.removeClass('active');
  //   this.active = 'm' + id;
  //   $('#' + this.active).addClass('active');
  //   console.log(temp);
  //   console.log($('#' + this.active));
  //   if (id = '00') {
  //     id = '0';
  //   }
  //   $('.wrapper').animate({
  //     scrollTop: $('#' + id).offset().top
  // }, 500);
  // console.log(this.active);
  // }
  ngOnInit() {
    this.data.getMenuList().subscribe(response => {
      this.menuList = response.json();
    });
  }

}
