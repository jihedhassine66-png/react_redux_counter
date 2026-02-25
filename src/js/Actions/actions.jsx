import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../Constants/actions-types.jsx";

export const incrementCounter = (payload) => ({
    type: INCREMENT_COUNTER,
    payload
});

export const decrementCounter = (payload) => ({
    type: DECREMENT_COUNTER,
    payload
});

export const resetCounter = (payload) => ({
    type: RESET_COUNTER,
    payload
});