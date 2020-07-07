module.exports = function(RED) {

    // "use strict";



    function wait_press_start_buttonNode(config) {
        RED.nodes.createNode(this, config);

        var node = this

        node.on('input', function(msg, send, done) {

            // substitua a variavel msg pela a informação desejada a ser passada via serial
            var globalContext = node.context().global;
            var exportMode = globalContext.get("exportMode");
            var currentMode = globalContext.get("currentMode");
            var command = {
                    "type": "processing_modular_V1.0",
                    "slot": 1,
                    "compare": {},
                    "method": "wait_press_start_button"
            }
            var file = globalContext.get("exportFile")
            var slot = globalContext.get("slot");
            if(currentMode == "test"){file.slots[slot].jig_test.push(command)}
            else{file.slots[slot].jig_error.push(command)}
            globalContext.set("exportFile", file);
            // node.status({fill:"green", shape:"dot", text:"done"}); // seta o status pra waiting
            console.log(command)
            
            send(msg)

        });

    }

    // nome do modulo
    RED.nodes.registerType("wait_press_start_button", wait_press_start_buttonNode);
}