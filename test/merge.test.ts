import { merge } from '../src/merge';

describe('merge', () => {
  test('should merge three standard sorted arrays in ascending order', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 8, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle empty arrays correctly', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  test('should handle some empty arrays', () => {
    const collection_1 = [1, 4, 7];
    const collection_2: number[] = [];
    const collection_3 = [10, 5, 2];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 4, 5, 7, 10]);
  });

  test('should handle duplicate values correctly within and across arrays', () => {
    const collection_1 = [1, 2, 2, 5];
    const collection_2 = [2, 3, 5];
    const collection_3 = [8, 5, 2];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 2, 2, 3, 5, 5, 5, 8]);
  });

  test('should handle negative numbers correctly', () => {
    const collection_1 = [-10, -5, 0];
    const collection_2 = [-8, -2, 3];
    const collection_3 = [4, -1, -6];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-10, -8, -6, -5, -2, -1, 0, 3, 4]);
  });

  test('should handle single-element arrays', () => {
    const collection_1 = [5];
    const collection_2 = [3];
    const collection_3 = [7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([3, 5, 7]);
  });

  test('should merge correctly when arrays have different lengths', () => {
    const collection_1 = [1, 2];
    const collection_2 = [3, 4, 5, 6];
    const collection_3 = [9, 8, 7];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
