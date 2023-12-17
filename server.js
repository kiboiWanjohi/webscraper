const username = PROCESS.env.USERNAME;
const password = PROCESS.env.PASSWORD;
const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/deals", async (req, res) => {
  try {
    const body = {
      source: "amazon_search",
      query: "deals of the day",
      parse: true,
      pages: 1,
    };
    await fetch("", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic" + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });
    const data = await response.json();

    const results = data.results[0].content.results.organic;
    const filteredDeals = results.filter((deal) => deal.price_strikethrough);
    const sortedByBestDeal = filteredDeals.sort(
      (b, a) =>
        ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
    );

    res.send(sortedByBestDeal);
  } catch (err) {
    console.error(err);
  }
});
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
