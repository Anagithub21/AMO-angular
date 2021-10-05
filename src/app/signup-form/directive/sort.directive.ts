import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';

import { Sort } from '../util/sort';
@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort: Array<any>
  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {
    console.log("here")
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;
    console.log(this.targetElement.nativeElement.innerText)
    const order = elem.getAttribute("data-order");

    const type = elem.getAttribute("data-type");

    const property = this.targetElement.nativeElement.innerText.toLowerCase();
    console.log(order, type, property)
    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }

  }

}

