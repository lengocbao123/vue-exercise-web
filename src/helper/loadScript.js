const oldScripts = [
  // 'oldjs/jquery.min.js',
  "oldjs/jquery-migrate-3.0.1.min.js",
  "oldjs/popper.min.js",
  "oldjs/bootstrap.min.js",
  "oldjs/jquery.easing.1.3.js",
  "oldjs/jquery.waypoints.min.js",
  "oldjs/jquery.stellar.min.js",
  "oldjs/owl.carousel.min.js",
  "oldjs/jquery.magnific-popup.min.js",
  "oldjs/aos.js",
  "oldjs/jquery.animateNumber.min.js",
  "oldjs/bootstrap-datepicker.js",
  "oldjs/scrollax.min.js",
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false",
  "oldjs/google-map.js",
  "oldjs/main.js",
];

export default function () {
  setTimeout(() => {
    oldScripts.map((s) => {
      let oldScript = document.createElement("script");
      oldScript.setAttribute("src", s);
      document.head.appendChild(oldScript);
    });
  }, 100);
}
