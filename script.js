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

let currentQuestion = 0;
let xp = 0;
let answered = false;

beginButton.addEventListener("click", () => {
    missionScreen.style.display = "none";
    quizScreen.style.display = "flex";
    showQuestion();
});

function showQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `QUESTION ${currentQuestion + 1} / ${questions.length}`;

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

    const q = questions[currentQuestion];
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
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.querySelector(".quiz-card").innerHTML = `
    <h2>MISSION COMPLETED!</h2>
    <h1>${xp} XP</h1>
    <p>You completed your Mars knowledge training!</p>
    <button id="explore-mars-btn">EXPLORE MARS</button>
`;

        document.getElementById("explore-mars-btn").addEventListener("click", () => {
            quizScreen.style.display = "none";
            document.getElementById("exploration-info").style.display = "block";
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

    moonEnvironment.visible = true;
    document.getElementById("exploration-info").style.display = "block";
    document.getElementById("mars-info").style.display = "none";
    document.getElementById("moon-info").style.display = "block";

    explorationActive = true;

    astronaut.position.set(0, 0, 0);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, -5);

    console.log("Moon Mission Started!");
});