// ==========================================
// APP ENTRY POINT
// The Museum Reserved Only For You
// ==========================================
// ================= BACKGROUND MUSIC =================
const bgPlaylist = [
    "assets/images/music/song1.mp3",
    "assets/images/music/song2.mp3",
    "assets/images/music/song3.mp3"
];
let bgTrackIndex = 0;
const bgAudio = new Audio(bgPlaylist[bgTrackIndex]);
bgAudio.volume = 0.5;

bgAudio.addEventListener("ended", () => {
    bgTrackIndex = (bgTrackIndex + 1) % bgPlaylist.length;
    bgAudio.src = bgPlaylist[bgTrackIndex];
    bgAudio.play();
});

function startBgMusic() {
    bgAudio.play().catch(() => {});
}
document.addEventListener("click", startBgMusic, { once: true });

const musicBtn = document.createElement("button");
musicBtn.id = "musicToggle";
musicBtn.textContent = "🔊";
document.body.appendChild(musicBtn);

musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (bgAudio.paused) {
        bgAudio.play();
        musicBtn.textContent = "🔊";
    } else {
        bgAudio.pause();
        musicBtn.textContent = "🔇";
    }
});
const app = document.getElementById("app");
let currentMemoryPhoto = "";
function loadScene1() {

    app.innerHTML = `
    <section class="scene intro-screen">

        <div class="particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="intro-content">

            <p class="intro-subtitle">
                Reserved Only For
            </p>

            <h1 class="intro-title">
                Shafa
            </h1>

            <p class="intro-tagline">
                Some places are built with bricks.<br>
                This one was built with memories.<br><br>
                <span class="journey-line">
                    A journey made with love ❤️
                </span>
            </p>

            <p class="tap-text">
                Tap Anywhere To Begin
            </p>

        </div>

    </section>
    `;

    const introScreen = document.querySelector(".intro-screen");

    introScreen.addEventListener("click", function (e) {

        // Ripple effect
        createRipple(e);

        // Fade after ripple
        setTimeout(() => {

            introScreen.classList.add("fade-out");

            // Load Scene 2
            setTimeout(() => {

                if (typeof SceneManager !== "undefined") {
                    SceneManager.nextScene();
                }

            }, 900);

        }, 250);

    });

}

function loadScene2() {

    app.innerHTML = `
    <section class="scene letter-scene">

        <div class="envelope-wrapper">

        <div class="envelope" id="loveEnvelope">

        <div class="envelope-back"></div>
    
        <div class="envelope-front"></div>
    
        <div class="wax-seal" id="waxSeal">❤️</div>
    
        <div class="envelope-text">
            For<br>Shafa
        </div>
    
    </div>
    
    <div class="envelope-letter" id="letterPaper">
    <p class="letter-line" id="line1"></p>

    <p class="letter-line" id="line2"></p>
    
    <p class="letter-line" id="line3"></p>
    
    <button class="continue-btn" id="continueBtn">
        Continue →
    </button>
    </div>

            <p class="tap-envelope" id="tapText">
               
            </p>

        </div>

    </section>
    `;

    const envelope = document.getElementById("loveEnvelope");
    const seal = document.getElementById("waxSeal");
    const tapText = document.getElementById("tapText");
    const line1 = document.getElementById("line1");
    const letterPaper = document.getElementById("letterPaper");

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");
        setTimeout(() => {
            letterPaper.classList.add("show");
        }, 700);

        setTimeout(() => {
            envelope.style.opacity = "0";
            envelope.style.transform = "scale(0.9)";
        }, 1700);

        tapText.style.opacity = "0";

        envelope.style.pointerEvents = "none";

        seal.style.boxShadow = "0 0 35px rgba(139,30,63,.9)";

        setTimeout(() => {

            const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const continueBtn = document.getElementById("continueBtn");

function typeLine(element, text, speed, callback){

    let i = 0;

    const typing = setInterval(() => {

        element.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

            if(callback) callback();

        }

    }, speed);

}

typeLine(line1, "Dear Shafa,", 100, () => {

    typeLine(
        line2,
        "Before I show you this little world...",
        55,
        () => {

            typeLine(
                line3,
                "I wanted to tell you something din dhale yaa ho shaam dil mein bass haii tumhara naam raat ki neend bhi tumhare hone se puri hoti haii subah ki khuli aankhe meri sirf tumhe khojti hain.",
                55,
                () => {

                    continueBtn.classList.add("show");

                }
            );

        }
    );

});

        },1200);
        continueBtn.addEventListener("click", () => {

            startJourney();
        
        });

    });

}
function startJourney() {

    const letterScene = document.querySelector(".letter-scene");

    letterScene.classList.add("scene-fade");

    setTimeout(() => {

        loadScene3();

    }, 1200);

}
function loadScene3() {

    app.innerHTML = `
    <section class="scene museum-intro">

        <div class="gold-light"></div>
        <div class="dove-container">

<svg class="dove-svg" viewBox="0 0 240 120">

<g class="left-wing">
<path d="M120 60 C70 0 15 20 20 65 C45 50 70 55 120 60" fill="white"/>
</g>

<g class="right-wing">
<path d="M120 60 C170 0 225 20 220 65 C195 50 170 55 120 60" fill="white"/>
</g>

<ellipse cx="120" cy="63" rx="26" ry="12" fill="white"/>

<circle cx="145" cy="58" r="8" fill="white"/>

<polygon points="152,58 162,54 154,61"
fill="#f8d16a"/>

</svg>

</div>


        <div class="door left-door"></div>

        <div class="door right-door"></div>
       
    
    </div>

        <div class="museum-text">

            <h1>The Museum of Us</h1>

            <p>Every memory has a story...</p>

        </div>

    </section>
    `;

    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");
    const dove = document.querySelector(".dove-container");

    setTimeout(() => {

        leftDoor.style.transform = "translateX(-100%)";
        rightDoor.style.transform = "translateX(100%)";
        dove.style.opacity = "1";

    }, 1200);

    // Go to Scene 4 after doors finish opening
    setTimeout(() => {

        loadScene4();

    }, 9000);

}

