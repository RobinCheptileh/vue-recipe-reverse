import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Recipe from '@/components/Recipe.vue';

describe('Recipe.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'Mac and Cheese';
    const wrapper = shallowMount(Recipe, {
      propsData: { name },
    });
    expect(wrapper.text()).to.include(name);
  });
});
