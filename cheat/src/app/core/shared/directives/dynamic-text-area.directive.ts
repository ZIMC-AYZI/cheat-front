import {DestroyRef, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {distinctUntilChanged} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Directive({
  selector: '[appDynamicTextArea]',
  standalone: true
})
export class DynamicTextAreaDirective implements OnInit {
  @Input() textFormControl!: FormControl;

  constructor(
    private elementRef: ElementRef,
    private destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.textFormControl.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.adjustHeight();
    });
  }

  private adjustHeight(): void {
    const textArea = this.elementRef.nativeElement;
    textArea.style.height = 'auto'; // Reset height to auto to calculate the new scrollHeight
    textArea.style.height = `${textArea.scrollHeight}px`; // Set the height based on scrollHeight
  }

  private textAreaControl(): void {
    if (this.elementRef.nativeElement.scrollHeight >= 30 && this.elementRef.nativeElement.scrollHeight <= 180) {
      this.elementRef.nativeElement.style.height = `${24}px`;
      this.elementRef.nativeElement.style.height = `${this.elementRef.nativeElement.scrollHeight}px`;
    }
  }
}
