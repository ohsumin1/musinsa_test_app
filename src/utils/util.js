/**
 * @param {Array} arr 
 * @description 배열에서 truthy한 요소들의 개수를 반환
 */
export const getDataLength = (arr) => {
  if (arr.length) {
    return arr.filter(el => el).length;
  }
  return 0;
}