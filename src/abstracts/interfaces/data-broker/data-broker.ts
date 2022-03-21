import { PLAIN_OBJECT } from "../../types/common";

export interface DataBrokerEvent<T>{
    [index:string] : any;
    type:T;
}

/**
 * An interface that allows a parent and child side to communicate in an efficient way, adhereing to principles in SOLID design patterns.
 * 
 * @param EV_Type the type of the output event the child side emits
 */
export interface DataBroker<EV_Type>{

    /**
     * @returns a configuration that the child side of the data broker can use
     */
    getConfig() : Promise<PLAIN_OBJECT>;
    
    /**
     * Called from child side to emit an event
     * @param ev the event data
     * @returns a promise that resolves if the event handling was successful else it rejects
     */
    on(ev : DataBrokerEvent<EV_Type>):Promise<any>;
}
