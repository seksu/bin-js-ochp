var services = { /* Services */

  e - clearing.net: { /* Ports */

    eCHS_P - System: { /* Methods */
      AddCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
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
                 implausibleCdrsArray[] of type CdrId|s:string|minLength,maxLength,pattern
        }; */
      },
      GetCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrStatus of type  {
                         CdrStatusType of type  {
                           }
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
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      CheckCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrStatus of type  {
                         CdrStatusType of type  {
                           }
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
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetRoamingAuthorisationList: function(args, callback, headers, req) {
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
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      SetRoamingAuthorisationList: function(args, callback, headers, req) {
        /*
          args = {
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedRoamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetChargePointList: function(args, callback, headers, req) {
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
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      SetChargepointList: function(args, callback, headers, req) {
        /*
          args = {
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
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
                 refusedChargePointInfo[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetRoamingAuthorisationListUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 roamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateRoamingAuthorisationList: function(args, callback, headers, req) {
        /*
          args = {
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedRoamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      ConfirmCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 approved[] of type  {
                         cdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                   }
                 declined[] of type  {
                         cdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
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
      GetChargePointListUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateChargePointList: function(args, callback, headers, req) {
        /*
          args = {
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
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
                 refusedChargePointInfo[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateTariffs: function(args, callback, headers, req) {
        /*
          args = {
                 TariffInfoArray[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedTariffInfo[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetTariffUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 TariffInfoArray[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetSingleRoamingAuthorisation: function(args, callback, headers, req) {
        /*
          args = {
                 emtId of type  {
                         instance of type  {
                           }
                         tokenType of type  {
                           }
                         tokenSubType of type  {
                           }
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
                 roamingAuthorisationInfo of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      }
    },
    eCHS_Q - System: { /* Methods */
      AddCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
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
                 implausibleCdrsArray[] of type CdrId|s:string|minLength,maxLength,pattern
        }; */
      },
      GetCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrStatus of type  {
                         CdrStatusType of type  {
                           }
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
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      CheckCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 cdrStatus of type  {
                         CdrStatusType of type  {
                           }
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
                 cdrInfoArray[] of type  {
                         CdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                         emtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         status of type  {
                                 CdrStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         startDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         endDateTime of type  {
                                 LocalDateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         duration of type  {
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         connectorType of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         meterId of type  {
                           }
                         chargingPeriods[] of type  {
                                 startDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDateTime of type  {
                                         LocalDateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingItem of type  {
                                         BillingItemType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 billingValue of type s:float
                                 itemPrice of type s:float
                                 periodCost of type s:float
                                 taxrate of type s:int
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         totalCost of type s:float
                         currency of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetRoamingAuthorisationList: function(args, callback, headers, req) {
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
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      SetRoamingAuthorisationList: function(args, callback, headers, req) {
        /*
          args = {
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedRoamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetChargePointList: function(args, callback, headers, req) {
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
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      SetChargepointList: function(args, callback, headers, req) {
        /*
          args = {
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
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
                 refusedChargePointInfo[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetRoamingAuthorisationListUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 roamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateRoamingAuthorisationList: function(args, callback, headers, req) {
        /*
          args = {
                 roamingAuthorisationInfoArray[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedRoamingAuthorisationInfo[] of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      ConfirmCDRs: function(args, callback, headers, req) {
        /*
          args = {
                 approved[] of type  {
                         cdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
                   }
                 declined[] of type  {
                         cdrId of type CdrId|s:string|minLength,maxLength,pattern
                         evseId of type EvseId|s:string|pattern,pattern
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
      GetChargePointListUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateChargePointList: function(args, callback, headers, req) {
        /*
          args = {
                 chargePointInfoArray[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
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
                 refusedChargePointInfo[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         locationId of type  {
                           }
                         timestamp of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         locationName of type  {
                           }
                         locationNameLang of type  {
                           }
                         images[] of type  {
                                 uri of type  {
                                   }
                                 thumbUri of type  {
                                   }
                                 class of type  {
                                   }
                                 type of type  {
                                   }
                                 width of type  {
                                   }
                                 height of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedResource[] of type  {
                                 uri of type  {
                                   }
                                 class of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointAddress of type  {
                                 houseNumber of type  {
                                   }
                                 address of type  {
                                   }
                                 city of type  {
                                   }
                                 zipCode of type  {
                                   }
                                 country of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointLocation of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         relatedLocation[] of type  {
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         timeZone of type  {
                           }
                         openingTimes of type  {
                                 regularHours[] of type  {
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 twentyfourseven of type s:boolean
                                 exceptionalOpenings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 exceptionalClosings[] of type  {
                                         periodBegin of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         periodEnd of type  {
                                                 DateTime of type  {
                                                   }
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 closedCharging of type s:boolean
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         status of type  {
                                 ChargePointStatusType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         statusSchedule[] of type  {
                                 startDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 endDate of type  {
                                         DateTime of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 status of type  {
                                         ChargePointStatusType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         telephoneNumber of type  {
                           }
                         location of type  {
                                 GeneralLocationType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         parkingSpot[] of type  {
                                 parkingId of type ParkingId|s:string|pattern,pattern
                                 restriction[] of type  {
                                         RestrictionType of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 floorLevel of type  {
                                   }
                                 parkingSpotNumber of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         restriction[] of type  {
                                 RestrictionType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         authMethods[] of type  {
                                 AuthMethodType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         connectors[] of type  {
                                 connectorStandard of type  {
                                         ConnectorStandard of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 connectorFormat of type  {
                                         ConnectorFormat of type  {
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 tariffId of type TariffId|s:string|pattern,pattern
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         chargePointType of type  {
                           }
                         ratings of type  {
                                 maximumPower of type s:float
                                 guaranteedPower of type s:float
                                 nominalVoltage of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         userInterfaceLang[] of type  {
                           }
                         maxReservation of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      UpdateTariffs: function(args, callback, headers, req) {
        /*
          args = {
                 TariffInfoArray[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
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
                 refusedTariffInfo[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetTariffUpdates: function(args, callback, headers, req) {
        /*
          args = {
                 lastUpdate of type  {
                         DateTime of type  {
                           }
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
                 TariffInfoArray[] of type  {
                         tariffId of type TariffId|s:string|pattern,pattern
                         individualTariff[] of type  {
                                 tariffElement[] of type  {
                                         priceComponent of type  {
                                                 billingItem of type  {
                                                         BillingItemType of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 itemPrice of type s:float
                                                 stepSize of type s:float
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         tariffRestriction of type  {
                                                 regularHours[] of type  {
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 startDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 endDateTime of type  {
                                                         DateTime of type  {
                                                           }
                                                         targetNSAlias of type tns
                                                         targetNamespace of type http://ochp.eu/1.4
                                                   }
                                                 minEnergy of type s:float
                                                 maxEnergy of type s:float
                                                 minPower of type s:float
                                                 maxPower of type s:float
                                                 minDuration of type s:int
                                                 maxDuration of type s:int
                                                 targetNSAlias of type tns
                                                 targetNamespace of type http://ochp.eu/1.4
                                           }
                                         targetNSAlias of type tns
                                         targetNamespace of type http://ochp.eu/1.4
                                   }
                                 recipient[] of type  {
                                   }
                                 currency of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      },
      GetSingleRoamingAuthorisation: function(args, callback, headers, req) {
        /*
          args = {
                 emtId of type  {
                         instance of type  {
                           }
                         tokenType of type  {
                           }
                         tokenSubType of type  {
                           }
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
                 roamingAuthorisationInfo of type  {
                         EmtId of type  {
                                 instance of type  {
                                   }
                                 tokenType of type  {
                                   }
                                 tokenSubType of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         contractId of type ContractId|s:string|pattern,pattern,pattern,pattern
                         printedNumber of type  {
                           }
                         expiryDate of type  {
                                 DateTime of type  {
                                   }
                                 targetNSAlias of type tns
                                 targetNamespace of type http://ochp.eu/1.4
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      }
    },
    eCHS_P - System - live: { /* Methods */
      UpdateStatus: function(args, callback, headers, req) {
        /*
          args = {
                 evse[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 parking[] of type  {
                         parkingId of type ParkingId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 ttl of type  {
                         DateTime of type  {
                           }
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
      GetStatus: function(args, callback, headers, req) {
        /*
          args = {
                 startDateTime of type  {
                         DateTime of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 statusType of type  {
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 combined[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 evse[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 parking[] of type  {
                         parkingId of type ParkingId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      }
    },
    eCHS_Q - System - live: { /* Methods */
      UpdateStatus: function(args, callback, headers, req) {
        /*
          args = {
                 evse[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 parking[] of type  {
                         parkingId of type ParkingId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 ttl of type  {
                         DateTime of type  {
                           }
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
      GetStatus: function(args, callback, headers, req) {
        /*
          args = {
                 startDateTime of type  {
                         DateTime of type  {
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 statusType of type  {
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 combined[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 evse[] of type  {
                         evseId of type EvseId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
                 parking[] of type  {
                         parkingId of type ParkingId|s:string|pattern,pattern
                         targetNSAlias of type tns
                         targetNamespace of type http://ochp.eu/1.4
                   }
        }; */
      }
    }
  }
};