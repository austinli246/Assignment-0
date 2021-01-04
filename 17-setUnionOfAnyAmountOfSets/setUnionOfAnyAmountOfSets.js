function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set(); 

  for (let i =0; i <args.length; i++){
    args[i].forEach(union.add,union);
  }

  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
