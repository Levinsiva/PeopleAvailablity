import { Component, OnInit } from '@angular/core';
import data from './data';

const status = {
  available:'A',
  unavailable:'UA',
  haventIndicated: 'HI'
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  showModal: boolean | undefined;
  title: string | undefined;
  data:typeof data | undefined;
  empId:number | undefined;
  date:string | undefined;

  //Bootstrap Modal Open event
  show(empId:number,date:string) {
    this.empId = empId;
    this.date = date;
    this.showModal = true; 
    this.title = "Change Status"; 
  }
  update(value: string){
    this.showModal = false;
    this.data?.forEach(eachData=>{
      if(eachData.id === this.empId){
        eachData.availability.forEach(eachAvailability=>{
          if(eachAvailability.date===this.date){
            eachAvailability.status=value;
            eachAvailability.statusKey=status[value as ('available' | 'unavailable'|'haventIndicated')];
          }
        })
      }
    })
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  constructor() { }

  ngOnInit(): void {
    this.data=data
  }

}
