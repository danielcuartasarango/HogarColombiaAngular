import { Component, OnInit } from '@angular/core';
import { InmuebleModel } from 'src/app/models/inmueble.model';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-home-inmuebles',
  templateUrl: './home-inmueble.component.html',
  styleUrls: ['./home-inmueble.component.css']
})
export class HomeInmueblesComponent implements OnInit {

  constructor(private houseService:InmueblesService) { }
  housesList:InmuebleModel[]=[];

  ngOnInit() {
    this.getAllHouses();
  }

  getAllHouses():void{
    this.houseService.getAllHouses().subscribe(items=>{
      this.housesList = items;
    });

  }

}
