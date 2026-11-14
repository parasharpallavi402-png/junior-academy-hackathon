
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
let correctAnswerStreak = 0;
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
    const targetPage = document.getElementById(id);

    if (!targetPage) {
        console.error("Page not found:", id);
        return;
    }

    targetPage.classList.add("active");

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
    window.showSpaceAlert("🚀 Mission " + (index + 1) + " started!");
    // Reset mission progress for the new attempt
    currentMission = index;
    currentQuestion = 0;
    currentScore = 0;
    currentCorrect = 0;
    correctAnswerStreak = 0;
    lastResults = null;
    // Reset astronaut resources for the new mission
    if (typeof resetAstroResources === "function") {
        resetAstroResources();
    }

    // Start the countdown before opening the quiz
    if (typeof window.startMissionCountdown === "function") {
        window.startMissionCountdown(() => {
            window.showMissionTravelScene(() => {
                showPage("quizPage");
                loadQuestion();
            });
        });
    } else {
        // Fallback if countdown is unavailable
        showPage("quizPage");
        loadQuestion();
    }
}


function loadQuestion() {
    updateMissionControl();
    const backgroundClasses = [
        "mission-bg-1",
        "mission-bg-2",
        "mission-bg-3",
        "mission-bg-4",
        "mission-bg-5",
        "mission-bg-6",
        "mission-bg-7",
        "mission-bg-8",
        "mission-bg-9"
    ];

    document.body.classList.remove(...backgroundClasses);

    document.body.classList.add(
        backgroundClasses[currentMission]
    );

    // Mission-specific animated object
    const missionObjects = [
        "🛰️", "🚀", "🤖", "☄️", "🛸",
        "👽", "☀️", "🪐", "🌌"
    ];

    let missionObject = document.querySelector(".mission-special-object");

    if (!missionObject) {
        missionObject = document.createElement("div");
        missionObject.className = "mission-special-object";
        document.body.appendChild(missionObject);
    }

    missionObject.textContent = missionObjects[currentMission];


    // Add cute space decorations
    // Add decorations only once
    if (!document.querySelector(".space-decoration")) {
        const decorations = [
            ["🪐", "space-planet"],
            ["🌙", "space-moon"],
            ["✨", "space-star"],
            ["💫", "space-sparkle"]
        ];

        decorations.forEach(([emoji, className]) => {
            const decoration = document.createElement("div");
            decoration.className = `space-decoration ${className}`;
            decoration.textContent = emoji;
            document.body.appendChild(decoration);
        });
    }

    const question = missions[currentMission].questions[currentQuestion];
    triggerRandomSpaceEmergency();
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

        // Increase the correct-answer streak.
        correctAnswerStreak++;

        // Give the astronaut resource rewards.
        awardCorrectAnswerRewards();

        feedback.textContent = "✓ CORRECT! " + question[3];
        feedback.classList.add("good");

        // SHOW CORRECT ANSWER ALERT
        window.showSpaceAlert("⭐ Excellent! Correct answer!");


    } else {
        // A wrong answer resets the consecutive-answer streak.
        correctAnswerStreak = 0;

        feedback.textContent = "✕ Not quite. " + question[3];
        feedback.classList.add("bad");

        // REGISTER WRONG ANSWER
        registerWrongAnswer();

        // SHOW INCORRECT ANSWER ALERT
        window.showSpaceAlert("⚠️ Not quite! Try the next question!");
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
    // Reward the astronaut for passing this mission.
    if (passed) {
        awardMissionCompletionReward();
    }
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

    if (bestPassed && currentMission < 8 &&
        !saved.unlocked.includes(currentMission + 1)) {
        saved.unlocked.push(currentMission + 1);
    }

    saveProgress();

    lastResults = {
        passed,
        correct: currentCorrect,
        accuracy,
        stars
    };

    showResults(lastResults);
    window.showSpaceAlert("🏆 Mission completed! Great work, astronaut!");
    if (typeof window.playSpaceSound === "function") {
        window.playSpaceSound("success");
    }
    if (typeof window.showSpaceCelebration === "function") {
        window.showSpaceCelebration();
    }


    // Start the bonus adventure after mission results.
    setTimeout(() => {
        if (typeof window.startPostMissionAdventure === "function") {
            window.startPostMissionAdventure();
        }
    }, 1200);

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
    simulationPowerUsed = false;
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
// STORY SCENES BETWEEN MISSIONS
const storyScenes = [
    {
        title: "A New Space Explorer! 🚀",
        message: "Yay! You completed your first mission! ASTRO has detected a mysterious signal near the Moon. Let's investigate!",
        astronaut: "👩‍🚀",
        robot: "🤖"
    },
    {
        title: "The Moon Mystery 🌙",
        message: "Amazing work! You are getting closer to the signal. ASTRO says, 'Our next stop is the Red Planet — Mars!'",
        astronaut: "🧑‍🚀",
        robot: "🤖"
    },
    {
        title: "Welcome to Mars! 🔴",
        message: "Look at those red mountains! ASTRO has found an interesting rock sample. Let's learn more about this planet!",
        astronaut: "👩‍🚀",
        robot: "🤖"
    },
    {
        title: "A Message from Space! ✨",
        message: "A mysterious message has arrived from deep space. ASTRO needs your help to understand it!",
        astronaut: "🧑‍🚀",
        robot: "🤖"
    },
    {
        title: "The Space Station! 🛰️",
        message: "You've reached the space station! Your astronaut training is going wonderfully. One more discovery awaits!",
        astronaut: "👩‍🚀",
        robot: "🤖"
    },
    {
        title: "A Distant Discovery! 🌌",
        message: "ASTRO has spotted a beautiful distant galaxy. Let's explore what makes galaxies so special!",
        astronaut: "🧑‍🚀",
        robot: "🤖"
    },
    {
        title: "The Solar System! ☀️",
        message: "You are becoming a brilliant space explorer! It's time to learn more about our amazing solar system.",
        astronaut: "👩‍🚀",
        robot: "🤖"
    },
    {
        title: "Almost a Space Hero! 🏆",
        message: "ASTRO is so proud of you! One final mission remains before you earn your Junior Astronaut title!",
        astronaut: "🧑‍🚀",
        robot: "🤖"
    },
    {
        title: "You're a Junior Astronaut! 🏆",
        message: "YOU DID IT! All 9 missions completed! ASTRO says, 'You are now an official Junior Astronaut! Keep exploring, keep learning, and never stop dreaming!'",
        astronaut: "👩‍🚀",
        robot: "🤖"
    }
];
// ASTRO'S TYPING ANIMATION
function typeStoryText(element, message) {
    let index = 0;

    element.textContent = "";

    const typing = setInterval(() => {
        element.textContent += message[index];
        index++;

        if (index >= message.length) {
            clearInterval(typing);
        }
    }, 35);
}
function showStoryScene(completedMissionIndex) {
    const scene = storyScenes[completedMissionIndex];

    if (!scene) return;

    const overlay = document.createElement("div");
    overlay.className = "story-overlay";

    overlay.innerHTML = `
        <div class="story-card">
            <div class="story-stars">✨ ⭐ ✨</div>

            <div class="story-characters">
                <div class="story-astronaut">${scene.astronaut}</div>
                <div class="story-robot">${scene.robot}</div>
            </div>

            <h2>${scene.title}</h2>
            <p class="story-message"></p>

            <button class="story-continue">
                Continue Mission 🚀
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
    const messageElement = overlay.querySelector(".story-message");

    typeStoryText(messageElement, scene.message);

    overlay.querySelector(".story-continue").addEventListener("click", () => {
        overlay.remove();
    });
}

/* ===== EXTRA SPACE ADVENTURE EFFECTS ===== */

(function createGalaxyUpgrade() {

    function startGalaxy() {

        // Create ASTRO companion
        const buddy = document.createElement("button");
        buddy.id = "astro-buddy";
        buddy.textContent = "🤖";
        buddy.setAttribute("aria-label", "Talk to ASTRO");

        const message = document.createElement("div");
        message.id = "astro-message";

        const astroMessages = [
            "Hello, Space Explorer! Ready for an adventure? 🚀",
            "Fun fact: Jupiter is the largest planet in our Solar System! 🪐",
            "You're doing amazing! Keep discovering! ⭐",
            "Remember: astronauts train hard before going to space! 👩‍🚀",
            "Be curious, be brave, and explore the universe! 🌌",
            "Psst... I think there's something amazing waiting in space! ✨"
        ];

        let messageIndex = 0;

        buddy.addEventListener("click", () => {
            message.textContent = astroMessages[messageIndex];
            message.classList.add("visible");

            messageIndex = (messageIndex + 1) % astroMessages.length;
        });

        document.body.appendChild(message);
        document.body.appendChild(buddy);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startGalaxy);
    } else {
        startGalaxy();
    }

})();

/* ===== ASTRONAUT ID CARD ===== */

(function createAstronautID() {

    if (document.getElementById("astronaut-id-button")) return;

    const openButton = document.createElement("button");
    openButton.id = "astronaut-id-button";
    openButton.textContent = "🪪 My ID";

    const missionsPage = document.getElementById("missionsPage");

    if (missionsPage) {
        missionsPage.appendChild(openButton);
    }

    function getPlayerStats() {
        const progress = typeof saved !== "undefined" ? saved : {};

        const results = progress.results || {};
        const completed = Object.values(results)
            .filter(result => result && result.passed).length;

        const stars = progress.totalStars || 0;

        let rank = "Space Cadet";

        if (completed >= 9) {
            rank = "Junior Astronaut 🏆";
        } else if (completed >= 6) {
            rank = "Galaxy Explorer 🌌";
        } else if (completed >= 3) {
            rank = "Moon Explorer 🌙";
        } else if (completed >= 1) {
            rank = "Rookie Astronaut 🚀";
        }

        return { completed, stars, rank };
    }

    openButton.addEventListener("click", () => {

        const oldOverlay = document.getElementById(
            "astronaut-id-overlay"
        );

        if (oldOverlay) oldOverlay.remove();

        const stats = getPlayerStats();

        const overlay = document.createElement("div");
        overlay.id = "astronaut-id-overlay";

        const card = document.createElement("div");
        card.className = "astronaut-id-card";

        card.innerHTML = `
            <h2>JUNIOR ASTRONAUT ID</h2>
            <div class="astronaut-id-avatar">👩‍🚀</div>

            <p>SPACE EXPLORER</p>
<h3 id="astronaut-display-name">ASTRONAUT NAME</h3>
            <input
                id="astronaut-player-name"
                type="text"
                maxlength="24"
                placeholder="Enter your astronaut name"
            >

            <div class="astronaut-id-stats">
                <div class="astronaut-id-stat">
                    <strong>🚀 Missions</strong>
                    <p>${stats.completed} / 9</p>
                </div>

                <div class="astronaut-id-stat">
                    <strong>⭐ Stars</strong>
                    <p>${stats.stars}</p>
                </div>
            </div>

            <h3>${stats.rank}</h3>

            <p>🌌 Official Space Explorer</p>

            <button id="save-astronaut-name">Save Name</button>
            <button id="close-astronaut-id">Close</button>
        `;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const nameInput = card.querySelector(
            "#astronaut-player-name"
        );

        nameInput.value = localStorage.getItem(
            "astronautPlayerName"
        ) || "";
        const displayName = card.querySelector(
            "#astronaut-display-name"
        );

        displayName.textContent =
            nameInput.value.trim().toUpperCase() || "ASTRONAUT NAME";

        card.querySelector("#save-astronaut-name")
            .addEventListener("click", () => {

                const name = nameInput.value.trim();

                if (!name) {
                    nameInput.placeholder = "Please enter a name!";
                    return;
                }

                localStorage.setItem("astronautPlayerName", name);

                card.querySelector("h2").textContent =
                    name.toUpperCase() + "'S ID 🚀";
                displayName.textContent = name.toUpperCase();
            });

        card.querySelector("#close-astronaut-id")
            .addEventListener("click", () => overlay.remove());

        overlay.addEventListener("click", event => {
            if (event.target === overlay) overlay.remove();
        });
    });

})();

/* ===== INTERACTIVE GALAXY MISSION MAP ===== */

(function createGalaxyMissionMap() {

    if (document.getElementById("galaxy-map-button")) return;

    const planets = [
        { name: "Earth", icon: "🌍", detail: "Your home planet. Begin your astronaut journey here!" },
        { name: "Moon", icon: "🌙", detail: "Discover Earth's natural satellite." },
        { name: "Mars", icon: "🔴", detail: "Explore the mysterious Red Planet." },
        { name: "Jupiter", icon: "🪐", detail: "Meet the giant planet of our Solar System." },
        { name: "Saturn", icon: "💫", detail: "Discover the beautiful rings of Saturn." },
        { name: "Sun", icon: "☀️", detail: "Learn about the star at the centre of our Solar System." },
        { name: "Venus", icon: "🟠", detail: "Explore the hottest planet in our Solar System." },
        { name: "Neptune", icon: "🔵", detail: "Travel to a distant icy giant." },
        { name: "Galaxy", icon: "🌌", detail: "Complete your final space adventure!" }
    ];

    const openButton = document.createElement("button");
    openButton.id = "galaxy-map-button";
    openButton.textContent = "🪐 Mission Map";
    const missionsPage = document.getElementById("missionsPage");

    if (missionsPage) {
        missionsPage.appendChild(openButton);
    }

    openButton.addEventListener("click", showGalaxyMap);

    function showGalaxyMap() {

        const oldOverlay = document.getElementById("galaxy-map-overlay");
        if (oldOverlay) oldOverlay.remove();

        const progress = typeof saved !== "undefined" ? saved : {};
        const unlocked = progress.unlocked || [0];
        const results = progress.results || {};

        const overlay = document.createElement("div");
        overlay.id = "galaxy-map-overlay";

        const panel = document.createElement("div");
        panel.className = "galaxy-map-panel";

        const heading = document.createElement("h2");
        heading.textContent = "🌌 YOUR GALAXY JOURNEY";

        const subtitle = document.createElement("p");
        subtitle.textContent = "Explore the universe, one mission at a time!";

        const grid = document.createElement("div");
        grid.className = "galaxy-map-grid";

        const detail = document.createElement("div");
        detail.id = "galaxy-map-detail";
        detail.textContent = "Choose a planet to discover its mission.";

        planets.forEach((planet, index) => {

            const result = results[index];
            const completed = Boolean(result && result.passed);
            const isUnlocked = unlocked.includes(index);

            const card = document.createElement("button");
            card.className = "galaxy-planet";

            if (!isUnlocked) {
                card.classList.add("locked");
            }

            if (completed) {
                card.classList.add("completed");
            }

            const icon = document.createElement("span");
            icon.className = "galaxy-planet-icon";
            icon.textContent = planet.icon;

            const name = document.createElement("strong");
            name.textContent = planet.name;

            const status = document.createElement("small");
            status.textContent = completed
                ? "✅ Completed"
                : isUnlocked
                    ? "🚀 Unlocked"
                    : "🔒 Locked";

            card.appendChild(icon);
            card.appendChild(name);
            card.appendChild(status);

            card.addEventListener("click", () => {
                if (!isUnlocked) {
                    detail.textContent =
                        "🔒 Complete the previous mission with at least 16/20 to unlock this destination.";
                    return;
                }

                detail.textContent =
                    planet.icon + " " + planet.name + ": " + planet.detail;
            });

            grid.appendChild(card);
        });

        const closeButton = document.createElement("button");
        closeButton.id = "close-galaxy-map";
        closeButton.textContent = "Back to Game 🚀";
        closeButton.addEventListener("click", () => overlay.remove());

        panel.appendChild(heading);
        panel.appendChild(subtitle);
        panel.appendChild(grid);
        panel.appendChild(detail);
        panel.appendChild(closeButton);

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", event => {
            if (event.target === overlay) overlay.remove();
        });
    }

})();


// ======================================
// ASTROQUEST MUSIC SYSTEM
// Reuses the old SOUND button position
// ======================================

if (!document.getElementById("space-sound-button")) {
    const musicButton = document.createElement("button");
    musicButton.id = "space-sound-button";
    document.body.appendChild(musicButton);
}
document.addEventListener("DOMContentLoaded", function () {

    const backgroundMusic = document.getElementById("backgroundMusic");

    // Reuse the old SOUND button's exact position and styling
    const musicToggle = document.getElementById("space-sound-button");

    if (!backgroundMusic || !musicToggle) {
        console.error("ASTROQUEST music elements not found!");
        return;
    }

    let musicIsPlaying = false;

    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.35;

    musicToggle.textContent = "🎵 MUSIC: OFF";

    musicToggle.addEventListener("click", async function () {

        if (!musicIsPlaying) {

            try {
                await backgroundMusic.play();

                musicIsPlaying = true;
                musicToggle.textContent = "🎵 MUSIC: ON";
                musicToggle.classList.add("music-active");

            } catch (error) {
                console.error("Music playback error:", error);
                alert("Music could not start. Please try again.");
            }

        } else {

            backgroundMusic.pause();

            musicIsPlaying = false;
            musicToggle.textContent = "🎵 MUSIC: OFF";
            musicToggle.classList.remove("music-active");

        }

    });

});


/* ===== MISSION COUNTDOWN SYSTEM ===== */

window.startMissionCountdown = function (callback) {

    // Prevent multiple countdowns
    if (document.getElementById("launch-countdown")) return;

    const overlay = document.createElement("div");
    overlay.id = "launch-countdown";

    const content = document.createElement("div");
    content.className = "launch-content";

    const scene = document.createElement("div");
    scene.className = "launch-scene";
    scene.innerHTML = `
    <div class="launch-stars">✨ · ⭐ · ✨</div>
    <div class="launch-planet">🌍</div>
    <div class="launch-rocket">🚀</div>
    <div class="launch-smoke">☁️ ☁️ ☁️</div>
`;

    const heading = document.createElement("h2");
    heading.textContent = "🚀 MISSION LAUNCH";

    const number = document.createElement("div");
    number.className = "launch-number";

    const message = document.createElement("p");
    message.className = "launch-message";
    message.textContent = "Prepare your astronaut suit!";
    content.appendChild(scene);
    content.appendChild(heading);
    content.appendChild(number);
    content.appendChild(message);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    let count = 3;

    function updateCountdown() {
        if (!overlay.isConnected) return;

        if (count > 0) {
            number.textContent = count;
            number.style.animation = "none";
            void number.offsetWidth;
            number.style.animation = "launchPop 0.8s ease";

            if (typeof window.playSpaceSound === "function") {
                window.playSpaceSound("click");
            }

            count--;
            setTimeout(updateCountdown, 1000);

        } else {
            number.textContent = "🚀";
            message.textContent = "LIFTOFF!";
            overlay.classList.add("launch-countdown-go");

            if (typeof window.playSpaceSound === "function") {
                window.playSpaceSound("launch");
            }

            setTimeout(() => {
                overlay.remove();

                if (typeof callback === "function") {
                    callback();
                }
            }, 4200);
        }
    }

    updateCountdown();
};

// UPDATE MISSION CONTROL DASHBOARD
function updateMissionControl() {
    const missionNumber = document.getElementById("control-mission");
    const progressFill = document.getElementById("control-progress-fill");

    if (!missionNumber || !progressFill) return;

    // Display mission number
    missionNumber.textContent = String(currentMission + 1).padStart(2, "0");

    // Calculate quiz progress
    const progress = Math.min((currentQuestion / 20) * 100, 100);

    progressFill.style.width = progress + "%";
}

/* SPACE MISSION ALERT SYSTEM */
window.showSpaceAlert = function (message) {
    let alertBox = document.getElementById("space-alert");

    if (!alertBox) {
        alertBox = document.createElement("div");
        alertBox.id = "space-alert";
        document.body.appendChild(alertBox);
    }

    alertBox.textContent = message;
    alertBox.classList.add("show");

    clearTimeout(window.spaceAlertTimer);

    window.spaceAlertTimer = setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2200);
};

/* ===== ALIEN SIGNAL CHALLENGE ===== */

(function createAlienSignal() {

    if (document.getElementById("alien-signal-button")) return;

    const questions = [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter"],
            answer: 1
        },
        {
            question: "Which planet has the most famous ring system?",
            options: ["Saturn", "Earth", "Mercury"],
            answer: 0
        },
        {
            question: "What is the name of our galaxy?",
            options: ["Andromeda", "Milky Way", "Whirlpool"],
            answer: 1
        },
        {
            question: "Which star is closest to Earth?",
            options: ["Sirius", "Polaris", "The Sun"],
            answer: 2
        },
        {
            question: "What do astronauts wear outside their spacecraft?",
            options: ["Space suit", "Raincoat", "Winter jacket"],
            answer: 0
        }
    ];

    const button = document.createElement("button");
    button.id = "alien-signal-button";
    button.textContent = "🛸 Alien Signal";

    document.body.appendChild(button);

    let currentQuestion = null;
    let answered = false;

    button.addEventListener("click", openChallenge);

    function openChallenge() {
        if (document.getElementById("alien-signal-overlay")) return;

        answered = false;

        currentQuestion =
            questions[Math.floor(Math.random() * questions.length)];

        const overlay = document.createElement("div");
        overlay.id = "alien-signal-overlay";

        const card = document.createElement("div");
        card.className = "alien-signal-card";

        card.innerHTML = `
            <h2>🛸 MYSTERIOUS SIGNAL</h2>
            <p>We received a message from deep space!</p>
            <h3>${currentQuestion.question}</h3>
            <div class="alien-signal-options"></div>
            <p id="alien-signal-feedback"></p>
            <p id="alien-signal-xp">
                Your XP: ${Number(localStorage.getItem("juniorAstronautXP")) || 0}
            </p>
            <button id="alien-signal-close">Close Signal</button>
        `;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const options = card.querySelector(".alien-signal-options");

        currentQuestion.options.forEach((option, index) => {
            const choice = document.createElement("button");
            choice.textContent = option;

            choice.addEventListener("click", () => {
                if (answered) return;

                answered = true;

                const feedback =
                    card.querySelector("#alien-signal-feedback");

                if (index === currentQuestion.answer) {
                    const oldXP =
                        Number(localStorage.getItem("juniorAstronautXP")) || 0;

                    const newXP = oldXP + 10;

                    localStorage.setItem(
                        "juniorAstronautXP",
                        newXP
                    );

                    feedback.textContent = "⭐ Correct! +10 XP earned!";
                    card.querySelector("#alien-signal-xp").textContent =
                        "Your XP: " + newXP;
                } else {
                    feedback.textContent =
                        "📡 Signal incorrect! Try another challenge!";
                }

                options.querySelectorAll("button").forEach(btn => {
                    btn.disabled = true;
                });
            });

            options.appendChild(choice);
        });

        card.querySelector("#alien-signal-close")
            .addEventListener("click", () => overlay.remove());

        overlay.addEventListener("click", event => {
            if (event.target === overlay) overlay.remove();
        });
    }

})();

/* ===== INTERACTIVE SPACESHIP COCKPIT ===== */

(function createSpaceCockpit() {

    if (document.getElementById("space-cockpit-button")) return;

    const openButton = document.createElement("button");
    openButton.id = "space-cockpit-button";
    openButton.textContent = "🛰️ Cockpit";

    const missionsPage = document.getElementById("missionsPage");

    if (missionsPage) {
        missionsPage.appendChild(openButton);
    }

    openButton.addEventListener("click", openCockpit);

    function openCockpit() {

        if (document.getElementById("space-cockpit-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "space-cockpit-overlay";

        const panel = document.createElement("div");
        panel.className = "space-cockpit-panel";

        panel.innerHTML = `
            <h2>🚀 SPACESHIP COCKPIT</h2>
            <p class="cockpit-subtitle">JUNIOR ASTRONAUT COMMAND CENTER</p>

            <div class="cockpit-radar">
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>
                <div class="radar-ring"></div>
                <div class="radar-sweep"></div>
                <span class="radar-ship">🚀</span>
            </div>

            <div class="cockpit-status">
                <div>
                    <span>ENGINE</span>
                    <strong id="engine-status">STANDBY</strong>
                </div>
                <div>
                    <span>SHIELDS</span>
                    <strong>ONLINE</strong>
                </div>
                <div>
                    <span>RADAR</span>
                    <strong>ACTIVE</strong>
                </div>
            </div>

            <div class="cockpit-controls">
                <button id="engine-button">⚡ Start Engine</button>
                <button id="radar-button">📡 Scan Space</button>
            </div>

            <p id="cockpit-message">
                Welcome, Commander! Systems are ready.
            </p>

            <button id="cockpit-close">Close Cockpit</button>
        `;

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        let engineOn = false;

        panel.querySelector("#engine-button")
            .addEventListener("click", () => {

                engineOn = !engineOn;

                panel.querySelector("#engine-status").textContent =
                    engineOn ? "RUNNING" : "STANDBY";

                panel.querySelector("#engine-button").textContent =
                    engineOn ? "⏹ Stop Engine" : "⚡ Start Engine";

                panel.querySelector("#cockpit-message").textContent =
                    engineOn
                        ? "🚀 Engines running! Ready for exploration."
                        : "Engine stopped. Systems in standby.";
            });

        panel.querySelector("#radar-button")
            .addEventListener("click", () => {

                panel.querySelector("#cockpit-message").textContent =
                    "📡 Radar scan complete! Space signals detected.";
            });

        panel.querySelector("#cockpit-close")
            .addEventListener("click", () => overlay.remove());

        overlay.addEventListener("click", event => {
            if (event.target === overlay) overlay.remove();
        });
    }

})();

/* ===== CRYSTAL RUSH ADVENTURE GAME ===== */

window.startPostMissionAdventure = function () {
    if (document.getElementById("adventure-overlay")) return;

    let collected = 0;

    const overlay = document.createElement("div");
    overlay.id = "adventure-overlay";

    overlay.innerHTML = `
        <div class="adventure-card">
            <h2>🌌 CRYSTAL RUSH</h2>
            <p>
                Astronaut, your spaceship needs energy!
                Collect all 5 crystals to activate the
                mysterious planet's energy core.
            </p>

            <div id="adventure-progress">
                Crystals: 0 / 5
            </div>

            <div id="adventure-crystals">
                ${Array.from({ length: 5 }, (_, i) =>
        `<button class="adventure-crystal"
                    data-crystal="${i}"
                    aria-label="Collect crystal ${i + 1}">💎</button>`
    ).join("")}
            </div>

            <p id="adventure-message">
                Tap the crystals to collect them!
            </p>

            <button id="adventure-close" disabled>
                Complete the challenge first
            </button>
        </div>
    `;

    document.body.appendChild(overlay);

    const crystals = overlay.querySelectorAll(".adventure-crystal");
    const progress = overlay.querySelector("#adventure-progress");
    const message = overlay.querySelector("#adventure-message");
    const closeButton = overlay.querySelector("#adventure-close");

    crystals.forEach(crystal => {
        crystal.addEventListener("click", () => {
            if (crystal.classList.contains("collected")) return;

            crystal.classList.add("collected");
            crystal.disabled = true;
            crystal.textContent = "✨";

            collected++;
            progress.textContent = `Crystals: ${collected} / 5`;

            if (collected < 5) {
                message.textContent = "✨ Great! Find the remaining crystals!";
            } else {
                message.textContent =
                    "🏆 ENERGY CORE ACTIVATED! You earned 20 bonus XP!";

                const oldXP = Number(
                    localStorage.getItem("juniorAstronautXP") || 0
                );

                localStorage.setItem(
                    "juniorAstronautXP",
                    oldXP + 20
                );

                closeButton.disabled = false;
                closeButton.textContent = "🚀 Return to Mission Results";
            }
        });
    });


    closeButton.addEventListener("click", () => {
        if (collected === 5) {
            overlay.remove();

            if (lastResults && lastResults.passed) {
                showStoryScene(currentMission === 8 ? 8 : currentMission);
            }
        }
    });

};


/* ===== OPENING STORY NAVIGATION ===== */

document.getElementById("openingNextButton")?.addEventListener("click", () => {
    showPage("missionsPage");
});

/* ===== ROCKET RACING GAME ENGINE ===== */

(function createRocketRacing() {

    const arena = document.getElementById("race-arena");
    const player = document.getElementById("race-player");
    const startButton = document.getElementById("race-start");

    if (!arena || !player || !startButton) {
        console.error("Rocket Racing HTML elements not found!");
        return;
    }

    let running = false;
    let position = 50;
    let score = 0;
    let lives = 3;
    let time = 0;
    let gameTimer = null;
    let spawnTimer = null;
    let objects = [];
    let keys = {};

    function updateHUD() {
        document.getElementById("race-score").textContent = score;
        document.getElementById("race-lives").textContent = lives;
        document.getElementById("race-time").textContent = time;
    }

    function movePlayer(direction) {
        if (!running) return;

        const rocketSpeed = Number(player.dataset.speed) || 5;
        position += direction * rocketSpeed;
        position = Math.max(7, Math.min(93, position));

        player.style.left = position + "%";
    }

    function spawnObject() {
        if (!running) return;

        const isCrystal = Math.random() < 0.3;
        const object = document.createElement("div");

        object.className = isCrystal ? "race-crystal" : "race-asteroid";
        object.textContent = isCrystal ? "💎" : "☄️";

        const objectPosition = Math.random() * 85 + 5;

        object.style.left = objectPosition + "%";
        object.style.top = "-45px";

        arena.appendChild(object);

        objects.push({
            element: object,
            x: objectPosition,
            y: -45,
            crystal: isCrystal
        });
    }

    function finishGame(won) {
        running = false;

        clearInterval(gameTimer);
        clearInterval(spawnTimer);

        objects.forEach(object => object.element.remove());
        objects = [];

        const message = document.getElementById("race-message");
        message.style.display = "flex";

        message.innerHTML = won
            ? `<div>🏆 RACE COMPLETED!</div>
               <p>You collected ${score} points!</p>
               <button id="race-start">RACE AGAIN 🚀</button>`
            : `<div>💥 GAME OVER!</div>
               <p>Final score: ${score}</p>
               <button id="race-start">TRY AGAIN 🚀</button>`;

        document.getElementById("race-start").addEventListener("click", startGame);
    }

    function gameLoop() {
        if (!running) return;

        if (keys.ArrowLeft || keys.a) movePlayer(-1);
        if (keys.ArrowRight || keys.d) movePlayer(1);

        const playerY = arena.clientHeight - 75;

        objects.forEach((object, index) => {
            object.y += 4;

            object.element.style.top = object.y + "px";

            const horizontalDistance = Math.abs(object.x - position);
            const verticalDistance = Math.abs(object.y - playerY);

            if (horizontalDistance < 9 && verticalDistance < 40) {
                if (object.crystal) {
                    score += 10;
                } else {
                    lives--;

                    arena.classList.remove("race-damaged");

                    void arena.offsetWidth;

                    arena.classList.add("race-damaged");

                }

                object.element.remove();
                objects.splice(index, 1);
                updateHUD();
                return;
            }

            if (object.y > arena.clientHeight) {
                object.element.remove();
                objects.splice(index, 1);
            }
        });

        if (lives <= 0) {
            finishGame(false);
            return;
        }

        if (time >= 120) {
            finishGame(true);
            return;
        }

        requestAnimationFrame(gameLoop);
    }

    function startGame() {
        if (running) return;

        running = true;
        position = 50;
        score = 0;
        lives = 3;
        time = 0;
        objects = [];

        player.style.left = "50%";

        const message = document.getElementById("race-message");
        message.style.display = "none";

        updateHUD();

        gameTimer = setInterval(() => {
            if (!running) return;
            time++;
            updateHUD();
        }, 1000);

        spawnTimer = setInterval(spawnObject, 900);

        requestAnimationFrame(gameLoop);
    }

    startButton.addEventListener("click", startGame);

    document.addEventListener("keydown", event => {
        if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }
        keys[event.key] = true;
    });

    document.addEventListener("keyup", event => {
        keys[event.key] = false;
    });

    document.getElementById("race-left").addEventListener("click", () => {
        movePlayer(-1);
    });

    document.getElementById("race-right").addEventListener("click", () => {
        movePlayer(1);
    });

})();


/* ===== ROCKET GARAGE FUNCTION ===== */

(function setupRocketGarage() {

    const player = document.getElementById("race-player");
    const choices = document.querySelectorAll(".rocket-choice");

    if (!player || choices.length === 0) return;

    choices.forEach(button => {

        button.addEventListener("click", function () {

            const selectedRocket = this.dataset.rocket;
            const selectedSpeed = Number(this.dataset.speed);

            player.textContent = selectedRocket;
            player.dataset.speed = selectedSpeed;

            choices.forEach(choice => {
                choice.classList.remove("selected");
            });

            this.classList.add("selected");

        });

    });

})();


/* ===== ALIEN PLANET EXPLORER ===== */

window.openAlienExplorer = function () {

    if (document.getElementById("alien-explorer-overlay")) return;

    let collected = 0;

    const overlay = document.createElement("div");
    overlay.id = "alien-explorer-overlay";

    overlay.innerHTML = `
        <div class="alien-explorer-card">

            <h1>👽 MYSTERY PLANET</h1>

            <p>
                Welcome, astronaut!
                Explore this mysterious planet
                and discover its hidden treasures.
            </p>

            <h3>💎 Find all 3 energy crystals!</h3>

            <div class="alien-planet-area">

<div class="explorer-astronaut">🧑‍🚀</div>
<div class="roaming-alien">👾</div>
 

                <button class="alien-find" data-find="1">💎</button>
                <button class="alien-find" data-find="2">🪨</button>
                <button class="alien-find" data-find="3">✨</button>

                <div class="friendly-alien">👽</div>

            </div>

            <h3 id="alien-progress">
                Treasures found: 0 / 3
            </h3>

            <p id="alien-message">
                Tap the objects to discover their secrets!
            </p>

            <button id="alien-explorer-close">
                CLOSE EXPLORER
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    const objects = overlay.querySelectorAll(".alien-find");
    const progress = overlay.querySelector("#alien-progress");
    const message = overlay.querySelector("#alien-message");

    objects.forEach((object, index) => {

        object.addEventListener("click", () => {

            if (object.disabled) return;

            object.disabled = true;
            object.classList.add("found");

            const discoveries = [
                "💎 Energy crystal discovered!",
                "🪨 Interesting! This could be a meteorite!",
                "✨ You discovered a mysterious energy source!"
            ];

            object.textContent = "⭐";

            collected++;

            progress.textContent =
                "Treasures found: " + collected + " / 3";

            message.textContent = discoveries[index];

            if (collected === 3) {

                const alreadyClaimed =
                    localStorage.getItem("alienPlanetRewardClaimed");

                if (!alreadyClaimed) {

                    const oldXP = Number(
                        localStorage.getItem("juniorAstronautXP") || 0
                    );

                    localStorage.setItem(
                        "juniorAstronautXP",
                        oldXP + 15
                    );

                    localStorage.setItem(
                        "alienPlanetRewardClaimed",
                        "true"
                    );

                    message.textContent =
                        "🏆 Planet explored! You earned 15 bonus XP!";

                } else {

                    message.textContent =
                        "🏆 Planet explored! You already claimed your XP reward.";

                }

                progress.textContent = "MISSION COMPLETE! 🏆";
            }

        });

    });

    overlay.querySelector("#alien-explorer-close")
        .addEventListener("click", () => {
            overlay.remove();
        });

};

/* ===== MISSION DESTINATION CINEMATIC ===== */

window.showMissionTravelScene = function (callback) {

    const destinations = [
        {
            name: "JOURNEY TO THE MOON",
            planet: "🌕",
            astronaut: "🧑‍🚀",
            message: "Approaching lunar surface..."
        },
        {
            name: "MARS EXPLORATION",
            planet: "🔴",
            astronaut: "🧑‍🚀",
            message: "Entering the Martian atmosphere..."
        },
        {
            name: "INTERNATIONAL SPACE STATION",
            planet: "🛰️",
            astronaut: "👨‍🚀",
            message: "Preparing for station docking..."
        },
        {
            name: "SOLAR SYSTEM EXPLORER",
            planet: "🪐",
            astronaut: "🧑‍🚀",
            message: "Exploring the solar system..."
        },
        {
            name: "SPACE SURVIVAL",
            planet: "🌌",
            astronaut: "🧑‍🚀",
            message: "Entering deep space..."
        },
        {
            name: "GALAXY SURVIVAL",
            planet: "✨",
            astronaut: "🧑‍🚀",
            message: "Entering a distant galaxy..."
        },
        {
            name: "MISSION UNKNOWN",
            planet: "👽",
            astronaut: "🧑‍🚀",
            message: "An unknown world has been detected..."
        }
    ];

    const destination = destinations[currentMission] || destinations[6];

    const overlay = document.createElement("div");
    overlay.id = "mission-travel-overlay";
    overlay.classList.add("mission-scene-" + currentMission);
    overlay.innerHTML = `
        <div class="travel-scene">

            <div class="travel-stars">✦　✨　✧　⭐　✦</div>

            <div class="travel-heading">
                ${destination.name}
            </div>

            <div class="travel-rocket">🚀</div>

            <div class="travel-planet">
                ${destination.planet}
            </div>

            <div class="travel-astronaut">
                ${destination.astronaut}
            </div>

            <div class="travel-message">
                ${destination.message}
            </div>

            <div class="travel-status">
                DESTINATION APPROACHING...
            </div>
<div class="mission-arrival-banner">
    🏆 DESTINATION REACHED!
    <span>Astronaut, prepare for exploration!</span>
</div>
        </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.classList.add("travel-arrived");
    }, 2000);

    setTimeout(() => {
        overlay.remove();

        if (typeof callback === "function") {
            callback();
        }
    }, 7500);
};
// ===================================
// ASTROQUEST RESOURCE SYSTEM
// ===================================

let astroResources = {
    oxygen: 100,
    power: 100,
    shield: 100
};

function updateAstroResources() {
    const oxygenBar = document.getElementById("oxygenBar");
    const powerBar = document.getElementById("powerBar");
    const shieldBar = document.getElementById("shieldBar");

    const quizOxygenBar = document.getElementById("quizOxygenBar");
    const quizPowerBar = document.getElementById("quizPowerBar");
    const quizShieldBar = document.getElementById("quizShieldBar");


    const warning = document.getElementById("resourceWarning");
    const quizWarning = document.getElementById("quizResourceWarning");

    if (!oxygenBar || !powerBar || !shieldBar) return;

    if (oxygenBar) oxygenBar.style.width = astroResources.oxygen + "%";
    if (powerBar) powerBar.style.width = astroResources.power + "%";
    if (shieldBar) shieldBar.style.width = astroResources.shield + "%";

    if (quizOxygenBar) quizOxygenBar.style.width = astroResources.oxygen + "%";
    if (quizPowerBar) quizPowerBar.style.width = astroResources.power + "%";
    if (quizShieldBar) quizShieldBar.style.width = astroResources.shield + "%";


    const oxygenValue = document.getElementById("oxygenValue");
    const powerValue = document.getElementById("powerValue");
    const shieldValue = document.getElementById("shieldValue");

    const quizOxygenValue = document.getElementById("quizOxygenValue");
    const quizPowerValue = document.getElementById("quizPowerValue");
    const quizShieldValue = document.getElementById("quizShieldValue");

    if (oxygenValue) oxygenValue.textContent = astroResources.oxygen + "%";
    if (powerValue) powerValue.textContent = astroResources.power + "%";
    if (shieldValue) shieldValue.textContent = astroResources.shield + "%";

    if (quizOxygenValue) quizOxygenValue.textContent = astroResources.oxygen + "%";
    if (quizPowerValue) quizPowerValue.textContent = astroResources.power + "%";
    if (quizShieldValue) quizShieldValue.textContent = astroResources.shield + "%";


    let warningMessage = "✅ All systems operating normally.";
    let warningColor = "#8fffdc";

    if (
        astroResources.oxygen <= 25 ||
        astroResources.power <= 25 ||
        astroResources.shield <= 25
    ) {
        warningMessage = "⚠️ WARNING: One or more resources are critically low!";
        warningColor = "#ff6969";
    } else if (
        astroResources.oxygen <= 50 ||
        astroResources.power <= 50 ||
        astroResources.shield <= 50
    ) {
        warningMessage = "⚠️ Caution: Monitor your mission resources.";
        warningColor = "#ffd34e";
    }

    if (warning) {
        warning.textContent = warningMessage;
        warning.style.color = warningColor;
    }

    if (quizWarning) {
        quizWarning.textContent = warningMessage;
        quizWarning.style.color = warningColor;
    }

}

// ============================================
// ASTROQUEST REWARD & RECOVERY SYSTEM
// ============================================

function showResourceReward(message) {
    // Remove an older reward message if one is still visible.
    const oldReward = document.getElementById("resourceRewardToast");

    if (oldReward) {
        oldReward.remove();
    }

    const toast = document.createElement("div");
    toast.id = "resourceRewardToast";
    toast.className = "resource-reward-toast";
    toast.textContent = message;
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2800);
}


// Rewards for every correct answer and streak milestones.
function awardCorrectAnswerRewards() {

    // Basic reward for every correct answer.
    changeAstroResources(3, 2, 0);

    let rewardMessage = "🎉 +3% OXYGEN  |  +2% POWER";

    // Every 3 consecutive correct answers.
    if (correctAnswerStreak % 3 === 0) {
        changeAstroResources(0, 0, 2);
        rewardMessage += "  |  +2% SHIELDING";
    }

    // 5 correct answers in a row.
    if (correctAnswerStreak === 5) {
        changeAstroResources(5, 0, 0);
        rewardMessage += "  |  🔥 STREAK BONUS: +5% OXYGEN";
    }

    // 10 correct answers in a row.
    if (correctAnswerStreak === 10) {
        changeAstroResources(0, 5, 5);
        rewardMessage += "  |  🏆 +5% POWER & +5% SHIELDING";
    }

    showResourceReward(rewardMessage);
}


// Special reward for successfully completing a mission.
function awardMissionCompletionReward() {
    changeAstroResources(10, 10, 10);

    showResourceReward(
        "🚀 MISSION COMPLETED! +10% OXYGEN, POWER & SHIELDING!"
    );
}

function changeAstroResources(oxygen, power, shield) {
    astroResources.oxygen = Math.max(
        0, Math.min(100, astroResources.oxygen + oxygen)
    );

    astroResources.power = Math.max(
        0, Math.min(100, astroResources.power + power)
    );

    astroResources.shield = Math.max(
        0, Math.min(100, astroResources.shield + shield)
    );

    updateAstroResources();
}

function resetAstroResources() {
    astroResources = {
        oxygen: 100,
        power: 100,
        shield: 100
    };

    updateAstroResources();
}

updateAstroResources();

// ASTROQUEST MISSION EQUIPMENT

let simulationPowerUsed = false;

function activateSimulationEquipment() {
    const message = document.getElementById("equipmentMessage");

    if (simulationPowerUsed) {
        message.textContent = "⚠️ Equipment has already been activated!";
        return;
    }

    if (astroResources.power < 10) {
        message.textContent = "⚠️ Not enough power to activate equipment!";
        return;
    }

    changeAstroResources(0, -10, 0);

    simulationPowerUsed = true;

    message.textContent =
        "✅ Equipment activated! 10% power consumed.";
}
// 🚨 ASTROQUEST RANDOM SPACE EMERGENCIES

let emergencyQuestionsSeen = [];

function triggerRandomSpaceEmergency() {

    // Only a 20% chance of an emergency
    if (Math.random() > 0.20) return;

    const emergencies = [
        {
            title: "☄️ METEOROID ALERT!",
            message: "A meteoroid shower has been detected nearby!",
            oxygen: -5,
            power: -5,
            shield: -10
        },
        {
            title: "⚡ POWER SYSTEM WARNING!",
            message: "An electrical system malfunction has occurred!",
            oxygen: 0,
            power: -10,
            shield: 0
        },
        {
            title: "🫧 OXYGEN LEAK ALERT!",
            message: "A small pressure leak has been detected!",
            oxygen: -10,
            power: 0,
            shield: 0
        },
        {
            title: "☀️ SOLAR RADIATION WARNING!",
            message: "Increased solar activity detected! Shield protection is needed.",
            oxygen: 0,
            power: 0,
            shield: -10
        }
    ];

    const emergency = emergencies[
        Math.floor(Math.random() * emergencies.length)
    ];

    changeAstroResources(
        emergency.oxygen,
        emergency.power,
        emergency.shield
    );

    // Show the animated emergency popup
    document.getElementById("emergencyTitle").textContent =
        emergency.title;

    document.getElementById("emergencyMessage").textContent =
        emergency.message;

    document.getElementById("emergencyResourceChanges").innerHTML =
        "🫧 Oxygen: " + emergency.oxygen + "%<br>" +
        "⚡ Power: " + emergency.power + "%<br>" +
        "🛡️ Shield: " + emergency.shield + "%";
    // Reset emergency choices for the next emergency
    document.getElementById("emergencyChoices").style.display = "block";

    const continueButton = document.querySelector(
        "#spaceEmergencyPopup .emergency-card > button"
    );

    continueButton.textContent = "UNDERSTOOD ✓";
    document.getElementById("spaceEmergencyPopup")
        .classList.add("active");
    playEmergencySound();
}
function closeSpaceEmergency() {
    document.getElementById("spaceEmergencyPopup")
        .classList.remove("active");
}
// ASTROQUEST EMERGENCY SOUND

function playEmergencySound() {
    const audioContext = new (
        window.AudioContext || window.webkitAudioContext
    )();

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(
        750,
        audioContext.currentTime
    );

    oscillator.frequency.setValueAtTime(
        950,
        audioContext.currentTime + 0.2
    );

    gain.gain.setValueAtTime(
        0.12,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
    );

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}
// ASTROQUEST EMERGENCY DECISIONS

function handleEmergencyChoice(choice) {

    const emergencyMessage =
        document.getElementById("emergencyMessage");

    if (choice === 0) {

        // Activate protection
        changeAstroResources(0, -10, 10);

        emergencyMessage.textContent =
            "🛡️ Protection activated! Power was used to improve shielding.";

    } else if (choice === 1) {

        // Save power, but accept reduced protection
        changeAstroResources(0, 0, -10);

        emergencyMessage.textContent =
            "⚡ You saved power, but shielding protection decreased.";

    }

    document.getElementById("emergencyChoices").style.display =
        "none";

    document.getElementById("emergencyResourceChanges").textContent =
        "Your updated resources have been applied!";

    const buttons = document.querySelectorAll(
        "#spaceEmergencyPopup .emergency-card > button"
    );

    buttons[0].textContent = "CONTINUE MISSION ✓";
}

// ===================================
// ASTROQUEST MISSION DANGER SYSTEM
// ===================================

let missionWrongAnswers = 0;

let dangerPenaltiesApplied = {
    oxygen: false,
    power: false,
    shield: false
};

function resetMissionDanger() {
    missionWrongAnswers = 0;

    dangerPenaltiesApplied = {
        oxygen: false,
        power: false,
        shield: false
    };
}

function registerWrongAnswer() {

    missionWrongAnswers++;

    const warningBox = document.getElementById("missionWarning");

    if (missionWrongAnswers >= 2 && !dangerPenaltiesApplied.oxygen) {

        dangerPenaltiesApplied.oxygen = true;
        changeAstroResources(-10, 0, 0);

        showMissionWarning(
            "⚠️ OXYGEN LEAK!",
            "Two incorrect answers! Oxygen decreased by 10%."
        );
    }

    if (missionWrongAnswers >= 4 && !dangerPenaltiesApplied.power) {

        dangerPenaltiesApplied.power = true;
        changeAstroResources(0, -15, 0);

        showMissionWarning(
            "⚡ POWER FAILURE!",
            "Four incorrect answers! Power decreased by 15%."
        );
    }

    if (missionWrongAnswers >= 7 && !dangerPenaltiesApplied.shield) {

        dangerPenaltiesApplied.shield = true;
        changeAstroResources(0, 0, -20);

        showMissionWarning(
            "🚨 SHIELD DAMAGE!",
            "Seven incorrect answers! Shield decreased by 20%."
        );
    }
}

function showMissionWarning(title, message) {

    alert(title + "\n\n" + message);
}
// ======================================
// ASTROQUEST BACKGROUND MUSIC SYSTEM
// ======================================

// ======================================
// ASTROQUEST BACKGROUND MUSIC SYSTEM
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const backgroundMusic = document.getElementById("backgroundMusic");
    const musicToggle = document.getElementById("musicToggle");

    if (!backgroundMusic || !musicToggle) {
        console.error("ASTROQUEST music elements not found!");
        return;
    }

    let musicIsPlaying = false;

    musicToggle.addEventListener("click", async function () {

        if (!musicIsPlaying) {

            try {
                backgroundMusic.volume = 0.35;

                await backgroundMusic.play();

                musicIsPlaying = true;
                musicToggle.textContent = "🎵 MUSIC: ON";
                musicToggle.classList.add("music-active");

                console.log("ASTROQUEST music started!");

            } catch (error) {

                console.error("Music playback error:", error);
                alert("Music could not start. Check the browser console.");

            }

        } else {

            backgroundMusic.pause();

            musicIsPlaying = false;
            musicToggle.textContent = "🎵 MUSIC: OFF";
            musicToggle.classList.remove("music-active");

            console.log("ASTROQUEST music stopped!");

        }

    });

});

/* ==========================================
   ASTROQUEST - NASA DONKI INTEGRATION
========================================== */

(function initNASADONKI() {

    function startDONKI() {

        const panel = document.getElementById("nasaDonkiPanel");

        if (!panel) {
            console.error("NASA DONKI panel not found!");
            return;
        }

        const refreshButton = document.getElementById("donkiRefreshBtn");
        const loading = document.getElementById("donkiLoading");
        const alertBox = document.getElementById("donkiAlert");
        const flareList = document.getElementById("donkiFlareList");
        const sepList = document.getElementById("donkiSepList");
        const shieldMessage = document.getElementById("donkiShieldMessage");
        const shieldButton = document.getElementById("donkiShieldCheck");
        const shieldStatus = document.getElementById("donkiShieldStatus");

        const NASA_API_KEY = "DEMO_KEY";

        let latestSEPCount = 0;
        let latestFlareCount = 0;

        function getDateRange() {
            const end = new Date();
            const start = new Date();

            start.setUTCDate(start.getUTCDate() - 30);

            return {
                startDate: start.toISOString().slice(0, 10),
                endDate: end.toISOString().slice(0, 10)
            };
        }

        async function fetchDONKI(type, dates) {

            const url =
                `https://api.nasa.gov/DONKI/${type}` +
                `?startDate=${dates.startDate}` +
                `&endDate=${dates.endDate}` +
                `&api_key=${NASA_API_KEY}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`${type} API error: ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error(`${type} returned an unexpected response.`);
            }

            return data;
        }

        function makeEventCard(title, date, description) {

            const card = document.createElement("div");
            card.className = "donki-event-card";

            const heading = document.createElement("strong");
            heading.textContent = title;

            const dateText = document.createElement("p");
            dateText.textContent = `Date: ${date || "Not provided"}`;

            const detailText = document.createElement("p");
            detailText.textContent = description || "No additional details available.";

            card.append(heading, dateText, detailText);

            return card;
        }

        function showEmpty(container, message) {
            container.replaceChildren();

            const paragraph = document.createElement("p");
            paragraph.className = "donki-empty";
            paragraph.textContent = message;

            container.appendChild(paragraph);
        }

        function displayFlares(flares) {

            flareList.replaceChildren();

            if (!flares.length) {
                showEmpty(flareList, "No solar flare records were returned for this date range.");
                return;
            }

            flares
                .slice()
                .sort((a, b) =>
                    new Date(b.beginTime || 0) - new Date(a.beginTime || 0)
                )
                .slice(0, 8)
                .forEach(flare => {

                    const title = flare.classType
                        ? `Solar Flare — ${flare.classType}`
                        : "Solar Flare";

                    const description =
                        `Location: ${flare.sourceLocation || "Not provided"}`;

                    flareList.appendChild(
                        makeEventCard(
                            title,
                            flare.beginTime || flare.peakTime,
                            description
                        )
                    );
                });
        }

        function displaySEP(events) {

            sepList.replaceChildren();

            if (!events.length) {
                showEmpty(sepList, "No solar energetic particle event records were returned for this date range.");
                return;
            }

            events
                .slice()
                .sort((a, b) =>
                    new Date(b.eventTime || 0) - new Date(a.eventTime || 0)
                )
                .slice(0, 8)
                .forEach(event => {

                    sepList.appendChild(
                        makeEventCard(
                            "Solar Energetic Particle Event",
                            event.eventTime,
                            `Event ID: ${event.sepID || "Not provided"}`
                        )
                    );
                });
        }

        function updateRadiationAlert(flares, particleEvents) {

            const hasXFlare = flares.some(flare =>
                /^X/i.test(flare.classType || "")
            );

            const hasMFlare = flares.some(flare =>
                /^M/i.test(flare.classType || "")
            );

            alertBox.className = "donki-alert";

            if (particleEvents.length > 0) {

                alertBox.classList.add("elevated");

                alertBox.textContent =
                    "⚠️ PARTICLE EVENT RECORDS FOUND: NASA DONKI reports " +
                    `${particleEvents.length} solar energetic particle event(s) ` +
                    "in this 30-day window. Review the mission's radiation shielding.";

                shieldMessage.textContent =
                    "Particle event records were found. In this training simulation, " +
                    "the astronaut should review the radiation shielding before proceeding.";

            } else if (hasXFlare) {

                alertBox.classList.add("elevated");

                alertBox.textContent =
                    "⚠️ STRONG FLARE RECORD FOUND: An X-class solar flare appears " +
                    "in the selected period. Review the radiation shielding.";

                shieldMessage.textContent =
                    "An X-class flare record was found. Review the radiation shielding " +
                    "as part of the mission training protocol.";

            } else if (hasMFlare) {

                alertBox.classList.add("caution");

                alertBox.textContent =
                    "🟠 SOLAR ACTIVITY NOTICE: M-class flare records were found. " +
                    "Keep monitoring space-weather information.";

                shieldMessage.textContent =
                    "Solar flare records were found. Continue monitoring the " +
                    "radiation shielding status.";

            } else {

                alertBox.textContent =
                    "🟢 No SEP or M/X-class flare records were found in this " +
                    "30-day search. This is not a guarantee of safe space conditions.";

                shieldMessage.textContent =
                    "No qualifying event records were found in this search. " +
                    "Continue normal mission monitoring.";
            }

            shieldStatus.textContent =
                "Shield check not yet acknowledged.";
        }

        async function loadDONKIData() {

            refreshButton.disabled = true;
            loading.textContent = "🛰️ Fetching real NASA space-weather data...";

            try {

                const dates = getDateRange();

                const results = await Promise.allSettled([
                    fetchDONKI("FLR", dates),
                    fetchDONKI("SEP", dates)
                ]);

                const flareResult = results[0];
                const sepResult = results[1];

                if (
                    flareResult.status === "rejected" &&
                    sepResult.status === "rejected"
                ) {
                    const failedRequests = results
                        .map((result, index) => ({
                            name: ["FLR", "CME", "GST", "SEP", "Notifications"][index],
                            result
                        }))
                        .filter(item => item.result.status === "rejected");

                    console.error("NASA DONKI failed requests:", failedRequests);

                    throw new Error(
                        failedRequests.map(item =>
                            item.name + ": " + item.result.reason
                        ).join(" | ")
                    );
                }

                const flares =
                    flareResult.status === "fulfilled"
                        ? flareResult.value
                        : [];

                const particleEvents =
                    sepResult.status === "fulfilled"
                        ? sepResult.value
                        : [];

                latestFlareCount = flares.length;
                latestSEPCount = particleEvents.length;

                displayFlares(flares);
                displaySEP(particleEvents);
                updateRadiationAlert(flares, particleEvents);

                const partialFailure =
                    flareResult.status === "rejected" ||
                    sepResult.status === "rejected";

                loading.textContent = partialFailure
                    ? "⚠️ Some NASA data could not load. Refresh to try again."
                    : `✅ NASA data loaded. ${dates.startDate} to ${dates.endDate} UTC.`;

                if (partialFailure) {
                    console.warn("Partial DONKI API failure:", results);
                }

            } catch (error) {

                console.error("NASA DONKI error:", error);

                loading.textContent =
                    "❌ NASA data could not load. Check your internet connection or try again later.";

                alertBox.textContent =
                    "NASA DONKI is currently unavailable. No space-weather conclusion can be made.";

                alertBox.className = "donki-alert";

                showEmpty(flareList, "Solar flare data unavailable.");
                showEmpty(sepList, "Particle event data unavailable.");

                shieldMessage.textContent =
                    "NASA data is unavailable. Continue using the game's normal training instructions.";

            } finally {

                refreshButton.disabled = false;
            }
        }

        refreshButton.addEventListener("click", loadDONKIData);

        shieldButton.addEventListener("click", function () {

            shieldStatus.textContent =
                "✅ Radiation shield check acknowledged in the training simulation.";

            // Event hook for connecting this check to the existing
            // ASTROQUEST radiation-shield resource system.
            window.dispatchEvent(
                new CustomEvent("astroquest:shield-check-requested", {
                    detail: {
                        solarParticleEvents: latestSEPCount,
                        solarFlares: latestFlareCount
                    }
                })
            );

        });

        loadDONKIData();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startDONKI);
    } else {
        startDONKI();
    }

})();

