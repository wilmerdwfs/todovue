<!-- TableWrapper.vue -->
<template>
  <div :class="containerClass">
    <div :class="tableClass">
      <table>
        <!-- Si se proporcionan encabezados, renderizarlos -->
        <thead v-if="headTable && headTable.length">
          <tr>
            <th v-for="(header, index) in headTable" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <!-- Renderizar el componente envuelto (WrappedComponent) dentro de un slot -->
        <tbody>
          <slot></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headTable: {
      type: Array,
      required: false,
      default: () => []
    },
    containerClass: {
      type: String,
      default: "container-table" // Puedes definir una clase por defecto
    },
    tableClass: {
      type: String,
      default: "table" // Clase CSS por defecto
    }
  }
};
</script>

<style scoped>
.container-table {
  margin-top: 20px;
}

.table {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
  text-align: left;
}

td {
  background-color: #fff;
}
</style>