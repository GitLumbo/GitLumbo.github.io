const getContent = async () => {
  let req_text = await (
    await fetch(
      "https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%95%98%EB%8C%80%ED%95%99%EA%B5%90",
      {
        mode: "no-cors",
      }
    )
  ).text();

  document.getElementById("content").innerHTML = req_text;
  console.log(req_text);
};
window.onload = () => {
  getContent();
};
