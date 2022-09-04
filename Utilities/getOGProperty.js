/** @format */

const getOG = (html, property, content) => {
  return html(`meta[property='og:${property}']`).attr(content);
};

module.exports = getOG;
