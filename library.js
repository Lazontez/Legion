
function legion(selector) {

    const _self = {
        element: document.querySelector(selector),
        //Get the HTML Element
        html: () => self.element,
        //Starts a event Listener 
        on: (event, cb) => {
            _self.element.addEventListener(event, cb)
        },
        //Hides an element
        vanish: () => {
            _self.element.style.display = "none"
        },
        //Dark Mode 
        //***Changes the background to black */
        lightsOff: () => {
            var body = document.getElementsByTagName("body")[0];
            console.log(body)
            body.style.background = "black"
            body.style.color = "white"

        },
        element: null,
        attr: (attribute, value) => {
            if (value == null) {
                console.log("get")
                return _self.element.getAttribute(attribute)
            } else if (value) {
                console.log("set")
                _self.element.setAttribute(attribute, value)
                return _self
            }
        },
    }

    _self.element = document.querySelector(selector)

    return _self;

};
