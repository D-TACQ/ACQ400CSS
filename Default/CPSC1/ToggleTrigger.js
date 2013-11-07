importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);

var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var trigger;
	
	var test_def = PVUtil.getString(pvArray[0]);
	if (PVUtil.getLong(pvArray[0]) == 1){
		var old = PVUtil.getLong(pvArray[1]);
		if (old != 0){
			old = 0;
		}else{
			old = 1;
		}	
			
		pvArray[1].setValue(old);
	}
}