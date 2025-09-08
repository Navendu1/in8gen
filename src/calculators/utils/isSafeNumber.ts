import MAX_SAFE_INTEGER from './maxSafeInteger';

function isSafeNumber(value: unknown): value is number {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

export default isSafeNumber;
