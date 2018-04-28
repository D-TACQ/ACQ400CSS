importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var sitelist = PVUtil.getString(pvArray[0]);
var dx = PVUtil.getLong(pvArray[1]);
var acq480_true = PVUtil.getLong(pvArray[2]) != 0? true: false;
var site=dx-1;

var sites = sitelist.split(",");
var isVisible = false;
if (site < sites.length){
	isVisible = sites[site].search("48[02]") >-1? acq480_true: !acq480_true;
}

widget.setPropertyValue("visible", isVisible);
