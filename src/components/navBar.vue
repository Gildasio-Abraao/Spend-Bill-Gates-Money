<template>
  <div class="headerBox">
    <div>
      <img src="../assets/images/profile.jpg" alt="BillGates Profile" />
      <p class="moneytxt">Spend Bill Gates' Money</p>
    </div>
    <div class="money">
      <p>${{ new Intl.NumberFormat().format(money) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "navNar",
  props: {
    money: Number,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./style.scss" scoped/>