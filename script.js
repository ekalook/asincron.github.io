  // // // Promises .then() .catch()

  function makeToys(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if(Math.random() > 0.3) {
        resolve('Ready to sell')
      } else {
        reject ('Not for sale')
        }
      }, 3000)
    });
  }

  
  function soldToys(statuss) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if(statuss === 'Ready to sell') {
        if(Math.random() > 0.4){
          resolve('Sold, Ready to delivery')
        } else {
          reject ("Couldn't be sold")
         }
        }
      }, 2000)
    });
  }

  function deliverToys(deliveryStatus) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if(deliveryStatus === 'Sold, Ready to delivery'){
        if(Math.random() > 0.5) {
          resolve('Toy has been sent')
        } else {
          reject ('Failed to send')
        }
       }
      }, 1000)
    });
  }

  makeToys()
  .then((statuss) => {
    console.log(statuss)
    return soldToys(statuss)
  })
  .then((deliveryStatus) => {
    console.log(deliveryStatus)
    return deliverToys(deliveryStatus)
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));



  // Async / Await

// async function makeToys() {
//   setTimeout(() => {
//   if(Math.random() > 0.1) {
//     return('Ready to sell')
//   } else {
//     return ('Not for sale')
//   }
//  }, 3000)
// }

// async function soldToys(status) {
//   setTimeout(() => {
//   if(status === 'Ready to sell') {
//     if(Math.random() > 0.2){
//       return('Sold, Ready to delivery')
//     } else {
//       return ("Couldn't be sold")
//     }
//   }
//  }, 2000)
// }

// async function deliverToys(deliveryStatus) {
//   setTimeout(() => {
//   if(deliveryStatus === 'Sold, Ready to delivery'){
//     if(Math.random() > 0.3) {
//       return('Toy has been sent')
//     } else {
//       return ('Failed to send')
//     }
//   }
//  }, 1000)
// }

// async function myToys() {
//   try {
//     const status = await makeToys();
//     console.log(status)

//     const deliveryStatus = await soldToys(status)
//     console.log(deliveryStatus)

//     const result = await deliverToys(deliveryStatus);
//     console.log(result)
     
//   } catch (error) {

//     console.log(error);
//   }
// }
// myToys();


