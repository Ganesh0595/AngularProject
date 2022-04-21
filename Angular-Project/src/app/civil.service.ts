import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CivilService {
  name: any;

  getEmployees(){
    return[
  {"id":1, "name0":"Ganesh", "age":26,"contact":9922841956},
  {"id":2, "name0":"Nilesh", "age":27,"contact":9922841956},
  {"id":3, "name0":"Tushar", "age":28,"contact":9922841956},
  {"id":4, "name0":"Pramod", "age":24,"contact":9922841956},
  {"id":5, "name0":"Vinod", "age":29,"contact":9922841956}
    ];
  }
    
  }

 