# NODE JS

- cmd üzerinden node -v ile versiyon kontrolü yapılabilir.

- Node js asenkron olarak çalışır. Bir request geldiğinde diğer requestleri blocklamaz.

- Event Driven (Olay güdümlü) : Bir request gelmezse bu requestin gelmesini bekler.

- VS Terminal kısmı da cmd görevi görür kodumuzun çıktsına buradan bakabiliriz.

- NPM:
  --> npm (node package menagement) paket yönetim sistemidir. 

  --> Kod paketleri gibi düşünülebilir. 
  
  --> Bir projeyi ayağa kaldırabilmek için tüm işlemleri sıfırdan yazmak yerine  hazır paketler kullanılabilir.
  
  --> Paket içinde paket indirmek de mümkündür.

- Paket indirme 

  --> `npm install <paket ismi> ` (install yerine i şeklinde kısa yazım da mevcuttur.)

  --> indirilen paket node_modules adı altında çalışma dosyasında yer alır.


# NPM GLOBAL VE YEREL paketler

- Yerel paketler sadece indirildikleri klasör içinde kullanılabilirler.

- Birden fazla kullanılacak paketler her seferinde indirmek yerine global olarak kullanılabilir.

- Paketlerin nerede yer aldığını görmek için 
  
  ->` cmd --> npm root -g`

- ! Ürün kısmına çıkacağımız zaman global paketler kendi bilgisayarımızda olduğu için server tarafında olmayacaktır. Bu durum bize sıkıntı çıkartır.

- Sadece geliştirme ortamındaki ortak modülleri global olarak kur.

- Yerel kurmak daha iyi.

- ! Windows'da node_modules'ün nerede olduğunu sistem değişkenlerine eklememiz gerekir.

  --> ```Dosya gezgini --> Bu bilgisayar --> Gelişmiş sistem ayarları --> Ortam değişkenleri --> Yeni (Windows'un global değişkenleri bulması için path ekleme)
  --> NODE_PATH (Değişken adı) (Büyük harfle) --> Değişken --> Klasör yolunu yapıştır.```

- ! Paketi Global olarak kurmak için:

  --> `npm install -g <paket adı>`

- Bu işlemler yapıldığında önce gider kendi node_modules 'üne bakar, orada bulamazsa Global 'e bakar.

# KENDİ PAKETİMİZİ OLUŞTURMA

- Package.json : JS dosyalarımızın Manifesto dosyası olarka düşünülebilir.

  --> Oluşturduğumuz her bir uygulama kendi içinde bir pakettir.

  --> Bu uygulama (modul_paket) başka paketlere bağlı olabilir.

  --> Çalışmamızın hangi paketlere bağımlı olduğunu ve diğer extra özellikleri bu dosyamızın içine yazarız.

  -->` npm init` ile oluşturulur.

    ```>> package name: (paket ismi - eğer bu paket npm 'de yayınlanacaksa isim benzersiz olmalıdır.)
    
    >> description: 

    >> entry point: (projemizin ana dosyasını belirtir. ex: index.js)

    >> test command:

    >> git repository: (projenin git adresi)

    >> keywords:

    >> lisance: "ISC"

    >> is this OK?: (YES)```

- Paket oluşturulduktan sonra script altına kodların kısaltmaları yazılabilir.

  --> ``"Ali" : "echo `Benim adım Ali`"``

- Yazdığımız script 'i çalıştırmak için.

  --> `cmd --> npm run <kısaltma>`


# PAKET EKLEME 

- `npm install <paket adı>`

- Çalışmamızda hangi kullanıyorsak tüm paket isimleri package.json 'ın dependencies kısmına eklenir.

- Dependencies sayesinde kullandığımız paketler açıkca belirtilir.

- Paketler boyut olarak fazla olabileceği için serverlara yüklerken sıkıntı çıkartabilir.

- dependencies sayesinde kullanılan paketler bilindiği için node_modules dosyasını silebiliriz. Çalışmayı kullanacak olanlar
  bu paketleri kendileri indirebilirler.

- `cmd --> npm install` (dependencies içine bakarak tüm paketleri indirir.)

- Paketleri sildikten sonra refresh etmeyi unutma.


DEVELOPMENT DEPENDENCIES 

- Dependencies kısmında olanlar hem geliştirme hem de production kısmında kullanılabilir.

- Dev-dependencies : Sadece geliştirme ortamında kullanıla paketler.

- Development Dependencies olarak paket ekleme

  -->` npm install webpack-cli --save -dev`


ÇALIŞMAYI GITHUB 'A EKLEME

- package.json içinde yeni "repository" adında bir bölüm oluşturuyoruz.

   ``` "repository":{
        "type" : "git",
        "url" : "repository-url"
    }```


MPM PAKETİ EKLEME - SİLME

- NPM --> Hesap

- Npm paket ekleme 

   ``` >> cmd --> npm login 

    >> username:

    >> password:

    >> npm publish ```

- Npm üzerinde paket silme

   `>> npm unpublish <paket> --force`






