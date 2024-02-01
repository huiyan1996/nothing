var defaultImg = "./img/empty.png"
var msgImg = "./img/empty.png"
var charImg = "./img/empty.png"
var userList = []
var chatList = []
var id = null
const searchParams = new URLSearchParams(window.location.search);
var chatType
var editImgInd
var editOldImgUrl

$(document).ready(function(){

    if(searchParams.has('id')) {
        loadData()
    }

    $("#username").on('input', ()=>{
        $("#usernameDisplay").text($("#username").val());
    })

    $("#imgMsg").on("change", async (e) => {
        // msgImg = URL.createObjectURL(e.target.files[0]);
        // msgImg = await blobToBase64(e.target.files[0])

        var formData = new FormData();
        formData.append('image', e.target.files[0]);
        // formData.append('file', e.target.files[0]);

        // fetch('https://api.imgbb.com/1/upload?key=68c35be5a3ea5ffa015a2e0d9a0f47b2', {
        // fetch('https://www.freeimg.cn/api/v1/upload', {
        //     method: 'POST',
        //     headers: {
        //         "Authorization": "Bearer 146|SZAyVfwnJLv3CQ3CKZjXRub4z3tj6C6eSFW5HYXz",
        //     },
        //     body: formData
        // }).then(async (img) => {
        //     img = await img.json()
        //     // msgImg = img.data.display_url
        //     msgImg = img.data?.links?.url

        //     $("#addImgChat").removeAttr("disabled")
        //  })
        //  .catch(error => alert('Error:', error));

        fetch('https://imgtp.com/api/upload', {
            method: 'POST',
            headers: {
                // "Authorization": "Bearer 146|SZAyVfwnJLv3CQ3CKZjXRub4z3tj6C6eSFW5HYXz",
                // "token": "1b9dcc72b21ae9ce64e07e576edef118",
                "token": "ce9ea31ce3bb52130e9cf0504792d78f",
            },
            body: formData
        }).then(async (img) => {
            img = await img.json()
            // msgImg = img.data?.links?.url
            msgImg = img.data?.url

            $("#addImgChat").removeAttr("disabled")
         })
         .catch(error => alert('Error:', error));
    })

    $("#character_img").on("change", async (e) => {
        // msgImg = URL.createObjectURL(e.target.files[0]);
        // let image = await blobToBase64(e.target.files[0])

        var formData = new FormData();
        // formData.append('file', e.target.files[0]);
        formData.append('image', e.target.files[0]);

        // fetch('https://www.freeimg.cn/api/v1/upload', {
        //     method: 'POST',
        //     headers: {
        //         "Authorization": "Bearer 146|SZAyVfwnJLv3CQ3CKZjXRub4z3tj6C6eSFW5HYXz",
        //     },
        //     body: formData
        // }).then(async (img) => {
        //     img = await img.json()
        //     charImg = img.data?.links?.url

        //     $("#addChar").removeAttr("disabled")
        //  })
        //  .catch(error => alert('Error:', error));
        
        //  fetch('https://img.ink/api/upload', {
        fetch('https://imgtp.com/api/upload', {
            method: 'POST',
            headers: {
                // "Authorization": "Bearer 146|SZAyVfwnJLv3CQ3CKZjXRub4z3tj6C6eSFW5HYXz",
                // "token": "1b9dcc72b21ae9ce64e07e576edef118",
                "token": "ce9ea31ce3bb52130e9cf0504792d78f",
            },
            body: formData
        }).then(async (img) => {
            img = await img.json()
            // charImg = img.data?.links?.url
            charImg = img.data?.url

            $("#addChar").removeAttr("disabled")
         })
         .catch(error => alert('Error:', error));
    })

    if(localStorage.getItem("weGenData")) {
        $("#lastRecBtn").show()
    }

    $("#switchGroupDm").on("change", () => {
        let checked = $("#switchGroupDm").is(":checked");
        if(checked) {
            $(".leftName").hide()
            chatType = 'private'
        }else{
            $(".leftName").show()
            chatType = 'group'
        }
    })
})

