import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  submitted = false;
  room: Room = new Room();

  constructor(private RoomService: RoomService, private router: Router) {

   }

  ngOnInit() {
  }

  newRoom(): void{
    this.submitted=false;
    this.room= new Room();
  }

  save (){
    this.RoomService.createRoom(this.room)
    .subscribe(data=>console.log(data),
    error => console.log(error));
    this.room= new Room ();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/rooms'])
  }

}
