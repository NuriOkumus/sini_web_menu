'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e9641a10b7f09d9b97c3bb2b654adecd",
".git/config": "a4d0a1be101b695369b21119c7e8b59b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fca84eda805b683eaced516ab654b63f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fef511cc8ac99b0e2f8c1eb51a188455",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "162727facf8967d63ab8786a76f527f8",
".git/logs/refs/heads/main": "318fb62becec864d46792f44f3b3b2e0",
".git/logs/refs/remotes/origin/main": "43fd4ae53e9cc4864c1d0e47330c2f67",
".git/objects/00/d23737bcd3edc86329a59254e7aaac5ea85fe1": "fbc6856003af68d4a0ac4b1f9ca8b6bf",
".git/objects/01/ae1b1a1eade79d8a32604b902249947c0e4d30": "9c22d4ca7a571a334fc770870fa2436a",
".git/objects/03/911abce7997174b6ea6fd5d163277f7b73b8a9": "c14c8d99b887e5ae9e18eb06ec77839a",
".git/objects/05/1fa69f4ae2a585ceb6860337962edb7c6c0313": "94358a12f0522c8676280b2ee89a1c56",
".git/objects/05/d23c0ca1602354926e06b19252e062bb60bb7d": "28a20c3a9cc5c7c8a20df2c33f37523c",
".git/objects/05/d675e8b4b81d78f04935a6c8d0a1c40e0212c4": "acbf9e037ce8027c82fafe9a0b89b743",
".git/objects/08/0d75f9cc32a37f7327c65de05ae5872533e381": "ef2849b49e3ba5079564de4d88851645",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/6256d60c539171952f95910d6dac504e0437a3": "0621f3104f7314ffb01ed9770faa7f1c",
".git/objects/09/83b1ea403efc0eb7baf5dc77a088dd0a30699f": "22e36003eaaa37604ea9527756bfad9e",
".git/objects/0e/14fdef8b22ec12918a5b3c4fbd4a7ef71858fd": "a6507db1e04628bada3a87af36f0e92e",
".git/objects/0f/f6a55f210989691f15db01ef87c44cc149b072": "7b8f2a14201b0d7a9b68bd979790da2e",
".git/objects/10/21fc1968ec8376253cc322d764b36ef1192a55": "8331efb533281d251255b0b9d819549c",
".git/objects/11/36a11845b3cae60461c356d8bbeea0abb904c4": "df03e2bd70114bc134c900194d746ea7",
".git/objects/11/ae6f67c4ab83223c1c9a92559755c8e97d92f0": "8029690840b5924a2837643cfabc48a7",
".git/objects/12/f2fb6504af04aef60f52924ca9715a3d3a90a6": "fd98b07ef78068624e693861630c019b",
".git/objects/15/a46331d17a7fa4fa39cca2d321bcf7936aa9c2": "961763e0e49dfdcebf0939b1ab6c6a3a",
".git/objects/16/3be003c14f3e046ca6fa2305d3b83f37d03725": "4edde238d430b7eb4faecbf0eff101ec",
".git/objects/16/92be543640aba4bf650ee0027fdacdc390dd98": "67df682511b60d5a502879bd5acfa118",
".git/objects/16/d5d496a48be2aecbf18ea9a76335df1b638e00": "e1d2775df0801d6b2932ba1944fcc7fb",
".git/objects/19/3908dc12bcec124898cd6e0d49bf510977a6be": "d6eac1f5629b10d47a44f4987cfcb94e",
".git/objects/1a/02981e4b6f992af680e2d60242ed0fb9772a9d": "8fa4240dfea650410e590f5b765ee551",
".git/objects/1a/3aa0833f658b7500e201414d478f144b3141a6": "512735eab0edca47dfe59431593b8753",
".git/objects/1b/0fa6d74583a0946914bad5745174c7fd9d0f2a": "5ffe70700b6d37c6881578eea574ece3",
".git/objects/1b/114134ae1f01448e8e26e43e99fc0dc7920218": "82ac74bf7a09d6078ba7fc668d754516",
".git/objects/1d/cb6e9ba1ecf6cef750c2d2f00814b097e16873": "2c60069aa1e0e6c616f2a0974df4658a",
".git/objects/1e/b16ed7069bf793332f66ce9c82de90aef29f40": "d18b70ab415cdea8c78cb59d0cddde88",
".git/objects/1f/36625ed68d057f614b8ca1b873582df76151cd": "70a5700bcb90e981d5abc28d51355e70",
".git/objects/21/5bf8eaa3e1ad7a07dbaca28feb3d819c82a6c6": "aa2960f02cec1e0c6453df715b732389",
".git/objects/24/075aeb7e6cc26073f8b9400d482ec38f05d318": "a262c315e98977c3c1a5d3a84cb9b4be",
".git/objects/2e/ab7c5b9c57053e9f1c1476aa1e88959c2f5da7": "4eba1b5a626f820f59b766a742536fee",
".git/objects/2e/feb035388e54e41c173dca242cb08bdb0a9a6c": "8391dbe56945d936d08d2deb8da71254",
".git/objects/2f/dfe7904bcbe2da2535fd55abb7afd66521841f": "61a6264d663566e9097b42c1fd865628",
".git/objects/32/1531026f531cf840a272d45fc95e8b5ea4b06f": "9aee05c6e241794b04f5b9efc042b198",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/b9140cdce60f590b3e1c3e5c2f7393680e9bd4": "598172e6120a63a22adee7e0a25ab0d3",
".git/objects/34/87b6372d9a7d2c4342614151958a258cd1cb2c": "5d6ca14fb090c399ca5e57491188ccf8",
".git/objects/35/df5e218f03f45e7034aa9883b282e1506dacba": "46b6cbd87f3a338b41682f05efe7bb19",
".git/objects/37/0184dc894f826f9322ba5205bb03b388adfe95": "c7cd14ceacc906ce59c754fbc9b95507",
".git/objects/39/69a1f4ac6a34f4a60605ff16e81f24e2303079": "a583a0b7e1d33179e495d177df8b31af",
".git/objects/39/7816936dea25fa962281096cf48106a1a0866a": "cd4e82b2c95d49cdf57393e2e02c3e80",
".git/objects/39/8187ff745e1edb174eeed0c84a8ed2ba05b0af": "857b04ba4e78a18d0332e34c765a6f53",
".git/objects/39/af662d9523244ba5787f415c8f5de56cdd0fa6": "93d0f7397883435acd27747c86ee44f3",
".git/objects/3a/22e5dd611855d7334f78a324b1fce4ea993104": "30064aa9dc6f0e6e5c58e95b19ad56cc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/90394b0a9da7fb84394d45dc6bdf9a508e048f": "9e81bda4cacf849308977e80fbc182e2",
".git/objects/3e/8caa675508c3a1466348fb2c71dd4c825d7e73": "7cde7fb33bf47078b0f1201d68862659",
".git/objects/3e/cbbacbaa621ea91960821180ff0587363b3934": "e9fc3bfb65a504a38295f4d2ffe4028e",
".git/objects/3f/450d2e98bbec4e3d5f5ac49d00aeeb86f4962d": "b9595ced57dd6ab483b29544d93d4c52",
".git/objects/3f/9d0f2ced3f43f1e5b267b65bfccb5e04fb22df": "ac72f9d03cc29c032108ae084e78bef7",
".git/objects/3f/c5f3b94510989e05ce1031d6a5b8b2193ef9c8": "ef2df352af9fed1588c4b5c35a4c4223",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/b5c7777498b95382054a83a22a0c4bfbfb1f0e": "80d0c0aa2c2d4c4311d6da33ed04ee8d",
".git/objects/42/be6518329110b4ee30c4fdc158f828ec0b9bc2": "c5088776867422689c4639b92c5b6fc0",
".git/objects/43/3d12f3222a161e127d8408f7d405a4aa6a21bc": "7b1d9b5a94e10874f44e0ae413735913",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/2d2ff79af50f5fa867bb1b304ee7e2d2d008d6": "af2429e5315572750a41e976b4a1fc11",
".git/objects/47/cde8c2b4dcaedb64b6abf09e2b7a9be6a5a518": "c2d751e0b9b846ee9da5f1343d353a1f",
".git/objects/48/9374c0f81f4cb1447120b99df7bdbd3d6277d9": "be4fc669da5b99de1af11ab98464ea1c",
".git/objects/4e/3fd738c9f7669a26b7e64e5021e6f90c5237cb": "21db5b0607a2adf6c383118ff16d938f",
".git/objects/4f/cf128b3b7830ab85d9203fd68fc497f5c327d7": "4fdb745011a4c476f81a66cf03b000b4",
".git/objects/52/fc64b5f2925bd6f9df01c064867410894b56ad": "77e56a39bfe3e4474a71e8b3ec974faa",
".git/objects/53/c4d885a82ddc848a450008de213cb6b4963606": "2291a72b987c52b8545769983352e30c",
".git/objects/53/f05b142230b3f63b2ee83e53b344e7989e02f4": "7397e883ceaab84d7ed9e463532a98df",
".git/objects/55/0330808403767cfbe1e83813b62e48766f41a1": "8f8a01e1ab2831ebc2b144a6d1a09a43",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/56/48fa2ea760f68fb98c0d269e875eb128647c08": "41d664b9f36c07a4af764ecc6ca5f4f7",
".git/objects/56/87fccdc6733f720b6b0fd1266c41c50d6847fc": "86c2597c43d8d7ab869b42c97038835d",
".git/objects/58/8a146a4270de901339769837961af0a3d0d636": "5cab5847dd71de8e7d7d6befac610fee",
".git/objects/58/c87245dd4f358196cd6ce68688f14370fc0d2f": "556b3108f609fac5a13a33e318c719bd",
".git/objects/59/99f023bed17fe629dd7156a6d3d2cd6f1b1489": "d353a6835f0eb21c99a59d5fe8aa7a46",
".git/objects/5a/4e7a2c512043f120c0f8aa5dd156376d03ccfa": "bd8c0c22d964104d10ff8d5443e9c7cc",
".git/objects/5b/560d14bfc2d97b9f8ea266e61b31742dd26ff8": "cf738b6c96db64f9afc9616bcb4083ef",
".git/objects/5b/ea127a2a0ccd753b05ecf254411972a8ede39c": "03d266a23818ed77186f5cd86d7c088e",
".git/objects/5b/f75396a6abe08264d15f77d0c5bcb4e6d7cb99": "2b16eb5bc540f4ec14911f4de6aed6ab",
".git/objects/5f/6426ef4a4c6742c5b5c262c0fcea23777bd2b1": "942d128b1d8fbf9b7242da0a5080334b",
".git/objects/60/38980a489bbdaf374eb50abddd3a82cbf98156": "dcd33ce0f30b94f4df0b9e84633502f9",
".git/objects/62/5704124b8935f42e352c2a7601936d2d4f15b4": "5aae2aa8793607abc8d9c2e5e778688a",
".git/objects/62/ab58fba94ec1e23ca67ecc41acc926d1d9fa63": "eefb42e4681bb2ab49ee39ceee3c903c",
".git/objects/63/256276b2bcf8f766da273f4469b6e1bd0ebc86": "b6e52e0db6db07b6cade325350f75c4f",
".git/objects/66/35f95fa7a5b128348e6b97a9c90e1100d64c12": "de74476d02cac4215a141c11f6a77999",
".git/objects/67/4b476ccfb4bdcef3d01107fb40646f5a1a7298": "038f8a3c59e416cf09a75f0f2b4be7c2",
".git/objects/69/1a107c26f9603b1a6e5bef7833cef62c52196b": "3f6e52cc337060f976847f2c33b17206",
".git/objects/69/6c345d25467f133960e1aa6d16a76c531d6244": "7651a25fe078597bd7627ca4c5c4fd1b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/1b9d635ec380a2209220c5c2135530d4dfc8af": "7d41e5e426e387e887cb073fe14d9758",
".git/objects/6c/576537d96a245698ab1fd9ac369fcebc852ca0": "53cc353eaf27bdfc95d1a29713ac3008",
".git/objects/6c/93f0dc5cd0161ef6ea4aa55058092c7531e5e5": "b0f34b13d25ca62d851412ac8a7f9484",
".git/objects/6e/9da28d99b5e29d4a1718002473fc4dbba88a66": "6a82817573fe01b215b7aaa90c7e240d",
".git/objects/70/34cf8944b74d513c63307c30918e583075f98d": "640d9c080a40494137bdc1bc07c09295",
".git/objects/72/589ebb1d4b35d659eba21f8de55cbbb6a5e399": "53ab4e535b8951f782c53bebb6b0b0b3",
".git/objects/73/738d0d8162edc752495f7ca1a6e07f18930a5e": "ef0ddc867dc426bed6b9217bc5dffbdb",
".git/objects/75/47cebb0c92b0b7cba8399a54625ac4e6b82209": "3295a7473c13cd42a685992f17484eea",
".git/objects/76/675a2b2b1d38121594732e292ea00c342c8dd7": "adaf304d9d528adf5b9a354157d1e0fd",
".git/objects/78/8318902b38351dffdb0a02a42110110591116e": "3a0fe27cd82e95cb86739557768164c2",
".git/objects/7a/035d37ecaa71e5d1e5a7baaa1dd5e89daba4a3": "7bb996b82368831f26143fd30cd2555d",
".git/objects/7a/9b36c06f537e3ef7184cc4e826f55261237eff": "2c8109f1033919bf7b8d39f0c9e393d3",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/143711f2d88bd59bcfbe46a3b75dea2d9e0677": "9c646238d582ef41d78063576f1937be",
".git/objects/7c/61c0e3209bbca4793881c5a522d943b4b24af9": "da70cb3256cbf67d1f614c7e7f47eb18",
".git/objects/7c/8d8177d1ef9ed7d3baee8ac1a30b4fd2a1ba76": "676128701ab787243f2691b0932a25b6",
".git/objects/7e/cc659e3fda20646381a650b1b50971a456c0a0": "d9bf1be992f13a5c47b29c655cba4eb4",
".git/objects/7f/602a46639bb568f0f28fe43157fd110e64cd5f": "245506a9b813b15221b747f0b3406497",
".git/objects/81/40b47dcd7b08cb1073b7f18c4fea97aa8143c6": "d520655a435711579a4c45bb8ea9a5d1",
".git/objects/81/f987258506e2e47b602b930f842ada2d0b1c2b": "45402bd5597a45461387d689d89f4d92",
".git/objects/83/83b853372df7f33008c938d95bf66b7e6d6943": "c5f425ce4346b3697d3610310a2c424f",
".git/objects/83/8689b47af8b08dae60ebd0050188130912ba71": "aece2607850067c37c50a9c21a4fcd68",
".git/objects/83/d6332d085c7487e139bc14e86397c2dfc10ee6": "be61c7dac68997e2819fff50bef352a0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/29a66045759b0e2a92b5b1bfbc2d759d4acbdc": "17d0e6ef07bb38b0b8a3ca24351bd78a",
".git/objects/86/af0a4ed18a1ad32d78037420b41002357d6e76": "8be1effc445afd4bf3bcdf21c5b0f2e1",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/74932f871e4aa361166f0fd7c54c338b5b9852": "38f558af8b56ff4a8b9c17a887ef348d",
".git/objects/87/876c7ee990c3ce3e136c56e27027095354d7ce": "0166c23ebac8f7e70b030cd3194dbf22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7f1b466efc9a93cd379e5cea1f485d89df464a": "228ec150e4ac8030db82db4f611a60c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/180d876a4f55a17c03e110fb9c27907aa3bdf3": "4949f5cb1e3e7e9000b81bcb935a52b5",
".git/objects/8e/f4bdf4f1e6af8fd4b9dd1c7829c8937dbf9e68": "987b8ab612173c90e5d3affc95620dd1",
".git/objects/8f/0ca5b6af0571cfb79c2cd1ea93046f7f28a3f1": "71ec066d4961bc2eab957eef754982b6",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/7da265e1831baaf0ca1c23bcfd85be803beaf1": "c5997096c303779072442126e6c081ba",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/9803de34bde7639fa6976ea1f00433809a6faa": "8e4ecb8b038da786721a385bd022a0bc",
".git/objects/93/feabe6f7ae4bcde94959024010434a31162b8f": "64cc367d59f91a737874c6c16c563a7d",
".git/objects/96/89e843e68f1e41aed7e51cf35e4c3dcc041704": "f07bd62671ec0e62c32f12ffbc008bb0",
".git/objects/97/64b5255de63f9ef7ebe543a7aa1dd8198b423b": "107d0a828fa902a722c4942d7d4ed595",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/837810115d26c11beb494f93d54fb17aa0be92": "cb25e236f97383ca70851c163b341dfc",
".git/objects/9a/6360b9655e8e5779cb07ce75b954dea978f661": "b6711294d5c68a804f26a9dc2044c34f",
".git/objects/9a/d4901f9e3693710a4d13336d715b46dc8ae9d1": "d1f1c8918fe3e8241f12dc4adf2afd8a",
".git/objects/9d/755bf81a6f38b39f9d38c0d58788eb9ff4f467": "ad5af297f3098122b633c59c3e67900f",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a2/b63c476cc0327ef4c4d67e4103259bbca53bad": "482ea8a2322d7579cfe21b23b6cfc5d9",
".git/objects/a3/621e3c9fb9fac2458199d428bba5eada4f7d9d": "5e1b70622c4e5e5740fd6c941200d9f5",
".git/objects/a3/d44d39826e253c0f42aae25401b2c7b3011a93": "6dad1e4c2b17725fa336154a0ff114dc",
".git/objects/a4/434801588560f4911fd39fb17404d606ac4d87": "aba9972910925b8ffdd95792db40b3d9",
".git/objects/ac/ab9bdafb2b77745f44c6c5d5b30be6422226c4": "80c4d279612efb5873d52fbf79089a56",
".git/objects/b0/5ad23df16f2129220c0933e4f653dad8e52d4b": "94d02e7f58a80fffc9373bbb8c5a0937",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/814a9533b934795ff6c9cfe5bbb33e59b6421c": "d9ae098612e67c88dc666d1b4f00fb02",
".git/objects/b2/59af7d524d84d11894e7e1ea8e9868faca967f": "50eb3227f9baea162602657d0a359b3a",
".git/objects/b3/328a2374ab22bebd52cb51e6d2c1c7ca62e147": "b14101185f324d70a367df2af3f3952b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df79e02869df7287cb83670da2f70d5192239d": "3d899d7c1fec40104360405e3f54c674",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2d0a393af529381a3e621c21d1705f359269dc": "810e0a44e066a29e81fd3b5b36e42790",
".git/objects/ba/1603297732f332452498ba452abe2f14ac3882": "eb77fbef81bfe0b8bb2b4b7b578379f1",
".git/objects/bd/af3f380adb0274549958c566be3f68223fa4f0": "396686670243a756186773027e677b2b",
".git/objects/be/945544277f9c9b8fbf12c993e82e91cbd3ecdd": "7d2d100966824f17dd32b092429925d5",
".git/objects/c2/509781af8ba81b73e13808b16ab619c3e23796": "c352c17b56355d67fac90031323ff9c3",
".git/objects/c2/8f4e71a7ac92448fe72d8bce1437cd085bb11d": "db919cc0c05be7c709e289d29481aa91",
".git/objects/c3/2bf48e01fc0135b83d3de14b422a2fbdc33029": "4180947b85f8a5372fcc60791e6a5a62",
".git/objects/c5/232232b71986ec109a2996748dcca0a00612ce": "3597bf9b7cdb100d6d2d6bdcf3908a62",
".git/objects/c7/469c16516eba4268c01f8b9f9ba2cee4d20160": "72b16726cf1abea48f2a3c860a2019d7",
".git/objects/c7/bf9c94920f8b9a16156bde2fe58531b244d9a7": "30e36755080f9a7000828f8a5a2893e1",
".git/objects/c9/09fb8195ef9af867ef717b5513de7b77cffd68": "d7d5d08ef8d828ebc65a1a4205b1a9cd",
".git/objects/ca/0daaf962b8a3c162a37035f015c1163fcb2ccb": "f4b97e5ee2f87c796c6609096ce6287f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/36a3eff336b455b867b00f93c7bc162fb0abf2": "09bb1dc26ce80af21976c5394dd094aa",
".git/objects/d2/740761998af14057de28ed460d548eb5943e74": "e5f7278691c683d2a9d2810af17de83b",
".git/objects/d2/c5601229d925413a0f24837441dd3f8c5a5bbf": "bf20a9333b07d3a507933187c3170625",
".git/objects/d3/84df89ee5abf48995987ce7d926bacb5361dd4": "8394f708681cabeff5b932e30f543d3c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f25a4587c619f4e596c899b1c98ad2c1f30852": "4aa0337827b230d6d085087b5702df21",
".git/objects/d8/3a7e7878a815461b1f891fe56da1bbfd71b774": "83e50c752992b881eceb863ba7169eda",
".git/objects/d8/564de853d8dbff7ca2e636f1dbb1f97918aa57": "8b900534b3955e6f5335ac8113351591",
".git/objects/d9/fb2f9cc04242ab05fea5734902a666a8a7b97d": "1e9fde9d950bd9df10564039409bef55",
".git/objects/da/3e8764bdaf502224c99fb01848e3275d1eb6a3": "5bd61ae6191498a58b113aabf09554a1",
".git/objects/da/770ab02a1d95cf0fd616fba4bd51ee475bad68": "30b639d8a54ea96c4902b50020d0c117",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/e2094e82bb2d8efae6b779cb62e38840792809": "6ea89bb1ec399c35a56acd379a49755a",
".git/objects/df/a080e963c471f9afab9921bd03d922b8ef1909": "2884b53909d1df64f36dda58575242c5",
".git/objects/e0/fda3c89ff80b4b77d115f8fb72cdb8b69c2ee9": "ae7de2976aafc3624412f194e5fe14f8",
".git/objects/e1/ee6a39bb4572b7081fe9209a77ae2b42e8ddcd": "ddd60ee1d62eb9543e8813756288e055",
".git/objects/e2/56fd1fa4d82afa7cb9ebdbbdc603ec1134e4cd": "3b64020774594c23e100b60c3f514582",
".git/objects/e5/e42783887ffd49e78acdfe297866075d1ff38b": "891585f40b87ffe6a422b0da0fe8b475",
".git/objects/e6/0ea1fdebe5fa8430497474d38200cdb2fa61a6": "9f37e45afbd9670201eef397142dcd48",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ea8640be50ad6d8fb21d06e648268e2ecd81f9": "b006ef891608f582fc32338ee4c8ea2d",
".git/objects/ec/f374f670c004d34e337ecf99f304399277dfae": "37b983aa8da241f99d86349d475f5041",
".git/objects/ed/db160c14c50aa565238924d901bd190a0f37b6": "c54d07ba82c3ef0ede858e5d1bc79582",
".git/objects/ee/5b9dcb1e96e7913734928ea5044fae1596b3ae": "77c1da0eeda01ddba6b62f52e2323131",
".git/objects/ef/80f3382baa1ccddd19c3cad361c03115689b2c": "1574cc5f2c34cb63bb05aca9429a2ad7",
".git/objects/ef/c9216aaddd9577e121514feefaaa264bf000bc": "46ea6804fcd5f9717188f5bc68391e6c",
".git/objects/f0/9b84f07b950db0d86fe71be547649c781a8044": "a51d395e87571ad387a5b70d681bec3d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/708fb4a03e274da81fdc21a3dde85cff98a325": "6f7ed7c86f6e287f90da3d2b03300357",
".git/objects/f8/ac9a2a4f75f242e23c3fde0f72aa1cd29e9771": "ca38dec4358cea297bceaa9a4e91d3a6",
".git/objects/fa/2c2cc486fea50d80ee0122fcda0d8ee504e212": "70a79536e11802d8fd015f2e119f53ee",
".git/objects/fd/1821193433ea35d8e723435698904922892ffe": "e1ea40cbf3b89b6f96e0dbf6ce013210",
".git/ORIG_HEAD": "2354297bfc4fe3595e9391987e65bb4d",
".git/refs/heads/main": "ed5137283067f9a602a311b0b30d07ab",
".git/refs/remotes/origin/main": "ed5137283067f9a602a311b0b30d07ab",
"assets/AssetManifest.bin": "4bb2d72aff6c08d18293a61a80f6821c",
"assets/AssetManifest.bin.json": "856c09d28c14a2dbe28c9d6c6be3af5d",
"assets/AssetManifest.json": "052da70fd40d9ece64632d0aeba49f8f",
"assets/assets/categories/101.jpg": "b8ddd128e43638271d74b0e5e9c0fa0c",
"assets/assets/categories/102.jpg": "3249ec859a038bdded635c4919b94554",
"assets/assets/categories/103.jpg": "f22db5bd94162efbe8df42cb9a69ca3a",
"assets/assets/images/1.jpg": "081f9e65170ac5b0103ed6bdbab9dda1",
"assets/assets/images/10.jpg": "63217a5a75df6f1b7e6d2035be5a6225",
"assets/assets/images/11.jpg": "65ab222872ee20a2bc8163fa51f7a5f6",
"assets/assets/images/12.jpg": "5ee9a634dd912a2019619a9af960ae48",
"assets/assets/images/13.jpg": "01af2a4055fa87630aea411426b2e01d",
"assets/assets/images/14.jpg": "8389bd8e010c4d2f10720e0cdfd59bd3",
"assets/assets/images/15.jpg": "32a811cc5a94bc1aca2acaefcfea7c6b",
"assets/assets/images/16.jpg": "889578701f76127745536fd2c7f52c52",
"assets/assets/images/17.jpg": "eec6bda1b5be98c73eabbf1a0d8394bf",
"assets/assets/images/18.jpg": "efe2aca045f44da41bb3f1b4ef9c75a3",
"assets/assets/images/19.jpg": "62ac5ef89d6869db8794b3c4b5d3b8d2",
"assets/assets/images/2.jpg": "3c89f116438c85018564951297b00fcb",
"assets/assets/images/20.jpg": "d51dc496cc92982e53d7e5a78787d39b",
"assets/assets/images/21.jpg": "709ca85c4c91146293617fec2e878f4a",
"assets/assets/images/3.jpg": "7c9343180cce562b6a37b6a61626ba0b",
"assets/assets/images/4.jpg": "2d5a24f240011023e834133abbc72e37",
"assets/assets/images/5.jpg": "27c0182d281a8f63358f99b5d39fe7bd",
"assets/assets/images/6.jpg": "ffd906154e907e69d891f60b4f0f0957",
"assets/assets/images/7.jpg": "13df2f5d40af514de67aeb6a6ae0540d",
"assets/assets/images/8.jpg": "8b532c7b6184cbe8f3240007f849c62a",
"assets/assets/images/9.jpg": "a21db74292c851fc2990fc1345bdc992",
"assets/assets/logo.png": "882abebc1ee9a9ddafd5a0ef13072a9f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a258f1c584f35053dd6a3dd154030d34",
"assets/NOTICES": "79c8e7d7049551f57d334c5e0a00e046",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "4ffccf73345d946a6e9d052abb97f376",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a44c73beadeceda65e161018645eb6f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16ce67fa3d31e5544bf753f72280f6ec",
"/": "16ce67fa3d31e5544bf753f72280f6ec",
"main.dart.js": "d82f0055a2432ceaefbd656127ea0a05",
"manifest.json": "aca6fac80c97304a7f0f911cbee01f0d",
"version.json": "e16cef4832069903e5c4dfd4ef08f199"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
