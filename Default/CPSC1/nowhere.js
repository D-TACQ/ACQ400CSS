
importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var enabled = PVUtil.getLong(pvArray[0]);
	
	if (enabled == 0){
		pvArray[2].setValue("nowhere");
	}else{
		pvArray[2].setValue(PVUtil.getString(pvArray[1]));
	}
}
