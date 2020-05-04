<template>
  <div class="hello">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- <a href="#">Active</a> -->
        <router-link class="nav-link"  to="/page/">child1</router-link>
      </li>
      <li class="nav-item">
        <!-- <a class="nav-link" href="#">Link</a> -->
        <router-link class="nav-link" to="/page/child2">child2</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="updatePath">child3 click</a>
        <!-- <router-link class="nav-link" to="/page/child3">child3</router-link> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="berforePath">Back</a>
        <!-- <router-link class="nav-link" to="/page/child3">child3</router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    updatePath(){
      this.$router.push('/page/child3');
    },
    berforePath(){
      this.$router.back();
      // this.$router.go(-1);
    },
  }
};
</script>