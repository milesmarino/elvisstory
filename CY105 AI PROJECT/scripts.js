const storyData = [
    {
        title: "The Story of Elvis",
        img: "images/hugging_elvis.jpg",
        text: "Hello CY105! Welcome to the story of Miles and Elvis!"
    },
    {
        title: "1",
        img: "images/young_miles.jpg",
        text: "There was once a little boy whose dream was to have a dog of his own one day. His parents always told him and his brothers that they didn't understand the commitment that came with taking care of an animal, but the three brothers still hoped that one day their parents would change their minds."
    },
    {
        title: "Dreaming of having a dog",
        img: "images/dogpark.jpg",
        text: "Although his parents constantly said no, Miles never stopped hoping. He would go to the park and see dogs playing and it only strengthened his desire to have a dog of his own."
    },
    {
        title: "Angry Car Ride",
        img: "images/angry_miles.jpg",
        text: "One summer day, Miles's parents took him and his brothers in the car to meet someone. The boys were frustrated because they had no idea who they were going to meet because their parents wouldn’t tell them. However, soon the boys would find out that they were meeting their new dog!"
    },
    {
        title: "Meeting Elvis!",
        img: "images/meeting_elvis.jpg",
        text: "This was a very special day for the three brothers. They finally got to meet their new dog, a rescue named Elvis."
    },
    {
        title: "Exciting Ride Home",
        img: "images/ELVIS_INTRO.jpg",
        text: "Elvis didn't know who these people were yet, but he could feel the love that his new family had for him. On the ride home he had his eyes wide and tail wagging the whole time."
    },
    {
        title: "Rolling in the Mud",
        img: "images/elvis_mud2.jpg",
        text: "When Elvis was a puppy, he would always get into trouble. He would often pee and poop in the house and drive my parents insane. Or, he'd run around in the yard and get all muddy."
    },
    {
        title: "Washing Off",
        img: "images/elvis_hose.jpg",
        text: "When he'd get all muddy, my dad was always the one washing him off with the hose. Elvis hates the water!"
    },
    {
        title: "Best Friends",
        img: "images/elvis_dad.jpg",
        text: "Even though my dad was always the one dealing with Elvis's trouble making, they are still best friends!"
    },
    {
        title: "Elvis's Biggest Fear!",
        img: "images/elvis_scared.jpg",
        text: "One thing about Elvis is that he HATES thunder. Whenever he hears thunder, he goes and hides under a chair or my parent's bed to hide."
    },
    {
        title: "When He's Bored",
        img: "images/ELVIS_LAYING.jpg",
        text: "Whenever Elvis is bored or tired, you can find him laying down in my Mom's room. This is his favorite activity!"
    },
    {
        title: "Thank You for Checking out my Website!",
        img: "images/miles_elvis.jpg",
        text: "I hope you enjoyed learning about how Elvis and I met! Have a great day!"
    }
];

let currentIndex = 0;

function updateSlide() {
    const imageEl = document.getElementById("story-image");
    const textEl = document.getElementById("story-text");
    const titleEl = document.getElementById("slide-title");

    const current = storyData[currentIndex];

    imageEl.src = current.img;
    imageEl.style.display = "block";
    textEl.innerText = current.text;
    titleEl.innerText = current.title;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % storyData.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + storyData.length) % storyData.length;
    updateSlide();
}

updateSlide();


