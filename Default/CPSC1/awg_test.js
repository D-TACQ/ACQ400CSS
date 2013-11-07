importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);

var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var trigger;
	
	var ix = PVUtil.getLong(pvArray[0]);
	pvArray[ix].setValue(1);
}