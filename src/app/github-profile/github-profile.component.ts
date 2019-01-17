import { followerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private followerService: followerService) { }
  userProfile: any;
  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');
    console.log(id + '' + name);

    const profiles = this.followerService.getAll();
    profiles.forEach(element => {
      if (element.id === +id && element.name === name){
        this.userProfile = element;
        return false;
      }
    });

    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get('id');
    //   console.log(id);
    // });
  }

}
