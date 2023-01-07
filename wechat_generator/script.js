var leftImg = "./img/left.jpg"
var rightImg = "./img/right.jpg"
var customImg = "./img/boy.png"
var msgImg = "./img/empty.png"

$(document).ready(function(){
    $("#username").on('input', ()=>{
        $("#usernameDisplay").text($("#username").val());
    })

    $("#left-chathead").on("change", (e) => {
        leftImg = URL.createObjectURL(e.target.files[0]);
        $(".avatar.left").attr('src', leftImg)
    })

    $("#right-chathead").on("change", (e) => {
        rightImg = URL.createObjectURL(e.target.files[0]);
        $(".avatar.right").attr('src', rightImg)
    })
    
    $("#custom-chathead").on("change", (e) => {
        customImg = URL.createObjectURL(e.target.files[0]);
    })

    $("#imgMsg").on("change", (e) => {
        msgImg = URL.createObjectURL(e.target.files[0]);
    })

    $("#switchGroupDm").on("change", () => {
        let checked = $("#switchGroupDm").is(":checked");
        if(checked) {
            $(".leftName").hide()
        }else{
            $(".leftName").show()
        }
    })
})

function deleteChat(n) {
    $(n).parent().remove()
}

function generate() {
    html2canvas(document.querySelector("#chatPage")).then(canvas => {
        document.getElementById("generatedImg").innerHTML = ""
        var imgUrl = canvas.toDataURL("image/png")
        var img = document.createElement("img")
        img.src = imgUrl
        document.getElementById("generatedImg").appendChild(img)
        $("#imageModal").modal('show')
    });
}

function addChat() {
    var user = $(".userOpt:checked").val()
    const chat = $("#chatContent").val()
    const userName = $("#userName").val()
    const img = user=='custom'?customImg:user=='left'?leftImg:rightImg
    if(user=='custom') {
        user = 'left'
    }

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName">${userName || 'First Kanaphan'}</div>`;
    }

    var msg = `
        <div class="message-item message-item--${user}">
            <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            <img class="avatar ${user}" src="${img}" alt="头像">
            <div>
                ${chatName}
                <div class="message-bubble">${chat}</div>
            </div>
        </div>
    `;

    if(chat.trim()) {
        $("#messageList").append(msg)
    }
    $("#chatContent").val("")
}

function addImgChat() {
    var user = $(".userOpt:checked").val()
    const chat = $("#chatContent").val()
    const img = user=='custom'?customImg:user=='left'?leftImg:rightImg
    if(user=='custom') {
        user = 'left'
    }

    var msg = `
        <div class="message-item message-item--${user}">
            <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            <img class="avatar ${user}" src="${img}" alt="头像">
            <div class="message-bubble img">
                <img src="${msgImg}" alt="">
            </div>
        </div>
    `;

    $("#messageList").append(msg)
    $("#imgMsg").val("")
}

function addTime() {
    const time = $("#timeContent").val()

    var msg = `
        <div class="message-list" id="messageList">
            <div class="badge-block">
                <span class="time-badge">${time}</span>
                <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            </div>
        </div>
    `;

    $("#messageList").append(msg)
    $("#timeContent").val("")
}