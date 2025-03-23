import {Directive, OnDestroy, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';

@Directive()
export abstract class BaseClockComponent implements OnInit, OnDestroy {
  #interval: NodeJS.Timeout | null = null;

  protected constructor(protected timeService: TimeService) {
  }

  ngOnInit(): void {
    this.timeService.start();
    this.updateTime();
    this.#interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.timeService.clear();
    if (this.#interval) {
      clearInterval(this.#interval);
    }
  }

  abstract updateTime(): void;
}
