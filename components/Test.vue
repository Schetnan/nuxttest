<template>
    <div>
        Hello Test
    </div>        

</template>

<script setup>

    const isClient = ref(false)

  onMounted(() => {
    if ( window ) {
      console.log("HELLO BROWSER TEST!")
      isClient.value = true
    }
  })

</script>