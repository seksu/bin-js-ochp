var services = { /* Services */
  "e-clearing.net-OCHP-direct": { /* Ports */
  //"OCHP_1.4-direct": { /* Ports */
    "eCHS_P-System-direct": { /* Methods */
      AddServiceEndpoints: function(args, callback, headers, req) {
        console.log(headers)
        console.log("Add service end point")
        console.log(req)
        return  callback({
                    providerEndpointArray:["asdf","asdf"],
                    operatorEndpointArray:["192.168.1.1","192.168.1.2"]
                })

        /*
          args = {
                 providerEndpointArray[] of type  {
                         url of type  {
                           }
                         namespaceUrl of type  {
                           }
                         accessToken of type  {
                           }
                         validDate of type  {
                           }
                         whitelist[] of type ContractPattern|s:string|pattern
                         blacklist[] of type ContractPattern|s:string|pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 operatorEndpointArray[] of type  {
                         url of type  {
                           }
                         namespaceUrl of type  {
                           }
                         accessToken of type  {
                           }
                         validDate of type  {
                           }
                         whitelist[] of type EvsePattern|s:string|pattern
                         blacklist[] of type EvsePattern|s:string|pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 result of type  {
                         resultCode of type  {
                                 resultCode of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         resultDescription of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetServiceEndpoints: function(args, callback, headers, req) {
        console.log("Yeah it work");
        return callback({
            result: "DE-8AC-C12E56L89-2"
        })
        /*
          args = {
          }
        */
        //
        // Your code
        //
        /* return {
                 result of type  {
                         resultCode of type  {
                                 resultCode of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         resultDescription of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 providerEndpointArray[] of type  {
                         url of type  {
                           }
                         namespaceUrl of type  {
                           }
                         accessToken of type  {
                           }
                         validDate of type  {
                           }
                         whitelist[] of type ContractPattern|s:string|pattern
                         blacklist[] of type ContractPattern|s:string|pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 operatorEndpointArray[] of type  {
                         url of type  {
                           }
                         namespaceUrl of type  {
                           }
                         accessToken of type  {
                           }
                         validDate of type  {
                           }
                         whitelist[] of type EvsePattern|s:string|pattern
                         blacklist[] of type EvsePattern|s:string|pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      }
    }
  }
};
module.exports = services;
