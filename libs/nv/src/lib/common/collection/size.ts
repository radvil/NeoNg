import { getProtoTag } from '../../_utils/get-proto-tag';
import { isArrayLike } from './is-array-like';
import { isString } from '../string/is-string';
import { stringSize } from '../string/string-size';

/** `Object#toString` result references. */
const mapTag = '[object Map]';
const setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @example
 *
 * size([1, 2, 3]) // 3
 *
 * size({ 'a': 1, 'b': 2 }) // 2
 *
 * size('neo') // 3
 */
export const size = (collection: any): number => {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  const tag = getProtoTag(collection);
  if (tag === mapTag || tag === setTag) {
    return collection.size;
  }
  return Object.keys(collection).length;
};

