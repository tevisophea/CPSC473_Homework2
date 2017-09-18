var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

//change detail image and detail image title
function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

//retrieve and return the value of the data-image-url attribute
function imageFromThumb(thumbnail) {
  'use strict';
  //return thumbnail.getAttribute('data-image-url');
  return thumbnail.getAttribute('data-image-url')
}

//return the value of the data-image-title attribute
function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

//Added an event listener for the document object that is listening for any clicks that occur on the page
//takes in thumb as a parameter
function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

  //generate random otter
  var random_otter = Math.floor(Math.random() * 5);
  thumbnails[(random_otter)].setAttribute('data-image-url', 'img/tacocat.jpg');
  thumbnails.forEach(addThumbClickHandler);
  resetOtter();
}

//reset otter thumbnails to their original data-image-url
function resetOtter() {
  'use strict';
    var resetThumb = getThumbnailsArray();
    thumbnails[(random_otter)].setAttribute('data-image-url', 'imageFromThumb(thumbnail)');
    thumbnails.forEach(addThumbClickHandler);
  }

initializeEvents();
