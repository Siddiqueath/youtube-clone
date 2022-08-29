/* for searchIcon in search bar */
const searchBar = document.querySelector('#search-bar'); /* element to trigger hide */
searchBar.addEventListener('focus', showSearchImg);
searchBar.addEventListener('blur', showSearchImg);

const searchImg = document.querySelector('#center > img'); /* element to hide */
function showSearchImg() {
    searchImg.style.visibility == 'visible' ?
        searchImg.style.visibility = 'hidden' : searchImg.style.visibility = 'visible';
}

/* for nav bar */
const burgerMenu = document.querySelector('#burger-menu'); /* element to trigger hide */
burgerMenu.addEventListener('click', toggleSideBar);
const sideBar = document.querySelector('nav'); /* element to hide */

function toggleSideBar() {
    if (document.body.clientWidth > 900)
        sideBar.classList.toggle('hideAny');
    else
        openNav();
}

const sideBarContainer = document.querySelector('.overlay');
function openNav() {
    sideBarContainer.style.width = '240px';
    document.querySelector(".closebtn").style.display = 'block';
}

function closeNav() {
    sideBarContainer.style.width = '0';
    document.querySelector('.closebtn').style.display = 'none';
    // const element = document.querySelector('.scroll-bar-w-8');
    // element.classList.toggle('scroll-bar-w-0');
}

function reportSize() {
    if (document.body.clientWidth > 900)
        document.querySelector('.closebtn').style.display = 'none';
    if (document.body.clientWidth <= 900)
        sideBarContainer.style.width = '0';

}
// const videoContainer = document.querySelector('.video-container');
// let apiKey = 'AIzaSyCFYqgxOa6P18e-PBEy2jvQQDBnuKzxbsE';
// let videoHttp = 'https://www.googleapis.com/youtube/v3/videos?';
// let channelHttp = 'https://www.googleapis.com/youtube/v3/channels?';

// fetch(videoHttp + new URLSearchParams({
//     key: apiKey,
//     part: 'snippet',
//     chart: 'mostPopular',
//     maxResults: 50,
//     regionCode: 'IN'
// }))
// .then(res => res.json())
// .then(data => {
//     data.items.forEach(item => {
//         getChannelIcon(item);
//     })
// })
// .catch(err => console.log(err));

// const getChannelIcon = (videoData) => {
// fetch(channelHttp + new URLSearchParams({
//     key: apiKey,
//     part: 'snippet',
//     id: videoData.snippet.channelId
// }))
// .then(res => res.json())
// .then(data => {
//     videoData.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//       makeVideoCard(videoData);
//     })
// }

// const makeVideoCard = (data) => {
//     videoContainer.innerHTML += `
//     <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
//         <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//         <div class="content">
//             <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//             <div class="info">
//                 <h4 class="title">${data.snippet.title}</h4>
//                 <p class="channel-name">${data.snippet.channelTitle}</p>
//             </div>
//         </div>
//     </div>` ;
// }

// const searchBtn = document.querySelector('#search-btn');
// let queryLink = 'https://www.youtube.com/results?search_query=';

// searchBtn.addEventListener('click', () => {
//     if(searchBar.value.length) {
//         console.log(searchBar.value);
//         location.href = queryLink + searchBar.value;
//     }
// });
