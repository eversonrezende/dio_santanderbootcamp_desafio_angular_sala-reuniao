import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms!: Observable<Room[]>;

  constructor(private RoomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.rooms=this.RoomService.getRoomsList();
  }

  deleteRoom(id: number){
    this.RoomService.deleteRoom(id)
    .subscribe(
      data=> {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  roomDetails(id:number){
    this.router.navigate(['details',id]);
  }

  updateRoom(id: number){
    this.router.navigate(['update', id]);
  }


}
