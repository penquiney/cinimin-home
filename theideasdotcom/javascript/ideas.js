// create the cards for the main container

const ideas = [
    ["Make theideasdotcom generate ideas", "automation"],
    ["Sell Drugs", "investment"],
    ["sell drugs to the people who sell drugs", "cashmoney"],
    ["What if we invested in the Venezuelan Bolivar", "stocks trading profit"],
    ["What if we use diplomacy to get the Venezuelan Bolivar to invest in us", "diplomacy investment"],
    ["steal other people's ideas then make them worth of ideasdotcom", "theft stealing"],
    ["take the internet, but make it small", "smallBusiness networking internet"],
    ["make the internet easier to understand", "internet understand zen"],
    ["what if there was a discord server that played discord?", "DPD Discord"],
    ["make big money", "ideas finance"],
    ["put salt in the fridge", "food salty cold"],
    ["what if we took a hamburger and made it small, but it expanded as you ate it", "food inflation efficieny"],
    ["make ice, but it isn't cold", "cold food water"],
    ["buy theideasdotcom then send the idea to a popular business man and sell them the website", "ideas trading profit"],
    ["what if there was the internet but without liberals?", "utopia internet political"],
    ["idea: what if we had weed", "explore expand"],
    ["voting app\nrun by theideasdotcom", "voting votes elections internet political"],
];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('tags')
console.log(search)

function getTags(index) {
    var formatted = ""
    const tags = ideas[index][1].split(" ")
        for (let x = 0; x < tags.length; x++) {
            formatted += `<a href='?tags=${tags[x]}'>#${tags[x]}</a> `
        }
    return formatted
}

function makeCards() {
    var combined = ""
    for (let i = 0; i < ideas.length; i++) {
        if (ideas[i][1].includes(search) || search == undefined || search == "") {
            combined += `<div class='card'><img src='images/lightbulb.png' class='unselectable'></img><div class='content'>${ideas[i][0]}</div><div class='tags'>${getTags(i)}</div></div>\n`
        }
    }

    if (combined == "") {
        combined = "Sorry! No results :("
    }

    return combined
}

document.getElementById("main").innerHTML = makeCards();