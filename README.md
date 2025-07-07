# 🦊 Node.js Blog Sitesi Altyapısı

Merhaba! Bu proje, bir **Node.js blog web sitesi altyapısıdır**. İçerisinde hem şık bir blog tasarımı bulunur 🖌️ hem de "Nasıl yapılır?" tarzında kartlar ile bilgilendirici içerikler sunmak üzere hazırlanmıştır 📚.

---

## 🚀 Kurulum

Projeyi klonladıktan sonra terminale aşağıdaki komutu yazman yeterli:  
```
npm install
```
Bu komut `package.json` dosyasındaki tüm bağımlılıkları indirir 🧩

---

## 📁 Data / Kartlar Sistemi

Projede, içerikler **kartlar** şeklinde gösterilir. Bu kartlar, `data/kartlar.json` dosyasından okunur ve isimlerine göre otomatik olarak oluşturulur ✅

### ✍️ Kart Ekleme / Silme

- Yeni bir kart eklemek için `data/kartlar.json` dosyasına yeni bir nesne eklemeniz yeterli 📄  
- Kart silmek için ilgili nesneyi silin 💨

### 🧪 Örnek Kart JSON

```
{
    "isim": "Örnek Kart",
    "aciklama": "For Example",
    "icerik-html": "<p>Bu bir açıklama</p><code>Hello, World!</code><not>Bu kod örnek amaçlıdır.</not><uyari>Etiketleri düzgün kapatmalısınız!</uyari>"
  }
``` 

> Bu örneği kendi ihtiyacınıza göre düzenleyebilirsiniz ✨

---

## 📌 Ek Bilgiler

- Projede EJS veya benzeri bir template engine kullanılmaktadır 🧠  
- Görsel ve stil öğeleri `public/` klasörü içindedir 🎨  
- Kartlar dinamik olarak frontend’e yansır 🔄

---

## 🤝 Katkıda Bulunmak

Her türlü Projeye ve öneriye açığız!  
Fork'la, geliştir, gönder 🎯

---

## 📬 İletişim

Projeyle ilgili sorular için `issue` açabilirsiniz veya bana <a href="https://github.com/tilkibutdev">profilimdeki linklerden</a> ulaşabilirsiniz.  

---

## ⭐ Desteklemek için

Bu projeyi beğendiyseniz yıldız bırakmayı unutmayın! ⭐
