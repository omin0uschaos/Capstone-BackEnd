const inventoryList = [
    {
      itemName: 'Nutrition Bars',
      itemType: 'Food',
      itemQuantity: 5000,
      itemDescription: 'High-calorie bars designed for space travel. Compact and long-lasting.',
      canSynthesize: true,
      synthRecipe: ['24707191', '70837954'],
    },
    {
      itemName: 'First Aid Kits',
      itemType: 'Medical',
      itemQuantity: 100,
      itemDescription: 'Comprehensive medical kits for treating a wide range of injuries and conditions.',
      canSynthesize: false,
    },
    {
      itemName: 'Space Suits',
      itemType: 'Equipment',
      itemQuantity: 50,
      itemDescription: 'Advanced space suits providing mobility and protection in space environments.',
      canSynthesize: true,
      synthRecipe: ['66958749', '39130267'],
    },
    {
      itemName: 'Multitools',
      itemType: 'Tool',
      itemQuantity: 200,
      itemDescription: 'Versatile hand tools for repairs and maintenance tasks.',
      canSynthesize: true,
      synthRecipe: ['27238748', '29247164'],
    },
    {
      itemName: 'Fuel Cells',
      itemType: 'Fuel',
      itemQuantity: 300,
      itemDescription: 'High-efficiency fuel cells for auxiliary power systems.',
      canSynthesize: true,
      synthRecipe: ['34451243'],
    },
    {
      itemName: 'Navigational Charts',
      itemType: 'Data',
      itemQuantity: 1,
      itemDescription: 'Comprehensive stellar and interstellar navigation data.',
      canSynthesize: false,
    },
    {
      itemName: 'Mobile Lab Units',
      itemType: 'Science Equipment',
      itemQuantity: 10,
      itemDescription: 'Portable laboratories for conducting scientific research and experiments.',
      canSynthesize: true,
      synthRecipe: ['78101938', '84817673'],
    },
    {
      itemName: 'Holodeck Programs',
      itemType: 'Entertainment',
      itemQuantity: 100,
      itemDescription: 'Virtual reality programs for training, education, and recreation.',
      canSynthesize: false,
    },
    {
      itemName: 'Emergency Rations',
      itemType: 'Food',
      itemQuantity: 1000,
      itemDescription: 'Long-life food rations for emergency survival situations.',
      canSynthesize: true,
      synthRecipe: ['24707191'],
    },
    {
      itemName: 'Air Filters',
      itemType: 'Life Support',
      itemQuantity: 200,
      itemDescription: 'High-efficiency air filtration units for maintaining breathable atmosphere.',
      canSynthesize: true,
      synthRecipe: ['39130267'],
    },
    {
      itemName: 'Water Purification Units',
      itemType: 'Life Support',
      itemQuantity: 50,
      itemDescription: 'Systems designed to purify and recycle water for drinking and usage.',
      canSynthesize: true,
      synthRecipe: ['70899812'],
    },
    {
      itemName: 'Pressure Suits',
      itemType: 'Equipment',
      itemQuantity: 75,
      itemDescription: 'Suits designed to maintain normal pressure for the body in the vacuum of space.',
      canSynthesize: true,
      synthRecipe: ['66958749', '39130267', '37259134'],
    },
    {
      itemName: 'Portable Habitat Modules',
      itemType: 'Habitat',
      itemQuantity: 5,
      itemDescription: 'Modular living quarters for extended missions on planetary surfaces.',
      canSynthesize: true,
      synthRecipe: ['27238748', '39130267', '60383090'],
    },
    {
      itemName: 'Communication Devices',
      itemType: 'Communication',
      itemQuantity: 150,
      itemDescription: 'Handheld devices for intra-ship and planetary surface communication.',
      canSynthesize: true,
      synthRecipe: ['78101938', '50586314'],
    },
    {
      itemName: 'Rebreather Units',
      itemType: 'Life Support',
      itemQuantity: 100,
      itemDescription: 'Personal breathing apparatus that recycles exhaled air for rebreathing.',
      canSynthesize: true,
      synthRecipe: ['05158596', '70899812'],
    },
    {
        itemName: 'Energy Bars',
        itemType: 'Food',
        itemQuantity: 6000,
        itemDescription: 'Energy-dense nutritional bars optimized for space travel.',
        canSynthesize: true,
        synthRecipe: ['24707191', '70837954', '82604595'],
      },
      {
        itemName: 'Advanced Toolkits',
        itemType: 'Tool',
        itemQuantity: 300,
        itemDescription: 'Comprehensive tool sets for advanced repairs and maintenance aboard the spacecraft.',
        canSynthesize: true,
        synthRecipe: ['27238748', '29247164', '78101938'],
      },
      {
        itemName: 'Solar Panels',
        itemType: 'Energy',
        itemQuantity: 100,
        itemDescription: 'Compact, efficient solar panels for auxiliary power generation.',
        canSynthesize: true,
        synthRecipe: ['78910059'],
      },
      {
        itemName: 'Biomedical Scanner',
        itemType: 'Medical',
        itemQuantity: 20,
        itemDescription: 'Portable devices for medical diagnostics and health monitoring.',
        canSynthesize: true,
        synthRecipe: ['78101938', '50586314', '88713204'],
      },
      {
        itemName: 'EVA Jetpacks',
        itemType: 'Equipment',
        itemQuantity: 30,
        itemDescription: 'Jet propulsion packs for extravehicular activities in space.',
        canSynthesize: true,
        synthRecipe: ['34451243', '27238748', '66958749'],
      },
      {
        itemName: 'Hydroponic Grow Kits',
        itemType: 'Agriculture',
        itemQuantity: 100,
        itemDescription: 'Kits containing everything needed to start a hydroponic garden for fresh food production.',
        canSynthesize: true,
        synthRecipe: ['99408502', '32230545'],
      },
      {
        itemName: 'Atmospheric Regulators',
        itemType: 'Life Support',
        itemQuantity: 50,
        itemDescription: 'Devices to maintain and regulate the ship\'s atmosphere for optimal crew health.',
        canSynthesize: true,
        synthRecipe: ['30278242', '70899812'],
      },
      {
        itemName: 'Data Storage Units',
        itemType: 'Data',
        itemQuantity: 200,
        itemDescription: 'High-capacity storage devices for scientific data, logs, and crew entertainment.',
        canSynthesize: true,
        synthRecipe: ['78101938', '50586314'],
      },
      {
        itemName: 'Antimicrobial Clothing',
        itemType: 'Clothing',
        itemQuantity: 500,
        itemDescription: 'Clothing treated with antimicrobial agents to prevent the spread of bacteria in closed environments.',
        canSynthesize: true,
        synthRecipe: ['66958749', '37259134'],
      },
      {
        itemName: 'Sterilization Units',
        itemType: 'Medical',
        itemQuantity: 30,
        itemDescription: 'Units designed for sterilizing medical equipment and surfaces to prevent contamination.',
        canSynthesize: true,
        synthRecipe: ['30278242', '70899812'],
      },
      {
        itemName: 'Oxygen Generators',
        itemType: 'Life Support',
        itemQuantity: 40,
        itemDescription: 'Systems that electrolyze water to produce oxygen for the ship\'s atmosphere.',
        canSynthesize: true,
        synthRecipe: ['82604595', '70899812'],
      },
      {
        itemName: 'Planetary Rovers',
        itemType: 'Vehicle',
        itemQuantity: 2,
        itemDescription: 'All-terrain vehicles for exploration and transport on planetary surfaces.',
        canSynthesize: true,
        synthRecipe: ['27238748', '39130267', '78910059'],
      },
      {
        itemName: 'Water Filtration Systems',
        itemType: 'Life Support',
        itemQuantity: 25,
        itemDescription: 'Advanced systems for purifying and recycling water onboard the spacecraft.',
        canSynthesize: true,
        synthRecipe: ['70899812'],
      },
      {
        itemName: 'Portable Shelters',
        itemType: 'Habitat',
        itemQuantity: 10,
        itemDescription: 'Quick-deploy shelters for use during planetary exploration missions.',
        canSynthesize: true,
        synthRecipe: ['66958749', '39130267', '60383090'],
      },
      {
        itemName: 'Encryption Devices',
        itemType: 'Security',
        itemQuantity: 150,
        itemDescription: 'Devices to secure communication and data with advanced encryption algorithms.',
        canSynthesize: true,
        synthRecipe: ['78101938', '84817673'],
      },
      {
        itemName: 'Wearable Fitness Monitors',
        itemType: 'Health',
        itemQuantity: 300,
        itemDescription: 'Devices for monitoring vital signs and physical activity to ensure crew health and fitness.',
        canSynthesize: true,
        synthRecipe: ['37259134', '50586314'],
        },
        {
          itemName: 'Automated Repair Drones',
          itemType: 'Maintenance',
          itemQuantity: 25,
          itemDescription: 'Drones equipped with tools for performing repairs in hard-to-reach areas of the spacecraft.',
          canSynthesize: true,
          synthRecipe: ['27238748', '78101938', '29247164'],
        },
        {
          itemName: 'Compact Greenhouses',
          itemType: 'Agriculture',
          itemQuantity: 10,
          itemDescription: 'Small, efficient greenhouses for growing fresh produce onboard.',
          canSynthesize: true,
          synthRecipe: ['99408502', '32230545', '78910059'],
        },
        {
          itemName: 'Energy Storage Cells',
          itemType: 'Energy',
          itemQuantity: 200,
          itemDescription: 'High-capacity batteries for storing and distributing power throughout the spacecraft.',
          canSynthesize: true,
          synthRecipe: ['78910059', '34451243'],
        },
        {
          itemName: 'Science Experiment Kits',
          itemType: 'Science Equipment',
          itemQuantity: 50,
          itemDescription: 'Kits containing instruments and materials for conducting various scientific experiments.',
          canSynthesize: true,
          synthRecipe: ['78101938', '84817673', '31345718'],
        },
        {
          itemName: 'Emergency Beacon Transmitters',
          itemType: 'Communication',
          itemQuantity: 40,
          itemDescription: 'Devices designed to transmit distress signals in case of an emergency.',
          canSynthesize: true,
          synthRecipe: ['50586314', '78101938'],
        },
        {
          itemName: 'Sleep Enhancement Devices',
          itemType: 'Health',
          itemQuantity: 100,
          itemDescription: 'Devices designed to improve sleep quality through sound, light, and temperature control.',
          canSynthesize: true,
          synthRecipe: ['37259134', '66958749'],
        },
        {
          itemName: 'Atmospheric Condensers',
          itemType: 'Life Support',
          itemQuantity: 15,
          itemDescription: 'Devices that extract water from the ship\'s atmosphere for drinking and utility use.',
          canSynthesize: true,
          synthRecipe: ['70899812', '30278242'],
        },
        {
          itemName: 'Augmented Reality Training Systems',
          itemType: 'Education',
          itemQuantity: 20,
          itemDescription: 'Systems that use augmented reality for training and educational purposes.',
          canSynthesize: true,
          synthRecipe: ['50586314', '37259134', '66817507'],
        },
        {
          itemName: 'Fire Suppression Kits',
          itemType: 'Safety',
          itemQuantity: 50,
          itemDescription: 'Kits equipped with advanced fire suppression technology for use in emergencies.',
          canSynthesize: true,
          synthRecipe: ['67098129'],
        },
        {
          itemName: 'Personal Hygiene Modules',
          itemType: 'Hygiene',
          itemQuantity: 150,
          itemDescription: 'Compact units designed for maintaining personal hygiene in zero-gravity conditions.',
          canSynthesize: true,
          synthRecipe: ['39130267', '70899812'],
        },
        {
          itemName: 'Geological Sampling Kits',
          itemType: 'Science Equipment',
          itemQuantity: 30,
          itemDescription: 'Kits for collecting and analyzing geological samples during planetary exploration.',
          canSynthesize: true,
          synthRecipe: ['27238748', '19747072'],
        },
        {
          itemName: 'Zero-Gravity Exercise Equipment',
          itemType: 'Fitness',
          itemQuantity: 20,
          itemDescription: 'Equipment designed for maintaining physical fitness in a zero-gravity environment.',
          canSynthesize: true,
          synthRecipe: ['29247164', '66958749'],
        },
        {
          itemName: 'Portable Oxygen Generators',
          itemType: 'Life Support',
          itemQuantity: 75,
          itemDescription: 'Small, portable devices for personal oxygen generation in emergency situations.',
          canSynthesize: true,
          synthRecipe: ['05158596', '82604595'],
        },
        {
          itemName: 'Cryopreservation Units',
          itemType: 'Medical',
          itemQuantity: 5,
          itemDescription: 'Units for cryopreserving biological samples and medical supplies for long-term storage.',
          canSynthesize: true,
          synthRecipe: ['21173664', '25093377'],
        },
        {
            itemName: 'Stellar Navigation Drones',
            itemType: 'Navigation',
            itemQuantity: 10,
            itemDescription: 'Autonomous drones equipped with stellar cartography sensors for mapping and exploration.',
            canSynthesize: true,
            synthRecipe: ['50586314', '94657404', '65488099'],
          },
          {
            itemName: 'Automated Botanical Gardens',
            itemType: 'Agriculture',
            itemQuantity: 3,
            itemDescription: 'Self-sustaining ecosystems for growing a variety of plants for research and consumption.',
            canSynthesize: true,
            synthRecipe: ['99408502', '78910059', '12857850'],
          },
          {
            itemName: 'Holographic Entertainment Systems',
            itemType: 'Entertainment',
            itemQuantity: 50,
            itemDescription: 'Cutting-edge holographic systems for immersive entertainment and social interaction.',
            canSynthesize: true,
            synthRecipe: ['50586314', '66817507', '37259134'],
          },
          {
            itemName: 'Modular Spacecraft Expansion Kits',
            itemType: 'Construction',
            itemQuantity: 5,
            itemDescription: 'Kits containing modules and components for expanding the spacecraft\'s living and working areas.',
            canSynthesize: true,
            synthRecipe: ['27238748', '60383090', '39130267'],
          },
          {
            itemName: 'Zero-G Coffee Brewers',
            itemType: 'Kitchen Equipment',
            itemQuantity: 100,
            itemDescription: 'Specially designed coffee brewers that work flawlessly in zero-gravity environments.',
            canSynthesize: true,
            synthRecipe: ['66958749', '39130267'],
          },
          {
            itemName: 'Cosmic Ray Detectors',
            itemType: 'Science Equipment',
            itemQuantity: 15,
            itemDescription: 'Instruments for detecting and analyzing cosmic rays, crucial for astrophysical research.',
            canSynthesize: true,
            synthRecipe: ['78101938', '84817673', '50586314'],
          },
          {
            itemName: 'Spacecraft Hull Repair Kits',
            itemType: 'Maintenance',
            itemQuantity: 20,
            itemDescription: 'Emergency kits for performing quick and effective repairs on the spacecraft\'s hull.',
            canSynthesize: true,
            synthRecipe: ['27238748', '66958749', '99065934'],
          },
          {
            itemName: 'AI-Powered Language Tutors',
            itemType: 'Education',
            itemQuantity: 50,
            itemDescription: 'Personalized language learning tools powered by AI to facilitate communication with extraterrestrial species.',
            canSynthesize: true,
            synthRecipe: ['50586314', '49287381'],
          },
          {
            itemName: 'Antigravity Yoga Mats',
            itemType: 'Fitness',
            itemQuantity: 200,
            itemDescription: 'Yoga mats with antigravity fields to enhance physical wellness routines in zero gravity.',
            canSynthesize: true,
            synthRecipe: ['66958749', '86108752'],
          },
          {
            itemName: 'Self-Cleaning Clothing',
            itemType: 'Clothing',
            itemQuantity: 500,
            itemDescription: 'Clothing fabricated from materials that automatically cleanse and deodorize without water.',
            canSynthesize: true,
            synthRecipe: ['66958749', '37259134', '59234999'],
          },
          {
            itemName: 'Interstellar Fishing Rods',
            itemType: 'Recreation',
            itemQuantity: 25,
            itemDescription: 'Fishing rods designed for catching spaceborne organisms in the vacuum of space.',
            canSynthesize: true,
            synthRecipe: ['27238748', '66958749', '99065934'],
          },
          {
            itemName: 'Quantum Encryption Devices',
            itemType: 'Security',
            itemQuantity: 75,
            itemDescription: 'Devices using quantum algorithms to secure communications against all forms of eavesdropping.',
            canSynthesize: true,
            synthRecipe: ['50586314', '78101938', '84817673'],
          },
          {
            itemName: 'Synthetic Atmosphere Processors',
            itemType: 'Life Support',
            itemQuantity: 10,
            itemDescription: 'Advanced processors that synthesize breathable air from chemical compounds stored on the spacecraft.',
            canSynthesize: true,
            synthRecipe: ['82604595', '30278242', '70899812'],
          },
          {
            itemName: 'Nano-Repair Bots',
            itemType: 'Maintenance',
            itemQuantity: 100,
            itemDescription: 'Tiny robots capable of repairing microscopic damage to the spacecraft\'s systems and structure.',
            canSynthesize: true,
            synthRecipe: ['78101938', '29247164', '37259134'],
        },
        {
          itemName: 'Astrobiology Experiment Kits',
          itemType: 'Science Equipment',
          itemQuantity: 20,
          itemDescription: 'Comprehensive kits for conducting astrobiology experiments, including microbial cultivation and analysis.',
          canSynthesize: true,
          synthRecipe: ['31345718', '32707169', '25093377'],
        },
        {
          itemName: 'Gravity Simulation Treadmills',
          itemType: 'Fitness',
          itemQuantity: 15,
          itemDescription: 'Advanced treadmills that simulate gravity, allowing for normal running and walking exercises in space.',
          canSynthesize: true,
          synthRecipe: ['66958749', '86108752', '37259134'],
        },
        {
          itemName: 'Personal Augmented Reality (AR) Visors',
          itemType: 'Entertainment',
          itemQuantity: 100,
          itemDescription: 'Wearable AR devices that overlay digital information onto the real world, enhancing both work and leisure.',
          canSynthesize: true,
          synthRecipe: ['37259134', '50586314', '13453589'],
        },
        {
          itemName: 'Exoplanet Geological Samplers',
          itemType: 'Exploration',
          itemQuantity: 30,
          itemDescription: 'Robust sampling tools designed to collect and analyze geological samples from a variety of extraterrestrial landscapes.',
          canSynthesize: true,
          synthRecipe: ['27238748', '19747072', '65488099'],
        },
        {
          itemName: 'Space Opera Library',
          itemType: 'Entertainment',
          itemQuantity: 1,
          itemDescription: 'A vast digital library of space opera novels and audiobooks, for the crew\'s leisure and inspiration.',
          canSynthesize: false,
        },
        {
          itemName: 'Zero-G Board Games',
          itemType: 'Recreation',
          itemQuantity: 200,
          itemDescription: 'A collection of classic and new board games adapted for play in zero gravity conditions.',
          canSynthesize: true,
          synthRecipe: ['66958749', '39130267'],
        },
        {
          itemName: 'Molecular Gastronomy Kit',
          itemType: 'Food Science',
          itemQuantity: 10,
          itemDescription: 'Kits for exploring the science of molecular gastronomy, including tools and ingredients for culinary innovation.',
          canSynthesize: true,
          synthRecipe: ['24707191', '39130267', '70837954'],
        },
        {
          itemName: 'Spacecraft Soundscaping Systems',
          itemType: 'Comfort',
          itemQuantity: 50,
          itemDescription: 'Systems that create ambient soundscapes to reduce noise stress and simulate earth-like auditory environments.',
          canSynthesize: true,
          synthRecipe: ['37259134', '50586314'],
        },
        {
          itemName: 'Asteroid Mining Drones',
          itemType: 'Mining',
          itemQuantity: 5,
          itemDescription: 'Automated drones equipped with mining tools and analysis equipment for asteroid resource extraction.',
          canSynthesize: true,
          synthRecipe: ['27238748', '78101938', '84817673'],
        },
        {
          itemName: 'Interstellar Navigation Beacons',
          itemType: 'Navigation',
          itemQuantity: 20,
          itemDescription: 'Deployable beacons for marking and navigating through uncharted space routes.',
          canSynthesize: true,
          synthRecipe: ['50586314', '78101938', '94657404'],
        },
        {
          itemName: 'Cosmic Garden Terrariums',
          itemType: 'Decoration',
          itemQuantity: 100,
          itemDescription: 'Self-contained ecosystems with a variety of alien flora, for both research and aesthetic enhancement of living spaces.',
          canSynthesize: true,
          synthRecipe: ['99408502', '32230545', '12857850'],
        },
        {
          itemName: 'Photon Sailcraft Models',
          itemType: 'Educational',
          itemQuantity: 50,
          itemDescription: 'Scale models of spacecraft propelled by photon sails, for educational purposes and as a hobby.',
          canSynthesize: true,
          synthRecipe: ['66958749', '78910059'],
        },
        {
          itemName: 'Virtual Reality Spacewalk Simulators',
          itemType: 'Training',
          itemQuantity: 25,
          itemDescription: 'VR simulators that provide realistic training for spacewalks and extravehicular activities, including emergency scenarios.',
          canSynthesize: true,
          synthRecipe: ['50586314', '37259134', '66817507'],
        }
        
  ];
  export { inventoryList };
  