import * as THREE from
    'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
let explorationActive = false;
const beginButton =
    document.getElementById("begin-btn");
// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050817);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 8);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.getElementById('game-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x4488ff, 30);
pointLight.position.set(3, 5, 4);
scene.add(pointLight);

// Floor
const floorGeometry = new THREE.PlaneGeometry(30, 30);
const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x101a35,
    roughness: 0.7
});

const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
scene.add(floor);

// Astronaut placeholder
const astronaut = new THREE.Group();

// Body
const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.5, 1.2, 32),
    new THREE.MeshStandardMaterial({ color: 0xdce8ff })
);
astronaut.add(body);

// Helmet
const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x91dfff,
        metalness: 0.6,
        roughness: 0.2
    })
);
helmet.position.y = 0.9;
astronaut.add(helmet);

// Visor
const visor = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x102b55,
        metalness: 0.8,
        roughness: 0.15
    })
);
visor.scale.set(1, 0.75, 0.45);
visor.position.set(0, 0.9, 0.35);
astronaut.add(visor);

astronaut.position.set(0, 0, 0);
scene.add(astronaut);

// Stars
const starGeometry = new THREE.BufferGeometry();
const starPositions = [];

for (let i = 0; i < 500; i++) {
    starPositions.push(
        (Math.random() - 0.5) * 100,
        Math.random() * 50,
        (Math.random() - 0.5) * 100
    );
}

starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starPositions, 3)
);

const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 })
);

scene.add(stars);
// ===============================
// MARS EXPLORATION ENVIRONMENT
// ===============================

// Mars ground
const marsGround = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
        color: 0x963f2d,
        roughness: 1
    })
);

marsGround.rotation.x = -Math.PI / 2;
marsGround.position.set(0, -0.95, -25);
scene.add(marsGround);

// Mars mountains
for (let i = 0; i < 15; i++) {
    const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(
            2 + Math.random() * 4,
            4 + Math.random() * 5,
            5
        ),
        new THREE.MeshStandardMaterial({
            color: 0x713226,
            roughness: 1
        })
    );

    mountain.position.set(
        (Math.random() - 0.5) * 70,
        1,
        -20 - Math.random() * 35
    );

    scene.add(mountain);
}

// Mars rocks
for (let i = 0; i < 35; i++) {
    const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(
            0.3 + Math.random() * 0.8
        ),
        new THREE.MeshStandardMaterial({
            color: 0x542b26,
            roughness: 1
        })
    );

    rock.position.set(
        (Math.random() - 0.5) * 40,
        -0.5,
        -Math.random() * 45
    );

    rock.rotation.set(Math.random(), Math.random(), Math.random());
    scene.add(rock);
}

// Research station
const station = new THREE.Mesh(
    new THREE.BoxGeometry(5, 3, 4),
    new THREE.MeshStandardMaterial({
        color: 0x9bbbd4,
        metalness: 0.6,
        roughness: 0.4
    })
);

station.position.set(0, 0.5, -12);
scene.add(station);

// Station blue window
const windowMesh = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 0.1),
    new THREE.MeshBasicMaterial({ color: 0x20baff })
);

windowMesh.position.set(0, 1, -9.94);
scene.add(windowMesh);

// Mars exploration objects
const discoveryObjects = [];

const discoveryColors = [0x00cfff, 0xffd34e, 0x70ffb0];

for (let i = 0; i < 3; i++) {
    const object = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.65, 1),
        new THREE.MeshStandardMaterial({
            color: discoveryColors[i],
            emissive: discoveryColors[i],
            emissiveIntensity: 0.35
        })
    );

    object.position.set(
        (i - 1) * 4,
        0.5,
        -6 - i * 5
    );

    scene.add(object);
    discoveryObjects.push(object);
}
// ===============================
// MOON ENVIRONMENT
// ===============================

const moonEnvironment = new THREE.Group();

