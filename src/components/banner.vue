<template>
    <!--banner-->
    <div class="N_bannerbox">
        <div class="N_banner">
            <img :src="imgSrc" width="1920" height="259" />
        </div>
    </div>
</template>
<script>
export default {
    props:['imgSrc']
}
</script>
