<template>
    <div id="app">
        <h1>Problema de MontyHall</h1>
        <Door number = "1" :hasGift="false" />
    </div>
</template>

<script>
import Door from './components/Door';

export default {
    name: 'App',
    components: {Door}
}
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        color: #FFF;
        background: linear-gradient(to right, rgb(21, 100, 80), rgb(21, 50, 100))
    }

    #app{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        border: 1px solid #000;
        background-color: #0004;
        padding: 20px;
        margin-bottom: 60px;
    }
</style>