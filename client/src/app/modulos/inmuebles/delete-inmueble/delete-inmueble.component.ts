import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-delete-inmueble',
  templateUrl: './delete-inmueble.component.html',
  styleUrls: ['./delete-inmueble.component.css']
})
export class DeleteInmuebleComponent implements OnInit {

  constructor(private route:Router,private rout:ActivatedRoute,private inmueblesService:InmueblesService) { }

  ngOnInit() {
    this.deleteInmueble();
  }

  deleteInmueble():void{
    
    let id=this.rout.snapshot.params["id"];
    this.inmueblesService.deleteHouse(id).subscribe(item=>{
      alert("Borrado")
      this.route.navigate(['inmuebles/home-i']);
    });
  }
}
