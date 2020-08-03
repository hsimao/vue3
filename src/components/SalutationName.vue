<template>
  <div>
    <select @change="updateSalutation">
      <option value="">-</option>
      <option
        v-for="item in salutations"
        :key="item"
        :value="item"
        :selected="salutation === item"
      >
        {{ item }}
      </option>
    </select>

    <input @input="updateName" :value="name" type="text" />
    <br />
    <input @input="updateDesc" :value="desc" type="text" />
  </div>
</template>

<script>
const salutations = ["Ms.", "Mrs.", "Miss", "Mx.", "Dr."];

export default {
  props: {
    salutation: {
      type: String,
      default: ""
    },
    salutationModifiers: {
      default: () => ({})
    },
    name: {
      type: String,
      default: ""
    },
    nameModifiers: {
      default: () => ({})
    },
    desc: {
      type: String,
      default: ""
    },
    descModifiers: {
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const updateSalutation = event => {
      let val = event.target.value;
      if (props.salutationModifiers.capitalize) {
        val = val.toUpperCase();
      }

      emit("update:salutation", val);
    };

    const updateName = event => {
      let val = event.target.value;
      if (props.nameModifiers.capitalize) {
        val = val.charAt(0).toUpperCase() + val.slice(1);
      }
      emit("update:name", val);
    };

    const updateDesc = event => {
      let val = event.target.value;

      const { capitalize, reverse } = props.descModifiers;
      if (capitalize) val = val.toUpperCase();
      if (reverse) {
        val = val
          .split("")
          .reverse()
          .join("");
      }

      emit("update:desc", val);
    };

    return {
      salutations,
      updateSalutation,
      updateName,
      updateDesc
    };
  }
};
</script>

<style lang="scss" scoped>
select {
  padding: 7px 6px;
  margin-right: 10px;
  outline: none;
}
</style>
