importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var MAXLEN= PVUtil.getLong(pvArray[0]);;
	var pp_in = PVUtil.getLong(pvArray[1]);
    var pre = pp_in*MAXLEN/100;
    
	pvArray[2].setValue(pre);
	pvArray[3].setValue(MAXLEN-pre);
}