function loadScene4(){

    app.innerHTML = `
    <section class="scene museum-gallery">

        <div class="gallery-bg"></div>
        <div class="spotlight"></div>

        <div class="floating-dust"></div>
        <div class="gallery-header">

        <h1 class="gallery-title">
        Our First Memory
        </h1>
        
        <p class="gallery-subtitle">
        Every love story has a beginning...
        </p>
        
        </div>
        
        <div class="photo-frame" id="memoryOne">
            <div class="frame-sparkle"></div>
            <img src="assets/images/photo1.jpg" class="memory-photo">
        </div>

        <p class="memory-caption" id="memoryCaption"></p>

    </section>
    `;
    
    
    const memoryOne = document.getElementById("memoryOne");

console.log(memoryOne);

memoryOne.addEventListener("click", () => {

openMemoryLetter();

});

    const caption = document.getElementById("memoryCaption");

const text =
"Every beautiful story begins with one unforgettable moment.";

let i = 0;

const typing = setInterval(() => {

    caption.textContent += text.charAt(i);

    i++;

    if (i >= text.length) {

        clearInterval(typing);

        const sparkle = document.querySelector(".frame-sparkle");

        sparkle.animate(
            [
                { left: "-25px", opacity: 0 },
                { opacity: 1 },
                { left: "280px", opacity: 0 }
            ],
            {
                duration: 1800,
                easing: "ease-in-out"
            }
        );

    }

}, 40);
}
function loadScene5(){

    app.innerHTML = `
    <section class="scene polaroid-gallery">

        <div class="museum-wall"></div>

        <div class="wall-light"></div>

        <div class="gallery-rope">
        <div class="museum-dust"></div>

        <div class="photo-light light1"></div>
        <div class="photo-light light2"></div>
        <div class="photo-light light3"></div>
        <div class="photo-light light4"></div>

        <div class="polaroid">

    <div class="clip"></div>

    <img src="assets/images/photo2.jpg">

</div>
<div class="polaroid">

<div class="clip"></div>

<img src="assets/images/photo3.jpg">

</div>

<div class="polaroid">

<div class="clip"></div>

<img src="assets/images/photo4.jpg">

</div>
<div class="polaroid">

    <div class="clip"></div>

    <img src="assets/images/photo5.jpg">

</div>

</div>
<div class="photo-viewer" id="photoViewer">

    <button class="close-viewer" id="closeViewer">✕</button>

    <img id="viewerImage" src="">

</div>
<button class="continue-journey" id="continueJourney">
    Continue Our Journey ❤️
</button>

    </section>
    `;
    const viewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

const photos = document.querySelectorAll(".polaroid");
let selectedPhoto = null;

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        selectedPhoto = photo;
        console.log("Selected:", selectedPhoto);

        const img = photo.querySelector("img");
        currentMemoryPhoto = img.src;

        viewerImage.src = img.src;

        viewer.classList.add("show");

    });

});

