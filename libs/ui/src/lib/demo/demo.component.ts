import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DemoEntity } from '@org/ui';
import { Observable } from 'rxjs';
import { DemoFacade } from '../+state/demo.facade';

@Component({
  selector: 'org-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  allDemo$: Observable<DemoEntity[]>;
  constructor(private demoFacade: DemoFacade) {
    this.allDemo$ = this.demoFacade.allDemo$;
  }

  ngOnInit(): void {
    this.demoFacade.init();
  }
}
