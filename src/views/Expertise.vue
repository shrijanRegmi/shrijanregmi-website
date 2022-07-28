<template>
  <div class="expertise">
    <Services :isFullPage="true" />
  </div>
</template>

<script>
import Services from "@/components/home/services";

export default {
  name: "Expertise",
  components: {
    Services,
  }
}
</script>

<style>
</style>