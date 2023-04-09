import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Input from "../forms/input/Input.vue";

const INPUT_VALUE = "Test Value";
describe("Input form test", () => {
  it("Input exists", () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: INPUT_VALUE,
        placeholder: INPUT_VALUE,
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Test V-model and emit", async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: INPUT_VALUE,
        placeholder: INPUT_VALUE,
        "onUpdate:modelValue": (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
    await wrapper.find("input").setValue(INPUT_VALUE);
    expect(wrapper.props("modelValue")).toBe(INPUT_VALUE);
    expect(wrapper.emitted()["update:modelValue"].length).toBeTruthy();
  });
});
