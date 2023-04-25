<template>
    <div class="add-note container">
        <h3 class="text-uppercase">Thêm Ảnh Mới</h3>

        <form method="POST" @submit.prevent="addNewPhoto">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="id-photo">ID Ảnh</label>
                    <input type="text" class="form-control" id="id-photo" v-model="pictures.ID">
                </div>
                <div class="form-group col-md-3">
                    <label for="keywords">Keywords</label>
                    <input type="text" class="form-control" id="keywords" v-model="pictures.keywords">
                </div>

            </div>

            <div class="form-row">
                <div class="form-group mb-4 mt-4 col-md-3">
                    <label for="name-platform">Nền tảng</label>
                    <input type="text" class="form-control" id="name-platform" v-model="pictures.platform">
                </div>
            </div>

            <div class="form-group mb-4 mt-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-primary text-uppercase"  @click="getNameFileImg">Thêm ảnh</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            pictures: {
                ID: null,
                keywords: null,
                platform: null,
                address: null
            }
        }
    },
    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.pictures.address = fake_path.split("\\").pop();
        },

        addNewPhoto() {
            axios.post('http://localhost:3000/admin/photos/store', this.pictures)
                .then(res => {
                    if(res.data.status === 200) {
                        window.alert("Thêm ảnh mới thành công")
                        this.pictures.ID = "";
                        this.pictures.keywords = "";
                        this.pictures.platform = "";
                        this.pictures.address = ""; 

                        document.getElementById('pathURL').value = "";
                    }
                    if (res.data.status === 500) {
                        window.alert("Thêm ảnh mới thất bại")
                    }
                })
                .catch(err => console.log(err))
        }
    }

}
</script>
<style scoped>
</style>