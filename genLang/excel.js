let selectedFile;

let data=[]

console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              data = rowObject
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
              document.getElementById("converted").style.display = 'block'
         });
        }
    }
});

function filterData() {
    var key = document.getElementById("key").value
    var lang = document.getElementById("lang").value

    var rebuild = {}

    var getData = JSON.parse(document.getElementById("jsondata").innerHTML)

    getData.forEach((v, k) => {
        var k = v[key]
        var l = v[lang]

        if(k && l)
            rebuild[k] = l
    });

    document.getElementById("jsondata").innerText = JSON.stringify(rebuild,undefined,4)
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function downloadAsJSON() {
    var text = document.getElementById("jsondata").innerText
    var filename = document.getElementById('filename').value

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(text);
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", (filename || 'language')+".json");
    dlAnchorElem.click();

  // if (!navigator.clipboard) {
  //   fallbackCopyTextToClipboard(text);
  //   return;
  // }
  // navigator.clipboard.writeText(text).then(function() {
  //   alert('Async: Copying to clipboard was successful!');
  // }, function(err) {
  //   console.error('Async: Could not copy text: ', err);
  // });
}