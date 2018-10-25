$(document).ready(function() {
    $('#example').DataTable( {
        // "order": [[ 3, "desc" ]]
        responsive: true

    } );
} );

//toggle css status
function validateStatus(){

  // var arr = document.querySelectorAll('.text-blue');
  // console.log(arr[2]);
  // for (var i=0;i<arr.length;i++) {
  //     arr[i].className = "text-warning";
  // }

  var arr = document.querySelectorAll('.status');

  for (var i = 0; i < arr.length; i++) {
    switch(arr[i].innerHTML) {
      case "RUN":
          arr[i].className = "text-success";
          break;
      case "TRIP":
          arr[i].className = "text-danger";
          break;
      case "NORMAL":
          arr[i].className = "text-primary";
          break;
      case "HIGH":
          arr[i].className = "text-danger";
          break;
      default:
          arr[i].className = "text-dark";
    }
  }

 // setInterval( "refreshContent();", 2000 );

}

	// function refreshContent(){
	// 	$( "#IOTable" ).load( "input-output.html #IOTable" );
	// }

validateStatus();



// zoom option

// var init = 100;
// var plus=0;
//
// function zoomIn() {
//   init += 10;
//   var zoom = document.getElementById('zoom');
//
//   zoom.style.zoom=`${init}%`;
//   console.log("its zoomin in!");
// }
// function zoomOut() {
//   init += -10;
//   var zoom = document.getElementById('zoom');
//   zoom.style.zoom=`${init}%`;
//   console.log("its zoomin in!");
// }


//newer
var init = 100;

function zoom (clickedId){

  if (clickedId ==="zoomIn") {

    if (init < 180) {
      init += 10;
      document.getElementById('zoomCanvas').style.zoom = `${init}%`;
      document.getElementById('zoomValue').innerHTML = `${init}%`;
    }

  } else if (clickedId === "zoomOut") {

    if (init > 100) {

      init -= 10;
      document.getElementById('zoomCanvas').style.zoom=`${init}%`;
      document.getElementById('zoomValue').innerHTML = `${init}%`;
    }

  }
}

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// });
//
// $('#tooltip1').tooltip({ boundary: 'scrollParent' });
//
// $('#tooltip1').tooltip('update');
