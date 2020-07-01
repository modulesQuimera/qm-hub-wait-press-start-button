module.exports = function(RED) {

    // "use strict";



    function wait_press_start_buttonNode(config) {
        RED.nodes.createNode(this, config);

        var node = this

        node.on('input', function(msg, send, done) {

            // substitua a variavel msg pela a informação desejada a ser passada via serial

            var obj = {
                payload: {
                    "type": "processing_modular_V1.0",
                    "slot": 1,
                    "compare": {},
                    "method": "wait_press_start_button"
                }
            }
            send(obj)

        });

    }

    // nome do modulo
    RED.nodes.registerType("wait_press_start_button", wait_press_start_buttonNode);
}