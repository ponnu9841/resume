$(document).ready(function () {
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUNE",
		"JULY",
		"AUG",
		"SEPT",
		"OCT",
		"NOV",
		"DEC",
	]

	let date = new Date();
	const element = $("#date");
	const year = date.getFullYear();
	const month = months[date.getMonth()];
	const day = date.getDate();

	element.text(`${day} ${month} ${year}`);

	$("#create_pdf").on("click", function () {
		

		var printContent = $("#resume").html();
		var head = $("head").html();
		var originalContent = $("body").html();

		var myWindow = window.open("", "", "width=2480,height=3508");
		myWindow.document.write("<html lang='en'><head>");
		myWindow.document.write(
			head +
			'<body>' +
			printContent +
			'</body></html>'
		);

		// myWindow.document.write(
		// 	'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>'
		// );
		// myWindow.document.write("</head><body>");
		// myWindow.document.write(printContent);
		// myWindow.document.write("</body></html>");
		myWindow.document.close();
		myWindow.focus();
		// myWindow.save("sample-file.pdf");
		myWindow.print();
		// if (
		// 	setTimeout(function () {
		// 		myWindow.close();
		// 	}, 1000)
		// ) {
		// }
	});
});

// $(document).ready(function () {
// 	var form = $("#resume"),
// 		cache_width = form.width(),
// 		a4 = [595.28, 841.89]; // for a4 size paper width and height

// 	$("#create_pdf").on("click", function () {
// 		$("body").scrollTop(0);
// 		createPDF();
// 	});

// 	function createPDF() {
// 		getCanvas().then(function (canvas) {
// 			var img = canvas.toDataURL("image/png"),
// 				doc = new jsPDF({
// 					unit: "px",
// 					format: "a4",
// 				});
// 			doc.addImage(img, "JPEG");
// 			doc.save("techsolutionstuff.pdf");
// 			// form.width(cache_width);
// 		});
// 	}

// 	function getCanvas() {
// 		form.width(a4[0] * 1.33333 - 80).css("max-width", "none");
// 		return html2canvas(form, {
// 			imageTimeout: 2000,
// 			removeContainer: true,
// 		});
// 	}
// });
