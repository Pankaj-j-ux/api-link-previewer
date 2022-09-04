/** @format */

const absolutePath = (url, relativePath) => {
  if (relativePath.slice(0, 4) == "http") {
    return relativePath;
  }

  const { href } = new URL(url);
  return new URL(relativePath, href);
};

module.exports = absolutePath;
