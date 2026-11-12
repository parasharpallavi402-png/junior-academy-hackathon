
// ============================================
// JUNIOR ASTRONAUT MISSION TRAINER
// 9 MISSIONS | 180 QUESTIONS | 16/20 TO UNLOCK
// ============================================

const missions = [
    {
        name: "Space Academy Training",
        icon: "🎓",
        topic: "Astronaut basics and space knowledge",
        description: "Learn what it takes to become an astronaut.",
        sim: ["Learn about astronaut training.", "Understand space suits.", "Explore basic space science."],
        questions: [
            ["What is an astronaut?", "A space traveler~A deep-sea diver~A mountain climber~A pilot only", 0, "Astronauts travel into space."],
            ["Which planet do we live on?", "Mars~Earth~Venus~Jupiter", 1, "Earth is our home planet."],
            ["What is the nearest star to Earth?", "Sirius~Polaris~The Sun~Vega", 2, "The Sun is our nearest star."],
            ["What do astronauts wear outside their spacecraft?", "Raincoat~Space suit~School uniform~Swimsuit", 1, "Space suits protect astronauts."],
            ["What is the name of our galaxy?", "Andromeda~Milky Way~Whirlpool~Sombrero", 1, "Our Solar System is inside the Milky Way."],
            ["What does NASA stand for?", "National Aeronautics and Space Administration~National Astronomy Space Association~North American Space Agency~National Air Safety Academy", 0, "NASA is the US space agency."],
            ["What is a spacecraft?", "A space vehicle~A weather station~A submarine~A telescope", 0, "Spacecraft travel beyond Earth's atmosphere."],
            ["What do astronauts breathe inside a spacecraft?", "Only nitrogen~Oxygen-containing air~Carbon dioxide~Hydrogen", 1, "Spacecraft provide breathable air."],
            ["What is a spacesuit mainly designed to do?", "Look fashionable~Protect astronauts in space~Make astronauts fly~Increase gravity", 1, "It provides pressure, oxygen and temperature protection."],
            ["What is the force that pulls objects toward Earth?", "Magnetism~Gravity~Friction~Electricity", 1, "Gravity pulls objects toward Earth."],
            ["What is the control room of a space mission called?", "Mission control~Engine room~Classroom~Launch garden", 0, "Mission control monitors space missions."],
            ["What is a telescope used for?", "Cooking~Observing distant objects~Measuring weight~Flying", 1, "Telescopes help us observe space."],
            ["Which object orbits Earth naturally?", "The Moon~Mars~The Sun~Venus", 0, "The Moon is Earth's natural satellite."],
            ["What is a satellite?", "An object that orbits another object~A type of cloud~A mountain~A rocket engine", 0, "Satellites orbit planets or other bodies."],
            ["Why do astronauts train before spaceflight?", "To prepare for space conditions~To learn swimming only~To become artists~To avoid science", 0, "Training prepares them for their mission."],
            ["What is the atmosphere?", "A layer of gases around a planet~A type of rocket~A star~A moon crater", 0, "Earth's atmosphere surrounds our planet."],
            ["Which agency operates the International Space Station with partners?", "NASA~WHO~UNICEF~FIFA", 0, "NASA is one of the ISS partner agencies."],
            ["What is a mission in space exploration?", "A planned space task or journey~A school holiday~A type of planet~A weather report", 0, "A mission has specific objectives."],
            ["What helps astronauts communicate with Earth?", "Radio systems~Flashlights~Mirrors only~Magnets only", 0, "Radio communication connects spacecraft and mission control."],
            ["What is the main purpose of space exploration?", "To learn about space and Earth~To stop all science~To create clouds~To change Earth's orbit", 0, "Exploration helps us understand the universe."]
        ]
    },
    {
        name: "Rocket Launch",
        icon: "🚀",
        topic: "Rocket science and propulsion",
        description: "Discover how rockets leave Earth.",
        sim: ["Explore rocket parts.", "Learn about thrust.", "Understand launch preparation."],
        questions: [
            ["What force helps a rocket move upward?", "Thrust~Friction~Magnetism~Buoyancy", 0, "Rocket engines produce thrust."],
            ["What is the fuel used for in a rocket?", "To produce energy for propulsion~To cool the stars~To make sunlight~To create gravity", 0, "Rocket propellants provide energy for propulsion."],
            ["What is the nose cone of a rocket?", "The pointed top section~The landing legs~The fuel tank~The launch pad", 0, "The nose cone is at the front of a rocket."],
            ["What does a launch pad do?", "Supports a rocket before launch~Measures astronaut height~Collects rain~Orbits Earth", 0, "Rockets stand on launch pads before liftoff."],
            ["Which law explains rocket propulsion?", "Newton's third law~Ohm's law~Law of reflection~Archimedes' principle", 0, "Action and reaction explain rocket thrust."],
            ["What is a payload?", "The cargo carried by a rocket~The rocket's paint~The launch countdown~The exhaust cloud", 0, "Payloads may include satellites or spacecraft."],
            ["What is a countdown used for?", "Coordinating launch preparations~Measuring planet size~Finding stars~Cooling engines", 0, "A countdown coordinates the launch sequence."],
            ["What happens when rocket exhaust moves downward?", "The rocket is pushed upward~The rocket stops~Gravity disappears~The rocket becomes a satellite", 0, "The action-reaction principle produces upward thrust."],
            ["What is a multistage rocket?", "A rocket with sections discarded during flight~A rocket with many windows~A rocket without engines~A rocket made of paper", 0, "Stages are separated when their fuel is used."],
            ["What does an engine do in a rocket?", "Produces thrust~Measures temperature only~Takes photographs~Stores food", 0, "Rocket engines generate thrust."],
            ["Why are rockets streamlined?", "To reduce air resistance~To increase their weight~To stop moving~To create clouds", 0, "Streamlining reduces drag in the atmosphere."],
            ["What is a satellite launch?", "Sending a satellite into orbit~Landing on the Moon~Building a telescope~Measuring rainfall", 0, "A launch places a satellite into space."],
            ["What is orbit?", "A path around another object~A rocket's fuel~A type of astronaut suit~A star explosion", 0, "An orbit is a curved path around a body."],
            ["What is the purpose of rocket fins?", "To help stabilize some rockets in the atmosphere~To generate sunlight~To store oxygen~To make sound", 0, "Fins can help stabilize atmospheric flight."],
            ["What does liftoff mean?", "The moment a rocket leaves the launch pad~The rocket landing~Opening a spacecraft door~Turning off a satellite", 0, "Liftoff marks the start of powered flight."],
            ["What is liquid propellant?", "A liquid used to power a rocket engine~A type of astronaut food~A space map~A telescope lens", 0, "Some rockets use liquid propellants."],
            ["Why are rocket stages separated?", "To discard empty sections and reduce mass~To add windows~To stop gravity~To make the rocket heavier", 0, "Discarding empty stages reduces mass."],
            ["What is the launch window?", "A suitable period for launching~A spacecraft window~A viewing screen~A type of orbit", 0, "Launch timing depends on mission conditions."],
            ["What is escape velocity?", "The speed needed to escape a body's gravity without further propulsion~The speed of sound~The speed of a satellite's camera~The speed of light", 0, "Escape velocity depends on the body's gravity."],
            ["What is the main role of a rocket's guidance system?", "Help control its intended flight path~Prepare astronaut meals~Measure ocean depth~Make stars brighter", 0, "Guidance systems help direct rocket flight."]
        ]
    },
    {
        name: "Journey to the Moon",
        icon: "🌕",
        topic: "Moon, gravity and lunar exploration",
        description: "Explore Earth's natural satellite.",
        sim: ["Discover lunar craters.", "Learn about Moon phases.", "Explore lunar exploration."],
        questions: [
            ["What is Earth's natural satellite?", "The Moon~Mars~The Sun~Venus", 0, "The Moon orbits Earth."],
            ["Does the Moon produce its own visible light?", "No, it reflects sunlight~Yes, it is a star~It creates electricity~It burns like the Sun", 0, "Moonlight is reflected sunlight."],
            ["What causes the Moon's phases?", "Changing views of its sunlit half~Earth's shadow every night~Clouds~Moon explosions", 0, "We see different portions of the illuminated Moon."],
            ["What was the first crewed Moon landing mission?", "Apollo 11~Apollo 13~Gemini 4~Voyager 1", 0, "Apollo 11 landed astronauts on the Moon in 1969."],
            ["Who was the first person to walk on the Moon?", "Neil Armstrong~Yuri Gagarin~John Glenn~Buzz Aldrin", 0, "Neil Armstrong first stepped onto the lunar surface."],
            ["What is a lunar crater?", "A bowl-shaped depression~A lunar ocean~A type of rocket~A space station", 0, "Many craters formed from impacts."],
            ["Why do footprints last a long time on the Moon?", "There is almost no wind or rain~The Moon is made of ice~Gravity is absent~The ground is liquid", 0, "The Moon has no weather like Earth's wind and rain."],
            ["What is lunar dust commonly called?", "Regolith~Magma~Fog~Ozone", 0, "Regolith is loose material covering the lunar surface."],
            ["How long does the Moon take to orbit Earth approximately?", "About 27.3 days~One day~One year~Ten years", 0, "Its sidereal orbital period is about 27.3 days."],
            ["What causes ocean tides mainly?", "The Moon's gravity~Clouds~Volcanoes~Earthquakes", 0, "The Moon's gravitational pull is a major cause of tides."],
            ["What is a lunar eclipse?", "Earth's shadow falls on the Moon~The Moon covers the Sun~The Moon disappears forever~The Sun stops shining", 0, "A lunar eclipse occurs when Earth blocks sunlight from the Moon."],
            ["What is a solar eclipse?", "The Moon blocks the Sun from our view~Earth blocks the Moon~Mars covers Earth~The Sun turns off", 0, "A solar eclipse occurs when the Moon passes between Earth and Sun."],
            ["Is gravity on the Moon weaker than on Earth?", "Yes~No, it is stronger~It is exactly the same~There is no gravity at all", 0, "Lunar surface gravity is about one-sixth of Earth's."],
            ["What is a lunar rover?", "A vehicle designed to explore the Moon~A weather balloon~A submarine~A telescope on Earth", 0, "Rovers help explore lunar terrain."],
            ["What are the dark flat areas on the Moon called?", "Maria~Oceans~Forests~Deserts", 0, "Maria are large basaltic plains."],
            ["Why do astronauts need spacesuits on the Moon?", "To provide oxygen and protection~To breathe water~To create sunlight~To increase gravity", 0, "The Moon has no breathable atmosphere."],
            ["What is the Moon's surface temperature like?", "It varies greatly between day and night~It is always freezing~It is always boiling~It never changes", 0, "The Moon experiences extreme temperature changes."],
            ["What is the far side of the Moon?", "The side that generally faces away from Earth~The side with no craters~The side made of water~The side closest to the Sun", 0, "The Moon rotates synchronously with its orbit."],
            ["What is the name of NASA's lunar exploration program?", "Artemis~Apollo 1 only~Skylab~Hubble", 0, "Artemis aims to return humans to the Moon."],
            ["What can Moon rocks help scientists understand?", "The Moon's history and formation~Today's weather on Earth~Ocean tides only~How plants grow", 0, "Lunar samples reveal information about the Moon's history."]
        ]
    },
    {
        name: "Mars Exploration",
        icon: "🔴",
        topic: "Mars, rovers and planetary science",
        description: "Become a Martian explorer.",
        sim: ["Study the Red Planet.", "Discover Mars rovers.", "Explore the search for past water."],
        questions: [
            ["Which planet is known as the Red Planet?", "Mars~Venus~Saturn~Neptune", 0, "Iron-rich dust gives Mars its reddish appearance."],
            ["What is the largest volcano on Mars called?", "Olympus Mons~Mount Everest~Mauna Loa~Vesuvius", 0, "Olympus Mons is a giant Martian volcano."],
            ["What is the name of NASA's rover that landed in 2021?", "Perseverance~Curiosity~Spirit~Opportunity", 0, "Perseverance landed in Jezero Crater in 2021."],
            ["What is Curiosity?", "A Mars rover~A Moon telescope~A space station~A rocket engine", 0, "Curiosity is a NASA Mars rover."],
            ["What is the atmosphere of Mars mostly made of?", "Carbon dioxide~Oxygen~Hydrogen~Helium", 0, "Mars has a thin atmosphere dominated by carbon dioxide."],
            ["Does Mars have two small moons?", "Yes, Phobos and Deimos~No moons~One large moon~Four rings", 0, "Mars has two small natural satellites."],
            ["What color is the Martian sky often described as during the day?", "Reddish or butterscotch~Bright green~Purple~Black only", 0, "Fine dust scatters light and affects the sky's color."],
            ["What is a rover designed to do?", "Travel across a planetary surface and study it~Orbit Earth only~Carry passengers to school~Create stars", 0, "Rovers explore surfaces and collect scientific data."],
            ["What is Jezero Crater known for?", "A landing site for Perseverance~The largest Earth ocean~A volcano on Venus~A Saturn ring", 0, "Scientists chose it partly because it once held a lake."],
            ["What is a major goal of Mars exploration?", "Understand whether Mars could have supported past life~Build Earth's oceans~Stop the Sun~Move Mars closer to Earth", 0, "Scientists study ancient environments and habitability."],
            ["Does Mars have seasons?", "Yes~No~Only summer~Only winter", 0, "Mars has seasons because its axis is tilted."],
            ["What is a dust storm on Mars?", "Wind lifting fine dust into the atmosphere~An ocean wave~A volcanic ocean~A snowfall of metal", 0, "Mars can experience large dust storms."],
            ["Which planet is larger?", "Earth~Mars~They are exactly equal~Mars is larger than Jupiter", 0, "Earth is larger than Mars."],
            ["What is the name of the helicopter that flew on Mars?", "Ingenuity~Dragonfly~Hubble~Voyager", 0, "Ingenuity demonstrated powered flight on Mars."],
            ["What is a Martian day called?", "Sol~Lunar day~Year~Orbit", 0, "A Martian solar day is called a sol."],
            ["What evidence suggests liquid water existed on ancient Mars?", "Ancient river channels and lake deposits~Modern forests~Large oceans today~Earth's clouds", 0, "Geological features indicate past flowing water."],
            ["How long is one Martian year approximately?", "687 Earth days~24 hours~30 Earth days~365 hours", 0, "Mars takes about 687 Earth days to orbit the Sun."],
            ["What is the main challenge for human travel to Mars?", "Distance, radiation and life-support needs~Too much oxygen~No sunlight anywhere~No gravity at all", 0, "Mars missions require extensive protection and supplies."],
            ["What is a parachute used for during some Mars landings?", "To slow a descending spacecraft~To increase its speed~To generate electricity only~To create oxygen", 0, "Parachutes help slow spacecraft in the atmosphere."],
            ["Which space agency launched India's Mars Orbiter Mission?", "ISRO~NASA~ESA~JAXA", 0, "ISRO launched Mangalyaan in 2013."]
        ]
    },
    {
        name: "International Space Station",
        icon: "🛰️",
        topic: "Life in space and microgravity",
        description: "Discover how humans live in orbit.",
        sim: ["Explore the space station.", "Learn about microgravity.", "Discover astronaut routines."],
        questions: [
            ["What does ISS stand for?", "International Space Station~Indian Solar Satellite~Interplanetary Science System~International Star School", 0, "ISS stands for International Space Station."],
            ["Where does the ISS orbit?", "Around Earth~Around Mars~Around the Sun only~Around Jupiter", 0, "The ISS orbits Earth."],
            ["What is microgravity?", "A condition where objects seem nearly weightless~No gravity anywhere~Very strong gravity~A type of oxygen", 0, "Microgravity creates a feeling of weightlessness."],
            ["How do astronauts sleep on the ISS?", "In secured sleeping bags~On ordinary beds~Underwater~Standing on the floor", 0, "Sleeping bags are attached to surfaces."],
            ["How do astronauts drink liquids in microgravity?", "Using specially designed containers~Pouring into open cups~From rivers~Using ordinary fountains", 0, "Special containers prevent liquids from floating away."],
            ["What helps astronauts exercise on the ISS?", "Special exercise equipment~A swimming pool~Outdoor running tracks~Bicycles on roads", 0, "Exercise helps maintain health in microgravity."],
            ["Why do astronauts exercise in space?", "To help reduce muscle and bone loss~To become taller~To increase gravity~To produce oxygen", 0, "Microgravity affects muscles and bones."],
            ["What provides power to the ISS?", "Solar arrays~Coal fires~Petrol engines~Wind turbines", 0, "Large solar arrays convert sunlight into electricity."],
            ["What is an airlock used for?", "Moving between the station and space safely~Cooking food~Growing clouds~Measuring stars", 0, "An airlock helps manage pressure during spacewalks."],
            ["What is a spacewalk?", "An astronaut working outside a spacecraft~Walking on the Moon only~A walk on Earth~A rocket launch", 0, "A spacewalk is also called an EVA."],
            ["What does EVA stand for?", "Extravehicular Activity~Earth Vehicle Area~External Vacuum Air~Emergency Vehicle Action", 0, "EVA means Extravehicular Activity."],
            ["How do astronauts wash on the ISS?", "With waterless or low-water methods~In a normal bathtub~In the ocean~With rain", 0, "Water is limited, so special hygiene methods are used."],
            ["What happens to flames in microgravity?", "They behave differently and can become more spherical~They always point downward~They freeze instantly~They become invisible", 0, "Microgravity changes convection and flame shape."],
            ["What is the ISS used for?", "Scientific research and international cooperation~Only tourism~Building planets~Mining the Sun", 0, "The ISS is a laboratory in orbit."],
            ["How do astronauts stay in contact with mission control?", "Communication systems~Paper airplanes~Smoke signals~Mirrors only", 0, "Radio and data systems support communication."],
            ["Why is water recycled on the ISS?", "To conserve limited supplies~To make fuel~To create gravity~To cool the Sun", 0, "Recycling reduces the need to transport water."],
            ["What is a module on the ISS?", "A connected section of the station~A type of star~A rocket fuel~A planet", 0, "The station is built from connected modules."],
            ["What is the approximate orbital period of the ISS?", "About 90 minutes~24 hours~One month~One year", 0, "It circles Earth roughly every 90 minutes."],
            ["Why do astronauts see many sunrises and sunsets each day?", "The ISS orbits Earth quickly~Earth stops rotating~The Sun moves around the ISS~The Moon creates them", 0, "The station completes many orbits each day."],
            ["Which countries and agencies helped build and operate the ISS?", "Multiple international partners~Only one school~Only private airlines~Only one country with no partners", 0, "The ISS is an international partnership."]
        ]
    },
    {
        name: "Solar System Explorer",
        icon: "🪐",
        topic: "Planets, Sun and celestial bodies",
        description: "Visit the planets of our Solar System.",
        sim: ["Explore planetary orbits.", "Discover the gas giants.", "Learn about the Sun."],
        questions: [
            ["How many planets are in our Solar System?", "8~7~9~10", 0, "There are eight recognized planets."],
            ["Which planet is closest to the Sun?", "Mercury~Venus~Earth~Mars", 0, "Mercury is the innermost planet."],
            ["Which planet is the largest?", "Jupiter~Earth~Mars~Mercury", 0, "Jupiter is the largest planet."],
            ["Which planet is famous for its rings?", "Saturn~Mercury~Earth~Mars", 0, "Saturn has a spectacular ring system."],
            ["Which planet is called Earth's twin because of its similar size?", "Venus~Mars~Jupiter~Neptune", 0, "Venus is similar to Earth in size."],
            ["Which planet rotates on its side to a large degree?", "Uranus~Mars~Mercury~Earth", 0, "Uranus has an extreme axial tilt."],
            ["Which planet is farthest from the Sun?", "Neptune~Saturn~Jupiter~Venus", 0, "Neptune is the eighth planet."],
            ["What is the Sun?", "A star~A planet~A moon~A comet", 0, "The Sun is a star at the center of our Solar System."],
            ["What keeps planets in orbit around the Sun?", "Gravity~Sound~Friction~Wind", 0, "The Sun's gravity helps keep planets in orbit."],
            ["What is an asteroid?", "A small rocky body orbiting the Sun~A giant star~A type of cloud~A galaxy", 0, "Asteroids are rocky or metallic small bodies."],
            ["What is a comet mainly made of?", "Ice, dust and rocky material~Only iron~Only oxygen~Liquid water oceans", 0, "Comets contain ice and dust."],
            ["What is the asteroid belt located between?", "Mars and Jupiter~Earth and Mars~Saturn and Uranus~Mercury and Venus", 0, "The main asteroid belt lies between Mars and Jupiter."],
            ["What is a dwarf planet?", "A body orbiting the Sun that has not cleared its orbital neighborhood~A small star~A moon of Earth~A type of comet", 0, "Pluto is a well-known dwarf planet."],
            ["Which planet has the Great Red Spot?", "Jupiter~Venus~Mercury~Neptune", 0, "It is a giant storm in Jupiter's atmosphere."],
            ["Which planet is known for its very hot surface?", "Venus~Neptune~Uranus~Mars", 0, "Venus has an intense greenhouse atmosphere."],
            ["What is a light-year?", "A distance light travels in one year~A unit of time only~A planet's age~A star's temperature", 0, "A light-year is a unit of distance."],
            ["What is the heliosphere?", "The region influenced by the solar wind~A ring around Saturn~A Moon crater~A type of telescope", 0, "The solar wind creates the heliosphere."],
            ["What causes day and night on Earth?", "Earth's rotation~Earth's revolution only~The Moon's phases~The Sun orbiting Earth", 0, "Earth rotates on its axis."],
            ["What causes the seasons on Earth?", "Axial tilt as Earth orbits the Sun~Distance from the Moon~Solar eclipses~Ocean tides", 0, "Earth's tilted axis changes sunlight through the year."],
            ["What is the Kuiper Belt?", "A region beyond Neptune containing icy bodies~A ring around Earth~A solar storm~A region inside the Sun", 0, "The Kuiper Belt contains many icy objects."]
        ]
    },
    {
        name: "Space Survival",
        icon: "🧑‍🚀",
        topic: "Astronaut safety and survival science",
        description: "Learn how astronauts stay safe.",
        sim: ["Discover life-support systems.", "Learn about radiation.", "Explore emergency preparation."],
        questions: [
            ["Why do astronauts need oxygen?", "For breathing~For creating stars~For increasing gravity~For making rocks", 0, "Humans need oxygen for respiration."],
            ["What is a life-support system?", "Equipment that provides essential living conditions~A telescope~A rocket decoration~A planet map", 0, "It helps provide air, water and temperature control."],
            ["Why is space radiation a concern?", "It can harm living cells~It makes plants grow faster~It creates gravity~It produces food", 0, "Radiation exposure is a health risk."],
            ["What is a pressure suit designed to help with?", "Maintaining safe pressure around the astronaut~Making the astronaut invisible~Creating oxygen from sunlight~Increasing body weight", 0, "A spacesuit maintains pressure and supports breathing."],
            ["Why must astronauts secure objects inside a spacecraft?", "Objects can float in microgravity~Objects become planets~Gravity becomes stronger~The spacecraft has wind", 0, "Loose objects can float around and cause problems."],
            ["What is dehydration?", "Not having enough water in the body~Having too much oxygen~A type of orbit~A space storm", 0, "The body needs water to function properly."],
            ["Why is food specially packaged for space?", "To store it safely and reduce floating crumbs~To make it heavier~To create gravity~To make it glow", 0, "Packaging helps with storage and safe eating."],
            ["What is thermal control used for?", "Managing temperature~Measuring distance to stars~Growing planets~Creating sound", 0, "Spacecraft need systems to manage heat and cold."],
            ["What should astronauts do during an emergency?", "Follow trained safety procedures~Ignore alarms~Open every hatch~Switch off all communication", 0, "Training and procedures help keep crews safe."],
            ["What is a radiation shield?", "Material that reduces radiation exposure~A telescope lens~A rocket fin~A food container", 0, "Shielding can reduce exposure to some radiation."],
            ["Why do astronauts need medical checks?", "To monitor their health~To change their eye color~To increase their height~To make rockets faster", 0, "Health monitoring is important before, during and after flight."],
            ["What is a fire extinguisher used for?", "Controlling fires~Producing oxygen~Measuring gravity~Cleaning solar panels", 0, "Fire extinguishers help control fires."],
            ["What is the purpose of a backup system?", "To provide another option if the main system fails~To decorate the spacecraft~To increase noise~To block radio signals", 0, "Redundancy improves mission reliability."],
            ["Why is exercise important during long space missions?", "It helps maintain muscle and bone health~It increases the spacecraft's speed~It changes the orbit~It removes radiation completely", 0, "Exercise helps counter some effects of microgravity."],
            ["What is a meteor?", "A streak of light from a space rock entering the atmosphere~A planet~A satellite~A star", 0, "A meteor is the visible streak produced in the atmosphere."],
            ["What is a meteorite?", "A space rock that reaches the ground~A shooting star only~A comet's tail~A gas cloud", 0, "Meteorites survive passage through the atmosphere."],
            ["Why are emergency supplies stored on spacecraft?", "To help crews handle unexpected situations~To decorate the cabin~To attract asteroids~To change the weather", 0, "Emergency supplies support crew safety."],
            ["What is a solar storm?", "A disturbance caused by activity from the Sun~A storm of ocean water~A rainstorm on Mars~A type of comet", 0, "Solar storms can affect spacecraft and communications."],
            ["Why do astronauts use checklists?", "To make sure important steps are not missed~To slow down all missions~To avoid communication~To change gravity", 0, "Checklists help manage complex procedures."],
            ["What is the safest way to handle an unknown space-system warning?", "Follow the mission's approved procedures and contact mission control~Ignore it~Guess randomly~Turn off every system", 0, "Trained procedures and mission support guide safe responses."]
        ]
    },
    {
        name: "Galaxy Explorer",
        icon: "🌌",
        topic: "Stars, galaxies and black holes",
        description: "Travel beyond our Solar System.",
        sim: ["Explore distant galaxies.", "Discover star life cycles.", "Learn about black holes."],
        questions: [
            ["What is a galaxy?", "A huge collection of stars, gas and dust~A single planet~A rocket~A moon crater", 0, "Galaxies contain many stars and other matter."],
            ["What is the name of our galaxy?", "Milky Way~Andromeda~Whirlpool~Pinwheel", 0, "Our Solar System is in the Milky Way."],
            ["What is a black hole?", "An object with gravity so strong that light cannot escape from inside its event horizon~A dark planet~An empty cave in space~A giant asteroid", 0, "A black hole has an event horizon beyond which light cannot escape."],
            ["What is a nebula?", "A cloud of gas and dust in space~A type of planet~A rocket engine~A moon", 0, "Nebulae are clouds of gas and dust."],
            ["What is a supernova?", "A powerful stellar explosion~A new planet~A comet shower~A satellite launch", 0, "Some stars end their lives in supernova explosions."],
            ["What is the closest star system to our Solar System?", "Alpha Centauri system~Sirius system~Vega system~Polaris system", 0, "Alpha Centauri is the nearest star system."],
            ["What is the center of a galaxy often home to?", "A dense region of stars and sometimes a supermassive black hole~An ocean~A planet's surface~A rocket station", 0, "Many large galaxies contain central supermassive black holes."],
            ["What is a constellation?", "A pattern of stars seen from Earth~A planet group held together physically~A galaxy cluster only~A type of satellite", 0, "Constellations are named patterns in the sky."],
            ["What is a light-year used to measure?", "Distance~Temperature~Mass~Time", 0, "A light-year measures distance."],
            ["What is a red giant?", "A large expanded late-stage star~A red planet~A comet~A black hole", 0, "A star like the Sun can expand into a red giant."],
            ["What is a neutron star?", "An extremely dense remnant of a massive star~A type of planet~A star made of water~A comet", 0, "Neutron stars can form after some supernovae."],
            ["What does a star produce?", "Energy through nuclear fusion~Only reflected light~Oxygen by breathing~Gravity-free space", 0, "Stars generate energy through fusion."],
            ["What is the Big Bang theory about?", "The early expansion of the universe~The formation of Earth's Moon only~A rocket explosion~The creation of Saturn's rings", 0, "It describes the universe's early hot, dense state and expansion."],
            ["What is an exoplanet?", "A planet outside our Solar System~A moon of Earth~A dwarf star~A space station", 0, "Exoplanets orbit stars beyond our Sun."],
            ["What is the James Webb Space Telescope designed to observe?", "The universe in infrared light~Only Earth's oceans~Only radio signals~The inside of planets", 0, "JWST is a powerful infrared space telescope."],
            ["What is a star cluster?", "A group of stars held together by gravity~A single planet~A rocket group~A meteor shower", 0, "Star clusters contain stars associated by gravity."],
            ["What is dark matter?", "Matter inferred from its gravitational effects~A black painted planet~Empty space only~A type of sunlight", 0, "Dark matter is inferred through gravitational effects."],
            ["What is an event horizon?", "The boundary around a black hole beyond which escape is impossible~The surface of the Sun~A galaxy's edge~A telescope mirror", 0, "It marks the point beyond which nothing can escape."],
            ["Which galaxy is a large neighbor of the Milky Way?", "Andromeda~Whirlpool~Sombrero~Cartwheel", 0, "Andromeda is a nearby large galaxy."],
            ["Why do scientists study distant galaxies?", "To understand the history and evolution of the universe~To predict every raindrop~To change Earth's rotation~To build oceans", 0, "Distant galaxies help us study cosmic history."]
        ]
    },
    {
        name: "Mission to the Unknown",
        icon: "✨",
        topic: "Advanced space science and problem-solving",
        description: "Put your space knowledge to the ultimate test.",
        sim: ["Solve space science challenges.", "Explore advanced astronomy.", "Prepare for your final astronaut rank."],
        questions: [
            ["What is spectroscopy used for in astronomy?", "Studying light to learn about objects~Measuring astronaut height~Launching rockets~Making planets", 0, "Spectra reveal composition, temperature and motion."],
            ["What is a transit method used to discover?", "Exoplanets~Comets only~Black holes only~Asteroids only", 0, "A planet can dim a star slightly as it passes in front."],
            ["What is the Doppler effect?", "A change in observed frequency due to relative motion~A type of gravity~A moon phase~A rocket fuel", 0, "Motion changes the observed wavelength or frequency."],
            ["What is a gravitational wave?", "A ripple in spacetime~A sound wave in space~An ocean tide~A solar flare", 0, "Gravitational waves are ripples in spacetime."],
            ["What is a space probe?", "An uncrewed spacecraft sent to investigate space~A spacesuit~A planet~A telescope lens", 0, "Probes collect information without a human crew."],
            ["What is the purpose of a heat shield during atmospheric entry?", "Protect a spacecraft from intense heating~Create oxygen~Increase gravity~Make the craft invisible", 0, "Heat shields manage intense entry heating."],
            ["What is a geostationary orbit?", "An orbit where a satellite appears fixed above one point on Earth's equator~An orbit around Mars~A path through the Sun~An orbit with no gravity", 0, "A geostationary satellite matches Earth's rotation."],
            ["What is the Hubble Space Telescope famous for?", "Observing the universe from space~Landing on Mars~Orbiting the Moon~Launching rockets", 0, "Hubble has produced many important astronomical observations."],
            ["What is an astronomical unit approximately equal to?", "The average Earth-Sun distance~The distance to Mars~The diameter of Earth~The Moon's orbit", 0, "One AU is about 150 million kilometres."],
            ["What does the term habitable zone mean?", "A region around a star where liquid water may exist on a planet's surface~A place with guaranteed life~The center of a galaxy~A region without stars", 0, "It describes a range of temperatures where liquid water may be possible."],
            ["What is orbital debris?", "Human-made objects left in orbit~Natural clouds~Ocean plastic~A type of star", 0, "Old satellites and fragments can remain in orbit."],
            ["What is an ion thruster?", "An engine that accelerates charged particles for propulsion~A water rocket~A parachute~A solar telescope", 0, "Ion engines use electric fields to accelerate ions."],
            ["Why do scientists use robotic missions?", "To explore places difficult or risky for humans~To stop all research~To create gravity~To replace every telescope", 0, "Robots can explore distant or hazardous environments."],
            ["What is a solar sail?", "A spacecraft propulsion system using pressure from sunlight~A sailboat on Earth~A solar panel only~A rocket parachute", 0, "Solar sails use the pressure of sunlight."],
            ["What is the cosmic microwave background?", "Radiation left over from the early universe~A signal from a microwave oven~Light from Earth's cities~A type of star", 0, "It is relic radiation from the early universe."],
            ["What is a binary star system?", "Two stars orbiting a common center of mass~Two planets touching~Two galaxies colliding~A star with two colors", 0, "Binary stars orbit their shared center of mass."],
            ["What is a Lagrange point?", "A location where gravitational and orbital effects can allow an object to stay in a stable relative position~A crater on Mars~A star cluster~A rocket launch site", 0, "Lagrange points are useful for some space observatories."],
            ["What is the purpose of a spectrograph?", "To separate light into its component wavelengths~To measure astronaut pulse only~To launch a probe~To detect ocean waves", 0, "Spectrographs analyze light spectra."],
            ["What is the main challenge of interstellar travel?", "Enormous distances between stars~Too many oceans~Too much oxygen~No stars exist", 0, "Even the nearest stars are extremely far away."],
            ["What is the scientific method used for?", "Testing ideas using observations and evidence~Guessing without testing~Choosing answers randomly~Avoiding experiments", 0, "Science uses evidence and repeatable investigation."]
        ]
    }
];

