import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'tab-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('promoVideo', {static: false})
  promoVideo: ElementRef;

  public isVideoPlaying = false;

  videoPlay() {
    if (this.promoVideo && this.promoVideo.nativeElement && this.promoVideo.nativeElement.paused) {
      this.promoVideo.nativeElement.play();
      this.isVideoPlaying = true;
    }
  }
}
