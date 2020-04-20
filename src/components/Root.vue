<template>
    <p> {{greeting}} </p>
</template>

<script>
export default {
    el: '#vue_root',
    data: () => {
        return {
            greeting: 'hello'
        }
    }
}
</script>