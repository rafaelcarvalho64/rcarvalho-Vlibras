<template>
  <q-page class="bg-grey-5 flex flex-center">
    <q-card class=" bordered q-pa-md bg-grey-3">
      <div>
        <h1>Teste</h1>
        <h2>Desenvolvimento</h2>
        <h3>Acessibilidade</h3>
      </div>
    </q-card>
    <div>
      <Vlibras />
    </div>
  </q-page>
</template>

<script>
import Vlibras from "src/components/Vlibras";
export default {
  components: { Vlibras },
  name: "PageIndex",
  created() {
    console.log("PATH_TESTE", process.env.PATH_ROUTE);
    console.log("URL_BASE", process.env.URL_BASE);
  }
};
</script>
