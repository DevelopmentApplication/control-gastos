import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { fadeInOutAnimation, fadeOut } from '@shared/animation';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [fadeInOutAnimation],
})
export class LoadingComponent {
  show: boolean = false;
  @Input() text: string;

  constructor(
    private elementRef: ElementRef,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.showToggle.subscribe((data) => (this.show = data));
    this.addRelativeParentElement(this.elementRef.nativeElement);
  }

  addRelativeParentElement(elemento: any): void {
    !elemento.parentElement
      ? null
      : elemento.parentElement.nodeType === Node.ELEMENT_NODE
      ? elemento.parentElement.setAttribute('style', 'position: relative;')
      : this.addRelativeParentElement(elemento.parentElement);
  }
}