// Moon surface
const moonGround = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
        color: 0x999999,
        roughness: 1
    })
);

moonGround.rotation.x = -Math.PI / 2;
moonGround.position.set(0, -0.94, -25);

moonEnvironment.add(moonGround);
// Moon craters
for (let i = 0; i < 12; i++) {
    const crater = new THREE.Mesh(
        new THREE.CircleGeometry(
            1 + Math.random() * 2,
            32
        ),
        new THREE.MeshStandardMaterial({
            color: 0x666666,
            roughness: 1
        })
    );

    crater.rotation.x = -Math.PI / 2;

    crater.position.set(
        (Math.random() - 0.5) * 60,
        -0.92,
        -Math.random() * 60
    );

    moonEnvironment.add(crater);
}
// Moon mountains
for (let i = 0; i < 10; i++) {
    const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(
            3 + Math.random() * 3,
            4 + Math.random() * 4,
            6
        ),
        new THREE.MeshStandardMaterial({
            color: 0x777777,
            roughness: 1
        })
    );

    mountain.position.set(
        (Math.random() - 0.5) * 60,
        1,
        -20 - Math.random() * 35
    );

    moonEnvironment.add(mountain);
}
// Lunar research station
const moonStation = new THREE.Mesh(
    new THREE.BoxGeometry(5, 3, 4),
    new THREE.MeshStandardMaterial({
        color: 0xc5d5e5,
        metalness: 0.7,
        roughness: 0.3
    })
);

moonStation.position.set(0, 0.5, -12);
moonEnvironment.add(moonStation);

// Blue station window
const moonWindow = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1, 0.1),
    new THREE.MeshBasicMaterial({
        color: 0x20baff
    })
);

moonWindow.position.set(0, 1, -9.94);
moonEnvironment.add(moonWindow);
// Moon discovery objects
const moonDiscoveries = [];

const moonColors = [0x00cfff, 0xffd34e, 0x70ffb0];

for (let i = 0; i < 3; i++) {
    const object = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.65, 1),
        new THREE.MeshStandardMaterial({
            color: moonColors[i],
            emissive: moonColors[i],
            emissiveIntensity: 0.4
        })
    );

    object.position.set(
        (i - 1) * 4,
        0.5,
        -6 - i * 5
    );

    moonEnvironment.add(object);
    moonDiscoveries.push(object);
}
// Hide Moon until its mission starts
moonEnvironment.visible = false;
scene.add(moonEnvironment);
// Animation
function animate() {
    updateExploration();
    requestAnimationFrame(animate);

    astronaut.rotation.y += 0.005;
    astronaut.position.y = Math.sin(Date.now() * 0.002) * 0.08;

    renderer.render(scene, camera);
}

animate();

// Responsive screen
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const lobbyScreen = document.getElementById("lobby");
const missionScreen = document.getElementById("mission-screen");
const startButton =
    document.getElementById("start-btn");
const moonSelectButton = document.getElementById("moon-mission-select-btn");

moonSelectButton.addEventListener("click", () => {
    lobbyScreen.style.display = "none";
    missionScreen.style.display = "none";
    document.getElementById("moon-mission-screen").style.display = "flex";

    console.log("Moon button clicked!");
});
document.getElementById("station-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";

    document.getElementById("station-mission-screen").style.display = "flex";
});
document.getElementById("solar-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";

    document.getElementById("solar-mission-screen").style.display = "flex";
});
document.getElementById("water-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";

    document.getElementById("water-mission-screen").style.display = "flex";
});
document.getElementById("power-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";

    document.getElementById("power-mission-screen").style.display = "flex";
});
document.getElementById("energy-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";

    document.getElementById("energy-mission-screen").style.display = "flex";
});
document.getElementById("oxygen-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";
    document.getElementById("oxygen-mission-screen").style.display = "flex";
});
document.getElementById("life-support-select-btn").addEventListener("click", () => {
    document.getElementById("lobby").style.display = "none";
    document.getElementById("life-support-mission-screen").style.display = "flex";
});


