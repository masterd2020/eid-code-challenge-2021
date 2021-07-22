class ShuffleClass {
  constructor(students, numToMove) {
    this.students = students;
    this.numToMove = numToMove;
  };
  
  checkForStudentDatatype () {
    // NOTE: on this JavaScript is weird ☹️, everything is considered as object
    if(typeof(this.students) !== "object") throw Error("The students should be of type array");
  };

  checkForNumToMoveDatatype () {
    if(isNaN(this.numToMove)) throw Error("Pass in only number");
  };
  
  handleNegativeAndPositiveInfinity() {
    if(this.numToMove < Number.NEGATIVE_INFINITY || this.numToMove > Number.POSITIVE_INFINITY) throw Error(`numToMove value is greater than the Negative or Positive Infinity`);
  }
  
  shuffle() {
    // Check for correct data type
    this.checkForStudentDatatype(this.students);
    this.checkForNumToMoveDatatype(this.numToMove);
    
    // Student array must have an element
    if(this.students.length < 1) throw Error("Please add in elements to the array");
    
    // numToMove must be between Negative and Positive Infinity
    this.handleNegativeAndPositiveInfinity();
    
    // Converting to integers, incase of string
    this.numToMove = parseInt(this.numToMove);
    
    // Return the array when numToMove is 0
    if(this.numToMove === 0) return this.students;
    
    // By default the Javascript "slice" method does not include the end index when extracting the array portion which lead to addition of 1 to simulate that behaviour.
    const shiftedElement = this.students.slice(0, this.numToMove+1);
    const toBeShifted = this.students.slice(this.numToMove+1);
    
    return toBeShifted.concat(shiftedElement);
  }
}

const arr = [1,2,3,4,5,6,7,8,9,0];
const shuffleClass = new ShuffleClass(arr, 3);
console.log(shuffleClass.shuffle());