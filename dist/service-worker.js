/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "743d64af2953b272c85529a78e3568a4"
  },
  {
    "url": "about/index.html",
    "revision": "2b043b56216acd751b2bd67d40d639e7"
  },
  {
    "url": "assets/css/0.styles.632acba8.css",
    "revision": "4c7353c7273eb2efce1c98b84dfcdaaa"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vczh.3d45f63a.png",
    "revision": "3d45f63a9f3671c653b4fc135505811c"
  },
  {
    "url": "assets/js/10.f6d0dd2e.js",
    "revision": "2856f22c16be32cadebe77328c2e1467"
  },
  {
    "url": "assets/js/11.8ad7c713.js",
    "revision": "aa12ab6467de9af209bc71d3771fb6e0"
  },
  {
    "url": "assets/js/12.6f6274f3.js",
    "revision": "52fc6bd918035b254233bb0a9b34a17e"
  },
  {
    "url": "assets/js/13.7a922dc4.js",
    "revision": "377e00054d07e3cb3e0b5fb1e843575c"
  },
  {
    "url": "assets/js/14.668c007d.js",
    "revision": "e7f5ef581d6d54f832bc0ac1aa61b00d"
  },
  {
    "url": "assets/js/15.cb650e22.js",
    "revision": "4e7d21c6efc4e8a41fa13b06c7820724"
  },
  {
    "url": "assets/js/16.5a46c6f4.js",
    "revision": "ec5f8373a9e06dcb430754cf93e525f8"
  },
  {
    "url": "assets/js/17.4cab1d6a.js",
    "revision": "e1ab46624b2bce444f8d74d66caca585"
  },
  {
    "url": "assets/js/18.d79ebb23.js",
    "revision": "01ab3b9490dd25e553039a412460e83f"
  },
  {
    "url": "assets/js/19.dd2b05fc.js",
    "revision": "ea761182a307c558dbb7351ce54a80cc"
  },
  {
    "url": "assets/js/20.fcb401bb.js",
    "revision": "c10c79e026ff9ade511ff6f3a44b8720"
  },
  {
    "url": "assets/js/21.b1ab1180.js",
    "revision": "f6d342114bf0ced24b05375ad6d7d197"
  },
  {
    "url": "assets/js/22.4e3a0df5.js",
    "revision": "198eaa79bad6cc9c3093c98b1fb94755"
  },
  {
    "url": "assets/js/23.c0e1470f.js",
    "revision": "a391b4188e67c47b2671a455c62f595b"
  },
  {
    "url": "assets/js/24.09fb650c.js",
    "revision": "a61eb21b486d5af50d3ff088d0babeff"
  },
  {
    "url": "assets/js/25.7eaae90c.js",
    "revision": "15030ae51065730167387a556deb9204"
  },
  {
    "url": "assets/js/26.bb9276f2.js",
    "revision": "ac439f40cb3f973fae9260471452a016"
  },
  {
    "url": "assets/js/3.6bcbe18f.js",
    "revision": "9cddb761933a078b5f826b09ab37c7df"
  },
  {
    "url": "assets/js/4.b79bcec9.js",
    "revision": "0fca3c14662efc726434d3f14442b999"
  },
  {
    "url": "assets/js/5.4b3513b4.js",
    "revision": "3d2d87865b56558f450dfb5b0098466a"
  },
  {
    "url": "assets/js/6.f7a9baca.js",
    "revision": "8b432a3a192d1b50d379bca2e04b5100"
  },
  {
    "url": "assets/js/7.759c48ef.js",
    "revision": "3f8bbcf263c00a2cc5e67ff212f2f979"
  },
  {
    "url": "assets/js/8.efddb1ee.js",
    "revision": "c8af88ac076c8d8103564f6a4170958f"
  },
  {
    "url": "assets/js/9.36115238.js",
    "revision": "4d679448fcfb21b520982ee4176aec91"
  },
  {
    "url": "assets/js/app.8428c490.js",
    "revision": "e4a8de4019747df878c56a4d6186b140"
  },
  {
    "url": "assets/js/vuejs-paginate.920158c8.js",
    "revision": "713f27465f2bf41df775782356c0feaa"
  },
  {
    "url": "debug/index.html",
    "revision": "82e0de43576163cb9bf02767eab1a84d"
  },
  {
    "url": "index.html",
    "revision": "6afbdb440ca55192527b061bc0afddae"
  },
  {
    "url": "page/2/index.html",
    "revision": "7d30f50e0fb7fcf703cd51a11aeb543c"
  },
  {
    "url": "posts/front-end/moment-js.html",
    "revision": "2195f7855c75cd85aa4481fa5b1c85fb"
  },
  {
    "url": "posts/front-end/vue-debug.html",
    "revision": "662b72f00c925a24fa2ba43d5184e23c"
  },
  {
    "url": "posts/front-end/vue-tips.html",
    "revision": "da37c462178d2f6e2e1f482c7be52796"
  },
  {
    "url": "posts/markdown/empty-markdown-demo.html",
    "revision": "7bced4248cf476078b97e76272771000"
  },
  {
    "url": "posts/markdown/markdown-code-demo.html",
    "revision": "9649a6d868c23362265b7c441394d09c"
  },
  {
    "url": "posts/markdown/markdown-demo-2.html",
    "revision": "42affa5c303b339fd76b7271f4db8f64"
  },
  {
    "url": "posts/markdown/markdown-demo.html",
    "revision": "65b4b19a8e2dba577d1c55aadfb5452a"
  },
  {
    "url": "posts/markdown/markdown-with-so-many-tags.html",
    "revision": "fb14812aa2e560db6edf5f241ee7ee29"
  },
  {
    "url": "posts/tips-for-vuepress-theme.html",
    "revision": "fd7127263aff7bdb58a925753f0dc68e"
  },
  {
    "url": "posts/vuepress-theme-blog-vuetify.html",
    "revision": "dd672b1cee70c60406c2ba64c69dcdec"
  },
  {
    "url": "posts/vuepress-theme-blog/frontmatter-in-vuepress.html",
    "revision": "79667af70745d41488e4ada48f2293d8"
  },
  {
    "url": "posts/vuepress-theme-blog/markdown-slot.html",
    "revision": "ca31e1631ea95b149a97c449c8ab8bfe"
  },
  {
    "url": "posts/vuepress-theme-blog/writing-a-vuepress-theme.html",
    "revision": "9fe4e861cee0ce9a7d1ff584eec44be4"
  },
  {
    "url": "tags/am/index.html",
    "revision": "b3a8755058b2f02d13a6e25a95f849f0"
  },
  {
    "url": "tags/and/index.html",
    "revision": "025938762ea0b1b29282778f9eaf13a9"
  },
  {
    "url": "tags/be/index.html",
    "revision": "e6f66081777c7df1fc360de66f4b5927"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "acae5dea2a73f29f0a1f2838dbac62a4"
  },
  {
    "url": "tags/code/index.html",
    "revision": "9a4706594a557fc689b8b207bfee0b62"
  },
  {
    "url": "tags/enough/index.html",
    "revision": "428f1d3790ba517ac80b680675b502ac"
  },
  {
    "url": "tags/frontmatter/index.html",
    "revision": "d554ee9953e368ba11578e914abff078"
  },
  {
    "url": "tags/i/index.html",
    "revision": "e76e210c596c87033d457a38f0b22000"
  },
  {
    "url": "tags/index.html",
    "revision": "5868c2495e93021e2f3f72d5b603cbdc"
  },
  {
    "url": "tags/is/index.html",
    "revision": "dc107ce59f68368c00e0c9c00f5e8b62"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "43198a304379119506ad3253075523f8"
  },
  {
    "url": "tags/kidding/index.html",
    "revision": "312595d61ce24e7ecb21dafebc5b458e"
  },
  {
    "url": "tags/many/index.html",
    "revision": "d4fdecc91d858babf5a09b6bc8768d59"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "a28d82153c9c6172b7d757669b15c74f"
  },
  {
    "url": "tags/more/index.html",
    "revision": "5b08d648a96c4ec43d1d00bb2ef97680"
  },
  {
    "url": "tags/never/index.html",
    "revision": "11d527f933a57f144c21d5be58e5b9e6"
  },
  {
    "url": "tags/not/index.html",
    "revision": "0efe5842ca410dba43580a043138e613"
  },
  {
    "url": "tags/pages/index.html",
    "revision": "24b675016356f8bb46b2c398fb957f7f"
  },
  {
    "url": "tags/so/index.html",
    "revision": "2ccd648e6759ada7db5d799a95d7c694"
  },
  {
    "url": "tags/tag/index.html",
    "revision": "3fc03e7841dc45216927171612ad317c"
  },
  {
    "url": "tags/tags/index.html",
    "revision": "7b5c10968e6c07687cd2d4b36c5a0062"
  },
  {
    "url": "tags/test/index.html",
    "revision": "1260438df479bc81aa0e40afefe26fcf"
  },
  {
    "url": "tags/the/index.html",
    "revision": "b8c0d4e97e708516d6145c5ddb712ae0"
  },
  {
    "url": "tags/theme/index.html",
    "revision": "05d7e193b0890170ad7895c3fb12275c"
  },
  {
    "url": "tags/there/index.html",
    "revision": "d578be2518305c1e0198230eb359e9fa"
  },
  {
    "url": "tags/this/index.html",
    "revision": "9a6d4cbece31802d8df79c4993048bc4"
  },
  {
    "url": "tags/to/index.html",
    "revision": "a861d748ecc8484b8d65edaa6f1861ff"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "0fce64f034c67938a5a58756840906bd"
  },
  {
    "url": "tags/vuepress-theme-blog-vuetify/index.html",
    "revision": "a20e0493d3e7cb5e64c4ba437758f2fe"
  },
  {
    "url": "tags/vuepress-theme-blog/index.html",
    "revision": "78b567477b229b660f82cbb7fe56763e"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "5d5bc3aeb02e54da49eb0b7defb1e091"
  },
  {
    "url": "tags/will/index.html",
    "revision": "63e603626e57b79d33799efe0fa189d0"
  },
  {
    "url": "tags/with/index.html",
    "revision": "dc289b0c67ba3bd654b69574e60a3b71"
  },
  {
    "url": "tags/yet/index.html",
    "revision": "4938be3928de10cc0ec2f6e22522ea21"
  },
  {
    "url": "tags/you/index.html",
    "revision": "05a2276d298edd4f46d85c376031d75d"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "c6b539729b284e974b3aa1f98edf5c50"
  },
  {
    "url": "theme/appbar_background.png",
    "revision": "3edd40fb35f67840f566cd5282a50ca7"
  },
  {
    "url": "theme/avatar.png",
    "revision": "ee0c602f873df478ff37cf295d0f6e04"
  },
  {
    "url": "theme/bilibili_dark.svg",
    "revision": "8d2493140b1bc2b88433b113a7d0326d"
  },
  {
    "url": "theme/bilibili.svg",
    "revision": "11f820cb1f6d66d5be3ae21a4ef4939a"
  },
  {
    "url": "theme/favicon.png",
    "revision": "ee0c602f873df478ff37cf295d0f6e04"
  },
  {
    "url": "theme/logo.png",
    "revision": "ee0c602f873df478ff37cf295d0f6e04"
  },
  {
    "url": "theme/random/material-1.png",
    "revision": "0c4e486759ad62e3415f8f197f0311f7"
  },
  {
    "url": "theme/random/material-10.png",
    "revision": "2263d9d1cc9b0724e6331374c33f988b"
  },
  {
    "url": "theme/random/material-11.png",
    "revision": "41127baf9a286e968a63653dee50ba21"
  },
  {
    "url": "theme/random/material-12.png",
    "revision": "2507dbe92186b0b39df6331347aa2c27"
  },
  {
    "url": "theme/random/material-13.png",
    "revision": "5d127887b6d043259f7e2fb99cd08175"
  },
  {
    "url": "theme/random/material-14.png",
    "revision": "84c21a53679bddbe415fdae1d3c02163"
  },
  {
    "url": "theme/random/material-15.png",
    "revision": "ec116546453394cc0d78e580d6d52dd5"
  },
  {
    "url": "theme/random/material-16.png",
    "revision": "39a5dca2dc2de60bd5dd191f205db7d6"
  },
  {
    "url": "theme/random/material-17.png",
    "revision": "30a855e361dcf170aecdce04ce564c68"
  },
  {
    "url": "theme/random/material-18.png",
    "revision": "584900ff821930a8b093b4c0a58be34b"
  },
  {
    "url": "theme/random/material-19.png",
    "revision": "c004830c8683856939dc83b75b230b66"
  },
  {
    "url": "theme/random/material-2.png",
    "revision": "fa4f4588b9fab07979acd61b94d34fa0"
  },
  {
    "url": "theme/random/material-3.png",
    "revision": "418c3457b6792eb732844d41d2501294"
  },
  {
    "url": "theme/random/material-4.png",
    "revision": "99898b727359e568759eebbb2c9e4a8b"
  },
  {
    "url": "theme/random/material-5.png",
    "revision": "e521776cb427f848546e20d784888a55"
  },
  {
    "url": "theme/random/material-6.png",
    "revision": "db810792edf3d40de5baf5401a9a0626"
  },
  {
    "url": "theme/random/material-7.png",
    "revision": "d7e9fe3e0e3db6b841ab12fad331daed"
  },
  {
    "url": "theme/random/material-8.png",
    "revision": "9f1914138052c3a631e1f2b2cf674a46"
  },
  {
    "url": "theme/random/material-9.png",
    "revision": "069b687b7f1069254c816a56317bfaad"
  },
  {
    "url": "timeline/index.html",
    "revision": "527300b8aff54c156b4dfb4cbe8d8ca4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
