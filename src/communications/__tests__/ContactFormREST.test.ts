import { describe, expect, it, vi, type MockInstance, afterEach } from "vitest";
import { ContactFormEmailJS } from "@/communications/ContactFormREST";
import emailjs from "@emailjs/browser";

const fields = ["name", "email", "378883902"];
const spy: MockInstance = vi.spyOn(emailjs, "send");

describe("On create", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it("The ContactFormEmailJS implements ContactFormREST", () => {
    const contactForm = new ContactFormEmailJS(fields);
    expect(contactForm).toBeTruthy();
  });
});
describe("On Send", () => {
  it("The emailjs is executed", async () => {
    spy.mockReturnValue(async () => {
      return Promise.resolve();
    });
    const contactForm = new ContactFormEmailJS(fields);
    await contactForm.send();
    expect(spy).toHaveBeenCalledOnce();
  });
  it("The emailjs raise an exception", async () => {
    spy.mockRejectedValue("Error");
    const contactForm = new ContactFormEmailJS(fields);
    await expect(contactForm.send()).rejects.toThrow("Error");
  });
});
