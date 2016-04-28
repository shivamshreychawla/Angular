//----------------------Constant Value------------------------

var serverUrl="http://localhost:1338/";
var services=[];
services.push({key: "userManagement",value:"UserManagementService.svc/"});
services.push({key: "eventManagement",value:"EventManagementApi.svc/"});
services.push({key: "priceManagement",value:"PriceManagementApi.svc/"});
services.push({key: "crossManagement",value:"CrossRefManagementApi.svc/"});
services.push({key: "refManagement",value:"RefDataManagementApi.svc/"});


function getServiceNameUrl(servicename,operation)
{
	var returnUrl;
	for(var i=0;i<services.length;i++)
	{
		if(services[i].key==servicename)
		{
			returnUrl= serverUrl+services[i].value+operation;
		}
	}
	return returnUrl;
}