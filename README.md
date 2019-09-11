# Vue Router Back Mixin

> Mixin to navigate back with Vue Router

> This requires you use vue and vue-router.

[![npm version](https://badge.fury.io/js/vue-router-back-mixin.svg)](https://www.npmjs.com/package/vue-router-back-mixin)

### Usage


``` bash
$ npm install vue-router-back-mixin
```

In component, you can call `backMixin_handleBack` method
```javascript

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

You can provide fallbackUrl by passing to `backMixin_handleBack`

For example:

```javascript
backMixin_handleBack('/home')
```

## Support

<a href="https://www.buymeacoffee.com/8buMYCOog" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>