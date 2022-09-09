let selectedFile;

var data=[]
var lang=[]

document.getElementById('input').addEventListener("change", (event) => {
    // selectedFile = event.target.files[0];
    data=[]
    lang=[]

    for(i = 0; i<event.target.files.length; i++) {
        var reader = new FileReader();
        var l = (event.target.files[i].name).replace('.json', '')
        lang.push(l)
        reader.onload = (event) => {
            var obj = JSON.parse(event.target.result);
            data.push(obj)
        };
        reader.readAsText(event.target.files[i]);
    }
})

document.getElementById('button').addEventListener("click", () => {

    var defLang = document.getElementById("lang").value
    var filename = document.getElementById("filename").value

    if(defLang) {
        var arr = []

        var indLang = lang.indexOf(defLang)
        var selLang = data[indLang]
        var selLangKey = Object.keys(selLang)

        selLangKey.forEach((v,k) => {
            var obj = {}

            obj['key'] = v

            for(i=0;i<lang.length;i++) {
                if(data[i][v]) {
                    obj[lang[i]] = data[i][v]
                }
            }

            arr.push(obj)
        });

        // console.log(arr)
        exportToCsv(arr, filename)
    }
});

function exportToCsv(arrayOfJson, filename) {
    // convert JSON to CSV
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(arrayOfJson[0])
    let csv = arrayOfJson.map(row => header.map(fieldName => 
    JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')
  
    // Create link and download
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
    link.setAttribute('download', (filename || 'export')+'.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}