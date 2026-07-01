/**
 * Merges three sorted arrays into a single sorted array in ascending order.
 * 
 * Preconditions:
 * - collection_1 is sorted ascending (min to max)
 * - collection_2 is sorted ascending (min to max)
 * - collection_3 is sorted descending (max to min)
 * 
 * Time Complexity: O(n1 + n2 + n3)
 * Space Complexity: O(n1 + n2 + n3) for the returned array, O(1) auxiliary space.
 * 
 * @param collection_1 Sorted ascending
 * @param collection_2 Sorted ascending
 * @param collection_3 Sorted descending
 * @returns A new sorted array in ascending order
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  
  let i = 0; // Pointer for collection_1 (0 -> end)
  let j = 0; // Pointer for collection_2 (0 -> end)
  let k = collection_3.length - 1; // Pointer for collection_3 (end -> 0)

  const len1 = collection_1.length;
  const len2 = collection_2.length;

  while (i < len1 || j < len2 || k >= 0) {
    let pick: 1 | 2 | 3;

    const has1 = i < len1;
    const has2 = j < len2;
    const has3 = k >= 0;

    if (
      has1 &&
      (!has2 || collection_1[i] <= collection_2[j]) &&
      (!has3 || collection_1[i] <= collection_3[k])
    ) {
      pick = 1;
    } else if (
      has2 &&
      (!has1 || collection_2[j] <= collection_1[i]) &&
      (!has3 || collection_2[j] <= collection_3[k])
    ) {
      pick = 2;
    } else {
      pick = 3;
    }

    if (pick === 1) {
      result.push(collection_1[i]);
      i++;
    } else if (pick === 2) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k--;
    }
  }

  return result;
}
