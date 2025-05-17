import { MESSAGE_LIST, NAME_LIST } from "./constants";

export const debouncedFunction = (fn, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export const generateRandomName = () => {
    return NAME_LIST[Math.floor(NAME_LIST.length * Math.random())];
};

export const generateRandomMessage = () => {
    return MESSAGE_LIST[Math.floor(MESSAGE_LIST.length * Math.random())];
};
