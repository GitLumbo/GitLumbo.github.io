const progress_page = await (
  await fetch(
    "https://learn.inha.ac.kr/report/ubcompletion/user_progress_a.php?id=50738"
  )
).text();
const opener = document.createElement("div");
opener.innerHTML = progress_page;
const progress_table = opener.querySelector(".user_progress_table");

const col_name_nodes = progress_table.querySelectorAll("thead th");
const headers = [];
for (let i = 0; i < col_name_nodes.length; ++i)
  headers.push(col_name_nodes[i].innerText.trim());

const data = [];
for (let i = 0; i < progress_table.rows.length; ++i) {
  const table_rows = progress_table.rows;
  const row_data = {};

  for (let j = 0; j < table_rows[i].cells.length; ++j) {
    if (j == 3)
      row_data[headers[j]] = table_rows[i].cells[j].firstChild.textContent;
    else row_data[headers[j]] = table_rows[i].cells[j].innerText;
  }
  data.push(row_data);
}
