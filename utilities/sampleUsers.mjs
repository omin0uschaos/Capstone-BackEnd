const users = [
    {
    username: 'alindstrom',
    password: 'mochimonster1',
    portrait: 'images/portraits/alindstrom.jpg',
    isAdmin: false,
    rank: 'ENS',
    clearanceLevel: 'I',
    department: 'MED',
    title: 'Nurse',
    credits: 2500,
    taskList: [
      {
        taskname: 'Administer daily medication to patients',
        taskDetail: 'Ensure all patients receive their prescribed medications at the appropriate times.',
        taskComplete: false,
      },
      {
        taskname: 'Assist in medical examinations',
        taskDetail: 'Provide support to doctors during patient examinations and procedures.',
        taskComplete: false,
      },
      {
        taskname: 'Maintain medical supplies inventory',
        taskDetail: 'Regularly check and restock medical supplies to ensure availability for patient care.',
        taskComplete: false,
      }
    ],
    personalinfo: {
      first: 'Aiko Yoshiko',
      last: 'Lindström',
      nickname: 'Healer',
      age: 26,
      dob: 'May 18, 2583',
      enlistDate: 'October 14, 2605',
      marital: 'Single',
      homeplanet: 'Earth',
      military: 'EDF',
      education: 'B.Sc. in Nursing, M.A. in Holistic Medicine',
      favFood: 'Mochi stuffed with Swedish lingonberries',
      favSport: 'Archery',
      officialRecord: [
        {
          incidentId: 1,
          incidentDate: 'Nythiria, Xyr\'zul 3, 2583.1',
          incidentDetails: 'Minor injury during combat training.',
        },
        {
          incidentId: 2,
          incidentDate: 'October 14, 2605',
          incidentDetails: 'Lost communication with medical team during a rescue mission. No casualties.',
        }
      ]
    }
    },
    {
    username: "averitas",
    password: "soccerfan8",
    portrait: "images/portraits/averitas.jpg",
    isAdmin: false,
    rank: "ENS",
    clearanceLevel: "I",
    department: "ENG",
    title: "Mechanical Engineer",
    credits: 2300,
    taskList: [
      {
        taskname: "Calibrate fusion reactor core",
        taskDetail: "Ensure optimal performance and stability of the fusion reactor core.",
        taskComplete: false
      },
      {
        taskname: "Conduct routine maintenance on propulsion system",
        taskDetail: "Inspect and maintain propulsion system components to prevent malfunctions during operation.",
        taskComplete: false
      },
      {
        taskname: "Troubleshoot and repair faulty gyroscopes",
        taskDetail: "Identify and rectify issues with gyroscopic stabilization systems to ensure proper navigation.",
        taskComplete: false
      }
    ],
    personalinfo: {
      first: "Alexi",
      last: "Veritas",
      nickname: "Lex",
      age: 28,
      dob: "Aresol, Nocturnum 35, 2581 M1372.9",
      enlistDate: "November 8, 2608",
      marital: "Single",
      homeplanet: "Mars",
      military: "MSG",
      education: "Bachelor's in Astro-Engineering, Masters in Quantum Mechanics",
      favFood: "Lunar Berry Tart",
      favSport: "Zero-G Soccer",
      officialRecord: [
        {
          incidentId: 1,
          incidentDate: "2609-05-17",
          incidentDetails: "Minor injury during zero-gravity training exercise."
        }
      ]
    }
    },
    {
      username: "asoren",
      password: "waterboy22",
      portrait: "images/portraits/asoren.jpg",
      isAdmin: false,
      rank: "ENS",
      clearanceLevel: "IV",
      department: "SEC",
      title: "Aqua Guard",
      credits: 800,
      taskList: [
        {
          taskname: "Guard Duty on Stellara 9",
          taskDetail: "Oversee the security of the GaLéo research facility.",
          taskComplete: false,
        },
        {
          taskname: "Reconnaissance Mission on Kur'xal",
          taskDetail: "Collect intelligence on Krynnax activities.",
          taskComplete: true,
        },
      ],
      personalinfo: {
        first: "Arcturus",
        last: "Zephyr Soren",
        nickname: "Art",
        age: 24,
        dob: "QuilaMor, Sobeki 1, 2585.22 J215.4",
        enlistDate: "June 27, 2606",
        marital: "Single",
        homeplanet: "Europa",
        military: "JV",
        education: "Associate's in Maritime Security, Certificate in Advanced Tactical Operations",
        favFood: "Europa Ice Cake",
        favSport: "Hydro-Speedball",
        officialRecord: [
          {
            incidentId: 1,
            incidentDate: "February 3, 2605",
            incidentDetails: "Accident while transporting cargo, minor injury",
          }
        ],
      },
    },
    {
        username: "akellan",
        password: "password123",
        portrait: "images/portraits/akellan.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "II",
        department: "COMMS",
        title: "Communications Specialist",
        credits: 2000,
        taskList: [
          {
            taskname: "Frequency Calibration",
            taskDetail: "Calibrate the communication frequencies for better reception in the Asteroid Belt region.",
            taskComplete: false
          },
          {
            taskname: "Update Comms Protocol",
            taskDetail: "Update the ship-wide communication protocol to version 2.5.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Aria",
          last: "Elise Kellan",
          nickname: "Ari",
          age: 26,
          dob: "December 25, 2583",
          enlistDate: "October 2, 2590",
          marital: "Single",
          homeplanet: "Europa",
          military: "JV",
          education: "Bachelor’s in Linguistics and Computer Science, Certificate in Advanced Interstellar Communications",
          favFood: "Europa Gelato",
          favSport: "Astro-Volleyball",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Phorixal / Lux 2, Crepule 2, 2583.35 J215.2",
              incidentDetails: "Awarded for exceptional communication skills during the Nebula Expedition."
            },
            {
              incidentId: 2,
              incidentDate: "Zel'mar, Xyr'zul 0, 2583.-1 T89.06",
              incidentDetails: "Reprimanded for unauthorized frequency use during patrol duty."
            }
          ]
        }
      },
      {
        username: "alee",
        password: "stellarVoyage56!",
        portrait: "/images/portraits/alee.jpg",
        isAdmin: false,
        rank: "CAPT",
        clearanceLevel: "IV",
        department: "CMD",
        title: "Captain",
        credits: 12000,
        taskList: [
          {
            taskname: "Oversee Mars Terraforming Project",
            taskDetail: "Lead the initiative for the next phase of the Mars Terraforming Project, coordinating with engineers and scientists to ensure timely completion.",
            taskComplete: false,
          },
          {
            taskname: "Review Stellar Guard Recruit Training Program",
            taskDetail: "Evaluate the effectiveness of the current training program and implement improvements to enhance operational readiness.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Avery",
          last: "Lee",
          nickname: "Avi",
          age: 56,
          dob: "Marsol, Aresia 9, 2553 M1358",
          enlistDate: "November 8, 2572",
          marital: "Single",
          homeplanet: "Mars",
          military: "MSG",
          education: "Naval Academy on Earth, Advanced Studies in Astrogeology, Martian Academy of Advanced Sciences",
          favFood: "Martian Red Velvet Macarons",
          favSport: "Zero-G Skyrunning",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "February 12, 2590",
              incidentDetails: "Awarded the Star of Mars for bravery in the operation to rescue miners trapped in the Valles Marineris.",
            },
            {
              incidentId: 2,
              incidentDate: "July 29, 2594",
              incidentDetails: "Reprimanded for unauthorized use of experimental propulsion technology during a routine patrol, resulting in temporal displacement effects."
            }
          ]
        }
      },
      {
        username: "cfrost",
        password: "Enceladus#2585",
        portrait: "/images/portraits/cfrost.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "II",
        department: "COMMS",
        title: "Sensor Operator",
        credits: 1200,
        taskList: [
          {
            taskname: "Calibrate Deep Space Sensors",
            taskDetail: "Ensure the long-range sensors are calibrated to detect signals from the Kappa Sector.",
            taskComplete: false,
          },
          {
            taskname: "Decrypt Incoming Message",
            taskDetail: "Use the decryption software to interpret the encrypted message received from the allied ship in distress.",
            taskComplete: false,
          }
        ],
        personalinfo: {
          first: "Caelan",
          last: "Frost",
          nickname: "Ice",
          age: 24,
          dob: "Vexquaar, Florium 9, 2585.1386 E273.34",
          enlistDate: "November 8, 2606",
          marital: "Single",
          homeplanet: "Enceladus",
          military: "EUF",
          education: "Associate’s in Electronics and Sensory Technologies from Enceladus Technical Institute",
          favFood: "Mint Chocolate Chip Ice Cream",
          favSport: "Ice Hockey",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Aresol, Nocturnum 28, 2607 M1377",
              incidentDetails: "Awarded for exemplary performance in the operation of deep-space communications during the Sigma Crisis."
            },
            {
              incidentId: 2,
              incidentDate: "OrLéo, Perigis 12, 2608 L2495.7",
              incidentDetails: "Received a formal warning for bypassing security protocols during routine maintenance. The action, though against regulations, prevented a potential system failure."
            }
          ]
        },
      },
      {
        username: "eharkness",
        password: "Password123!",
        portrait: "/images/portraits/eharkness.jpg",
        isAdmin: false,
        rank: "No Rank",
        clearanceLevel: "No Rank",
        department: "MED",
        title: "Medical Doctor",
        credits: 5000,
        taskList: [
          {
            taskname: "Annual Health Checkup",
            taskDetail: "Conduct annual health assessments for all crew members.",
            taskComplete: false,
          },
          {
            taskname: "Update Medical Supplies",
            taskDetail: "Inventory and request replenishment of medical supplies.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Eira",
          last: "Gwenllian Harkness",
          nickname: "Doc Moonbeam",
          age: 37,
          dob: "CoLéo, Stellara 2, 2572 L2480.9",
          enlistDate: "November 8, 2603",
          marital: "Divorced",
          homeplanet: "Luna Prime",
          military: "Non-Military",
          education: "Bachelor's in Biology, Doctor of Medicine (MD) from Tycho City University, Harvard Medical School (Earth)",
          favFood: "Chocolate Lunar Lava Cake",
          favSport: "Synchronized swimming",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "June 15, 2604",
              incidentDetails: "Performed emergency surgery during unexpected meteor storm, saving three crew members."
            },
            {
              incidentId: 2,
              incidentDate: "April 22, 2605",
              incidentDetails: "Led medical team in containment and eradication of viral outbreak in hydroponic gardens."
            }
          ],
        },
      },
      {
        username: "ebrunson",
        password: "neuroParkour88!",
        portrait: "/images/portraits/ebrunson.jpg",
        isAdmin: false,
        rank: "No Rank",
        clearanceLevel: "No Rank",
        department: "MED",
        title: "Neurologist",
        credits: 5000,
        taskList: [
          {
            taskname: "Neuroplasticity Research",
            taskDetail: "Conduct a study on the effects of zero-gravity on neuroplasticity in astronauts.",
            taskComplete: false,
          },
          {
            taskname: "Parkour Therapy Session",
            taskDetail: "Lead a therapeutic parkour session for crew members to improve cognitive function.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Ephren",
          last: "Brunson",
          nickname: "Brainwave",
          age: 40,
          dob: "SteLéo, Umbra 13, 2570 L2479.0",
          enlistDate: "November 8, 2601",
          marital: "Single",
          homeplanet: "Luna Prime",
          military: "Non-Military",
          education: "MD in Neurology, Ph.D. in Cognitive Neuroscience from Titan Institute of Medical Sciences and Mars University for Post-Doctoral Research",
          favFood: "Neuron Candy",
          favSport: "Parkour",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "2592.5 L245",
              incidentDetails: "Awarded for innovative research on cognitive enhancement techniques for Mars colonization teams."
            },
            {
              incidentId: 2,
              incidentDate: "2598.3 L250",
              incidentDetails: "Commended for voluntary medical aid during the Ganymede Outpost epidemic."
            }
          ]
        },
      },
      {
        username: "imarlowe",
        password: "nebulaHealer42!",
        portrait: "/images/portraits/imarlowe.jpg",
        isAdmin: false,
        rank: "CDR",
        clearanceLevel: "IV",
        department: "MED",
        title: "Chief Medical Officer",
        credits: 2000,
        taskList: [
          {
            taskname: "Annual Health Checkup",
            taskDetail: "Conduct annual health checkups for all crew members aboard The Jupiter Vanguard.",
            taskComplete: false
          },
          {
            taskname: "Exo-Medicine Research",
            taskDetail: "Lead the research project on adapting exo-medicine for human physiology.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Isla",
          last: "Marlowe",
          nickname: "Doctor Beat Rice",
          age: 42,
          dob: "Valtorin, Kur'xal 2, 2567.-1 T88.51",
          enlistDate: "July 17, 2588",
          marital: "Widowed",
          homeplanet: "Titan",
          military: "JV",
          education: "Bachelor's in Biology, M.D., Fellowship in Exo-Medicine",
          favFood: "Nebula Cake",
          favSport: "Aero-Yoga",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "2590.05.16",
              incidentDetails: "Successfully treated a rare spaceborne pathogen outbreak in the crew."
            },
            {
              incidentId: 2,
              incidentDate: "2592.07.21",
              incidentDetails: "Awarded the Stellar Cross for bravery during the emergency evacuation of a research station on Enceladus."
            }
          ]
        },
      },
      {
        username: "sgrey",
        password: "enigmaAI_2024",
        portrait: "/images/portraits/sgrey.jpg",
        isAdmin: false,
        rank: "No Rank",
        clearanceLevel: "No Rank",
        department: "SPC",
        title: "AI Systems Analyst",
        credits: 2500,
        taskList: [
          {
            taskname: "Optimize Neural Networks",
            taskDetail: "Improve efficiency of the neural networks used for navigation by 15%.",
            taskComplete: false,
          },
          {
            taskname: "Anomaly Detection Module",
            taskDetail: "Develop an anomaly detection system to identify unknown space objects in real-time.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Silas",
          last: "Grey",
          nickname: "The Code Whisperer",
          age: 40,
          dob: "November 3, 2569",
          enlistDate: "May 1, 2605",
          marital: "Divorced, Single",
          homeplanet: "Earth",
          military: "EDF",
          education: "B.S. in Computer Science, Ph.D. in AI Systems & Robotics from University of Sydney, Caltech",
          favFood: "Dark Chocolate Soufflé",
          favSport: "Squash",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "April 15, 2610",
              incidentDetails: "Successfully mitigated a critical AI malfunction during a reconnaissance mission, preventing potential loss of the spacecraft."
            },
            {
              incidentId: 2,
              incidentDate: "June 22, 2612",
              incidentDetails: "Awarded for innovative AI contributions to deep space exploration tech."
            }
          ],
        },
      },
      {
        username: "egreyson",
        password: "QuantumRugby2580!",
        portrait: "/images/portraits/egreyson.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "II",
        department: "ENG",
        title: "Electrical Engineer",
        credits: 3800,
        taskList: [
          {
            taskname: "Upgrade Shield Generators",
            taskDetail: "Enhance the capacity of the shield generators to withstand solar flares.",
            taskComplete: false
          },
          {
            taskname: "Routine Maintenance of Warp Drive",
            taskDetail: "Conduct a full diagnostic and maintenance routine on the warp drive systems.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Eamon",
          last: "Earl Greyson",
          nickname: "Circuit",
          age: 29,
          dob: "Solixar / Lux 5, Crepule 1, 2580.54 J215",
          enlistDate: "October 9, 2601",
          marital: "Engaged",
          homeplanet: "Ganymede",
          military: "JV",
          education: "B.Tech in Electrical Engineering, M.S. in Advanced Circuit Design",
          favFood: "Quantum Jelly—A Ganymedian treat that changes flavors unpredictably",
          favSport: "Anti-Gravity Rugby",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "June 15, 2603",
              incidentDetails: "Led a successful emergency repair of the ship's oxygen recycling system during an unexpected failure."
            },
            {
              incidentId: 2,
              incidentDate: "March 22, 2604",
              incidentDetails: "Awarded the Jupiter Vanguard Medal of Technology for innovative improvements to the energy efficiency of the ship's propulsion systems."
            }
          ]
        }
      },
      {
        username: "elocke",
        password: "stellarVoyage32!",
        portrait: "/images/portraits/elocke.jpg",
        isAdmin: false,
        rank: "LCDR",
        clearanceLevel: "IV",
        department: "NAV",
        title: "Stellar Cartographer",
        credits: 1500,
        taskList: [
          {
            taskname: "Map Asteroid Belt Z-231",
            taskDetail: "Create a detailed map of the newly discovered asteroid belt located in the outer sectors of the Andromeda system.",
            taskComplete: false,
          },
          {
            taskname: "Update Jupiter Moons Atlas",
            taskDetail: "Revise and update the cartographic atlas of Jupiter's moons based on the latest exploration data.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Elara",
          last: "Locke",
          nickname: "Starlock",
          age: 32,
          dob: "Aethos / Lux 5, Galaxique 4, 2577.20 J214.7",
          enlistDate: "March 11, 2596",
          marital: "Single",
          homeplanet: "Ganymede",
          military: "JV",
          education: "Ganymede Polytechnic, Andromeda Star Academy (Earth) - Bachelor's in Astrophysics, Master's in Stellar Cartography",
          favFood: "Starry Night Tiramisu",
          favSport: "Zero-G Chess",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "May 22, 2601",
              incidentDetails: "Led a successful navigation team through the Kuiper Belt, charting 17 new pathways."
            },
            {
              incidentId: 2,
              incidentDate: "July 13, 2603",
              incidentDetails: "Resolved a critical error in the starship's nav-computer that saved the crew from a potential collision with a rogue comet."
            }
          ]
        }
      },
      {
        username: "econcord",
        password: "starFleet2023!",
        portrait: "/images/portraits/econcord.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "IV",
        department: "ENG",
        title: "Computer Systems Engineer",
        credits: 1900,
        taskList: [
          {
            taskname: "System Upgrade",
            taskDetail: "Upgrade the starship's operating system to improve efficiency and security.",
            taskComplete: false,
          },
          {
            taskname: "Network Maintenance",
            taskDetail: "Perform routine maintenance on the starship's intergalactic communication network.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Emerson",
          last: "Concord",
          nickname: "Em",
          age: 20,
          dob: "March 3, 2589",
          enlistDate: "January 19, 2609",
          marital: "Single",
          homeplanet: "Earth",
          military: "EDF",
          education: "Titan Institute of Technological Advancement",
          favFood: "Quantum Chocolate Parfait",
          favSport: "Badminton",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "February 12, 2610",
              incidentDetails: "Awarded for exceptional technical skill during an unexpected system failure that threatened navigation."
            },
            {
              incidentId: 2,
              incidentDate: "July 8, 2610",
              incidentDetails: "Reprimanded for unauthorized modification of the starship's AI personality protocols."
            }
          ]
        }
      },
      {
        username: "fsterling",
        password: "flyHigh2585!",
        portrait: "/images/portraits/fsterling.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "I",
        department: "NAV",
        title: "Pilot",
        credits: 600,
        taskList: [
          {
            taskname: "Calibrate NAV Systems",
            taskDetail: "Ensure the starship's navigation systems are calibrated for the upcoming mission to Enceladus.",
            taskComplete: false
          },
          {
            taskname: "Flight Simulation",
            taskDetail: "Complete the advanced lunar landing simulation with a score of 95% or higher.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Flynn",
          last: "Sterling",
          nickname: "Thorn",
          age: 24,
          dob: "OrLéo, Selunis 5, 2585 L2493.5",
          enlistDate: "August 8, 2604",
          marital: "Single",
          homeplanet: "Luna Prime",
          military: "LSC",
          education: "Associate Degree in Aeronautics, Certified UPA Pilot from Lunar Flight Academy and UPA Navigational and Tactical Training",
          favFood: "Mooncake",
          favSport: "Rugby",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "May 12, 2605",
              incidentDetails: "Awarded for exceptional bravery during the emergency evacuation of OrLéo research facility."
            },
            {
              incidentId: 2,
              incidentDate: "September 30, 2606",
              incidentDetails: "Reprimanded for unauthorized lunar rover race resulting in minor property damage."
            }
          ]
        }
      },
      {
        username: "hjuadera",
        password: "StellarMedic*2581",
        portrait: "/images/portraits/hjuadera.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "I",
        department: "MED",
        title: "Paramedic",
        credits: 1000,
        taskList: [
          {
            taskname: "Emergency Response Drill",
            taskDetail: "Conduct a full-scale emergency medical response drill for potential space station incidents.",
            taskComplete: false
          },
          {
            taskname: "Medicinal Herb Research",
            taskDetail: "Research and present findings on the use of traditional Mesoamerican medicinal herbs in treating common ailments in space.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Hana Xochitl",
          last: "Juadera",
          nickname: "Quetzal",
          age: 28,
          dob: "February 23, 2581", 
          enlistDate: "April 3, 2603",
          marital: "Single",
          homeplanet: "Earth",
          military: "EDF",
          education: "B.Sc. in Paramedicine, M.A. in Mesoamerican Medicine from Mexico City School of Emergency Medicine and Tenochtitlan University for the Study of Mesoamerican Medicine",
          favFood: "Tres Leches Cake infused with cacao and cinnamon",
          favSport: "Pelota Mixteca",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "June 15, 2604",
              incidentDetails: "Successfully managed a life-threatening incident involving acute radiation exposure to a crew member during an unscheduled solar flare."
            },
            {
              incidentId: 2,
              incidentDate: "November 22, 2605",
              incidentDetails: "Awarded for exemplary service and dedication during the outbreak of the Zeta-5 viral strain on board the USS Voyager."
            }
          ]
        }
      },
      {
        username: "jyasin",
        password: "st4rNavigator!",
        portrait: "/images/portraits/jyasin.jpg",
        isAdmin: false,
        rank: "CDR",
        clearanceLevel: "III",
        department: "CMD",
        title: "Commander of The Jupiter Vanguard",
        credits: 12000,
        taskList: [
          {
            taskname: "Vanguard Leadership",
            taskDetail: "Lead the Jupiter Vanguard in the upcoming strategic drill around Ganymede's orbit.",
            taskComplete: false,
          },
          {
            taskname: "Astro-Navigation Course",
            taskDetail: "Conduct an advanced astro-navigation course for junior officers aboard the flagship.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Jadranko",
          last: "Yasin",
          nickname: "Iron Compass",
          age: 41,
          dob: "Solixar / Lux 1, Galaxique 1, 2568.25 J214",
          enlistDate: "November 7, 2587",
          marital: "Married",
          homeplanet: "Ganymede",
          military: "JV",
          education: "Masters in Astro-Navigation, Officer's Training Certification",
          favFood: "Stardust Pudding, a Ganymede delicacy",
          favSport: "Zero-G Chess",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "January 15, 2592",
              incidentDetails: "Successfully navigated through an uncharted asteroid field, saving the fleet from potential disaster.",
            },
            {
              incidentId: 2,
              incidentDate: "March 22, 2594",
              incidentDetails: "Led a diplomatic mission to Enceladus, establishing a pivotal alliance with its inhabitants.",
            }
          ],
        },
      },
      {
        username: "jconcord",
        password: "SlimJim!",
        portrait: "/images/portraits/jconcord.jpg",
        isAdmin: false,
        rank: "LCDR",
        clearanceLevel: "III",
        department: "ENG",
        title: "Chief Engineer",
        credits: 15000,
        taskList: [
          {
            taskname: "Quantum Drive Maintenance",
            taskDetail: "Perform routine maintenance and calibration of the quantum drive to ensure optimal performance for upcoming mission.",
            taskComplete: false,
          },
          {
            taskname: "Upgrade Energy Capacitors",
            taskDetail: "Research and implement upgrades to the ship's energy capacitors to increase efficiency and power output.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "James",
          last: "Concord",
          nickname: "Jim",
          age: 46,
          dob: "April 12, 2563",
          enlistDate: "January 19, 2594",
          marital: "Married",
          homeplanet: "Earth",
          military: "EDF",
          education: "Doctorate in Advanced Engineering and Quantum Mechanics from the Titan Institute of Technological Advancement",
          favFood: "Biscuits and Tea",
          favSport: "Chess",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 15, 2602",
              incidentDetails: "Led the emergency repair team during an unexpected quantum drive malfunction near the Kuiper Belt, preventing a potential mission failure.",
            },
            {
              incidentId: 2,
              incidentDate: "June 22, 2605",
              incidentDetails: "Received commendation for the development of a new energy distribution algorithm, increasing efficiency by 20%."
            }
          ],
        },
      },
      {
        username: "jhale",
        password: "Tactical#32",
        portrait: "/images/portraits/jhale.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "I",
        department: "SEC",
        title: "Tactical Officer",
        credits: 5000,
        taskList: [
          {
            taskname: "Secure Perimeter",
            taskDetail: "Conduct a thorough security sweep of the starship's perimeter to ensure all access points are secure against potential threats.",
            taskComplete: false,
          },
          {
            taskname: "Tactical Drills",
            taskDetail: "Lead the security team through advanced tactical drills designed for potential alien encounter scenarios.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Jaxon",
          last: "Hale",
          nickname: "Thunderstrike",
          age: 32,
          dob: "Nythiria, Thal'kai 3, 2577.1 T88.86",
          enlistDate: "November 18, 2596",
          marital: "Single",
          homeplanet: "Titan",
          military: "MSG",
          education: "Bachelor's in Military Science, Advanced Warfare Tactics Certificate from Titan Military Academy, UPA Advanced Tactical School",
          favFood: "Banana Nut Protein Bars",
          favSport: "Krav Maga",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 12, 2601",
              incidentDetails: "Led a successful defense against pirate raiders targeting the starship's cargo hold. Employed non-lethal tactics to ensure minimal harm while securing the safety of the crew and resources.",
            },
            {
              incidentId: 2,
              incidentDate: "June 5, 2602",
              incidentDetails: "Negotiated peace terms with a potentially hostile alien species encountered during a reconnaissance mission. Demonstrated exceptional diplomatic skills, preventing conflict and establishing a basis for future communications.",
            }
          ]
        },
      },
      {
        username: "jkane",
        password: "complexOracle123!",
        portrait: "/images/portraits/jkane.jpg",
        isAdmin: false,
        rank: "CDR",
        clearanceLevel: "IV",
        department: "SCI",
        title: "Chief Science Officer",
        credits: 5000,
        taskList: [
          {
            taskname: "Quantum Entanglement Study",
            taskDetail: "Lead a team to explore quantum entanglement for faster-than-light communication.",
            taskComplete: false,
          },
          {
            taskname: "Astrobiological Field Research",
            taskDetail: "Conduct field research on Enceladus to study extremophile organisms.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Jonas",
          last: "Kane",
          nickname: "Oracle",
          age: 38,
          dob: "Zaquaar, Terrarium 20, 2571.3608 E271.86",
          enlistDate: "September 24, 2593",
          marital: "Married",
          homeplanet: "Enceladus",
          military: "EUF",
          education: "PhD in Theoretical Physics, Masters in Astrobiology from Enceladus Institute for Advanced Study; Luna University",
          favFood: "Molecular Gastronomy Ice Cream",
          favSport: "Cosmic Billiards",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Zaquaar, Terrarium 5, 2595",
              incidentDetails: "Discovered a new form of ice with potential life-supporting qualities."
            },
            {
              incidentId: 2,
              incidentDate: "Krynnax, Kur'xal 10, 2596",
              incidentDetails: "Led a successful emergency repair of the lab's life support system during a solar storm."
            }
          ],
        },
      },
      {
        username: "kdraven",
        password: "voyageSecure!26",
        portrait: "/images/portraits/kdraven.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "IV",
        department: "LOG",
        title: "Inventory Specialist",
        credits: 5000,
        taskList: [
          {
            taskname: "Inventory Audit",
            taskDetail: "Conduct a comprehensive audit of the starship's medical supplies ahead of the next mission.",
            taskComplete: false,
          },
          {
            taskname: "Supply Chain Optimization",
            taskDetail: "Implement a new software solution for optimizing the starship's supply chain logistics.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Kael",
          last: "Draven",
          nickname: "Wraith",
          age: 26,
          dob: "XyloTwi, Sobeki 3, 2583.31 J215.2",
          enlistDate: "June 2, 2602",
          marital: "Engaged",
          homeplanet: "Europa",
          military: "Non-Military",
          education: "Europan Institute of Maritime Management, UPA Officer's Training Program - Bachelor’s in Logistics and Supply Chain Management",
          favFood: "Seaweed Gelato",
          favSport: "Subaquatic Rugby",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "2585.45 J220.5",
              incidentDetails: "Led a successful emergency supply retrieval mission during an unexpected food shortage on Ganymede."
            },
            {
              incidentId: 2,
              incidentDate: "2587.89 J224.3",
              incidentDetails: "Awarded for innovative logistical solutions that reduced supply chain costs by 30%."
            }
          ],
        },
      },
      {
        username: "kbrennan",
        password: "MartianSecur!ty2023",
        portrait: "/images/portraits/kbrennan.jpg",
        isAdmin: false,
        rank: "LCDR",
        clearanceLevel: "II",
        department: "SEC",
        title: "Chief Security Officer",
        credits: 1900,
        taskList: [
          {
            taskname: "Upgrade Security Protocols",
            taskDetail: "Review and enhance the security protocols for all Martian Stellar Guard outposts.",
            taskComplete: false
          },
          {
            taskname: "Krav Maga Training Session",
            taskDetail: "Conduct a Space Krav Maga training session for the security team.",
            taskComplete: true
          },
          {
            taskname: "Inspect Hangar Security",
            taskDetail: "Complete a thorough inspection of hangar security systems and update access codes.",
            taskComplete: false
          }
        ],
        personalinfo: {
          first: "Kai",
          last: "Brennan",
          nickname: "K.O.",
          age: 39,
          dob: "August 15, 2570",
          enlistDate: "October 2, 2590",
          marital: "Single",
          homeplanet: "Mars",
          military: "MSG",
          education: "Mars Military Academy, UPA Advanced Security Training Center - Bachelor's in Criminology, Advanced Certificate in Space Security",
          favFood: "Martian Red Velvet Cake",
          favSport: "Space Krav Maga",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 5, 2605",
              incidentDetails: "Led a successful counter-espionage operation against lunar smugglers."
            },
            {
              incidentId: 2,
              incidentDate: "July 22, 2608",
              incidentDetails: "Received commendation for developing an advanced surveillance system for Martian outposts."
            }
          ]
        },
      },
      {
        username: "lmiyazaki",
        password: "starDust34!",
        portrait: "/images/portraits/lmiyazaki.jpg",
        isAdmin: false,
        rank: "CDR",
        clearanceLevel: "IV",
        department: "SCI",
        title: "Celestial Anthropologist",
        credits: 2500,
        taskList: [
          {
            taskname: "Celestial Map Update",
            taskDetail: "Update the star maps with the latest data from the Enceladus expedition.",
            taskComplete: false
          },
          {
            taskname: "Xenocultural Lecture",
            taskDetail: "Prepare and deliver a lecture on Xenocultural Studies for the crew.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Lily Naomi",
          last: "Miyazaki",
          nickname: "Mystic Lily",
          age: 34,
          dob: "Aethos / Lux 7, Nebulique 2, 2575.50 J214.5", 
          enlistDate: "November 8, 2595",
          marital: "Divorced",
          homeplanet: "Ganymede",
          military: "JV",
          education: "Ganymede Elite Academy, Lunar University, UPA Advanced Sciences Institute. Degrees: Bachelor’s in Comparative Mythology, Master’s in Xenocultural Studies, Ph.D. in Celestial Anthropology",
          favFood: "Stardust Gelato",
          favSport: "Intergalactic Parkour",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "ZephyZen, Sobeki 16, 2580",
              incidentDetails: "Led a successful negotiation with the ZephyrZenians, preventing a potential conflict over mining rights."
            },
            {
              incidentId: 2,
              incidentDate: "Vexquaar, Celestium 20, 2582",
              incidentDetails: "Discovered a rare celestial artifact, shedding new light on ancient interstellar navigation techniques."
            }
          ]
        }
      },
      {
        username: "lwolfe",
        password: "Enceladus$Explorer2023",
        portrait: "/images/portraits/lwolfe.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "III",
        department: "SCI",
        title: "Chemist",
        credits: 2100,
        taskList: [
          {
            taskname: "Synthesize Cryosugar",
            taskDetail: "Develop a more efficient synthesis process for Cryosugar Cubes using local resources.",
            taskComplete: false,
          },
          {
            taskname: "Biochemical Survey",
            taskDetail: "Conduct a biochemical survey of Enceladus' subsurface ocean to identify potential life.",
            taskComplete: false,
          }
        ],
        personalinfo: {
          first: "Luca",
          last: "Wolfe",
          nickname: "Lu-c",
          age: 27,
          dob: "Taquaar, Terrarium 16, 2582.1386 E273.02",
          enlistDate: "November 8, 2603",
          marital: "Engaged",
          homeplanet: "Enceladus",
          military: "EUF",
          education: "Bachelor of Science in Chemistry, Master's in Biochemical Engineering from Enceladus Institute for Advanced Sciences and Stanford University",
          favFood: "Cryosugar Cubes",
          favSport: "Quidditch",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Terrasol, Terranum 52, 2605 M1373.4",
              incidentDetails: "Commended for innovative research in the synthesis of Cryosugar Cubes, contributing to the sustainability of Enceladian colonies."
            },
            {
              incidentId: 2,
              incidentDate: "Lunthora / Lux 2, Etoilique 5, 2604 J215.1",
              incidentDetails: "Received a reprimand for unauthorized use of lab equipment during off-hours, resulting in a minor lab accident with no injuries."
            }
          ]
        },
      },
      {
        username: "msoren",
        password: "encrypt!Galaxy21",
        portrait: "/images/portraits/msoren.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "II",
        department: "INT",
        title: "Cryptographer",
        credits: 1600,
        taskList: [
          {
            taskname: "Decrypt Enemy Codes",
            taskDetail: "Analyze and decrypt intercepted communications from the Mars Rebellion.",
            taskComplete: false,
          },
          {
            taskname: "Secure Comms Protocols",
            taskDetail: "Develop a new encryption protocol for secure communications within The Jupiter Vanguard.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Maya",
          last: "Soren",
          nickname: "Nova",
          age: 21,
          dob: "ZephyTwi, Sobeki 3, 2588.22 J215.6",
          enlistDate: "November 8, 2608",
          marital: "Single",
          homeplanet: "Europa",
          military: "JV",
          education: "Master's Degree in Cryptography and Information Security from Europa Institute of Technological Advancement",
          favFood: "Galactic Gelato",
          favSport: "Cyber Orienteering",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Stellara 10, 2610 L2496.4",
              incidentDetails: "Awarded for exceptional bravery during the encryption of communications in the Battle of Phobos."
            },
            {
              incidentId: 2,
              incidentDate: "Aurique 7, 2611 J215.6",
              incidentDetails: "Spearheaded the development of a quantum encryption algorithm, significantly enhancing fleet security."
            }
          ]
        }
      },
      {
        username: "msato",
        password: "stellarEngineer88!",
        portrait: "/images/portraits/msato.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "IV",
        department: "ENG",
        title: "Mechanical Engineer",
        credits: 1200,
        taskList: [
          {
            taskname: "Propulsion System Overhaul",
            taskDetail: "Conduct a full diagnostic and overhaul of the starship's propulsion systems to improve efficiency and output.",
            taskComplete: false
          },
          {
            taskname: "Emergency Hull Repair",
            taskDetail: "Respond to a micro-meteorite impact on the starboard hull, ensuring structural integrity and safety.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Mia",
          last: "Sato",
          nickname: "Sparky",
          age: 28,
          dob: "Astrosol, Tharsium 19, 2581 M1372.9",
          enlistDate: "July 1, 2601",
          marital: "Single",
          homeplanet: "Mars",
          military: "MSG",
          education: "Bachelor's in Aerospace Engineering, Master's in Advanced Propulsion Systems from Mars Institute of Technology and UPA Engineering Corps Training Academy",
          favFood: "Lava Cake",
          favSport: "Parkour",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "2583 M1379.2",
              incidentDetails: "Led a successful emergency repair mission on the outer sensors array during a solar storm."
            },
            {
              incidentId: 2,
              incidentDate: "2584 M1384.5",
              incidentDetails: "Awarded the Martian Valor for quick thinking that prevented a catastrophic system failure during hyperdrive testing."
            }
          ]
        }
      }, 
      {
        username: "mvlastimil",
        password: "StellarGuard42!",
        portrait: "/images/portraits/mvlastimil.jpg",
        isAdmin: false,
        rank: "PO",
        clearanceLevel: "II",
        department: "LOG",
        title: "Supply Officer",
        credits: 1500,
        taskList: [
          {
            taskname: "Supply Inventory Audit",
            taskDetail: "Conduct a comprehensive audit of all supplies in the cargo bay to ensure readiness for the next mission.",
            taskComplete: false
          },
          {
            taskname: "Martian Cacti Candy Procurement",
            taskDetail: "Source and procure a batch of Mars-grown Cacti Candy for the crew to boost morale.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Mirek",
          last: "Radovan Vlastimil",
          nickname: "Drifter",
          age: 27,
          dob: "Deimosol, Vallesium 13, 2582 M1373.4",
          enlistDate: "September 29, 2608",
          marital: "Single",
          homeplanet: "Mars",
          military: "MSG",
          education: "Mars Orphanage Schooling System, Basic UPA Training",
          favFood: "Mars-grown Cacti Candy",
          favSport: "Martian Alley-Dodge",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 12, 2610",
              incidentDetails: "Awarded for bravery during an unexpected meteor shower that threatened the cargo bay."
            },
            {
              incidentId: 2,
              incidentDate: "July 7, 2612",
              incidentDetails: "Reprimanded for unauthorized use of supply drones in a makeshift game of Martian Alley-Dodge."
            }
          ]
        }
      },
      {
        username: "nravenna",
        password: "starComms2023!",
        portrait: "/images/portraits/nravenna.jpg",
        isAdmin: false,
        rank: "LCDR",
        clearanceLevel: "III",
        department: "COMMS",
        title: "Chief Communications Officer",
        credits: 15000,
        taskList: [
          {
            taskname: "Interstellar Message Decryption",
            taskDetail: "Decrypt the newly received message from the unidentified vessel orbiting Ganymede.",
            taskComplete: false,
          },
          {
            taskname: "Communication Systems Upgrade",
            taskDetail: "Oversee the upgrade of the ship's communication systems for enhanced intergalactic reach.",
            taskComplete: true,
          }
        ],
        personalinfo: {
          first: "Noelle",
          last: "Ravenna",
          nickname: "Siren",
          age: 40,
          dob: "Valtorin, N'vaxt 2, 2569.2 T88.58",
          enlistDate: "February 27, 2589",
          marital: "Single",
          homeplanet: "Titan",
          military: "TS",
          education: "Bachelor of Science in Linguistic Computing, Master's in Intergalactic Communications",
          favFood: "Stardust Macarons",
          favSport: "Gravitational Parkour",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 12, 2592",
              incidentDetails: "Resolved a critical communication failure during the meteor storm encounter near Jupiter."
            },
            {
              incidentId: 2,
              incidentDate: "June 5, 2594",
              incidentDetails: "Awarded for excellence in the development of a new encryption protocol that secured ship-to-ship communications."
            }
          ]
        }
      },
      {
        username: "nvoss",
        password: "StarGazer!233",
        portrait: "/images/portraits/nvoss.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "I",
        department: "SEC",
        title: "Arms Officer",
        credits: 1200,
        taskList: [
          {
            taskname: "Weapon System Calibration",
            taskDetail: "Calibrate the new X-52 Laser Cannons for optimal performance.",
            taskComplete: false
          },
          {
            taskname: "Security Protocol Update",
            taskDetail: "Implement the latest security protocols to enhance ship safety.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Nyx",
          last: "Artemisia Voss",
          nickname: "Artemis",
          age: 33,
          dob: "Zel'mar, Draa'koth 0, 2576.-4 T88.82",
          enlistDate: "January 15, 2595",
          marital: "Single",
          homeplanet: "Titan",
          military: "TS",
          education: "Bachelor's in Military Science, Online Certificate in Advanced Weapons Engineering",
          favFood: "Dark Chocolate Grenades",
          favSport: "Laser Tag and Cyber Archery",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "March 12, 2596",
              incidentDetails: "Successfully thwarted a cyber-attack on the ship's mainframe."
            },
            {
              incidentId: 2,
              incidentDate: "July 29, 2597",
              incidentDetails: "Led a successful rescue mission on Enceladus, recovering hostages with minimal casualties."
            }
          ]
        }
      },
      {
        username: "qrourke",
        password: "StellarWhisper42!",
        portrait: "/images/portraits/qrourke.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "II",
        department: "SCI",
        title: "Xenobiologist",
        credits: 2000,
        taskList: [
          {
            taskname: "Exobiology Research",
            taskDetail: "Complete analysis of microbial life forms on Enceladus.",
            taskComplete: false
          },
          {
            taskname: "Interstellar Parkour Tournament Prep",
            taskDetail: "Organize the annual interstellar parkour event for the crew.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Quinlan",
          last: "Rourke",
          nickname: "Q, The Life Whisperer",
          age: 34,
          dob: "Krynnax, N'vaxt 1, 2575.0 T88.79",
          enlistDate: "June 12, 2599",
          marital: "Single",
          homeplanet: "Titan",
          military: "EUF",
          education: "Ph.D. in Xenobiology, Bachelor’s in Environmental Science from Titan University of Natural Sciences and UPA Academy of Biological Studies",
          favFood: "Titan Toffee Cake",
          favSport: "Interstellar Parkour",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Galacteon / Lux 4, 2579",
              incidentDetails: "Awarded for innovative research in exobiology that led to a breakthrough in understanding microbial life on icy moons."
            },
            {
              incidentId: 2,
              incidentDate: "Astrosol, Marinum 37, 2582",
              incidentDetails: "Commended for bravery during an unexpected meteor shower that threatened the research outpost on Mars."
            }
          ]
        }
      },
      {
        username: "rsylver",
        password: "PolyglotVoyager#2585",
        portrait: "/images/portraits/rsylver.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "II",
        department: "COMMS",
        title: "Translator",
        credits: 5000,
        taskList: [
          {
            taskname: "Translate Diplomatic Message",
            taskDetail: "Translate the latest diplomatic message received from the Zeta Reticuli ambassadors.",
            taskComplete: false,
          },
          {
            taskname: "Linguistic Database Update",
            taskDetail: "Update the ship's linguistic database with the latest discoveries from the Enceladus outpost.",
            taskComplete: true,
          },
        ],
        personalinfo: {
          first: "Ri'ena",
          last: "Sylver",
          nickname: "Polyglot",
          age: 24,
          dob: "Krynnax, Kur'xal 1, 2585.2 T89.13",
          enlistDate: "June 20, 2608",
          marital: "Single",
          homeplanet: "Titan",
          military: "JV",
          education: "B.A. in Linguistic Anthropology, M.A. in Intergalactic Communication from Titan Polyglot Academy, UPA Academy for Linguistic Excellence",
          favFood: "LinguaBites",
          favSport: "Cosmo-Badminton",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Zaquaar, Florium 28, 2609",
              incidentDetails: "Successfully mediated a potential conflict between two crew members from different planetary backgrounds, showcasing exceptional communication skills and cultural sensitivity.",
            },
            {
              incidentId: 2,
              incidentDate: "Solixar, Lux 17, 2610",
              incidentDetails: "Identified and corrected a critical translation error in the ship's AI communication protocol with Enceladus mining drones, preventing a major operational mishap.",
            },
          ],
        },
      },
      {
        username: "sorion",
        password: "starlight#2023",
        portrait: "/images/portraits/sorion.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "IV",
        department: "SCI",
        title: "Astrophysicist",
        credits: 1500,
        taskList: [
          {
            taskname: "Analyze spectral data from Enceladus",
            taskDetail: "Use the lab's spectrometer to examine the collected ice samples.",
            taskComplete: false,
          },
          {
            taskname: "Prepare Europa mission briefing",
            taskDetail: "Compile the latest findings for the upcoming Europa deep dive.",
            taskComplete: true,
          },
        ],
        personalinfo: {
          first: "Selena",
          last: "O’rion",
          nickname: "Starlight",
          age: 30,
          dob: "Phobosol, Aresia 38, 2579 M1371.8", 
          enlistDate: "November 2, 2598",
          marital: "Engaged",
          homeplanet: "Mars",
          military: "MSG",
          education: "Ph.D. in Astrophysics, Master’s in Astrobiology",
          favFood: "Martian Chocolate Lava Cake",
          favSport: "Gymnastics",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "ZephyZen, Sobeki 2, 2581",
              incidentDetails: "Led a successful emergency repair of the observatory's main telescope."
            },
            {
              incidentId: 2,
              incidentDate: "Tiquaar, Nocturium 12, 2583",
              incidentDetails: "Discovered a minor comet, subsequently named O’rion’s Comet."
            },
          ],
        },
      },
      {
        username: "tvega",
        password: "starPath3ncrypt!d",
        portrait: "/images/portraits/tvega.jpg",
        isAdmin: false,
        rank: "ENS",
        clearanceLevel: "IV",
        department: "NAV",
        title: "Lead Navigator",
        credits: 1500,
        taskList: [
          {
            taskname: "Astrogation Chart Updates",
            taskDetail: "Update the starship's astrogation charts for the upcoming mission to the Zephyr Belt.",
            taskComplete: false
          },
          {
            taskname: "Navigational Software Debug",
            taskDetail: "Collaborate with engineering to debug the new navigational software glitch reported during the last drill.",
            taskComplete: false
          }
        ],
        personalinfo: {
          first: "Thalia",
          last: "Vega",
          nickname: "Tavi",
          age: 26,
          dob: "Phobosol, Phobium 28, 2583 M1373.9",
          enlistDate: "April 4, 2606",
          marital: "Engaged",
          homeplanet: "Mars",
          military: "MSG",
          education: "Bachelor's in Aeronautical Engineering from Mars University of Aeronautics and Advanced Training in Astrogation from UPA Academy",
          favFood: "Martian Magma Cake",
          favSport: "Anti-Gravity Badminton",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Galaxique 5, 2608",
              incidentDetails: "Awarded the Stellar Navigator Medal for exceptional performance in navigating through an uncharted asteroid field."
            },
            {
              incidentId: 2,
              incidentDate: "ZephyMor, Sobeki 15, 2609",
              incidentDetails: "Led a successful rescue mission for a stranded research vessel in the Outer Rim, demonstrating outstanding leadership and navigational skills."
            }
          ]
        }
      },
      {
        username: "vraith",
        password: "PropulsionR0ck3t!",
        portrait: "/images/portraits/vraith.jpg",
        isAdmin: false,
        rank: "LT",
        clearanceLevel: "II",
        department: "ENG",
        title: "Propulsion Engineer",
        credits: 4200,
        taskList: [
          {
            taskname: "Engine Optimization",
            taskDetail: "Optimize the starship's engine for better fuel efficiency on long-haul missions.",
            taskComplete: false
          },
          {
            taskname: "Propulsion System Diagnostics",
            taskDetail: "Run a full diagnostic on the propulsion system after the last mission encountered unexpected asteroid fields.",
            taskComplete: true
          }
        ],
        personalinfo: {
          first: "Vanessa",
          last: "Raith",
          nickname: "Rocket",
          age: 32,
          dob: "Solum, Solisium 50, 2577 M1370.7",
          enlistDate: "November 8, 2596",
          marital: "Single",
          homeplanet: "Mars",
          military: "MSG",
          education: "Mars University of Technology (MUT), Naval Postgraduate School - B.Eng in Aerospace Engineering, M.Sc. in Advanced Propulsion Systems",
          favFood: "Martian Mud Pie",
          favSport: "Rugby",
          officialRecord: [
            {
              incidentId: 1,
              incidentDate: "Solixar / Lux 18, Lumelle 3, 2600 J214.7",
              incidentDetails: "Distinguished bravery during an emergency hull breach caused by micro-meteoroids."
            },
            {
              incidentId: 2,
              incidentDate: "Zaquaar, Glacium 29, 2602 E272.49",
              incidentDetails: "Innovative repair of the propulsion system that saved the mission during power failure."
            }
          ]
        }
      },
      {
        username: 'znightshade',
        password: 'Shadow@27',
        portrait: '/images/portraits/znightshade.jpg',
        isAdmin: false,
        rank: 'ENS',
        clearanceLevel: 'III',
        department: 'INT',
        title: 'Scout',
        credits: 0,
        taskList: [
            { 
            taskname: 'Investigate anomalous signal', 
            taskDetail: 'Analyze the signal coming from the nearby asteroid cluster.', taskComplete: false 
            },
            { 
            taskname: 'Underwater reconnaissance', 
            taskDetail: 'Conduct surveillance of underwater facilities on Europa.', taskComplete: false 
            },
            { 
            taskname: 'Report on geological anomalies', 
            taskDetail: 'Document any unusual geological formations observed during planetary scans.', 
            taskComplete: false 
            }
        ],
        personalinfo: {
          first: 'Zara',
          last: 'Nightshade',
          nickname: 'Shadow',
          age: 24,
          dob: 'XyloMor, Sobeki 1, 2585.19 J215.4',
          enlistDate: 'April 1, 2607',
          marital: 'Single',
          homeplanet: 'Europa',
          military: 'JV',
          education: 'Europa Frontier Academy, A.A. in Reconnaissance and Surveillance',
          favFood: 'Europa Ice Cream, made from local bioluminescent algae',
          favSport: 'Underwater Archery',
          officialRecord: [
            { 
            incidentId: 1, 
            incidentDate: 'Unknown', 
            incidentDetails: 'Classified' 
            },
            { 
            incidentId: 2, 
            incidentDate: 'Unknown', 
            incidentDetails: 'Classified' 
            }
          ]
        }
      }, 
      {
        username: 'admin',
        password: 'Pnbis7WBYd',
        portrait: '/images/portraits/moose.jpg',
        isAdmin: true,
        rank: 'No Rank',
        clearanceLevel: 'IV',
        department: 'CMD',
        title: 'System Admin',
        credits: 1610,
        taskList: [
          { 
          taskname: 'Finish Capstone', 
          taskDetail: 'complete capstone project to graduate from the Per Scholas Bootcamp', taskComplete: false 
          },
          { 
            taskname: 'Get A Software Engineering Job', 
            taskDetail: 'Obtain an Entry Level software engineering job', taskComplete: false 
            }
      ],
        personalinfo: {
          first: 'Moose',
          last: 'De La Russe',
          nickname: 'Moose',
          age: 36,
          dob: 'XyloTwi, Sobeki 3, 1987.11 J165.5',
          enlistDate: '2006-06-03',
          marital: 'Married',
          homeplanet: 'Europa',
          military: 'Non-Military',
          education: 'Art Institute of California - Hollywood, Bachelors in Media Arts & Animation',
          favFood: 'Steak and Baked Potato',
          favSport: 'Basketball',
          officialRecord: [],
        },
      }
];

export { users };