/* ==================================================
   星星
================================================== */

const starsContainer =
    document.getElementById("stars");


function createStars() {

    const starCount = 80;


    for (let i = 0; i < starCount; i++) {

        const star =
            document.createElement("div");


        star.className = "star";


        star.style.left =
            Math.random() * 100 + "vw";


        star.style.top =
            Math.random() * 100 + "vh";


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.animationDelay =
            Math.random() * 2 + "s";


        star.style.animationDuration =
            Math.random() * 2 + 1.5 + "s";


        starsContainer.appendChild(star);

    }

}


createStars();



/* ==================================================
   爱心飘落
================================================== */

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");


    heart.className = "heart";


    const heartTypes = [
        "♥",
        "♡",
        "❤",
        "💕"
    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 18 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    heart.style.opacity =
        0.3 +
        Math.random() * 0.6;


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* 每 500ms 一个 */

setInterval(
    createHeart,
    500
);



/* ==================================================
   打开信封
================================================== */

let letterOpened = false;


function openLetter() {

    if (letterOpened) {

        return;

    }


    letterOpened = true;


    const envelope =
        document.getElementById("envelope");


    envelope.classList.add("open");


    /* 音乐 - 如果还没播放就播放 */

    const music =
        document.getElementById("bgm");


    if (!musicPlaying) {
        music.volume = 0.35;
        music.play()
            .then(() => {
                musicPlaying = true;
                updateMusicButton();
            })
            .catch(() => {
                console.log(
                    "浏览器阻止了自动播放"
                );
            });
    }


    /* 等动画 */

    setTimeout(() => {

        document
            .getElementById("startScreen")
            .style.opacity = "0";


        setTimeout(() => {

            document
                .getElementById("startScreen")
                .style.display = "none";


            const main =
                document.getElementById(
                    "mainContent"
                );


            main.classList.remove(
                "hidden"
            );


            calculateLoveDays();


            startTyping();

        }, 700);

    }, 1200);

}



/* ==================================================
   音乐
================================================== */

const music =
    document.getElementById("bgm");


let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

            })
            .catch(() => {

                alert(
                    "请先点击网页后再播放音乐 ♡"
                );

            });

    }


    updateMusicButton();

}



function updateMusicButton() {

    const button =
        document.getElementById(
            "musicButton"
        );


    if (musicPlaying) {

        button.innerHTML = "🔊";

    } else {

        button.innerHTML = "🎵";

    }

}



/* ==================================================
   恋爱天数
================================================== */


/*
   ★★★ 修改这里 ★★★

   改成你们正式在一起的日期

   格式：

   YYYY-MM-DD
*/

const relationshipStart =
    new Date("2026-06-10");



function calculateLoveDays() {

    const today =
        new Date();


    /*
       清除时间影响
    */

    const start =
        new Date(
            relationshipStart
        );


    start.setHours(
        0,
        0,
        0,
        0
    );


    today.setHours(
        0,
        0,
        0,
        0
    );


    const difference =
        today - start;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const loveDays =
        document.getElementById(
            "loveDays"
        );


    if (days >= 0) {

        loveDays.innerText =
            days;

    } else {

        loveDays.innerText =
            "0";

    }


    document.getElementById(
        "startDate"
    ).innerText =
        formatDate(
            relationshipStart
        );

}



function formatDate(date) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            date.getDate()
        ).padStart(2, "0");


    return `${year}.${month}.${day}`;

}



/* ==================================================
   照片轮播
================================================== */


/*
   ★★★ 如果你有更多照片
   可以继续增加
*/

const photos = [

    "1.jpg",

    "2.jpg",

    "3.jpg",

    "4.jpg",

    "5.jpg",

    "6.jpg",


];


const captions = [

    "我最喜欢的你 ♡",

    "和你在一起的每一天",

    "我们的快乐时光",

    "小小的回忆，大大的幸福",

    "以后还要一起拍很多很多照片"

];


let currentPhoto = 0;


const photo =
    document.getElementById(
        "photo"
    );


const caption =
    document.getElementById(
        "photoCaption"
    );


const dots =
    document.querySelectorAll(
        ".dot"
    );



function changePhoto() {

    photo.style.opacity = "0";


    setTimeout(() => {

        currentPhoto++;


        if (
            currentPhoto >=
            photos.length
        ) {

            currentPhoto = 0;

        }


        photo.src =
            photos[currentPhoto];


        caption.innerText =
            captions[currentPhoto];


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentPhoto
                );

            }
        );


        photo.style.opacity = "1";

    }, 300);

}


/*
   每 3 秒换照片
*/

setInterval(
    changePhoto,
    3000
);



/* ==================================================
   打字机
================================================== */


/*
   ★★★ 修改这里 ★★★

   写你想对他说的话
*/

const loveMessage =

`今天不是我第一次喜欢你，

但想让它成为我第一个认真说爱你的七夕。

谢谢你出现在我的生活里，

让普通的日子变得特别。

我不知道未来会有多少个春夏秋冬，

但我希望每一个季节，

都有你在我的身边。

以后也请多多指教。

我爱你 ♡`;



let typingStarted = false;


function startTyping() {

    if (typingStarted) {

        return;

    }


    typingStarted = true;


    const element =
        document.getElementById(
            "typingText"
        );


    let index = 0;


    function type() {

        if (
            index <
            loveMessage.length
        ) {

            element.textContent +=
                loveMessage.charAt(index);


            index++;


            setTimeout(
                type,
                55
            );

        }

    }


    type();

}



/* ==================================================
   Surprise
================================================== */

function showSurprise() {

    const surprise =
        document.getElementById(
            "surprise"
        );


    surprise.classList.remove(
        "hidden"
    );


    /*
       突然增加爱心
    */

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}



/* ==================================================
   页面打开 - 自动播放音乐
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "♡ Love Letter Loaded ♡"
        );

        // ★★★ 自动播放音乐 ★★★
        const music = document.getElementById("bgm");
        music.volume = 0.35;

        music.play()
            .then(() => {
                musicPlaying = true;
                updateMusicButton();
                console.log("🎵 音乐已自动播放");
            })
            .catch(() => {
                console.log("⛔ 浏览器阻止自动播放，等待用户点击");
                // 用户首次点击页面任意位置时播放
                document.addEventListener('click', function playOnFirstClick() {
                    music.play().then(() => {
                        musicPlaying = true;
                        updateMusicButton();
                        console.log("🎵 用户点击后音乐开始播放");
                    }).catch(() => {});
                    document.removeEventListener('click', playOnFirstClick);
                }, { once: true });
            });

    }
);