importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var sitelist = PVUtil.getString(pvArray[0]);
var dx = PVUtil.getLong(pvArray[1]);
var re = new RegExp(PVUtil.getString(pvArray[2]), 'gm');

var site=dx-1;

var sites = sitelist.split(",");
var isVisible = false;
if (site < sites.length){
	isVisible = sites[site].search(re) >-1? true: false;
}

widget.setPropertyValue("visible", isVisible);
