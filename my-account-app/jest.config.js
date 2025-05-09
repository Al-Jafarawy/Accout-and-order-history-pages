module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/" // اجعل axios يتم تحليله بواسطة Babel
  ],
};
