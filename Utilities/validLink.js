/** @format */

const isValidLink = (url) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

module.exports = isValidLink;
