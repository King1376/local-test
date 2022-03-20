 const p = new Promise((resolve, reject) => {
     resolve()
 })
 p.then(() => console.log('then1')).then(() => console.log('then1-1'))
 p.then(() => console.log('then2'))

 p.then(() => console.log('then3')).then(() => console.log('then4'))