const continueJourney =
document.getElementById("continueJourney");

let hasViewedPhoto = false;

closeViewer.addEventListener("click", () => {

    viewer.classList.remove("show");

    if(!hasViewedPhoto){

        hasViewedPhoto = true;

        continueJourney.classList.add("show");

    }

});
continueJourney.addEventListener("click", () => {
    continueJourney.style.opacity = "0";
continueJourney.style.pointerEvents = "none";

    const img = selectedPhoto.querySelector("img");

    const floatingPhoto = document.createElement("img");

    floatingPhoto.src = img.src;

    floatingPhoto.className = "floating-memory";

    document.body.appendChild(floatingPhoto);

    requestAnimationFrame(() => {

        floatingPhoto.style.opacity = "1";
    
        floatingPhoto.style.transform =
        "translate(-50%, -50%) scale(1)";
    
        // Hide gallery
        document.querySelector(".polaroid-gallery").style.transition =
        "1.2s";
    
        document.querySelector(".polaroid-gallery").style.opacity =
        ".15";
    
        // Zoom after appearing
        setTimeout(() => {
    
            floatingPhoto.style.transform =
            "translate(-50%, -50%) scale(3)";
            setTimeout(() => {

                // White Flash
                const flash = document.createElement("div");
            
                flash.className = "memory-flash";
            
                document.body.appendChild(flash);
            
                setTimeout(() => {
            
                    flash.remove();
            
                    // CINEMA FADE

const fade = document.createElement("div");

fade.className = "cinema-fade";

document.body.appendChild(fade);

requestAnimationFrame(() => {

    fade.classList.add("show");

});
floatingPhoto.style.transition = "all 1.2s ease";
setTimeout(() => {
    loadMemory2();
    floatingPhoto.style.transform = "translate(-50%, -50%) scale(0.7)";
    floatingPhoto.style.opacity = "0";

    setTimeout(() => {
        fade.remove();
    }, 100);

},1200);
            
                },700);
            
            },900);
        },900);
    
    });

});
}
function openMemoryLetter(){

const letter = document.createElement("div");

letter.className = "memory-letter";

letter.innerHTML = `
<div class="magic-sparkles">

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

</div>
<div class="heart-particles">

    <span>❤️</span>
    <span>🤍</span>
    <span>❤️</span>
    <span>🤍</span>
    <span>❤️</span>

</div>
    


<div class="letter-paper">

        <button class="close-letter">✕</button>

        <h2>Meriiiii Rasmalaiiiii ❤️</h2>

        <p id="memoryText"></p>

    </div>
`;

document.body.appendChild(letter);
const paperSound = new Audio("assets/images/music/sounds/paper-open.mp3");

paperSound.volume = 1.0;

paperSound.play().catch(() => {});

setTimeout(() => {
    paperSound.pause();
    paperSound.currentTime = 0;
}, 2500);
console.log(letter);

requestAnimationFrame(() => {

    letter.classList.add("show");
    setTimeout(() => {

        const text =
    `This was the moment everything began darte darte tumse kehne aaye the hum photo ke liyee akhir pyaar dil mein itnaa bhara huaa haii ki bole mein hi nahi ban raha tha kyaa kahe kaisee kahee tumsee parr ek chiz kahengee sukriyaaa iss duniyaa mein aane ke liyee meree life ki oxygen ban chuki ho tum.
    
    I never knew one photo could become the beginning of so many beautiful memories even aaj bhii iss din se accha nahi lagta hai kuch jab ek tasveer mein pehli baar hum dono sath aaye thee always be happy my loveee.
    
    Thank you for existing.
    
    ❤️`;
    
        const target = letter.querySelector("#memoryText");
    
        let i = 0;
    
        function type(){
    
            if(i < text.length){
    
                target.textContent += text.charAt(i);
    
                i++;
    
                setTimeout(type,35);
    
            }
    
        }
    
        type();
    
    },700);

});

document
.querySelector(".close-letter")
.onclick = () => {

    letter.classList.remove("show");
    setTimeout(() => {

        letter.remove();
    
        document.body.classList.add("scene-dark");
    
        setTimeout(() => {
    
            loadScene5();
    
            document.body.classList.remove("scene-dark");
    
        },1000);
    
    },500);
};

}
// Temporary Ripple Function
function createRipple(e) {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);

}
function loadMemory2(){

    app.innerHTML =`
    <section class="memory2-room">

        <div class="memory2-overlay"></div>

        <div class="memory2-particles"></div>

        <div class="memory2-spotlight"></div>

        <h2 class="memory2-title">Love Of My Heart Beside Me ❤️</h2>

        <p class="memory2-line line1">Some moments are too precious to stay in photographs alone📸.</p>

        <div class="memory2-frame">
            <img src="assets/images/photo5.jpg" alt="Memory 2">
        </div>

        <p class="memory2-line line2">So I kept this one safe in the museum of my heart💝💗.</p>

    </section>
    `;

    const room = document.querySelector(".memory2-room");
    room.classList.remove("show");
    requestAnimationFrame(() => {
        room.classList.add("show");
    });
    document.querySelector(".memory2-frame").addEventListener("click", openMemory2Letter);
}
function openMemory2Letter(){

    const letter = document.createElement("div");
    letter.className = "memory-letter";

    letter.innerHTML =`
    <div class="magic-sparkles">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
    <div class="heart-particles">
        <span>❤️</span><span>🤍</span><span>❤️</span><span>🤍</span><span>❤️</span>
    </div>
    <div class="letter-paper">
        <button class="close-letter">✕</button>
        <h2>Meriiiiiii Zindagiiiiiiiii ❤️</h2>
        <p id="memory2Text"></p>
    </div>
    `;

    document.body.appendChild(letter);

    const paperSound = new Audio("assets/images/music/sounds/paper-open.mp3");
    paperSound.volume = 1.0;
    paperSound.play().catch(() => {});
    setTimeout(() => { paperSound.pause(); paperSound.currentTime = 0; }, 2500);

    requestAnimationFrame(() => {
        letter.classList.add("show");
        setTimeout(() => {
            const text =`
Look at us standing there in front a heart made of flowers like the world already knew what I was only beginning to understand that you are the softest safest place I have ever known.

I remember how nervous I was that day not because of the camera but because of how I was feeling just having you beside me you in that saree glowing like something out of a dream I didn't know I was allowed to have me trying so hard to look calm while my heart was doing anything but

Some people wait a lifetime for one photograph like this I got to live it breathe it and now I get to keep it forever tucked safely between the pages of us

Every memory with you feels like a small forever this one especially because in it I wasn't just standing next to you I was standing at the beginning of something I never want to end

Thank you for being my favorite person to stand beside in every frame in every memory in every version of our story still waiting to be written

I love you endlessly`;

            const target = letter.querySelector("#memory2Text");
            let i = 0;
            function type(){
                if(i < text.length){
                    target.textContent += text.charAt(i);
                    i++;
                    setTimeout(type,35);
                }
            }
            type();
        },700);
    });

    letter.querySelector(".close-letter").onclick = () => {
        letter.classList.remove("show");
        setTimeout(() => {
            letter.remove();
            document.body.classList.add("scene-dark");
            setTimeout(() => {
                loadMemory3();
                document.body.classList.remove("scene-dark");
            },1000);
        },500);
    };
}
function loadMemory3(){

    app.innerHTML = `
    <section class="memory3-room">

        <div class="memory3-bg"></div>

        <div class="memory3-confetti">
            <span>💗</span><span>🤍</span><span>💕</span>
            <span>💗</span><span>🤍</span><span>💕</span>
        </div>

        <h2 class="memory3-title">Manifesting this.. 💌</h2>
        <p class="memory3-hint">Tap the postcard to read what's on the back</p>

        <div class="postcard" id="postcard3">
            <div class="postcard-inner">

                <div class="postcard-front">
                    <div class="postcard-photo">
                        <img src="assets/images/photo3.jpg" alt="Memory 3">
                    </div>
                    <div class="postcard-stamp">💌</div>
                    <div class="postcard-postmark">Delivered with love</div>
                </div>

                <div class="postcard-back">
                    <button class="postcard-close" id="closePostcard3">✕</button>
                    <p class="postcard-message" id="postcard3Text"></p>
                </div>

            </div>
            <button class="continue-love" id="continueLove3">Continue My Love ➡️</button>
        </div>

    </section>
    `;

    const room = document.querySelector(".memory3-room");
    requestAnimationFrame(() => room.classList.add("show"));

    const postcard = document.getElementById("postcard3");
    const closeBtn = document.getElementById("closePostcard3");
    const target = document.getElementById("postcard3Text");
    let typed = false;

    postcard.addEventListener("click", () => {

        if(postcard.classList.contains("flipped")) return;
        postcard.classList.add("flipped");

        if(!typed){
            typed = true;

            const text =`
Dear you,

Three memories in and I already feel like the luckiest person alive every photo we take is just proof that us being together is the best decision either of us ever made

I hope years from now we look back at this little site and smile at how much softer deeper and stronger our love has grown from here

here's to many many more memories

I will be your lifetime comrade and cherish your all success`;

            let i = 0;
            function type(){
                if(i < text.length){
                    target.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 30);
                }
            }
            setTimeout(type, 400);
        }
    });

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        postcard.classList.remove("flipped");
    });
    const continueBtn = document.getElementById("continueLove3");

    setTimeout(() => {
        continueBtn.classList.add("show");
    }, 1500);

    continueBtn.addEventListener("click", () => {

        continueBtn.style.pointerEvents = "none";
        continueBtn.style.opacity = "0";

        const burst = document.createElement("div");
        burst.className = "love-burst";
        for(let i=0;i<16;i++){
            const p = document.createElement("span");
            p.textContent = ["💗","💕","🌸","✨"][Math.floor(Math.random()*4)];
            p.style.left = Math.random()*100 + "%";
            p.style.animationDelay = (Math.random()*0.6) + "s";
            burst.appendChild(p);
        }
        document.body.appendChild(burst);

        setTimeout(() => {
            const flash = document.createElement("div");
            flash.className = "memory-flash";
            document.body.appendChild(flash);

            setTimeout(() => {
                flash.remove();
                const fade = document.createElement("div");
                fade.className = "cinema-fade";
                document.body.appendChild(fade);
                requestAnimationFrame(() => fade.classList.add("show"));

                setTimeout(() => {
                    loadMemory4();
                    burst.remove();
                    setTimeout(() => fade.remove(), 100);
                }, 900);
            }, 500);
        }, 900);
    });
}
function loadMemory4() {
    app.innerHTML = `
    <section class="memory4-room">
        <div class="memory4-overlay"></div>

        <h2 class="memory4-title">Moment I want ✨</h2>

        <p class="memory4-topline">And somehow, every path led me back to you.</p>

        <div class="memory4-frame">
            <img src="assets/images/photo2.jpg" alt="Memory 4">
        </div>

        <p class="memory4-bottomline">Some memories end, but their warmth stays forever.</p>

        <button class="memory4-next" id="finalSurpriseBtn">One Last Surprise 💌</button>
        <button class="memory4-end" id="endMuseumBtn">Click To End Our Museum 🤍</button>
    </section>
    `;

    requestAnimationFrame(() => {
        document.querySelector(".memory4-room").classList.add("show");
    });

    setTimeout(() => {
        openFinalLetterOne();
    }, 1500);

    const surpriseBtn = document.getElementById("finalSurpriseBtn");

    surpriseBtn.addEventListener("click", () => {
        openFinalLetterTwo();
    });




}
  
    

