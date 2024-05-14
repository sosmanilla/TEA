const AS_URL_BASE =
  "https://script.google.com/macros/s/AKfycbxV8c8J2lfZSx1UvUfSfsET57x5gOP4JxR0xwm5Cmv2-ft36HV_jXKbUzUs45RVR8In5Q/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + "?k=" + k)
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch((err) => console.log(err));
}