// ============================================
// GAME DATA AND SAVE SYSTEM
// ============================================

const SAVE_KEY = "juniorAstronautAcademy_v1";

let saved = loadProgress();
let currentMission = 0;
let currentQuestion = 0;
let currentScore = 0;
let currentCorrect = 0;
let answered = false;
let lastResults = null;
let simulationMission = 0;
let displayedCorrectIndex = 0;

function defaultProgress() {
    return {
        unlocked: [0],
        results: {},
        simulations: [],
        totalStars: 0
    };
}

function loadProgress() {
    try {
        const data = JSON.parse(localStorage.getItem(SAVE_KEY));
        return data && Array.isArray(data.unlocked) && data.results
            ? data : defaultProgress();
    } catch {
        return defaultProgress();
    }
}

function saveProgress() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
}

function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    if (id === "missionsPage") renderMissions();
    if (id === "reportPage") renderReport();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getResult(index) {
    return saved.results[index] || null;
}

function isPassed(index) {
    return !!getResult(index)?.passed;
}

function isUnlocked(index) {
    return saved.unlocked.includes(index);
}

function updateHeader() {
    document.getElementById("headerStars").textContent = saved.totalStars;
    document.getElementById("headerRank").textContent = getRank();
}

function getRank() {
    const count = Object.keys(saved.results).filter(i => saved.results[i].passed).length;
    if (count === 9) return "Space Legend";
    if (count >= 7) return "Galaxy Master";
    if (count >= 5) return "Space Commander";
    if (count >= 3) return "Space Explorer";
    if (count >= 1) return "Junior Astronaut";
    return "Rookie";
}

