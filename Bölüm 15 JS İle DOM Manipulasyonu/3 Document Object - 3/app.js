let value;

value = document;

// Scriptler

value = document.scripts;  // HTMLCollection(4) [script, script, script, script]

// NOT: app.js yani üzerine kodlarımızı yazdığımız js scriptini HTML sayfamızın sonuna eklememiz gerekir.
// eklemezsek bu scriptin altında tanımladığımız diğer scriptler yukarıdaki gibi sorgu işlemlerinde karşımıza çıkmazlar.s   

value = document.scripts.length;
value = document.scripts[0];

// Linkler

value = document.links;   // sayfadaki tüm a etiketlerini(link) getirir.
// value = document.links[0];   
// value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class");  // son linkimizin class özellikleri.
// value = document.links[document.links.length-1].getAttribute("href");    
// value = document.links[document.links.length-1].className;    // aynı şekilde class özelliklerini getirir.   
// value = document.links[document.links.length-1].classList;   // class ları ayrı ayrı görmek istersek.


// Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];    // Eğer erişmek istedğimiz formun "name" özelliğime bir atama yapılmışsa oismi yazarak da forma erişilebilir.
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");

// value = document.forms[0].method;

console.log(value);