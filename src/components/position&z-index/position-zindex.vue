<template>
  <div class="deneme">
    <div class="asd"></div>
  </div>
  <div class="kap3">
    <!--    kap1-->
    <div class="kap1">
      <div class="kap3">
        <div class="kap2">denee</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "position-zindex",
};
/*

  relative verdikten sonra sağa sola alsak dahi sadece görüntüde sağa sola gitmiş olur ama aslıda hala orada durur.


  bir itemin üst elemanını kapsayıcı olarak görmesi için o elemanın position: relative özelliğine sahip olması gerekir.

  üstündeki hiçbir elemanında realtive özelliği yoksa body'i referans alır

  ÖNEMLİ , AH BENİM SALAK KAFAM !:
  position absolute verdikten sonra direkt olarak relative containerinin sıfırına gitmiyor, aynen yerinde sabit kalır. fakat relative olan container'inin içinde serbesttir.
  left-right-bottom-top gibi değerler vererek relative olan containerina göre pozisyon alır.
  position absolute respects margin value!

  position fixed, asla kapsayıcısının relative olup olmadığına bakmaz. her zaman body'nin sıfıra sıfırına yapışır.

  position static, kendinden önceki verilen position ve positionun alt değerlerini(left-rigth-top-bottom) gibi değerleri sıfırlar, ilk haline döndürür

  z-indexin çalışması için mutlaka bir position değerinin olması şarttır.

  user-agent-stylesheet -> tarayıcı ön tanımlı css'ler.

  block elementler satır atlarlar
  inline elementler yanyana gelirler

  block elemanlar bütün satır boyunca kaplarlar.
  inline-block, hem inline gibi item'lar yanyana gelir satır atlamaz, hem block eleman gibi widthi height gibi değerler verrilebilir.
  display: list-item, hem bir block gibi bir satır kaplar, hem bir list itemi gibi başında liste olduğunu gösteren sayı nokta vs olur.



 */
</script>

<style>
body {
  padding-top: 100px;
  padding-left: 100px;
}
.asd {
  height: 100px;
  width: 100px;
  background-color: red;
  position: absolute;
  left: 0;
  right: 0;
  /*right: 0;*/
  /*bottom: 0;*/
}
.deneme {
  /*position: relative;*/
  background-color: blue;
  width: 200px;
  height: 200px;
}

.kap1 {
  margin-top: 200px;
}
/*kap1 class'nı içeren elementin altındaki bütün kap2 class'ını içeren elementler*/
.kap1 .kap2 {
  background-color: red;
}
/*kap2 class'ını içeren tüm divler*/
div.kap2 {
  background-color: blue;
}
</style>
