<template>
    <div class="main-layout">
        <Sidebar />
        <div class="content">
            <Header />
            <h3>
                dashbiard
            </h3>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
    components: {
        Sidebar,
        Header,
    },
}
</script>
  
<style>
.main-layout {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>
  