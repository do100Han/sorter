class Sorter { 

  constructor() { 
    this.array = [];
    this.compare = '';
  } 

  add(element) { 
    this.array.push(element); 
  } 

  at(index) { 
    return this.array[index]; 
  } 

  get length() { 
    return this.array.length; 
  } 

  toArray() { 
    return this.array; 
  } 

  sort(indices) {
    let newArr = [],
        oldArr = this.array;
    for (let i = 0; i < indices.length; i++) {
      let index = indices[i];
      newArr.push(oldArr[index]);
    }
    indices.sort();
    if (this.compare){
      newArr.sort(this.compare);  
    }
    else{
      newArr.sort(this.compareNumbers);
    }
    for (let i = 0; i < newArr.length; i++) {
      let element = newArr[i],
          index = indices[i];
      oldArr[index] = element;
    }
    console.log(this.array);
  } 

  compareNumbers(a, b) {
    return a - b;
  }

  setComparator(compareFunction) { 
    this.compare = compareFunction;
  } 
} 

module.exports = Sorter;