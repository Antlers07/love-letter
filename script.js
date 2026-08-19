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
    "photos/1.jpg",
    "photos/2.jpg",
    "photos/3.jpg",
    "photos/4.jpg",
    "photos/5.jpg",
    "photos/6.jpg"
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

喜欢你的方式有很多种，

比如早晨的问候，

比如睡前的晚安，

比如每一天都想见到你。

你是我不需要歌词就能唱出的喜欢，

像鹿晗在歌里藏着的深情：

"世界变化不停，人潮川流不息，

我只想每个落日，身边都有你。"

世界很大，人也很多，

但我只想把所有的温柔和偏爱都留给你。

说起来，

我们的缘分真的好奇妙。

小学和中学都读同一间学校，

但从来没有说过话，

只是"见过"的程度嘿嘿。

今年二月因为我姐和ht的关系才正式"认识"，

但是你不知道吧

其实那天我害羞到根本没敢看你几眼，

虽然你那时候什么都不知道。

我也听说你和我都是同一间大学，

那时候就在想——

哇塞，真的有这么巧吗！！

然后你就在某天做好了心理准备，

主动来找我聊天。

我们聊了三个星期，

见过几次面。

直到6月10号那天晚上，

你在海边牵了我的手，

深呼吸了不知道多少次，

终于鼓起勇气跟我表白。

我一直在偷偷笑，

因为你那副紧张的样子真的很明显，

虽然完全没想到你会表白嘿嘿。

其实和你在一起之前，

我因为前男友的关系，

对爱情有点没自信，也有点害怕。

因为那时候总抱着一种想法——

"爱一个人是可以演出来的"。

可是认识你之后，

真的觉得你好可爱啊啊啊，

也不知不觉中就喜欢上你了。

你让我知道，

原来真正的喜欢是藏不住的，

是不用演的，

是连自己都骗不了的。

遇见你之后我才明白，

喜欢也可以不是轰轰烈烈，

而是早晨醒来第一个想到你，

是看到好玩的事第一个想分享给你，

是无论开心或难过都想告诉你。

我不知道永远有多远，

但我知道，

此刻的你，

就是我想要珍惜的全部。

以后的每一个清晨和黄昏，

每一个平凡或不平凡的日子，

我都想和你一起度过。

我爱你，不是说说而已，

是每一天都比昨天更爱你。

也许未来的路上会有风雨，

会有很多意想不到的难题，

但只要你在身边，

我就什么都不怕。

从前的我，

从没想过会遇到这样一个人，

让我想把所有的好都给他。

直到遇见你，

我才知道，

喜欢一个人原来可以这么认真。

所以今天，

在这个特别的日子里，

我想认真地对你说一句：

谢谢你出现在我的生命里，

谢谢你让我知道什么是被爱，

也谢谢你愿意让我爱你。

谢谢你让我重新相信，

爱不是演出来的，

爱是真的。

我一定会好好珍惜你，

不止今天，

不止今年，

而是以后的每一天。

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
