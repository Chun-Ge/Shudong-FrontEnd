import Vue from 'vue';
import card from '@/components/card/card.component.vue';

describe('card', () => {
  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(card);
  //   const vm = new Constructor().$mount();
  //   expect(vm.$el.querySelector('.card-content .text .not-read-more a').textContent)
  //     .to.equal('阅读全文');
  // });
  it('sets the correct default data', () => {
    expect(typeof card.data).toBe('function');
    const defaultData = card.data();
    expect(defaultData.likeButtonType).toBe('default');
  })
});
