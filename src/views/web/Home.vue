<template>
  <div class="home">
    <Nav></Nav>
    <Banner></Banner>
    <Service></Service>
    <Slice></Slice>
    <Run></Run>
    <News></News>
    <Work></Work>
    <Address></Address>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src.
import Nav from '@/components/web/Nav.vue'
import Banner from '@/components/web/Banner.vue'
import Service from '@/components/web/Service.vue'
import Slice from '@/components/web/Slice.vue'
import Run from '@/components/web/Run.vue'
import News from '@/components/web/News.vue'
import Work from '@/components/web/Work.vue'
import Address from '@/components/web/Address.vue'
import Footer from '@/components/web/Footer.vue'


export default {
  name: 'Home',
  components: {
    Nav,
    Banner,
    Service,
    Slice,
    Run,
    News,
    Work,
    Address,
    Footer
    
  }
}
</script>
