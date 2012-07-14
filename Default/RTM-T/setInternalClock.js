importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.csstudio.platform.data);

var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var kHz = PVUtil.getLong(pvArray[0]);
	pvArray[1].setValue(kHz * 1000);		
}