/* ==========================================
   ASTROQUEST - NASA DONKI LIVE SPACE WEATHER
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const dashboard = document.getElementById("donkiDashboard");
    const openButton = document.getElementById("donkiOpenButton");
    const closeButton = document.getElementById("donkiCloseButton");
    const refreshButton = document.getElementById("donkiRefreshButton");

    if (!dashboard || !openButton || !closeButton || !refreshButton) {
        console.error("DONKI dashboard HTML elements missing!");
        return;
    }

    const API_BASE = "https://ccmc.gsfc.nasa.gov/DONKI-API/get";

    const status = document.getElementById("donkiStatus");
    const eventsBox = document.getElementById("donkiEvents");
    const notificationsBox = document.getElementById("donkiNotifications");

    openButton.addEventListener("click", function () {
        dashboard.classList.add("donki-visible");
        loadDonkiData();
    });

    closeButton.addEventListener("click", function () {
        dashboard.classList.remove("donki-visible");
    });

    refreshButton.addEventListener("click", loadDonkiData);

    function safeText(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function getDate(daysAgo = 7) {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() - daysAgo);
        return date.toISOString().slice(0, 10);
    }

    async function fetchDonki(type) {

        const params = new URLSearchParams({
            startDate: getDate(7),
            endDate: getDate(0)
        });

        const response = await fetch(
            `${API_BASE}/${type}?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(`${type} API returned ${response.status}`);
        }

        return response.json();
    }

    function renderEvents(type, data, emoji, title) {

        if (!Array.isArray(data) || data.length === 0) {
            return `<div class="donki-event-card">
                <h3>${emoji} ${title}</h3>
                <p>No events reported in this date range.</p>
            </div>`;
        }

        return data.slice(0, 8).map(event => {

            const date =
                event.startTime ||
                event.eventTime ||
                event.beginTime ||
                event.messageIssueTime ||
                event.submissionTime ||
                "Date unavailable";

            const location =
                event.sourceLocation ||
                event.location ||
                event.observedRegion ||
                "Location not specified";

            const description =
                event.note ||
                event.messageBody ||
                event.instruments?.map(item => item.displayName).join(", ") ||
                "NASA has recorded this space-weather event.";

            const link = event.messageURL || event.link;

            return `
                <article class="donki-event-card">
                    <h3>${emoji} ${safeText(title)}</h3>
                    <p><strong>Date:</strong> ${safeText(date)}</p>
                    <p><strong>Location:</strong> ${safeText(location)}</p>
                    <p>${safeText(description)}</p>
                    ${link ? `<a href="${safeText(link)}"
                        target="_blank" rel="noopener noreferrer">
                        View NASA record ↗
                    </a>` : ""}
                </article>
            `;

        }).join("");
    }

    function renderNotifications(data) {

        if (!Array.isArray(data) || data.length === 0) {
            notificationsBox.innerHTML =
                "<p>No notifications found in this date range.</p>";
            return;
        }

        notificationsBox.innerHTML = data.slice(0, 8).map(item => {

            return `
                <article class="donki-event-card">
                    <h3>🚨 ${safeText(item.messageType || "NASA Update")}</h3>
                    <p><strong>Issued:</strong>
                    ${safeText(item.messageIssueTime || "Date unavailable")}</p>
                    <p>${safeText(
                (item.messageBody || "NASA notification available.")
                    .slice(0, 700)
            )}</p>
                    ${item.messageURL ? `
                        <a href="${safeText(item.messageURL)}"
                           target="_blank" rel="noopener noreferrer">
                           Read full notification ↗
                        </a>` : ""}
                </article>
            `;

        }).join("");
    }

    async function loadDonkiData() {

        status.textContent = "🟡 CONNECTING TO NASA...";
        refreshButton.disabled = true;
        refreshButton.textContent = "LOADING...";

        eventsBox.innerHTML = "<p>Receiving space-weather data...</p>";
        notificationsBox.innerHTML = "<p>Loading NASA notifications...</p>";

        try {

            const results = await Promise.allSettled([
                fetchDonki("FLR"),
                fetchDonki("CME"),
                fetchDonki("GST"),
                fetchDonki("SEP"),
                fetchDonki("notifications")
            ]);

            const [flares, cmes, storms, particles, notifications] = results;

            const getData = result =>
                result.status === "fulfilled" && Array.isArray(result.value)
                    ? result.value
                    : [];

            const flareData = getData(flares);
            const cmeData = getData(cmes);
            const stormData = getData(storms);
            const sepData = getData(particles);
            const notificationData = getData(notifications);

            document.getElementById("donkiFlareCount").textContent =
                flares.status === "fulfilled" ? flareData.length : "N/A";

            document.getElementById("donkiCmeCount").textContent =
                cmes.status === "fulfilled" ? cmeData.length : "N/A";

            document.getElementById("donkiStormCount").textContent =
                storms.status === "fulfilled" ? stormData.length : "N/A";

            document.getElementById("donkiSepCount").textContent =
                particles.status === "fulfilled" ? sepData.length : "N/A";

            const allFailed = results.every(
                result => result.status === "rejected"
            );

            if (allFailed) {
                throw new Error("All NASA DONKI requests failed.");
            }

            status.textContent =
                results.some(result => result.status === "rejected")
                    ? "🟡 PARTIAL NASA DATA"
                    : "🟢 NASA DATA CONNECTED";

            const combined = [
                ...flareData.map(event => ({
                    type: "Solar Flare",
                    emoji: "☀️",
                    event
                })),
                ...cmeData.map(event => ({
                    type: "Coronal Mass Ejection",
                    emoji: "🌪️",
                    event
                })),
                ...stormData.map(event => ({
                    type: "Geomagnetic Storm",
                    emoji: "🌍",
                    event
                })),
                ...sepData.map(event => ({
                    type: "Solar Energetic Particle",
                    emoji: "⚡",
                    event
                }))
            ];

            combined.sort((a, b) => {
                const dateA = new Date(
                    a.event.beginTime || a.event.startTime || a.event.eventTime || 0
                );
                const dateB = new Date(
                    b.event.beginTime || b.event.startTime || b.event.eventTime || 0
                );
                return dateB - dateA;
            });

            eventsBox.innerHTML = combined.length
                ? combined.slice(0, 15).map(item =>
                    renderEvents(
                        item.type,
                        [item.event],
                        item.emoji,
                        item.type
                    )
                ).join("")
                : "<p>No events found in the selected period.</p>";

            renderNotifications(notificationData);

        } catch (error) {

            console.error("DONKI loading error:", error);

            status.textContent = "🔴 CONNECTION ERROR";

            eventsBox.innerHTML = `
                <div class="donki-event-card">
                    <h3>NASA connection unavailable</h3>
                    <p>${safeText(error.message)}</p>
                    <p>Please try refreshing in a little while.</p>
                </div>
            `;

            notificationsBox.innerHTML =
                "<p>Notifications could not be loaded.</p>";

        } finally {

            refreshButton.disabled = false;
            refreshButton.textContent = "↻ REFRESH DATA";

        }
    }

});
