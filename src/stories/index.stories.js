/* eslint-disable import/no-extraneous-dependencies */
import { action } from "@storybook/addon-actions";

import MyButton from "../components/MyButton.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "MyButton",
  component: MyButton
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") }
});

export const classComponent = () => ({
  components: { HelloWorld },
  data() { return { message: 'My message to the world' } },
  template: '<hello-world :msg="message">Hello Button</hello-world>',
});
