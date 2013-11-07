importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{

	var macroInput = DataUtil.createMacrosInput(true);
	var uut = PVUtil.getString(pvArray[0]);
	var typ = PVUtil.getString(pvArray[1]);
	var chan = PVUtil.getString(pvArray[2]);
	var pv = uut + ':' + typ;
	if (chan < 10) pv += '0';
	pv = pv + Math.floor(chan);	
	
	//Open an OPI with the new Macro Input.
	macroInput.put("pv_name", pv);	
    var opi = widget.getPropertyValue("name") + ".opi";
	ScriptUtil.openOPI(widgetController,  opi, 0, macroInput);
}