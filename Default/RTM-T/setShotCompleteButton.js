importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value = PVUtil.getString(pvs[0]);
var enabled = true;

if (value == "BUSY" ){
	enabled = false;
}

widget.setPropertyValue("enabled", enabled);	
		
