<template>
    <div class="header finisher-header"></div>
</template>

<script>
export default {
  name: 'FinisherBackground',
  mounted() {
    new FinisherHeader({
      count: 90,
      size: {
        min: 2,
        max: 11,
        pulse: 0
      },
      speed: {
        x: {
          min: 0,
          max: 0.4
        },
        y: {
          min: 0,
          max: 0.6
        }
      },
      colors: {
        background: "#1a2b31",
        particles: [
          "#fbfcca",
          "#d7f3fe",
          "#ffd0a7"
        ]
      },
      blending: "overlay",
      opacity: {
        center: 1,
        edge: 0
      },
      skew: 0,
      shapes: ["c"]
    });
  }
}
</script>

<style>
  .finisher-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>