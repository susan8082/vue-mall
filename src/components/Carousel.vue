<template>
  <div style="margin-bottom: 2%">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#DDDDDD"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide v-for="item, index in items" :key="index"
        :caption="item.productName"
        :text="item.description"
      >
        <template #img>
          <img 
            class="d-block img-fluid w-100"
            style="background-color: black;margin-left:30%;max-height:240px; max-width:480px;"
            :src="item.imageUrl"
            :alt="item.description"
          >   
        </template>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  export default {
     props: ['items'],
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>