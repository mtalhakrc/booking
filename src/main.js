import { createApp } from "vue";
import App from "./App.vue";
// import App from "./TutorialApp.vue";

// import './assets/main.css'
import "./assets/normalize.css";
import "./assets/global.scss";
import "./assets/Flickity.scss";

createApp(App).mount("#app");

/*

NOTLAR

Sass css precompiler'dir. kendine has olan bir synatxı pure css compile eder
Sass precompiler'i .scss uzantılı dosyayı kullanır. bu dosyada pure css de yazılabilir.

bir sitenin contentinin maksimmum alacağı bir genişli var.
bu width kabaca bir şekilde elle verilebilir fakat asıl mesele, bu contentin maksimumunun daha fazla büyümesine engel olmak (max-width) ve bütün sayfa genelinde bir container olamlı ki bu site contentini sarmalasın ve sayfa genelinde hizalasın.
böylece content ekran ne kadar büyük olursa olsun hep ortada verilen büyüklük kadar olacaktır.


auto value
Depending upon the circumstances, provision of an auto value instructs the browser to render a margin according to the value provided in its own stylesheet.
However, when such a margin is applied to an element with a meaningful width, an auto margin instead causes all of the available space to be rendered as whitespace.

bir componentin class'ları büyük harfle başlayıp, alttakiler küçükle devam etmeli.

finger-size

Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
inline-block ile inline bir elemana width, height ve margin verilebilir.

display: flex; causes the flex container to act as display: block; in relation to the rest of the page.
display: inline-flex; causes the flex container to act as display: inline-block; in relation to the rest of the page.

css Pseudo-classes !!! :hover, :focus vs..

browser consolunda force state ile o stateyi göstertebiliyoruz.

linklerin veya butonların finger-size kadar olmasını istiyoruz.


:nth-child(n) selector
The :nth-child(n) selector matches every element that is the nth child of its parent.

diğer farklı selectorlere de bak bi

span is a inline text container

svg, vector vs araştır. iconlarda neden svg kullanılmalı?, svg definiton nedir? svg'lerdeki farklı path vs taglar nelerdir?, fill stroke nedir?

sass mixin mantığı?, @media query mantığı, bunlara bak akşam

// js yardımıyla class atama

transition, translate, transform ,pointer-event, opacity, overflow BUNLARI ARAŞTIR!!


div + div --> divden sonra div geliyorsa

mesele Showcase'yi yaparken bile bunun yüksekliğini nerden neye göre veriyor?   bunu bir araştır . anla

flex bir kutu içinde bazı kutular büyükken bazıları daha küçük ama bunu direkt width vermek yerine daha doğru bir şekilde nasıl yapılabilir? deneyelim bakalım.


SearchComponent
her bir inputu div'e aldık çünkü iconu ve descriptionu var
İLLAKİ HER BİR TAGA DİVE FALAN CLASS VERMEYE ÇALIŞMA gerek yok olum

    //sen kendinden sonra gelirsen, güzel trick
    & + & {
      margin-top: 20px;
    }


    input tagı label tagının içinde olursa id,for attributelerine gerek kalmaz.


    ::before ::after

    şunun içindeki şu, onun içindeki şu, onun içindeki div diye yakalamak dünyanın en ölümcül hareketi. mümkün olduğu kadar her şeye class vererek class'lar aracılığı ile yakalama yapılmalı.
        https://youtu.be/WzPaEmJqCYw?t=4238



    ÖNEMLİ ÇOK ÖNEMLİ
    flex bir kutu olsun. bu kutunun içindeki kutular farklı oranda width'leri var.
    bir item'e ne kadar büyük flex-grow değeri verdikçe o kutuya nazaran büyüklüğü o oranda büyür. böylece flex kutu içindeki itemlerin büyüklük oranlarını ayarlamış oluruz.


    her şeyi yerinde kullanmak önemli, js kullanılması gereken yerde js kullanırsın birader.


    width: auto -> herkes kendi içindeki içeriğe göre boyutlansın.

    bir kutuyu bütün genişliğe nazaran belli bir oranda küçültme:
    direkt sağdan soldan margin verdi ya. border-box değil mi nihayetinde


    The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML.While the end result is not actually in the DOM, it appears on the page as if it is, and would essentially be like this:

    a elementine transition vermek !!

    yukarıdan aşağıdan padding vermek yerine parentine yükseklik verip child child elementine pr ve pl vermek baya mantıklı

    careusel'e %33 lük bir width veriyor. geçici
    kutu büyüklüğü direkt tasarımdakini alıyor

   WTF??!!
   img:before'ye bgcolor vererek img'ye filtre atma. bu nasıl bişi bu nasıl bir kafa


   aga kutuyu içeriğe göre değil direkt width height veriyor ya. sonra içeriği ona göre şekillendiriyor.






--------------------------------------------------------------------------------------------------------------------------------

     All elements with class="spacious"
    .spacious {
        margin: 2em;
    }

    All <li> elements with class="spacious"
    li.spacious {
        margin: 2em;
    }

    All <li> elements with a class list that includes both "spacious" and "elegant"
    For example, class="elegant retro spacious"
    li.spacious.elegant {
        margin: 2em;
    }

    --------------------------------------------------------------------------------------------------------------------------------

    ADJACENT SIBLING COMBINATOR
     Paragraphs that come immediately after any image
    img + p {
        font-weight: bold;
    }

    --------------------------------------------------------------------------------------------------------------------------------

      CHILD COMBINATOR
       List items that are children of the "my-things" list
    ul.my-things > li {
        margin: 2em;
    }

    --------------------------------------------------------------------------------------------------------------------------------

    DESCENDANT COMBINATOR
     List items that are descendants of the "my-things" list
    ul.my-things li {
        margin: 2em;
    }

    --------------------------------------------------------------------------------------------------------------------------------

    GSAP
    GreenSock


// şu backgorund kısaltma ve attributelerini bir araştır be gözünü seveyim

    GÜZEL TRİCK
    bg-image'ye position absolute vermek ve içine content doldurmak yerine, bir div'e style etiketi ile bg-image veriyor. güzel trick.
    ama saçma bir şekilde localindeki fotoğraf gelmiyor. herhangi bir url'deki alıyor. gerçi neden öyle yapılsın ki. direkt class'a bg-image ver geç


    kapsayıcısının kim olduğu çok önemli. içinde div.container olan div.Showcase olsun. Showcase'ye flex verirsen, sadece Showcase'nin bir altındaki itemlar flex oluypr, daha child olan contentler flex olmuyor.
    container'ın altındaki content'in flex olması için container'a flex vermen lazım.




 */

