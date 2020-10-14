import { Component, OnInit } from '@angular/core';


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createposts',
  templateUrl: './createposts.component.html',
  styleUrls: ['./createposts.component.css']
})
export class CreatepostsComponent implements OnInit {
  selectedValue = String;
  categorys: Category[] = [
    {value: 'action-0', viewValue: 'Action'},
    {value: 'adventure-1', viewValue: 'Adventure'},
    {value: 'indie-2', viewValue: 'Indie'},
    {value: 'massively multiplayer-3', viewValue: 'Massively Multiplayer'},
    {value: 'racing-4', viewValue: 'Racing'},
    {value: 'rpg-5', viewValue: 'RPG'},
    {value: 'simulation-6', viewValue: 'Simulation'},
    {value: 'sports-7', viewValue: 'Sports'},
    {value: 'srategy-8', viewValue: 'Srategy'},
    {value: 'casual-9', viewValue: 'Casual'},
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
