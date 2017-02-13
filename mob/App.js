	window.onload = function () {
		console.log("init was called");
		init();
	};
	
	var $hospitalsList = $("#hospitalList");
	var id1_1 = $("#id1_1");
	var sp1_1 = $("#sp1_1");
	var sp2_1 = $("#sp2_1");
	var dr1_1 = $("#dr1_1");
	var dr2_1 = $("#dr2_1");
	var nrb_1 = $("#nrb_1");
	var Irb_1 = $("#Irb_1");
	var eq1_1 = $("#eq1_1");
	var eq2_1 = $("#eq1_1");
	var ads1_1 = $("#ads1_1");
	var ph_1 = $("#ph_1");
	var em1_1 = $("em1_1");
	
	var HospitalUrl = "/api/hospitals";
	
	function getHospitals(){
		console.log("getHospitals was called");
      return $.get(HospitalUrl)
    }
    
    function populateHospitalsList (hos) {
    	console.log("populateHospitalsList was called");
    	$hospitalsList.empty();

		var hospitals = [];
		id1_1.html("kareem");
		$("my_test").innerHTML="hello";
		$.each(hos, function (idx, hospital) {
			console.log("a hospital was processed");
			console.log(hospital);
			var $div = $("<div>").attr({"data-role":"main","class":"ui-content" });
			var $a = $("<a>").attr({"href":"#myPopup","data-rel":"popup",
				"class":"ui-btn ui-btn-inline ui-corner-all ","style":"padding-left:1.2em; width:100% "});
			var $label = $("<label>").attr({"type":"text","value":hospital.name ,"style":"height:50px"});
			console.log($label);
			var $div2 = $("<div>").attr({"data-role":"popup","class":"ui-content","style":"min-width:250px;"});
			//var $form = $("<form>").attr("method","post");
			var $div3 = $("<div>");
			var $h3 = $("<h3>");
			var $label2 = $("<label>").attr("value",hospital.name);
			var $h4_spec = $("<h4>").append("Hospital Specailists:");
			var $ul = $("<ul>");
			//var $label_ul_spec = $("<label>").attr("value",);
			var $h4_doc = $("<h4>").append("Hospital Doctors:");
			//var $label_ul_doc = $("<label>").attr("value",);
			var $h4_beds = $("<h4>").append("Hospital Beds:");

			$a.append($label);			
			$h3.append($label2);
			$div3.append($h3);
			//$form.append($div3);
			$div2.append($div3);
			$div.append($a).append($div2);
			var $tr = $("<tr>").append($div);
			var item1 = $("<li></li>").text("wow");
			hospitals.push(item1);
			});
			$.each(hospitals, function (idx, $tr) {
				$hospitalsList.append($tr);
				console.log("appending from the list");
			});
    }
    
	function init(){
		//getHospitals().then(populateHospitalsList);
		var lisi= [{
			name: "hhh"
		},{name: "uuu"}];
		populateHospitalsList(lisi);
	}
	