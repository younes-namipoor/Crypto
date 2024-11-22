const main = document.querySelector("main");
const gif = document.querySelector(".gif");
const footer = document.querySelector("#footer");
const fig = document.querySelector("#fig");
const dataLinks = [
  {
    id: 1,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
  },
  {
    id: 2,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg",
  },
  {
    id: 3,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
  },
  {
    id: 4,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
  },
  {
    id: 5,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg",
  },
  {
    id: 6,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
  },
  {
    id: 7,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
  },
  {
    id: 8,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
  },
  {
    id: 9,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg",
  },
  {
    id: 10,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8000.svg",
  },
  {
    id: 11,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg",
  },
  {
    id: 12,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg",
  },
  {
    id: 13,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg",
  },
  {
    id: 14,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg",
  },
  {
    id: 15,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg",
  },
  {
    id: 16,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg",
  },
  {
    id: 17,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg",
  },
  {
    id: 18,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg",
  },
  {
    id: 19,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg",
  },
  {
    id: 20,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg",
  },
  {
    id: 21,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg",
  },
  {
    id: 22,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg",
  },
  {
    id: 23,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg",
  },
  {
    id: 24,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg",
  },
  {
    id: 25,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg",
  },
  {
    id: 26,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg",
  },
  {
    id: 27,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg",
  },
  {
    id: 28,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg",
  },
  {
    id: 29,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg",
  },
  {
    id: 30,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg",
  },
  {
    id: 31,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4642.svg",
  },
  {
    id: 32,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg",
  },
  {
    id: 33,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8916.svg",
  },
  {
    id: 34,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1321.svg",
  },
  {
    id: 35,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg",
  },
  {
    id: 36,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5690.svg",
  },
  {
    id: 37,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29270.svg",
  },
  {
    id: 38,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg",
  },
  {
    id: 39,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg",
  },
  {
    id: 40,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28321.svg",
  },
  {
    id: 41,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6536.svg",
  },
  {
    id: 42,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28752.svg",
  },
  {
    id: 43,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg",
  },
  {
    id: 44,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
  },
  {
    id: 45,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28752.svg",
  },
  {
    id: 46,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
  },
  {
    id: 47,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4847.svg",
  },
  {
    id: 48,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg",
  },
  {
    id: 49,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3794.svg",
  },
  {
    id: 50,
    src: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3897.svg",
  },
];

const getData = () => {
  fetch(
    "https://coinranking1.p.rapidapi.com/coins?orderBy=marketCap&orderDirection=desc&limit=50&offset=0&rapidapi-key=44da97e8f2msh46c9130b0aac84cp16608djsnabe4800bf358"
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(err);
    })
    .then((Data) => {
      Data.data.coins.map((val, i) => {
        gif.style.display = "none";
        const div = document.createElement("div");
        div.classList.add("body");
        div.innerHTML = `
    <i class="bi bi-star"></i>
    <div>${i + 1}</div>
    <div>
    <img src="${val.iconUrl}">
    <span>${val.name}</span>
    <span>${val.symbol}</span>
    </div>
    <div>${"$" + val.price}</div>
    <div class="change1">${val.change + "%"}</div>
    <div>${"$" + val.marketCap}</div>
    <div><img class="change2" src="${dataLinks[i].src}" alt=""></div>
    `;
        main.appendChild(div);
        const change1 = document.querySelectorAll(".change1");
        const change2 = document.querySelectorAll(".change2");
        if (val.change) {
          change1.forEach((val) => {
            if (val.innerHTML > "0") {
              val.style.color = "green";
            } else {
              val.style.color = "red";
            }
          });
          change2.forEach((val, i) => {
            if (change1[i].innerHTML > "0") {
              val.style.filter =
                "hue-rotate(85deg) saturate(80%) brightness(0.85)";
            } else {
              val.style.filter =
                "hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)";
            }
          });
        }
      });
    })

    .catch((err) => {
      gif.style.display = "flex";
    });
};

getData();
setTimeout(getData , 30000)
footer.addEventListener("click", () => {
  fig.classList.toggle("high");
});
