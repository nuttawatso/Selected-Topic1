import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/Posts.service';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
  postdatas: any;
  postdataAdd = {
    // 'sid': null,
    // 'first': '',
    // 'last': ''
    'topic': '',
    'description': ''
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.postsService.getPostdatas().subscribe(response => {
      this.postdatas = response;
      console.log(this.postdatas);
    });
  }

}
