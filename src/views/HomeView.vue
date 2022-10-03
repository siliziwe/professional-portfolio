<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello</h1>
              <h1 class="text-white">I'm Siliziwe Pani</h1>
              <span class="text-grey">Front-end Developer</span><br />
              <v-btn tile dark class="text-light-blue mt-8" variant="outlined">Contact me</v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div style="position: absolute;z-index: 9999;bottom:0;margin-left:auto;margin-right:auto;left:0;right:0;text-align: center;">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position:relative;z-index:9999;" class="mt16">
              <v-img src="https://i.postimg.cc/1X2Brjqs/Silizwe-1-removebg-preview.png" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="https://i.postimg.cc/SQZkWtXj/image.png" max-height="300"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About me</h5>
              <div style="width: 120px">
                <v-slider v-model="slider2" color="light-blue" label="track-color">

                </v-slider>
              </div>
              <h4 class="mt-n4">I am a Creative Web Designer</h4>
              <h4>And Developer</h4>
              <p class="text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, possimus quo ipsum perferendis facere consequuntur provident beatae blanditiis aperiam nam quasi voluptatibus incidunt amet veritatis eaque illo accusamus voluptas officiis?</p>
            <br />
              <p class="text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, possimus quo ipsum perferendis facere consequuntur provident beatae blanditiis aperiam nam quasi voluptatibus incidunt amet veritatis eaque illo accusamus voluptas officiis?</p>
              <v-btn tile dark color="light-blue" class="mt-4">
                Download Resume
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>What I do</h2>
        <div style="width:120px; margin: 0 auto">
          <v-slider v-model="slider2" color="blue" label="track-color"></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn icon="fas fa-laptop" color="blue" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Web Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing <br /> elit. Blanditiis fugit deleniti officiis
                </p>
              </div>
              <div class="child">
                <v-btn icon="fas fa-mobile-alt" color="blue" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">App Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing <br /> elit. Blanditiis fugit deleniti officiis
                </p>
              </div>
              <div class="child">
                <v-btn icon="fas fa-camera" color="blue" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Photography</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing <br /> elit. Blanditiis fugit deleniti officiis
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="services">
        <div class="d-flex justify-center mb-6">
          <v-btn color="blue" class="mr-2">All</v-btn>
          <v-btn class="mr-2" variant="tonal">Web Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Fron Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Photography</v-btn>
          <v-btn variant="tonal">Illustration</v-btn>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      slider2: 50,

items: [
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
]
    }
  },

  components: {
    NavBar,
  },
});
</script>


<style scoped>
  .v-container{
    padding: 16px 0;
  }
  .head{
    position: relative;
    text-align: center; 
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  .head::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: black;
    box-shadow: 10px 10px 10px rgb(19, 19, 21);

    transform: skew(0deg, 6deg);
  }
  .head:after{
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: black;
    box-shadow: 10px 10px 10px 5px rgb(19, 19, 21);
    transform: skew(0deg, -6deg);
  }
  .egg{
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #7eaafb;
    box-shadow: 10px 10px 10px rgb(19, 19, 21);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 0%;;
  }
  .first{
    width: 100%;
    /* height: 200px; */
    text-align: center;
    padding: 2rem 2rem;
  }
  .child{
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
  .imgHover{
    padding: 0 200px;
  }
  .pre{
    width: 100%;
    height: 300px;
    text-align: center;
    padding: 0 200px;
    background-color: #f5f5f5;
  }
  .hire{
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color: #e9e9e9;
  }
</style>