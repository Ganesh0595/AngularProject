import { Component, OnInit } from '@angular/core';
import { CivilService } from '../civil.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any = [];
  pageNumberArray: any[] = [];
  arrayToBind: any=[];

  constructor() { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){

    //let userList = localStorage.getItem('userList');
   // console.log('user list from local storage ' + JSON.stringify (userList ));
    let json = [
    { company:"1",contact:"8245654561",country:"Maharastra"},
    { company:"2",contact:"8112658648",country:"Gujrat"},
    { company:"3",contact:"9658645256",country:"Punjab"},
    { company:"4",contact:"7258645879",country:"UP"},
    { company:"5",contact:"9868621545",country:"Bihar"},
    { company:"6",contact:"9564828686",country:"Odisha"},
    { company:"7",contact:"9254868686",country:"Kerala"},
    { company:"8",contact:"9254668686",country:"TamilNadu"},
    { company:"9",contact:"9887955686",country:"Andhra Pradesh"},
    { company:"10",contact:"9566646844",country:"Assam"}
  ]

    this.userList =  json;
    this.getPaginationDetails();
  }

  getPaginationDetails(){
    let tableSize = this.userList.length;
    let recordsPerPage = 5
    let numberOfPages = tableSize/recordsPerPage;
    
    console.log('numbers per Page ' +numberOfPages);  
    let pageNumberArray = [];

    for(var i = 1; i <= numberOfPages; i++ ){
      pageNumberArray.push(i);
    }

    this.pageNumberArray = pageNumberArray;
    console.log('page numbers ' + pageNumberArray);
    // this.arrayToBind = this.getPaginatedArray(this.userList,0,5);
    this.pageNumber(1);
  }

  getPaginatedArray(array:any,from:any,to:any){
    return array.splice(from,to)
  }

  pageNumber(_pageNumber:any){
    console.log('user json ' + JSON.stringify(this.userList));
    this.arrayToBind = [];

      for(var i = 0; i <= 9;i++ ){
        this.arrayToBind.push(this.userList[i]);
      }
   
  }
}
