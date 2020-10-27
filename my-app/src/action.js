export const updateCounterSize = size => {
    return{type: "INCREASE_COUNTER_SIZE", payload: size}
}

export const increaseTotal = () => {
    return{type: "INCREASE_TOTAL"}
}