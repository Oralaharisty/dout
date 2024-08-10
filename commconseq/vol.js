// Assuming opts.scrollContainer is a valid selector for the scrollable container
var moveX = 100; // Example value for the horizontal movement

// Adjust the horizontal scroll position of the container
$(opts.scrollContainer).scrollLeft($(opts.scrollContainer).scrollLeft() + moveX);
