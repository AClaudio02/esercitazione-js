fetch("https://cataas.com/api/tags")
  .then((response) => response.json())
  .then((response) => {
    const select = document.querySelector("select");
    for (let i = 5; i < 10 || i <= 20; i++) {
      const option = document.createElement("option");
      option.innerText = response[i];
      option.setAttribute("id", i);
      select.appendChild(option);
      if (i === 10) {
        i = 14;
      }
    }
    select.addEventListener("change", () => {
      const selectedOption = document.querySelector("select").value;
      const body = document.querySelector("body");

      fetch(`https://cataas.com/cat/${selectedOption}?json=true`)
        .then((result) => result.json())
        .then((result) => {
          const img = document.createElement("img");
          const div = document.createElement("div");
          img.setAttribute("src", `https://cataas.com/${result.url}`);
          body.appendChild(div);
          div.appendChild(img);
          const p = document.createElement("p");
          p.innerText = `${result.tags[1]} - ${result.tags[2]} - ${result.tags[3]}`;
          body.appendChild(p);
        });
    });
  });
