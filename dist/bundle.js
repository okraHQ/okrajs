!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("Okra requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(n,e){var t={loader:null,iframe:null,baseUrl:"https://v3-app.okra.ng",url:"",onSuccess:null,id:null,onClose:null,version:2,init:function(){var e=this;e.addOverlay(),e.setIframe(),e.listen()},removeFunctions:function(e){var t=JSON.stringify(e);return JSON.parse(t)},buildWithShortUrl:function(e){var t=this;t.id="okra-iframe-"+Math.floor(1e4*Math.random()),t.url=t.baseUrl+"/"+e.short_url+"?&withOptions=true&isIframe=true";var a=e;a.hideCardOnExit=!0,a.iframeData=!0,a.ref=e.short_url,a.source="integration",delete a.short_url,t.cleanObj=a,t.onSuccess=e&&e.onSuccess,t.onClose=e&&e.onClose,t.onError=e&&e.onError,t.beforeClose=e&&e.beforeClose,t.init()},buildWithOptions:function(e){var t=this;t.id="okra-iframe-"+Math.floor(1e4*Math.random());var a=e;a.env="production"===e.env?"production":"production-sandbox",a.source="integration",a.hideCardOnExit=!0,a.iframeData=!0,t.cleanObj=a,t.url=t.baseUrl+"/?isIframe=true&withOptions=true",t.onSuccess=e&&e.onSuccess,t.onClose=e&&e.onClose,t.onError=e&&e.onError,t.beforeClose=e&&e.beforeClose,t.init()},sendObj:function(e){var t=this,a=document.getElementById(t.iframe.id);a.onload=function(){a.contentWindow.postMessage(e,t.url)}},listen:function(){n.addEventListener("message",this)},handleEvent:function(e){var t=this;e.origin.startsWith(t.baseUrl)&&(e&&e.data&&e.data.close?(t.forceClose(t),t.onClose&&t.onClose()):e&&e.data&&e.data&&e.data.success?t.onSuccess&&t.onSuccess(e&&e.data):e&&e.data&&e.data&&e.data.error?t.onError&&t.onError(e&&e.data):e&&e.data&&e.data&&e.data.beforeClose?t.beforeClose&&t.beforeClose(e&&e.data):e&&e.data&&e.data.ifameLoaded&&t.cleanObj&&t.sendObj(t.removeFunctions(t.cleanObj)))},addOverlay:function(){var e=document.createElement("div");e.id="okra-base-"+Math.floor(1e4*Math.random()),e.style.cssText="background-color: rgba(98, 103, 109, 0.54); box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 5px 3px; position: fixed;width: 100%; height: 100%; top: 0; left: 0; z-index: 9999999; overflow: hidden;";(this.loader=e).innerHTML='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Okra Spinner</title> <style> .app-loader { margin: 200px 0; text-align: center; color: white; } @keyframes app-loader__spinner { 0% { opacity: 1; } 100% { opacity: 0; } } @-webkit-keyframes app-loader__spinner { 0% { opacity: 1; } 100% { opacity: 0; } } .app-loader__spinner { position: relative; display: inline-block; } .app-loader__spinner div { left: 95px; top: 35px; position: absolute; -webkit-animation: app-loader__spinner linear 1s infinite; animation: app-loader__spinner linear 1s infinite; background: white; width: 10px; height: 30px; border-radius: 40%; -webkit-transform-origin: 5px 65px; transform-origin: 5px 65px; } .app-loader__spinner div:nth-child(1) { -webkit-transform: rotate(0deg); transform: rotate(0deg); -webkit-animation-delay: -0.916666666666667s; animation-delay: -0.916666666666667s; } .app-loader__spinner div:nth-child(2) { -webkit-transform: rotate(30deg); transform: rotate(30deg); -webkit-animation-delay: -0.833333333333333s; animation-delay: -0.833333333333333s; } .app-loader__spinner div:nth-child(3) { -webkit-transform: rotate(60deg); transform: rotate(60deg); -webkit-animation-delay: -0.75s; animation-delay: -0.75s; } .app-loader__spinner div:nth-child(4) { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-animation-delay: -0.666666666666667s; animation-delay: -0.666666666666667s; } .app-loader__spinner div:nth-child(5) { -webkit-transform: rotate(120deg); transform: rotate(120deg); -webkit-animation-delay: -0.583333333333333s; animation-delay: -0.583333333333333s; } .app-loader__spinner div:nth-child(6) { -webkit-transform: rotate(150deg); transform: rotate(150deg); -webkit-animation-delay: -0.5s; animation-delay: -0.5s; } .app-loader__spinner div:nth-child(7) { -webkit-transform: rotate(180deg); transform: rotate(180deg); -webkit-animation-delay: -0.416666666666667s; animation-delay: -0.416666666666667s; } .app-loader__spinner div:nth-child(8) { -webkit-transform: rotate(210deg); transform: rotate(210deg); -webkit-animation-delay: -0.333333333333333s; animation-delay: -0.333333333333333s; } .app-loader__spinner div:nth-child(9) { -webkit-transform: rotate(240deg); transform: rotate(240deg); -webkit-animation-delay: -0.25s; animation-delay: -0.25s; } .app-loader__spinner div:nth-child(10) { -webkit-transform: rotate(270deg); transform: rotate(270deg); -webkit-animation-delay: -0.166666666666667s; animation-delay: -0.166666666666667s; } .app-loader__spinner div:nth-child(11) { -webkit-transform: rotate(300deg); transform: rotate(300deg); -webkit-animation-delay: -0.083333333333333s; animation-delay: -0.083333333333333s; } .app-loader__spinner div:nth-child(12) { -webkit-transform: rotate(330deg); transform: rotate(330deg); -webkit-animation-delay: 0s; animation-delay: 0s; } .app-loader__spinner { width: 40px; height: 40px; -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px); transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px); } </style> </head> <body> <div id="app-loader" class="app-loader"> <div id="spinner" class="app-loader__spinner"> <div></div><div></div><div></div><div></div><div></div><div></div><div> </div><div></div><div></div><div></div><div></div><div></div> </div> </div> </body> </html>',document.body.appendChild(e)},removeOverlay:function(e){(e=e||this)&&e.loader&&e.loader.id&&(document.querySelector("#"+e.loader.id).outerHTML="")},setIframe:function(){var e=this,t=document.createElement("iframe");t.setAttribute("frameBorder","0"),t.setAttribute("allowtransparency","true"),t.id=e.id,t.name="okra-popup-"+t.id,t.style.cssText="z-index: 9999999999999999999999;background: transparent; border: 0px none transparent;overflow-x: hidden;overflow-y: hidden;margin: 0;padding: 0;-webkit-tap-highlight-color: transparent;-webkit-touch-callout: none;position: fixed;left: 0;top: 0;width: 100%;height: 100%;",this.iframe=t,document.body.appendChild(t);var a=t.contentDocument||t.contentWindow;a.document&&(a=a.document);var n=setInterval(function(){a&&"complete"===a.readyState&&(document.getElementById(t.id).src=e.url,clearInterval(n))},1e3)},closeIframe:function(e,t){var a;t.removeOverlay(t),e&&e.outerHTML&&((a=e.previousSibling)&&t.iframe&&(t.iframe="",a.parentElement.removeChild(e)))},forceClose:function(e){var t=this.Okra||e,a=t.iframe;a&&t.closeIframe(a,t),n.removeEventListener("message",t)}},a=n.Okra;return t.noConflict=function(e){return e&&n.Okra===t&&(n.Okra=a),t},void 0===e&&(n.Okra=t),t});