startButton.addEventListener("click", () => {
    lobbyScreen.style.display = "none";
    missionScreen.style.display = "flex";
});


const quizScreen = document.getElementById("quiz-screen");

const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        fact: "Mars looks red because of iron oxide (rust) on its surface."
    },
    {
        question: "What is the largest planet in our Solar System?",
        answers: ["Earth", "Mars", "Jupiter", "Mercury"],
        correct: 2,
        fact: "Jupiter is the largest planet in our Solar System."
    },
    {
        question: "What gas do humans need to breathe?",
        answers: ["Oxygen", "Carbon dioxide", "Helium", "Hydrogen"],
        correct: 0,
        fact: "Humans need oxygen for cellular respiration."
    },
    {
        question: "Which planet is famous for its rings?",
        answers: ["Mercury", "Earth", "Saturn", "Mars"],
        correct: 2,
        fact: "Saturn has a spectacular system of icy rings."
    },
    {
        question: "What is the name of our galaxy?",
        answers: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        correct: 1,
        fact: "Our Solar System is located in the Milky Way galaxy."
    }
];
// ===============================
// MOON MISSION QUIZ
// ===============================

const moonQuestions = [
    {
        question: "What is Earth's natural satellite?",
        answers: ["Mars", "The Moon", "Venus", "The Sun"],
        correct: 1,
        fact: "The Moon is Earth's only natural satellite."
    },
    {
        question: "Why does the Moon shine?",
        answers: [
            "It produces its own light",
            "It reflects sunlight",
            "It contains fire",
            "It produces electricity"
        ],
        correct: 1,
        fact: "The Moon reflects sunlight toward Earth."
    },
    {
        question: "What causes craters on the Moon?",
        answers: [
            "Rainfall",
            "Strong winds",
            "Impact of space rocks",
            "Ocean waves"
        ],
        correct: 2,
        fact: "Many lunar craters formed when asteroids and other space rocks hit the Moon."
    },
    {
        question: "What force keeps the Moon in orbit around Earth?",
        answers: [
            "Gravity",
            "Friction",
            "Magnetism",
            "Electricity"
        ],
        correct: 0,
        fact: "Gravity keeps the Moon in orbit around Earth."
    },
    {
        question: "Does the Moon have an atmosphere like Earth?",
        answers: [
            "Yes, a thick atmosphere",
            "No, it has almost no atmosphere",
            "It has an oxygen-rich atmosphere",
            "It has an atmosphere full of clouds"
        ],
        correct: 1,
        fact: "The Moon has an extremely thin exosphere."
    }
];
const stationQuestions = [
    {
        question: "What is the main purpose of a space station?",
        answers: [
            "To study space and conduct research",
            "To produce sunlight",
            "To travel underwater",
            "To control Earth's weather"
        ],
        correct: 0,
        fact: "Space stations allow astronauts to live and conduct scientific research in space."
    },
    {
        question: "What helps astronauts communicate with Earth?",
        answers: [
            "Radio communication systems",
            "Mirrors only",
            "Water pipes",
            "Solar panels only"
        ],
        correct: 0,
        fact: "Radio systems help astronauts communicate with mission control."
    },
    {
        question: "What should astronauts do when an alarm sounds?",
        answers: [
            "Ignore it",
            "Follow safety procedures",
            "Switch off every system",
            "Leave their equipment behind"
        ],
        correct: 1,
        fact: "Astronauts follow established safety procedures when an alarm sounds."
    },
    {
        question: "What provides electricity to many space stations?",
        answers: [
            "Solar panels",
            "Coal",
            "Petrol engines",
            "Wind turbines"
        ],
        correct: 0,
        fact: "Solar panels convert sunlight into electrical energy."
    },
    {
        question: "Who monitors a space station from Earth?",
        answers: [
            "Mission control",
            "Air traffic passengers",
            "Weather reporters",
            "Tour guides"
        ],
        correct: 0,
        fact: "Mission control teams monitor the station and support astronauts."
    }
];
const solarQuestions = [
    {
        question: "What is a solar storm?",
        answers: [
            "A disturbance caused by activity on the Sun",
            "A storm caused by ocean waves",
            "A storm made of space dust only",
            "A change in Earth's seasons"
        ],
        correct: 0,
        fact: "Solar storms are caused by activity on the Sun."
    },
    {
        question: "What is the Sun mainly made of?",
        answers: [
            "Hydrogen and helium",
            "Oxygen and nitrogen",
            "Iron and copper",
            "Carbon and water"
        ],
        correct: 0,
        fact: "The Sun is mainly made of hydrogen and helium."
    },
    {
        question: "What is a solar flare?",
        answers: [
            "A sudden release of energy from the Sun",
            "A type of lunar crater",
            "A cloud near Earth",
            "A falling asteroid"
        ],
        correct: 0,
        fact: "Solar flares are sudden, intense releases of energy from the Sun."
    },
    {
        question: "Which technology can be affected by strong solar activity?",
        answers: [
            "Satellites",
            "Paper books",
            "Wooden furniture",
            "Plastic toys"
        ],
        correct: 0,
        fact: "Strong solar activity can disturb satellites and radio communication."
    },
    {
        question: "What creates the aurora?",
        answers: [
            "Particles from space interacting with Earth's atmosphere",
            "Moonlight reflecting from oceans",
            "Clouds producing electricity",
            "Volcanoes releasing smoke"
        ],
        correct: 0,
        fact: "Auroras form when charged particles interact with gases in Earth's upper atmosphere."
    }
];
const waterQuestions = [
    {
        question: "Why is water important for astronauts?",
        answers: [
            "For drinking and daily needs",
            "For creating sunlight",
            "For making gravity",
            "For producing stars"
        ],
        correct: 0,
        fact: "Water is essential for drinking, hygiene and other daily needs."
    },
    {
        question: "How do astronauts save water on a space station?",
        answers: [
            "By recycling used water",
            "By throwing water away",
            "By using seawater directly",
            "By leaving taps running"
        ],
        correct: 0,
        fact: "Space stations use water-recycling systems to recover usable water."
    },
    {
        question: "Which is a good way to conserve water?",
        answers: [
            "Avoid unnecessary water use",
            "Keep taps running",
            "Waste clean water",
            "Use more water than needed"
        ],
        correct: 0,
        fact: "Using only the water needed helps conserve limited supplies."
    },
    {
        question: "Where is most of Earth's water found?",
        answers: [
            "Oceans",
            "Rivers",
            "Lakes",
            "Clouds"
        ],
        correct: 0,
        fact: "Most of Earth's water is found in the oceans."
    },
    {
        question: "What should astronauts do if water supplies become limited?",
        answers: [
            "Monitor supplies and conserve water",
            "Ignore the shortage",
            "Use all the stored water",
            "Stop checking water levels"
        ],
        correct: 0,
        fact: "Careful monitoring and conservation help manage limited water supplies."
    }
];
const powerQuestions = [
    {
        question: "What is the main source of electrical power on many space stations?",
        answers: ["Solar panels", "Coal", "Petrol", "Wood"],
        correct: 0,
        fact: "Solar panels convert sunlight into electricity."
    },
    {
        question: "What is a backup power system used for?",
        answers: [
            "Providing power when the main system fails",
            "Making the station heavier",
            "Creating artificial sunlight",
            "Producing oxygen directly"
        ],
        correct: 0,
        fact: "Backup systems help keep essential equipment running."
    },
    {
        question: "Which device stores electrical energy?",
        answers: ["Battery", "Telescope", "Camera lens", "Antenna"],
        correct: 0,
        fact: "Batteries store electrical energy for later use."
    },
    {
        question: "Why is electricity important on a space station?",
        answers: [
            "It runs lights and scientific equipment",
            "It creates planets",
            "It changes the Moon's orbit",
            "It makes stars brighter"
        ],
        correct: 0,
        fact: "Electricity powers important station systems and equipment."
    },
    {
        question: "What should astronauts do when a power alert appears?",
        answers: [
            "Follow approved safety procedures",
            "Ignore the alert",
            "Switch off every system randomly",
            "Continue without checking"
        ],
        correct: 0,
        fact: "Astronauts follow mission control guidance and established safety procedures."
    }
];
const energyQuestions = [
    {
        question: "What does energy conservation mean?",
        answers: [
            "Using energy wisely and avoiding waste",
            "Using electricity continuously",
            "Producing unlimited energy",
            "Switching on every device"
        ],
        correct: 0,
        fact: "Energy conservation means reducing unnecessary energy use."
    },
    {
        question: "Which is a renewable energy source?",
        answers: ["Solar energy", "Coal", "Petrol", "Natural gas"],
        correct: 0,
        fact: "Solar energy comes from sunlight and is renewable."
    },
    {
        question: "Which device converts sunlight into electricity?",
        answers: ["Solar panel", "Battery", "Telescope", "Thermometer"],
        correct: 0,
        fact: "Solar panels convert sunlight into electrical energy."
    },
    {
        question: "Why should astronauts conserve energy?",
        answers: [
            "To manage limited power resources",
            "To make the station heavier",
            "To stop scientific research",
            "To block sunlight"
        ],
        correct: 0,
        fact: "Careful energy use helps important station systems operate efficiently."
    },
    {
        question: "Which action saves electricity?",
        answers: [
            "Turning off unnecessary lights",
            "Keeping all lights on",
            "Running unused equipment",
            "Leaving devices powered unnecessarily"
        ],
        correct: 0,
        fact: "Switching off unused equipment helps save electricity."
    }
];
const oxygenQuestions = [
    {
        question: "Why do astronauts need oxygen?",
        answers: [
            "For breathing",
            "For producing sunlight",
            "For creating gravity",
            "For making planets"
        ],
        correct: 0,
        fact: "Oxygen is essential for human respiration."
    },
    {
        question: "Which gas do humans breathe in to support respiration?",
        answers: ["Oxygen", "Carbon dioxide", "Helium", "Hydrogen"],
        correct: 0,
        fact: "Humans use oxygen during cellular respiration."
    },
    {
        question: "What is the purpose of an oxygen monitor?",
        answers: [
            "To measure oxygen levels",
            "To measure distance",
            "To take photographs",
            "To detect planets"
        ],
        correct: 0,
        fact: "Oxygen monitors help track oxygen levels in the station."
    },
    {
        question: "Which gas do plants release during photosynthesis?",
        answers: ["Oxygen", "Nitrogen", "Helium", "Methane"],
        correct: 0,
        fact: "Plants release oxygen during photosynthesis."
    },
    {
        question: "What should astronauts do if an oxygen alarm sounds?",
        answers: [
            "Follow emergency procedures and mission control guidance",
            "Ignore the alarm",
            "Disable all monitoring systems",
            "Continue without checking"
        ],
        correct: 0,
        fact: "Astronauts follow trained safety procedures and mission control instructions."
    }
];
const lifeSupportQuestions = [
    {
        question: "What is a life support system?",
        answers: [
            "A system that maintains conditions needed for life",
            "A system that controls Earth's weather",
            "A system that creates stars",
            "A system that moves planets"
        ],
        correct: 0,
        fact: "Life support systems help maintain essential conditions for astronauts."
    },
    {
        question: "Which resource is essential for breathing?",
        answers: ["Oxygen", "Sand", "Iron", "Plastic"],
        correct: 0,
        fact: "Oxygen is essential for human respiration."
    },
    {
        question: "Why is temperature control important?",
        answers: [
            "To keep the station comfortable and safe",
            "To change the station's orbit",
            "To create artificial gravity",
            "To produce sunlight"
        ],
        correct: 0,
        fact: "Temperature control helps maintain suitable living conditions."
    },
    {
        question: "Which system helps provide clean water?",
        answers: [
            "Water recycling system",
            "Navigation system",
            "Communication antenna",
            "Telescope"
        ],
        correct: 0,
        fact: "Water recycling systems recover water for reuse."
    },
    {
        question: "What is the main goal of life support systems?",
        answers: [
            "To support astronauts' health and survival",
            "To make the station travel faster",
            "To discover new planets automatically",
            "To increase the station's size"
        ],
        correct: 0,
        fact: "Life support systems maintain essential conditions for the crew."
    }
];
let currentMission = "mars";
let currentQuestion = 0;
let xp = 0;
let answered = false;
let completedMissions =
    JSON.parse(localStorage.getItem("completedMissions")) || [];