// ============================================
// MISSION SELECTION
// ============================================

function renderMissions() {
    const grid = document.getElementById("missionGrid");
    grid.innerHTML = "";

    missions.forEach((mission, index) => {
        const result = getResult(index);
        const unlocked = isUnlocked(index);
        const passed = isPassed(index);
        const score = result ? result.correct : 0;
        const progress = result ? (score / 20) * 100 : 0;

        const card = document.createElement("article");
        card.className = `mission-card ${unlocked ? "unlocked" : "locked"} ${passed ? "passed" : ""}`;

        card.innerHTML = `
      <div class="mission-number">MISSION ${String(index + 1).padStart(2, "0")}</div>
      <div class="mission-icon">${mission.icon}</div>
      <h3>${mission.name}</h3>
      <p>${mission.topic}</p>
      <div class="mission-status">
        ${passed ? "✓ COMPLETED" : unlocked ? "● READY TO PLAY" : "🔒 LOCKED"}
      </div>
      <div class="card-progress"><div style="width:${progress}%"></div></div>
      <p>${result ? `${score}/20 correct · ${result.accuracy}%` : "20 questions · 100 points"}</p>
    `;

        if (unlocked) {
            card.addEventListener("click", () => startMission(index));
        }
        if (unlocked) {
            const simButton = document.createElement("button");
            simButton.className = "secondary-btn";
            simButton.textContent = "🚀 SIMULATE";
            simButton.style.marginTop = "10px";
            simButton.style.padding = "9px 12px";

            simButton.addEventListener("click", (event) => {
                event.stopPropagation();
                openSimulation(index);
            });

            card.appendChild(simButton);
        }
        grid.appendChild(card);
    });

    const completed = missions.filter((_, i) => isPassed(i)).length;
    const percent = Math.round(completed / 9 * 100);
    document.getElementById("academyPercent").textContent = percent + "%";
    document.getElementById("academyBar").style.width = percent + "%";
    document.getElementById("academyText").textContent = `${completed} of 9 missions completed`;

    updateHeader();
}

