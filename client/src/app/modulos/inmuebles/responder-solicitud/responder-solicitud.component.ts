import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailModel } from 'src/app/models/email.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-responder-solicitud',
  templateUrl: './responder-solicitud.component.html',
  styleUrls: ['./responder-solicitud.component.css']
})
export class ResponderSolicitudComponent implements OnInit {
  emailSoli: FormGroup;
  
  em :string;
  solisModel: SolicitudModel={
    IDusuario:null,
    IDvendedor:null,
    Tipo:null,
    TipoInmueble:null,
    Fecha:null,
    Estado:null,
    Comentarios:null,
    Contrato:null,
    Foto:null,
    IDinmueble:null,
    listadoSolicitudes:[null],
    IDsolicitud:null,
    email:null
  };

  constructor(private catService:CategoriaService,private rout : ActivatedRoute,
    private solisService:SolicitudesService,private route:Router) {

   }

  ngOnInit() {
    this.getSolisById();
    this.emailSoli= this.formGroupCreator();
  }


  getSolisById():void{
    let id=this.rout.snapshot.params["id"];
    this.solisService.getSolisById(id).subscribe(item => {
      this.em=item.email;

      

      
    });
  }

  
  formGroupCreator(): FormGroup {
    return new FormGroup({
      textarea: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      
    });
  }
  get textarea(){
    return this.emailSoli.get('textarea');
  }

  buildEmailData(): EmailModel {
    let email: EmailModel = {
      nombre:"da",
      apellido: "lastName",
      mensaje: this.textarea.value,
      asunto: "Respuesta Solicitud",
      emailAddresses: this.em
    }
    return email;
  }

  sendMail(): void {
      console.log(this.em);
      this.catService.sendMail(this.buildEmailData()).subscribe(items => {
      console.log(items);
      this.route.navigate(['/asesor/lista-solicitudes'])
      let id=this.rout.snapshot.params["id"];
      this.solisService.deleteSoli(id).subscribe(item=>{
        
      })

    });
  }


}