let totalXP = Number(localStorage.getItem("totalXP")) || 0;

beginButton.addEventListener("click", () => {
    currentMission = "mars";
    missionScreen.style.display = "none";
    quizScreen.style.display = "flex";
    showQuestion();
});
function getActiveQuestions() {
    if (currentMission === "moon") return moonQuestions;
    if (currentMission === "station") return stationQuestions;
    if (currentMission === "solar") return solarQuestions;
    if (currentMission === "water") return waterQuestions;
    if (currentMission === "power") return powerQuestions;
    if (currentMission === "energy") return energyQuestions;
    if (currentMission === "oxygen") return oxygenQuestions;
    if (currentMission === "life-support") return lifeSupportQuestions;

    return questions;
}
function updateProgress() {
    document.getElementById("progress-display").textContent =
        "MISSIONS COMPLETED: " + completedMissions.length + " / 9";
    const progressPercent = (completedMissions.length / 9) * 100;

    document.getElementById("progress-bar").style.width =
        progressPercent + "%";

    document.getElementById("total-xp-display").textContent =
        "TOTAL XP: " + totalXP;
}

function updateMissionBadges() {
    const missionButtons = [
        ["start-btn", "MISSION 01 — MARS"],
        ["moon-mission-select-btn", "MISSION 02 — MOON"],
        ["station-select-btn", "MISSION 03 — STATION EMERGENCY"],
        ["solar-select-btn", "MISSION 04 — SOLAR STORM"],
        ["water-select-btn", "MISSION 05 — WATER SHORTAGE"],
        ["power-select-btn", "MISSION 06 — POWER FAILURE"],
        ["energy-select-btn", "MISSION 07 — ENERGY CONSERVATION"],
        ["oxygen-select-btn", "MISSION 08 — OXYGEN EMERGENCY"],
        ["life-support-select-btn", "MISSION 09 — LIFE SUPPORT PRIORITIES"]
    ];

    missionButtons.forEach(([id, name], index) => {
        const button = document.getElementById(id);
        if (button) {
            button.classList.toggle(
                "completed-mission",
                completedMissions.includes([
                    "mars", "moon", "station", "solar", "water",
                    "power", "energy", "oxygen", "life-support"
                ][index])
            );
            button.textContent =
                completedMissions.includes([
                    "mars", "moon", "station", "solar", "water",
                    "power", "energy", "oxygen", "life-support"
                ][index])
                    ? "✓ " + name
                    : name;
        }
    });
}
updateProgress();
updateMissionBadges();
function showQuestion() {
    answered = false;

    const activeQuestions = getActiveQuestions();

    const q = activeQuestions[currentQuestion];

    document.getElementById("question-number").textContent =
        `QUESTION ${currentQuestion + 1} / ${activeQuestions.length}`;

    document.getElementById("question").textContent = q.question;

    document.getElementById("feedback").textContent = "";

    document.getElementById("next-btn").disabled = true;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answersDiv.appendChild(button);
    });
}

