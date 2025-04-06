window.addEventListener("DOMContentLoaded", () => {
    const blobfish = document.getElementById("blobfish");
    const speechBubble = document.getElementById("speech-bubble");

    const messages = [
        "Hi Mayy! 👋😊",
        "I made this website for you! 🛠️💖",
        "Tap me to get your compliments! 👉🐟",
        "May, I'm reel-y into you 🎣😉",
        "Don't call me a bitch when I'm complimenting you... I'm a fish 🐡😤💅",
        "I love you more than eating sea urchins 🎣🍽️💘",
        "You're my eepy neepy little cutie 😴💕",
        "You got me tweakin like I'm out of water 🐟💨",
        "Since you are a tiger.. are you intersted in *censored* me 🐟😉 (CRAZYYY) 🐯😳",
        '"Don’t worry bro, there are other fishes in the sea" BUT I JUST WANT YOU! 💔🌊',
        "Even your eye rolls are cute 🙄❤️",
        "~End of message~",
        "Come back again next timeee 👋🐠",
        "I said come back again next time 🐟🙃",
        "I said next time...",
        "NEXT TIME",
        "COME BACK NEXT TIME",
        "KAPAN-KAPAN LAGI ANJIR",
        "Sorry for screaming at you sweetie 🥺💕",
        "Funny how the fish's face stays the same when screaming wkwkwk",
        "I'm not that pro.. 🛠️🙃",
        "Okayy I'll see you next timeee 👋😚",
        "May... I'm running out of ideas",
        "...",
        "*Whistling* 🎶🐟",
        "So... whatchu doing cutie? 😏💬",
        "Congratulations! You have unlocked a unique scene! 🎉🎊",
        "Just kidding, I'm not that creative 😅🐠",
        "This is all I can do for now 🧜‍♂️💨",
        "I'm gonna swim away now (dramaticaly)",
        "Okay byebyeee 👋💞",
        "*whoooshhh*"
    ];
    
    let currentMessageIndex = 0;

    // Hide bubble completely at start
    speechBubble.style.display = "none";

    // Initial swim animation
    blobfish.classList.add("swim-in");

    // After swim-in ends (~1.8s), start bobbing + show first message
    setTimeout(() => {
        blobfish.classList.add("bob");
        speechBubble.style.display = "inline-block";
        showMessage();
    }, 1850);

    function swimAway() {
        // Remove bobbing animation
        blobfish.classList.remove("bob");
        
        // Add swim away animation
        blobfish.classList.add("swim-out");
        
        // After swim away completes, hide the fish
        setTimeout(() => {
            blobfish.style.display = "none";
            speechBubble.style.display = "none";
        }, 2000);
    }

    blobfish.addEventListener("click", () => {
        // If we've shown all messages, do nothing
        if (currentMessageIndex >= messages.length) return;
        
        // Wiggle animation
        blobfish.classList.add("clicked");
        setTimeout(() => blobfish.classList.remove("clicked"), 500);
        
        showMessage();
    });
    
    speechBubble.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentMessageIndex >= messages.length) return;
        showMessage();
    });
    
    function showMessage() {
        const isFirstMessage = currentMessageIndex === 0;
        
        if (!isFirstMessage) {
            speechBubble.classList.remove("animate");
            speechBubble.classList.add("pop-out");
            setTimeout(updateMessage, 300);
        } else {
            updateMessage();
        }
    }
    
    function updateMessage() {
        speechBubble.textContent = messages[currentMessageIndex];
        currentMessageIndex++;
        
        // Reset animation and show
        speechBubble.classList.remove("pop-out");
        void speechBubble.offsetWidth;
        speechBubble.classList.add("animate");
        
        // If this was the last message, swim away after a delay
        if (currentMessageIndex >= messages.length) {
            setTimeout(swimAway, 1500); // Wait 1.5s before swimming away
        }
    }
});