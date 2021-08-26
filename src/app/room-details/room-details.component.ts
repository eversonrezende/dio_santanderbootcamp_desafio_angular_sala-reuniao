import { Component, OnInit } from '@angular/core';
import { RoomListComponent } from './../room-list/room-list.component';
import { RoomService } from './../room.service';
import { Room } from './../room';
import {Router, ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room!: Room;

  constructor(private route: ActivatedRoute,private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['rooms']);
  }

}
