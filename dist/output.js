
/**
 * Menu
 */

// Show an element
var show = function (elem) {
    elem.classList.add('hidden');
};
// Hide an element
var hide = function (elem) {
    elem.classList.remove('hidden');
};
// Toggle element visibility
var toggle = function (elem) {
    elem.classList.toggle('hidden');
};

// Listen for click events
document.addEventListener('click', function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;
    // Prevent default link behavior
    event.preventDefault();
    // Get the content
    var content = document.querySelector("#menu");
    if (!content) return;
    console.log(content);
    // Toggle the content
    toggle(content);
}, false);

/**
 * Modal
 */

document.addEventListener('click', function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('openModal')) return;
    // Prevent default link behavior
    event.preventDefault();
    // Get the content
    var content = document.querySelector("#modalItem");
    if (!content) return;
    // Toggle the content
    content.classList.remove('hidden');
}, false);

document.addEventListener('click', function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('closeModal')) return;
    // Prevent default link behavior
    event.preventDefault();
    // Get the content
    var content = document.querySelector("#modalItem");
    if (!content) return;
    // Toggle the content
    content.classList.add('hidden');
}, false);

