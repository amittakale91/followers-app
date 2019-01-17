import { Component, OnInit } from '@angular/core';
import { followerService } from 'app/services/follower.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  public profilelist : any[];
  constructor(private followerService: followerService) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profilelist = this.followerService.getAll();
    console.log(this.profilelist);
  }

}
