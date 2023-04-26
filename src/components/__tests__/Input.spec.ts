import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InputText from "../forms/input/InputText.vue";

const INPUT_VALUE = "Test Value";
describe("InputText form test", () => {
  it("InputText exists", () => {
    const wrapper = shallowMount(InputText, {
      props: {
        modelValue: INPUT_VALUE,
        placeholder: INPUT_VALUE,
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Test V-model and emit", async () => {
    const wrapper = shallowMount(InputText, {
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