function checkAnswer(index, selectedButton) {
    if (answered) return;

    answered = true;

    const activeQuestions = getActiveQuestions();

    const q = activeQuestions[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === q.correct) {
            button.classList.add("correct");
        }
    });

    if (index === q.correct) {
        xp += 100;

        document.getElementById("feedback").textContent =
            "CORRECT! +100 XP | " + q.fact;
    } else {
        selectedButton.classList.add("wrong");

        document.getElementById("feedback").textContent =
            "NOT QUITE! " + q.fact;
    }

    document.getElementById("score").textContent =
        "ASTRONAUT XP: " + xp;

    document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
    const activeQuestions = getActiveQuestions();

    currentQuestion++;

    if (currentQuestion < activeQuestions.length) {
        showQuestion();
    } else {
        if (!completedMissions.includes(currentMission)) {
            completedMissions.push(currentMission);
            totalXP += xp;
            localStorage.setItem("totalXP", totalXP);

            localStorage.setItem(
                "completedMissions",
                JSON.stringify(completedMissions)
            );
        }
        updateProgress();
        const missionNames = {
            mars: "Mars",
            moon: "Moon",
            station: "Station Emergency",
            solar: "Solar Storm",
            water: "Water Shortage",
            power: "Power Failure",
            energy: "Energy Conservation",
            oxygen: "Oxygen Emergency",
            "life-support": "Life Support Priorities"
        };

        const missionName = missionNames[currentMission];
        const canExplore = currentMission === "mars" || currentMission === "moon";

        document.querySelector(".quiz-card").innerHTML = `
    <h2>MISSION COMPLETED!</h2>
    <h1>${xp} XP</h1>
    <p>You completed your ${missionName} knowledge training!</p>
    <button id="explore-btn">
        ${canExplore ? "EXPLORE " + missionName.toUpperCase() : "RETURN TO MISSIONS"}
    </button>
`;

        document.getElementById("explore-btn").addEventListener("click", () => {
            quizScreen.style.display = "none";

            if (!canExplore) {
                document.getElementById("lobby").style.display = "flex";
                return;
            }

            document.getElementById("exploration-info").style.display = "block";

            if (currentMission === "moon") {
                moonEnvironment.visible = true;
                document.getElementById("mars-info").style.display = "none";
                document.getElementById("moon-info").style.display = "block";

                astronaut.position.set(0, 0, 0);
                camera.position.set(0, 2, 8);
                camera.lookAt(0, 0, -5);
            } else {
                document.getElementById("mars-info").style.display = "block";
                document.getElementById("moon-info").style.display = "none";
            }

            explorationActive = true;
        });
    }
});
// MARS EXPLORATION CONTROLS

