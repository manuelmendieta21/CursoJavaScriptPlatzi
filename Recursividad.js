
function recursive(n) {
    if (n === 0) {
      return 0
    } else {
      return n + recursive(n - 1)
    }
  }

 let n =3;
 console.log(recursive(n));