function slugger(...rest){
    let returnVal = "";
    for (const element of rest) {
        returnVal = returnVal.concat("-", element)
      } 
      return returnVal;
}