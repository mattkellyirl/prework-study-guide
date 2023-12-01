var topics = ["HTML", "CSS", "Git", "Javascript"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic () {
    if (randomTopic === 'HTML') {
        console.log("Let's Study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's Study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's Study Git!"); 
    } else if (randomTopic === 'Javascript') {
        console.log("Let's Study Javascript!");
    } else {
        console.log("Please try again");
    }
}

console.log("Here are the topics we learned through the prework:");
listTopics()

console.log("Which topic should we study first?");
selectTopic ()

