const context = require.context('../posts', false, /\.md$/);

console.log(context);

const count = 1;
const num_pages = 1;
const getPage = (num) => num;

export {
  count,
  num_pages,
  getPage,
};