import { helper } from '@ember/component/helper';

export function gt([n1, n2]) {
  return n1 > n2;
}

export default helper(gt);
