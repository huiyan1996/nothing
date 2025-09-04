var defaultImg = "./img/empty.png"
var msgImg = "./img/empty.png"
var charImg = "./img/empty.png"
var imgCenter = "./img/empty.png"
var chatList = []
var id = null
const searchParams = new URLSearchParams(window.location.search);
var ind = 0
var lastChat = 0
var chatting = true
var chatType
var author
var nextChapterId = null
var nextChapterType = null
var savedIndex = 0

$(document).ready(function(){

    $("#loadingModal").modal('show')

    if(searchParams.has('id')) {
        loadData()
    }
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

        author = d.author

        $("#usernameDisplay").text(d.chatName)
        chatList = JSON.parse(d.chatList)
        lastChat = chatList.length
        
        // Load next chapter data
        if (d.next && d.next.length > 0) {
            nextChapterId = d.next[0];
        }
        
        // Load next chapter type
        if (d.nextType && d.nextType.length > 0) {
            nextChapterType = d.nextType[0];
        }

        // chatList = cList

        // cList.forEach((v,k) => {
        //     if(v.type == 'text') {
        //         addChat(v.side, v.name, v.content, v.user_img)
        //     }
        //     if(v.type == 'img') {
        //         addImgChat(v.side, v.name, v.content, v.user_img)
        //     }
        //     if(v.type == 'time') {
        //         addTime(v.content)
        //     }
        //     if(v.type == 'call') {
        //         addCall(v.side, v.name, v.content, v.user_img, v.callType)
        //     }
        // })

        // if(d.chatType == 'private') {
        //     $("#switchGroupDm").attr("checked", true)
        //     $("#switchGroupDm").trigger("change")
        // }

        chatType = d.chatType

        // Check and restore saved progress
        restoreProgress()

        $("#loadingModal").modal('hide')
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function clickChat() {
    const v = chatList[ind]

    if(ind < lastChat) {
        if(v.type == 'text') {
            addChat(v.side, v.name, v.content, v.user_img)
        }
        if(v.type == 'img') {
            addImgChat(v.side, v.name, v.content, v.user_img, v.isSticker)
        }
        if(v.type == 'time') {
            addTime(v.content)
        }
        if(v.type == 'timepass') {
            addTimepass(v.content)
        }
        if(v.type == 'imgCenter') {
            addImgCenter(v.content)
        }
        if(v.type == 'call') {
            addCall(v.side, v.name, v.content, v.user_img, v.callType)
        }
    }else{
        if(chatting) {
            addTime('结束')
            addTime('作者: '+author)
            if(nextChapterId) {
                changeFooterToNextChapter()
            }
            chatting = false
        }
    }

    const msgBlock = document.getElementById('messageList')
    const last = msgBlock.lastElementChild
    last.scrollIntoView({ behavior: "smooth"})

    ind++
    
    // Save progress to localStorage
    saveProgress()
}

function addTimepass(text) {
    const timepass = text || $("#timepassContent").val()

    var msg = `
        <div class="message-list msg-item">
            <div class="badge-block">
                <span class="time-badge time" style="height: ${timepass || 30}px"> </span>
            </div>
        </div>
    `;

    $("#messageList").append(msg)

    chatList.push({
        type: "timepass",
        content: timepass
    })

    $("#timepassContent").val("")
}

function viewImage(src) {
    $("#viewImage").attr("src", src)
    $("#imageModal").modal("show")
}

function addChat(side, name, text, img) {
    var user = side || $(".userOpt:checked").val()
    const chat = text || $("#chatContent").val()
    const userName = name || 'Username'

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    var msg = `
        <div class="message-item msg-item message-item--${user}">
            <img class="avatar ${user}" src="${img || './img/empty.png'}" alt="头像">
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
        user_img: img || './img/empty.png',
        type: "text",
        content: chat
    })

    $("#chatContent").val("")
}

function addCall(side, name, text, img, callType) {
    var user = side || $(".userOpt:checked").val()
    const chat = text || $("#callContent").val()
    const userName = name || 'Username'
    const cType = callType ||  $(".callOpt:checked").val()

    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    var msg = `
        <div class="message-item msg-item message-item--${user}">
            <img class="avatar ${user}" src="${img || './img/empty.png'}" alt="头像">
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
        user_img: img || './img/empty.png',
        type: "call",
        callType: cType,
        content: chat
    })

    $("#chatContent").val("")
}

function addImgCenter(img) {
    const centerImg = img || imgCenter

    var msg = `
        <div class="message-list msg-item">
            <div class="imgCenter-badge">
                <img src="${centerImg}" onclick="viewImage('${centerImg}')" alt="">
            </div>
        </div>
    `;

    $("#messageList").append(msg)

    chatList.push({
        type: "imgCenter",
        content: centerImg
    })

    $("#imgCenterMsg").val("")
    imgCenter = ""

    // $("#addImgCenter").attr("disabled", true)
}

