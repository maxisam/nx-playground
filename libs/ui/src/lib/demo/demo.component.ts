import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'org-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
