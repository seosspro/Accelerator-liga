function init() {
  let map = new ymaps.Map("map", {
    center: [59.9387, 30.323004],
    zoom: 16,
  });
}

ymaps.ready(init);
