// CommonJs Modülleri

const app = require("./module1"); // yol vermeden direkt olarak modül ismi yazılırsa o modili gider node_modules de arar.

console.log(app);

// app.test1();
// app.test2();
// app.test3();

// obje export etmek

// console.log(app.name);
// console.log(app.person);
// app.test1();


// ES6 ile export edilen değişkenleri kullanma

// sadece person ve testi almak istediğimizi varsayalım

// import {test, Person} from "./module1";

// test();
// Person.test();

// Hepsini import edebimek için

// import * as module1 from "./module1";

// module1.Person.test();

// // app.Person.test(); // eski yöntemle 

// module1.test();

// console.log(module1.Employee.maile);
// console.log(module1.Employee.name);

// console.log(module1.name);


// Default değeri import etme

// import Trial from "./module1";

// Trial.trial();

import trialVal from "./module1";

console.log(trialVal);