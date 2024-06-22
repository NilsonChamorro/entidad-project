import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, getDoc, Firestore, doc, } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.page.html',
  styleUrls: ['./profesor-edit.page.scss'],
})
export class ProfesorEditPage implements OnInit {

  id: any;
  profesor: any = [];
  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private rt: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      //console.log('params', params);
      this.id = params.id;
      //console.log('id', this.id);
      if (this.id) {
        this.obtenerProfesor(this.id);
      }

    });
  }

  volver = () => {
    this.rt.navigate(['/profesor-list']);


  }
  accion = (id: string) => {
    if (this.id) {
      //console.log("modificar");
      this.editarProfesor(this.id);
    
    } else {
      //console.log("guardar");
      this.incluirProfesor();

    }
    this.volver();
  }

  incluirProfesor = () => {
    console.log('aqui incluir en firebase');
    let alumnoRef = collection(this.firestore, 'profesor');

    addDoc(
      alumnoRef,
      {
        codigo: (this.profesor.codigo)?(this.profesor.codigo):0,
        nombre: (this.profesor.nombre)?(this.profesor.nombre):"",
        apellido: (this.profesor.apellido)?(this.profesor.apellido):"",
        nacimiento: (this.profesor.nacimiento)?(new Date(this.profesor.nacimiento)):new Date(),
        activo: (this.profesor.activo)?(this.profesor.activo):false,
      }

    ).then(doc => {
      console.log('registro incluido');
      this.volver();

    }
    );
  }

  editarProfesor = (id: string) => {
    console.log('aqui editar en firebase');
    const document = doc(this.firestore, 'profesor', this.id);

    updateDoc(
      document,
      {
        codigo: (this.profesor.codigo)?(this.profesor.codigo):0,
        nombre: (this.profesor.nombre)?(this.profesor.nombre):"",
        apellido: (this.profesor.apellido)?(this.profesor.apellido):"",
        nacimiento: (this.profesor.nacimiento)?(new Date(this.profesor.nacimiento)):new Date(),
        activo: (this.profesor.activo)?(this.profesor.activo):false,
      }

    ).then(doc => {
      console.log('registro editado');
      this.volver();

    }
    );
  }

  obtenerProfesor = (id: string) => {

    const document = doc(this.firestore, 'profesor', id);

    

    getDoc(document).then(doc => {
      console.log('registro a editar', doc.data());
      this.profesor = doc.data();
      const timestamp = this.profesor.nacimiento; // Asume que 'fecha' es el campo Timestamp
      this.profesor.nacimiento = timestamp.toDate().toISOString(); // Convierte a ISO 8601
      
    }
    );
  }



  

  

}
