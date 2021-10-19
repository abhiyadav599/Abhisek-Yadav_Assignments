import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './resturant.model';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {

  formValue!: FormGroup;
  restaurantModelObject: RestaurantData = new RestaurantData;
  allRestaurantData:any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: ['']
    })
    this.getAllData() 
  }
  clickAddRestro(){
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }
  // now subscribing our data which is maped via services
  addRestaurant() {
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;

    this.api.postRestaurant(this.restaurantModelObject).subscribe(res => {
      console.log(res);
      alert("Restro added successfully");
      this.formValue.reset();
      this.getAllData();
    },
      err => {
        alert("dekh ke bhar firse");
      }
    )
  }

  //get all data 
  getAllData(){
    this.api.getRestaurant().subscribe(res => {
      this.allRestaurantData = res;
    })
  }

  //delete restro
  deleteRestaurant(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res => {
      this.getAllData() ;
      alert("REcord deleted");
    })
  }

  //edit restro data
  onEditRestro(data:any){
    this.showAdd=false;
    this.showBtn=true;
    this.restaurantModelObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
  }

  // update restro data
  updateRestaurant(){
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address; 

    this.api.updateRestaurant(this.restaurantModelObject,this.restaurantModelObject.id).subscribe(res =>{
      alert("Record updated")
      this.formValue.reset();
      this.getAllData();
    })
  }
}
