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
              <p class="text-grey">I am a person who values genuine expression and honesty over blindly following the crowd. I enjoy listening to music and spending some time alone. I hate a lot of things. I can charm dogs. I have no limitations. I never make the same mistake twice.</p>
            <br />
              <p class="text-grey"> I make it five or six times, just to be sure. Being attractive is just not something I have any control over. I enjoy coding eventhough it's not something I've been doing for a long time.</p>
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
              <!-- <div class="child">
                <v-btn icon="fas fa-camera" color="blue" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Photography</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing <br /> elit. Blanditiis fugit deleniti officiis
                </p>
              </div> -->
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="services">
        <div class="d-flex justify-center mb-6">
          <v-btn color="blue" class="mr-2">All</v-btn>
          <v-btn class="mr-2" variant="tonal">Web Design</v-btn>
          <!-- <v-btn class="mr-2" variant="tonal">Fron Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Photography</v-btn> -->
          <v-btn variant="tonal">Illustration</v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{isHovering, props}">
                <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover' : isHovering}" v-bind="props">
                  <v-img :src="item.img" height="225px" cover></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="blue" class="mt-4">Load More</v-btn>
        </div>
      </v-col>
      <v-col cols="12" id="page">
        <div class="pre">
          <h2 class="text-center">Testimonials</h2>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="" height="200px" cover></v-img>
                <v-card-title>Philani Mxathule</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, quaerat, nesciunt deserunt eum distinctio maxime voluptates quibusdam dolores eligendi, consectetur sed obcaecati ipsa at ea quia doloremque repellendus temporibus quas?
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="" height="200px" cover></v-img>
                <v-card-title>Lunga Booi</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, quaerat, nesciunt deserunt eum distinctio maxime voluptates quibusdam dolores eligendi, consectetur sed obcaecati ipsa at ea quia doloremque repellendus temporibus quas?
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="" height="200px" cover></v-img>
                <v-card-title>Sabelo Mdashe</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, quaerat, nesciunt deserunt eum distinctio maxime voluptates quibusdam dolores eligendi, consectetur sed obcaecati ipsa at ea quia doloremque repellendus temporibus quas?
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" id="blog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire me for your awesome project</h1>
              <p class="text-grey">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate inventore ducimus, iste dolorem iure laboriosam numquam provident. Molestiae qui a mollitia, neque reiciendis perspiciatis recusandae ipsa minima, suscipit saepe expedita.
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn color="blue" class="mt-15">Hire me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
        <div class="child">
          <h1>Contact info.</h1>
          <v-btn icon="fas fa-map-marker" class="mt-10"  variant="outlined"></v-btn><br />
          <span class="text-caption">Your street SYO, Your Area Dream</span> <br />
          <v-btn ico="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br />
          <span class="text-caption">084085 -2051</span><br />
          <span class="text-caption">084085 -2051</span><br />
          <v-btn ico="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br />
          <span class="text-caption">slipani@gmail.com</span><br />
          <span class="text-caption">slipani@gmail.com</span><br />
        </div>
      </v-col>
      <v-col cols="12" sm="8">
        <h1 class="mt-8">Send your message</h1>
        <v-divider></v-divider>
        <span class="text-caption">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus animi cumque inventore, eius corrupti, nesciunt ducimus sequi in molestias odit doloremque voluptatibus. Nesciunt, quos voluptatibus ullam aliquid illo doloribus totam.
        </span>
        <v-row class="mt-10">
          <v-col cols="12" sm="6">
            <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>
        <v-btn color="blue" class="mt-2">Submit Now</v-btn>
      </v-col>
      </v-row>
      </v-col>
    </v-container> 
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

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
    FooterView
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
    background-color: #393f49;
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
    /* height: 300px; */
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