<template>
  <div class="items-container">
    <div class="item" v-for="(product, index) in products" :key="index">
      <!--Content Box-->
      <div class="bodyItem">
        <img
          :src="require(`../assets/images/items/${product.image}`)"
          :alt="product.title"
        />
        <p class="defaultText">{{ product.title }}</p>
        <p class="price">
          ${{ new Intl.NumberFormat().format(product.price) }}
        </p>
      </div>

      <!--Buttons box-->
      <div class="footerItem">
        <button
          class="btn sellBtn"
          v-bind:class="{ disable: product.quantity == 0 }"
          @click="purchase(product.quantity--)"
        >
          Sell
        </button>
        <input
          type="number"
          v-model="product.quantity"
          @change="purchase(product.quantity)"
          min="0"
          :max="product.maxQuantity"
          v-bind:class="{ disable: product.price > money }"
          :placeholder="0"
        />
        <button
          class="btn buyBtn"
          v-bind:class="{ disable: product.price > money }"
          @click="purchase(product.quantity++)"
        >
          Buy
        </button>
      </div>
    </div>
    <!--gerando receita-->
    <div class="receipt" v-if="money < this.$store.state.myMoney.default">
      <p class="title">Your Receipt</p>
      <table v-for="(product, index) in products" :key="index">
        <tr class="tableProduct" v-if="product.quantity > 0">
          <td class="tdTitle">{{ product.title }}</td>
          <td class="normalItens">x{{ product.quantity }}</td>
          <td class="normalItens tableMoney">
            ${{ numFormatter(product.quantity * product.price) }}
          </td>
        </tr>
      </table>
      <table class="totalTable">
        <tr>
          <td>TOTAL:</td>
          <td class="tableMoney">{{new Intl.NumberFormat().format(money)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapGetters(["money", "products"]),
  },

  methods: {
    ...mapMutations(["purchase"]),
    numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000000) {
        return (num / 1000000000).toFixed(1) + "B"; // convert to M for number from > 1 million
      }else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
      }else{
        return num;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss" scoped/>