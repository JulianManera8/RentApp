<template>
    <div>
        <h1>Hola</h1>
        <button @click.prevent="getUser"> GET USER </button>
    </div>
</template>

<script setup>
import {supabase} from '../supabase/supabaseClient.js'

const getUser = async () => {

    const { data, error } = await supabase.auth.getUser()

    try {
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}



</script>

<style lang="scss" scoped>

</style>