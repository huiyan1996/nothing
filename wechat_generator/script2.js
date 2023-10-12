var defaultImg = "./img/empty.png"
var msgImg = "./img/empty.png"
var charImg = "./img/empty.png"
var userList = []
var chatList = []

$(document).ready(function(){
    $("#username").on('input', ()=>{
        $("#usernameDisplay").text($("#username").val());
    })

    $("#imgMsg").on("change", async (e) => {
        // msgImg = URL.createObjectURL(e.target.files[0]);
        msgImg = await blobToBase64(e.target.files[0])
    })

    $("#character_img").on("change", async (e) => {
        // msgImg = URL.createObjectURL(e.target.files[0]);
        charImg = await blobToBase64(e.target.files[0])
    })

    if(localStorage.getItem("weGenData")) {
        $("#lastRecBtn").show()
    }

    $("#switchGroupDm").on("change", () => {
        let checked = $("#switchGroupDm").is(":checked");
        if(checked) {
            $(".leftName").hide()
        }else{
            $(".leftName").show()
        }
    })
})

function loadData() {
    let data = localStorage.getItem("weGenData")
    data = JSON.parse(data)

    $("#username").val(data.chatName)
    $("#username").trigger("input")

    userList = []
    chatList = []

    data.userList.forEach((v,k) => {
        charImg = v.img
        addChar(v.name)
    })

    data.chatList.forEach((v,k) => {
        if(v.type == 'text') {
            addChat(v.side, v.name, v.content, v.user_img)
        }
        if(v.type == 'img') {
            addImgChat(v.side, v.name, v.content, v.user_img)
        }
        if(v.type == 'time') {
            addTime(v.content)
        }
    })
}

function saveData() {
    let currData = {
        userList: userList,
        chatList: chatList,
        chatName: $("#username").val()
    }

    currData = JSON.stringify(currData)

    if(confirm("保存会改写之前保存的数据，确定保存？") == true) {
        localStorage.setItem("weGenData", currData)
    }

}

function deleteChat(n, isTime) {

    const ind = $(".deleteBtn").index(n)
    chatList.splice(ind, 1)

    if(isTime) {
        $(n).parent().parent().remove()
    }else{
        $(n).parent().remove()
    }
}

function deleteChar(n) {

    const ind = $(".delCharBtn").index(n)
    userList.splice(ind, 1)

    $(n).parent().remove()
    
    addChar()
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

function addChar(text) {
    const char = text || $("#character").val()

    if(char && charImg) {
        userList.push({
            name: char,
            img: charImg
        })
    }

    let charHtml = "";

    userList.forEach((v,k) => {
        charHtml += `
            <div class="form-check form-check-inline charCheck">
                <a href="javascript:;" class="delCharBtn" onclick="deleteChar(this)">x</a>
                <label class="form-check-label">
                    <input class="form-check-input charOpt" type="radio" name="charOpt" value="${k}" ${k==0?'checked':''}>
                    <img src="${v.img}" height="50px" />
                    <span class="ml-2">${v.name}</span>
                </label>
            </div>
        `;
    })

    $("#charList").html(charHtml)

    $("#character").val("")
    $("#character_img").val("")
    charImg = ""
}

function addChat(side, name, text, img) {
    var user = side || $(".userOpt:checked").val()
    var char = $(".charOpt:checked").val()
    const chat = text || $("#chatContent").val()
    const userName = name || userList[char].name

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName">${userName || 'First Kanaphan'}</div>`;
    }

    var msg = `
        <div class="message-item msg-item message-item--${user}">
            <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            <img class="avatar ${user}" src="${img || userList[char].img}" alt="头像">
            <div>
                ${chatName}
                <div class="message-bubble">${chat}</div>
            </div>
        </div>
    `;

    if(chat.trim()) {
        $("#messageList").append(msg)
    }

    chatList.push({
        side: user,
        name: userName,
        user_img: img || userList[char].img,
        type: "text",
        content: chat
    })

    $("#chatContent").val("")
}

function addImgChat(side, name, text, img) {
    var user = side || $(".userOpt:checked").val()
    var char = $(".charOpt:checked").val()
    const userName = name || userList[char].name
    
    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName">${userName || 'First Kanaphan'}</div>`;
    }

    if(msgImg) {
        var msg = `
            <div class="message-item msg-item message-item--${user}">
                <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
                <div class="avatar ${user}" style="background-image: url(${img || userList[char].img})" alt="头像"></div>
                <div>
                    ${chatName}
                    <div class="message-bubble img">
                        <img src="${text || msgImg}" alt="">
                    </div>
                </div>
            </div>
        `;

        $("#messageList").append(msg)

        chatList.push({
            side: user,
            name: userName,
            user_img: img || userList[char].img,
            type: "img",
            content: msgImg
        })

        $("#imgMsg").val("")
        msgImg = ""
    }
}

function addTime(text) {
    const time = text || $("#timeContent").val()

    var msg = `
        <div class="message-list msg-item" id="messageList">
            <div class="badge-block">
                <span class="time-badge">${time}</span>
                <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this, true)">x</a>
            </div>
        </div>
    `;

    $("#messageList").append(msg)

    chatList.push({
        type: "time",
        content: time
    })

    $("#timeContent").val("")
}

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
}