// ============================================
// QUIZ ENGINE
// ============================================

function startMission(index) {
    if (!isUnlocked(index)) return;

    currentMission = index;
    currentQuestion = 0;
    currentScore = 0;
    currentCorrect = 0;
    lastResults = null;

    showPage("quizPage");
    loadQuestion();
}

function loadQuestion() {
    const question = missions[currentMission].questions[currentQuestion];
    answered = false;

    document.getElementById("quizMissionName").textContent =
        missions[currentMission].name;

    document.getElementById("quizScore").textContent = currentScore;
    document.getElementById("questionNumber").textContent =
        `QUESTION ${currentQuestion + 1} / 20`;

    const percent = Math.round((currentQuestion + 1) / 20 * 100);
    document.getElementById("questionPercent").textContent = percent + "%";
    document.getElementById("questionBar").style.width = percent + "%";

    document.getElementById("questionText").textContent = question[0];

    const options = question[1].split("~")
        .map((text, originalIndex) => ({
            text,
            originalIndex
        }))
        .sort(() => Math.random() - 0.5);

    displayedCorrectIndex = options.findIndex(
        option => option.originalIndex === question[2]
    );
    const container = document.getElementById("answerOptions");
    container.innerHTML = "";

    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").className = "feedback";

    const next = document.getElementById("nextBtn");
    next.disabled = true;
    next.textContent = currentQuestion === 19 ? "FINISH MISSION ✓" : "NEXT QUESTION →";

    options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-btn";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option.text}`;
        button.addEventListener("click", () => checkAnswer(index));
        container.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (answered) return;
    answered = true;

    const question = missions[currentMission].questions[currentQuestion];
    const correct = displayedCorrectIndex;
    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === correct) button.classList.add("correct");
        if (index === selected && selected !== correct) button.classList.add("wrong");
    });

    if (selected === correct) {
        currentCorrect++;
        currentScore += 5;
        feedback.textContent = "✓ CORRECT! " + question[3];
        feedback.classList.add("good");
    } else {
        feedback.textContent = "✕ Not quite. " + question[3];
        feedback.classList.add("bad");
    }

    document.getElementById("quizScore").textContent = currentScore;
    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    if (currentQuestion < 19) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishMission();
    }
}

