class Response {
  constructor(code, ...args) {
    this.code = code;
    if (args.length > 0) this.msg = args[0];
    if (args.length > 1) this.data = args.slice(1);
  }
}

function hello(req, res) {
  res.end(JSON.stringify(new Response(
    0,
    "Hello, this Kininaru API server, Powered by Node.js"
  )));
}

function jsonRouter(req, res) {
  let url = req.url, targetFunc;

  if (url === "/") targetFunc = hello;

  if (targetFunc === undefined || targetFunc === null) return false;

  targetFunc(req, res);
  return true;

}

module.exports = {
  hello,
  jsonRouter,
}
