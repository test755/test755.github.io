const bMobile =   // will be true if running on a mobile device
  navigator.userAgent.indexOf("Mobile") !== -1 ||
  navigator.userAgent.indexOf("iPhone") !== -1 ||
  navigator.userAgent.indexOf("Android") !== -1 ||
  navigator.userAgent.indexOf("Windows Phone") !== -1

if (!bMobile) {
  console.log("HIDING SECTIONS")
  const sheet = document.createElement("style")
  sheet.innerHTML = ".hide-js {visibility: hidden}";
  document.body.appendChild(sheet);
}