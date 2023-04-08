// if(timeDiffMilliseconds){
//     if(timeDiffMilliseconds < 60000){
//         timeDiffMilliseconds = timeDiffMilliseconds/1000
//         publishUnit = "Seconds"
//     }
//     if(60000 < timeDiffMilliseconds < 3600000){
//         timeDiffMilliseconds = timeDiffMilliseconds/60000

//         publishUnit = "Minutes"
//     }
//     if(3600000 < timeDiffMilliseconds < 86400000){
//         console.log("inside hour")
//         timeDiffMilliseconds = timeDiffMilliseconds/3600000

//         publishUnit = "Hours"
//     }
//     if(86400000 < timeDiffMilliseconds < 2592000000){
//         timeDiffMilliseconds = timeDiffMilliseconds/86400000

//         publishUnit = "Days"
//     }
//     if(2592000000 < timeDiffMilliseconds < 31104000000){
//         timeDiffMilliseconds = timeDiffMilliseconds/2592000000

//         publishUnit = "Months"
//     }
//     else {
//         timeDiffMilliseconds = timeDiffMilliseconds/31104000000

//          publishUnit = "Years"
//     }
// }


export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
