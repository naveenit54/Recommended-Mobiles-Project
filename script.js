document.addEventListener("DOMContentLoaded", function () {
  const mobileList = document.getElementById("mobile-list");
  const applyFilterBtn = document.getElementById("apply-filter");
  const sortBySelect = document.getElementById("sort-by");

  // Actual data of mobiles
  const mobiles = [
    {
      company: "POCO",
      model: "Poco C65",
      price: 6999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-c65-pastel-blue-128-gb/p/itm1586ff4fb1c2b?pid=MOBGVVTXZESSZY4W&lid=LSTMOBGVVTXZESSZY4WVAOO2Y&marketplace=FLIPKART&q=poco+c65&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_3_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_6_na_na_na&fm=organic&iid=11538e74-8b1c-48d4-8783-6cfaaf0cadb1.MOBGVVTXZESSZY4W.SEARCH&ppt=hp&ppn=homepage&ssid=0syh809m740000001711996212874&qH=0170e34f2bb07ef5",
      preference: "Processor",
    },
    {
      company: "POCO",
      model: "Poco C55",
      price: 6999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-c55-power-black-128-gb/p/itm52dfc91751293?pid=MOBGMXSWPMRNGVGW&lid=LSTMOBGMXSWPMRNGVGWJIL18S&marketplace=FLIPKART&q=poco+c55&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=6df177d9-923e-4ec6-9a4b-baa0e7f1796a.MOBGMXSWPMRNGVGW.SEARCH&ppt=sp&ppn=sp&ssid=p5tumrxfy80000001711996614104&qH=71400ee5794c8848",
      preference: "Processor",
    },
    {
      company: "MOTOROLA",
      model: "Motorola G04",
      price: 6999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/b/x/g04-pb130011in-motorola-original-imagy3tfvncuegaz.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/motorola-g04-sea-green-64-gb/p/itma5e47013b85f7?pid=MOBGUFK4HDHHKJPP&lid=LSTMOBGUFK4HDHHKJPPCWIVJB&marketplace=FLIPKART&q=moto+g04&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_8_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_8_na_na_ps&fm=Search&iid=d53115fa-8ac7-4eeb-a5dc-79e5f0ab5195.MOBGUFK4HDHHKJPP.SEARCH&ppt=pp&ppn=pp&ssid=mulsxvh9xs0000001711996778445&qH=01a9d1ca300b11c4",
      preference: "Stock UI",
    },
    {
      company: "INFINIX",
      model: "Infinix Smart 8 Plus",
      price: 6999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/l/o/-original-imagykbkwfgwtmdw.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/infinix-smart-8-plus-shiny-gold-128-gb/p/itmb71da75c376e1?pid=MOBGYA22EXQHSZFN&lid=LSTMOBGYA22EXQHSZFNAVNQDZ&marketplace=FLIPKART&q=infinix+smart+8+plus&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_2_13_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_2_13_na_na_na&fm=Search&iid=629c9fbc-b873-4eaf-bbe9-50be0551cc49.MOBGYA22EXQHSZFN.SEARCH&ppt=sp&ppn=sp&ssid=u1g4z62f1s0000001711996997277&qH=5496e116681d93ca",
      preference: "Battery",
    },
    {
      company: "POCO",
      model: "POCO C51",
      price: 4999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/v/b/-original-imagt4td4q9u7kxx.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-c51-locked-airtel-prepaid-power-black-64-gb/p/itmf84c207e77bd0?pid=MOBGQTDPRFVZQYWB&lid=LSTMOBGQTDPRFVZQYWBKWRQKC&marketplace=FLIPKART&q=poco+c51&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&fm=search-autosuggest&iid=fb510802-910e-4ad0-92bd-45505245ac5e.MOBGQTDPRFVZQYWB.SEARCH&ppt=sp&ppn=sp&ssid=4r9zt6z5gw0000001711997343752&qH=93b1e048509b74ca",
      preference: "Affordable",
    },
    {
      company: "POCO",
      model: "POCO M6 Pro 5G",
      price: 9999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-m6-pro-5g-power-black-128-gb/p/itm5b122ff13027f?pid=MOBGRNZ3FX5XNR2T&lid=LSTMOBGRNZ3FX5XNR2TILGJYM&marketplace=FLIPKART&q=poco%20m6%20pro&sattr[]=color&sattr[]=storage&sattr[]=ram&st=color",
      preference: "Performance",
    },
    {
      company: "REALME",
      model: "realme C53",
      price: 8999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/realme-c53-champion-black-128-gb/p/itm5df90168ecd05?pid=MOBGQY9378PDVDDC&lid=LSTMOBGQY9378PDVDDC216OJI&marketplace=FLIPKART&q=realme+c53&store=tyy%2F4io&srno=s_1_5&otracker=search&otracker1=search&fm=search-autosuggest&iid=bdd29c3f-1844-406e-ad58-5422fe6a51a0.MOBGQY9378PDVDDC.SEARCH&ppt=sp&ppn=sp&ssid=y39l7p67ts0000001711997811069&qH=c9645bdb4b485ca9",
      preference: "Camera",
    },
    {
      company: "REDMI",
      model: "REDMI 12",
      price: 9499,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/redmi-12-pastel-blue-128-gb/p/itm48719506a7ceb?pid=MOBGRMFKKGYD9ETX&lid=LSTMOBGRMFKKGYD9ETX5KD9VL&marketplace=FLIPKART&q=Redmi+12&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=d6d568e0-9412-4b43-b585-454d4636c6c3.MOBGRMFKKGYD9ETX.SEARCH&ppt=pp&ppn=pp&ssid=9jix41ufdc0000001711997991291&qH=c6ccd5bd82474fdd",
      preference: "Features",
    },
    {
      company: "Samsung",
      model: "Samsung Galaxy M13",
      price: 9999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/p/g/-original-imagkn6dk4pbcf4d.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.amazon.in/Samsung-Midnight-Storage-6000mAh-Battery/dp/B0B4F52B5X/ref=sr_1_3?crid=1YBO1NP3WGE3T&dib=eyJ2IjoiMSJ9.dnSG65YlPK0Ndh4RPtcYolyIvXA7uks65pPXQSKHu-H6D6Fj3FKeLQAlCRnGKov8AOMH_9Pkyy_CaFTilvmpxwyZshmdAV1WgKvDZioad0Hm3rFY3rd5ouBx-z8kwKElnuxnB6ZuENkbCj0ZJxFmBW88xhrfXqDFeMSaZvXs6uVQSgk6vk7EFOsrmdboyxOoBcEkiMe7BF6Wz8kAAMDOHRRd1bVA146T6u9oNovqGFE.hrS_Q1PU9dOKGQAUCeFp8Gnh4G9gw02-R0T3OOvgu0c&dib_tag=se&keywords=samsung%2Bm13&qid=1711998159&sprefix=samsung%2Bm13%2Caps%2C222&sr=8-3&th=1",
      preference: "Battery & UI",
    },
    {
      company: "Lava",
      model: "Lava Blaze 2 5G",
      price: 10999,
      image_Link: "https://m.media-amazon.com/images/I/71XfhqBH3NL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/Lava-Lavender-Storage-Stunning-Expandable/dp/B0CLXXBPK8/ref=sr_1_1_sspa?crid=2B5EQ02ZLM80Y&dib=eyJ2IjoiMSJ9.oxXxtj6D0gHt3kuF8c1Ohrwo-kF3TJyBatYStQ9Dby9pa5PZRBLtotv3H7POmy6cG4EiLpbYmJAcZNRT-7BOUeqp99tB3mbLjnsG-wjQGeQ2vv2MwJoBZNDkmNJAv90SauqMDDdI739KzDX3uu-pfKzEqnzcAnxUpyjoBvCyZNOy7_MLUKXzGLu1vyg-_o_kEBtjB87V8vY2R3lH622U4ejYq6j_ULGgX072bjQjjk8.8OrZkKn3v_E3LTt3a3WviyVedNb7J2SV4kBLKXnqt_k&dib_tag=se&keywords=lava%2Bblaze%2B2%2B5g&qid=1711998334&sprefix=lava%2B%2Caps%2C212&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      preference: "5G & UI",
    },
    {
      company: "Motorola",
      model: "Motorola g54 5G",
      price: 14999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/n/j/-original-imagt5ugyaxgqugq.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/search?q=moto+g54+5g&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_4_4_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_4_4_na_na_ps&as-pos=4&as-type=RECENT&suggestionId=moto+g54+5g&requestId=bbd119ec-69fe-4b7c-b680-2ae0734da6cb&as-searchtext=moto",
      preference: "Storage",
    },
    {
      company: "SAMSUNG",
      model: "SAMSUNG Galaxy F34 5G",
      price: 15999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/r/8/-original-imagtywatxffk3yh.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-f34-5g-electric-black-128-gb/p/itm85da260a1ae3c?pid=MOBGRZMYDDS8SBXZ&lid=LSTMOBGRZMYDDS8SBXZJUP7PL&marketplace=FLIPKART&q=F34+mobile&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=813e2ec5-6736-4151-b67e-623643a124a1.MOBGRZMYDDS8SBXZ.SEARCH&ppt=sp&ppn=sp&ssid=v8vwew5xu80000001711998657313&qH=37a5f528734fab19",
      preference: "Battery & UI",
    },
    {
      company: "REALME",
      model: "realme narzo 60X 5G",
      price: 12499,
      image_Link: "https://m.media-amazon.com/images/I/81WimZLWH1L._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/realme-5G%EF%BC%88Stellar-External-Segments-Supervooc/dp/B0CGDQRR9Y/ref=sr_1_4?crid=1EYW595OVA7H2&dib=eyJ2IjoiMSJ9.PsSQtSJpBYRdIKf0Ie2RM-Dcv6pgt-mFZHFLh2PUy6qdZPnwPdT2xFp23KE7H3QMDmhEz0m1VfYBk5OJVVPicvmruSQiYxCxg3ldQgDw56h9Ml6lfF9I2_LCIVvmmZw83XkL3DUVcxcSeKl7sHQizoMq-b42MOpRUhxTDD63Exq22OeS7PI9y4x0LMDZEIx1R6e0sTWvKGY4CiGF6o6CUKhxgIivkwANOheyfqS3O_8.Z7jBxWtqvLzS7SSYgzMt-lmvnsk6aNULurdA7CuEgTg&dib_tag=se&keywords=realme%2Bnarzo%2B60x%2B5g&qid=1711998776&sprefix=realme%2Bnarzo%2B%2Caps%2C210&sr=8-4&th=1",
      preference: "Medium",
    },
    {
      company: "POCO",
      model: "POCO X6 Neo 5G",
      price: 14999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/l/0/x6-neo-5g-mzb0ggwin-poco-original-imagyxngbqmdcupq.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-x6-neo-5g-astral-black-128-gb/p/itm46b7f88d952f6?pid=MOBGYQ6BDAJN2UZU&lid=LSTMOBGYQ6BDAJN2UZU8LSOTN&marketplace=FLIPKART&q=poco+x6+neo&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_3_6_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_6_na_na_ps&fm=search-autosuggest&iid=13dbaf87-85be-4eb6-9c95-4b23524c6746.MOBGYQ6BDAJN2UZU.SEARCH&ppt=pp&ppn=pp&ssid=ry0xvckr680000001711998883860&qH=89d010f72594600f",
      preference: "Value For Money",
    },
    {
      conmpany: "LAVA",
      model: "Lava Storm 5G",
      price: 11999,
      image_Link: "https://m.media-amazon.com/images/I/71uOoXevxwL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/Lava-Dimensity-Processor-FrontCamera-ExpandableRAM/dp/B0CHM729GT/ref=sr_1_1_sspa?crid=CNLKCS2VLP60&dib=eyJ2IjoiMSJ9.pwe867NzJIAIUwhMvtqwqDbw4uRygfTh5LJPr7JYlOSk6Qc4oJOlVlWqEXNk18T2Nmwwj-GRrtxvxUiFA9W1Q668eEbXgeR2-zqaTv5YtIMM4gWXzIOSe6fxkF-oxS8qUTJzWJRXhOLBAhuXVEhZgYYbz35qSE67bBjvEWoVniFVDsSHgWfUIiqfyLzLkEiyw2hfUK_mbF_o2qQYJGCl3YXOfDH2IGJPycUcbXm5o78.GVqor_biv0uMC2bQlinfIusA4YVTJIU5lRDdRPrvyhY&dib_tag=se&keywords=lava%2Bstorm%2B5g&qid=1711999069&sprefix=lava%2Bstorm%2B%2Caps%2C224&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      preference: "UI",
    },
    {
      company: "iQOO",
      model: "iQOO Z9 5G",
      price: 19999,
      image_Link: "https://m.media-amazon.com/images/I/61pt59LW-lL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/iQOO-Brushed-Dimensity-Processor-Brightness/dp/B07WGPBNTC/ref=sr_1_1_sspa?crid=VMK9F7M9TDGX&dib=eyJ2IjoiMSJ9.aepZk04v09cZQy2KxrE8gmc_t41I4QufpoHkTvWGIBcfteEA05PKEtmEV-vqxEsIbWppsR4MjQScaFCnkkXpr7sPN5f0bIF16ScMcYGmkmm7zGfnySoxBjZEgSXNX8lvLoJytmZ04Xj2pX9Ysyy9B8QuhiucLlsy75uLcSshgJaEvqOwmGhGwD4bV-hOCVIEQHHpW-mkJQqA-udYA8DeewPSDWBjn4gZowih2PXnGvw.14Q3tZUqs2b4sq8ji3kdP6v5_NNnJL5KIC7wW_3UXWU&dib_tag=se&keywords=iqoo%2Bz9%2B5g&qid=1711999200&sprefix=iq%2Caps%2C218&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      preference: "Performance",
    },
    {
      company: "REALME",
      model: "realme NARZO 70 Pro 5G",
      price: 19999,
      image_Link: "https://m.media-amazon.com/images/I/71GrK57KgxL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/realme-narzo-Pro-128-Green/dp/B0CHQKRVMQ/ref=sr_1_5?crid=267AFQV7OFQHD&dib=eyJ2IjoiMSJ9.tJW_797n3vw1eQZjLGj5FzplP92ReHsQonmMBx-3OW8duRo5aovmIlPK5guExLAKqMzwt7y-vvKTR-JqYaqTbVgI37AdUsc40GnTg8Y9uFVpuYA-mwFzCP_Z8hQuycmzBAtCx7s6L22vHDrS7ku0UPmjQ8lHfzrLEdOyjeymo84LQr7HqCo0hwPoUXttFdtJ6sgTC7b7ccsgib1ST49sPI1nzBsU8tYHMlnVkA2fBx8.uxy387ssHPBLkcRTDTaZCuaPkzV9PPmD2Vky-YzcGYQ&dib_tag=se&keywords=narzo%2B70%2Bpro%2B5g&qid=1711999295&sprefix=narzo%2B%2Caps%2C213&sr=8-5&th=1",
      preference: "Camera",
    },
    {
      company: "LAVA",
      model: "Lava Agni 2 5G",
      price: 17999,
      image_Link: "https://m.media-amazon.com/images/I/61OBw+XUiuL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/Lava-Viridian-Dimensity-Processor-Superfast/dp/B0C467KFNM/ref=sr_1_2_sspa?crid=BMJOIM9B47BN&dib=eyJ2IjoiMSJ9.rqx9X6BTEpFImqeHqeqBvlR9jOhOJ56xThlPTLeVONE8QJ0uNspqGJDkimE-B5JP-93-UWkpiGh5bxNIp9iOYiF48obAXJkiKaFMNUSLHw2SOgkd1R09OrqR-Q3BzvXQfvz6MzuDZ67l3rLbkh2rHeIhUk9RUUG7rbfonqJ4j4VgY1DtxjgZxgRhwd15RzjVR4Wz4t5a0JfODUtcHItM4IRMO1LVnk4laqJoX01seTU.ZcfA-D-FuDoy6lmlO2Q4Za6Usbe0t38gbDVofWDNLJY&dib_tag=se&keywords=lava%2Bagni%2B2%2B5g&qid=1711999401&sprefix=lava%2B%2Caps%2C212&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      preference: "Curve Display",
    },
    {
      company: "POCO",
      model: "POCO X6 5G",
      price: 19999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/a/m/-original-imagwzrj7tytaakg.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-x6-5g-snowstorm-white-256-gb/p/itm705116870e629?pid=MOBGWMGBGPMDMYQZ&lid=LSTMOBGWMGBGPMDMYQZ4WOBZ7&marketplace=FLIPKART&q=poco+x6+&store=tyy%2F4io&srno=s_1_4&otracker=search&otracker1=search&fm=search-autosuggest&iid=731e380d-65f2-44d3-af51-5fc69f5d9547.MOBGWMGBGPMDMYQZ.SEARCH&ppt=sp&ppn=sp&ssid=mui83rtts00000001711999621273&qH=7e100abf4b83af1d",
      preference: "Storage & Performance",
    },
    {
      company: "Motorola",
      model: "Motorola Edge 40 Neo",
      price: 22999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/q/2/edge-40-neo-payj0001in-motorola-original-imagtkf5ewhafvhh.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/motorola-edge-40-neo-soothing-sea-128-gb/p/itmcfb87467e7d9a?pid=MOBGQFX6AG2JD2XT&lid=LSTMOBGQFX6AG2JD2XTMNTYDO&marketplace=FLIPKART&q=moto+edge+40+neo&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&fm=search-autosuggest&iid=d67d221f-f917-42dc-9d6e-68bba8aa34fd.MOBGQFX6AG2JD2XT.SEARCH&ppt=pp&ppn=pp&ssid=i24hbglpqo0000001711999749304&qH=fba27339701d0c7b",
      preference: "waterproof(IP68)",
    },
    {
      company: "Vivo",
      model: "vivo T2 Pro 5G",
      price: 23999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/vivo-t2-pro-5g-dune-gold-128-gb/p/itm1230688cdef18?pid=MOBGT4RZCFZWHGKT&lid=LSTMOBGT4RZCFZWHGKTC6OIFL&marketplace=FLIPKART&q=vivo+t2+pro+5g&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&fm=search-autosuggest&iid=3ac064b8-f720-4952-a7b3-01c25fdba955.MOBGT4RZCFZWHGKT.SEARCH&ppt=sp&ppn=sp&ssid=hc5bbhileo0000001711999887026&qH=63f53701919ef99a",
      preference: "Camera ",
    },
    {
      company: "POCO",
      model: "POCO X6 Pro 5G",
      price: 25999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/j/i/m/-original-imagwzrjtrcdbebe.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/poco-x6-pro-5g-yellow-256-gb/p/itm46a0b51f57a68?pid=MOBGWMGBEVDXXEZC&lid=LSTMOBGWMGBEVDXXEZCOECW6Y&marketplace=FLIPKART&q=poco+x6+pro&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_4_na_na_ps&fm=search-autosuggest&iid=bef00264-cc79-404e-8099-5a8e0d93af41.MOBGWMGBEVDXXEZC.SEARCH&ppt=pp&ppn=pp&ssid=x14xpkep8w0000001712000020701&qH=54a0ad6f64a01942",
      preference: "Performance",
    },
    {
      company: "Nothing ",
      model: "Nothing Phone (2a) 5G",
      price: 25999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/y/m/-original-imagz7f9hzrahd2z.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/nothing-phone-2a-5g-white-256-gb/p/itm85c6bca5edadc?pid=MOBGVMQS9NC2DH2P&lid=LSTMOBGVMQS9NC2DH2PC9VIBX&marketplace=FLIPKART&q=nothing+phone+2a&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_ps&fm=search-autosuggest&iid=7c0ea9b1-690b-4afe-a6cb-a8e5a37e8e25.MOBGVMQS9NC2DH2P.SEARCH&ppt=sp&ppn=sp&ssid=rnez85ejww0000001712000123172&qH=83d66aff395f669f",
      preference: "Unique Looks",
    },
    {
      company: "Realme",
      model: "realme 12 Pro+ 5G",
      price: 29999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/realme-12-pro-5g-submarine-blue-128-gb/p/itm7f042fb6aebdb?pid=MOBGWH8SR7MRR68W&lid=LSTMOBGWH8SR7MRR68WAOGAEA&marketplace=FLIPKART&q=realme%2012%20pro%20plus&sattr[]=color&sattr[]=storage&sattr[]=ram&st=storage",
      preference: "Camera",
    },
    {
      company: "SAMSUNG",
      model: "Samsung Galaxy S21 FE 5G with Snapdragon 888",
      price: 29999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-s21-fe-5g-snapdragon-888-graphite-128-gb/p/itm5a614a9761bc7?pid=MOBGTKQGXJDVF95N&lid=LSTMOBGTKQGXJDVF95NQOMKIW&marketplace=FLIPKART&q=s21+fe&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&fm=search-autosuggest&iid=32e4fd6f-bb69-48ee-a72e-5763116db956.MOBGTKQGXJDVF95N.SEARCH&ppt=pp&ppn=pp&ssid=gvxiszlp4g0000001712000362972&qH=44e3d23918fd4933",
      preference: "Experience",
    },
    {
      company: "OnePlus",
      model: "OnePlus Nord 3 5G",
      price: 33999,
      image_Link: "https://m.media-amazon.com/images/I/6116+vSW+1L._SX569_.jpg",
      buy_Link:
        "https://www.amazon.in/OnePlus-Misty-Green-128GB-Storage/dp/B0C7V7VH6Q/ref=sr_1_3?crid=16YRVHIL0CT11&dib=eyJ2IjoiMSJ9.yxu-J8K01Kwqy2L1hyS_bxbtidn0E3YMeBOvkM9C6Mclb6qxN5sTS3Xm2fW4Wi7S8YdxHuoMCbAueaRT0qmzotCeHs0qMxZ_-DWDxeKfKRwkVGqM6_rgCaBz0xCjFBBuLDpzl5psxVKgpS5asFTGy4VWCD4JrhivNm5phik1dF4HRwQp6KePbfY1zi8htntWa4hZ8rSsG7NKCMPtSpQAkIohfFpfiT6wuMegl2Y3QvI.o3Ku1q56DAM29-5LNn74_Lei257KwPYqRqLdxjfCkFk&dib_tag=se&keywords=oneplus%2Bnord%2B3%2B5g&qid=1712000520&sprefix=one%2Bplus%2Bnord%2B3%2Caps%2C223&sr=8-3&th=1",
      preference: "Camera",
    },
    {
      company: "REDMI",
      model: "REDMI Note 13 Pro+ 5G",
      price: 31999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/5/f/-original-imagwu9fyya8h6mg.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/redmi-note-13-pro-5g-fusion-purple-256-gb/p/itmb1aa74d7307e2?pid=MOBGWFHFMH3FAA39&lid=LSTMOBGWFHFMH3FAA394L4TS5&marketplace=FLIPKART&q=redmi%20note%2013%20pro&sattr[]=color&sattr[]=storage&sattr[]=ram&st=color&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_ps",
      preference: "Built Quality",
    },
    {
      company: "Samsung",
      model: "SAMSUNG Galaxy S22 5G ",
      price: 39999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-s22-5g-phantom-white-128-gb/p/itm93d0fc4af3e10?pid=MOBGGG2YBHNYTAFZ&lid=LSTMOBGGG2YBHNYTAFZAOFKPA&marketplace=FLIPKART&q=s22&store=tyy%2F4io&srno=s_1_3&otracker=search&otracker1=search&fm=search-autosuggest&iid=f0e7d46f-0848-4a8f-819c-02d8e173f089.MOBGGG2YBHNYTAFZ.SEARCH&ppt=pp&ppn=pp&ssid=jv9j13ck7k0000001712000811686&qH=b91952a3f6793fb7",
      preference: "Experience",
    },
    {
      company: "IQOO",
      model: "iQOO 12 5G",
      price: 57999,
      image_Link: "https://m.media-amazon.com/images/I/619lW2YtVhL._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/iQOO-Storage-Snapdragon%C2%AE-Platform-Flagship/dp/B07WHQRN1B/ref=sr_1_2?crid=1SI37XCK7CLT4&dib=eyJ2IjoiMSJ9.zMk_kET_myj8QaQm9ta_wabeeIhT8xxdix_hElB81_nV1nTlVrU4x4kRQbQ1x-MrcoIaIi8cS51M9iPIkNAXcXx-46y-JNDC5kbENxnG224tND38dFTg4YT-NJ3Foku-_iIM0nNA56dV2sd6w_8gYfoLA19JuPZcx__5rso3cRqgrGqczG7fBFjkiGOiVGYIyeNjq_k53abGckxNMQY9YiJ5WLh8gJfIXuz-553XFsM.NcTH9tb3_ehyN3tuN7ngghzqSaEK3judY_62UgnUTMA&dib_tag=se&keywords=iqoo%2B12&qid=1712001014&sprefix=i%2Caps%2C218&sr=8-2&th=1",
      preference: "Performance",
    },
    {
      company: "OnePlus",
      model: "OnePlus 12R",
      price: 39999,
      image_Link: "https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg",
      buy_Link:
        "https://www.amazon.in/OnePlus-Cool-Blue-128GB-Storage/dp/B0CQYMVLQ4/ref=sr_1_1_sspa?crid=388TD04FV20FZ&dib=eyJ2IjoiMSJ9.2aZrUPIYefQ5Rvv-9stIFgRrw83YgEW8Hp2Dwl81KrHQfakRVsgTqVEsrMfxg2KiI7TG2MCjCLw49UeGo2M_brwnNXWHLNC-_mLDtotVwuuxSaTYggnjjWfw7YkC2Ar-AzfBgWJgJ-aXmAoTdPUQ1veBA-6hlnXjSeqIM7-OWOb3UvbZaPYhLO-4OpsVjrMJuXH3jeYlnMJLSiOY2AvCrrfhamBGTxJYpC8qWjGdcMw.q8zaQiaqIJ_to_91ahYzE9BVV3z7bxMcu59n4TJOgi8&dib_tag=se&keywords=oneplus%2B12r&qid=1712000932&sprefix=oneplus%2B12%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      preference: "Brand Value",
    },
    {
      company: "Google",
      model: "Google Pixel 8 Pro",
      price: 106999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/f/m/-original-imagtwh5rbhf7ngh.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/google-pixel-8-pro-obsidian-128-gb/p/itm51f9522df8e95?pid=MOBGT5F2S5RHTV6A&lid=LSTMOBGT5F2S5RHTV6AAFYXXO&marketplace=FLIPKART&q=google+pixel+8+pro&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_14_na_na_ps&fm=search-autosuggest&iid=c3518bf4-9d05-4dc9-9d99-b8f19062e7e2.MOBGT5F2S5RHTV6A.SEARCH&ppt=sp&ppn=sp&ssid=022jibr7sg0000001712001352642&qH=525d9a0d4ff3eab4",
      preference: "UI & Camera",
    },
    {
      company: "vivo",
      model: "vivo X100 Pro",
      price: 89999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/m/s/-original-imagwyhjdvhyujhg.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/vivo-x100-pro-asteroid-black-512-gb/p/itm798a26f6edb96?pid=MOBGWH8SQGGQM2CA&lid=LSTMOBGWH8SQGGQM2CAMU5P1P&marketplace=FLIPKART&q=vivo+x100+pro&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_2_6_na_na_ps&fm=search-autosuggest&iid=e45802bd-4194-40ba-9380-3e8de5e85264.MOBGWH8SQGGQM2CA.SEARCH&ppt=pp&ppn=pp&ssid=ntjezs7glc0000001712001152269&qH=c667bc655105bdcc",
      preference: "Camera",
    },
    {
      company: "SAMSUNG",
      model: "SAMSUNG Galaxy S23 Ultra 5G ",
      price: 99999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-cream-256-gb/p/itm322ed1a040dec?pid=MOBGMFFX44FGHNHV&lid=LSTMOBGMFFX44FGHNHVKDIBNL&marketplace=FLIPKART&q=s23+ultra+mobile&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&fm=search-autosuggest&iid=69ff6ce6-09b8-4592-82ed-2d4b400dd425.MOBGMFFX44FGHNHV.SEARCH&ppt=pp&ppn=pp&ssid=oeq0adeyhs0000001712006550956&qH=577543872dc121cd",
      preference: "Best Android Phone(Curve Display)",
    },
    {
      company: "SAMSUNG",
      model: "SAMSUNG Galaxy Z Flip5 ",
      price: 109999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/v/j/galaxy-flip5-sm-f731bzeains-samsung-original-imagru5prpgcragb.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-z-flip5-cream-512-gb/p/itm6f238f9a640fe?pid=MOBGRS32PKBCKUGQ&lid=LSTMOBGRS32PKBCKUGQ2X4XTO&marketplace=FLIPKART&q=samsung+flip+5&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_ps&fm=search-autosuggest&iid=bf3dcdac-4bb3-4abb-b26a-5cf8290c68e3.MOBGRS32PKBCKUGQ.SEARCH&ppt=pp&ppn=pp&ssid=scfffd6row0000001712006379323&qH=565974803248c0dd",
      preference: "Flip",
    },
    {
      company: "SAMSUNG",
      model: "SAMSUNG Galaxy Z Fold5",
      price: 164999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/2/r/galaxy-fold5-sm-f946blbhins-samsung-original-imagru5ugghfnwnj.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-z-fold5-icy-blue-512-gb/p/itm066a0714a4f3c?pid=MOBGRS32SBDHQ9TC&lid=LSTMOBGRS32SBDHQ9TCD8QF9P&marketplace=FLIPKART&q=samsung+folding+phone&store=tyy%2F4io&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_ps&fm=search-autosuggest&iid=39d0f524-939a-4fab-a44d-2c1e5b64bd5d.MOBGRS32SBDHQ9TC.SEARCH&ppt=sp&ppn=sp&ssid=cn1sfolhj40000001712006193754&qH=48febebece31e0f9",
      preference: "Fold",
    },
    {
      company: "SAMSUNG",
      model: "SAMSUNG Galaxy S24 Ultra 5G ",
      price: 129999,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/f/n/u/-original-imagx9egm9mgmvab.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/samsung-galaxy-s24-ultra-5g-titanium-gray-256-gb/p/itm12ef5ea0212ed?pid=MOBGX2F3RQKKKTAW&lid=LSTMOBGX2F3RQKKKTAWKAVWET&marketplace=FLIPKART&q=s+24+ultra+mobile&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&fm=search-autosuggest&iid=09255fc9-8525-45f7-9440-766643e96d44.MOBGX2F3RQKKKTAW.SEARCH&ppt=sp&ppn=sp&ssid=mkre0tlo8w0000001712005671997&qH=e0e8496dd391e7cb",
      preference: "Androd's Best Phone",
    },
    {
      company: "Iphone",
      model: " Apple iPhone 15 Pro",
      price: 177990,
      image_Link:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/q/d/-original-imagtc4hzawdcp4g.jpeg?q=70&crop=false",
      buy_Link:
        "https://www.flipkart.com/apple-iphone-15-pro-black-titanium-1-tb/p/itmc89130009501c?pid=MOBGTAGPS9XNUTAB&lid=LSTMOBGTAGPS9XNUTABMXIBGM&marketplace=FLIPKART&q=iphone+15+pro&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_3_5_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_5_na_na_ps&fm=search-autosuggest&iid=cfd7ef36-b6a2-4a62-951f-0bfad0a2b9b5.MOBGTAGPS9XNUTAB.SEARCH&ppt=pp&ppn=pp&ssid=x0sqiy1q340000001712005884862&qH=c9de95b3b911a866",
      preference: "Best Camera For Video ",
    },
  ];

  // Display mobiles in the grid
  function displayMobiles(mobiles) {
    mobileList.innerHTML = "";
    mobiles.forEach((mobile) => {
      const li = document.createElement("li");
      li.classList.add("mobile-item");

      li.innerHTML = `
                <img class="mobile-image" src="${mobile.image_Link}" alt="${mobile.model}">
                <div class="mobile-details">
                    <p><strong>${mobile.model}</strong></p>
                    <p>Price: ₹${mobile.price}</p>
                    <a class="buy-link" href="${mobile.buy_Link}" target="_blank">Buy Now</a>
                    <p>Preference: ${mobile.preference}</p>
                </div>
            `;

      mobileList.appendChild(li);
    });
  }

  // Apply filter button click event
  applyFilterBtn.addEventListener("click", function () {
    const minPrice = parseInt(document.getElementById("min-price").value);
    const maxPrice = parseInt(document.getElementById("max-price").value);

    // Filter mobiles based on price range
    const filteredMobiles = mobiles.filter(
      (mobile) => mobile.price >= minPrice && mobile.price <= maxPrice
    );

    // Display filtered mobiles
    displayMobiles(filteredMobiles);
  });

  // Sort by select change event
  sortBySelect.addEventListener("change", function () {
    const sortBy = sortBySelect.value;

    // Sort mobiles based on selected option
    if (sortBy === "company") {
      mobiles.sort((a, b) => a.model.localeCompare(b.model));
    } else if (sortBy === "price") {
      mobiles.sort((a, b) => a.price - b.price);
    }

    // Display sorted mobiles
    displayMobiles(mobiles);
  });

  // Initial display of mobiles
  displayMobiles(mobiles);
});
