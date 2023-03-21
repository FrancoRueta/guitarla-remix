var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_react_hot_toast = require("react-hot-toast");

// app/styles/index.css
var styles_default = "/build/_assets/index-K3TGJJO7.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-U2ACCVZP.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: location.pathname === "/" ? "active" : "", children: "Inicio" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/guitarras", className: location.pathname === "/guitarras" ? "active" : "", children: "Tienda" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/blog", className: location.pathname === "/blog" ? "active" : "", children: "Blog" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/nosotros", className: location.pathname === "/nosotros" ? "active" : "", children: "Nosotros" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { className: "boton-carrito-compras", to: "/carrito", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "carro compras" }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navegacion.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "GuitarBA" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
      "Todos los derechos reservados. ",
      new Date().getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return {
    charset: "utf-8",
    title: "GuitarBA - Tienda de guitarras y accesorios",
    viewport: "width=device-width, initial-scale=1"
  };
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react4.useState)(carritoLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react5.Outlet,
      {
        context: {
          agregarCarrito: (guitarra) => {
            if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
              let nuevoCarrito = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
              setCarrito(nuevoCarrito);
            } else
              setCarrito([...carrito, guitarra]);
          },
          carrito,
          actualizarCantidad: (guitarra) => {
            let nuevoCarrito = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(nuevoCarrito);
          },
          eliminarGuitarra: (id) => {
            let nuevoCarrito = carrito.filter((guitarra) => guitarra.id !== id);
            setCarrito(nuevoCarrito);
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/root.jsx",
        lineNumber: 85,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react_hot_toast.Toaster,
      {
        position: "top-right",
        toastOptions: {
          duration: 5e3,
          style: {
            background: "#3d4242",
            color: "#fff"
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/root.jsx",
        lineNumber: 93,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 84,
    columnNumber: 9
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 111,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "error-rojo", children: [
        "ERROR ",
        error.status
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 133,
        columnNumber: 34
      }, this),
      ": ",
      error.statusText,
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 133,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "error-enlace", to: "/", children: "Volver al inicio" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 134,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 132,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "error-rojo", children: [
        "ERROR ",
        error.status
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 142,
        columnNumber: 34
      }, this),
      ": ",
      error.statusText,
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 142,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "Volver al inicio" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 143,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 141,
    columnNumber: 9
  }, this);
}

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default,
  links: () => links2
});
var import_react6 = require("@remix-run/react");