let discoveries = 0;
let moonDiscoveriesFound = 0;

const keys = {};

window.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});

function updateExploration() {
    if (!explorationActive) return;

    const speed = 0.12;

    if (keys["w"] || keys["arrowup"]) astronaut.position.z -= speed;
    if (keys["s"] || keys["arrowdown"]) astronaut.position.z += speed;
    if (keys["a"] || keys["arrowleft"]) astronaut.position.x -= speed;
    if (keys["d"] || keys["arrowright"]) astronaut.position.x += speed;

    astronaut.position.x = THREE.MathUtils.clamp(
        astronaut.position.x, -15, 15
    );

    astronaut.position.z = THREE.MathUtils.clamp(
        astronaut.position.z, -35, 8
    );

    camera.position.set(
        astronaut.position.x,
        astronaut.position.y + 2,
        astronaut.position.z + 8
    );

    camera.lookAt(
        astronaut.position.x,
        astronaut.position.y,
        astronaut.position.z - 5
    );

    discoveryObjects.forEach((object) => {
        if (!object.visible) return;

        const distance = astronaut.position.distanceTo(
            object.position
        );

        if (distance < 1.5) {
            object.visible = false;
            discoveries++;

            document.getElementById("discovery-count").textContent =
                discoveries;

            if (discoveries === 3) {
                alert("Amazing! You discovered all 3 objects!");
            }
        }
    });
}
// MOON DISCOVERY COLLECTION
// MOON DISCOVERY COLLECTION
if (moonEnvironment.visible) {
    moonDiscoveries.forEach((object) => {
        if (!object.visible) return;

        const distance = astronaut.position.distanceTo(
            object.position
        );

        if (distance < 1.5) {
            object.visible = false;
            moonDiscoveriesFound++;

            document.getElementById("moon-discovery-count").textContent =
                moonDiscoveriesFound;

            console.log("Moon discoveries:", moonDiscoveriesFound);

            if (moonDiscoveriesFound === 3) {
                alert("Amazing! You discovered all 3 Moon objects!");
            }
        }
    });
}
console.log("Begin button found:", beginButton);
beginButton.addEventListener("click", () => {
    document.querySelector(".mission-screen").style.display = "none";
    document.querySelector(".quiz-screen").style.display = "flex";
});
const moonBeginButton = document.getElementById("moon-begin-btn");
moonBeginButton.addEventListener("click", () => {
    document.getElementById("moon-mission-screen").style.display = "none";

    currentMission = "moon";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("station-begin-btn").addEventListener("click", () => {
    document.getElementById("station-mission-screen").style.display = "none";

    currentMission = "station";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("solar-begin-btn").addEventListener("click", () => {
    document.getElementById("solar-mission-screen").style.display = "none";

    currentMission = "solar";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("water-begin-btn").addEventListener("click", () => {
    document.getElementById("water-mission-screen").style.display = "none";

    currentMission = "water";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("power-begin-btn").addEventListener("click", () => {
    document.getElementById("power-mission-screen").style.display = "none";

    currentMission = "power";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("energy-begin-btn").addEventListener("click", () => {
    document.getElementById("energy-mission-screen").style.display = "none";

    currentMission = "energy";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("oxygen-begin-btn").addEventListener("click", () => {
    document.getElementById("oxygen-mission-screen").style.display = "none";

    currentMission = "oxygen";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
document.getElementById("life-support-begin-btn").addEventListener("click", () => {
    document.getElementById("life-support-mission-screen").style.display = "none";

    currentMission = "life-support";
    currentQuestion = 0;
    xp = 0;
    answered = false;

    quizScreen.style.display = "flex";
    showQuestion();
});
let audioContext;
let musicPlaying = false;
let musicTimer;
let currentMusic = 0;
function playSpaceMusic() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    audioContext.resume();
    musicPlaying = true;

    const deepSpaceNotes = [65.41, 98, 130.81, 82.41, 110, 73.42];
    let index = 0;

    musicTimer = setInterval(() => {
        if (!musicPlaying) return;

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sine";
        const activeNotes = currentMusic === 0 ? notes : deepSpaceNotes;
        oscillator.frequency.value = activeNotes[index % activeNotes.length];

        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.10, audioContext.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 2);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 2);

        index++;
    }, 1500);
}

function stopSpaceMusic() {
    musicPlaying = false;
    clearInterval(musicTimer);
}
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (!musicPlaying) {
        playSpaceMusic();
        musicBtn.textContent = "🎵 MUSIC: ON";
    } else {
        stopSpaceMusic();
        musicBtn.textContent = "🎵 MUSIC: OFF";
    }
});
document.getElementById("music-next-btn").addEventListener("click", () => {
    currentMusic = currentMusic === 0 ? 1 : 0;

    if (musicPlaying) {
        stopSpaceMusic();
        playSpaceMusic();
    }

    document.getElementById("music-next-btn").textContent =
        currentMusic === 0 ? "🔄 CHANGE MUSIC" : "🌌 DEEP SPACE MODE";
});