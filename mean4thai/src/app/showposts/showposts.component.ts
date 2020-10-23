import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
  id:any;
  postdatas: any;
  postdataAdd = {
    'id':'',
    'topic': '',
    'description': '',
    'category':''
  }

  constructor(private postsService: PostsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id =params.get('dataID');
    });
    this.postsService.getshow(this.id).subscribe(response => {
      this.postdataAdd = {
        'id':response[0]._id,
        'topic': response[0].topic,
        'description': response[0].description,
        'category':response[0].category,
      }
      console.log(this.postdataAdd);

    });
  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }



}