// ============================================
// RESULTS AND UNLOCKING
// ============================================

function finishMission() {
    const accuracy = Math.round(currentCorrect / 20 * 100);
    const passed = currentCorrect >= 16;
    const stars = currentCorrect >= 19 ? 3 : currentCorrect >= 16 ? 2 : currentCorrect >= 10 ? 1 : 0;

    const previous = getResult(currentMission);
    const previousStars = previous ? previous.stars : 0;

    // Keep the best result if the player retries.
    const bestCorrect = Math.max(previous?.correct || 0, currentCorrect);
    const bestStars = Math.max(previousStars, stars);
    const bestAccuracy = Math.round(bestCorrect / 20 * 100);
    const bestPassed = bestCorrect >= 16;

    saved.results[currentMission] = {
        correct: bestCorrect,
        accuracy: bestAccuracy,
        stars: bestStars,
        passed: bestPassed,
        attempts: (previous?.attempts || 0) + 1
    };

    saved.totalStars = Object.values(saved.results)
        .reduce((sum, result) => sum + result.stars, 0);

    if (bestPassed && currentMission < 8 && !saved.unlocked.includes(currentMission + 1)) {
        saved.unlocked.push(currentMission + 1);
    }

    saveProgress();
    lastResults = { passed, correct: currentCorrect, accuracy, stars };
    showResults(lastResults);
}

