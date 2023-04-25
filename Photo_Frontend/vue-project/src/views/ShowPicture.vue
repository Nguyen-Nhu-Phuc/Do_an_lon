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
export default {
    
}
</script>
<style>
    
</style>