function transform(arg1, arg2) {
    let result = [];
    for (let i = 0; i < arg1.length; i++) {
      if (!arg2.includes(arg1[i])) {
        result.push(arg1[i])
      }
    }
    for (let i = 0; i < arg2.length; i++) {
      if (!arg1.includes(arg2[i])) {
        result.push(arg2[i])
      }
    }
    return result
 }
  
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 //
 console.log(transform([1, 2, 3, 4], [3, 4, 5, 6]))