function showResults(result) {
    document.getElementById("resultCorrect").textContent = result.correct;
    document.getElementById("resultAccuracy").textContent = result.accuracy + "%";
    document.getElementById("resultPoints").textContent = currentScore;
    document.getElementById("resultStars").textContent = "⭐".repeat(result.stars) || "0";

    const title = document.getElementById("resultTitle");
    const subtitle = document.getElementById("resultSubtitle");
    const message = document.getElementById("resultMessage");

    if (result.passed) {
        title.textContent = "MISSION PASSED!";
        subtitle.textContent = "Outstanding work, astronaut!";
        message.textContent = currentMission === 8
            ? "You completed all nine missions! You are now a Space Legend!"
            : "You earned the mission pass! Your next mission is now unlocked. Keep exploring!";
    } else {
        title.textContent = "MISSION INCOMPLETE";
        subtitle.textContent = "Every great astronaut learns and tries again.";
        message.textContent = `You need at least 16 correct answers to pass. You scored ${result.correct}/20. Review what you learned and try again!`;
    }

    document.getElementById("retryBtn").style.display = result.passed ? "none" : "inline-block";
    document.getElementById("continueBtn").textContent = "MISSION CONTROL →";

    showPage("resultsPage");
}

// ============================================
// SIMULATION
// ============================================

