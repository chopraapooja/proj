const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// This doesn't solve the problem
global.React = require("react"); // Global React object

Enzyme.configure({
    adapter: new Adapter()
});

