import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private routerParams: ActivatedRoute,
    private browser:Router
    ) {
    // Query Params
    // http://localhost:4200/portfolio/5?{name=Falk&notSecretToken=1234}
    this.routerParams.queryParams.subscribe( res => console.log(res))

    // Route Params
    // http://localhost:4200/portfolio/{5}
    this.routerParams.params.subscribe( res => console.log(res))

    // Route Children Params
    // http://localhost:4200/portfolio/{5}
    this.routerParams.firstChild?.params.subscribe( res => console.log(res))

    
   }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.browser.navigate(['/'])
    // }, 5000)
  }

}
