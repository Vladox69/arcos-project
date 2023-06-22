import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  dataForm!:FormGroup;
  carreras:any[]=[];
  semestres:any[]=[];

  initForm():FormGroup{
    return this.fb.group({
      cedula:['',[Validators.required]],
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      edad:['',[Validators.required]],
      celular:['',[Validators.required]],
      semestre:['Semestre',[Validators.required]],
      carrera:['Carrera',[Validators.required]],
      sexo:['Sexo',[Validators.required]]
    })
  }

  getData():void{
    this.dataService.getCarrera().subscribe({
      next:(v)=>{
        this.carreras=v;
      }
    })
    this.dataService.getSemestre().subscribe({
      next:(v)=>{
        this.semestres=v;
      }
    })
  }

  onSubmit():void{
    // window.location.replace("https://sistemaseducaciononline.uta.edu.ec/login/index.php");
    this.dataService.createData(this.dataForm.value);
  }

  constructor(private readonly dataService:DataService,private readonly fb:FormBuilder){}
  
  ngOnInit(): void {
    this.dataForm=this.initForm();
    this.getData();
  }

}
