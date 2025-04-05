let isDefense = false;
let isAttack = false;

function attack() {
    isAttack = true
    console.log(isAttack)
    document.getElementById("attackOrDefense").style.display = "none";
    document.getElementById("attackRole").style.display = "block"
}

function defense() {
    isDefense = true
    console.log(isDefense)
    document.getElementById("attackOrDefense").style.display = "none"
    document.getElementById("defenseRole").style.display = "block"
}

let isEntryFrag = false;
let isSupport = false;
let isAttackFlex = false;
let isAnchor = false;
let isRoam = false;
let isDefenseFlex = false;

function entryFrag() {
    isEntryFrag = true
    document.getElementById("attackRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

function support() {
    isSupport = true
    document.getElementById("attackRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

function attackFlex() {
    isAttackFlex = true
    document.getElementById("attackRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

function anchor() {
    isAnchor = true
    document.getElementById("defenseRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

function roam() {
    isRoam = true
    document.getElementById("defenseRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

function defenseFlex() {
    isDefenseFlex = true
    document.getElementById("defenseRole").style.display = "none"
    document.getElementById("soloQ").style.display = "block"
}

let soloQ = undefined;

function soloQYes() {
    soloQ = true
    document.getElementById("soloQ").style.display = "none"
    defenseAnchorSolo()
    defenseRoamSolo()
    defenseFlexSolo()
    defenseAnchorNotSolo()
    defenseRoamNotSolo()
    defenseFlexNotSolo()
    attackFragSolo()
    attackSupportSolo()
    attackFlexSolo()
    attackFragNotSolo()
    attackSupportNotSolo()
    attackFlexNotSolo()
}

function soloQNo() {
    soloQ = false
    document.getElementById("soloQ").style.display = "none"
    defenseAnchorSolo()
    defenseRoamSolo()
    defenseFlexSolo()
    defenseAnchorNotSolo()
    defenseRoamNotSolo()
    defenseFlexNotSolo()
    attackFragSolo()
    attackSupportSolo()
    attackFlexSolo()
    attackFragNotSolo()
    attackSupportNotSolo()
    attackFlexNotSolo()
    
}

function defenseAnchorSolo() {
    if (isDefense === true && isAnchor === true && soloQ === true) {
       console.log('defend anchor solo') 
       document.getElementById("defenseAnchorSolo").style.display = "block"
       document.getElementById("restartQuizButton").style.display = "block"
    }
}

function defenseRoamSolo() {
    if (isDefense === true && isRoam === true && soloQ === true) {
        console.log('defend roam solo')
        document.getElementById("defenseRoamSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function defenseFlexSolo() {
    if (isDefense === true && isDefenseFlex === true && soloQ === true) {
        console.log('defend flex solo')
        document.getElementById("defenseFlexSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function defenseAnchorNotSolo() {
    if (isDefense === true && isAnchor === true && soloQ === false) {
        console.log('defend anchor not solo')
        document.getElementById("defenseAnchorNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function defenseRoamNotSolo() {
    if (isDefense === true && isRoam === true && soloQ === false) {
        console.log('defend roam not solo')
        document.getElementById("defenseRoamNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function defenseFlexNotSolo() {
    if (isDefense === true && isDefenseFlex === true && soloQ === false) {
        console.log('defend flex not solo')
        document.getElementById("defenseFlexNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackFragSolo() {
    if (isAttack === true && isEntryFrag === true && soloQ === true) {
        console.log('attack anchor solo')
        document.getElementById("attackFragSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackSupportSolo() {
    if (isSupport === true && isSupport === true && soloQ === true) {
        console.log('attack roam solo')
        document.getElementById("attackSupportSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackFlexSolo() {
    if (isAttack === true && isAttackFlex === true && soloQ === true) {
        console.log('attack flex solo')
        document.getElementById("attackFlexSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackFragNotSolo() {
    if (isAttack === true && isEntryFrag === true && soloQ === false) {
        console.log('attack anchor not solo')
        document.getElementById("attackFragNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackSupportNotSolo() {
    if (isAttack === true && isSupport === true && soloQ === false) {
        console.log('attack roam not solo')
        document.getElementById("attackSupportNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function attackFlexNotSolo() {
    if (isAttack === true && isAttackFlex === true && soloQ === false) {
        console.log('attack flex not solo')
        document.getElementById("attackFlexNotSolo").style.display = "block"
        document.getElementById("restartQuizButton").style.display = "block"
    }
}

function reloadPage() {
    location.reload()
}








