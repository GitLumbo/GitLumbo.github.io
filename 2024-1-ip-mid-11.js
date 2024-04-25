const req_text = await (
  await fetch(
    "https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%95%98%EB%8C%80%ED%95%99%EA%B5%90"
  )
).text();
window.onload = () => {
  document.getElementById("content").innerHTML = req_text;
};
