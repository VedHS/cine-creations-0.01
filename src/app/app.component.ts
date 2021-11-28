import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sagar Cine Creations';

@Input() background = 'scc-unit';  
bkUrl = {};   
ngOnInit() {
    this.bkUrl = this.getBkUrl();
  }
getBkUrl() {
    const styles = {
      'background-image': 'url(./cine-creations-0.01/docs/assets/' + this.background + '.jpg)'
    };
    console.log(styles);
    return styles;
  }

}