// app/styles/guitarra.css
var guitarra_default = "/build/_assets/guitarra-KHNI6BAI.css";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarra_default
    }
  ];
}
function Tienda() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react6.Outlet,
    {
      context: (0, import_react6.useOutletContext)()
    },
    void 0,
    !1,
    {
      fileName: "app/routes/guitarras.jsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var guitarras_default = Tienda;

// app/routes/guitarras/$guitarraUrl.jsx
var guitarraUrl_exports = {};
__export(guitarraUrl_exports, {
  default: () => guitarraUrl_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react");

// app/models/guitarras.server.js
async function getGuitarraByUrl(url) {
  switch (url) {
    default:
      return {};
    case "page":
      return { data: [{ id: 2, attributes: { nombre: "page", createdAt: "2023-02-10T13:08:43.514Z", updatedAt: "2023-03-16T23:32:03.643Z", publishedAt: "2023-02-10T13:08:52.052Z", descripcion: "La guitarra Page es una creaci\xF3n \xFAnica, dise\xF1ada para aquellos que buscan un sonido vintage y un estilo cl\xE1sico. Con su cuerpo de caoba y su acabado envejecido, esta guitarra ofrece un sonido c\xE1lido y profundo. Sus pastillas humbucker proporcionan un tono potente y lleno de matices, ideal para tocar rock y blues. Adem\xE1s, su diapas\xF3n de palisandro y sus incrustaciones de n\xE1car le dan un toque elegante y distintivo. La guitarra Page es la elecci\xF3n perfecta para los amantes del sonido vintage y la calidad excepcional.", precio: 299, url: "page", imagen: { data: { id: 5, attributes: { name: "guitarra_02.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034738/small_guitarra_02_d62d90055c.jpg", hash: "small_guitarra_02_d62d90055c", mime: "image/jpeg", name: "small_guitarra_02.jpg", path: null, size: 14.4, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_02_d62d90055c", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034738/medium_guitarra_02_d62d90055c.jpg", hash: "medium_guitarra_02_d62d90055c", mime: "image/jpeg", name: "medium_guitarra_02.jpg", path: null, size: 26.46, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_02_d62d90055c", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034737/thumbnail_guitarra_02_d62d90055c.jpg", hash: "thumbnail_guitarra_02_d62d90055c", mime: "image/jpeg", name: "thumbnail_guitarra_02.jpg", path: null, size: 2.35, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_02_d62d90055c", resource_type: "image" } } }, hash: "guitarra_02_d62d90055c", ext: ".jpg", mime: "image/jpeg", size: 31.42, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034737/guitarra_02_d62d90055c.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_02_d62d90055c", resource_type: "image" }, createdAt: "2023-02-10T13:12:18.480Z", updatedAt: "2023-02-10T13:12:18.480Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "vai":
      return { data: [{ id: 1, attributes: { nombre: "vai", createdAt: "2023-02-09T19:46:32.776Z", updatedAt: "2023-03-16T23:42:21.640Z", publishedAt: "2023-02-09T19:46:49.504Z", descripcion: "La guitarra Vai es una joya de la ingenier\xEDa y el dise\xF1o. Con su cuerpo de madera de aliso y su acabado verde iridiscente, es una verdadera belleza visual. Pero lo que realmente distingue a esta guitarra es su sonido: con su m\xE1stil de arce y sus pastillas de alta calidad, ofrece un tono rico y equilibrado que es perfecto para una amplia variedad de estilos musicales. Adem\xE1s, su forma distintiva y su ergonom\xEDa mejorada la hacen muy c\xF3moda de tocar.", precio: 349, url: "vai", imagen: { data: { id: 1, attributes: { name: "guitarra_01.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/small_guitarra_01_5019e2a76b.jpg", hash: "small_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "small_guitarra_01.jpg", path: null, size: 11.44, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_01_5019e2a76b", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/medium_guitarra_01_5019e2a76b.jpg", hash: "medium_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "medium_guitarra_01.jpg", path: null, size: 20.56, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_01_5019e2a76b", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/thumbnail_guitarra_01_5019e2a76b.jpg", hash: "thumbnail_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "thumbnail_guitarra_01.jpg", path: null, size: 2.2, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_01_5019e2a76b", resource_type: "image" } } }, hash: "guitarra_01_5019e2a76b", ext: ".jpg", mime: "image/jpeg", size: 22.35, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/guitarra_01_5019e2a76b.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_01_5019e2a76b", resource_type: "image" }, createdAt: "2023-02-09T19:46:20.042Z", updatedAt: "2023-02-09T19:46:20.042Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "clapton":
      return { data: [{ id: 3, attributes: { nombre: "Clapton", createdAt: "2023-02-10T13:11:20.904Z", updatedAt: "2023-03-16T23:33:38.316Z", publishedAt: "2023-02-10T13:11:33.887Z", descripcion: "La Clapton es una guitarra ic\xF3nica dise\xF1ada para emular el sonido distintivo de Eric Clapton. Con su cuerpo de aliso y su m\xE1stil de arce, esta guitarra tiene un tono c\xE1lido y equilibrado, ideal para tocar blues y rock cl\xE1sico. La Clapton tambi\xE9n cuenta con un dise\xF1o elegante y un estilo vintage que la hace \xFAnica y atractiva. Es la guitarra perfecta para aquellos que buscan un sonido cl\xE1sico y un estilo distintivo.", precio: 379, url: "clapton", imagen: { data: { id: 6, attributes: { name: "guitarra_03.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/small_guitarra_03_c8c07be4d4.jpg", hash: "small_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "small_guitarra_03.jpg", path: null, size: 10.06, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_03_c8c07be4d4", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034776/medium_guitarra_03_c8c07be4d4.jpg", hash: "medium_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "medium_guitarra_03.jpg", path: null, size: 18.21, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_03_c8c07be4d4", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/thumbnail_guitarra_03_c8c07be4d4.jpg", hash: "thumbnail_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "thumbnail_guitarra_03.jpg", path: null, size: 2.18, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_03_c8c07be4d4", resource_type: "image" } } }, hash: "guitarra_03_c8c07be4d4", ext: ".jpg", mime: "image/jpeg", size: 19.47, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/guitarra_03_c8c07be4d4.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_03_c8c07be4d4", resource_type: "image" }, createdAt: "2023-02-10T13:12:56.589Z", updatedAt: "2023-02-10T13:12:56.589Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "beck":
      return { data: [{ id: 4, attributes: { nombre: "beck", createdAt: "2023-02-10T13:15:06.827Z", updatedAt: "2023-03-16T23:38:07.634Z", publishedAt: "2023-02-10T13:16:31.660Z", descripcion: "La guitarra Beck es una obra maestra del dise\xF1o y la construcci\xF3n de guitarras. Con un cuerpo de aliso y un diapas\xF3n de arce, esta guitarra ofrece un tono brillante y equilibrado que se adapta perfectamente a cualquier estilo musical. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por m\xFAsicos de todo el mundo.", precio: 379, url: "beck", imagen: { data: { id: 7, attributes: { name: "guitarra_04.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/small_guitarra_04_3b1bfbd39a.jpg", hash: "small_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "small_guitarra_04.jpg", path: null, size: 12.18, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_04_3b1bfbd39a", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034883/medium_guitarra_04_3b1bfbd39a.jpg", hash: "medium_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "medium_guitarra_04.jpg", path: null, size: 21.74, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_04_3b1bfbd39a", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/thumbnail_guitarra_04_3b1bfbd39a.jpg", hash: "thumbnail_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "thumbnail_guitarra_04.jpg", path: null, size: 2.24, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_04_3b1bfbd39a", resource_type: "image" } } }, hash: "guitarra_04_3b1bfbd39a", ext: ".jpg", mime: "image/jpeg", size: 24.29, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/guitarra_04_3b1bfbd39a.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_04_3b1bfbd39a", resource_type: "image" }, createdAt: "2023-02-10T13:14:43.418Z", updatedAt: "2023-02-10T13:14:43.418Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "townshend":
      return { data: [{ id: 5, attributes: { nombre: "townshend", createdAt: "2023-02-10T13:17:40.204Z", updatedAt: "2023-03-16T23:38:30.539Z", publishedAt: "2023-02-10T13:17:51.377Z", descripcion: "La guitarra Townshend es una pieza \xFAnica dise\xF1ada en colaboraci\xF3n con el legendario guitarrista de The Who, Pete Townshend. Con un cuerpo s\xF3lido de aliso y un diapas\xF3n de arce, esta guitarra ofrece un sonido potente y lleno de matices que se adapta a cualquier estilo musical. Su dise\xF1o ic\xF3nico y distintivo la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 499, url: "townshend", imagen: { data: { id: 8, attributes: { name: "guitarra_05.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/small_guitarra_05_9b3de9bd52.jpg", hash: "small_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "small_guitarra_05.jpg", path: null, size: 11.4, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_05_9b3de9bd52", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/medium_guitarra_05_9b3de9bd52.jpg", hash: "medium_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "medium_guitarra_05.jpg", path: null, size: 20.51, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_05_9b3de9bd52", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035034/thumbnail_guitarra_05_9b3de9bd52.jpg", hash: "thumbnail_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "thumbnail_guitarra_05.jpg", path: null, size: 2.22, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_05_9b3de9bd52", resource_type: "image" } } }, hash: "guitarra_05_9b3de9bd52", ext: ".jpg", mime: "image/jpeg", size: 22.15, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/guitarra_05_9b3de9bd52.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_05_9b3de9bd52", resource_type: "image" }, createdAt: "2023-02-10T13:17:15.713Z", updatedAt: "2023-02-10T13:17:15.713Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "morello":
      return { data: [{ id: 6, attributes: { nombre: "morello", createdAt: "2023-02-10T13:19:36.631Z", updatedAt: "2023-03-16T23:38:54.606Z", publishedAt: "2023-02-10T13:19:45.291Z", descripcion: "La guitarra Morello es una guitarra dise\xF1ada para rockeros duros. Con un cuerpo s\xF3lido de caoba y un diapas\xF3n de \xE9bano, esta guitarra ofrece un sonido potente y agresivo que se adapta perfectamente a los estilos m\xE1s exigentes del rock y el metal. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 799, url: "morello", imagen: { data: { id: 9, attributes: { name: "guitarra_06.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035160/small_guitarra_06_0afe902a63.jpg", hash: "small_guitarra_06_0afe902a63", mime: "image/jpeg", name: "small_guitarra_06.jpg", path: null, size: 12.13, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_06_0afe902a63", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035160/medium_guitarra_06_0afe902a63.jpg", hash: "medium_guitarra_06_0afe902a63", mime: "image/jpeg", name: "medium_guitarra_06.jpg", path: null, size: 21.75, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_06_0afe902a63", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035159/thumbnail_guitarra_06_0afe902a63.jpg", hash: "thumbnail_guitarra_06_0afe902a63", mime: "image/jpeg", name: "thumbnail_guitarra_06.jpg", path: null, size: 2.37, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_06_0afe902a63", resource_type: "image" } } }, hash: "guitarra_06_0afe902a63", ext: ".jpg", mime: "image/jpeg", size: 24.47, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035159/guitarra_06_0afe902a63.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_06_0afe902a63", resource_type: "image" }, createdAt: "2023-02-10T13:19:20.711Z", updatedAt: "2023-02-10T13:19:20.711Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "borland":
      return { data: [{ id: 7, attributes: { nombre: "borland", createdAt: "2023-02-10T13:22:18.810Z", updatedAt: "2023-03-16T23:31:21.517Z", publishedAt: "2023-02-10T13:22:26.929Z", descripcion: "La guitarra Borland es un modelo de guitarra el\xE9ctrica de cuerpo s\xF3lido, fabricada con materiales de alta calidad y con un dise\xF1o elegante y distintivo. Se destaca por su sonido potente y equilibrado, con un rango tonal amplio y vers\xE1til, lo que la convierte en una excelente opci\xF3n para cualquier estilo de m\xFAsica. Adem\xE1s, cuenta con una construcci\xF3n s\xF3lida y duradera, lo que la hace ideal para uso en vivo o en estudio. \xA1Es una gran elecci\xF3n para guitarristas de todos los niveles!", precio: 439, url: "borland", imagen: { data: { id: 10, attributes: { name: "guitarra_07.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/small_guitarra_07_1bbef31790.jpg", hash: "small_guitarra_07_1bbef31790", mime: "image/jpeg", name: "small_guitarra_07.jpg", path: null, size: 11.3, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_07_1bbef31790", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035322/medium_guitarra_07_1bbef31790.jpg", hash: "medium_guitarra_07_1bbef31790", mime: "image/jpeg", name: "medium_guitarra_07.jpg", path: null, size: 20.06, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_07_1bbef31790", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/thumbnail_guitarra_07_1bbef31790.jpg", hash: "thumbnail_guitarra_07_1bbef31790", mime: "image/jpeg", name: "thumbnail_guitarra_07.jpg", path: null, size: 2.24, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_07_1bbef31790", resource_type: "image" } } }, hash: "guitarra_07_1bbef31790", ext: ".jpg", mime: "image/jpeg", size: 21.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/guitarra_07_1bbef31790.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_07_1bbef31790", resource_type: "image" }, createdAt: "2023-02-10T13:22:02.516Z", updatedAt: "2023-02-10T13:22:02.516Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "cobain":
      return { data: [{ id: 8, attributes: { nombre: "cobain", createdAt: "2023-02-10T13:24:55.110Z", updatedAt: "2023-03-16T23:39:18.676Z", publishedAt: "2023-02-10T13:25:04.302Z", descripcion: "La guitarra Cobain es un tributo al legendario l\xEDder de Nirvana, Kurt Cobain. Fabricada con las mejores maderas y componentes, esta guitarra ofrece un sonido potente y lleno de matices que evoca la \xE9poca dorada del grunge. Su dise\xF1o ic\xF3nico y distintivo la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 999, url: "cobain", imagen: { data: { id: 11, attributes: { name: "guitarra_08.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/small_guitarra_08_b976a71bd9.jpg", hash: "small_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "small_guitarra_08.jpg", path: null, size: 11.96, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_08_b976a71bd9", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035467/medium_guitarra_08_b976a71bd9.jpg", hash: "medium_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "medium_guitarra_08.jpg", path: null, size: 21.77, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_08_b976a71bd9", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/thumbnail_guitarra_08_b976a71bd9.jpg", hash: "thumbnail_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "thumbnail_guitarra_08.jpg", path: null, size: 2.27, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_08_b976a71bd9", resource_type: "image" } } }, hash: "guitarra_08_b976a71bd9", ext: ".jpg", mime: "image/jpeg", size: 23.49, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/guitarra_08_b976a71bd9.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_08_b976a71bd9", resource_type: "image" }, createdAt: "2023-02-10T13:24:27.421Z", updatedAt: "2023-02-10T13:24:27.421Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "dale":
      return { data: [{ id: 9, attributes: { nombre: "dale", createdAt: "2023-02-10T13:26:37.019Z", updatedAt: "2023-03-16T23:39:44.178Z", publishedAt: "2023-02-10T13:26:45.481Z", descripcion: "La guitarra Dale es una guitarra dise\xF1ada para los amantes de la m\xFAsica surf. Con un cuerpo s\xF3lido de aliso y un diapas\xF3n de palisandro, esta guitarra ofrece un sonido brillante y lleno de matices que evoca la \xE9poca dorada del surf. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 660, url: "dale", imagen: { data: { id: 12, attributes: { name: "guitarra_09.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/small_guitarra_09_6670a1c668.jpg", hash: "small_guitarra_09_6670a1c668", mime: "image/jpeg", name: "small_guitarra_09.jpg", path: null, size: 11.99, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_09_6670a1c668", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035577/medium_guitarra_09_6670a1c668.jpg", hash: "medium_guitarra_09_6670a1c668", mime: "image/jpeg", name: "medium_guitarra_09.jpg", path: null, size: 22.22, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_09_6670a1c668", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/thumbnail_guitarra_09_6670a1c668.jpg", hash: "thumbnail_guitarra_09_6670a1c668", mime: "image/jpeg", name: "thumbnail_guitarra_09.jpg", path: null, size: 2.18, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_09_6670a1c668", resource_type: "image" } } }, hash: "guitarra_09_6670a1c668", ext: ".jpg", mime: "image/jpeg", size: 24.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/guitarra_09_6670a1c668.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_09_6670a1c668", resource_type: "image" }, createdAt: "2023-02-10T13:26:17.431Z", updatedAt: "2023-02-10T13:26:17.431Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "young":
      return { data: [{ id: 10, attributes: { nombre: "young", createdAt: "2023-02-10T13:29:24.112Z", updatedAt: "2023-03-16T23:40:46.941Z", publishedAt: "2023-02-10T13:29:31.848Z", descripcion: "La guitarra Young es una recreaci\xF3n precisa de la ic\xF3nica guitarra de Angus Young, l\xEDder de la legendaria banda de rock AC/DC. Con su cuerpo de caoba y m\xE1stil de arce, esta guitarra ofrece un sonido poderoso y vers\xE1til que es perfecto para tocar desde blues hasta heavy metal. Adem\xE1s, cuenta con pastillas de alta calidad que producen un sonido c\xE1lido y brillante.", precio: 539, url: "young", imagen: { data: { id: 13, attributes: { name: "guitarra_10.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/small_guitarra_10_65820e6f3f.jpg", hash: "small_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "small_guitarra_10.jpg", path: null, size: 11.56, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_10_65820e6f3f", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035649/medium_guitarra_10_65820e6f3f.jpg", hash: "medium_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "medium_guitarra_10.jpg", path: null, size: 20.89, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_10_65820e6f3f", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/thumbnail_guitarra_10_65820e6f3f.jpg", hash: "thumbnail_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "thumbnail_guitarra_10.jpg", path: null, size: 2.26, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_10_65820e6f3f", resource_type: "image" } } }, hash: "guitarra_10_65820e6f3f", ext: ".jpg", mime: "image/jpeg", size: 22.36, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/guitarra_10_65820e6f3f.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_10_65820e6f3f", resource_type: "image" }, createdAt: "2023-02-10T13:27:29.380Z", updatedAt: "2023-02-10T13:27:29.380Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "keith":
      return { data: [{ id: 11, attributes: { nombre: "keith", createdAt: "2023-02-10T13:31:12.920Z", updatedAt: "2023-03-16T23:42:50.550Z", publishedAt: "2023-02-10T13:31:20.656Z", descripcion: "La guitarra Keith es una verdadera obra de arte, tanto en t\xE9rminos de su est\xE9tica como de su sonido. Con su cuerpo hueco y su distintiva forma de doble corte, la guitarra Keith ofrece un sonido c\xE1lido y potente que es perfecto para cualquier g\xE9nero de m\xFAsica. Adem\xE1s, su c\xF3modo m\xE1stil y su ajuste f\xE1cil hacen que sea f\xE1cil de tocar durante horas.", precio: 599, url: "keith", imagen: { data: { id: 14, attributes: { name: "guitarra_11.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/small_guitarra_11_0901f4ca03.jpg", hash: "small_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "small_guitarra_11.jpg", path: null, size: 12.37, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_11_0901f4ca03", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035827/medium_guitarra_11_0901f4ca03.jpg", hash: "medium_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "medium_guitarra_11.jpg", path: null, size: 21.66, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_11_0901f4ca03", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/thumbnail_guitarra_11_0901f4ca03.jpg", hash: "thumbnail_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "thumbnail_guitarra_11.jpg", path: null, size: 2.5, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_11_0901f4ca03", resource_type: "image" } } }, hash: "guitarra_11_0901f4ca03", ext: ".jpg", mime: "image/jpeg", size: 22.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/guitarra_11_0901f4ca03.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_11_0901f4ca03", resource_type: "image" }, createdAt: "2023-02-10T13:30:27.380Z", updatedAt: "2023-02-10T13:30:27.380Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "blackmore":
      return { data: [{ id: 12, attributes: { nombre: "blackmore", createdAt: "2023-02-10T13:34:08.371Z", updatedAt: "2023-03-16T23:42:35.939Z", publishedAt: "2023-02-10T13:34:17.808Z", descripcion: "La guitarra Blackmore es una m\xE1quina de rock and roll en forma de guitarra. Con su cuerpo s\xF3lido y su acabado negro mate, es el instrumento perfecto para los m\xFAsicos que buscan un sonido potente y agresivo. Con su combinaci\xF3n de pastillas de alta ganancia y m\xE1stil de arce, la guitarra Blackmore es ideal para el heavy metal y otros g\xE9neros de m\xFAsica intensos.", precio: 616, url: "blackmore", imagen: { data: { id: 15, attributes: { name: "guitarra_12.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/small_guitarra_12_9fba33aac5.jpg", hash: "small_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "small_guitarra_12.jpg", path: null, size: 12.38, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_12_9fba33aac5", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/medium_guitarra_12_9fba33aac5.jpg", hash: "medium_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "medium_guitarra_12.jpg", path: null, size: 22.04, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_12_9fba33aac5", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/thumbnail_guitarra_12_9fba33aac5.jpg", hash: "thumbnail_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "thumbnail_guitarra_12.jpg", path: null, size: 2.29, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_12_9fba33aac5", resource_type: "image" } } }, hash: "guitarra_12_9fba33aac5", ext: ".jpg", mime: "image/jpeg", size: 23.41, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/guitarra_12_9fba33aac5.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_12_9fba33aac5", resource_type: "image" }, createdAt: "2023-02-10T13:33:02.409Z", updatedAt: "2023-02-10T13:33:02.409Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
  }
}
async function getGuitarras() {
  return { data: [{ id: 2, attributes: { nombre: "page", createdAt: "2023-02-10T13:08:43.514Z", updatedAt: "2023-03-16T23:32:03.643Z", publishedAt: "2023-02-10T13:08:52.052Z", descripcion: "La guitarra Page es una creaci\xF3n \xFAnica, dise\xF1ada para aquellos que buscan un sonido vintage y un estilo cl\xE1sico. Con su cuerpo de caoba y su acabado envejecido, esta guitarra ofrece un sonido c\xE1lido y profundo. Sus pastillas humbucker proporcionan un tono potente y lleno de matices, ideal para tocar rock y blues. Adem\xE1s, su diapas\xF3n de palisandro y sus incrustaciones de n\xE1car le dan un toque elegante y distintivo. La guitarra Page es la elecci\xF3n perfecta para los amantes del sonido vintage y la calidad excepcional.", precio: 299, url: "page", imagen: { data: { id: 5, attributes: { name: "guitarra_02.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034738/small_guitarra_02_d62d90055c.jpg", hash: "small_guitarra_02_d62d90055c", mime: "image/jpeg", name: "small_guitarra_02.jpg", path: null, size: 14.4, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_02_d62d90055c", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034738/medium_guitarra_02_d62d90055c.jpg", hash: "medium_guitarra_02_d62d90055c", mime: "image/jpeg", name: "medium_guitarra_02.jpg", path: null, size: 26.46, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_02_d62d90055c", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034737/thumbnail_guitarra_02_d62d90055c.jpg", hash: "thumbnail_guitarra_02_d62d90055c", mime: "image/jpeg", name: "thumbnail_guitarra_02.jpg", path: null, size: 2.35, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_02_d62d90055c", resource_type: "image" } } }, hash: "guitarra_02_d62d90055c", ext: ".jpg", mime: "image/jpeg", size: 31.42, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034737/guitarra_02_d62d90055c.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_02_d62d90055c", resource_type: "image" }, createdAt: "2023-02-10T13:12:18.480Z", updatedAt: "2023-02-10T13:12:18.480Z" } } } } }, { id: 3, attributes: { nombre: "Clapton", createdAt: "2023-02-10T13:11:20.904Z", updatedAt: "2023-03-16T23:33:38.316Z", publishedAt: "2023-02-10T13:11:33.887Z", descripcion: "La Clapton es una guitarra ic\xF3nica dise\xF1ada para emular el sonido distintivo de Eric Clapton. Con su cuerpo de aliso y su m\xE1stil de arce, esta guitarra tiene un tono c\xE1lido y equilibrado, ideal para tocar blues y rock cl\xE1sico. La Clapton tambi\xE9n cuenta con un dise\xF1o elegante y un estilo vintage que la hace \xFAnica y atractiva. Es la guitarra perfecta para aquellos que buscan un sonido cl\xE1sico y un estilo distintivo.", precio: 379, url: "clapton", imagen: { data: { id: 6, attributes: { name: "guitarra_03.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/small_guitarra_03_c8c07be4d4.jpg", hash: "small_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "small_guitarra_03.jpg", path: null, size: 10.06, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_03_c8c07be4d4", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034776/medium_guitarra_03_c8c07be4d4.jpg", hash: "medium_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "medium_guitarra_03.jpg", path: null, size: 18.21, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_03_c8c07be4d4", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/thumbnail_guitarra_03_c8c07be4d4.jpg", hash: "thumbnail_guitarra_03_c8c07be4d4", mime: "image/jpeg", name: "thumbnail_guitarra_03.jpg", path: null, size: 2.18, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_03_c8c07be4d4", resource_type: "image" } } }, hash: "guitarra_03_c8c07be4d4", ext: ".jpg", mime: "image/jpeg", size: 19.47, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034775/guitarra_03_c8c07be4d4.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_03_c8c07be4d4", resource_type: "image" }, createdAt: "2023-02-10T13:12:56.589Z", updatedAt: "2023-02-10T13:12:56.589Z" } } } } }, { id: 4, attributes: { nombre: "beck", createdAt: "2023-02-10T13:15:06.827Z", updatedAt: "2023-03-16T23:38:07.634Z", publishedAt: "2023-02-10T13:16:31.660Z", descripcion: "La guitarra Beck es una obra maestra del dise\xF1o y la construcci\xF3n de guitarras. Con un cuerpo de aliso y un diapas\xF3n de arce, esta guitarra ofrece un tono brillante y equilibrado que se adapta perfectamente a cualquier estilo musical. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por m\xFAsicos de todo el mundo.", precio: 379, url: "beck", imagen: { data: { id: 7, attributes: { name: "guitarra_04.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/small_guitarra_04_3b1bfbd39a.jpg", hash: "small_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "small_guitarra_04.jpg", path: null, size: 12.18, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_04_3b1bfbd39a", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034883/medium_guitarra_04_3b1bfbd39a.jpg", hash: "medium_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "medium_guitarra_04.jpg", path: null, size: 21.74, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_04_3b1bfbd39a", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/thumbnail_guitarra_04_3b1bfbd39a.jpg", hash: "thumbnail_guitarra_04_3b1bfbd39a", mime: "image/jpeg", name: "thumbnail_guitarra_04.jpg", path: null, size: 2.24, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_04_3b1bfbd39a", resource_type: "image" } } }, hash: "guitarra_04_3b1bfbd39a", ext: ".jpg", mime: "image/jpeg", size: 24.29, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676034882/guitarra_04_3b1bfbd39a.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_04_3b1bfbd39a", resource_type: "image" }, createdAt: "2023-02-10T13:14:43.418Z", updatedAt: "2023-02-10T13:14:43.418Z" } } } } }, { id: 5, attributes: { nombre: "townshend", createdAt: "2023-02-10T13:17:40.204Z", updatedAt: "2023-03-16T23:38:30.539Z", publishedAt: "2023-02-10T13:17:51.377Z", descripcion: "La guitarra Townshend es una pieza \xFAnica dise\xF1ada en colaboraci\xF3n con el legendario guitarrista de The Who, Pete Townshend. Con un cuerpo s\xF3lido de aliso y un diapas\xF3n de arce, esta guitarra ofrece un sonido potente y lleno de matices que se adapta a cualquier estilo musical. Su dise\xF1o ic\xF3nico y distintivo la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 499, url: "townshend", imagen: { data: { id: 8, attributes: { name: "guitarra_05.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/small_guitarra_05_9b3de9bd52.jpg", hash: "small_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "small_guitarra_05.jpg", path: null, size: 11.4, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_05_9b3de9bd52", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/medium_guitarra_05_9b3de9bd52.jpg", hash: "medium_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "medium_guitarra_05.jpg", path: null, size: 20.51, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_05_9b3de9bd52", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035034/thumbnail_guitarra_05_9b3de9bd52.jpg", hash: "thumbnail_guitarra_05_9b3de9bd52", mime: "image/jpeg", name: "thumbnail_guitarra_05.jpg", path: null, size: 2.22, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_05_9b3de9bd52", resource_type: "image" } } }, hash: "guitarra_05_9b3de9bd52", ext: ".jpg", mime: "image/jpeg", size: 22.15, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035035/guitarra_05_9b3de9bd52.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_05_9b3de9bd52", resource_type: "image" }, createdAt: "2023-02-10T13:17:15.713Z", updatedAt: "2023-02-10T13:17:15.713Z" } } } } }, { id: 8, attributes: { nombre: "cobain", createdAt: "2023-02-10T13:24:55.110Z", updatedAt: "2023-03-16T23:39:18.676Z", publishedAt: "2023-02-10T13:25:04.302Z", descripcion: "La guitarra Cobain es un tributo al legendario l\xEDder de Nirvana, Kurt Cobain. Fabricada con las mejores maderas y componentes, esta guitarra ofrece un sonido potente y lleno de matices que evoca la \xE9poca dorada del grunge. Su dise\xF1o ic\xF3nico y distintivo la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 999, url: "cobain", imagen: { data: { id: 11, attributes: { name: "guitarra_08.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/small_guitarra_08_b976a71bd9.jpg", hash: "small_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "small_guitarra_08.jpg", path: null, size: 11.96, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_08_b976a71bd9", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035467/medium_guitarra_08_b976a71bd9.jpg", hash: "medium_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "medium_guitarra_08.jpg", path: null, size: 21.77, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_08_b976a71bd9", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/thumbnail_guitarra_08_b976a71bd9.jpg", hash: "thumbnail_guitarra_08_b976a71bd9", mime: "image/jpeg", name: "thumbnail_guitarra_08.jpg", path: null, size: 2.27, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_08_b976a71bd9", resource_type: "image" } } }, hash: "guitarra_08_b976a71bd9", ext: ".jpg", mime: "image/jpeg", size: 23.49, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035466/guitarra_08_b976a71bd9.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_08_b976a71bd9", resource_type: "image" }, createdAt: "2023-02-10T13:24:27.421Z", updatedAt: "2023-02-10T13:24:27.421Z" } } } } }, { id: 9, attributes: { nombre: "dale", createdAt: "2023-02-10T13:26:37.019Z", updatedAt: "2023-03-16T23:39:44.178Z", publishedAt: "2023-02-10T13:26:45.481Z", descripcion: "La guitarra Dale es una guitarra dise\xF1ada para los amantes de la m\xFAsica surf. Con un cuerpo s\xF3lido de aliso y un diapas\xF3n de palisandro, esta guitarra ofrece un sonido brillante y lleno de matices que evoca la \xE9poca dorada del surf. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 660, url: "dale", imagen: { data: { id: 12, attributes: { name: "guitarra_09.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/small_guitarra_09_6670a1c668.jpg", hash: "small_guitarra_09_6670a1c668", mime: "image/jpeg", name: "small_guitarra_09.jpg", path: null, size: 11.99, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_09_6670a1c668", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035577/medium_guitarra_09_6670a1c668.jpg", hash: "medium_guitarra_09_6670a1c668", mime: "image/jpeg", name: "medium_guitarra_09.jpg", path: null, size: 22.22, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_09_6670a1c668", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/thumbnail_guitarra_09_6670a1c668.jpg", hash: "thumbnail_guitarra_09_6670a1c668", mime: "image/jpeg", name: "thumbnail_guitarra_09.jpg", path: null, size: 2.18, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_09_6670a1c668", resource_type: "image" } } }, hash: "guitarra_09_6670a1c668", ext: ".jpg", mime: "image/jpeg", size: 24.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035576/guitarra_09_6670a1c668.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_09_6670a1c668", resource_type: "image" }, createdAt: "2023-02-10T13:26:17.431Z", updatedAt: "2023-02-10T13:26:17.431Z" } } } } }, { id: 10, attributes: { nombre: "young", createdAt: "2023-02-10T13:29:24.112Z", updatedAt: "2023-03-16T23:40:46.941Z", publishedAt: "2023-02-10T13:29:31.848Z", descripcion: "La guitarra Young es una recreaci\xF3n precisa de la ic\xF3nica guitarra de Angus Young, l\xEDder de la legendaria banda de rock AC/DC. Con su cuerpo de caoba y m\xE1stil de arce, esta guitarra ofrece un sonido poderoso y vers\xE1til que es perfecto para tocar desde blues hasta heavy metal. Adem\xE1s, cuenta con pastillas de alta calidad que producen un sonido c\xE1lido y brillante.", precio: 539, url: "young", imagen: { data: { id: 13, attributes: { name: "guitarra_10.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/small_guitarra_10_65820e6f3f.jpg", hash: "small_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "small_guitarra_10.jpg", path: null, size: 11.56, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_10_65820e6f3f", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035649/medium_guitarra_10_65820e6f3f.jpg", hash: "medium_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "medium_guitarra_10.jpg", path: null, size: 20.89, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_10_65820e6f3f", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/thumbnail_guitarra_10_65820e6f3f.jpg", hash: "thumbnail_guitarra_10_65820e6f3f", mime: "image/jpeg", name: "thumbnail_guitarra_10.jpg", path: null, size: 2.26, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_10_65820e6f3f", resource_type: "image" } } }, hash: "guitarra_10_65820e6f3f", ext: ".jpg", mime: "image/jpeg", size: 22.36, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035648/guitarra_10_65820e6f3f.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_10_65820e6f3f", resource_type: "image" }, createdAt: "2023-02-10T13:27:29.380Z", updatedAt: "2023-02-10T13:27:29.380Z" } } } } }, { id: 1, attributes: { nombre: "vai", createdAt: "2023-02-09T19:46:32.776Z", updatedAt: "2023-03-16T23:42:21.640Z", publishedAt: "2023-02-09T19:46:49.504Z", descripcion: "La guitarra Vai es una joya de la ingenier\xEDa y el dise\xF1o. Con su cuerpo de madera de aliso y su acabado verde iridiscente, es una verdadera belleza visual. Pero lo que realmente distingue a esta guitarra es su sonido: con su m\xE1stil de arce y sus pastillas de alta calidad, ofrece un tono rico y equilibrado que es perfecto para una amplia variedad de estilos musicales. Adem\xE1s, su forma distintiva y su ergonom\xEDa mejorada la hacen muy c\xF3moda de tocar.", precio: 349, url: "vai", imagen: { data: { id: 1, attributes: { name: "guitarra_01.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/small_guitarra_01_5019e2a76b.jpg", hash: "small_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "small_guitarra_01.jpg", path: null, size: 11.44, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_01_5019e2a76b", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/medium_guitarra_01_5019e2a76b.jpg", hash: "medium_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "medium_guitarra_01.jpg", path: null, size: 20.56, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_01_5019e2a76b", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/thumbnail_guitarra_01_5019e2a76b.jpg", hash: "thumbnail_guitarra_01_5019e2a76b", mime: "image/jpeg", name: "thumbnail_guitarra_01.jpg", path: null, size: 2.2, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_01_5019e2a76b", resource_type: "image" } } }, hash: "guitarra_01_5019e2a76b", ext: ".jpg", mime: "image/jpeg", size: 22.35, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1675971979/guitarra_01_5019e2a76b.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_01_5019e2a76b", resource_type: "image" }, createdAt: "2023-02-09T19:46:20.042Z", updatedAt: "2023-02-09T19:46:20.042Z" } } } } }, { id: 12, attributes: { nombre: "blackmore", createdAt: "2023-02-10T13:34:08.371Z", updatedAt: "2023-03-16T23:42:35.939Z", publishedAt: "2023-02-10T13:34:17.808Z", descripcion: "La guitarra Blackmore es una m\xE1quina de rock and roll en forma de guitarra. Con su cuerpo s\xF3lido y su acabado negro mate, es el instrumento perfecto para los m\xFAsicos que buscan un sonido potente y agresivo. Con su combinaci\xF3n de pastillas de alta ganancia y m\xE1stil de arce, la guitarra Blackmore es ideal para el heavy metal y otros g\xE9neros de m\xFAsica intensos.", precio: 616, url: "blackmore", imagen: { data: { id: 15, attributes: { name: "guitarra_12.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/small_guitarra_12_9fba33aac5.jpg", hash: "small_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "small_guitarra_12.jpg", path: null, size: 12.38, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_12_9fba33aac5", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/medium_guitarra_12_9fba33aac5.jpg", hash: "medium_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "medium_guitarra_12.jpg", path: null, size: 22.04, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_12_9fba33aac5", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/thumbnail_guitarra_12_9fba33aac5.jpg", hash: "thumbnail_guitarra_12_9fba33aac5", mime: "image/jpeg", name: "thumbnail_guitarra_12.jpg", path: null, size: 2.29, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_12_9fba33aac5", resource_type: "image" } } }, hash: "guitarra_12_9fba33aac5", ext: ".jpg", mime: "image/jpeg", size: 23.41, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035981/guitarra_12_9fba33aac5.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_12_9fba33aac5", resource_type: "image" }, createdAt: "2023-02-10T13:33:02.409Z", updatedAt: "2023-02-10T13:33:02.409Z" } } } } }, { id: 11, attributes: { nombre: "keith", createdAt: "2023-02-10T13:31:12.920Z", updatedAt: "2023-03-16T23:42:50.550Z", publishedAt: "2023-02-10T13:31:20.656Z", descripcion: "La guitarra Keith es una verdadera obra de arte, tanto en t\xE9rminos de su est\xE9tica como de su sonido. Con su cuerpo hueco y su distintiva forma de doble corte, la guitarra Keith ofrece un sonido c\xE1lido y potente que es perfecto para cualquier g\xE9nero de m\xFAsica. Adem\xE1s, su c\xF3modo m\xE1stil y su ajuste f\xE1cil hacen que sea f\xE1cil de tocar durante horas.", precio: 599, url: "keith", imagen: { data: { id: 14, attributes: { name: "guitarra_11.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/small_guitarra_11_0901f4ca03.jpg", hash: "small_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "small_guitarra_11.jpg", path: null, size: 12.37, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_11_0901f4ca03", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035827/medium_guitarra_11_0901f4ca03.jpg", hash: "medium_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "medium_guitarra_11.jpg", path: null, size: 21.66, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_11_0901f4ca03", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/thumbnail_guitarra_11_0901f4ca03.jpg", hash: "thumbnail_guitarra_11_0901f4ca03", mime: "image/jpeg", name: "thumbnail_guitarra_11.jpg", path: null, size: 2.5, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_11_0901f4ca03", resource_type: "image" } } }, hash: "guitarra_11_0901f4ca03", ext: ".jpg", mime: "image/jpeg", size: 22.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035826/guitarra_11_0901f4ca03.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_11_0901f4ca03", resource_type: "image" }, createdAt: "2023-02-10T13:30:27.380Z", updatedAt: "2023-02-10T13:30:27.380Z" } } } } }, { id: 7, attributes: { nombre: "borland", createdAt: "2023-02-10T13:22:18.810Z", updatedAt: "2023-03-16T23:31:21.517Z", publishedAt: "2023-02-10T13:22:26.929Z", descripcion: "La guitarra Borland es un modelo de guitarra el\xE9ctrica de cuerpo s\xF3lido, fabricada con materiales de alta calidad y con un dise\xF1o elegante y distintivo. Se destaca por su sonido potente y equilibrado, con un rango tonal amplio y vers\xE1til, lo que la convierte en una excelente opci\xF3n para cualquier estilo de m\xFAsica. Adem\xE1s, cuenta con una construcci\xF3n s\xF3lida y duradera, lo que la hace ideal para uso en vivo o en estudio. \xA1Es una gran elecci\xF3n para guitarristas de todos los niveles!", precio: 439, url: "borland", imagen: { data: { id: 10, attributes: { name: "guitarra_07.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/small_guitarra_07_1bbef31790.jpg", hash: "small_guitarra_07_1bbef31790", mime: "image/jpeg", name: "small_guitarra_07.jpg", path: null, size: 11.3, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_07_1bbef31790", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035322/medium_guitarra_07_1bbef31790.jpg", hash: "medium_guitarra_07_1bbef31790", mime: "image/jpeg", name: "medium_guitarra_07.jpg", path: null, size: 20.06, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_07_1bbef31790", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/thumbnail_guitarra_07_1bbef31790.jpg", hash: "thumbnail_guitarra_07_1bbef31790", mime: "image/jpeg", name: "thumbnail_guitarra_07.jpg", path: null, size: 2.24, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_07_1bbef31790", resource_type: "image" } } }, hash: "guitarra_07_1bbef31790", ext: ".jpg", mime: "image/jpeg", size: 21.33, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035321/guitarra_07_1bbef31790.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_07_1bbef31790", resource_type: "image" }, createdAt: "2023-02-10T13:22:02.516Z", updatedAt: "2023-02-10T13:22:02.516Z" } } } } }, { id: 6, attributes: { nombre: "morello", createdAt: "2023-02-10T13:19:36.631Z", updatedAt: "2023-03-16T23:38:54.606Z", publishedAt: "2023-02-10T13:19:45.291Z", descripcion: "La guitarra Morello es una guitarra dise\xF1ada para rockeros duros. Con un cuerpo s\xF3lido de caoba y un diapas\xF3n de \xE9bano, esta guitarra ofrece un sonido potente y agresivo que se adapta perfectamente a los estilos m\xE1s exigentes del rock y el metal. Su dise\xF1o elegante y sofisticado la convierten en una guitarra deseada por muchos m\xFAsicos.", precio: 799, url: "morello", imagen: { data: { id: 9, attributes: { name: "guitarra_06.jpg", alternativeText: null, caption: null, width: 400, height: 900, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035160/small_guitarra_06_0afe902a63.jpg", hash: "small_guitarra_06_0afe902a63", mime: "image/jpeg", name: "small_guitarra_06.jpg", path: null, size: 12.13, width: 222, height: 500, provider_metadata: { public_id: "small_guitarra_06_0afe902a63", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035160/medium_guitarra_06_0afe902a63.jpg", hash: "medium_guitarra_06_0afe902a63", mime: "image/jpeg", name: "medium_guitarra_06.jpg", path: null, size: 21.75, width: 333, height: 750, provider_metadata: { public_id: "medium_guitarra_06_0afe902a63", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035159/thumbnail_guitarra_06_0afe902a63.jpg", hash: "thumbnail_guitarra_06_0afe902a63", mime: "image/jpeg", name: "thumbnail_guitarra_06.jpg", path: null, size: 2.37, width: 69, height: 156, provider_metadata: { public_id: "thumbnail_guitarra_06_0afe902a63", resource_type: "image" } } }, hash: "guitarra_06_0afe902a63", ext: ".jpg", mime: "image/jpeg", size: 24.47, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676035159/guitarra_06_0afe902a63.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "guitarra_06_0afe902a63", resource_type: "image" }, createdAt: "2023-02-10T13:19:20.711Z", updatedAt: "2023-02-10T13:19:20.711Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 12 } } };
}

// app/routes/guitarras/$guitarraUrl.jsx
var import_react8 = require("react"), import_react_hot_toast2 = __toESM(require("react-hot-toast")), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarraByUrl(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  return data ? {
    title: `GuitarBA - ${data.data[0].attributes.nombre.toUpperCase()}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  } : {
    title: "GuitarBA - Guitarra no encontrada",
    description: "GuitarBA - Guitarra no encontrada"
  };
}
function Guitarra() {
  let { agregarCarrito } = (0, import_react7.useOutletContext)(), location = (0, import_react9.useLocation)(), [cantidad, setCantidad] = (0, import_react8.useState)(0), guitarra = (0, import_react7.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Seleccione una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada), import_react_hot_toast2.default.success("\xA1Guitarra agregada al carrito!");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenedor guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        className: "imagen",
        src: imagen.data.attributes.url,
        alt: `imagen guitarra ${nombre}`
      },
      void 0,
      !1,
      {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, !1, {
          fileName: "app/routes/guitarras/$guitarraUrl.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "select",
          {
            id: "cantidad",
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "0", children: "-- Seleccione --" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 87,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 88,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 89,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 90,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 92,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 83,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "submit", value: "Agregar al Carrito" }, void 0, !1, {
          fileName: "app/routes/guitarras/$guitarraUrl.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras/$guitarraUrl.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
var guitarraUrl_default = Guitarra;

// app/routes/guitarras/index.jsx
var guitarras_exports2 = {};
__export(guitarras_exports2, {
  default: () => guitarras_default2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react11 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { precio, imagen, descripcion, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        className: "imagen",
        src: imagen.data.attributes.url,
        alt: `imagen guitarra ${nombre}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 8,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "precio-enlace", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "precio", children: [
          "$",
          precio
        ] }, void 0, !0, {
          fileName: "app/components/guitarra.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Guitarra" }, void 0, !1, {
          fileName: "app/components/guitarra.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var guitarra_default2 = Guitarra2;

// app/components/listadoGuitarras.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: "Nuestra Coleccion" }, void 0, !1, {
      fileName: "app/components/listadoGuitarras.jsx",
      lineNumber: 7,
      columnNumber: 5
    }, this),
    guitarras.length && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      guitarra_default2,
      {
        guitarra: guitarra == null ? void 0 : guitarra.attributes
      },
      guitarra.id,
      !1,
      {
        fileName: "app/components/listadoGuitarras.jsx",
        lineNumber: 11,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listadoGuitarras.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listadoGuitarras.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras/index.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta3() {
  return {
    title: "GuitarBA - Guitarras",
    description: "GuitarBA - Tienda de Guitarras - Venta de guitarras electricas, acusticas, clasicas y bajos de las mejores marcas"
  };
}
async function loader2() {
  return (await getGuitarras()).data;
}
function Tienda2() {
  let guitarras = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ListadoGuitarras, { guitarras }, void 0, !1, {
    fileName: "app/routes/guitarras/index.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this);
}
var guitarras_default2 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta4
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-CXXP4N52.css";

// app/routes/nosotros.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta4() {
  return {
    title: "GuitarBA - Nosotros",
    description: "GuitarBA es una tienda de guitarras y accesorios para guitarras"
  };
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  let data = (0, import_react12.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: nosotros_default, alt: "imagen nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "En Buenos Aires, somos conocidos como GuitarBA, una tienda de guitarras que ofrece una amplia selecci\xF3n de guitarras de alta calidad y un ambiente acogedor para m\xFAsicos de todo el mundo. Pero para nosotros, nuestros or\xEDgenes son mucho m\xE1s personales. En la d\xE9cada de 1970, Carlos, uno de los fundadores de la tienda, era un m\xFAsico joven que tocaba la guitarra en una banda punki. Carlos estaba cansado de tener que ir a varias tiendas de m\xFAsica diferentes para encontrar las piezas que necesitaba para sus instrumentos. Entonces, decidi\xF3 abrir su propia tienda de guitarras que ofreciera todo lo que un m\xFAsico podr\xEDa necesitar en un solo lugar." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "A lo largo de los a\xF1os, hemos evolucionado y nos hemos adaptado a medida que la industria de la m\xFAsica ha cambiado. Pero nuestra dedicaci\xF3n a la calidad y la pasi\xF3n por la m\xFAsica han permanecido constantes. Hoy en d\xEDa, GuitarBA es una de las tiendas de guitarras m\xE1s respetadas de Buenos Aires, y estamos orgullosos de ofrecer guitarras \xFAnicas, nuestro personal experto y un ambiente acogedor para todos nuestros clientes." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default3,
  links: () => links4,
  meta: () => meta5
});
var import_react13 = require("react");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-TDXAYX7K.css";

// app/routes/carrito.jsx
var import_react14 = require("@remix-run/react"), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function links4() {
  return [
    { rel: "stylesheet", href: carrito_default2 }
  ];
}
function meta5() {
  return {
    title: "GuitarBA - Carrito de Compras",
    description: "Carrito de Compras, GuitarBA, Tienda de guitarras y accesorios, Buenos Aires, Argentina"
  };
}
function Carrito() {
  let { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react14.useOutletContext)(), [total, setTotal] = (0, import_react13.useState)(0), calcularTotal = () => {
    let total2 = 0;
    return carrito.forEach((guitarra) => {
      total2 += guitarra.precio * guitarra.cantidad;
    }), total2;
  };
  return (0, import_react13.useEffect)(() => {
    setTotal(calcularTotal());
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_remix_utils.ClientOnly, { fallback: "cargando...", children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "No hay articulos en el carrito" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 48,
          columnNumber: 42
        }, this) : carrito == null ? void 0 : carrito.map((producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "producto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: producto.imagen, alt: producto.nombre }, void 0, !1, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 51,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "datos-carrito", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 56,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
              "Cantidad: ",
              producto.cantidad
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 57,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "precio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
              "$",
              producto.precio
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 59,
              columnNumber: 55
            }, this) }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 59,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "subtotal", children: [
              "Subtotal:  ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: [
                "$",
                producto.precio * producto.cantidad
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 60,
                columnNumber: 68
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 60,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "select",
              {
                value: producto.cantidad,
                className: "select",
                onChange: (e) => actualizarCantidad({ id: producto.id, cantidad: +e.target.value }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 67,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 68,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 69,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 70,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                    fileName: "app/routes/carrito.jsx",
                    lineNumber: 71,
                    columnNumber: 37
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 62,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 55,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "button",
            {
              type: "button",
              className: "btn_eliminar",
              onClick: () => eliminarGuitarra(producto.id),
              children: " X"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 75,
              columnNumber: 29
            },
            this
          )
        ] }, producto.id, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this))
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
          "Total a pagar: $",
          total
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var carrito_default3 = Carrito;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta6
});

// app/models/posts.server.js
async function getPosts(url) {
  return { data: [{ id: 2, attributes: { titulo: "Como elegir tu proxima guitarra", contenido: `Elegir tu pr\xF3xima guitarra puede ser una tarea emocionante, pero tambi\xE9n puede ser un poco intimidante. Con tantas opciones en el mercado, es importante tener en cuenta algunos factores clave antes de tomar una decisi\xF3n final.

Lo primero que debes considerar es tu nivel de experiencia como guitarrista. Si eres un principiante, probablemente quieras buscar una guitarra que sea f\xE1cil de tocar y que se adapte a tus necesidades. Si ya eres un guitarrista experimentado, quiz\xE1s est\xE9s buscando una guitarra m\xE1s avanzada que te permita explorar diferentes estilos y t\xE9cnicas.

El tipo de m\xFAsica que tocas tambi\xE9n es un factor importante a considerar. Si tocas principalmente m\xFAsica ac\xFAstica, es probable que quieras buscar una guitarra ac\xFAstica de calidad. Si tocas principalmente m\xFAsica el\xE9ctrica, una guitarra el\xE9ctrica puede ser la mejor opci\xF3n para ti. Si tocas una variedad de estilos, es posible que quieras considerar una guitarra vers\xE1til que pueda abarcar diferentes g\xE9neros.

Otro factor a considerar es el presupuesto. Las guitarras pueden variar significativamente en precio, por lo que es importante establecer un presupuesto realista antes de comenzar tu b\xFAsqueda. Si eres un principiante, es posible que desees considerar comprar una guitarra m\xE1s econ\xF3mica para comenzar. Si eres un guitarrista experimentado, es posible que est\xE9s dispuesto a invertir m\xE1s en una guitarra de alta calidad.

Por \xFAltimo, es importante probar la guitarra antes de comprarla. La sensaci\xF3n y el sonido de una guitarra son muy personales, por lo que es importante asegurarte de que la guitarra que est\xE1s considerando se sienta c\xF3moda y suene bien para ti. Si no est\xE1s seguro de qu\xE9 buscar, no dudes en pedir ayuda a un vendedor o a un guitarrista experimentado.

Elegir la guitarra adecuada puede llevar tiempo y esfuerzo, pero al seguir estos consejos, estar\xE1s bien encaminado para encontrar la guitarra perfecta para ti y para tus necesidades musicales.`, url: "como-elegir-tu-proxima-guitarra", createdAt: "2023-02-10T16:00:53.230Z", updatedAt: "2023-03-16T15:36:00.579Z", publishedAt: "2023-02-10T16:01:08.236Z", imagen: { data: { id: 17, attributes: { name: "blog_2.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/small_blog_2_1417186423.jpg", hash: "small_blog_2_1417186423", mime: "image/jpeg", name: "small_blog_2.jpg", path: null, size: 47.35, width: 500, height: 375, provider_metadata: { public_id: "small_blog_2_1417186423", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/medium_blog_2_1417186423.jpg", hash: "medium_blog_2_1417186423", mime: "image/jpeg", name: "medium_blog_2.jpg", path: null, size: 87.87, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_2_1417186423", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044843/thumbnail_blog_2_1417186423.jpg", hash: "thumbnail_blog_2_1417186423", mime: "image/jpeg", name: "thumbnail_blog_2.jpg", path: null, size: 10.78, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_2_1417186423", resource_type: "image" } } }, hash: "blog_2_1417186423", ext: ".jpg", mime: "image/jpeg", size: 85.5, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/blog_2_1417186423.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_2_1417186423", resource_type: "image" }, createdAt: "2023-02-10T16:00:45.062Z", updatedAt: "2023-02-10T16:00:45.062Z" } } } } }, { id: 1, attributes: { titulo: "Primeros Pasos para Aprender", contenido: `Para empezar a adquirir nuevos conocimientos, es importante que identifiques lo que quieres aprender. Una vez que hayas definido tus objetivos de aprendizaje, busca recursos que te ayuden a alcanzarlos. Hay una gran cantidad de opciones disponibles, desde libros y cursos en l\xEDnea hasta videos y podcasts.

Es importante establecer metas realistas para asegurarte de mantener la motivaci\xF3n en tu proceso de aprendizaje. Define plazos para alcanzar tus objetivos y celebra cada logro, sin importar lo peque\xF1o que sea.
Experimenta con diferentes m\xE9todos de aprendizaje para encontrar lo que mejor funcione para ti. Hay muchas formas diferentes de aprender, desde el aprendizaje visual, auditivo o kinest\xE9sico.

Finalmente, buscar una comunidad de apoyo puede ser muy efectivo y motivador. Busca grupos de estudio, comunidades en l\xEDnea o personas con intereses similares para compartir tus experiencias y obtener apoyo en tu proceso de aprendizaje.
Empezar a aprender puede parecer intimidante, pero siguiendo estos consejos estar\xE1s bien encaminado para adquirir nuevos conocimientos y habilidades. \xA1No tengas miedo de dar el primer paso y comienza tu viaje de aprendizaje hoy mismo!`, url: "primeros-pasos-para-aprender", createdAt: "2023-02-10T15:59:57.334Z", updatedAt: "2023-03-15T22:48:29.517Z", publishedAt: "2023-02-10T16:00:05.037Z", imagen: { data: { id: 16, attributes: { name: "blog_1.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/small_blog_1_432b643f91.jpg", hash: "small_blog_1_432b643f91", mime: "image/jpeg", name: "small_blog_1.jpg", path: null, size: 29.98, width: 500, height: 375, provider_metadata: { public_id: "small_blog_1_432b643f91", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/medium_blog_1_432b643f91.jpg", hash: "medium_blog_1_432b643f91", mime: "image/jpeg", name: "medium_blog_1.jpg", path: null, size: 54.93, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_1_432b643f91", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044723/thumbnail_blog_1_432b643f91.jpg", hash: "thumbnail_blog_1_432b643f91", mime: "image/jpeg", name: "thumbnail_blog_1.jpg", path: null, size: 7.4, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_1_432b643f91", resource_type: "image" } } }, hash: "blog_1_432b643f91", ext: ".jpg", mime: "image/jpeg", size: 50.16, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/blog_1_432b643f91.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_1_432b643f91", resource_type: "image" }, createdAt: "2023-02-10T15:58:44.567Z", updatedAt: "2023-02-10T15:58:44.567Z" } } } } }, { id: 3, attributes: { titulo: "Como cambiar una cuerda de guitarra", contenido: `Cambiar una cuerda de guitarra es una tarea sencilla pero importante que todo guitarrista debe aprender. Sigue estos sencillos pasos para cambiar una cuerda de guitarra:

Desenrolla la cuerda vieja de la clavija y ret\xEDrala de la guitarra. Inserta la nueva cuerda a trav\xE9s del agujero en la clavija. Tira de la cuerda hacia arriba para que quede tensa. Gira la clavija en sentido horario para ajustar la afinaci\xF3n de la cuerda. Corta el exceso de cuerda con un corta\xFA\xF1as o unas tijeras. Repite el proceso para cada una de las cuerdas restantes.

Recuerda que es importante cambiar tus cuerdas regularmente para mantener un buen sonido y una buena afinaci\xF3n. \xA1Listo! Ahora ya sabes c\xF3mo cambiar una cuerda de guitarra.`, url: "como-cambiar-una-cuerda-de-guitarra", createdAt: "2023-02-10T16:01:45.730Z", updatedAt: "2023-03-16T15:38:14.875Z", publishedAt: "2023-02-10T16:01:53.693Z", imagen: { data: { id: 18, attributes: { name: "blog_3.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/small_blog_3_f14bef74af.jpg", hash: "small_blog_3_f14bef74af", mime: "image/jpeg", name: "small_blog_3.jpg", path: null, size: 46.91, width: 500, height: 375, provider_metadata: { public_id: "small_blog_3_f14bef74af", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044891/medium_blog_3_f14bef74af.jpg", hash: "medium_blog_3_f14bef74af", mime: "image/jpeg", name: "medium_blog_3.jpg", path: null, size: 85.25, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_3_f14bef74af", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/thumbnail_blog_3_f14bef74af.jpg", hash: "thumbnail_blog_3_f14bef74af", mime: "image/jpeg", name: "thumbnail_blog_3.jpg", path: null, size: 11.57, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_3_f14bef74af", resource_type: "image" } } }, hash: "blog_3_f14bef74af", ext: ".jpg", mime: "image/jpeg", size: 81.28, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/blog_3_f14bef74af.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_3_f14bef74af", resource_type: "image" }, createdAt: "2023-02-10T16:01:31.687Z", updatedAt: "2023-02-10T16:01:31.687Z" } } } } }, { id: 4, attributes: { titulo: "Guitarras el\xE9ctricas y ac\xFAsticas", contenido: `Las guitarras ac\xFAsticas y el\xE9ctricas son dos tipos de guitarras muy diferentes. Las guitarras ac\xFAsticas tienen una caja de resonancia hueca que amplifica el sonido natural de las cuerdas, mientras que las guitarras el\xE9ctricas no tienen caja de resonancia y dependen de un amplificador externo para producir sonido.

Las guitarras ac\xFAsticas son ideales para tocar en solitario o en peque\xF1as reuniones, mientras que las guitarras el\xE9ctricas son m\xE1s adecuadas para tocar en bandas o en situaciones donde se requiere m\xE1s volumen y distorsi\xF3n.

Las guitarras ac\xFAsticas son m\xE1s f\xE1ciles de transportar y no requieren de ning\xFAn tipo de equipo adicional, mientras que las guitarras el\xE9ctricas necesitan un amplificador y otros accesorios para poder tocarse.

En conclusi\xF3n, la elecci\xF3n entre una guitarra ac\xFAstica o el\xE9ctrica depender\xE1 de tus necesidades y preferencias personales. Ambos tipos de guitarras tienen caracter\xEDsticas \xFAnicas que las hacen ideales para diferentes tipos de m\xFAsica y situaciones de interpretaci\xF3n. Ya sea que elijas una guitarra ac\xFAstica o el\xE9ctrica, \xA1lo m\xE1s importante es disfrutar tocando y explorando tu propia creatividad musical!`, url: "guitarras-electricas-y-acusticas", createdAt: "2023-02-10T16:02:46.023Z", updatedAt: "2023-03-16T15:43:35.332Z", publishedAt: "2023-02-10T16:02:53.975Z", imagen: { data: { id: 19, attributes: { name: "blog_4.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/small_blog_4_b646da35a6.jpg", hash: "small_blog_4_b646da35a6", mime: "image/jpeg", name: "small_blog_4.jpg", path: null, size: 63.46, width: 500, height: 375, provider_metadata: { public_id: "small_blog_4_b646da35a6", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/medium_blog_4_b646da35a6.jpg", hash: "medium_blog_4_b646da35a6", mime: "image/jpeg", name: "medium_blog_4.jpg", path: null, size: 128.34, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_4_b646da35a6", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/thumbnail_blog_4_b646da35a6.jpg", hash: "thumbnail_blog_4_b646da35a6", mime: "image/jpeg", name: "thumbnail_blog_4.jpg", path: null, size: 11.01, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_4_b646da35a6", resource_type: "image" } } }, hash: "blog_4_b646da35a6", ext: ".jpg", mime: "image/jpeg", size: 129.99, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/blog_4_b646da35a6.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_4_b646da35a6", resource_type: "image" }, createdAt: "2023-02-10T16:02:37.530Z", updatedAt: "2023-02-10T16:02:37.530Z" } } } } }, { id: 5, attributes: { titulo: "Como lograr un buen sonido", contenido: `Cuando tocas la guitarra, el sonido es uno de los aspectos m\xE1s importantes a tener en cuenta. Si quieres lograr un buen sonido, estos son algunos consejos que te pueden ayudar:

Ajusta bien tu guitarra: Aseg\xFArate de que las cuerdas est\xE9n en buenas condiciones y afinadas correctamente. Tambi\xE9n verifica que el m\xE1stil est\xE9 recto y que los trastes est\xE9n limpios para evitar zumbidos no deseados.

Usa los efectos adecuados: Si tocas con una guitarra el\xE9ctrica, los efectos pueden ser muy \xFAtiles para mejorar el sonido. Prueba diferentes efectos como la distorsi\xF3n, el reverb o el chorus para encontrar el sonido que m\xE1s te gusta.

Controla el volumen: Si tocas con una banda, es importante que ajustes bien el volumen de tu guitarra para que se mezcle bien con el resto de los instrumentos. Tocar demasiado fuerte o demasiado suave puede afectar la calidad del sonido.

Experimenta con diferentes t\xE9cnicas: Prueba diferentes t\xE9cnicas de tocar la guitarra para lograr diferentes sonidos. Por ejemplo, tocar con p\xFAa puede producir un sonido m\xE1s n\xEDtido, mientras que tocar con los dedos puede ser m\xE1s suave y emotivo.

Recuerda que no existe una f\xF3rmula m\xE1gica para lograr un buen sonido, as\xED que no tengas miedo de experimentar y encontrar tu propio estilo. \xA1Sigue practicando y divirti\xE9ndote con la guitarra!`, url: "como-lograr-un-buen-sonido", createdAt: "2023-02-10T16:03:35.397Z", updatedAt: "2023-03-16T16:06:57.239Z", publishedAt: "2023-02-10T16:03:43.174Z", imagen: { data: { id: 20, attributes: { name: "blog_5.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/small_blog_5_e248187e8f.jpg", hash: "small_blog_5_e248187e8f", mime: "image/jpeg", name: "small_blog_5.jpg", path: null, size: 38.6, width: 500, height: 375, provider_metadata: { public_id: "small_blog_5_e248187e8f", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/medium_blog_5_e248187e8f.jpg", hash: "medium_blog_5_e248187e8f", mime: "image/jpeg", name: "medium_blog_5.jpg", path: null, size: 75.8, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_5_e248187e8f", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045008/thumbnail_blog_5_e248187e8f.jpg", hash: "thumbnail_blog_5_e248187e8f", mime: "image/jpeg", name: "thumbnail_blog_5.jpg", path: null, size: 8.24, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_5_e248187e8f", resource_type: "image" } } }, hash: "blog_5_e248187e8f", ext: ".jpg", mime: "image/jpeg", size: 70.97, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/blog_5_e248187e8f.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_5_e248187e8f", resource_type: "image" }, createdAt: "2023-02-10T16:03:29.893Z", updatedAt: "2023-02-10T16:03:29.893Z" } } } } }, { id: 6, attributes: { titulo: "Aprende las partes de la guitarra", contenido: `La guitarra es un instrumento que consta de varias partes, cada una de ellas esencial para su funcionamiento. A continuaci\xF3n, te explicamos las partes principales de la guitarra:

La cabeza: es la parte superior de la guitarra, donde se encuentran las clavijas que permiten afinar las cuerdas.

El clavijero: es la pieza que sujeta las clavijas y permite ajustar la tensi\xF3n de las cuerdas para afinar el instrumento.

El m\xE1stil: es la parte alargada que se extiende desde la cabeza hasta el cuerpo de la guitarra. En \xE9l se encuentran los trastes, que dividen el m\xE1stil en diferentes notas.

El diapas\xF3n: es la parte plana y lisa del m\xE1stil sobre la que se presionan las cuerdas para producir diferentes notas.

Las cuerdas: son las que producen el sonido al vibrar y se extienden desde la cabeza hasta el puente.

El puente: es la pieza que sostiene las cuerdas en su lugar y transmite su vibraci\xF3n a la caja de resonancia.

La caja de resonancia: es la parte m\xE1s grande de la guitarra y se encarga de amplificar el sonido producido por las cuerdas.

Conocer las partes de la guitarra es esencial para poder entender su funcionamiento y aprender a tocarla de manera efectiva.`, url: "partes-de-la-guitarra", createdAt: "2023-02-10T16:04:20.106Z", updatedAt: "2023-03-16T16:16:06.098Z", publishedAt: "2023-02-10T16:04:28.032Z", imagen: { data: { id: 21, attributes: { name: "blog_6.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/small_blog_6_950d5b24b6.jpg", hash: "small_blog_6_950d5b24b6", mime: "image/jpeg", name: "small_blog_6.jpg", path: null, size: 27.75, width: 500, height: 375, provider_metadata: { public_id: "small_blog_6_950d5b24b6", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045050/medium_blog_6_950d5b24b6.jpg", hash: "medium_blog_6_950d5b24b6", mime: "image/jpeg", name: "medium_blog_6.jpg", path: null, size: 58.39, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_6_950d5b24b6", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/thumbnail_blog_6_950d5b24b6.jpg", hash: "thumbnail_blog_6_950d5b24b6", mime: "image/jpeg", name: "thumbnail_blog_6.jpg", path: null, size: 5.17, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_6_950d5b24b6", resource_type: "image" } } }, hash: "blog_6_950d5b24b6", ext: ".jpg", mime: "image/jpeg", size: 52.24, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/blog_6_950d5b24b6.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_6_950d5b24b6", resource_type: "image" }, createdAt: "2023-02-10T16:04:11.414Z", updatedAt: "2023-02-10T16:04:11.414Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 6 } } };
}
async function getPostByUrl(url) {
  switch (url) {
    default:
      return {};
    case "primeros-pasos-para-aprender":
      return { data: [{ id: 1, attributes: { titulo: "Primeros Pasos para Aprender", contenido: `Para empezar a adquirir nuevos conocimientos, es importante que identifiques lo que quieres aprender. Una vez que hayas definido tus objetivos de aprendizaje, busca recursos que te ayuden a alcanzarlos. Hay una gran cantidad de opciones disponibles, desde libros y cursos en l\xEDnea hasta videos y podcasts.

Es importante establecer metas realistas para asegurarte de mantener la motivaci\xF3n en tu proceso de aprendizaje. Define plazos para alcanzar tus objetivos y celebra cada logro, sin importar lo peque\xF1o que sea.
Experimenta con diferentes m\xE9todos de aprendizaje para encontrar lo que mejor funcione para ti. Hay muchas formas diferentes de aprender, desde el aprendizaje visual, auditivo o kinest\xE9sico.

Finalmente, buscar una comunidad de apoyo puede ser muy efectivo y motivador. Busca grupos de estudio, comunidades en l\xEDnea o personas con intereses similares para compartir tus experiencias y obtener apoyo en tu proceso de aprendizaje.
Empezar a aprender puede parecer intimidante, pero siguiendo estos consejos estar\xE1s bien encaminado para adquirir nuevos conocimientos y habilidades. \xA1No tengas miedo de dar el primer paso y comienza tu viaje de aprendizaje hoy mismo!`, url: "primeros-pasos-para-aprender", createdAt: "2023-02-10T15:59:57.334Z", updatedAt: "2023-03-15T22:48:29.517Z", publishedAt: "2023-02-10T16:00:05.037Z", imagen: { data: { id: 16, attributes: { name: "blog_1.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/small_blog_1_432b643f91.jpg", hash: "small_blog_1_432b643f91", mime: "image/jpeg", name: "small_blog_1.jpg", path: null, size: 29.98, width: 500, height: 375, provider_metadata: { public_id: "small_blog_1_432b643f91", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/medium_blog_1_432b643f91.jpg", hash: "medium_blog_1_432b643f91", mime: "image/jpeg", name: "medium_blog_1.jpg", path: null, size: 54.93, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_1_432b643f91", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044723/thumbnail_blog_1_432b643f91.jpg", hash: "thumbnail_blog_1_432b643f91", mime: "image/jpeg", name: "thumbnail_blog_1.jpg", path: null, size: 7.4, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_1_432b643f91", resource_type: "image" } } }, hash: "blog_1_432b643f91", ext: ".jpg", mime: "image/jpeg", size: 50.16, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044724/blog_1_432b643f91.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_1_432b643f91", resource_type: "image" }, createdAt: "2023-02-10T15:58:44.567Z", updatedAt: "2023-02-10T15:58:44.567Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "como-elegir-tu-proxima-guitarra":
      return { data: [{ id: 2, attributes: { titulo: "Como elegir tu proxima guitarra", contenido: `Elegir tu pr\xF3xima guitarra puede ser una tarea emocionante, pero tambi\xE9n puede ser un poco intimidante. Con tantas opciones en el mercado, es importante tener en cuenta algunos factores clave antes de tomar una decisi\xF3n final.

Lo primero que debes considerar es tu nivel de experiencia como guitarrista. Si eres un principiante, probablemente quieras buscar una guitarra que sea f\xE1cil de tocar y que se adapte a tus necesidades. Si ya eres un guitarrista experimentado, quiz\xE1s est\xE9s buscando una guitarra m\xE1s avanzada que te permita explorar diferentes estilos y t\xE9cnicas.

El tipo de m\xFAsica que tocas tambi\xE9n es un factor importante a considerar. Si tocas principalmente m\xFAsica ac\xFAstica, es probable que quieras buscar una guitarra ac\xFAstica de calidad. Si tocas principalmente m\xFAsica el\xE9ctrica, una guitarra el\xE9ctrica puede ser la mejor opci\xF3n para ti. Si tocas una variedad de estilos, es posible que quieras considerar una guitarra vers\xE1til que pueda abarcar diferentes g\xE9neros.

Otro factor a considerar es el presupuesto. Las guitarras pueden variar significativamente en precio, por lo que es importante establecer un presupuesto realista antes de comenzar tu b\xFAsqueda. Si eres un principiante, es posible que desees considerar comprar una guitarra m\xE1s econ\xF3mica para comenzar. Si eres un guitarrista experimentado, es posible que est\xE9s dispuesto a invertir m\xE1s en una guitarra de alta calidad.

Por \xFAltimo, es importante probar la guitarra antes de comprarla. La sensaci\xF3n y el sonido de una guitarra son muy personales, por lo que es importante asegurarte de que la guitarra que est\xE1s considerando se sienta c\xF3moda y suene bien para ti. Si no est\xE1s seguro de qu\xE9 buscar, no dudes en pedir ayuda a un vendedor o a un guitarrista experimentado.

Elegir la guitarra adecuada puede llevar tiempo y esfuerzo, pero al seguir estos consejos, estar\xE1s bien encaminado para encontrar la guitarra perfecta para ti y para tus necesidades musicales.`, url: "como-elegir-tu-proxima-guitarra", createdAt: "2023-02-10T16:00:53.230Z", updatedAt: "2023-03-16T15:36:00.579Z", publishedAt: "2023-02-10T16:01:08.236Z", imagen: { data: { id: 17, attributes: { name: "blog_2.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/small_blog_2_1417186423.jpg", hash: "small_blog_2_1417186423", mime: "image/jpeg", name: "small_blog_2.jpg", path: null, size: 47.35, width: 500, height: 375, provider_metadata: { public_id: "small_blog_2_1417186423", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/medium_blog_2_1417186423.jpg", hash: "medium_blog_2_1417186423", mime: "image/jpeg", name: "medium_blog_2.jpg", path: null, size: 87.87, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_2_1417186423", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044843/thumbnail_blog_2_1417186423.jpg", hash: "thumbnail_blog_2_1417186423", mime: "image/jpeg", name: "thumbnail_blog_2.jpg", path: null, size: 10.78, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_2_1417186423", resource_type: "image" } } }, hash: "blog_2_1417186423", ext: ".jpg", mime: "image/jpeg", size: 85.5, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044844/blog_2_1417186423.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_2_1417186423", resource_type: "image" }, createdAt: "2023-02-10T16:00:45.062Z", updatedAt: "2023-02-10T16:00:45.062Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "como-cambiar-una-cuerda-de-guitarra":
      return { data: [{ id: 3, attributes: { titulo: "Como cambiar una cuerda de guitarra", contenido: `Cambiar una cuerda de guitarra es una tarea sencilla pero importante que todo guitarrista debe aprender. Sigue estos sencillos pasos para cambiar una cuerda de guitarra:

Desenrolla la cuerda vieja de la clavija y ret\xEDrala de la guitarra. Inserta la nueva cuerda a trav\xE9s del agujero en la clavija. Tira de la cuerda hacia arriba para que quede tensa. Gira la clavija en sentido horario para ajustar la afinaci\xF3n de la cuerda. Corta el exceso de cuerda con un corta\xFA\xF1as o unas tijeras. Repite el proceso para cada una de las cuerdas restantes.

Recuerda que es importante cambiar tus cuerdas regularmente para mantener un buen sonido y una buena afinaci\xF3n. \xA1Listo! Ahora ya sabes c\xF3mo cambiar una cuerda de guitarra.`, url: "como-cambiar-una-cuerda-de-guitarra", createdAt: "2023-02-10T16:01:45.730Z", updatedAt: "2023-03-16T15:38:14.875Z", publishedAt: "2023-02-10T16:01:53.693Z", imagen: { data: { id: 18, attributes: { name: "blog_3.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/small_blog_3_f14bef74af.jpg", hash: "small_blog_3_f14bef74af", mime: "image/jpeg", name: "small_blog_3.jpg", path: null, size: 46.91, width: 500, height: 375, provider_metadata: { public_id: "small_blog_3_f14bef74af", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044891/medium_blog_3_f14bef74af.jpg", hash: "medium_blog_3_f14bef74af", mime: "image/jpeg", name: "medium_blog_3.jpg", path: null, size: 85.25, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_3_f14bef74af", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/thumbnail_blog_3_f14bef74af.jpg", hash: "thumbnail_blog_3_f14bef74af", mime: "image/jpeg", name: "thumbnail_blog_3.jpg", path: null, size: 11.57, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_3_f14bef74af", resource_type: "image" } } }, hash: "blog_3_f14bef74af", ext: ".jpg", mime: "image/jpeg", size: 81.28, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044890/blog_3_f14bef74af.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_3_f14bef74af", resource_type: "image" }, createdAt: "2023-02-10T16:01:31.687Z", updatedAt: "2023-02-10T16:01:31.687Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "guitarras-electricas-y-acusticas":
      return { data: [{ id: 4, attributes: { titulo: "Guitarras el\xE9ctricas y ac\xFAsticas", contenido: `Las guitarras ac\xFAsticas y el\xE9ctricas son dos tipos de guitarras muy diferentes. Las guitarras ac\xFAsticas tienen una caja de resonancia hueca que amplifica el sonido natural de las cuerdas, mientras que las guitarras el\xE9ctricas no tienen caja de resonancia y dependen de un amplificador externo para producir sonido.

Las guitarras ac\xFAsticas son ideales para tocar en solitario o en peque\xF1as reuniones, mientras que las guitarras el\xE9ctricas son m\xE1s adecuadas para tocar en bandas o en situaciones donde se requiere m\xE1s volumen y distorsi\xF3n.

Las guitarras ac\xFAsticas son m\xE1s f\xE1ciles de transportar y no requieren de ning\xFAn tipo de equipo adicional, mientras que las guitarras el\xE9ctricas necesitan un amplificador y otros accesorios para poder tocarse.

En conclusi\xF3n, la elecci\xF3n entre una guitarra ac\xFAstica o el\xE9ctrica depender\xE1 de tus necesidades y preferencias personales. Ambos tipos de guitarras tienen caracter\xEDsticas \xFAnicas que las hacen ideales para diferentes tipos de m\xFAsica y situaciones de interpretaci\xF3n. Ya sea que elijas una guitarra ac\xFAstica o el\xE9ctrica, \xA1lo m\xE1s importante es disfrutar tocando y explorando tu propia creatividad musical!`, url: "guitarras-electricas-y-acusticas", createdAt: "2023-02-10T16:02:46.023Z", updatedAt: "2023-03-16T15:43:35.332Z", publishedAt: "2023-02-10T16:02:53.975Z", imagen: { data: { id: 19, attributes: { name: "blog_4.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/small_blog_4_b646da35a6.jpg", hash: "small_blog_4_b646da35a6", mime: "image/jpeg", name: "small_blog_4.jpg", path: null, size: 63.46, width: 500, height: 375, provider_metadata: { public_id: "small_blog_4_b646da35a6", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/medium_blog_4_b646da35a6.jpg", hash: "medium_blog_4_b646da35a6", mime: "image/jpeg", name: "medium_blog_4.jpg", path: null, size: 128.34, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_4_b646da35a6", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/thumbnail_blog_4_b646da35a6.jpg", hash: "thumbnail_blog_4_b646da35a6", mime: "image/jpeg", name: "thumbnail_blog_4.jpg", path: null, size: 11.01, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_4_b646da35a6", resource_type: "image" } } }, hash: "blog_4_b646da35a6", ext: ".jpg", mime: "image/jpeg", size: 129.99, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676044956/blog_4_b646da35a6.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_4_b646da35a6", resource_type: "image" }, createdAt: "2023-02-10T16:02:37.530Z", updatedAt: "2023-02-10T16:02:37.530Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "como-lograr-un-buen-sonido":
      return { data: [{ id: 5, attributes: { titulo: "Como lograr un buen sonido", contenido: `Cuando tocas la guitarra, el sonido es uno de los aspectos m\xE1s importantes a tener en cuenta. Si quieres lograr un buen sonido, estos son algunos consejos que te pueden ayudar:

Ajusta bien tu guitarra: Aseg\xFArate de que las cuerdas est\xE9n en buenas condiciones y afinadas correctamente. Tambi\xE9n verifica que el m\xE1stil est\xE9 recto y que los trastes est\xE9n limpios para evitar zumbidos no deseados.

Usa los efectos adecuados: Si tocas con una guitarra el\xE9ctrica, los efectos pueden ser muy \xFAtiles para mejorar el sonido. Prueba diferentes efectos como la distorsi\xF3n, el reverb o el chorus para encontrar el sonido que m\xE1s te gusta.

Controla el volumen: Si tocas con una banda, es importante que ajustes bien el volumen de tu guitarra para que se mezcle bien con el resto de los instrumentos. Tocar demasiado fuerte o demasiado suave puede afectar la calidad del sonido.

Experimenta con diferentes t\xE9cnicas: Prueba diferentes t\xE9cnicas de tocar la guitarra para lograr diferentes sonidos. Por ejemplo, tocar con p\xFAa puede producir un sonido m\xE1s n\xEDtido, mientras que tocar con los dedos puede ser m\xE1s suave y emotivo.

Recuerda que no existe una f\xF3rmula m\xE1gica para lograr un buen sonido, as\xED que no tengas miedo de experimentar y encontrar tu propio estilo. \xA1Sigue practicando y divirti\xE9ndote con la guitarra!`, url: "como-lograr-un-buen-sonido", createdAt: "2023-02-10T16:03:35.397Z", updatedAt: "2023-03-16T16:06:57.239Z", publishedAt: "2023-02-10T16:03:43.174Z", imagen: { data: { id: 20, attributes: { name: "blog_5.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/small_blog_5_e248187e8f.jpg", hash: "small_blog_5_e248187e8f", mime: "image/jpeg", name: "small_blog_5.jpg", path: null, size: 38.6, width: 500, height: 375, provider_metadata: { public_id: "small_blog_5_e248187e8f", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/medium_blog_5_e248187e8f.jpg", hash: "medium_blog_5_e248187e8f", mime: "image/jpeg", name: "medium_blog_5.jpg", path: null, size: 75.8, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_5_e248187e8f", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045008/thumbnail_blog_5_e248187e8f.jpg", hash: "thumbnail_blog_5_e248187e8f", mime: "image/jpeg", name: "thumbnail_blog_5.jpg", path: null, size: 8.24, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_5_e248187e8f", resource_type: "image" } } }, hash: "blog_5_e248187e8f", ext: ".jpg", mime: "image/jpeg", size: 70.97, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045009/blog_5_e248187e8f.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_5_e248187e8f", resource_type: "image" }, createdAt: "2023-02-10T16:03:29.893Z", updatedAt: "2023-02-10T16:03:29.893Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
    case "partes-de-la-guitarra":
      return { data: [{ id: 6, attributes: { titulo: "Aprende las partes de la guitarra", contenido: `La guitarra es un instrumento que consta de varias partes, cada una de ellas esencial para su funcionamiento. A continuaci\xF3n, te explicamos las partes principales de la guitarra:

La cabeza: es la parte superior de la guitarra, donde se encuentran las clavijas que permiten afinar las cuerdas.

El clavijero: es la pieza que sujeta las clavijas y permite ajustar la tensi\xF3n de las cuerdas para afinar el instrumento.

El m\xE1stil: es la parte alargada que se extiende desde la cabeza hasta el cuerpo de la guitarra. En \xE9l se encuentran los trastes, que dividen el m\xE1stil en diferentes notas.

El diapas\xF3n: es la parte plana y lisa del m\xE1stil sobre la que se presionan las cuerdas para producir diferentes notas.

Las cuerdas: son las que producen el sonido al vibrar y se extienden desde la cabeza hasta el puente.

El puente: es la pieza que sostiene las cuerdas en su lugar y transmite su vibraci\xF3n a la caja de resonancia.

La caja de resonancia: es la parte m\xE1s grande de la guitarra y se encarga de amplificar el sonido producido por las cuerdas.

Conocer las partes de la guitarra es esencial para poder entender su funcionamiento y aprender a tocarla de manera efectiva.`, url: "partes-de-la-guitarra", createdAt: "2023-02-10T16:04:20.106Z", updatedAt: "2023-03-16T16:16:06.098Z", publishedAt: "2023-02-10T16:04:28.032Z", imagen: { data: { id: 21, attributes: { name: "blog_6.jpg", alternativeText: null, caption: null, width: 800, height: 600, formats: { small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/small_blog_6_950d5b24b6.jpg", hash: "small_blog_6_950d5b24b6", mime: "image/jpeg", name: "small_blog_6.jpg", path: null, size: 27.75, width: 500, height: 375, provider_metadata: { public_id: "small_blog_6_950d5b24b6", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045050/medium_blog_6_950d5b24b6.jpg", hash: "medium_blog_6_950d5b24b6", mime: "image/jpeg", name: "medium_blog_6.jpg", path: null, size: 58.39, width: 750, height: 563, provider_metadata: { public_id: "medium_blog_6_950d5b24b6", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/thumbnail_blog_6_950d5b24b6.jpg", hash: "thumbnail_blog_6_950d5b24b6", mime: "image/jpeg", name: "thumbnail_blog_6.jpg", path: null, size: 5.17, width: 208, height: 156, provider_metadata: { public_id: "thumbnail_blog_6_950d5b24b6", resource_type: "image" } } }, hash: "blog_6_950d5b24b6", ext: ".jpg", mime: "image/jpeg", size: 52.24, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676045049/blog_6_950d5b24b6.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "blog_6_950d5b24b6", resource_type: "image" }, createdAt: "2023-02-10T16:04:11.414Z", updatedAt: "2023-02-10T16:04:11.414Z" } } } } }], meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } } };
  }
}

// app/models/curso.server.js
async function getCurso() {
  return { data: { id: 1, attributes: { titulo: "Cursos con hasta 30% de descuento", contenido: "\xBFQueres mejorar tus habilidades con la guitarra? \xA1Aprovecha nuestros cursos con hasta un 30% de descuento! Aprende de nuestros expertos en un ambiente divertido y amigable, y convertite en un m\xFAsico a\xFAn mejor. No pierdas la oportunidad de crecer en tu pasi\xF3n, \xA1inscr\xEDbite hoy mismo!", createdAt: "2023-02-10T16:22:50.149Z", updatedAt: "2023-03-16T15:45:48.958Z", publishedAt: "2023-02-10T16:22:57.133Z", imagen: { data: { id: 22, attributes: { name: "cursos_bg.jpg", alternativeText: null, caption: null, width: 1200, height: 470, formats: { large: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676046159/large_cursos_bg_9da1c9679f.jpg", hash: "large_cursos_bg_9da1c9679f", mime: "image/jpeg", name: "large_cursos_bg.jpg", path: null, size: 40.06, width: 1e3, height: 392, provider_metadata: { public_id: "large_cursos_bg_9da1c9679f", resource_type: "image" } }, small: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676046159/small_cursos_bg_9da1c9679f.jpg", hash: "small_cursos_bg_9da1c9679f", mime: "image/jpeg", name: "small_cursos_bg.jpg", path: null, size: 15.17, width: 500, height: 196, provider_metadata: { public_id: "small_cursos_bg_9da1c9679f", resource_type: "image" } }, medium: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676046159/medium_cursos_bg_9da1c9679f.jpg", hash: "medium_cursos_bg_9da1c9679f", mime: "image/jpeg", name: "medium_cursos_bg.jpg", path: null, size: 26.82, width: 750, height: 294, provider_metadata: { public_id: "medium_cursos_bg_9da1c9679f", resource_type: "image" } }, thumbnail: { ext: ".jpg", url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676046159/thumbnail_cursos_bg_9da1c9679f.jpg", hash: "thumbnail_cursos_bg_9da1c9679f", mime: "image/jpeg", name: "thumbnail_cursos_bg.jpg", path: null, size: 5.47, width: 245, height: 96, provider_metadata: { public_id: "thumbnail_cursos_bg_9da1c9679f", resource_type: "image" } } }, hash: "cursos_bg_9da1c9679f", ext: ".jpg", mime: "image/jpeg", size: 51.7, url: "https://res.cloudinary.com/dyqve2cqh/image/upload/v1676046160/cursos_bg_9da1c9679f.jpg", previewUrl: null, provider: "cloudinary", provider_metadata: { public_id: "cursos_bg_9da1c9679f", resource_type: "image" }, createdAt: "2023-02-10T16:22:41.078Z", updatedAt: "2023-02-10T16:22:41.078Z" } } } } }, meta: {} };
}

// app/components/curso.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  var _a, _b;
  let { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("style", { jsx: "true", children: `.curso { 
        background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${(_b = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes) == null ? void 0 : _b.url})}` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 10,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var curso_default = Curso;

// app/components/post.jsx
var import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/components/post.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Post({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.formats.small.url, alt: titulo }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { className: "enlace", to: `/blog/${url}`, children: "Leer m\xE1s" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
var post_default = Post;

// app/components/listado-posts.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      post_default,
      {
        post: post.attributes
      },
      post.id,
      !1,
      {
        fileName: "app/components/listado-posts.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-BDWU6GON.css";

// app/styles/curso.css
var curso_default2 = "/build/_assets/curso-WYUSFDQR.css";

// app/routes/index.jsx
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta6() {
}
function links5() {
  return [
    { rel: "stylesheet", href: guitarra_default },
    { rel: "stylesheet", href: blog_default },
    { rel: "stylesheet", href: curso_default2 }
  ];
}
async function loader3() {
  let [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ListadoGuitarras, { guitarras }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      curso_default,
      {
        curso: curso.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ListadoPosts, { posts }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
var routes_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links6
});
var import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function links6() {
  return [
    { rel: "stylesheet", href: blog_default }
  ];
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// app/routes/blog/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => postUrl_default,
  loader: () => loader4,
  meta: () => meta7
});
var import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function loader4({ params }) {
  let { postUrl } = params, post = await getPostByUrl(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado"
    });
  return post;
}
function meta7({ data }) {
  return data ? {
    title: `GuitarBA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`
  } : {
    title: "GuitarBA - Post no encontrado",
    description: "GuitarBA - Post no encontrado"
  };
}
function PostUrl() {
  var _a;
  let post = (0, import_react19.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = (_a = post == null ? void 0 : post.data[0]) == null ? void 0 : _a.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: titulo }, void 0, !1, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$postUrl.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$postUrl.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this);
}
var postUrl_default = PostUrl;

// app/routes/blog/index.jsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => blog_default3,
  loader: () => loader5,
  meta: () => meta8
});
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function meta8() {
  return {
    title: "GuitarLA - Blog",
    description: "GuitarLA, blog de musica y venta de guitarras"
  };
}
async function loader5() {
  return (await getPosts()).data;
}
function Blog2() {
  let posts = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ListadoPosts, { posts }, void 0, !1, {
    fileName: "app/routes/blog/index.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this);
}
var blog_default3 = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bee03124", entry: { module: "/build/entry.client-4A6BULEO.js", imports: ["/build/_shared/chunk-XOJ56Q53.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PSDU27G2.js", imports: ["/build/_shared/chunk-YY7UFQZT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-VXGHIO4R.js", imports: ["/build/_shared/chunk-TRCRP7KH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$postUrl": { id: "routes/blog/$postUrl", parentId: "routes/blog", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$postUrl-DUMHMVD4.js", imports: ["/build/_shared/chunk-IVLMGTT3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-KM7EFSWJ.js", imports: ["/build/_shared/chunk-D4TCLSPB.js", "/build/_shared/chunk-IVLMGTT3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-TMWEVY44.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-DRKY2XE6.js", imports: ["/build/_shared/chunk-HZCSEP4Q.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/$guitarraUrl": { id: "routes/guitarras/$guitarraUrl", parentId: "routes/guitarras", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras/$guitarraUrl-R5XEXYCR.js", imports: ["/build/_shared/chunk-YY7UFQZT.js", "/build/_shared/chunk-I5MTMTWE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/index": { id: "routes/guitarras/index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras/index-VXS5NVWW.js", imports: ["/build/_shared/chunk-PLT5YGIX.js", "/build/_shared/chunk-I5MTMTWE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VFNDE4VI.js", imports: ["/build/_shared/chunk-TRCRP7KH.js", "/build/_shared/chunk-D4TCLSPB.js", "/build/_shared/chunk-IVLMGTT3.js", "/build/_shared/chunk-HZCSEP4Q.js", "/build/_shared/chunk-PLT5YGIX.js", "/build/_shared/chunk-I5MTMTWE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-IF3CU3YR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-BEE03124.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/guitarras/$guitarraUrl": {
    id: "routes/guitarras/$guitarraUrl",
    parentId: "routes/guitarras",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarraUrl_exports
  },
  "routes/guitarras/index": {
    id: "routes/guitarras/index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_exports2
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$postUrl": {
    id: "routes/blog/$postUrl",
    parentId: "routes/blog",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
