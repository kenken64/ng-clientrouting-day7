import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwcharService } from '../../../swchar.service';

@Component({
  selector: 'app-star-wars-char-details',
  templateUrl: './star-wars-char-details.component.html',
  styleUrls: ['./star-wars-char-details.component.css']
})
export class StarWarsCharDetailsComponent implements OnInit {

  results = [];
  constructor(private activatedRoute: ActivatedRoute,
    private swSvc: SwcharService,
    private route: Router) {}

  ngOnInit() {
    let charId = this.activatedRoute.snapshot.params.charId;
    this.results = this.swSvc.searchCharCastInWhichFilm(charId);
  }


  goBack(){
    this.route.navigate(['/swChar']);
  }
}
