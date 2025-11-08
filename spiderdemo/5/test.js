function O0o0O0O0() {
  // 配置请求参数
  const config = {
    url: "/authentication/api/ob1_challenge/page",
    params: {
      float: "down",
      genre: "5000",
      device: "iphone",
      type: "one",
      brand: "paid",
    },
  };

  // Base64 编码函数
  function encodeBase64(str) {
    const encoded = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, hex) =>
      String.fromCharCode("0x" + hex)
    );
    return btoa(encoded);
  }

  // XOR 加密函数
  function xorEncrypt(text, key) {
    key = key || buildCookie();
    const textArr = text.split("");
    for (let i = 0; i < textArr.length; i++) {
      textArr[i] = String.fromCharCode(
        textArr[i].charCodeAt(0) ^ key[(i + 10) % key.length].charCodeAt(0)
      );
    }
    return textArr.join("");
  }

  // 构造 cookie（主要为了得到 synct 时间）
  function buildCookie() {
    const base =
      "ob1_check=A1sdRUIQChtxen8pI0dANi8zcX5zHBl+YnEhLyZIPxw8WkVRVRliYGBFVVdeSFkuXBcaAEEABAhVVFNQQVBacV5AVVpEB3xUV0ceCyZPagcSQEpvAWdVSkcsSz1LBB4QHBtTXF0GDUVSWklWBRsCHAkcBBoY; USERINFO=GjVY0ItO7GCcMQqJQdiJcHnqwmrT%2FMyNl3IO%2F%2FO11KRRtitnMdY2EWmeRWzFHHoKNSJf3k6Urd0Kx3ukCblegf4MNXBWmlhD0g8IATKMKM%2FpkXh%2BAc8%2Ft1SAjiV2fojSb%2FCAzvXGid4vRLpMfbw%2FgA%3D%3D; AUTHKEY=Y%2BgRYdRRsyNDhA0dru%2BQzEZanYUOYKoNJGaPj7Vi3ymWOgXdt2BA%2BJ%2FGe78Z2oPfZjajGjM725yUJdMMstrjyzVUhYfWOicfFgbHQHE%2BBpgCsoP4gIxU8w%3D%3D;";
    const tail =
      " ada35577182650f1_gr_cs1=ob122414085964; synct=" +
      Date.now() +
      ".223; syncd=-1530";
    return base + tail;
  }

  // 取 syncd 字段值
  const cookie = buildCookie();
  const syncdMatch = cookie.match(/syncd=(-?\d+)/);
  const syncd = syncdMatch ? -parseInt(syncdMatch[1]) : 0;

  // 时间偏移量
  const offset = Date.now() - syncd - 1661224081041;

  // 拼接参数
  const delimiter = "@#";
  const params = Object.values(config.params)
    .filter((v) => v !== undefined)
    .sort()
    .join("");

  const base64Params = encodeBase64(params);
  const joined =
    base64Params +
    delimiter +
    config.url +
    delimiter +
    offset +
    delimiter +
    3;

  // 生成随机密钥
  const randomKey = "xyz517cda96efgh" + Math.floor(Math.random() * 10);

  // XOR + Base64 加密
  const encrypted = encodeBase64(xorEncrypt(joined, randomKey));

  // 拼上时间戳再 base64 一次
  const result = btoa(encrypted + Date.now());
  return result;
}

// console.log(O0o0O0O0());
