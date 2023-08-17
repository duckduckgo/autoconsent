export const snippets = {
  EVAL_0() {
    return console.log(1);
  },
  EVAL_1() {
    // eslint-disable-next-line
    // @ts-ignore
    return window.__cmp && typeof __cmp("getCMPData") === "object";
  }
}

export function getFunctionBody(snippetFunc) {
  const snippetStr = snippetFunc.toString();
  return snippetStr.substring(snippetStr.indexOf("{") + 1, snippetStr.lastIndexOf("}"));
}
