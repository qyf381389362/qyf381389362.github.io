function Swipe(container, options) {
    var element = container.find(":first");
    var swipe = {};
    var slides = element.find(">");
    var width = container.width();
    var height = container.height();
    element.css({
        width: (slides.length * width) + "px",
        height: height + "px"
    });
    $.each(slides, function(index) {
        var slide = slides.eq[index];
        slides.eq(index).css({
            width: width + "px",
            height: height + "px"
        })
    });
    var isComplete = false;
    var timer;
    var callbacks = {};
    container[0].addEventListener("transitionend", function() {
        isComplete = true
    }, false);

    function monitorOffet(element) {
        timer = setTimeout(function() {
            if (isComplete) {
                clearInterval(timer);
                return
            }
            callbacks.move(element.offset().left);
            monitorOffet(element)
        }, 500)
    }
    swipe.watch = function(eventName, callback) {
        callbacks[eventName] = callback
    };
    swipe.scrollTo = function(x, speed) {
        element.css({
            "transition-timing-function": "linear",
            "transition-duration": speed + "ms",
            "transform": "translate3d(-" + x + "px,0px,0px)"
        });
        return this
    };
    return swipe
};