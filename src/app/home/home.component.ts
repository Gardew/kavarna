import { Component, OnInit } from '@angular/core';
import {KavaService} from '../service/kava/kava.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  kavy:String[] = [];
  constructor(private KavaService:KavaService) { }

  ngOnInit(): void {
    this.kavy = this.KavaService.getAll();
  }
}
