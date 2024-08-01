!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).dtpweb={})}(this,(function(t){"use strict";
/**
     * @file utils.ts
     * @author DothanTech (hudianxing@dothantech.com)
     * @brief PC JavaScript 版本 相关接口类型及方法定义。
     * @version 2.1
     * @date 2022-05-16
     *
     * @copyright Copyright (c) 2022
     *
     */var e,n,i,o,r,s,a,u,l,d,h,c,p,f,g,_,P,v,A,L,y,R,m="GET",I="127.0.0.1",D=15216,O=35216,b=2e3,T=5e3,w=40,C=30,E="黑体",N=3.5,S=.35,M=[.5,.5],j=1.5,B=5,W=20,q=192,x=4096,U="lpapi",K="local",J="Version",F="SetSupportedPrinters",k="GetDefaultPrinter",H="SetDefaultPrinter",G="DiscoveryPrinters",$="GetPrinters",V="OpenPrinter",X="ClosePrinter",Q="IsPrinterOpened",Y="IsPrinterOnline",z="GetPrinterName",Z="ShowProperty",tt="PrintImageD",et="Print",nt="GetParam",it="SetParam",ot="GetPrinterDPI",rt="StartJob",st="AbortJob",at="CommitJob",ut="GetJobID",lt="GetJobInfo",dt="GetPageInfo",ht="GetPageImage",ct="StartPage",pt="EndPage",ft="ReturnDrawResult",gt="DrawText",_t="Draw1DBarcode",Pt="Draw2DQRCode",vt="Draw2DPdf417",At="Draw2DDataMatrix",Lt="DrawRectangle",yt="DrawRoundRectangle",Rt="DrawEllipse",mt="DrawLine",It="DrawDashLine",Dt="DrawImage",Ot="DrawImageD",bt="ServerInfo",Tt="application/x-www-form-urlencoded;charset=UTF-8",wt="application/octet-stream;encoding=base64",Ct="application/json;charset:utf-8";t.LPA_ParamID=void 0,(e=t.LPA_ParamID||(t.LPA_ParamID={}))[e.GapType=1]="GapType",e[e.PrintDarkness=2]="PrintDarkness",e[e.PrintSpeed=3]="PrintSpeed",e[e.PrinterDPIx=4]="PrinterDPIx",e[e.PrinterDPIy=5]="PrinterDPIy",t.LPA_GapType=void 0,(n=t.LPA_GapType||(t.LPA_GapType={}))[n.Unset=255]="Unset",n[n.None=0]="None",n[n.Hole=1]="Hole",n[n.Gap=2]="Gap",n[n.Black=3]="Black",t.LPA_PrintSpeed=void 0,(i=t.LPA_PrintSpeed||(t.LPA_PrintSpeed={}))[i.Unset=255]="Unset",i[i.Min=0]="Min",i[i.Low=1]="Low",i[i.Normal=2]="Normal",i[i.High=3]="High",i[i.Max=4]="Max",t.LPA_PrintDarkness=void 0,(o=t.LPA_PrintDarkness||(t.LPA_PrintDarkness={}))[o.Unset=255]="Unset",o[o.Min=0]="Min",o[o.Low=3]="Low",o[o.Normal=5]="Normal",o[o.High=9]="High",o[o.Max=14]="Max",t.LPA_ItemAlignment=void 0,(r=t.LPA_ItemAlignment||(t.LPA_ItemAlignment={}))[r.Start=0]="Start",r[r.Center=1]="Center",r[r.End=2]="End",r[r.Stretch=3]="Stretch",r[r.Expand=4]="Expand",t.LPA_FontStyle=void 0,(s=t.LPA_FontStyle||(t.LPA_FontStyle={}))[s.Regular=0]="Regular",s[s.Bold=1]="Bold",s[s.Italic=2]="Italic",s[s.BoldItalic=3]="BoldItalic",s[s.Underline=4]="Underline",s[s.Strikeout=8]="Strikeout",function(t){t[t.None=0]="None",t[t.Char=1]="Char",t[t.Word=2]="Word"}(a||(a={})),function(t){t[t.LPA_1DBT_UPC_A=20]="LPA_1DBT_UPC_A",t[t.LPA_1DBT_UPC_E=21]="LPA_1DBT_UPC_E",t[t.LPA_1DBT_EAN13=22]="LPA_1DBT_EAN13",t[t.LPA_1DBT_EAN8=23]="LPA_1DBT_EAN8",t[t.LPA_1DBT_CODE39=24]="LPA_1DBT_CODE39",t[t.LPA_1DBT_ITF25=25]="LPA_1DBT_ITF25",t[t.LPA_1DBT_CODABAR=26]="LPA_1DBT_CODABAR",t[t.LPA_1DBT_CODE93=27]="LPA_1DBT_CODE93",t[t.LPA_1DBT_CODE128=28]="LPA_1DBT_CODE128",t[t.LPA_1DBT_ISBN=29]="LPA_1DBT_ISBN",t[t.LPA_1DBT_ECODE39=30]="LPA_1DBT_ECODE39",t[t.LPA_1DBT_AUTO=60]="LPA_1DBT_AUTO"}(u||(u={})),t.LPA_JobNames=void 0,(l=t.LPA_JobNames||(t.LPA_JobNames={})).Preview="#!#Preview#!#",l.Transparent="#!#Transparent#!#",l.Print="dtpweb",t.LPA_PrintActions=void 0,(d=t.LPA_PrintActions||(t.LPA_PrintActions={}))[d.PrintData=1]="PrintData",d[d.PrevBase64=2]="PrevBase64",d[d.PrevUrl=4]="PrevUrl",d[d.Transparent=128]="Transparent",d[d.TransBase64=130]="TransBase64",d[d.Print=4096]="Print",function(t){t[t.Print=0]="Print",t[t.White=1]="White",t[t.Transparent=2]="Transparent"}(h||(h={})),t.LPA_Result=void 0,(c=t.LPA_Result||(t.LPA_Result={}))[c.OK=0]="OK",c[c.PARAM_ERROR=1]="PARAM_ERROR",c[c.SYSTEM_ERROR=2]="SYSTEM_ERROR",c[c.NO_SUPPORTED_PRINTER=3]="NO_SUPPORTED_PRINTER",c[c.UNSUPPORTED_PRINTER=4]="UNSUPPORTED_PRINTER",c[c.NO_PRINT_DATA=5]="NO_PRINT_DATA",c[c.NO_PAGE_DIMENSION=6]="NO_PAGE_DIMENSION",c[c.INVALID_FILE=7]="INVALID_FILE",c[c.UNSUPPORTED_FUNCTION=8]="UNSUPPORTED_FUNCTION",c[c.INVALID_FONT_NAME=9]="INVALID_FONT_NAME",c[c.NETWORK_FAILED=90]="NETWORK_FAILED",c[c.NETWORK_TIMEOUT=91]="NETWORK_TIMEOUT",c[c.NETWORK_ERROR=92]="NETWORK_ERROR",c[c.NETWORK_ABORT=93]="NETWORK_ABORT",c[c.NETWORK_UNSUPPORTED=94]="NETWORK_UNSUPPORTED",c[c.NETWORK_EXCEPTION=95]="NETWORK_EXCEPTION",function(t){t[t.ShowReadNone=0]="ShowReadNone",t[t.ShowReadDown=1]="ShowReadDown",t[t.ShowReadUp=2]="ShowReadUp",t[t.ShowStartStop=4]="ShowStartStop",t[t.EanCheckCode=8]="EanCheckCode"}(p||(p={})),function(t){t[t.Unicode=0]="Unicode",t[t.Ansi=1]="Ansi",t[t.UTF8=2]="UTF8"}(f||(f={})),function(t){t[t.ModeNum=0]="ModeNum",t[t.ModeAn=1]="ModeAn",t[t.Mode8Bit=2]="Mode8Bit",t[t.ModeKanji=3]="ModeKanji",t[t.ModeStructure=4]="ModeStructure",t[t.ModeEci=5]="ModeEci",t[t.ModeFnc1First=6]="ModeFnc1First",t[t.ModeFnc1Second=7]="ModeFnc1Second"}(g||(g={})),function(t){t[t.EccLevel_L=0]="EccLevel_L",t[t.EccLevel_M=1]="EccLevel_M",t[t.EccLevel_Q=2]="EccLevel_Q",t[t.EccLevel_H=3]="EccLevel_H"}(_||(_={})),function(t){t[t.Unicode=0]="Unicode",t[t.Ansi=1]="Ansi",t[t.UTF8=2]="UTF8"}(P||(P={})),function(t){t[t.ModeAuto=0]="ModeAuto",t[t.ModeNumeric=1]="ModeNumeric",t[t.ModeText=2]="ModeText",t[t.ModeBinary=3]="ModeBinary"}(v||(v={})),function(t){t[t.EccLevel_Auto=0]="EccLevel_Auto",t[t.EccLevel_1=1]="EccLevel_1",t[t.EccLevel_2=2]="EccLevel_2",t[t.EccLevel_3=3]="EccLevel_3",t[t.EccLevel_4=4]="EccLevel_4",t[t.EccLevel_5=5]="EccLevel_5",t[t.EccLevel_6=6]="EccLevel_6",t[t.EccLevel_7=7]="EccLevel_7",t[t.EccLevel_8=8]="EccLevel_8"}(A||(A={})),function(t){t[t.LPASIF_RAWDATA=0]="LPASIF_RAWDATA",t[t.LPASIF_BPP_1=1]="LPASIF_BPP_1",t[t.LPASIF_BPP_1N=2]="LPASIF_BPP_1N",t[t.LPASIF_32_RGBA=32]="LPASIF_32_RGBA",t[t.LPASIF_32_BGRA=33]="LPASIF_32_BGRA",t[t.LPASIF_32_RGB=34]="LPASIF_32_RGB",t[t.LPASIF_32_BGR=35]="LPASIF_32_BGR",t[t.LPASIF_PACKAGE=90]="LPASIF_PACKAGE",t[t.LPASIF_IMAGEDATA=93]="LPASIF_IMAGEDATA"}(L||(L={})),function(t){t[t.UrlEncoded=0]="UrlEncoded",t[t.Base64=1]="Base64",t[t.Json=2]="Json"}(y||(y={})),t.LPA_DrawType=void 0,(R=t.LPA_DrawType||(t.LPA_DrawType={})).Text="text",R.Barcode="barcode",R.QRCode="qrcode",R.Pdf417="pdf417",R.DataMatrix="dataMatrix",R.Image="image",R.Rect="rectangle",R.RoundRect="roundRectangle",R.Ellipse="ellipse",R.Line="line",R.DashLine="dashLine";var Et={scaleUnit:0,getJobAction:function(t){var e=t||"";return e.startsWith("#!#Prev")?2:e.startsWith("#!#Trans")?130:4096},assignValue:function(t,e){var n=t||{};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(this.isPlainObject(n[i])&&this.isPlainObject(e[i])?this.assignValue(n[i],e[i]):this.isPlainObject(e[i])?n[i]=this.assignValue({},e[i]):Array.isArray(e[i])?n[i]=e[i].slice():n[i]=e[i]);return n},merge:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=t||{};if(!e)return i;for(var o=0;o<e.length;o++)i=this.assignValue(i,e[o]);return i},isObject:function(t){return null!==t&&"object"==typeof t},isPlainObject:function(t){if("[object Object]"!==toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},isFunction:function(t){return"[object Function]"===toString.call(t)},isStream:function(t){return this.isObject(t)&&this.isFunction(t.pipe)},isArrayBuffer:function(t){return"[object ArrayBuffer]"===toString.call(t)},isArray:function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isHttpsRequest:function(t){return/https:?/.test(t)},parseArray:function(t,e){void 0===e&&(e=1);var n=[];if(Et.isArray(t))return t;if("string"==typeof t)return t.split(",");if("number"==typeof t)for(var i=0;i<e;i++)n.push(t);return n},parseMargin:function(t){var e,n,i,o,r=[];if(t.margin&&(1===(r=Et.parseArray(t.margin,4)).length?r=[r[0],r[0],r[0],r[0]]:2===r.length?r=[r[0],r[1],r[0],r[1]]:3===r.length&&r.push(r[1])),t.marginH){var s=Et.parseArray(t.marginH,2);r[1]=null!==(e=s[0])&&void 0!==e?e:0,r[3]=null!==(n=s[1])&&void 0!==n?n:s[0]}if(t.marginV){s=Et.parseArray(t.marginV,2);r[0]=null!==(i=s[0])&&void 0!==i?i:0,r[2]=null!==(o=s[1])&&void 0!==o?o:s[0]}return r},getParamString:function(t){t=t||{};var e=[];for(var n in t){var i=t[n];null!=i&&("object"!=typeof i&&"function"!=typeof i&&e.push("".concat(n,"=").concat(encodeURIComponent(i))))}return e.length>0?e.join("&"):""},getRequestData:function(t,e){if(null==e?e=[]:"object"!=typeof e&&(e=[e]),e.length&&"object"==typeof e[0])return e[0];var n={};if("string"==typeof t&&(t=[t]),t.length<1||!t[0])return n;for(var i=0;i<t.length;i++)n[t[i]]=e[i];return n},buildURL:function(t,e){var n="string"==typeof e?e:this.getParamString(e);return n?"".concat(t,":").concat(n):t},request:function(e,n){"undefined"!=typeof XMLHttpRequest?this.requestXMLHttp(e,n):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?this.requestNodeHttp(e,n):n({statusCode:t.LPA_Result.NETWORK_UNSUPPORTED,resultInfo:"not supported http request environment!"})},requestXMLHttp:function(e,n){var i,o=new XMLHttpRequest,r=e.host||I,s=e.port||D,a=e.baseUrl||"http://".concat(r,":").concat(s),u=e.data,l=e.headers;e.url&&"/"===e.url[0]&&(e.url=e.url.substring(1));var d="".concat(a,"/").concat(e.url);try{o.open(e.method||m,d,!e.sync),e.timeout&&!e.sync&&(o.timeout=e.timeout);var h=function(){o&&(i=200===o.status?JSON.parse(o.responseText):{statusCode:t.LPA_Result.NETWORK_FAILED,resultInfo:o.responseText},n(i),o=null)};if("onloadend"in o?o.onloadend=h:o.onreadystatechange=function(){o&&4===o.readyState&&(0!==o.status||o.responseURL&&0===o.responseURL.indexOf("file:"))&&setTimeout(h)},o.onabort=function(){o&&(n({statusCode:t.LPA_Result.NETWORK_ABORT,resultInfo:"Request aborted!"}),o=null)},o.onerror=function(){n({statusCode:t.LPA_Result.NETWORK_ERROR,resultInfo:"Network Error"}),o=null},o.ontimeout=function(){n({statusCode:t.LPA_Result.NETWORK_TIMEOUT,resultInfo:e.timeout?"timeout of ".concat(e.timeout,"ms exceeded"):"timeout exceeded"}),o=null},l&&"setRequestHeader"in o)for(var c in l)void 0===u&&"content-type"===c.toLowerCase()?delete l[c]:o.setRequestHeader(c,l[c]);o.send(u)}catch(e){n({statusCode:t.LPA_Result.NETWORK_EXCEPTION,resultInfo:e})}},requestNodeHttp:function(e,n){var i=require("http");e.url&&"/"!==e.url[0]&&(e.url="/".concat(e.url));var o={host:e.host||I,port:e.port||D,method:e.method||m,path:e.url,headers:e.headers},r="",s=i.request(o,(function(e){e.on("data",(function(t){r+=t})),e.on("end",(function(){var e={statusCode:t.LPA_Result.NETWORK_EXCEPTION,resultInfo:r};try{e=JSON.parse(r)}catch(t){console.log(t)}n(e)})),e.on("error",(function(e){i.aborted||n({statusCode:t.LPA_Result.NETWORK_ERROR,resultInfo:e})}))}));if(s.on("error",(function(e){n({statusCode:t.LPA_Result.NETWORK_FAILED,resultInfo:e})})),s.on("socket",(function(t){t.setKeepAlive(!0,6e4)})),e.timeout){var a=e.timeout;s.setTimeout(a,(function(){s.destroy(),n({statusCode:t.LPA_Result.NETWORK_TIMEOUT,resultInfo:e.timeout?"timeout of ".concat(e.timeout,"ms exceeded"):"timeout exceeded"})}))}s.end(e.data)},unitConvert:function(t){return 1===this.scaleUnit&&t?100*t:t},poundToMm:function(t){return 25.4*t/72},mmToPound:function(t){return 72*t/25.4},unitConvertOfDrawBase:function(t,e){t=t||{};var n=e||[],i=n[3]||0,o=n[0]||0,r=n[4]||0,s=n[5]||0,a=t.x||0,u=t.y||0;return t.x=this.unitConvert(a+i+r),t.y=this.unitConvert(u+o+s),t.width=this.unitConvert(t.width),t.height=this.unitConvert(t.height),t.orientation&&t.orientation>3&&(t.orientation=t.orientation/90),t},unitConvertOfFillRect:function(t,e){return(t=this.unitConvertOfDrawBase(t,e)).width=t.width||this.unitConvert(W),t.height=t.height||t.width,t.cornerWidth=this.unitConvert(t.cornerWidth),t.cornerHeight=this.unitConvert(t.cornerHeight)||t.cornerWidth,t},unitConvertOfDrawRect:function(t,e){return(t=this.unitConvertOfFillRect(t,e)).lineWidth=this.unitConvert(t.lineWidth||S),t},unitConvertOfLine:function(t,e){var n,i;t=t||{};var o=e||[],r=o[3]||0,s=o[0]||0,a=o[4]||0,u=o[5]||0,l=t.x1||0,d=t.y1||0,h=null!==(n=t.x2)&&void 0!==n?n:l,c=null!==(i=t.y2)&&void 0!==i?i:d;if(t.x1=this.unitConvert(l+r+a),t.y1=this.unitConvert(d+s+u),t.x2=this.unitConvert(h+r+a),t.y2=this.unitConvert(c+s+u),t.lineWidth=this.unitConvert(t.lineWidth||S),!t.dashLens&&Et.isArray(t.dashLen)?(t.dashLens=t.dashLen,t.dashLen=void 0):t.dashLen||"string"!=typeof t.dashLens||(t.dashLen=t.dashLens,t.dashLens=void 0),"string"==typeof t.dashLen&&(t.dashLens=t.dashLen.split(",")),t.dashLens&&t.dashLens.length>0){1===t.dashLens.length&&t.dashLens.push(t.dashLens[0]);for(var p=0;p<t.dashLens.length;p++)t.dashLens[p]=this.unitConvert(t.dashLens[p]);t.dashLen=t.dashLens.join(","),delete t.dashLens}return t.orientation&&t.orientation>3&&(t.orientation=t.orientation/90),t},checkTextOptions:function(t){if(t.fontHeight=Et.unitConvert(t.fontHeight),t.charSpace=Et.unitConvert(t.charSpace),"number"==typeof t.lineSpace&&(t.lineSpace=Et.unitConvert(t.lineSpace)),t.leadingIndent||(t.leadingIndentChars?(t.leadingIndent=10*t.leadingIndentChars,delete t.leadingIndentChars):t.leadingIndentMM?(t.leadingIndentMM>=.01?t.leadingIndent=100*t.leadingIndentMM+1e3:t.leadingIndentMM<=-.01&&(t.leadingIndent=100*t.leadingIndentMM-1e3),delete t.leadingIndentMM):t.leadingIndentColon&&(t.leadingIndent=1e3,delete t.leadingIndentColon)),0===t.leadingIndent&&delete t.leadingIndent,Array.isArray(t.regionCorners)){for(var e=0;e<t.regionCorners.length;e++)t.regionCorners[e]=Et.unitConvert(t.regionCorners[e]);t.regionCorners=t.regionCorners.join(",")}if(!t.regionCorners){var n=[];if(t.regionLeftUpCorner&&(n[0]=t.regionLeftUpCorner,delete t.regionLeftUpCorner),t.regionRightUpCorner&&(n[1]=t.regionRightUpCorner,delete t.regionRightUpCorner),t.regionRightBottomCorner&&(n[2]=t.regionRightBottomCorner,delete t.regionRightBottomCorner),t.regionLeftBottomCorner&&(n[3]=t.regionLeftBottomCorner,delete t.regionLeftBottomCorner),n.length>0){var i=[];for(e=0;e<4;e++){var o=n[e];if("string"==typeof o&&(o=o.split(",")),i[e]="0,0",Array.isArray(o)){o.length>2&&(o=o.slice(0,2));for(var r=0;r<2;r++)o[r]=Et.unitConvert(o[r]||0);i[e]=o.join(",")}}t.regionCorners=i.join(",")}}if(t.regionLeftBorders){var s=t.regionLeftBorders;if("string"==typeof t.regionLeftBorders&&(s=t.regionLeftBorders.split(",")),Array.isArray(s)&&s.length>2){for(e=0;e<s.length;e++)s[e]=Et.unitConvert(s[e]);t.regionLeftBorders=s.join(",")}else delete t.regionLeftBorders}if(t.regionRightBorders)if("string"==typeof(s=t.regionRightBorders)&&(s=s.split(",")),Array.isArray(s)&&s.length>2){for(e=0;e<s.length;e++)s[e]=Et.unitConvert(s[e]);t.regionRightBorders=s.join(",")}else delete t.regionRightBorders;return t},getAgent:function(){return navigator.userAgent.toLowerCase()||""},isWin32:function(){var t=this.getAgent();return t.indexOf("win32")||t.indexOf("wow32")},isWin64:function(){var t=this.getAgent();return t.indexOf("win64")||t.indexOf("wow64")},isWindows:function(){var t=this.getAgent();return t.indexOf("win")>=0||t.indexOf("wow")>=0},isMac:function(){return/macintosh|mac os x/i.test(this.getAgent())},formatDate:function(t,e){var n,i=t||"HH:mm:ss.SSS",o={"y+":(e=e||new Date).getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),"S+":e.getMilliseconds()};for(var r in o)if(n=new RegExp("(".concat(r,")")).exec(i)){var s="".concat(o[r]),a="00".concat(s),u=n[1].length>a.length?0:a.length-n[1].length;i=i.replace(n[1],1===n[1].length?s:a.substring(u))}return i},downloadDtpweb:function(t){var e=document.createElement("a");return e.href=t,e.click(),!0}},Nt=void 0,St=function(){function e(){this._labelWidth=0,this._labelHeight=0,this._margins=[],this._localIPs=new Set,this._version=""}return e.checkServer=function(e){var n="function"==typeof e?{callback:e}:e||{},i=this.getInstance(n);return i.checkPlugin((function(e){if("function"==typeof n.callback){var o=e.statusCode===t.LPA_Result.OK?i:void 0;n.callback(o,e)}})),i},e.getInstance=function(t){var n=Nt||(Nt=new e);return n.init(t),n},Object.defineProperty(e.prototype,"LastResponse",{get:function(){return this._Response},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"IsJsonMode",{get:function(){return this._jsonMode||!1},enumerable:!1,configurable:!0}),e.prototype.getIpAddress=function(t){return t||this._ip||this._initIp},e.prototype.getPort=function(t){return t||this._port||this._initPort},e.prototype.getTimeout=function(t,e){return t&&t>0?t:this._timeout&&this._timeout>0?this._timeout:this.isLocalPrinter(e)?b:T},e.prototype.getDeviceType=function(t){return t||this._deviceType},e.prototype.getFontName=function(t){return t||this._fontName||E},e.prototype.getFontHeight=function(t){return t||this._fontHeight||N},e.prototype.getLineWidth=function(t){return t||this._lineWidth||S},e.prototype.getRadius=function(t){return t||this._radius||B},e.prototype.getCornerWidth=function(t){return t||this._cornerWidth||j},e.prototype.parseMargin=function(t){this._margins.splice(0);for(var e=Et.parseMargin(t),n=0;n<4;n++)this._margins[n]=1*(e[n]||0);return this._margins},e.prototype.setFontName=function(t){this._fontName=t},e.prototype.setOffsetX=function(t){this._margins[4]=t},e.prototype.setOffsetY=function(t){this._margins[5]=t},e.prototype.init=function(t){var e=t||{};e.ip&&(this._initIp=e.ip),e.port&&(this._initPort=e.port),e.timeout&&(this._timeout=e.timeout),this._downloadUrl=e.downloadUrl,e.fontName&&(this._fontName=e.fontName),e.fontHeight&&(this._fontHeight=e.fontHeight),e.lineWidth&&(this._lineWidth=e.lineWidth),e.radius&&(this._radius=e.radius),this._showAlert="boolean"!=typeof e.showAlert||e.showAlert,this._jsonMode="boolean"!=typeof e.jsonMode||e.jsonMode,this._showLog="boolean"!=typeof e.showLog||e.showLog},e.prototype.logMsg=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(this._showLog){var i=Et.formatDate();console.log("[".concat(i,"]: ").concat(t)),console.log.apply(console,e)}},e.prototype.logObj=function(t){this._showLog&&console.log(t)},e.prototype.setServerInfo=function(t){var e;if(t){if((null===(e=t.selfIps)||void 0===e?void 0:e.length)>0)for(var n=0,i=t.selfIps;n<i.length;n++){var o=i[n];this._localIPs.add(o)}var r=(t.version||"").split("/");r.length>1&&(this._version=r[1])}},e.prototype.isLocalPrinter=function(t){var e="number"==typeof t?t:(null==t?void 0:t.type)||0;return this._version&&this._version>="2.3.2023.621"?e<10:e<=1},e.prototype.checkPlugin=function(n){var i=this,o=function(o){if(o.statusCode===t.LPA_Result.OK)console.log("★★★ 打印助手运行正常 ★★★");else if((null==o?void 0:o.statusCode)===t.LPA_Result.NETWORK_ERROR&&"http:"===window.location.protocol)console.log("★★★ 不安全网络[http]环境下需要禁用对本地服务的拦截操作 ★★★"),i._showAlert&&window.prompt("检测到不安全的网络环境，如果需要在 http 环境下继续使用打印助手，请打开浏览器，然后在浏览器的地址栏输入下列链接，然后将浏览器的 [Block insecure private network requests] 标志切换到【disable】:",e.URL_BLOCK_PRIVATE_NETWORK);else{console.log("★★★ 未检测到打印助手 ★★★");var r=i._downloadUrl||e.URL_DTPWEB_DOWNLOAD;i._showAlert&&window.confirm("未检测到打印助手，是否要下载最新版本的打印助手？")&&window.open("".concat(r,"?protocol=").concat(window.location.protocol),"")}n&&n(o)};this.checkPort(D,(function(e){e.statusCode!==t.LPA_Result.OK?e.statusCode===t.LPA_Result.NETWORK_ERROR&&"http:"===window.location.protocol?o(e):i.checkPort(O,o):o(e)}))},e.prototype.checkPort=function(e,n){var i=this;this.logMsg("$$$$ DTPWEB request: checkPort(".concat(e,") $$$$"));var o=this._initIp||I;Nt||(Nt=this),Et.request({host:o,port:e||this._port,url:"".concat(K,"/").concat(bt),sync:!1,timeout:this.getTimeout(0)},(function(r){if(i.logMsg("#### onResponse: checkPort(".concat(e,") ####"),r),r.statusCode<t.LPA_Result.NETWORK_FAILED){var s=r.resultInfo;i._initIp||(i._initIp=o),e&&(i._initPort=e),i.setServerInfo(s)}"function"==typeof n&&n(r)}))},e.prototype.requestApi=function(t,e){var n=this;void 0===e&&(e={});var i=Et.getRequestData(["action"],[t]);this.logMsg("$$$$ DTPWEB request: ".concat(i.action," $$$$"),i),e&&this.logObj(e),e=e||{};var o=i.data||e.data;e.data&&(e.data=void 0);var r=Et.getParamString(i.params||e),s=r?"?".concat(r):"",a=i.control||U,u=this.getDeviceType(i.deviceType),l=void 0;this._Response=void 0,i.contentType===y.Json?o=JSON.stringify(o||e):i.contentType!==y.Base64&&(o=r);var d=Tt;i.contentType===y.Json?d=Ct:i.contentType===y.Base64&&(d=wt);var h=this.isLocalPrinter(u)?void 0:i.ip;return Et.request({method:"POST",host:this.getIpAddress(h),port:this.getPort(i.port),url:"".concat(a,"/").concat(i.action).concat(s),params:e,headers:{"Content-type":d},data:o,sync:!i.async,timeout:this.getTimeout(i.timeout,u)},(function(t){n.logMsg("## onResponse: ".concat(i.action," ##"),t),n._Response=l,l=t,"function"==typeof i.callback&&i.callback(t)})),l},e.prototype.getVersion=function(){var e=this.requestApi(J);return(null==e?void 0:e.statusCode)===t.LPA_Result.OK?e.resultInfo:void 0},e.prototype.getServerInfo=function(){var e=this.requestApi(bt);return(null==e?void 0:e.statusCode)===t.LPA_Result.OK?e.resultInfo:void 0},e.prototype.setSupportedPrinters=function(e){if(Et.isWindows()){var n=this.requestApi(F,{supportedPrinters:e});return(null==n?void 0:n.statusCode)===t.LPA_Result.OK}},e.prototype.getDefaultPrinter=function(){if(Et.isWindows()){var e=this.requestApi(k);return(null==e?void 0:e.statusCode)===t.LPA_Result.OK?e.resultInfo:void 0}},e.prototype.setDefaultPrinter=function(t){Et.isWindows()&&this.requestApi(H,{printerName:t})},e.prototype.discoveryPrinters=function(e){var n=this.requestApi(G,{mode:null!=e?e:1});return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.getPrinters=function(t,e){var n;(t=Et.getRequestData(["onlyOnline"],[t])).onlyOnline="boolean"!=typeof t.onlyOnline||t.onlyOnline,t.onlySupported=!0;var i=this.requestApi({action:$,timeout:e||5e3},t);return this._deviceList=null===(n=null==i?void 0:i.resultInfo)||void 0===n?void 0:n.printers,this._deviceList||[]},e.prototype.openPrinter=function(e,n){var i=this,o="string"==typeof e?{name:e}:e||{};this.requestApi({action:V,ip:o.ip||this._initIp,port:o.port||this._initPort,deviceType:o.type,timeout:8e3,async:!0,callback:function(e){e.statusCode===t.LPA_Result.OK&&(i.isLocalPrinter(o)||(i._ip=o.ip,i._port=o.port,i._deviceType=o.type,i._deviceName=o.name)),"function"==typeof n&&n(e.statusCode===t.LPA_Result.OK)}},o)},e.prototype.getPrinterName=function(){var t;return null===(t=this.requestApi(z))||void 0===t?void 0:t.resultInfo},e.prototype.isPrinterOpened=function(){var e;return(null===(e=this.requestApi(Q))||void 0===e?void 0:e.statusCode)===t.LPA_Result.OK},e.prototype.isPrinterOnline=function(){var e;return!!Et.isWindows()&&(null===(e=this.requestApi(Y))||void 0===e?void 0:e.statusCode)===t.LPA_Result.OK},e.prototype.closePrinter=function(){var e;return(null===(e=this.requestApi(X))||void 0===e?void 0:e.statusCode)===t.LPA_Result.OK},e.prototype.showProperty=function(e){var n;return Et.isWindows()&&(e.showDocument="boolean"!=typeof e.showDocument||e.showDocument,n=this.requestApi(Z,e)),(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.getParam=function(e){var n=Et.getRequestData(["id"],[e]),i=this.requestApi(nt,n);return(null==i?void 0:i.statusCode)===t.LPA_Result.OK?i.resultInfo:-1},e.prototype.setParam=function(e){e=Et.getRequestData(["id","value"],arguments);var n=this.requestApi(it,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.getGapType=function(){return this.getParam(t.LPA_ParamID.GapType)},e.prototype.setGapType=function(e){return this.setParam({id:t.LPA_ParamID.GapType,value:e})},e.prototype.getPrintDarkness=function(){return this.getParam(t.LPA_ParamID.PrintDarkness)},e.prototype.setPrintDarkness=function(e){return this.setParam({id:t.LPA_ParamID.PrintDarkness,value:e})},e.prototype.getPrintSpeed=function(){return this.getParam(t.LPA_ParamID.PrintSpeed)},e.prototype.setPrintSpeed=function(e){return this.setParam({id:t.LPA_ParamID.PrintSpeed,value:e})},e.prototype.getPrinterDPI=function(){var e=this.requestApi(ot);return(null==e?void 0:e.statusCode)===t.LPA_Result.OK?e.resultInfo:void 0},e.prototype.startJob=function(e){e=Et.getRequestData(["width","height","orientation","jobName"],arguments);var n=this.parseMargin(e);if(this._labelWidth=e.width||w,this._labelHeight=e.height||C,Et.scaleUnit=this.IsJsonMode?0:1,e.scaleUnit=1,e.width=Et.unitConvert(e.width+n[1]+n[3]),e.height=Et.unitConvert(e.height+n[0]+n[2]),e.jobName=e.jobName||t.LPA_JobNames.Print,this.IsJsonMode){var i=e.printerName||this._deviceName;if(!i&&this._deviceList&&this._deviceList.length>0)for(var o=0,r=this._deviceList;o<r.length;o++){var s=r[o];if(this.isLocalPrinter(s)){i=s.name;break}}return this._printJobInfo={action:Et.getJobAction(e.jobName),jobPages:[],jobInfo:{jobWidth:e.width,jobHeight:e.height,orientation:e.orientation},printerInfo:{printerName:i}},this._jobPage=[],this._printJobResult=void 0,!0}e.printerName&&this.openPrinter(e.printerName);var a=this.requestApi(rt,e);return(null==a?void 0:a.statusCode)===t.LPA_Result.OK},e.prototype.abortJob=function(){this.IsJsonMode||this.requestApi(st)},e.prototype.commitJob=function(e){var n=this,i="function"==typeof e?{callback:e}:e||{};this.IsJsonMode?(this.endPage(),this._printJobInfo&&("number"==typeof i.gapType&&(this._printJobInfo.jobInfo.gapType=i.gapType),"number"==typeof i.darkness&&(this._printJobInfo.jobInfo.darkness=i.darkness),"number"==typeof i.speed&&(this._printJobInfo.jobInfo.printSpeed=i.speed),this._printJobInfo.callback=function(t){n._printJobResult=t,"function"==typeof i.callback&&i.callback(!!t)},this.print(this._printJobInfo))):this.requestApi({action:at,timeout:6e4,async:!0,callback:function(e){"function"==typeof i.callback&&i.callback(e.statusCode===t.LPA_Result.OK)}},i)},e.prototype.getJobID=function(){if(Et.isWindows()){var t=this.requestApi(ut);return null==t?void 0:t.resultInfo}return 0},e.prototype.getJobInfo=function(e){if(Et.isWindows()){var n=this.requestApi(lt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK?n.resultInfo:void 0}},e.prototype.getPageInfo=function(){var t;if(this.IsJsonMode)return this._printJobResult&&this._printJobInfo?{width:this._printJobInfo.jobInfo.jobWidth,height:this._printJobInfo.jobInfo.jobHeight,pages:(null===(t=this._printJobResult.previewData)||void 0===t?void 0:t.length)||0}:{};var e=this.requestApi(dt);return null==e?void 0:e.resultInfo},e.prototype.getPageImage=function(t){var e;if(this.IsJsonMode){var n=t.page||0;return(null===(e=this._printJobResult)||void 0===e?void 0:e.previewData)?{page:n,data:this._printJobResult.previewData[n]}:{}}t=Et.getRequestData(["page","format"],arguments);var i=this.requestApi(ht,t);return null==i?void 0:i.resultInfo},e.prototype.startPage=function(){var e;return this.IsJsonMode?!!this._printJobInfo&&(this._jobPage&&this._jobPage.length>0&&this.endPage(),this._jobPage||(this._jobPage=[]),!0):(null===(e=this.requestApi(ct))||void 0===e?void 0:e.statusCode)===t.LPA_Result.OK},e.prototype.endPage=function(){var e;return this.IsJsonMode?!(!this._printJobInfo||!this._jobPage)&&(this._jobPage.length>0&&this._printJobInfo.jobPages.push(this._jobPage),this._jobPage=void 0,!0):(null===(e=this.requestApi(pt))||void 0===e?void 0:e.statusCode)===t.LPA_Result.OK},e.prototype.returnDrawResult=function(e){var n,i=Et.getRequestData(["returnDrawResult"],[e]);i.returnDrawResult=null===(n=i.returnDrawResult)||void 0===n||n;var o=this.requestApi(ft,i);return(null==o?void 0:o.statusCode)===t.LPA_Result.OK},e.prototype.mm2Pound=function(t){return Et.mmToPound(t)},e.prototype.pound2Mm=function(t){return Et.poundToMm(t)},e.prototype.drawText=function(e){if(!(e=Et.getRequestData(["text","x","y","width","height","fontHeight","fontStyle"],arguments)).text)return!1;if(e.fontHeight=this.getFontHeight(e.fontHeight||e.height),e.fontName=this.getFontName(e.fontName),e=Et.unitConvertOfDrawBase(e,this._margins),Et.checkTextOptions(e),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Text})),!0);var n=this.requestApi(gt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.draw1DBarcode=function(e){if(!(e=Et.getRequestData(["text","x","y","width","height","textHeight"],arguments)).text)return!1;if((e=Et.unitConvertOfDrawBase(e,this._margins)).textHeight=Et.unitConvert(e.textHeight),e.textBarSpace=Et.unitConvert(e.textBarSpace),e.fontName=this.getFontName(e.fontName),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Barcode})),!0);var n=this.requestApi(_t,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.draw2DQRCode=function(e){if(!(e=Et.getRequestData(["text","x","y","width","height","eccLevel"],arguments)).text)return!1;if((e=Et.unitConvertOfDrawBase(e,this._margins)).height||(e.height=e.width),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.QRCode})),!0);var n=this.requestApi(Pt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.draw2DPdf417=function(e){if(!(e=Et.getRequestData(["text","x","y","width","height"],arguments)).text)return!1;if(e=Et.unitConvertOfDrawBase(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Pdf417})),!0);var n=this.requestApi(vt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.draw2DDataMatrix=function(e){if(!(e=Et.getRequestData(["text","x","y","width","height"],arguments)).text)return!1;if(e=Et.unitConvertOfDrawBase(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.DataMatrix})),!0);var n=this.requestApi(At,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawRectangle=function(e){if((e=Et.getRequestData(["x","y","width","height","lineWidth"],arguments)).cornerWidth||e.cornerHeight)return this.drawRoundRectangle(e);if(e.lineWidth=this.getLineWidth(e.lineWidth),e=Et.unitConvertOfDrawRect(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Rect})),!0);var n=this.requestApi(Lt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawRoundRectangle=function(e){if((e=Et.getRequestData(["x","y","width","height","cornerWidth","lineWidth"],arguments)).cornerWidth=this.getCornerWidth(e.cornerWidth||e.cornerHeight),e.lineWidth=this.getLineWidth(e.lineWidth),e=Et.unitConvertOfDrawRect(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.RoundRect})),!0);var n=this.requestApi(yt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawEllipse=function(e){if((e=Et.getRequestData(["x","y","width","height","lineWidth"],arguments)).lineWidth=this.getLineWidth(e.lineWidth),e=Et.unitConvertOfDrawRect(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Ellipse})),!0);var n=this.requestApi(Rt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawCircle=function(t){t=Et.getRequestData(["x","y","radius","lineWidth"],arguments);var e=this.getRadius(t.radius),n=2*e;delete t.radius;var i=t;return i.x=(t.x||0)-e,i.y=(t.y||0)-e,i.width=i.height=n,this.drawEllipse(i)},e.prototype.drawLine=function(e){if(((e=Et.getRequestData(["x1","y1","x2","y2","lineWidth"],arguments)).dashLens||e.dashLen||[]).length>0)return this.drawDashLine(e);if(e.lineWidth=this.getLineWidth(e.lineWidth),e=Et.unitConvertOfLine(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Line})),!0);var n=this.requestApi(mt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawDashLine=function(e){if(((e=Et.getRequestData(["x1","y1","x2","y2","dashLen","lineWidth"],arguments)).dashLen||e.dashLens||[]).length<1&&(e.dashLens=M),e.lineWidth=this.getLineWidth(e.lineWidth),e=Et.unitConvertOfLine(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.DashLine})),!0);var n=this.requestApi(It,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawImage=function(e){if(!(e=Et.getRequestData(["imageFile","x","y","width","height"],arguments)).imageFile)return!1;if(e=Et.unitConvertOfDrawBase(e,this._margins),this.IsJsonMode)return!!this._jobPage&&(this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Image})),!0);var n=this.requestApi(Dt,e);return(null==n?void 0:n.statusCode)===t.LPA_Result.OK},e.prototype.drawImageD=function(e){var n;if(!(e=Et.getRequestData(["data","x","y","drawWidth","drawWidth"],arguments)).data)return!1;if(e.threshold=null!==(n=e.threshold)&&void 0!==n?n:q,(e=Et.unitConvertOfDrawBase(e,this._margins)).drawWidth=Et.unitConvert(e.drawWidth||this._labelWidth),e.drawHeight=Et.unitConvert(e.drawHeight||this._labelHeight),this.IsJsonMode)return!!this._jobPage&&(e.imageFile=e.data,delete e.data,this._jobPage.push(Object.assign(e,{type:t.LPA_DrawType.Image})),!0);var i=this.requestApi({action:Ot,contentType:y.Base64,data:e.data},e);return(null==i?void 0:i.statusCode)===t.LPA_Result.OK},e.prototype.printImage=function(e){var n;(e=Et.getRequestData(["data"],[e])).data&&(e.scaleUnit=1,e.printWidth=Et.unitConvert(e.printWidth),e.printHeight=Et.unitConvert(e.printHeight),e.threshold=null!==(n=e.threshold)&&void 0!==n?n:q,e.jobName=e.jobName||t.LPA_JobNames.Print,this.requestApi({action:tt,contentType:y.Base64,data:e.data,timeout:18e4,callback:function(n){"function"==typeof e.callback&&e.callback(n.statusCode===t.LPA_Result.OK)}},e))},e.prototype.print=function(e){if(e&&e.jobPages){var n=e.action||x;e.action&&delete e.action,this.requestApi({action:et,timeout:6e4,contentType:y.Json,params:{action:n},data:e,async:!0,callback:function(n){"function"==typeof e.callback&&e.callback(n.statusCode===t.LPA_Result.OK?n.resultInfo:void 0)}})}},e.URL_DTPWEB_DOWNLOAD="https://weida.dothantech.com/assets/dtpweb/index.html",e.URL_BLOCK_PRIVATE_NETWORK="chrome://flags/#block-insecure-private-network-requests",e}();
/**
     * @file dtpweb.ts
     * @author DothanTech (hudianxing@dothantech.com)
     * @brief 该接口是对底层 dtpweb 打印助手的二次封装。
     * @version 2.1
     * @date 2022-06-27
     *
     * @copyright Copyright (c) 2022
     *
     */t.DTPWeb=St,t.checkServer=function(t){return St.checkServer(t)},t.getInstance=function(t){return St.getInstance(t)},Object.defineProperty(t,"__esModule",{value:!0})}));