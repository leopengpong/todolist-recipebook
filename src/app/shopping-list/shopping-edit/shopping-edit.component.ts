import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd () {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }

}
