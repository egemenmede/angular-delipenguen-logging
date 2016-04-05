AngularJS DeliPenguen Logging
=================================

"AngularJS DeliPenguen Logging", AngularJS için bir config kütüphanesidir.

Bu config kütüphanesi ne iş yapıyor?
=================================

Bu config işleminin bir benzeri AngularJS'in built-in fonksiyonlarında "debugEnabled" metodu ile var. Ancak yalnızca "debug" özelliklerini açıp-kapatabiliyor. Bizim kütüphanemizde ise warn, error, debug, log ve info olmak üzere tüm temel log işlemlerini açıp kapatabiliyor. (Kütüphaneyi hazırladıktan sonra, istenilen log biçimlerini açıp kapatmayı ekleyerek destek olan Enes Malik Terzi'ye ayrıca teşekkürler.)

AngularJS DeliPenguen Logging web projelerinde kullanılabildiği gibi, Ionic gibi AngularJS kullanan hibrit mobil projelerinde de kullanabilir.

Faydaları neler?
=================================

1. Projelerinizin preprod ve prod çıkışlarına göre log yazımlarının çıktısını otomatize edebilirsiniz.
2. Logların konsola basılan ve basılmayan işlemlerde oluşan verimlilik ve performans farkının ortadan kaldırabilirsiniz.
3. AngularJS ile best practicies olarak kesinlikle önerilmeyen "consol." işlemleri yerine AngularJS'in built-in fonksiyonu olan "$log" un kullanılmasını sağlamakla log kullanımlarına yazılım standardizasyonu getirmiş olursunuz.
4. "DELIPENGUEN > DEBUG", "DELIPENGUEN > WARN" gibi yazım şekilleriyle konsol loglarını kişileştirilmiş modda kullanabilirsiniz.

Kullanım Şekilleri
=================================

1. Tüm Loglar Açık
```
$log.delipenguenLogging(true);
```
2. Tüm Loglar Kapalı
```
$log.delipenguenLogging(false);
```
3. Yalnızca İstediğiniz Loglar Açık/Kapalı
```
$log.delipenguenLogging(true);
$log.activeLogs(['info', 'debug']);
```
O halde açılışı yapalım :)
```
$log.delipenguenLogging(true);
```
Örnek
=================================
https://jsfiddle.net/DeliPenguen/mxw6xems/