function openSimulation(index) {
    simulationMission = index;
    const mission = missions[index];

    document.getElementById("simTitle").textContent = mission.name;
    document.getElementById("simDescription").textContent = mission.description;

    const objectives = document.getElementById("simObjectives");
    objectives.innerHTML = "";

    mission.sim.forEach(item => {
        const line = document.createElement("div");
        line.textContent = "✓ " + item;
        objectives.appendChild(line);
    });

    showPage("simulationPage");
}

function completeSimulation() {
    if (!saved.simulations.includes(simulationMission)) {
        saved.simulations.push(simulationMission);
        saveProgress();
    }
    alert("Simulation completed! Your knowledge journey continues.");
    showPage("missionsPage");
}

// ============================================
// PROGRESS REPORT
// ============================================

function renderReport() {
    const results = Object.values(saved.results);
    const completed = missions.filter((_, i) => isPassed(i)).length;
    const totalCorrect = results.reduce((sum, r) => sum + r.correct, 0);
    const attempts = results.reduce((sum, r) => sum + (r.attempts || 1), 0);
    const totalQuestions = attempts * 20;
    const accuracy = totalQuestions
        ? Math.round(totalCorrect / totalQuestions * 100)
        : 0;

    document.getElementById("reportCompleted").textContent = `${completed}/9`;
    document.getElementById("reportQuestions").textContent = totalQuestions;
    document.getElementById("reportAccuracy").textContent = accuracy + "%";
    document.getElementById("reportPoints").textContent = totalCorrect * 5;
    document.getElementById("reportRank").textContent = getRank();

    const list = document.getElementById("reportMissionList");
    list.innerHTML = "";

    missions.forEach((mission, index) => {
        const result = getResult(index);
        const row = document.createElement("div");
        row.className = "report-row";

        const status = isPassed(index)
            ? "✓ PASSED"
            : result ? "↻ RETRY NEEDED" : isUnlocked(index) ? "READY" : "🔒 LOCKED";

        row.innerHTML = `
      <div>
        <strong>${mission.icon} ${mission.name}</strong>
        <small>${status} · ${result ? result.correct + "/20 correct" : "Not attempted"}</small>
      </div>
      <b>${result ? result.accuracy + "%" : "—"}</b>
    `;

        list.appendChild(row);
    });

    updateHeader();
}

// ============================================
// RESET AND INITIALIZE
// ============================================

function resetProgress() {
    const confirmed = confirm("Are you sure you want to reset ALL mission scores and unlocked missions? This cannot be undone.");
    if (!confirmed) return;

    saved = defaultProgress();
    saveProgress();
    renderReport();
    updateHeader();
    alert("Your academy progress has been reset.");
}

function initializeGame() {
    updateHeader();
    renderMissions();
}

initializeGame();
