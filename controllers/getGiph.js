const asyncHandler = require("express-async-handler");

const putGiph = asyncHandler(async (req, res) => {
  const giph = await fetch(
    `https://api.giphy.com/v1/gifs/translate?key=T30kebQo5u4qSPUOCzOPvri24dKUnxhs&s=leopard`,
    { mode: "cors" }
  );

  if (!giph.ok) {
    res.status(404).send("Giph not found");
    return;
  }

  const ans = await giph.json();

  res.render("details", { giphlink: ans.data.images.original.url });
});

module.exports = { putGiph };
