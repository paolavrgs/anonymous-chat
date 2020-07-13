export function compareArray (arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every(function(element, index) {
    return arr2.includes(element)// === arr2[index]; 
  })
}