function loadData() {
    // let data = localStorage.getItem("weGenData")
    id = searchParams.get('id')

    fetch(
        `https://api.airtable.com/v0/appLowyF339uw0g8o/Chat/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer pateT1OAqdJjqETzj.f0c16960c0ba5712c854aa6613dfa49e1b50172f0921a688f8cb5d27244df71c`,
            },
        }
    )
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        // Handle your data here
        let d = data.fields

        $("#genTitle").val(d.genTitle)
        $("#author").val(d.author)
        $("#username").val(d.chatName)
        $("#username").trigger("input")

        var uList = JSON.parse(d.userList)
        var cList = JSON.parse(d.chatList)

        userList = []
        chatList = []

        $("#charList").empty()
        $("#messageList").empty()

        uList.forEach((v,k) => {
            charImg = v.img
            addChar(v.name)
        })

        cList.forEach((v,k) => {

            if(v.type == 'text') {
                addChat(v.side, v.name, v.content, v.user_img)
            }
            if(v.type == 'img') {
                addImgChat(v.side, v.name, v.content, v.user_img)
            }
            if(v.type == 'time') {
                addTime(v.content)
            }
            if(v.type == 'call') {
                addCall(v.side, v.name, v.content, v.user_img, v.callType)
            }
        })

        chatType = d.chatType
        if(chatType == 'private') {
            $("#switchGroupDm").attr("checked", true)
            $("#switchGroupDm").trigger("change")
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function reloadChat() {
    $("#messageList").empty()

    var cList = chatList

    chatList = []

    cList.map((v,k) => {

        if(v.type == 'text') {
            addChat(v.side, v.name, v.content, v.user_img)
        }
        if(v.type == 'img') {
            addImgChat(v.side, v.name, v.content, v.user_img)
        }
        if(v.type == 'time') {
            addTime(v.content)
        }
        if(v.type == 'call') {
            addCall(v.side, v.name, v.content, v.user_img, v.callType)
        }
    })
}

function saveData() {
    $("#loadingScreen").css('display', 'flex')
    let currData = {
        genTitle: $("#genTitle").val() || '捡手机文学',
        author: $("#author").val() || '无名',
        userList: JSON.stringify(userList),
        chatType: $("#switchGroupDm").is(":checked")?'private':'group',
        chatList: JSON.stringify(chatList),
        chatName: $("#username").val()
    }

    if(id) {
        fetch(`https://api.airtable.com/v0/appLowyF339uw0g8o/Chat/${id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer pateT1OAqdJjqETzj.f0c16960c0ba5712c854aa6613dfa49e1b50172f0921a688f8cb5d27244df71c',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: currData
            })
        }).then(async (record) => {
            // record = await record.json()
            // console.log(record)

            $("#loadingScreen").hide()
            Swal.fire({
                // title: "消息",
                title: "编辑成功!",
                icon: "success"
            }).then(function() {
                window.location.replace("./listing.html")
            });
        })
        .catch(error => console.error('Error:', error));
    }else{
        fetch('https://api.airtable.com/v0/appLowyF339uw0g8o/Chat', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Authorization': 'Bearer pateT1OAqdJjqETzj.f0c16960c0ba5712c854aa6613dfa49e1b50172f0921a688f8cb5d27244df71c',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: currData
            })
        }).then(async (record) => {
            // record = await record.json()
            // console.log(record)

            $("#loadingScreen").hide()
            Swal.fire({
                // title: "消息",
                title: "添加成功!",
                icon: "success"
            }).then(function() {
                window.location.replace("./listing.html")
            });
        })
        .catch(error => console.error('Error:', error));
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

    $(".msg-item").each((k, v) => {
        // console.log(k)
        $(v).find('div.message-bubble').attr('data-ind', k)
    })
}

function changeSide(n) {

    const dom = $(n).parent()
    const ind = $(".msg-item").index(dom)
    // chatList[ind]

    if(chatList[ind].side == 'left') {
        dom.removeClass("message-item--left")
        dom.addClass("message-item--right")
        chatList[ind].side = 'right'
    }else{
        dom.removeClass("message-item--right")
        dom.addClass("message-item--left")
        chatList[ind].side = 'left'
    }
}

function editContent(n) {
    const ind = Number($(n).attr('data-ind'))
    chatList[ind].content = $(n).text()
}

function deleteChar(n) {

    const ind = $(".delCharBtn").index(n)
    userList.splice(ind, 1)

    $(n).parent().remove()
    
    // addChar()
}

function generate() {
    // $("img").each((k, v) => {
    //     convertImage($(v).attr('src'), v)
    // })

    html2canvas(document.querySelector("#chatPage"), {
        useCORS: true,
        // proxy: <server_url></server_url>
    }).then(canvas => {
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
                    <img src="${v.img}" class="charImg" height="50px" />
                    <span class="ml-2">${v.name}</span>
                    <a href="javascript:;" class="editCharBtn" onclick="editChar(this)">✎</a>
                </label>
            </div>
        `;
    })

    $("#charList").html(charHtml)

    $("#character").val("")
    $("#character_img").val("")
    charImg = ""

    $("#addChar").attr("disabled", true)
}

function editChar(n) {
    editImgInd = $(".editCharBtn").index(n)
    editOldImgUrl = $(n).parent().find('.charImg').attr('src')

    $("#editImg").val(editOldImgUrl)
    $("#editImgBlock").show()
}

function editImgFunc() {
    const newImgUrl = $("#editImg").val()

    if((editImgInd || editImgInd == 0) && newImgUrl) {
        userList[editImgInd].img = newImgUrl
        $(".charImg").eq(editImgInd).attr("src", newImgUrl)

        chatList.map((v,k) => {
            if(v.user_img == editOldImgUrl) {
                v.user_img = newImgUrl
            }
        })
    
        editImgInd = null
        editOldImgUrl = null
    
        $("#editImg").val("")
        $("#editImgBlock").hide()
        
        reloadChat()
    }
}

function addChat(side, name, text, img) {
    var user = side || $(".userOpt:checked").val()
    var char = $(".charOpt:checked").val()
    const chat = text || $("#chatContent").val()
    const userName = name || userList[char].name

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    const ind = $(".msg-item").length

    var msg = `
        <div class="message-item msg-item message-item--${user}">
            <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            <img class="avatar ${user}" src="${img || userList[char].img}" alt="头像" onclick="changeSide(this)">
            <div>
                ${chatName}
                <div class="message-bubble" data-ind="${ind}" contenteditable onKeyUp="editContent(this)">${chat}</div>
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

function addCall(side, name, text, img, callType) {
    var user = side || $(".userOpt:checked").val()
    var char = $(".charOpt:checked").val()
    const chat = text || $("#callContent").val()
    const userName = name || userList[char].name
    const cType = callType ||  $(".callOpt:checked").val()

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    var msg = `
        <div class="message-item msg-item message-item--${user}">
            <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
            <img class="avatar ${user}" src="${img || userList[char].img}" alt="头像" onclick="changeSide(this)">
            <div>
                ${chatName}
                <div class="message-bubble">
                    <div class="d-flex align-items-center">
                        <div>${chat}</div>
                        <div class="ms-2">
                            ${cType == 'phone' ? `
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="phoneIcon">
                                <path d="M2.10863 14.1079L3.76461 15.7639C4.02858 16.0413 4.38552 16.2119 4.76752 16.2431C5.84479 16.3311 7.91395 15.0073 8.44327 14.1917C8.8559 13.5559 8.69631 12.6629 8.69702 11.9465C10.8675 11.3476 13.1582 11.3453 15.3275 11.9399C15.3268 12.6563 15.1654 13.5497 15.5768 14.1847C16.1037 14.9979 18.1615 16.3114 19.2367 16.2294C19.6149 16.2006 19.97 16.0352 20.2357 15.7642L21.895 14.1049C22.5266 13.4721 22.4856 12.3791 21.7923 11.8009C16.3175 6.31749 7.7222 6.27776 2.21038 11.7982C1.51362 12.3797 1.47304 13.4775 2.10863 14.1079Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            `: `
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cameraIcon">
                                    <path stroke-linecap="round" d="M 8.25 13.5 l -4.72 4.72 a 0.75 0.75 180 0 1 -1.28 -0.53 v -11.38 a 0.75 0.75 180 0 1 1.28 -0.53 l 4.72 4.72 M 19.5 5.25 h -9 a 2.25 2.25 180 0 0 -2.25 2.25 v 9 a 2.25 2.25 180 0 0 2.25 2.25 h 9 A 2.25 2.25 180 0 0 21.75 16.5 v -9 a 2.25 2.25 180 0 0 -2.25 -2.25 z" />
                                </svg>
                            `}
                        </div>
                    </div>
                </div>
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
        type: "call",
        callType: cType,
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
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    if(text || msgImg) {
        var msg = `
            <div class="message-item msg-item message-item--${user}">
                <a class="deleteBtn" href="javascript:;" onclick="deleteChat(this)">x</a>
                <div class="avatar ${user}" style="background-image: url(${img || userList[char].img})" alt="头像" onclick="changeSide(this)"></div>
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
            content: text || msgImg
        })

        $("#imgMsg").val("")
        msgImg = ""
    }

    $("#addImgChat").attr("disabled", true)
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