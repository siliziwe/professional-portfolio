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
              <v-btn tile dark class="text-green mt-8" variant="outlined">Scroll down</v-btn>
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
              <div class="egg" data-aos="flip-right">
                <v-img src="https://i.postimg.cc/SQZkWtXj/image.png" max-height="300"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div data-aos="flip-left" class="border border-md border-primary bg-black">
              <h3 class="mt-16 text- text-center text-white" id="about">About me</h3>
              <div style="width: 120px" class="text-center">
                <v-slider v-model="slider2" color="lime" label="track-color">
                </v-slider>
              </div>
              <h4 class="mt-n4 text-lime">I am a Creative Web Designer</h4>
              <p class="text-white">I am a person who values genuine expression and honesty over blindly following the crowd. I enjoy listening to music and spending some time alone. I hate a lot of things. I can charm dogs. I have no limitations. I never make the same mistake twice.</p>
            <br />
              <p class="text-white"> I make it five or six times, just to be sure. Being attractive is just not something I have any control over. I enjoy coding eventhough it's not something I've been doing for a long time.</p>
              <v-btn tile dark color="light-green" class="mt-4">
                Download Resume
                 </v-btn>
                </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div data-aos="zoom-out" class="container ml-16 row justify-content-center text-center">
        <h3>Get to know me</h3>
      <div class="col-md-4 mb-4 mb-md-5">
      <div class="card mask-custom-2 bg-black">
    <h3 class="text-center text-black fst-italic shadow-lg bg-light">Hobbies</h3>
      <p class="text-center">I like playing soccer and playing mobile games. I also like spend most my time listening music. I also like drawing and also making animations using programs like FlipaClip and Stick Nodes.</p><br>
    </div>
  </div>
  <div class="col-md-4 mb-4 mb-md-0">
    <div class="card mask-custom-2 bg-black">
    <h3 class="text-center text-black fst-italic shadow-lg bg-light">Music</h3>
      <p class="">I listen to Hip Hop and R&B but mostly Hip Hop. I like mostly rap music and I listen to Eminem mostly. I also like J Cole, Lil Wayne, Cordae, Joyner Lucas, Jack Halow, Royce and King Von.</p> <br>
    </div>
  </div>
  <div class="col-md-4 mb-4 mb-md-0">
    <div class="card mask-custom-2 bg-black">
    <h3 class="text-center text-black fst-italic shadow-lg bg-light">Favourite Quotes</h3>
      <p class="mb-1">
      <ul><li>"Maintain your status as a man of words while retaining a flexible approach to your actions".</li>
      <li>"Every guy is already a king; it’s simply a matter of finding out the nature of your kingdom.".</li><br>
      </ul>
      </p>
    </div>
  </div>
