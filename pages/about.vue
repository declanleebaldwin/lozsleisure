<template>
  <main>
    <section class="section profile-container">
      <div class="columns">
        <div class="column">
          <div class="image-container is-mobile">
            <figure class="image is-square">
              <img class="lazyload" :src="aboutpageContent['profile_image']['url']" />
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="container">
            <h1 class="title section-heading">{{ $prismic.richTextAsPlain(aboutpageContent.title) }}</h1>
            <prismic-rich-text :field="aboutpageContent['profile_text']" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title section-heading">Get In Touch</h1>
        <div class="columns">
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  ref="name"
                  v-model="name"
                  class="input"
                  type="text"
                  placeholder="e.g Alex Smith"
                />
              </div>
              <p v-show="errors.name" class="help is-danger">Please enter your name</p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  ref="email"
                  v-model="email"
                  class="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
              <p v-show="errors.email" class="help is-danger">Please enter your email</p>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea ref="message" v-model="message" class="textarea" placeholder="Textarea"></textarea>
              </div>
              <p v-show="errors.message" class="help is-danger">Please enter your message</p>
            </div>
            <div class="field">
              <div class="control">
                <button @click="trySubmitForm" ref="submitButton" class="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <navbar></navbar>
    <div class="modal" :class="{'is-active': showSuccessModal}">
      <div class="modal-background" @click="showSuccessModal=false;"></div>
      <div class="modal-content">
        <div class="box has-text-centered has-text-weight-bold">
          Thanks for the message, I'll get back to you soon!
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navbar from "~/components/Navbar.vue";
import HeroImage from "~/components/HeroImage.vue";

export default {
  name: "Home",
  components: {
    Navbar
  },
  head() {
    return {
      title: "Loz's Leisure"
    };
  },
  data() {
    return {
      isMounted: true,
      name: "",
      email: "",
      message: "",
      errors: {
        name: false,
        email: false,
        message: false
      },
      showSuccessModal: false,
    };
  },
  methods: {
    trySubmitForm() {
      if (this.$refs.name.value == "") {
        this.errors.name = true;
      } else {
        this.errors.name = false;
      }

      if (this.$refs.email.value == "") {
        this.errors.email = true;
      } else {
        this.errors.email = false;
      }

      if (this.$refs.message.value == "") {
        this.errors.message = true;
      } else {
        this.errors.message = false;
      }

      if (!this.errors.name && !this.errors.email && !this.errors.message) {
        this.submitForm();
      }
    },
    clearFormValues() {
          this.$refs.name.value = '';
          this.$refs.email.value = '';
          this.$refs.message.value = '';
    },
    async submitForm() {
      let $this = this;
      await this.$axios
        .$post("", {
          name: "Fred",
          email: "test@gmail.com",
          message: "Hi, this is a test."
        })
        .then(function(response) {
          console.log(response);
          $this.clearFormValues();
          $this.showSuccessModal=true;
        })
        .catch(function(error) {
          console.log(error);
          alert('Oh no! Something went wrong, please try again.');
        });
    },
    addFormValidation() {
      let $this = this;
      this.$refs.name.onblur = function() {
        if (this.value == "") {
          $this.errors.name = true;
        } else {
          $this.errors.name = false;
        }
      };
      this.$refs.name.oninput = function() {
        if (this.value == "") {
          $this.errors.name = true;
        } else {
          $this.errors.name = false;
        }
      };

      this.$refs.email.onblur = function() {
        if (this.value == "") {
          $this.errors.email = true;
        } else {
          $this.errors.email = false;
        }
      };
      this.$refs.email.oninput = function() {
        if (this.value == "") {
          $this.errors.email = true;
        } else {
          $this.errors.email = false;
        }
      };

      this.$refs.message.onblur = function() {
        if (this.value == "") {
          $this.errors.message = true;
        } else {
          $this.errors.message = false;
        }
      };
      this.$refs.message.oninput = function() {
        if (this.value == "") {
          $this.errors.message = true;
        } else {
          $this.errors.message = false;
        }
      };
    }
  },
  mounted() {
    this.addFormValidation();
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
        req
      });

      // Query to get blog home content
      const document = await api.getSingle("aboutpage");
      let aboutpageContent = document.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        aboutpageContent
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="css" scoped>
.profile-container {
  margin-top: 3rem;
}

.section {
  border-bottom: 2px solid #363636;
}

@media only screen and (min-width: 770px) {
  .image-container {
    margin: auto;
    max-width: 80%;
  }
}
</style>