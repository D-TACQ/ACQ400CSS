importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value = PVUtil.getString(pvs[0]);
var color;

if (value == "BUSY" ){
	color = ColorFontUtil.GREEN;
}else{
	color = ColorFontUtil.RED;
}

widget.setPropertyValue("background_color", color);	
		