</div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" class="text-center mt-4">
        <h2>What I do</h2>
        <div style="width:120px; margin: 0 auto">
          <v-slider v-model="slider2" color="black" label="track-color"></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn icon="fas fa-laptop" color="green" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Web Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing <br /> elit. Blanditiis fugit deleniti officiis
                </p>
              </div>
              <div class="child">
                <v-btn icon="fas fa-mobile-alt" color="green" class="text-white"></v-btn>
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
        </div>
      </v-col>
      <!-- <v-col cols="12" sm="12" id="services">
        <div class="d-flex justify-center mb-6">
          <v-btn color="blue" class="mr-2">All</v-btn>
          <v-btn class="mr-2" variant="tonal">Web Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Fron Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Photography</v-btn>
          <v-btn variant="tonal">Illustration</v-btn>
        </div>
      </v-col> -->
      <v-divider></v-divider>

      <div data-aos="flip-up" class="container bg-dark">
            <h1 class="text-dark text-center mt-16 my-5 fst-italic shadow-lg bg-green w-100" id="h1">Technical Skills</h1>
            <div class="row">
                <div class="col-md-4 text-white">
                    <p class="text">Html</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                            <span class="sr-only">100% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">CSS</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:98%">
                            <span class="sr-only">98% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">Bootstrap</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:92%">
                            <span class="sr-only">92% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 text-white">
                    <p class="text">SQL</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:90%">
                            <span class="sr-only">90% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">Vue js</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                            <span class="sr-only">20% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">Javascript</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:60%">
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 text-white">
                    <p class="text">Nodejs</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                            <span class="sr-only">0% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">React js</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                            <span class="sr-only">0% Complete</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-white">
                    <p class="text">Python</p>
                    <div class="progress">
                        <div class="progress-bar bg-lime" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                            <span class="sr-only">0% Complete</span>
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="my-5">
                    <h1 class="text-center text-dark fst-italic shadow-lg bg-light" id="h1"><span>Soft</span> <span>Skills</span></h1>
                    <div class="mask d-flex align-items-center h-100">
                        <div class="container" id="con">
                        <div class="row justify-content-center text-center">
                            <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card mask-custom-1 my-5 h-25 text-white">
                                <div class="card-body mb-2">
                                <h5 class="mb-1 text-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="300">
                                    Problem Solver</h5>
                                <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="500">
                                    <!-- <a href="#!" class="px-1">
                                    <i class="fab fa-github text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-twitter text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-linkedin-in text-white"></i>
                                    </a> -->
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card mask-custom-1 my-5 h-25 text-white">
                                <div class="card-body" id="cardbody">
                                <h5 class="mb-4 text-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="300">
                                    Communication</h5>
                                <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="500">
                                    <!-- <a href="#!" class="px-1">
                                    <i class="fab fa-facebook-f text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-twitter text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-linkedin-in text-white"></i>
                                    </a> -->
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 mb-0">
                            <div class="card mask-custom-1 my-5 h-25 text-white">
                                <div class="card-body">
                                <h5 class="mb-4 text-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="300">
                                    Creative</h5>
                                <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                                    data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                                    data-mdb-animation-delay="500">
                                    <!-- <a href="#!" class="px-1">
                                    <i class="fab fa-dribbble text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-linkedin-in text-white"></i>
                                    </a>
                                    <a href="#!" class="px-1">
                                    <i class="fab fa-instagram text-white"></i>
                                    </a> -->
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

            <v-divider></v-divider>

      <h1 class="text-center mt-16 pt-5 my-5 py-5" id="projects">Projects</h1>
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
          <v-btn id="runaway-btn" color="blue" class="mt-4">Load More</v-btn>
        </div>
      </v-col>



