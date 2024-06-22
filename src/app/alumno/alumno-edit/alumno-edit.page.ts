import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, getDoc, Firestore, doc, } from '@angular/fire/firestore';
import { Storage, StorageError, UploadTaskSnapshot, getDownloadURL, ref, uploadBytesResumable, deleteObject } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.page.html',
  styleUrls: ['./alumno-edit.page.scss'],
})
export class AlumnoEditPage implements OnInit {



  id: any;

  alumno: any = [];
  avatar: string = '';
  //private storage: Storage = inject(Storage);
  constructor(private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private rt: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    // this.incluirAlumno();
    //this.editarAlumno("2BpFVjd1yuhQwrWbRrk2");
    this.route.params.subscribe((params: any) => {
      //console.log('params', params);
      this.id = params.id;
      //console.log('id', this.id);
      if (this.id) {
        this.obtenerAlumno(this.id);
      }

    });
  }

  incluirAlumno = () => {
    console.log('aqui incluir en firebase');
    let alumnoRef = collection(this.firestore, 'alumno');

    addDoc(
      alumnoRef,
      {
        codigo: this.alumno.codigo,
        nombre: this.alumno.nombre,
        apellido: this.alumno.apellido
      }

    ).then(doc => {
      console.log('registro incluido');
      this.volver();

    }
    ).catch((error) => {
      console.error("Error: ", error);
    });
  }

  editarAlumno = (id: string) => {
    console.log('aqui editar en firebase');
    const document = doc(this.firestore, 'alumno', this.id);

    updateDoc(
      document,
      {
        codigo: this.alumno.codigo,
        nombre: this.alumno.nombre,
        apellido: this.alumno.apellido
      }

    ).then(doc => {
      console.log('registro editado');
      this.volver();

    }
    ).catch((error) => {
      console.error("Error: ", error);
    });
  }

  obtenerAlumno = (id: string) => {

    const document = doc(this.firestore, 'alumno', id);

    getDoc(document).then(doc => {
      console.log('registro a editar', doc.data());
      if (doc.data()) {
        this.alumno = doc.data();
        if (this.alumno.avatar) {
          this.obtenerAvatarAlumno();
        }
      } else {
        this.alumno = {};
      }


    });
  }

  volver = () => {
    this.rt.navigate(['/alumno-list']);


  }

  accion = (id: string) => {
    if (this.id) {
      //console.log("modificar");
      this.editarAlumno(this.id);

    } else {
      //console.log("guardar");
      this.incluirAlumno();

    }
    this.volver();
  }
  uploadFile = (input: HTMLInputElement) => {
    if (!input.files) return

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        console.log(file, file.name);
        const storageRef = ref(this.storage, `avatars/alumno/${this.id}`);

        uploadBytesResumable(storageRef, file).on(
          'state_changed',
          this.onUploadChange,
          this.onUploadError,
          this.onUploadComplete,
        );
      }
    }
  }

  onUploadChange = (response: UploadTaskSnapshot) => {
    console.log('onUploadChange', response);
  }

  onUploadError = (error: StorageError) => {
    console.log('onUploadError', error);
  }

  onUploadComplete = () => {
    console.log('upload completo');
    this.editarAvatar();
    this.obtenerAvatarAlumno();
  }

  editarAvatar = () => {
    const document = doc(this.firestore, "alumno", this.id);
    updateDoc(document, {
      avatar: 'avatars/alumno/' + this.id
    }).then(doc => {
      console.log("Avatar Editado");
    });
  }

  obtenerAvatarAlumno = () => {
    const storageRef = ref(this.storage, `avatars/alumno/${this.id}`);
    getDownloadURL(storageRef).then(doc => {
      this.avatar = doc;
    });
  }

  eliminarAvatar = () => {
    const avatarRef = ref(this.storage, `avatars/alumno/${this.id}`);

    deleteObject(avatarRef).then(() => {
      console.log('Avatar eliminado exitosamente');
      this.actualizarDocumentoAlumnoSinAvatar();
    }).catch((error) => {
      console.error('Error al eliminar el avatar: ', error);
    });
  }

  actualizarDocumentoAlumnoSinAvatar = () => {
    const document = doc(this.firestore, "alumno", this.id);
    updateDoc(document, {
      avatar: ''
    }).then(() => {
      console.log("Referencia del avatar eliminada del documento del alumno");
      this.avatar = ''; // Asegúrate de actualizar también la variable local si es necesario.
    }).catch((error) => {
      console.error("Error al actualizar el documento del alumno: ", error);
    });
  }








}
