<template>
    <div class="footer">
        {{ version }}
    </div>
</template>

<script>
import request from '../request'
export default {
    name: 'Footer',
    data() {
        return {
            version: 1.1,
        }
    },
    created() {
        this.getVersion()
    },
    methods: {
        getVersion() {
            request.get('/proxy/version').then(({ data }) => {
                this.version = data.version
            })
        }
    }
}
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
}
</style>