<div id="education">
        <div class="container bg-dark py-3 table-responsive-lg h-100" id="tcontainer">
            <h3 class="text-center fst-italic shadow-lg p-3 mb-5 shadow-sm text-dark bg-light" id="h1">Education</h3>
            <div class="mask d-flex align-items-center h-100">
                <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card mask-custom-1 text-white">
                        <div class="card-body" id="card">
                        <img class="rounded-circle shadow-2-strong mb-5"
                            src="https://i.postimg.cc/3xYNhSwr/20.jpg" height="65" alt="avatar" style="width: 100px;"
                            data-mdb-toggle="animation" data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-left"
                            data-mdb-animation-duration="1000" data-mdb-animation-delay="200">
                        <h5 class="mb-4 text-primary" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="300">
                            Battswood Primary School</h5>
                        <p class="mb-4 text-bg-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="400">
                            2010-2016</p>
                        <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="500">
                            <a href="#!" class="px-1">
                            <i class="fab fa-github text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-twitter text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-linkedin-in text-white"></i>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card mask-custom-1 text-white">
                        <div class="card-body">
                        <img class="rounded-circle shadow-2-strong mb-5"
                            src="https://i.postimg.cc/SQ9xMF2N/IMG-20180420-WA0043.jpg" height="65" alt="avatar" style="width: 100px;"
                            data-mdb-toggle="animation" data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-left"
                            data-mdb-animation-duration="1000" data-mdb-animation-delay="200">
                        <h5 class="mb-4 text-primary" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="300">
                            Sizimisele T.H.S</h5>
                        <p class="mb-4 text-bg-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="400">
                            2017-2021</p>
                        <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="500">
                            <a href="#!" class="px-1">
                            <i class="fab fa-facebook-f text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-twitter text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-linkedin-in text-white"></i>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 mb-0">
                    <div class="card mask-custom-1 text-white">
                        <div class="card-body" id="card">
                        <img class="rounded-circle shadow-2-strong mb-5"
                            src="https://i.postimg.cc/7YxrYpSR/Logo-Life-Choices.jpg" height="65" alt="avatar" style="width: 100px;"
                            data-mdb-toggle="animation" data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-left"
                            data-mdb-animation-duration="1000" data-mdb-animation-delay="200">
                        <h5 class="mb-4 text-primary" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="300">
                            Life Choices Academy</h5>
                        <p class="mb-4 text-bg-dark" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="400">
                            2022-present</p>
                        <ul class="list-unstyled mb-0" data-mdb-toggle="animation" data-mdb-animation-start="onLoad"
                            data-mdb-animation="slide-in-left" data-mdb-animation-duration="1000"
                            data-mdb-animation-delay="500">
                            <a href="#!" class="px-1">
                            <i class="fab fa-dribbble text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-linkedin-in text-white"></i>
                            </a>
                            <a href="#!" class="px-1">
                            <i class="fab fa-instagram text-white"></i>
                            </a>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>



      <v-col cols="12" id="page">
        <div class="pre">
          <h2 class="text-center" id="testimonials">Testimonials</h2>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card data-aos="flip-right" class="mw-auto" max-width="344" height="">
                <v-img src="https://i.postimg.cc/FHF1cBfp/Philani-3.jpg" height="200px" cover></v-img>
                <v-card-title>Philani Mxathule</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  Siliziwe is a hard worker and he doesn't disappoint.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card data-aos="zoom-in" class="mw-auto" max-width="344" height="">
                <v-img src="https://i.postimg.cc/6QQ41X9J/joel2.jpg" height="200px" cover></v-img>
                <v-card-title>Joel Mukanya</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  He seems to show lot of promise as a student. I enjoy seeing him work hard on his work.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card data-aos="flip-left" class="mw-auto" max-width="344" height="">
                <v-img src="https://i.postimg.cc/ZRCcqP57/undecided-removebg-preview.png" height="200px" cover></v-img>
                <v-card-title>Liam Engel</v-card-title>
                <v-card-subtitle>
                  IT Specialist
                </v-card-subtitle>
                <v-card-text>
                  Siliziwe is an open-minded person and I work well with him.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- <v-col cols="12" id="blog">
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
      </v-col> -->
      <div class="container bg-black border border-lg border-success">
      <h3 class="text-underline text-center mt-16" id="contact">Contact me</h3>
      <div class="row mt-16">
            <div class="col px-5">
        <h6 class="text-white">Cape Town, Western Cape <br>
        South Africa</h6>
            </div>
            <div class="col">
                <form action="https://formspree.io/f/mpzbklkp" method="POST">
                    <div class="grid md:grid-cols-2 gap-5 md:gap-7">
                        <input name="name" placeholder="Name here" style="outline-none" class="text-[13px] border-b-[1px] outline-none w-full border-b-neutral-200">
                        <input name="email" placeholder="Email here" style="outline-none" class="text-[13px] border-b-[1px] outline-none w-full border-b-neutral-200">
                    </div>
                    <div><h4>Message</h4><textarea name="message" rows="4" placeholder="Message here" class="text-[13px] border-b-[1px] outline-none w-50 border-b-neutral-200"></textarea></div>
                    <button type="submit" class="btn btn-primary bg-success">Send message</button>
                </form>
            </div>
            </div>
      </div>
    </v-container> 
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import AOS from "aos";

// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    FooterView
  },
  mounted() {
        AOS.init({
          duration: 3000
        })
    },
  setup() {
    return {
      slider2: 50,

items: [
  {
    img: "https://i.postimg.cc/j5MyyDLW/rainbow-removebg-preview.png",
  },
  {
    img: "https://i.postimg.cc/6547q20j/Screenshot-2022-07-21-131859.png",
  },
  {
    img: "https://i.postimg.cc/d1W7kGpX/calculator-removebg-preview.png",
  },
  {
    img: "https://i.postimg.cc/MTGHSvHY/Screenshot-2022-07-21-161528.png",
  },
  {
    img: "https://i.postimg.cc/Gm1ppM9t/Screenshot-2022-07-21-161922.png",
  },
  {
    img: "",
  },
]
    }
  }
});

</script>


<style scoped>
  
.placeholder{
  color: aqua;
}

  
  .v-container{
    padding: 16px 0;
  }
  .v-divider{
    box-shadow: 10px 10px  rgb(19, 19, 21);
  }
  .v-card{
    
  }
  .form {
    margin-bottom: 300px;
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
    box-shadow: 10px 10px 10px rgb(21, 236, 71);
    transform: skew(0deg, 6deg);
  }
  .head::after{
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: black;
    box-shadow: 10px 10px 10px rgb(21, 236, 71);
    transform: skew(0deg, -6deg);
  }
  .egg{
    display: block;
    margin-left: 50px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #000000;
    box-shadow: 10px 10px 10px rgb(21, 236, 71);
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
    /* padding: 0 200px; */
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