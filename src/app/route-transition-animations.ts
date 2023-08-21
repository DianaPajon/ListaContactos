import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [])
/*
intenté agregar animaciones, finalmente decidí comentar este código ya que 
sinceramente no entiendo esta parte, aunque funciona. No recuerdo de que página lo saqué, pero no es mio y no tengo el tiempo para 
entenderlo y hacer mis propias animaciones que funcionen.
export const routeTransitionAnimations = trigger('triggerName', [
    transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':leave', animateChild()),
         query(':enter', animateChild())
    ])
  ]);
*/