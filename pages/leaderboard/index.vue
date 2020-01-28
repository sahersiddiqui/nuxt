<template>
<div>
    asdadas
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            title: "Home"
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    title: "new",
                    hid: "description",
                    name: "description",
                    content: "My custom description"
                }
            ]
        };
    },
    fetch({
        store,
        context
    }) {
        store.commit("test", "sad");
    }
};
</script>
