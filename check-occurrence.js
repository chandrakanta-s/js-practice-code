// Check occurrence of one string inside another without using any inbuilt functions.
// Checks occurrence of s2 in s1.
(function checkOccurrence(s1, s2) {
   let count = 0;
   let ptr = 0;
   for (let i = 0; i < s1.length; i++) {
      if (s1[ptr] == s2[0]) {
         let b = false;
         for (let j = 0; j < s2.length; j++) {
            if (s1[ptr + j] == s2[j]) {
               b = true
            } else {
               b = false;
            }
         }
         if (b) {
            ptr = ptr + s2.length;
            count++;
         } else {
            ptr += 1;
         }
      } else {
         ptr = ptr + 1;
         continue;
      }
   }
   console.log("count: ", count)

})("here and there", "here")