import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  @Output() testCloseAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  completeTest() {

  }

  closeTest() {
    
  }

}
