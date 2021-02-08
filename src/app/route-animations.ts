import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations'

export const slider =
    trigger('routeAnimations', [
        transition('* => home', slideTo('left')),
        transition('* => about', slideTo('right')),
        transition('* => skills', slideTo('right')),
        transition('* => experience', slideTo('right')),
        transition('* => education', slideTo('right')),
        transition('* => projects', slideTo('right')),
    ]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                height: '100%',
                width: '100%'
            })
        ], optional),
        group([



            query(':enter', [
                animate('1000ms ease', keyframes([
                    style({ opacity: 0.5, transform: 'translateZ(-500px) translateX(200%)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'translateZ(-500px) translateX(200%)', offset: 0.25 }),
                    style({ opacity: 0.5, transform: 'translateZ(-500px)', offset: 0.75 }),
                    style({ opacity: 1, transform: 'translateZ(0) translateX(0)', offset: 1.0 })
                ]))
            ], optional),
            query(':leave', [
                animate('1000ms ease', keyframes([
                    style({ opacity: 0.5, transform: 'translateZ(-500px)', offset: 0.25 }),
                    style({ opacity: 0.5, transform: 'translateZ(-500px) translateX(-200%)', offset: 0.75 }),
                    style({ opacity: 0.5, transform: 'translateZ(-500px) translateX(-200%)', offset: 1.0 })
                ]))
            ], optional),
        ]),
    ];
}