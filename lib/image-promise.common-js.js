/*! npm.im/image-promise 6.0.2 */
'use strict';

function load(image, attributes) {
	if (!image) {
		return Promise.reject();
	} else if (typeof image === 'string') {
		/* Create a <img> from a string */
		var src = image;
		image = new Image();
		Object.keys(attributes || {}).forEach(
			function (name) { return image.setAttribute(name, attributes[name]); }
		);
		image.src = src;
	} else if (image.length !== undefined) {
		/* Treat as multiple images */

		// Momentarily ignore errors
		var reflected = [].map.call(image, function (img) { return load(img, attributes).catch(function (err) { return err; }); });

		return Promise.all(reflected).then(function (results) {
			var loaded = results.filter(function (x) { return x.naturalWidth; });
			if (loaded.length === results.length) {
				return loaded;
			}
			return Promise.reject({
				loaded: loaded,
				errored: results.filter(function (x) { return !x.naturalWidth; })
			});
		});
	} else if (image.tagName.toUpperCase() !== 'IMG') {
		return Promise.reject();
	}

	var promise = new Promise(function (resolve, reject) {
		if (image.naturalWidth && image.complete) {
			// If the browser can determine the naturalWidth the
			// image is already loaded successfully
			resolve(image);
		} else if (image.complete) {
			// If the image is complete but the naturalWidth is 0px
			// it is probably broken
			reject(image);
		} else {
			image.addEventListener('load', fulfill);
			image.addEventListener('error', fulfill);
		}
		function fulfill() {
			if (image.naturalWidth && image.complete) {
				resolve(image);
			} else {
				reject(image);
			}
			image.removeEventListener('load', fulfill);
			image.removeEventListener('error', fulfill);
		}
	});
	promise.image = image;
	return promise;
}

module.exports = load;