function addImgChat(side, name, text, img, sticker) {
    var user = side || $(".userOpt:checked").val()
    const userName = name || 'Username'
    var isSticker = sticker || $("#isSticker").is(":checked")
    
    var chatName = "";
    if(user == 'left') {
        chatName = `<div class="text-start leftName" style="${chatType == 'private' ? 'display:none;':''}">${userName || 'First Kanaphan'}</div>`;
    }

    if(text || msgImg) {
        var msg = `
            <div class="message-item msg-item message-item--${user}">
                <div class="avatar ${user}" style="background-image: url(${img || userList[char].img})"></div>
                <div>
                    ${chatName}
                    <div class="message-bubble ${isSticker ? 'sticker' : 'img'}">
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
            isSticker: isSticker? true : false,
            content: text || msgImg
        })

        $("#imgMsg").val("")
        $("#isSticker").attr("checked", false)
        msgImg = ""
    }

    $("#addImgChat").attr("disabled", true)
}

function addTime(text) {
    const time = text || $("#timeContent").val()

    var msg = `
        <div class="message-list msg-item">
            <div class="badge-block">
                <span class="time-badge">${time}</span>
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

function changeFooterToNextChapter() {
    // Change the footer input to a next chapter button
    const footer = document.querySelector('footer');
    const textInput = footer.querySelector('.text-input');
    
    // Determine the correct URL based on next chapter type
    const nextChapterUrl = nextChapterType === 'text' ? 
        `./textView.html?id=${nextChapterId}` : 
        `./viewLive.html?id=${nextChapterId}`;
    
    // Create next chapter button
    const nextChapterButton = document.createElement('a');
    nextChapterButton.href = nextChapterUrl;
    nextChapterButton.className = 'text-input text-center d-flex align-items-center justify-content-center text-dark text-decoration-none';
    nextChapterButton.textContent = '下一章';
    nextChapterButton.style.width = '100%';
    nextChapterButton.style.margin = '0 10px';
    nextChapterButton.style.backgroundColor = '#d9f0ff';
    
    // Replace the text input with the next chapter button
    textInput.parentNode.replaceChild(nextChapterButton, textInput);
}

function saveProgress() {
    if (id) {
        // Get existing progress data
        let allProgress = {};
        try {
            const existingData = localStorage.getItem('viewLiveProgress');
            if (existingData) {
                allProgress = JSON.parse(existingData);
            }
        } catch (error) {
            console.error('Error loading existing progress:', error);
            allProgress = {};
        }
        
        // Update progress for current ID
        allProgress[id] = {
            index: ind,
            timestamp: Date.now()
        };
        
        // Save updated progress
        localStorage.setItem('viewLiveProgress', JSON.stringify(allProgress));
    }
}

function restoreProgress() {
    if (!id) return;
    
    try {
        const savedProgress = localStorage.getItem('viewLiveProgress');
        if (savedProgress) {
            const allProgress = JSON.parse(savedProgress);
            
            // Check if we have progress for this specific ID
            if (allProgress[id] && allProgress[id].index > 0 && allProgress[id].index < lastChat) {
                savedIndex = allProgress[id].index;
                // ind = savedIndex;
                
                // Auto-play messages up to the saved index
                autoPlayToIndex();
            } else {
                // No valid progress for this ID, start from beginning
                ind = 0;
            }
        }
    } catch (error) {
        console.error('Error restoring progress:', error);
        // Clear corrupted data
        localStorage.removeItem('viewLiveProgress');
        ind = 0;
    }
}

function autoPlayToIndex() {
    if (ind >= savedIndex) return;
    
    // Play messages automatically up to the saved index
    const playNext = () => {
        if (ind < savedIndex && ind < lastChat) {
            const v = chatList[ind];
            
            if(v.type == 'text') {
                addChat(v.side, v.name, v.content, v.user_img)
            }
            if(v.type == 'img') {
                addImgChat(v.side, v.name, v.content, v.user_img, v.isSticker)
            }
            if(v.type == 'time') {
                addTime(v.content)
            }
            if(v.type == 'timepass') {
                addTimepass(v.content)
            }
            if(v.type == 'imgCenter') {
                addImgCenter(v.content)
            }
            if(v.type == 'call') {
                addCall(v.side, v.name, v.content, v.user_img, v.callType)
            }
            
            const msgBlock = document.getElementById('messageList')
            const last = msgBlock.lastElementChild
            last.scrollIntoView({ behavior: "smooth"})
            
            ind++;
            
            // Continue playing with a small delay for smooth effect
            setTimeout(playNext, 100);
        }
    };
    
    playNext();
}

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
}