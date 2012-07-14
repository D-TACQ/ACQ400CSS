importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var state = PVUtil.getString(pvs[0]);

var enabled = true;

if (state == "STOP"){
	enabled = false;
}

widget.setPropertyValue("enabled", enabled);	
		
