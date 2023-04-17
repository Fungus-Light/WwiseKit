export type NumberRange<L, H, Count extends any[] = [], Res extends any[] = [], Flag extends boolean = Count['length'] extends L ? true : false> =
    Flag extends true
    ? Count['length'] extends H
    ? [...Res, Count['length']][number]
    : NumberRange<L, H, [...Count, ''], [...Res, Count['length']], Flag>
    : NumberRange<L, H, [...Count, '']>