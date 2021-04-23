
<template>
  <div class="calendar">
    <date-picker
      v-model="calendar"
      valueType="format"
      range
      format="DD/MM/YYYY"
      @change="$emit('dateChange', calendar)"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/scss/index.scss";

export default {
  components: { DatePicker },
  props: ["date"],
  data() {
    return {
      calendar: this.date,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
