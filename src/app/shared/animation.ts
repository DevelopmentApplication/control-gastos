import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.3s', style({ opacity: 0 }))]),
]);

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate('0.3s', style({ opacity: 1 }))]),
]);

export const fadeOut = trigger('fadeOut', [
  state('void', style({ opacity: 0 })),
  transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
]);

export const scrollAnimation = trigger('scrollAnimation', [
  state(
    'start',
    style({
      opacity: 0.2,
      transform: 'translateY(100%)',
    })
  ),
  state(
    'end',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  transition('start => end', [animate('0.5s')]),
]);
