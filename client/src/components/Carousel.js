{
  /* <div *ngIf="resources" id="{{carouselId}}" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false" data-interval="3000">
  <div class="carousel-inner">
    <!--TODO: edit *ngFor to populate carousel with carousel-card components.-->
    <!--carousel-card can bind a single resource as an Input.-->
    <!--"let first=first" sets the "first" variable to be true for the first card in the carousel. The [ngClass] assigns the active property to it-->
    <!--https://stackoverflow.com/questions/44288434/angular-2-ngfor-first-last-index-loop-->
    <app-carousel-card *ngFor="let first=first" class="carousel-item" [ngClass]="{'active': first}"></app-carousel-card>
  </div>
  <a class="carousel-control-prev" href="#{{carouselId}}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#{{carouselId}}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */
}
