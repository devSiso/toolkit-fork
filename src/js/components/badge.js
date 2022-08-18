import { Component } from '@verndale/core';

/**
 * `Badge`
 *
 *
 * @example
 * import { Badge } from 'components/badge';
 *
 * class Foo {
 *   construction(){
 *
 *     const Badge = new Badge('.badge');
 *   }
 * }
 */


class Badge extends Component {
  constructor(el) {
    super(el);
    this.checkContentValue.bind(this)();
  }

  setupDefaults() {
    this.dom = {
      container: this.el,
      content: this.el.querySelector('.badge__content')
    }
  }

  checkContentValue() {
    const { value, max } = this.dom.content.dataset

    if (+value < 0 || +max < 0) {
      this.dom.content.innerHTML = '0';
      return;
    }

    if (+value > +max) {
      this.dom.content.innerHTML = `${max}+`;
    }
  }

}

export default Badge

/* 
  How to get component props from JS?
  I didn`t figure out how to do that, then I passed values through data attr;



*/