function openFinalLetterOne(){

    const letter = document.createElement("div");
    letter.className = "memory-letter";

    letter.innerHTML = `
    <div class="magic-sparkles">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
    <div class="heart-particles">
        <span>❤️</span><span>🤍</span><span>❤️</span><span>🤍</span><span>❤️</span>
    </div>
    <div class="letter-paper">
        <button class="close-letter">✕</button>
        <h2>Meriiii Begam Sahiba ❤️</h2>
        <p id="finalLetterOneText"></p>
    </div>
    `;

    document.body.appendChild(letter);

    const paperSound = new Audio("assets/images/music/sounds/paper-open.mp3");
    paperSound.volume = 1.0;
    paperSound.play().catch(() => {});
    setTimeout(() => { paperSound.pause(); paperSound.currentTime = 0; }, 2500);

    requestAnimationFrame(() => {
        letter.classList.add("show");

        const paperEl = letter.querySelector(".letter-paper");
        setTimeout(() => { paperEl.style.transform = "none"; }, 1500);

        setTimeout(() => {
            const text =`
Every road I've ever walked somehow always led me back to you

this isn't really the last photograph of us it's just proof that we're only getting started I don't know exactly what our next chapter looks like but I already know I want you standing right beside me in every page of it

thank you for being my always my loveeee my home

I love you more than any of these words could ever hold.`;

            const target = letter.querySelector("#finalLetterOneText");
            let i = 0;
            function type(){
                if(i < text.length){
                    target.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 30);
                }
            }
            type();
        }, 700);
    });

    letter.querySelector(".close-letter").onclick = () => {
        letter.classList.remove("show");
        setTimeout(() => {
            letter.remove();
            document.getElementById("finalSurpriseBtn").classList.add("show");
        }, 500);
    };
}

