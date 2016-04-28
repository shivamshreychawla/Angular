//-------------------Error----
function ErrorDetail()
    {
    	this.ErrorCode="";
		this.Message="";
    }

function TradingServiceBaseDataContract()
  {
   this.Errors=new ErrorDetail();
   this.BaseEventClassId="";
   this.IsError=false;
  }

function ConsumerContext()
{
	this.DeviceInfo="";
	this.RequestChannel="";
	this.SubSystemId="";
	this.SystemContext="";
	this.SystemID="";
	this.TransactionID="";
	this.UserId="";
	this.UserName="";
}
ConsumerContext.prototype=new TradingServiceBaseDataContract();

function TradingServiceBaseRequest()
{
	this.ConsumerContext=new ConsumerContext();
}

function TradingServiceRequest()
{
	this.ServicePayload=new Object();
	//this.ConsumerContext=new ConsumerContext();
}
TradingServiceRequest.prototype=new TradingServiceBaseRequest();

function User()
{
	this.BaseEventClassId= "";
		this.Errors= "";
		this.IsError= "false";
		this.BadPasswordCount= "0";
		this.CurrentWorkspace= "";
		this.DisplayName= "";
		this.DistinguishedName= "";
		this.Domain= "";
		this.Email= "";
		this.ExtraPermissions= "";
		this.FirstName= "";
		this.GlobalMenuItemList= "";
		this.InvalidLogonMessage= "";
		this.IsAccountLocked= "false";
		this.IsActivated= "false";
		this.IsLoggedIn= "false";
		this.IsSysAdmin= "false";
		this.IsUserLoggedInBefore= "false";
		this.LastName= "";
		this.Password= "";
		this.PrimaryMenuItemList= "";
		this.RoleList= "";
		this.SelectedSportID= "3";
		this.ShortName= "";
		this.UserAudit= "";
		this.UserGroupList= "";
		this.UserGroupName= "";
		this.UserID= "0";
		this.UserName= "";
		this.UserSecurityToken= ""
}

//-------------------------User---------

