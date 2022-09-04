/** @format */

const { default: axios } = require("axios");
const cheerio = require("cheerio");
const absolutePath = require("../Utilities/absolutePath");
const getOG = require("../Utilities/getOGProperty");
const isValidLink = require("../Utilities/validLink");

const linkPreview = async (req, res, next) => {
  let link = req.body.link;

  if (!link) {
    link = req.query?.url;
  }
  ze4r;

  try {
    if (!link) {
      throw new Error("URL is needed");
    }

    if (!isValidLink(link)) {
      throw new Error("Please send a Valid URL!");
    }

    const response = await axios.get(link);
    const html = cheerio.load(response.data);
    // console.log(response);

    // PREVIEWER DATA

    // TITLE...
    let title = getOG(html, "title", "content");
    if (!title) {
      title = html("title").text();
    }

    // Description...
    const description = getOG(html, "description", "content");

    // Image...
    let image = getOG(html, "image", "content");
    // Absolute Path handling ...
    if (image) {
      image = absolutePath(link, image);
    }

    //Site name ...
    const sitename = getOG(html, "site_name", "content");

    //OG URL
    const url = getOG(html, "url", "content");

    //Type ...
    const type = getOG(html, "tyoe", "content");

    //Domain  ....
    const new_URL = new URL(link);
    const domain = new_URL.hostname.replace("www.", "");

    //favicon ...
    let favicon = html("link[rel=icon]").attr("href");
    if (favicon) {
      favicon = absolutePath(link, favicon);
    }

    res.status(200).json({
      success: true,
      title,
      description,
      image,
      sitename,
      url,
      type,
      domain,
      favicon,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = linkPreview;
