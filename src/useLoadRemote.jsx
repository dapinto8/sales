export default function useLoadRemote(url) {
  function loadComponent(scope, module) {
    return async () => {
      // eslint-disable-next-line no-undef
      await __webpack_init_sharing__('default');
      const container = window[scope]; 
       // eslint-disable-next-line no-undef
      await container.init(__webpack_share_scopes__.default);

      const factory = await window[scope].get(module);
      const Module = factory();
      return Module;
    };
  }
}
