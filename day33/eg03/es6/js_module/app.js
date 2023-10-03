console.log("Starting");
//noi cac module khac

/**
 * Export
 *      export default
 *      export named
 * Import
 *      import default
 *      import named
 * File nay se import nhung tai nguyen (bien,func,class) duoc export tu file khac
 */

// import user from "./modules/home.js";
// import getProduct, { //phai de default truoc named sau
//   categories as cate,
//   products,
// } from "./modules/products.js";
// console.log(getProduct());
// console.log(cate);

import * as products from "./modules/products.js";

console.log(products);
