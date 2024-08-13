import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@sabi2899/spa-nav",
  app: () => System.import("@sabi2899/spa-nav"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@sabi2899/spa-products",
  app: () => System.import("@sabi2899/spa-products"),
  activeWhen: ["/products" , "/product"]
});

registerApplication({
  name: "@sabi2899/spa-carts",
  app: () => System.import("@sabi2899/spa-carts"),
  activeWhen: ["/cart"]
});

registerApplication({
  name: "@sabi2899/spa-auth",
  app: () => System.import("@sabi2899/spa-auth"),
  activeWhen: ["/login" , "/signup"]
});


start({
  urlRerouteOnly: true,
});

