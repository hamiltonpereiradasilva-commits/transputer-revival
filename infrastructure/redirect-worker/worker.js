export default {
  async fetch(request) {
    const source = new URL(request.url);

    const target = new URL("https://transputerrevival.org");
    target.pathname = source.pathname;
    target.search = source.search;

    return Response.redirect(target.toString(), 301);
  }
};
