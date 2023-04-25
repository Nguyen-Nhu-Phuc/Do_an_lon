<template>
    <div class="edit-photo container">
        <h3 class="text-uppercase">Đổi Ảnh Mới</h3>

        <form method="POST" @submit.prevent="updatePicture">
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="id-photo">ID Ảnh</label>
                    <input type="text" class="form-control" id="id-photo" v-model="this.picture.ID">
                </div>
                <div class="form-group col-md-3">
                    <label for="keywords">Keywords</label>
                    <input type="text" class="form-control" id="keywords" v-model="this.picture.keywords">
                </div>

            </div>

            <div class="form-row">
                <div class="form-group mb-4 mt-4 col-md-3">
                    <label for="name-platform">Nền tảng</label>
                    <input type="text" class="form-control" id="name-platform" v-model="this.picture.platform">
                </div>
            </div>

            <div class="form-group mb-4 mt-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-primary text-uppercase"  @click="getNameFileImg">Cập Nhật</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            picture: {
                ID: null,
                keywords: null,
                platform: null,
                address: null
            }
        }
    },

    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    created() {
        axios
            .get('http://localhost:3000/picture/' + this.id + '/edit')
            .then(res => {
                this.picture = res.data;
                console.log(this.picture);
            })
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.picture.address = fake_path.split("\\").pop();
        },
        updatePicture() {
            axios.put('http://localhost:3000/picture/' + this.id, this.picture)
                .then(res => {
                    if (res.data.status === 201) {
                        this.$router.push('/admin/stored/pictures');
                        window.alert("Cập nhật thông tin ảnh thành công")
                    }
                    else if (res.data.status === 501) {
                        window.alert("Cập nhật thông tin ảnh thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
    }

}
</script>
<style scoped>
</style>