import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ProductCard from "../../src/components/product/ProductCard";
import store from "../../src/store";
import sinon from "sinon";

const requiredProps = {
  id: "id",
  thumbnail: "thumbnail",
  title: "title",
  price: 10,
  salePrice: 10,
  discount: null,
  slug: "slug",
};

describe("ProductCard.vue", () => {
  let wrapper;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    wrapper = shallowMount(ProductCard, {
      props: requiredProps,
      global: {
        provide: { store },
      },
    });
  });

  it("should renders", () => {
    expect(wrapper.classes()).to.have.members([
      "col-md-6",
      "col-lg-3",
      "ftco-animate",
    ]);
  });

  it("addProductToCart() trigger when click button", async () => {
    const addToCartBtn = wrapper.find("#buy-now-btn");
    sandbox.stub(wrapper.vm, "addProductToCart");
    await addToCartBtn.trigger("click");
    expect(wrapper.vm.addProductToCart.called).to.equal(true);
  });
});
