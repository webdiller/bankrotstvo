modules.define('big-box-link-img', ['i-bem-dom'], function (provide, bemDom) {
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
