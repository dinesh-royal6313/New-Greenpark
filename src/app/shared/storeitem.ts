import { BehaviorSubject, Observable } from "rxjs";

export class StoreItem<T>{
    private _state$ : BehaviorSubject<T>;

    protected constructor(initialstate: T){
        this._state$=new BehaviorSubject(initialstate);
    }
    protected setValue(newValue: T):void{
        this._state$.next(newValue);
    }
    protected get Value$():Observable<T>{
        return this._state$.asObservable();
    }
    protected get value():T{
        return this._state$.value;
    }
}