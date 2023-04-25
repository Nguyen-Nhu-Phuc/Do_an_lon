<template>
    <div class="home container">
        <div class="sections row">
            <template v-for="picture in pictures">
                <div class="card" style="width: 16.4rem;">
                    <img class="card-img-top w-100 img-fluid" :src="path + picture.address" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ picture.ID }}</h5>
                        <p class="card-text">Nền tảng: {{ picture.platform }}</p>
                    </div>
                </div>

            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import staticPath from '../assets/staticPath';


export default {
    data() {
        return {
            pictures: []
        }
    },

    computed: {
        path() {
            return staticPath
        }
    },

    created() {
        axios
            .get("http://localhost:3000/courses/create")
            .then(res => {
                this.pictures = res.data.pictures;
            },)
            .catch(err => {
                console.log(err)
            },)
    }
}
</script>
<style>
.container {
    margin-top: 64px;
    margin-bottom: 24px;
}

.card {
    display: inline-block;
    margin: 8px;
}

.card-img-top {
    border-radius: 5px;
    height: 280px;
}
</style>