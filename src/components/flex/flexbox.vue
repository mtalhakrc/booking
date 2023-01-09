<template>
  <div>
    <div class="container">
      <div class="box box-1">1</div>
      <div class="box box-2">2</div>
      <div class="box box-3">3</div>
      <div class="box box-4">4</div>
      <div class="box box-5">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flexbox"
}
</script>

<style scoped>


body {
  margin: 0;

}

/*
  FLEX notlar

  flex'in bazı özellikleri sadece flex-container'a, bazıları sadece flex-item'a verilebilir.

--------------------------------------------------------------------------------------------------------------
FOR CONTAINER
  This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children
  display: flex   veya inline-flex

  This establishes the main-axis, thus defining the direction flex items are placed in the flex container
  .container {
    flex-direction: row | row-reverse | column | column-reverse;
  }


    flex-direction x-y hizalamasını değiştirir.
alingment -> hizamala
  default ayarlara göre;
  justify-content x ekseninde dizilimi
  align-items y ekseninde dizilimi

JUSTIFY CONTENT
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
flex-start (default): items are packed toward the start of the flex-direction.
flex-end: items are packed toward the end of the flex-direction.
start: items are packed toward the start of the writing-mode direction.
end: items are packed toward the end of the writing-mode direction.
left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.
center: items are centered along the line
space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.


ALIGN ITEMS (default: stretch)
align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
stretch (default): stretch to fill the container (still respect min-width/max-width)
flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
center: items are centered in the cross-axis
baseline: items are aligned such as their baselines align


ALIGN CONTENT
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.
default olarak x axisin'den örnek verirsek: y ekseninde birden fazla satır olursa bütün itemleri ortalamamız için align content kullanırız.
birden fazla satır olması lazım!!!
align content olduğu yerde aling items hiçbir işe yaramaz.


FLEX-DIRECTION
flex direction default row olarak main axisimizi değiştirir!
default olarka


space between -> box'ları kenara yapıştır kalan boşlukları eşit olarak dağıt
space around -> aradaki boşlukları her yere eşit olarak dağıt

--------------------------------------------------------------------------------------------------------------

FOR FLEX ITEMS

  ALIGN SELF
  This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
  container'a alignment verince illaki  bütün itemlar tek bir y ekseninde(default) duracak diye bir şey yok. her bir kutunun kendine özel bir alignment verebiliriz.


  FLEX-GROW
  This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
  If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).
  flex-grow ile container'daki boş kalan yerlerin paylaşımını diğer itemler ile oran bazında paylaştırılır.

  FLEX SHRINK
  grow'un tam tersi, küçülmesini istediğimiz item'a veririz.

  ORDER
  By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.
  normalde source codesinde ne ise sırası odur. fakat manuel olarak kutuların sıralanmasını değiştirebliriz.

*/

.container {
  /*width: 100%;*/
  display: flex;


  /*main axisi belirler.*/
  /*flex-direction: row-reverse;*/

  /*justify-content: space-around;*/
  /*flex-wrap: wrap;*/
  /*align-items: flex-end;*/

  /*align-content: center;*/

  height: 100vh;
  /*flex-wrap: wrap;*/
  justify-content: center;
  align-items: center;



}

.box {


  /*
  her bir flex-itemin containerinin 50% al dediğimiz halde almadı. bunun nedeni flex, içindeki bütün itemleri tek bir satıra sığdırmaya çalışır.
  flex-wrap özelliği ile bunu sarmalamasını, sonraki satırlara geçmesini sağlayabiliriz. default no-wrap
  wrap-reverse ile tersten sarmalar.
  */

  /*width: 50%;*/
  /*width:100%;*/

  width: 100%;
  color: white;
  text-shadow: 0 1px 3px;
  padding: 20px;
  text-align: center;
  font-size: 40px
}

.box-1 {
  /*align-self: flex-end;*/
  /*flex-grow: 1;*/
  background-color: mediumpurple;
  order:4;
  align-self: flex-start;

}

.box-2 {
  /*align-self: start;*/
  /*flex-grow:1;*/
  background-color: cornflowerblue;
}

.box-3 {
  /*flex-shrink: 5;*/
  background-color: darkseagreen;
}

.box-4 {
  order:3;
  background-color: dodgerblue;
}

.box-5 {
  background-color: lightskyblue;
}
</style>