# Vue Router Back Mixin

> Mixin to navigate back with Vue Router

> This requires you use vue and vue-router.

[![npm version](https://badge.fury.io/js/vue-router-back-mixin.svg)](https://www.npmjs.com/package/vue-router-back-mixin)

### Usage


``` bash
$ npm install vue-router-back-mixin
```

In component, you can call `backMixin_handleBack` method
```

import BackMixin from `vue-router-back-mixin`

export default {
  ...
  mixins: [BackMixin],
  methods() {
    goBack() {
      this.backMixin_handleBack()
    }
  }
  ...
}
```