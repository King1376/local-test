
// 1. 
// Promise.resolve().then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//       console.log("then1-1");
//     });
//   }).then(() => {
//     console.log("then2");
//     console.log('-'.repeat(30));
//   })

//   2.
// let p = Promise.resolve();
 
// p.then(() => {
//   console.log("then1");  // then1*2 then2 then1-1*2 then1-2
//   Promise.resolve().then(() => {
//     console.log("then1-1");
//   });
// }).then(() => {
//   console.log("then1-2");
// });
 
// p.then(() => {
//   console.log("then2");
// })

// 3. 
// let p = Promise.resolve().then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//       console.log("then1-1");
//     });
//   }).then(() => {
//     console.log("then2");
//   });
   
//   p.then(() => {
//     console.log("then3");
//   });

// 4. 
// Promise.resolve().then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//         console.log("then1-1");
//         return 1;
//       }).then(() => {
//         console.log("then1-2");
//       });
//   }).then(() => {
//     console.log("then2");
//   }).then(() => {
//     console.log("then3");
//   }).then(() => {
//     console.log("then4");
//   });

//   5. 

Promise.resolve().then(() => {
    console.log("then1");
    Promise.resolve().then(() => {
        console.log("then1-1");
        return Promise.resolve();
      }).then(() => {
        console.log("then1-2");
      });
  }).then(() => {
    console.log("then2");
  }).then(() => {
    console.log("then3");
  }).then(() => {
    console.log("then4");
  });