modules.define('experts-rating', ['i-bem-dom'], function (provide, bemDom) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function () {}
        }
      }
    })
  );
});
