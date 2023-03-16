// import React, { useState } from "react";
// export default function Rating({productRating}) {
//     // for (let i = 1; i <= 5; i++) {
//     //     if (productRating >= i )
//     //          <i class="fa fa-star rating-color"></i>
//     //         else

//     //          <i class="fa fa-star"></i>
//     // }
   
  
//     const Rate = () => {
//         const [rate, setRate] = useState(0);
//         return (
//             <div>
//                 {[...Array(5)].map((item, index) => {
                   
//                     return (
//                         <label>
//                             <input type="radio"
                            
//                                 value={productRating}
//                                 onClick={() => {
//                                     setRate(productRating);
//                                     alert(`Are you sure you want to give ${productRating} stars ?`);
//                                 }}
//                             />
//                             <div>
//                                 <span>
//                                     color={
//                                         productRating < rate || productRating === rate
//                                             ? "000"
//                                             : "rgb(192,192,192)"
//                                     }
//                                 </span>
//                             </div>
//                         </label>
//                     );
//                 })}
//             </div>
//         );
//     };

//     export default Rate;


// }
