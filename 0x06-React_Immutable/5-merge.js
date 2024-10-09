import { Map, List } from 'immutable';

export function concatElements(array1, array2) {
  return List(array1).concat(array2);
}

export function mergeElements(object1, object2) {
  return Map(object1).merge(object2);
}
