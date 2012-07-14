importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var value = PVUtil.getString(pvs[0]);
var color = ColorFontUtil.BLUE;

if (value == "STOP" ) color = ColorFontUtil.RED;
if (value == "ARM" ) color = ColorFontUtil.YELLOW;
if (value == "RUN" ) color = ColorFontUtil.GREEN;
 
widget.setPropertyValue("background_color", color);	
		
