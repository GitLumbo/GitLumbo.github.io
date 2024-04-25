let req_text = "";
fetch(
  "https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%95%98%EB%8C%80%ED%95%99%EA%B5%90",
  {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "max-age=0",
      "if-modified-since": "Tue, 23 Apr 2024 14:32:56 GMT",
      "sec-ch-ua":
        '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "cross-site",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrer: "https://www.google.com/",
    referrerPolicy: "origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }
) // (1)
  .then((data) => data.text()) // (2)
  .then((text) => {
    req_text = text;
  }); // (3)
window.onload = () => {
  document.getElementById("content").innerHTML = req_text;
};
