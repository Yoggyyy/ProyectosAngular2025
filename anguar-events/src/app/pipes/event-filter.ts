import { Pipe, PipeTransform } from '@angular/core';
import { IEvents } from '../interfaces/i-events';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {
  transform(events: IEvents[], filterBy: string): IEvents[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? events.filter((event) =>
          event.title.toLocaleLowerCase().includes(filter) ||
          event.description.toLocaleLowerCase().includes(filter)
        )
      : events;
  }
}
