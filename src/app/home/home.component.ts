import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers}  from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http) { }
  id:number;
  private headers=new Headers({'Content-Type':'application/json'});


  products:object[];
  fetchData= function() {
    this.http.get("http://localhost:5555/products").subscribe(
      (res:Response) =>  {
        this.products=res.json();
      }
    )
  }

  deleteProduct= function(id) {
  if(confirm("Are You Sure? to Delete This Record")){
    const url="http://localhost:5555/products/"+id;
    return this.http.delete(url,{headers:this.headers}).toPromise()
    .then(()=>{
      this.fetchData();
    })
  }

  }
  



  ngOnInit() {
    this.fetchData();
  }
  

}
