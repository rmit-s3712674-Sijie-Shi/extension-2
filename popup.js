// Initialize button with user's preferred color
//let changeColor = document.getElementById("changeColor");

let taobaoUrl
// chrome.storage.sync.get("color", ({
//     color
// }) => {
//     changeColor.style.backgroundColor = color;
// });
//let alert = document.getElementById("alert");
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    if (url.indexOf("taobao") > 0) {
        if (url.indexOf("m.taobao.com") > 0 || url.indexOf('m.intl.taobao.com') > 0) {
            let position = url.indexOf('?spm=') * 1 + 1
            let taobaoUrl = "https://item.taobao.com/item.htm?" + url.slice(position)
            chrome.tabs.create({
                url: taobaoUrl
            })

        } else {
            //window.alert("This page don't need to be modified")
            document.getElementById("changeColor").innerHTML = "This page doesn't need to be modified"
        }
    } else {
       // window.alert('This is not a Taobao website')
       document.getElementById("changeColor").innerHTML = "This is not a Taobao website"
    }
    //chrome.tabs.create({ url: taobaoUrl})
});
// https://m.intl.taobao.com/detail/detail.html?spm=a2e1g.22104734.175_164.2&id=626456071291
