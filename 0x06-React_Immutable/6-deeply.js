import { Map } from 'immutable';

export default function mergeDeeplyElements(obj1, obj2) {
  return Map(obj1).withMutations((obj) => {
    obj.mergeDeep(obj2).toList();
  });
}
