(function checkRotation(s1, s2) {
   let isRotation = true;
   if (s1.length !== s2.length) isRotation = false;
   let x = s2.indexOf(s1[0]);
   console.log(x)
   console.log(s1.length)
   for (let i = 1; i < s1.length - x; i++) {
      if (s1[i] !== s2[x + i]) isRotation = false;
   }

   for (let i = 0; i < x; i++) {
      if (s2[i] !== s1[i + (s1.length - x)]) isRotation = false;
   }

   console.log("isRotation: ", isRotation);

})("Rotation", "tationRo");