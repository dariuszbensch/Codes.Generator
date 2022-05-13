//Function used to generate QR code
function htmlEncode(value) {
    return $('<div/>').text(value).html();
}


//Chcecking if enter was pressed
function genCodesOnEnter() {
    if (event.which == 13 || event.keyCode == 13) {
        if (document.getElementById("barcode"))generateBarcode();
        if (document.getElementById("qrcode"))generateQrCode();
    }
}

function generateQrCode() {    
    $('#text-width').width($("#js-description-width").val() + "px");
    $('#title').width($("#js-description-width").val() + "px");
    document.getElementById("title").innerHTML = document.getElementById("js-qr-code-value").value;
    document.getElementById("title").style.fontSize = $("#titleSize").val() + "px";
    $(".js-qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#js-qr-code-value").val()) + "&chs=" + $("#qrSize").val() + "x" + $("#qrSize").val() + "&chld=L|0");    
}




function generateBarcode() {

    //var width = document.getElementById("js-description-width").offsetWidth;
    $('#main-width').width($("#js-description-width").val() + "px");
    $('#title').width($("#js-description-width").val() + "px");

    //Barcodes descriptions
    document.getElementById("title").style.fontSize = $("#js-font-size").val() + "px";
    document.getElementById("title").innerHTML = $("#js-title").val();
    document.getElementById("barcodeNumber").innerHTML = $("#js-code-number").val();
    document.getElementById("barcodeNumber").style.fontSize = $("#js-number-size").val() + "px";

    //Barcode paremeters
    var value = $("#js-code-number").val();
    var renderer = "svg";
    var fontSize = $("#js-number-size").val();

    var settings = {
        output: renderer,
        fontSize: fontSize,
        bgColor: "#FFFFFF",
        color: "#000000",
        showHRI: false,
        barWidth: $("#js-bar-width").val(),
        barHeight: $("#js-bar-height").val(),
    };

    //Generate every codes but has been used only few of those
    $("#js-barcode-target-ean13").html("").show().barcode(value, "ean13", settings);
    $("#js-barcode-target-ean8").html("").show().barcode(value, "ean8", settings);
    $("#js-barcode-target-upc").html("").show().barcode(value, "upc", settings);
    $("#js-barcode-target-code128").html("").show().barcode(value, "code128", settings);
    $("#js-barcode-target-code93").html("").show().barcode(value, "code93", settings);
    $("#js-barcode-target-code39").html("").show().barcode(value, "code39", settings);
    $("#js-barcode-target-code11").html("").show().barcode(value, "code11", settings);
    $("#js-barcode-target-datamatrix").html("").show().barcode(value, "datamatrix", settings);
    $("#js-barcode-target-codabar").html("").show().barcode(value, "codabar", settings);
    $("#js-barcode-target-std25").html("").show().barcode(value, "std25", settings);
    $("#js-barcode-target-int25").html("").show().barcode(value, "int25", settings);
    $("#js-barcode-target-msi").html("").show().barcode(value, "msi", settings);


}

