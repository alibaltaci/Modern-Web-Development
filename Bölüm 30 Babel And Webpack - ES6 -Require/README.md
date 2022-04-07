BABEL - WEBPACK

BABEL

- ES6 ve sonrasını desteklemeyen browserlar için kodlarımızı ES5 göre çevirir.

- NPM 'den indirilecekler

    --> @babel/cli (Babel 'i terminalden kullanabilmemizi sağlar.)

    --> @babel/core (Dönüştürme işlemleri yapar.)

    --> @babel/polyfill (Async await 'leri tam olarak kullanabilmek için gerekli olan paket.)

    --> @ babel/preset-env (Presetleri kullanabilmek için)

Babel 'i Projelerde Kullnma

- Globalde babel kullanmıyırsak kendi babal 'imizi localde kullanmamız gerek.

- Babel 'i Cli 'de kullanabilmek için

    --> node_modules --> .bin --> babel.cmd

    --> cmd --> .\node_modules\.bin\babel

- Gerekli paketlerin indirilmesi 

    --> npm install <paket> <paket> <paket> ... --save -dev

- NOT: Babel 'in nerde nasıl kullanılacağını öğrenmek için babel 'in kendi sitesindeki setup kısmından yararlanabiliriz.

- Kodlarımız ES6 ve sonraki sürümlere göre çevrilsin diye belirtmemiz gerek (presetlerimize söyleyeceğiz)

  Bunun için ".babelrc" şeklinde bir configuration file oluşturmamız gerek.

- .babelrc içine eklenecek kısım 
    {
        "presets" : [@babel/preset-env]
    }

- src klasörünü aç, bu klasörü belirterek içerisindeki kodların ES5 'e göre çevrilmesini sağlayacağız.

    --> cmd --> .\node_modules\.bin\babel\babel src -d lib

    - lib : Kodlarımızın ES5 formatlarının  keydedileceği klasör.

- babel.cmd 'yi her sefrinde uzun uzun yazmak yerine package.json 'a eklenerek çağrılabilir.

    --> "scripts" : {
        "build" : "babel src -d lib"
    }

- cmd --> npm run build (dediğimiz zaman her zaman node_modules içinde arar.)


WEBPACK

- Modern JS uygulamaları için bir modül Bundler 'dır. (Madül Paketleyicisi)

- Proje çalıştırıldığında, projenin ihtiyaç duyableceği her modül tipini alan bir dependency graph (bağlılık grafiği) oluşturur.
  ve bu grafiğin işlemesi sonucu çıktı olarak bir uygulama paketi üretir.

- İlk olarak babel eklenir sonra ilişki kurulur.

- Burada babel/cli indirmeye gerek yok çünkü babel babel webpack ile iletişim kuracak ve babel 'i kendisi çalıştıracak.

- Webpack ile babel arasındaki ilişkiyi sağlamak için babel-loader indireceğiz.

- Yukarıdakiler indirildkten sonra webpack indirme işlemleri yapılır.

    --> cmd --> npm install webpack/cli webpack --save -dev (common line'da kullanablmek için)

- src (source) klasörü oluştur.

- Config dosyası oluştur --> webpack.connfig.js

- cmd 'de webpack kullanabilmek için package.json --> script --> "build" : "webpack --watch" (--watch js dosyalarındaki değişiklikleri 
  görür)

- npm run build 

- Oluşan JS dosyasını çalışma sayfasına ekle 


ERROR

index.lock: File exist hatası için 

cmd --> rm -f .git/index.lock 

cmd --> -rf public


