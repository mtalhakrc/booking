<template>
  <div>
    <div class="ornek-1">
    <div class="container">
      <div class="button">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
            <title>home</title>
            <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
          </svg>
        </div>
        <div class="text">
          HOME
        </div>
      </div>
      <div class="button">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
            <title>home</title>
            <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
          </svg>
        </div>
        <div class="text">
          FIND
        </div>
      </div>
      <div class="button">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
            <title>home</title>
            <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
          </svg>
        </div>
        <div class="text">
          SPACE
        </div>
      </div>
    </div>
    </div>

    <div class="ornek-1">
      <div class="container-2">
        <div class="button-2">
          <div class="svg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
              <title>home</title>
              <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </svg>
          </div>
          <div class="text-2">
            HOME
          </div>
        </div>
        <div class="button-2">
          <div class="svg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
              <title>home</title>
              <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </svg>
          </div>
          <div class="text-2">
            FIND
          </div>
        </div>

        <div class="button-2">
          <div class="svg-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
              <title>home</title>
              <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </svg>
          </div>
          <div class="text-2">
            SPACE
          </div>
        </div>
      </div>
    </div>

    <div class="ornek-1">
      <div class="container-3">
        <div class="svg-container">
          <img src="dollar.svg" alt="">
        </div>
        <div class="text">
          <div class="title">Investments</div>
          <div class="subtitle">Sıp & one time investments</div>
        </div>
        <div class="arrow-svg-container" >
          <img class="arrow-svg" src="arrow_forward_ios.svg" alt="">
        </div>
      </div>
    </div>

    <div class="ornek-1">
      <div class="card">
        <div class="svg"></div>
        <div class="content">
          <h3>Investments</h3>
          <p>SIP & one - time investments</p>
        </div>
        <div class="arrow">
<!--          <img class="arrow-svg-2" src="./arrow_forward_ios.svg" alt="">-->
        </div>
      </div>
    </div>


    <div class="ornek-1">
      <div class="player">
        <div class="icons">
          <div class="icon-1"></div>
          <div class="icon-2"></div>
          <div class="icon-3"></div>
        </div>
        <div class="timer">
          <div class="start-text">01:00</div>
          <div class="timer-line"></div>
          <div class="end-text">4:32</div>
        </div>
      </div>
    </div>

    <div class="ornek-1">
      
    </div>

  </div>

</template>

<script>
export default {
  name: "flex-ornekler"
}
</script>

<style scoped>
.player{
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 3px;
  padding: 20px;
}

.icons{
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-1{
  margin-right: 40px;
  font-size: 16px;
  width: 2em;
  height: 2em;
  background-color: dodgerblue;
}
.icon-2{
  font-size: 20px;
  width: 2em;
  height: 2em;
  background-color: dodgerblue;
}
.icon-3{
  margin-left: 40px;
  font-size: 16px;
  width: 2em;
  height: 2em;
  background-color: dodgerblue;
}

.timer{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.timer-line{
  background-color: red;
  margin-right: 10px;
  margin-left: 10px;
  height: 10px;
  flex-grow: 1;
}





/* ---------------------------------------------  */

.ornek-1{
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
  display: flex;
  background-color: ghostwhite;
  padding: 40px;
  width: 500px;
}
.not{
}
.container {
  padding:10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  border: 1px solid gray;
  background-color: lightskyblue;
  color: blueviolet;
}

.button{
  padding:5px;
}
/*.svg{*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  margin-bottom: 3px;*/
/*}*/

.container-2{
  display: flex;
  border: 1px solid gray;
  height: 80px;
  color: white;
  background-color: mediumpurple;
  width: 300px;
  justify-content: space-around;
}

.button-2{
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.svg-2{
  /*  em'in ölçüsü font-size olduğundan dolayı font size belirtip width height verebiliriz. */
  font-size: 30px;
  width: 1em;
  height: 1em;
  margin-bottom: 5px;
}
.text-2{

}

/* ---------------------------------------------  */
.container-3{
  width: 300px;
  background-color: ghostwhite;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding:15px
}

.svg-container{
  display: flex;
  font-size: 16px;
  background-color: palevioletred;
  width: 3em;
  padding:5px;
  height: 3em;
  border-radius: 50%;
  align-self: center;
  justify-content: center;
}

.text{
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-weight: bold;
}
.subtitle{
  font-size: 0.75em;
  color:gray;
}
.arrow-svg-container{
  display: flex;
  align-items: center;
}
.arrow-svg{
  font-size: 16px;
  width: 2em;
  height: 2em;
}
/* -------------------------------------------------------- */


.card{
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 1px 5px;
}
.svg{
  width: 50px;
  height: 50px;
  background-color: palevioletred;
  flex-shrink: 0;
  border-radius: 50%;
}
.content{
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
}
.arrow{
  width: 5px;
  height: 30px;
  background-color: #222222;
  flex-shrink: 0;
  /* ---------------------------------------------  */

/*  şu svg ler ile nasıl çalışıılıyor bi öğren lanet şeyler sinirimi bozuyor.*/

}
.arrow-svg-2{

}


</style>