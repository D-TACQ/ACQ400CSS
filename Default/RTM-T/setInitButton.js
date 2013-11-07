importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var shot_complete = PVUtil.getString(pvs[0]);
var state = PVUtil.getString(pvs[1]);

var enabled = false;

if (shot_complete == "BUSY" && state == "STOP"){
	enabled = true;
}

widget.setPropertyValue("enabled", enabled);	
		
