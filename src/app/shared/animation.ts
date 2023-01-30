import { state } from '@angular/animations';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export function fadeInOut(): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('0.5s ease-out')]),
    transition('* => void', [animate('0.3s ease-out'), style({ opacity: 0 })]),
  ]);
}
