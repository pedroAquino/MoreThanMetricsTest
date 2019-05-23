import { curry } from 'ramda';

export default {
    toArray:  curry((...items) => [...items]),
    
    addRootLevel: curry(
        (key, values) => ({ [key]: {...values} })
    ),

};
