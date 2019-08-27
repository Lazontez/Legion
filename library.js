
function legion(selector) {

    const _self = {
        element: document.querySelector(selector),
        //Get the HTML Element
        html: () => _self.element,
        //Starts an event Listener 
        on: (event, cb) => {
            _self.element.addEventListener(event, cb)
        },
        //Hides an element
        vanish: () => {
            _self.element.style.display = "none"
        },
        //Changes the background to black 
        lightsOff: () => {
            var body = document.getElementsByTagName("body")[0];
            console.log(body)
            body.style.background = "black"
            body.style.color = "white"

        },
        //Gets the element by attribute or sets an attribute depending on whats inputed 
        element: null,
        attr: (attribute, value) => {
            //if the 2nd paramater <value> is null then the get the 1st paramater <attribute> 
            if (value === null) {
                console.log("get")
                return _self.element.getAttribute(attribute)
            } else if (value) {
                console.log("set")
                _self.element.setAttribute(attribute, value)
                return _self
            }
        },

        //Make a call to the browser and return the value
        //The type request is for the type of request you would like to make to the server
        //The url is the url of the site you would like to call 
        //The Callback function will allow you to do things with the data recieved bacl from the call
        request: (type, url, cb) => {
            var xhttp = new XMLHttpRequest();
            xhttp.addEventListener("load",function () {
                if (xhttp.status != 200) {
                    console.log("Error: " + xhttp.status + "\n" + xhttp.statusText)
                }
                else {
                     cb(xhttp.response)
                }
            })
            xhttp.open(type, url , true);
            xhttp.send()
        }
    }

    _self.element = document.querySelector(selector)

    return _self;

};
var url = "https://api.nasa.gov/?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

legion().request("GET", url, function (res) {

    console.log(res)

})
