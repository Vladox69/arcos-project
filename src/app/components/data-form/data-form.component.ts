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

  initForm():FormGroup{
    return this.fb.group({
      cedula:['',[Validators.required]],
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]],
      celular:['',[Validators.required]],
      semestre:['Semestre',[Validators.required]],
      carrera:['Carrera',[Validators.required]],
    })
  }

  getData():void{
    this.dataService.getData().subscribe({
      next:(x)=>{
        console.log(x);
      }
    })
  }

  onSubmit():void{
    this.dataService.createData(this.dataForm.value);
  }

  constructor(private readonly dataService:DataService,private readonly fb:FormBuilder){}
  
  ngOnInit(): void {
    this.dataForm=this.initForm();
    this.getData();
  }

}