function openFinalLetterTwo(){

    const letter = document.createElement("div");
    letter.className = "memory-letter";

    letter.innerHTML = `
    <div class="magic-sparkles">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
    <div class="heart-particles">
        <span>❤️</span><span>🤍</span><span>❤️</span><span>🤍</span><span>❤️</span>
    </div>
    <div class="letter-paper">
        <button class="close-letter">✕</button>
        <h2>One Last Thing ❤️</h2>
        <p id="finalLetterTwoText"></p>

        <div class="voice-message" id="voiceMessage">
    <button class="voice-play-btn" id="voicePlayBtn">▶</button>
    <div class="voice-waveform">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
    <span class="voice-status" id="voiceStatus">Tap to play</span>
    <audio id="finalAudio" src="assets/images/music/sounds/final-message.mp3" preload="auto"></audio>
</div>

        <button class="end-museum-btn" id="endMuseumBtn">Let's End Our Museum 🤍</button>
    </div>
    `;

    document.body.appendChild(letter);

    requestAnimationFrame(() => {
        letter.classList.add("show");

        const paperEl = letter.querySelector(".letter-paper");
        setTimeout(() => { paperEl.style.transform = "none"; }, 1500);

        setTimeout(() => {
            const text =`
There's one more thing I wanted to give you something words on a screen could never fully carry......

So instead of typing it I recorded it just for you.

Press play whenever you're ready to hear it in my own voice.`;

            const target = letter.querySelector("#finalLetterTwoText");
            let i = 0;
            function type(){
                if(i < text.length){
                    target.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 30);
                }
            }
            type();
        }, 700);
    });

    const audio = letter.querySelector("#finalAudio");
    const playBtn = letter.querySelector("#voicePlayBtn");
    const voiceMsg = letter.querySelector("#voiceMessage");
    const endBtn = letter.querySelector("#endMuseumBtn");
    let hasStartedOnce = false;

    playBtn.addEventListener("click", () => {
        if(audio.paused){
            audio.play().catch(() => {
                playBtn.textContent = "▶";
                voiceMsg.classList.remove("playing");
            });
        } else {
            audio.pause();
        }
    });

    let bgWasPlaying = false;

    audio.addEventListener("play", () => {
        playBtn.textContent = "⏸";
        voiceMsg.classList.add("playing");

        if (!bgAudio.paused) {
            bgWasPlaying = true;
            bgAudio.pause();
        }
    });

    audio.addEventListener("pause", () => {
        playBtn.textContent = "▶";
        voiceMsg.classList.remove("playing");

        if (bgWasPlaying) {
            bgAudio.play();
            bgWasPlaying = false;
        }
    });

    audio.addEventListener("ended", () => {
        playBtn.textContent = "▶";
        voiceMsg.classList.remove("playing");

        if (bgWasPlaying) {
            bgAudio.play();
            bgWasPlaying = false;
        }
    });
    letter.querySelector(".close-letter").onclick = () => {
        audio.pause();
        letter.classList.remove("show");
        setTimeout(() => { letter.remove(); }, 500);
    };

    endBtn.addEventListener("click", () => {
        audio.pause();
        const flash = document.createElement("div");
        flash.className = "memory-flash";
        document.body.appendChild(flash);

        setTimeout(() => {
            flash.remove();
            letter.remove();
            const fade = document.createElement("div");
            fade.className = "cinema-fade";
            document.body.appendChild(fade);
            requestAnimationFrame(() => fade.classList.add("show"));

            setTimeout(() => {
                loadFinale();
                setTimeout(() => fade.remove(), 100);
            }, 1200);
        }, 900);
    });
}

function loadFinale(){
    app.innerHTML = `
    <section class="finale-room">
        <div class="finale-glow"></div>
        <h1 class="finale-title">Thank You For The Forever You Give Me</h1>
        <p class="finale-message">This little museum only holds a few memories, but my favorite one is still being made, every single day, with you.</p>
        <p class="finale-signature">Always yours 🤍</p>
    </section>
    `;
    requestAnimationFrame(() => {
        document.querySelector(".finale-room").classList.add("show");
    });
}


//start website
loadScene1();