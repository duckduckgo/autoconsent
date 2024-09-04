const isTopWindow = () => {
  const topWindow = window.top.hasOwnProperty('cypressUtilityBinding')  // checking this property is an arbitrary way to determine if the window is a test-framework one. There might be other, better ways to do this, this just was the first one to work.
    ? window.top.frames[0]
    : window.top

  return topWindow === window;
}

export default isTopWindow