/*
SORULAR:

-ben bir elemana height yerine padding de vererek aynı şeyi elde edebilirim. mesela bir butona height vermek yerine padding-top-bottom vererek de aynı şey olur. neden height vermek gerekiyor?


-bir kapsayıcıya herhangi bir özellik verdim diyelim. bu özellik yalnızca child componentleri mi etkiler yoksa child component'in child'larını da etkiler mi?

-right:0 attibutesini verice text'ler dahi alt satıra geçmiyor. bunun nedeni nedir?

- flex bir kutuda bir sıra ile hizalanan kutuları nasıl doğru bir şekilde hizaya sokucaz? destination örnek olarak. o buton nasıl hep düzhgün bir şekilde, itemların sayısnıa bağlı olmaksızın orada hizalı durur?
KESİNLİKLE SORMALISIN!
ama önce denemeye de devam et gerçi


-SOR
şu color ile stroke fill muhabbetini sor ya


-SOR
flex-basis

 */

/*
    TUTORIAL NOTLAR

    browserin left right top bottom gibi değerleri algılaması için o itemin? bir position özelliği olması gerekiyor.
    position relative'de top-right vs. değerler vardikten sonra browser yerini değiştiriyor olabilir ama aslında o item hala aynı yerinde bulunur
    top-right gibi değerler relative olan parentine göre hizlanıyor. ve çalışma mantığı da mesela top:10px ise üstünden 10 px aşağı gel, right:5px ise sağından 5px bırak, bottom:0 aprent en aşağı, left:0 parent sol sıfırına vss..
    position absolute padding'in bittiği yere yerleşir!
    top:100%  kapsayıcısının (kendisine relative olan kapsayıcının) kadar yukarıda boşuk bırak, aşağı gel! kendi yüksekliğin kadar değil!!!

    BU POSITION MEVZUSU sakat bir konu, bunu çok daha net bir şekilde araştır ve örnekler yaparak anlamaya çalış!!!
 */

/*
FLEX-BASIS
The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.


 */
