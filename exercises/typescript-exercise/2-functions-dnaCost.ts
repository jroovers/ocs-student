export function dnaCost(baseCost, ...sequence) {
    return sequence.reduce(
        (sum, sequence) => sum+sequence.length, baseCost);
}
