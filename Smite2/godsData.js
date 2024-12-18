const gods = [
    {
        "Name": "Anhur",
        "Attributes": {
            "Title": "Slayer of Enemies",
            "Pantheon": "Egyptian",
            "Type": "Ranged,Physical",
            "Roles": "Carry",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Anhur (SMITE 2) voicelines",
            "Voice actor": "Christopher Sabat",
            "Health": "587 (+77.55)",
            "Mana": "296 (+42)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.5%)",
            "Physical": "18.4 (+2.76)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Anhur.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Anhur Basic Attack",
                "description": "Fire a projectile that deals Physical Damage to the first enemy hit.",
                "imageURL": require("images/Anhur_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 48 + 2.5 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Enfeeble",
                "description": "Dealing Damage to enemies reduces their Physical Protection. Stacks up to 2 times.",
                "imageURL": require("images/Anhur_ability_2.png"),
                "notes": [
                    "Physical Protections Reduced: 10",
                    "Debuff Duration: 4 seconds"
                ]
            },
            {
                "name": "1st Ability  - Shifting Sands",
                "description": "Create a Pillar that Slows enemies around it and increases their damage taken from your basic attacks.",
                "imageURL": require("images/Anhur_ability_3.png"),
                "notes": [
                    "The Pillar Impedes all Characters.",
                    "The Slow stacks with an additional Slow when closer to the Pillar.",
                    "Reactivate to destroy the Pillar early.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 14 seconds",
                    "Range: 10.4 meters",
                    "Radius: 9.6 meters",
                    "Slow: 15%",
                    "Additional Slow:15%",
                    "Increased Damage Taken: 8/11/14/17/20%",
                    "Lifetime: 7.5 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Impale",
                "description": "Fire a projectile that deals Physical Damage to enemies. Displace the first god hit and Stun them if they hit a wall.",
                "imageURL": require("images/Anhur_ability_4.png"),
                "notes": [
                    "Enemies are Displaced in the direction the projectile is moving.",
                    "The Projectile passes through and damages minions, but stops on walls.",
                    "The enemy god displaced by this ability deals damage to enemies it collides with.",
                    "Cost: 50/60/70/80/90",
                    "Cooldown: 12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 55/105/155/205/255",
                    "Damage Scaling: 80% Strength",
                    "Stun Duration: 0.75/0.8/0.85/0.9/0.95 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Disperse",
                "description": "Leap forward to deal Physical Damage and Displace enemies.",
                "imageURL": require("images/Anhur_ability_5.png"),
                "notes": [
                    "Enemies are Displaces up and away from your landing location.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 15/14.5/14/13.5/13 seconds",
                    "Range: 8.8 meters",
                    "Radius: 2.4 meters",
                    "Damage: 35/70/105/140/175",
                    "Damage Scaling: 55% Strength"
                ]
            },
            {
                "name": "Ultimate  - Desert Fury",
                "description": "Channel to repeatedly fire projectiles that each deal Physical Damage. The final projectile deals a burst of Physical Damage.",
                "imageURL": require("images/Anhur_ability_6.png"),
                "notes": [
                    "Ability fires 4 times, plus the final prohectile, over 1.5 seconds.",
                    "These projectiles pass through and damage all enemies, and pass through walls.",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Range: 12.8 meters",
                    "Radius: 0.56 meters",
                    "Final Radius: 0.72 meters",
                    "Damage Per Tick: 55/80/105/130/155",
                    "Damage Scaling Per Tick: 40% Strength",
                    "Final Damage: 90/135/180/225/270",
                    "Final Damage Scaling: 80% Strength"
                ]
            }
        ]
    },
    {
        "Name": "Anubis",
        "Attributes": {
            "Title": "God of the Dead",
            "Pantheon": "Egyptian",
            "Type": "Ranged,Magical",
            "Roles": "Mid",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Anubis (SMITE 2) voicelines",
            "Voice actor": "R. Bruce Elliott",
            "Health": "586.9 (+77.55)",
            "Mana": "317 (+42.5)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.358%)",
            "Physical": "19 (+3)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.75 (+0.2)",
            "MP/Sec": "2.32 (+0.26)",
            "imageURL": require("images/Anubis.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Anubis Basic Attack",
                "description": "Fire a projectile that deals Magical Damage to the first enemy hit.",
                "imageURL": require("images/Anubis_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 42 + 2.316 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - The Scales",
                "description": "Gain bonus Lifesteal, Physical Protection, and Magical Protection. These bonuses increase as your health declines.",
                "imageURL": require("images/Anubis_ability_2.png"),
                "notes": [
                    "Gain 1 Stack of this buff for each 10% Health missing.",
                    "Bonuses cap at 18% bonus Lifesteal and 18 (Level 1) - 38 (Level 20) of each Protection at 80% lost HP.",
                    "Lifesteal: 6%",
                    "Physical Protection: 9 + 0.5 per Level",
                    "Magical Protection: 9 + 0.5 per Level",
                    "Max Buff Stacks: 8",
                    "Bonus Lifesteal per Stack: 1.5%",
                    "Bonus Protections per Stack: 1.12 + 0.06 per Level"
                ]
            },
            {
                "name": "1st Ability  - Plague of Locusts",
                "description": "Channel to deal Magical Damage repeatedly to enemies in front of you.",
                "imageURL": require("images/Anubis_ability_3.png"),
                "notes": [
                    "This ability hits 12 times over 2.5 seconds.",
                    "You move at 35/30/25/20/15% Movement Speed while Channeling.",
                    "You are Displacement Immune while Channeling.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 10/9.5/9/8.5/8 seconds",
                    "Radius: 5.6 meters",
                    "Cone Angle: 110 degrees",
                    "Damage Per Tick: 15/22/29/36/43",
                    "Damage Scaling Per Tick: 18/19/20/21/22% Intelligence"
                ]
            },
            {
                "name": "2nd Ability  - Mummify",
                "description": "Fire a projectile that deals Physical Damage and Stuns the first enemy god hit.",
                "imageURL": require("images/Anubis_ability_4.png"),
                "notes": [
                    "Projectile ignores minions, and stops on walls.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds",
                    "Range: 11.2 meters",
                    "Radius: 0.56 meters",
                    "Damage: 60/85/110/135/160",
                    "Damage Scaling: 55% Intelligence",
                    "Stun Duration: 0.85/0.95/1.05/1.15/1.25 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Grasping Hands",
                "description": "Repeatedly deal Magical Damage and Slow enemis in the area.",
                "imageURL": require("images/Anubis_ability_5.png"),
                "notes": [
                    "This ability hits 4 times over 1.5 seconds.",
                    "Slow is refresfed on each hit, and does not stack.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 14/13/12/11/10 seconds",
                    "Range: 8.8 meters",
                    "Radius: 3.2 meters",
                    "Damage Per Tick: 20/35/50/65/80",
                    "Damage Scaling Per Tick: 35% Intelligence",
                    "Slow: 25%",
                    "Slow Duration: 2 seconds"
                ]
            },
            {
                "name": "Ultimate  - Death Gaze",
                "description": "Channel to deal a burst of Magical Damage to enemies in front of you, then repeatedly deal Magical Damage: to enemies in the same area. You are CC Immune: while Channeling.",
                "imageURL": require("images/Anubis_ability_6.png"),
                "notes": [
                    "Ability hits 24 times, plus the initial burst, over 2.4 seconds.",
                    "You are Rooted while Channeling.",
                    "Cost: 90 mana",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Range: 11.2 meters",
                    "Radius: 0.72 meters",
                    "Initial Damage: 140/170/200/230/260",
                    "Initial Damage Scaling: 100% Intelligence",
                    "Damage Per Tick: 25/30/35/40/45",
                    "Damage Scaling Per Tick: 20% Intelligence"
                ]
            }
        ]
    },
    {
        "Name": "Ares",
        "Attributes": {
            "Title": "God of War",
            "Pantheon": "Greek",
            "Type": "Melee,Magical",
            "Roles": "Support",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "Unreleased",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Ares (SMITE 2) voicelines",
            "Voice actor": "Jason Douglas",
            "Health": "(+)",
            "Mana": "(+)",
            "Speed": "(+)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "(+)",
            "Physical": "(+)",
            "Magical": "(+)",
            "HP/Sec": "(+)",
            "MP/Sec": "(+)",
            "imageURL": require("images/Ares.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Ares Basic Attack",
                "description": "Deal Magical Damage to an enemy in front of you.",
                "imageURL": require("images/Ares_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Blessed Armaments",
                "description": "Provide Strength and Intelligence in an Aura. Build Protections to increase Strength Aura. Build Cooldown Rate to increase Intelligence Aura. Both Auras increase with Level.",
                "imageURL": require("images/Ares_ability_2.png"),
                "notes": [
                    "Provides more Strength as Ares builds protections. Provides more Intelligence as Ares builds Cooldown Reduction. Both increase with Level."
                ]
            },
            {
                "name": "1st Ability  - Shackles",
                "description": "Fire a Shackle projectile that deals Physical Damage, Slows, and stops on first enemy god hit. Shackled gods take repeating Magical Damage and are Crippled. Successfully hitting an enemy god allows you to fire another projectile and increases your Movement Speed. Up to 3 projectiles can be fired in this way.",
                "imageURL": require("images/Ares_ability_3.png"),
                "notes": [
                    "This projectile passes through and damages non-God enemies, and passes through walls. It stops on Gods.",
                    "Movement Speed buff stacks for each uniquely shackled god.",
                    "You have 2 seconds to fire another Shackle after successfully hitting an enemy god.",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 15 seconds",
                    "Damage Per Tick: 20/40/60/80/100",
                    "Damage Scaling Per Tick: 15% Intelligence",
                    "Minion Damage: 70/90/110/130/150",
                    "Minion Damage Scaling: 15% Strength",
                    "Slow: 15%",
                    "Slow Duration: 15 seconds",
                    "Cripple Duration: 4 seconds",
                    "Movement Speed: 15%"
                ]
            },
            {
                "name": "2nd Ability  - Bolster Defenses",
                "description": "You and allied gods around you gain increased Magical Protection, Physical Protection, and Basic Attack Damage. While this effect is active, each buffed god will be able to extend the duration and increase the effects of their buff by damaging enemy gods.",
                "imageURL": require("images/Ares_ability_4.png"),
                "notes": [
                    "The buff is extended by 4 seconds after hitting an enemy god 3 times.",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15 seconds",
                    "Radius: 5.6 meters",
                    "Physical Protection: 10/15/20/25/30",
                    "Magical Protection: 10/15/20/25/30",
                    "Basic Attack Damage: 8/12/16/20/24",
                    "Buff Duration: 6 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Searing Flesh",
                "description": "Channel to deal Magical Damage repeatedly to enemies in front of you. Deals damage based on the enemies' maximum Health in addition to base and scaling damage. You are Displacement Immune while Channeling.",
                "imageURL": require("images/Ares_ability_5.png"),
                "notes": [
                    "You can fire your Shackles ability while channeling this ability, but no other attacks.",
                    "You are Displacement immune while Channeling.",
                    "Cost: 55/60/65/70/75 mana",
                    "Cooldown: 12 seconds",
                    "Damage Per Tick: 15/20/25/30/35",
                    "Damage Scaling Per Tick: 7% Intelligence + 1/1/2/2/3% Max Health",
                    "Minion Damage Per Tick: 15/20/25/30/35",
                    "Minion Damage Scaling Per Tick: 7% Intelligence + 4% Max Health"
                ]
            },
            {
                "name": "Ultimate  - No Escape",
                "description": "Begin Channeling and immediately attach a Chain to gods around you, dealing Magical Damage. At the end the of channel, Displace Chained gods toward you, then deal Magical Damage and Stun enemies around you. You are CC Immune and gain Damage Mitigation while Channeling.",
                "imageURL": require("images/Ares_ability_6.png"),
                "notes": [
                    "Channel lasts 2.5 seconds. Enemy gods are Displaced toward you after 2.17 seconds of channeling.",
                    "Cost: 80/85/90/95/100 mana",
                    "Cooldown: 90 seconds",
                    "Initial Damage: 60/80/100/120/140",
                    "Initial Damage Scaling: 30% Strength",
                    "Final Damage: 200/275/350/425/500",
                    "Final Damage Scaling: 60% Strength¨",
                    "Stun Duration: 0.75 seconds",
                    "Damage Mitigation: 15%"
                ]
            }
        ]
    },
    {
        "Name": "Athena",
        "Attributes": {
            "Title": "Goddess of Wisdom",
            "Pantheon": "Greek",
            "Type": "Melee,Magical",
            "Roles": "Support",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Athena (SMITE 2) voicelines",
            "Voice actor": "Lindsey Alena",
            "Health": "647.4 (+86.1)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.4%)",
            "Physical": "20.3 (+3.21)",
            "Magical": "29.4 (+1.6)",
            "HP/Sec": "1.82 (+0.211)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Athena.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Athena Basic Attack",
                "description": "Deal Magical Damage to an enemy in front of you.",
                "imageURL": require("images/Athena_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Has a 3 hit chain. Attacks in order of 1, 1, 2x damage and swing time.",
                    "The final hit of the chain hits all targets in the area for 2x damage.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 43 + 2.33 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Reach",
                "description": "After each ability activation, your next basic attack becomes a projectile that deals Magical Damage.",
                "imageURL": require("images/Athena_ability_2.png"),
                "notes": [
                    "Deals 125% Strength + 70% Intelligence damage to the first target hit, passes through and damages all enemies, and passes through walls.",
                    "This basic attack can Critically Strike.",
                    "This basic attack can trigger Item Effects."
                ]
            },
            {
                "name": "1st Ability  - Preemptive Strike",
                "description": "Dash forward to deal Magical Damage and Slow enemies adter a brief buildup. Gain Physical Protection and Magical Protection when you hit an enemy god.",
                "imageURL": require("images/Athena_ability_3.png"),
                "notes": [
                    "Buildup takes 0.66 seconds.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 14 seconds",
                    "Damage: 50/90/130/170/210",
                    "Damage Scaling: 60% Strength",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Slow Duration: 2 seconds",
                    "Physical Protection: 15/20/25/30/35 + 10% Physical Protections",
                    "Magical Protection: 15/20/25/30/35 + 10% Magical Protections"
                ]
            },
            {
                "name": "2nd Ability  - Confound",
                "description": "Deal Magical Damage and Taunt enemies in front of you.",
                "imageURL": require("images/Athena_ability_4.png"),
                "notes": [
                    "Taunted enemies are Slowed by 25%.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 18 seconds",
                    "Radius: 5.6 meters",
                    "Cone Angle: 90 degrees",
                    "Damage: 40/65/90/115/140",
                    "Damage Scaling: 20% Intelligence",
                    "Taunt Duration: 0.75/0.9/1.05/1.2/1.35 seconds + 0.2s per 150 Protections from Items, stacking up to 2 times"
                ]
            },
            {
                "name": "3rd Ability  - Shield Wall",
                "description": "Create a Phalanx of Soldiers that deals Magical Damage to enemies. After a delay they deal Magical Damage to enemies before disappearing.",
                "imageURL": require("images/Athena_ability_5.png"),
                "notes": [
                    "The delay between the first and second attack is 2 seconds.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 14 seconds",
                    "Radius: 3.2 meters",
                    "Initial Damage: 60/100/140/180/220",
                    "Initial Damage Scaling: 45% Intelligence",
                    "Final Damage: 80/140/200/260/320",
                    "Final Damage Scaling: 55% Intelligence"
                ]
            },
            {
                "name": "Ultimate  - Defender of Olympus",
                "description": "Channel and Shield an ally. When the channel completes, Teleport to their location. Deal Magical Damage to enemis upon landing.",
                "imageURL": require("images/Athena_ability_6.png"),
                "notes": [
                    "Channel lasts for 3.34 seconds.",
                    "If your ally dies before your channel completes, you will still go to their location.",
                    "Cost: 80/90/110/110/120 mana",
                    "Cooldown: 120 seconds",
                    "Damage: 340/415/490/565/640",
                    "Damage Scaling: 90% Intellingence",
                    "Shield Health: 50/100/150/200/250",
                    "Shield Health Scaling: 12.5% Max Health"
                ]
            }
        ]
    },
    {
        "Name": "Bacchus",
        "Attributes": {
            "Title": "God of Wine",
            "Pantheon": "Roman",
            "Type": "Melee,Magical",
            "Roles": "Support",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Bacchus (SMITE 2) voicelines",
            "Voice actor": "Chris Rager",
            "Health": "647.4 (+86.1)",
            "Mana": "305 (+43)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.4%)",
            "Physical": "19.6 (+3.1)",
            "Magical": "27.5 (+1.4)",
            "HP/Sec": "1.82 (+0.211)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Bacchus.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Bacchus Basic Attack",
                "description": "Deal Magical Damage to an enemy in front of you.",
                "imageURL": require("images/Bacchus_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 43 + 2.33 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Drunk - O - Meter",
                "description": "Get Drunk from Chug to gain increased Strength, Intelligence, Physical Protection, and Magical Protection. Also adds additional effects to your abilities.",
                "imageURL": require("images/Bacchus_ability_2.png"),
                "notes": [
                    "Ranges from 0% to 100% Drunk.",
                    "Has no effect when under 30%.",
                    "Tipsy when between 30% to 59%.",
                    "Smashed when over 60%.",
                    "Drunkeness depletes over time at a rate of 2% per second.",
                    "Tipsy Buff: +3 Strength, +5 Intelligence, +5% Physical Protection, +5% Magical Protection.",
                    "Smashed Buff: +8 Strength, +10 Intelligence, +10% Physical Protection, +10% Magical Protection."
                ]
            },
            {
                "name": "1st Ability  - Chug",
                "description": "Get Drunk, Heal, gain increased Strength and Intelligence, and your next basic attack deals additional Magical Damage.",
                "imageURL": require("images/Bacchus_ability_3.png"),
                "notes": [
                    "Empowered basic attack effect lasts until a target is succesfully hit.",
                    "Cost: 20 mana",
                    "Cooldown: 12 seconds",
                    "Damage: 0/10/30/50/70/90",
                    "Damage Scaling: 0/30/30/30/30/30% Physical and Magical Protection",
                    "Heal: 0/20/35/50/65/80",
                    "Strength: 0/6/10/14/18/22",
                    "Intelligence: 0/10/15/20/25/30",
                    "Buff Duration: 0/6/6/6/6/6 seconds",
                    "Drunkenness: 40/46/52/58/64/70%"
                ]
            },
            {
                "name": "2nd Ability  - Belly Flop",
                "description": "Leap forward to deal Magical Damage and Displace enemies.",
                "imageURL": require("images/Bacchus_ability_4.png"),
                "notes": [
                    "Enemies are Displaced straight up.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 14 seconds",
                    "Range: 8.8 meters",
                    "Radius: 2.4 meters",
                    "Damage: 50/90/130/170/210",
                    "Damage Scaling: 75% Strength + 30% Physical Protection + 30% Magical Protection"
                ]
            },
            {
                "name": "3rd Ability  - Belch of the Gods",
                "description": "Channel to deal Magical Damage repeatedly to enemies in front of you. The final hit will Stun if you are Tipsy or Smashed. Reduces enemy Healing. You are Displacement Immune while Channeling",
                "imageURL": require("images/Bacchus_ability_5.png"),
                "notes": [
                    "This ability hits 3 times, plus the final hit, over 1.5 seconds.",
                    "You Are Displacement Immune while Channeling.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 10 seconds",
                    "Range: 5.6 meters",
                    "Damage: 25/35/50/65/80",
                    "Damage Scaling: 17.5% Intelligence",
                    "Stun Duration: 0.9/0.95/1.00/1.05/1.10s"
                ]
            },
            {
                "name": "Ultimate  - Intoxicate",
                "description": "Deal Magical Damage and Intoxicate enemies around you. Gain Strength and Intelligence if you are Smashed.",
                "imageURL": require("images/Bacchus_ability_6.png"),
                "notes": [
                    "Cost: 90 mana",
                    "Cooldown: 90 seconds",
                    "Radius: 5.6 meters",
                    "Damage: 230/300/370/440/510",
                    "Damage Scaling: 65% Intelligence",
                    "Intoxicate Duration: 4 seconds",
                    "Strength: 12/20/28/36/44",
                    "Intelligence: 20/30/40/50/60",
                    "Buff Duration: 6 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Bellona",
        "Attributes": {
            "Title": "Goddess of War",
            "Pantheon": "Roman",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Solo",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Bellona (SMITE 2) voicelines",
            "Voice actor": "Laura Post",
            "Health": "623.2 (+83.4)",
            "Mana": "287 (+40.5)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.96 (+1.442%)",
            "Physical": "19.6 (+3.1)",
            "Magical": "28.3 (+1.47)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.18 (+0.24)",
            "imageURL": require("images/Bellona.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Bellona Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you. You have 4 different weapons to attack with, depending on the most recent ability used.",
                "imageURL": require("images/Bellona_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Bellon remains in her current basic attacks until she goes 7 seconds without dealing or taking damage.",
                    "Greatsword has a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time, with no special effects.",
                    "Sword and Shield has a 3 hit chain. Attacks in order of 0.5, 1 , 1x damage and swing time and provides 1 block stack ever enemy god hit. Max 3 stacks.",
                    "Hammer has a 3 hit chain. Attacks in order of 1.5, 1, 1.5x damage and 1.5, 1, 1.25x swing time. Hits all enemies in range of each attack.",
                    "Scourge has a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time, and heals you on every successful hit.",
                    "Range: 1.92 meters",
                    "Scourge Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 43 + 2.33",
                    "Damage Scaling: 100% Strength + 20% Intelligence",
                    "Scourge Heal Per Hit: 5/6/7/8/9",
                    "Scourge Heal Scaling Per Hit: 7% Physical Protection"
                ]
            },
            {
                "name": "Passive  - Master of War",
                "description": "Gain stacking Movement Speed when you hit or are hit by basic attacks. Gain additional effects depending on the basic attack weapon used.",
                "imageURL": require("images/Bellona_ability_2.png"),
                "notes": [
                    "Sword and Shield gains Physical Protection and Magical Protection per stack.",
                    "Hammer gains % Strength per stack",
                    "Scourge gains Attack Speed per stack.",
                    "All basic attacks still gain the Movement Speed per stack.",
                    "Movement Speed: 1.5% Per Stack",
                    "Physical Protection: 4 Per Stack",
                    "Magical Protection: 4 Per Stack",
                    "Strength: 3% Per Stack",
                    "Attack Speed: 3% Per Stack",
                    "Buff Duration: 7 seconds",
                    "Max Buff Stacks: 5"
                ]
            },
            {
                "name": "1st Ability  - Shield Bash",
                "description": "Dash forward to deal Physical Damage and Slow enemies. Gain 1 Block Stack for each enemy god hit. Change to Sword and Shield basic attacks.",
                "imageURL": require("images/Bellona_ability_3.png"),
                "notes": [
                    "Block absorbs all damage from one basic attack per stack.",
                    "Bellona's Blocks also reflect back a portion of the blocked damage to enemies around her. This effect scales off her Physical Protection and Magical Protection.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds",
                    "Range: 2.8 meters",
                    "Radius: 4 meters",
                    "Damage: 50/85/120/155/190",
                    "Damage Scaling: 70% Strength + 30% Protections",
                    "Reflect Damage: 25% of the damage blocked",
                    "Reflect Damage Scaling: 7% Physical and Magical Protection",
                    "Slow: 20%",
                    "Slow Duration: 1.5 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Bludgeon",
                "description": "Spin to deal Physical Damage to enemies around you, then Slam to deal Physical Damage to enemies in an area. Change to Hammer basic attacks.",
                "imageURL": require("images/Bellona_ability_4.png"),
                "notes": [
                    "Final Slam damage increases by 0.25 for each enemy god hit by the Spin attack.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 14/13/12/11/10 seconds",
                    "Spin Radius: 4 meters",
                    "Slam Range: 4.8 meters",
                    "Slam Radius: 1.92 meters",
                    "Spin Damage: 25/50/75/100/125",
                    "Spin Damage Scaling: 30% Strength",
                    "Slam Damage: 50/100/150/200/250",
                    "Slam Damage Scaling: 70% Strength"
                ]
            },
            {
                "name": "3rd Ability  - Scourge",
                "description": "Deal Physical Damage and Disarm enemies. Change to Scourge basic attacks.",
                "imageURL": require("images/Bellona_ability_5.png"),
                "notes": [
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 19/18/17/16/15 seconds",
                    "Range: 8.8 meters",
                    "Radius: 1.6 meters",
                    "Damage: 35/60/85/110/135",
                    "Damage Scaling: 65% Strength",
                    "Disarmed Duration: 1.5/1.6/1.7/1.8/1.9 seconds"
                ]
            },
            {
                "name": "Ultimate  - Eagle's Rally",
                "description": "Leap forward to deal Physical Damage and Stun enemies. You and allied Gods that remain in the area gain Strength, Intelligence, Physical Protection, and Magical Protection. You are CC Immune: while Leaping.",
                "imageURL": require("images/Bellona_ability_6.png"),
                "notes": [
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds",
                    "Range: 8.8 meters",
                    "Radius: 2.4 meters",
                    "Damage: 100/185/270/355/440",
                    "Damage Scaling: 80% Strength",
                    "Stun Duration: 0.75 seconds",
                    "Strength: 16/24/32/40/48 + 10% Protections",
                    "Intelligence: 30/38/46/54/62 + 10% Protections",
                    "Physical Protection: 15/20/25/30/35 + 10% Physical Protections",
                    "Magical Protection: 15/20/25/30/35 + 10% Magical Protections"
                ]
            }
        ]
    },
    {
        "Name": "Chaac",
        "Attributes": {
            "Title": "God of Rain",
            "Pantheon": "Maya",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Solo",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Chaac (SMITE 2) voicelines",
            "Voice actor": "Patrick Seitz",
            "Health": "623.2 (+82.93)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.96 (+1.442%)",
            "Physical": "19.6 (+3.1)",
            "Magical": "28.3 (+1.54)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Chaac.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Chaac Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Chaac_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Has a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 43 + 2.32 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Overflow",
                "description": "After 5 succesful basic attacks, the next ability you activate has lower Cooldown, costs 0 Mana, and Heals you.",
                "imageURL": require("images/Chaac_ability_2.png"),
                "notes": [
                    "Cooldown: -2 seconds",
                    "Heal: 10",
                    "Heal Scaling: 20% Intelligence"
                ]
            },
            {
                "name": "1st Ability  - Thunder Strike",
                "description": "Throw an Axe that deals Physical Damage to enemies in thew area. The Axe remains deployed to empower Torrent or Rain Dance.",
                "imageURL": require("images/Chaac_ability_3.png"),
                "notes": [
                    "Reactivate to destroy the Axe.",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 10 seconds",
                    "Range: 9.6 meters",
                    "Radius: 3.2 meters",
                    "Damage: 65/115/160/215/265",
                    "Damage Scaling: 80% Strength + 60% Intelligence"
                ]
            },
            {
                "name": "2nd Ability  - Torrent",
                "description": "Deal Physical Damage to enemies around you and gain Physical Protection and Magical Protection for each enemy hit.",
                "imageURL": require("images/Chaac_ability_4.png"),
                "notes": [
                    "If you Dash, you will still do the area attack upon reaching the Axe.",
                    "Minions provide 1 stack, Gods provide 2 stacks.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 10/9/8/7/6 seconds",
                    "Attack Radius: 3.2 meters",
                    "Dash Radius: 1.28 meters",
                    "Damage: 70/115/160/205/250",
                    "Damage Scaling: 65% Strength",
                    "Dash Damage: 35/57.5/80/102.5/125",
                    "Dash Damage Scaling: 30% Strength",
                    "Physical and Magical Protection: 5/7/9/11/13 Per Stack",
                    "Protection Buff Scaling: 6% Intelligence",
                    "Buff Duration: 5 seconds",
                    "Max Buff Stacks: 4"
                ]
            },
            {
                "name": "3rd Ability  - Rain Dance",
                "description": "Create a Rain Storm that Heals you over time. While healing, the Rain Storm around you Slows and reduces the Attack Speed of enemies.",
                "imageURL": require("images/Chaac_ability_5.png"),
                "notes": [
                    "Heals 8 times over 6 seconds.",
                    "If the Axe is deployed, create a Rain Storm at the Axe's location as well.",
                    "Enemies in both Rain Storms are Slowed and Debuffed for twice as much.",
                    "Cost: 55/65/75/85/95 mana",
                    "Cooldown: 16 seconds",
                    "Radius: 6.4 meters",
                    "Axe Radius: 9.6 meters",
                    "Heal Per Tick: 6/11/16/21/26",
                    "Heal Scaling Per Tick: 5% Intelligence",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Attack Speed Slow: 15/17.5/20/22.5/25%"
                ]
            },
            {
                "name": "Ultimate  - Storm Call",
                "description": "Channel and gain Damage Mitigation while Channeling, then deal Physical Damage, Displace, and Silence enemies around you. You are CC Immune while Channeling.",
                "imageURL": require("images/Chaac_ability_6.png"),
                "notes": [
                    "Enemies are Displaced straight up.",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds",
                    "Radius: 5.6 meters",
                    "Damage: 225/280/335/390/445",
                    "Damage Scaling: 100% Strength + 100% Intelligence",
                    "Damage Mitigation: 50/55/60/65/70%",
                    "Silence Duration: 1.5 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Fenrir",
        "Attributes": {
            "Title": "The Unbound",
            "Pantheon": "Norse",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Jungle",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Fenrir (SMITE 2) voicelines",
            "Voice actor": "Christopher Sabat",
            "Health": "605 (+80)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.498%)",
            "Physical": "19.0 (+3)",
            "Magical": "27.5 (+1.4)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Fenrir.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Fenrir Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Fenrir_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 46 + 2.47 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Unbound Runes",
                "description": "Fenrir gains Runes on succesful basic attacks or from activating abilities. If he has 5 Runes, activating each ability will be granting additional effects.",
                "imageURL": require("images/Fenrir_ability_2.png"),
                "notes": [
                ]
            },
            {
                "name": "1st Ability  - Unchained",
                "description": "Leap forward to deal Physical Damage. At 5 Runes, Stun all enemies in the area, then all Runs are consumed. Gain 3 Runes on succesful hit if not at 5 Runes.",
                "imageURL": require("images/Fenrir_ability_3.png"),
                "notes": [
                    "Hitting an enemy god reduces the Cooldown of this ability by 30%.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15 seconds",
                    "Range: 8.8 meters",
                    "Radius: 2.4 meters",
                    "Damage: 35/80/125/170/265",
                    "Damage Scaling: 75% Strength + 40% Protections",
                    "Stun Duration: 0.75 second"
                ]
            },
            {
                "name": "2nd Ability  - Seething Howl",
                "description": "Gain increased Strength, Attack Speed, and Lifesteal. At 5 Runes, allied Gods around you also gain increased Lifesteal. Does not consume Runes. Gain 3 Runes if not at 5 Runes.",
                "imageURL": require("images/Fenrir_ability_4.png"),
                "notes": [
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds",
                    "Radius: 7.2 meters",
                    "Strength: 15/20/25/30/35",
                    "Attack Speed: 25%",
                    "Lifesteal: 20%",
                    "Buff Duration: 6 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Brutalize",
                "description": "Leap forward, Channel and grab onto an enemy, and deal Physical Damage repeatedly to all enemies in the area. At 5 Runes, the Strength scaling is increased, then all Runes are consumed. Gain 1 Rune per succesful hit if not at 5 Runes.",
                "imageURL": require("images/Fenrir_ability_5.png"),
                "notes": [
                    "This ability can critically strike.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 11 seconds",
                    "Range: 4.8 meters",
                    "Radius: 1.6 meters",
                    "Damage: 30/55/80/105/130",
                    "Damage Scaling: 40% Strength",
                    "Increased Damage Scaling: 65% Strength",
                    "Physical Protection: 5 + 2 per Level",
                    "Magical Protection: 5 + 2 per Level"
                ]
            },
            {
                "name": "Ultimate  - Ragnarok",
                "description": "Activate to become immense, gain increased Movement Speed, Physical Protection, and Magical Protection. Your next basic attack grabs and enemy God, allowing you to Displace and carry them to any position. Gain 5 Runes. You are CC Immune for the duration.",
                "imageURL": require("images/Fenrir_ability_6.png"),
                "notes": [
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 100 seconds",
                    "Cone Angle: 120 degrees",
                    "Damage: 200/275/350/425/500",
                    "Damage Scaling: 100% Strength",
                    "Movement Speed: 75%",
                    "Physical Protection: 20/25/30/35/40 + 15% Physical Protection",
                    "Magical Protection: 20/25/30/35/40 + 15% Magical Protection",
                    "Buff Duration: 1.75 seconds",
                    "Grab Duration: 1.75 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Hades",
        "Attributes": {
            "Title": "King of the Underworld",
            "Pantheon": "Greek",
            "Type": "",
            "Roles": "Mid Solo",
            "Pros": "",
            "Difficulty": "",
            "Release date": "May 30, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Hades (SMITE 2) voicelines",
            "Voice actor": "Patrick Seitz",
            "Health": "605 (+80)",
            "Mana": "305 (+43)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.358%)",
            "Physical": "19 (+3)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Hades.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Hades Basic Attack",
                "description": "Fire a projectile that deals Magical Damage to the first enemy hit. Applies Blight.",
                "imageURL": require("images/Hades_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 43 + 2.33 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Blight",
                "description": "Your attacks and abilities apply Blight. Blighted enemies have reduced Strength and Intelligence, and receive additional effects from your abilities.",
                "imageURL": require("images/Hades_ability_2.png"),
                "notes": [
                    "Strength: 5%",
                    "Intelligence: 5%",
                    "Debuff Duration: 8 seconds"
                ]
            },
            {
                "name": "1st Ability  - Death From Below",
                "description": "Leap forward to deal Magical Damage to enemies. Slows Blighted enemies. Applies Blight.",
                "imageURL": require("images/Hades_ability_3.png"),
                "notes": [
                    "Enemies take reduced damage if hit by multiple explosions.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 14 seconds",
                    "Range: 8.8 meters",
                    "Radius: 3.2 meters",
                    "Damage: 70/115/160/205/250",
                    "Damage Scaling: 55% Intelligence",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Shroud of Darkness",
                "description": "Silence enemies in front of you. Fear Blighted enemies. Applies Blight.",
                "imageURL": require("images/Hades_ability_4.png"),
                "notes": [
                    "Enemies are feared in a random direction away from Hades.",
                    "Cost: 60 mana",
                    "Cooldown: 14/13/12/11/10 seconds",
                    "Range: 5.6 meters",
                    "Cone Angle: 110 degrees",
                    "Silence Duration: 0.75/0.85/0.95/1.05/1.15 seconds",
                    "Silence Duration Scaling: 0.2s per 150 Protections from Items, stacking up to 2 times",
                    "Feared Duration: 0.75/0.85/0.95/1.05/1.15 seconds",
                    "Feared Duration Scaling: 0.2s per 150 Protections from Items, stacking up to 2 times"
                ]
            },
            {
                "name": "3rd Ability  - Devour Souls",
                "description": "Deal Magical Damage to enemies around you. Blighted enemies explode when hit, dealing additional Magical Damage to them and enemies around them. Heal yourself and your allies around you per Blighted enemy hit.",
                "imageURL": require("images/Hades_ability_5.png"),
                "notes": [
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 10/9.5/9/8.5/8 seconds",
                    "Radius: 3.2 meters",
                    "Damage: 70/105/140/175/210",
                    "Damage Scaling: 70% Intelligence",
                    "Blighted Damage: 10/20/30/40/50",
                    "Blighted Damage Scaling: 50% Intelligence",
                    "Heal: 20/35/50/65/80",
                    "Heal Scaling: 10% of Protections from Items"
                ]
            },
            {
                "name": "Ultimate  - Pillar of Agony",
                "description": "Channel to repeatedly deal Magical Damage and repeatedly Vortex enemies around you, reducing your abilities cooldowns for each hit. While channeling, you may use another ability, but only once. Reduce the Physical and Magical Protections of Blighted enemies damaged. You are CC Immune while Channeling and gain increased Physical Protection and Magical Protection.",
                "imageURL": require("images/Hades_ability_6.png"),
                "notes": [
                    "Vortexes slow targets moving away from the source, or speed up targets moving toward it.",
                    "This Vortex increases in intensity as the channel time progresses.",
                    "Channel times is 4 seconds. Hits 8 times.",
                    "You are Rooted while Channeling.",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds",
                    "Radius: 4.8 meters",
                    "Damage Per Tick: 38/51/64/77/90",
                    "Damage Scaling Per Tick: 25% Intelligence",
                    "Physical Protection Reduced: 10/15/20/25/30",
                    "Physical Protection Reduced: 10%",
                    "Magical Protection Reduced: 10/15/20/25/30",
                    "Magical Protection Reduced: 10%",
                    "Debuff Duration: 4 seconds",
                    "Physical Protection: 50/65/80/95/110 + 10% Physical Protections from Items",
                    "Magical Protection: 50/65/80/95/110 + 10% Magical Protections from Items"
                ]
            }
        ]
    },
    {
        "Name": "Jing Wei",
        "Attributes": {
            "Title": "The Oathkeeper",
            "Pantheon": "Chinese",
            "Type": "Ranged,Physical",
            "Roles": "Carry",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "Unreleased",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Jing Wei (SMITE 2) voicelines",
            "Voice actor": "Alison Viktorin",
            "Health": "595.3 (+86.86)",
            "Mana": "296 (+42)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.99 (+1.484%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Jing_Wei.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Jing Wei Basic Attack",
                "description": "Fire a projectile that deals Physical Damage to the first enemy hit.",
                "imageURL": require("images/Jing_Wei_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 46 + 1.05 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Rapid Reincarnation",
                "description": "When exiting the fountain, fly into the sky and soar over obstacles. Select a landing location early or descend when the duration expires.",
                "imageURL": require("images/Jing_Wei_ability_2.png"),
                "notes": [
                    "This abilty can be canceled before ascending.",
                    "Jing Wei will not ascend if firing basic attacks when leaving the fountain.",
                    "Jing Wei is fully CC Immune during buildup, ascent, flight, and descent.",
                    "Duration: 5 seconds"
                ]
            },
            {
                "name": "1st Ability  - Persistent Gust",
                "description": "Create a Gust of Wind that deals Physical Damage and Knocks Up enemy gods and yourself. The Gust area continually deals Physical Damage. You gain increased Attack Speed while in the outer area of the Gust.",
                "imageURL": require("images/Jing_Wei_ability_3.png"),
                "notes": [
                    "The Attack Speed buff is constantly refreshed while in the outer area.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds",
                    "Range: 10.4m",
                    "Radius: 1.6m",
                    "Outer Radius: 3.2m",
                    "Damage: 60/105/150/195/240",
                    "Damage Scaling: 70% Strength",
                    "Damage Per Tick: 10/20/30/40/50",
                    "Damage Scaling Per Tick:",
                    "Buff Duration: 6 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Explosive Bolts",
                "description": "Your next 3 basic attacks are wider, have increased damage scaling, and explode on the first enemy hit. You gain increased Critical Strike Chance while this ability is active. This ability can gain multiple charges.",
                "imageURL": require("images/Jing_Wei_ability_4.png"),
                "notes": [
                    "This ability goes on cooldown immediately on use.",
                    "Cost: 50 mana",
                    "Cooldown: 12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 0.96 meters",
                    "Explode Radius: 1.28 meters",
                    "Crit Chance: 3/6/9/12/15%",
                    "Ability Charges: 1/2/2/3/3"
                ]
            },
            {
                "name": "3rd Ability  - Agility",
                "description": "Dash forward and gain increased Strength. This ability can be used while Displaced and you will Dash further.",
                "imageURL": require("images/Jing_Wei_ability_5.png"),
                "notes": [
                    "Dash range is longer when used while Displaced.",
                    "You can turn while Dashing.",
                    "You can turn while Dashing.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 18 seconds",
                    "Dash Range: 5.6 meters",
                    "Bonus Range: 8.62 meters",
                    "Strength: 10/15/20/25/30",
                    "Bonus Strength: 25/30/35/40/45",
                    "Movement Speed: 10%",
                    "Bonus Movement Speed: 20%"
                ]
            },
            {
                "name": "Ultimate  - Air Strike",
                "description": "Dash forward and fly into the sky, dropping explosives and dealing Physical Damage to enemies beneath you. Select a landing location, or wait to Dash backwards, dealing Physical Damage to enemies again before selecting a landing location.",
                "imageURL": require("images/Jing_Wei_ability_6.png"),
                "notes": [
                    "Jing Wei is fully CC Immune during buildup, ascent, flight, and descent.",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds",
                    "Range: 11.2 meters",
                    "Radius: 2.4 meters",
                    "Damage: 200/280/360/440/520",
                    "Damage Scaling: 85% Strength"
                ]
            }
        ]
    },
    {
        "Name": "Kukulkan",
        "Attributes": {
            "Title": "Serpent of the Nine Winds",
            "Pantheon": "Maya",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Mid",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Kukulkan (SMITE 2) voicelines",
            "Voice actor": "Clifford Chapin",
            "Health": "574.8 (+76.4)",
            "Mana": "317 (+42.5)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.358%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.65 (+0.2)",
            "MP/Sec": "2.41 (+0.31)",
            "imageURL": require("images/Kukulkan.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Kukulkan Basic Attack",
                "description": "Fire a projectile that deals Magical Damage to the first enemy hit.",
                "imageURL": require("images/Kukulkan_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 42 + 2.316 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Power of the Wind Jewel",
                "description": "Gain increased Intelligence from the items that provide Maximum Mana.",
                "imageURL": require("images/Kukulkan_ability_2.png"),
                "notes": [
                    "This effect does not scale off Base God Mana.",
                    "Intelligence from Item Mana: 7%"
                ]
            },
            {
                "name": "1st Ability  - Zephyr",
                "description": "Fire a projectile that explodes on the first enemy hit. The explosion deals Magical Damage and Slows enemies in the area.",
                "imageURL": require("images/Kukulkan_ability_3.png"),
                "notes": [
                    "Projectile stops on walls.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 7 seconds",
                    "Range: 11.2 meters",
                    "Radius: 0.64 meters",
                    "Explode Radius: 2.25 meters",
                    "Damage: 85/135/185/235/285",
                    "Damage Scaling: 80% Intelligence",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 3 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Slipstream",
                "description": "Become Slow Immune and gain 4 Stacks of Movement Speed that gradually falls off over the duration of the effect. Activate this ability while within the area of Whirlwind to Dash instead, dealing Magical Damage and Slowing enemies hit.",
                "imageURL": require("images/Kukulkan_ability_4.png"),
                "notes": [
                    "Movement Speed Buff is applied as 4 stacks. Stacks are lost one at a time.",
                    "Dash passes through and hits all enemy types.",
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 15/14/13/12/11 seconds",
                    "Dash Range: 8.8 meters",
                    "Dash Radius: 2 meters",
                    "Movement Speed: 7/9/11/13/15% Per Stack",
                    "Buff Duration: 4 seconds",
                    "Dash Damage: 85/135/185/235/285",
                    "Dash Damage Scaling: 85% Intelligence",
                    "Dash Slow: 20/25/30/35/40%",
                    "Dash Slow Duration: 3 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Whirlwind",
                "description": "Create a Whirlwind that repeatedly applies a Magical Damage over Time to enemies in the area.",
                "imageURL": require("images/Kukulkan_ability_5.png"),
                "notes": [
                    "The Whirlwind attempts to apply the effect every 0.35 seconds for 4 seconds.",
                    "Damage over Time and Slow are refreshed on each hit.",
                    "Damage over Time hits 6 times over 2.5 seconds.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 15/14/13/12/11 seconds",
                    "Range: 8.8 meters",
                    "Radius: 3.2 meters",
                    "Damage Per Tick: 12/18/24/30/36",
                    "Damage Scaling Per Tick: 20% Intelligence"
                ]
            },
            {
                "name": "Ultimate  - Spirit of the Nine Winds",
                "description": "Fire a delayed projectile that deals Magical Damage and Displaces enemies hit.",
                "imageURL": require("images/Kukulkan_ability_6.png"),
                "notes": [
                    "Projectile passes through and damages all enemy targets, and passes through walls.",
                    "Enemies are Displaced up and away from the projectile.",
                    "Cost: 120 mana",
                    "Cooldown: 90 seconds",
                    "Range: 20.8 meters",
                    "Radius: 1.4 meters",
                    "Damage: 400/500/600/700/800",
                    "Damage Scaling: 115% Intelligence"
                ]
            }
        ]
    },
    {
        "Name": "Loki",
        "Attributes": {
            "Title": "The Trickster God",
            "Pantheon": "Norse",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Jungle",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Loki (SMITE 2) voicelines",
            "Voice actor": "Alex Ross",
            "Health": "605 (+80)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.498%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Loki.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Loki Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Loki_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Has a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 46 + 2.47 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Behind You",
                "description": "Hitting enemies from behind deals increased damage to them.",
                "imageURL": require("images/Loki_ability_2.png"),
                "notes": [
                    "The increased damage from this effect also triggers on enemies Blinded by Agonizing Visions.",
                    "Damage: 115%"
                ]
            },
            {
                "name": "1st Ability  - Vanish",
                "description": "Activate to enter Stealth and gain Movement Speed. Your next basic attack deals additional Physical Damage over time. Killing a god immediately refreshes the cooldown of this ability.",
                "imageURL": require("images/Loki_ability_3.png"),
                "notes": [
                    "Hits 4 times over 2 seconds.",
                    "Stealthed Gods are invisible to enemies unless they enter an enemy structure's attack area.",
                    "Taking damage while Stealth partially reveals you for 0.33 seconds.",
                    "You are Immune to Slows while Stealthed.",
                    "Stealth is broken when hit by Hard CC.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds",
                    "Damage Per Tick: 15/25/35/45/55",
                    "Damage Scaling Per Tick: 20% Strength",
                    "Movement Speed: 35%",
                    "Buff Duration: 4 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Agonizing Visions",
                "description": "Create a Vision of Loki that repeatedly deals Physical Damage to enemies around it and reduces their damage dealt. Enemies hit 4 times are Blinded.",
                "imageURL": require("images/Loki_ability_4.png"),
                "notes": [
                    "This ability hits 8 times over 3.5s.",
                    "Blinded players have their game camera obscured.",
                    "The Vision Impedes enemy characters only.",
                    "Loki benefits from Behind You on Blinded enemies from all directions.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 4 meters",
                    "Damage: 7/11/15/19/23",
                    "Damage Scaling: 12/14/16/18/20% Strength",
                    "Blind Duration: 3 seconds",
                    "Damage Dealt Reduction: 5%",
                    "Debuff Duration: 2.5 seconds",
                    "Max Debuff Stacks: 3"
                ]
            },
            {
                "name": "3rd Ability  - Flurry Strike",
                "description": "Channel to deal Physical Damage and Slow enemies in front of you. The final hit deals increased Physical Damage and applies a stronger Slow. You are Displacement Immune while Channeling.",
                "imageURL": require("images/Loki_ability_5.png"),
                "notes": [
                    "Hits 6 times over 1.5 seconds.",
                    "Slow is refreshed with each hit but does not stack.",
                    "This ability can benefit from Behind You.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 8 seconds seconds",
                    "Cone Angle: 90 degrees",
                    "Damage: 10/15/20/25/30",
                    "Damage Scaling: 25% Strength",
                    "Final Damage: 25/45/65/85/105",
                    "Final Damage Scaling: 70% Strength",
                    "Slow: 15%",
                    "Final Slow: 30%"
                ]
            },
            {
                "name": "Ultimate  - Assassinate",
                "description": "Teleport to the target location, deal Physical Damage to and Cripple enemies in the area. Then deal Physical Damage and Stun enemies in front of you.",
                "imageURL": require("images/Loki_ability_6.png"),
                "notes": [
                    "Loki locks onto the enemy god closest to the center of the teleport location, if there is one.",
                    "Cost: 90 mana",
                    "Cooldown: 90 seconds",
                    "Range: 8.8 meters",
                    "Cone Angle: 105 degrees",
                    "Damage: 35/60/85/110/135",
                    "Damage Scaling: 45% Strength",
                    "Cripple Duration: 0.75 seconds",
                    "Final Damage: 45/80/115/150/185",
                    "Final Damage Scaling: 90% Strength",
                    "Stun Duration: 0.75 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Neith",
        "Attributes": {
            "Title": "Weaver of Fate",
            "Pantheon": "Egyptian",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Carry",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Neith (SMITE 2) voicelines",
            "Voice actor": "Lindsay Seidel",
            "Health": "586.9 (+77.55)",
            "Mana": "305 (+43)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.498%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Neith.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Neith Basic Attack",
                "description": "Fire a projectile that deals Physical Damage to the first enemy hit.",
                "imageURL": require("images/Neith_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 44 + 2.42 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Broken Weave",
                "description": "Your abilities can create Weaves or detonate them to deal additional Physical Damage and Root enemis in a larger area. Detonate Weaves to gain a stacking Attack Speed and Intelligence increase per Weave detonated.",
                "imageURL": require("images/Neith_ability_2.png"),
                "notes": [
                    "Damage: 30",
                    "Damage Scaling: 30% Intelligence",
                    "Root Duration: 1 second",
                    "Attack Speed: 2% Per Stack",
                    "Intelligence: 10 + 0.5 Per Level",
                    "Buff Duration: 30 seconds",
                    "Max Buff Stacks: 3"
                ]
            },
            {
                "name": "1st Ability  - Spirit Arrow",
                "description": "Fire a projectile that deals Physical Damage and Roots enemies. Hitting a Weave detonates it.",
                "imageURL": require("images/Neith_ability_3.png"),
                "notes": [
                    "Projectile passes through and damages all enemies, and passes through walls.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 13/12.5/12/11.5/11 seconds",
                    "Range: 10.4 meters",
                    "Radius: 0.56 meters",
                    "Damage: 60/115/170/225/280",
                    "Damage Scaling: 85% Strength + 60% Intelligence",
                    "Root Duration: 1/1.1/1.2/1.3/1.4 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Unravel",
                "description": "Deal Physical Damage to enemies in the area. Heal yourself on successful hit or Heal a larger amount when hitting a God. Creates Weaves in the area.",
                "imageURL": require("images/Neith_ability_4.png"),
                "notes": [
                    "Always creates a Weave in the center of the area. Creates additional Weaves for each enemy God hit at the locations of those Gods.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 3.2 meters",
                    "Damage: 70/110/150/190/230",
                    "Damage Scaling: 75% Intelligence",
                    "Heal: 15/20/25/30/35",
                    "Heal Scaling: 10% Intelligence",
                    "Increased Heal: 30/40/50/60/70",
                    "Increased Heal Scaling: 10% Intelligence"
                ]
            },
            {
                "name": "3rd Ability  - Back Flip",
                "description": "Deal Physical Damage to enemies in front of you, then Leap backwards. Hitting a Weave with the initial damage detonates it.",
                "imageURL": require("images/Neith_ability_5.png"),
                "notes": [
                    "This ability can Leap over walls, as long as you can reach a valid landing area.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 15 seconds",
                    "Cone Angle: 110 degrees",
                    "Damage: 80/120/160/200/240",
                    "Damage Scaling: 60% Intelligence"
                ]
            },
            {
                "name": "Ultimate  - World Weaver",
                "description": "Channel to begin charging an attack and lock on to an enemy God. Reactivate to fire a homing projectile at the selected God that deals Physical Damage and Stuns.",
                "imageURL": require("images/Neith_ability_6.png"),
                "notes": [
                    "Damage scales linearly from 50% to 100% based on Channel time.",
                    "Channel for 0.5 seconds for minimum damage, or for 2 seconds to deal fully charged damage.",
                    "Projectile ignores minions, passes through walls.",
                    "Enemy Gods can step in front of this projectile to be hit by it instead of the selected god.",
                    "You can cancel this ability anytime before firing, the costs and cooldown will not be consumed.",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90 seconds",
                    "Damage: 200/250/300/350/400",
                    "Damage Scaling: 100% Strength + 100% Intelligence",
                    "Stun Duration: 1 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Odin",
        "Attributes": {
            "Title": "The Allfather",
            "Pantheon": "Norse",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Solo",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Odin (SMITE 2) voicelines",
            "Voice actor": "Bob Carter",
            "Health": "623.2 (+83.4)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.96 (+1.442%)",
            "Physical": "19.6 (+3.1)",
            "Magical": "28.3 (+1.47)",
            "HP/Sec": "1.75 (+0.2)",
            "MP/Sec": "2.32 (+0.26)",
            "imageURL": require("images/Odin.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Odin Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Odin_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Has a 4 hit chain. Attacks in order of 1, 1, 1, 1.5x damage and swing time.",
                    "The final hit of the chain hits all targets in the area for 2x damage.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 44 + 2.42 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Path to Valhalla",
                "description": "Gain stacking increased Movement Speed, Strength and Intelligence whenever a god dies.",
                "imageURL": require("images/Odin_ability_2.png"),
                "notes": [
                    "Movement Speed: 4% Per Stack",
                    "Strength: 10% Per Stack",
                    "Intelligence: 10% Per Stack",
                    "Buff Duration: 10 seconds",
                    "Max Buff Stacks: 2"
                ]
            },
            {
                "name": "1st Ability  - Lunge",
                "description": "Leap forward to deal Physical Damage to enemies.",
                "imageURL": require("images/Odin_ability_3.png"),
                "notes": [
                    "Cost: 40/45/50/55/60 mana",
                    "Cooldown: 16/15/14/13/12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 2.4 meters",
                    "Damage: 75/115/155/195/235",
                    "Damage Scaling: 85% Strength"
                ]
            },
            {
                "name": "2nd Ability  - Raven Shout",
                "description": "Gain Health Shield for a duration. At the end of the duration or when landing from a Lunge, the shield explodes dealing Physical Damage equal to the Shield Health to enemies around you. Deals increased Physical Damage if the Shield is at full HP when it explodes.",
                "imageURL": require("images/Odin_ability_4.png"),
                "notes": [
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds",
                    "Explode Radius: 3.2 meters",
                    "Full Shield Damage Increase: 15%",
                    "Shield Health: 100/150/200/250/300",
                    "Shield Health Scaling: 50% Strength + 55% Intelligence"
                ]
            },
            {
                "name": "3rd Ability  - Gungnir's Might",
                "description": "Channel to deal Physical Damage and Slow enemies around you through two pulses. Reactivate to fire a projectile that deals Physical Damage to enemies. If reactivated before the final pulse, grant Attack Speed to nearby allies and the ability will have a 40% reduced cooldown. If reactivated after the final pulse, the projectile Stuns.",
                "imageURL": require("images/Odin_ability_5.png"),
                "notes": [
                    "Projectile passes through and damages all targets, stops on the first God hit, and stops on walls.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 12 seconds",
                    "Pulse Radius: 3.2 meters",
                    "Projectile Range: 8.8 meters",
                    "Projectile Radius: 0.48 meters",
                    "Pulse Damage: 45/70/95/120/145",
                    "Pulse Damage Scaling: 50% Intelligence",
                    "Projectile Damage: 35/70/105/140/175",
                    "Projectile Damage Scaling: 70% Strength",
                    "Stun Duration: 1 seconds",
                    "Attack Speed: 30/32.5/35/37.5/40%",
                    "Buff Duration 4 seconds"
                ]
            },
            {
                "name": "Ultimate  - Ring of Spears",
                "description": "Create a Ring of Spears that Impedes enemy movement, prevents them from healing, and decreases their Strength and Intelligence. Enemies who exit the area take Physical Damage and are Slowed, unless they exit through a Segment of the Ring that has been broken by basic attacks.",
                "imageURL": require("images/Odin_ability_6.png"),
                "notes": [
                    "Ring of Spears does not block ally movement or projectiles, only enemy basic attacks and enemy God movement.",
                    "The Ring is made of 8 Segments that each have 5 Hit Points. An enemy basic attack will deal 1 Hit Point per hit.",
                    "Cost: 100 mana",
                    "Cooldown: 110/105/100/95/90 seconds",
                    "Damage: 60/110/160/210/260",
                    "Damage Scaling: 110% Strength",
                    "Slow: 25%",
                    "Slow Duration: 5 seconds",
                    "Strength: -15/-17.5/-20/-22.5/-25%",
                    "Intelligence: -15/-17.5/-20/-22.5/-25%"
                ]
            }
        ]
    },
    {
        "Name": "Sol",
        "Attributes": {
            "Title": "Goddess of the Sun",
            "Pantheon": "Norse",
            "Type": "",
            "Roles": "Mid Carry",
            "Pros": "",
            "Difficulty": "",
            "Release date": "May 30, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Sol (SMITE 2) voicelines",
            "Voice actor": "Jeannie Tirado",
            "Health": "586.9 (+77.55)",
            "Mana": "296 (+42)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.498%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Sol.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Sol Basic Attack",
                "description": "Fire a projectile that deals Magical Damage to the first enemy hit. Generates Heat.",
                "imageURL": require("images/Sol_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 46 + 2.47 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence",
                    "Heat Generated: 5"
                ]
            },
            {
                "name": "Passive  - Unstable Manifestation",
                "description": "Gain Heat from hitting enemies with basic attacks or from using abilities to gain increased Strength, Intelligence, and Attack Speed. At Max Heat, increase your basic attack damage.",
                "imageURL": require("images/Sol_ability_2.png"),
                "notes": [
                    "Ranges from 0 to 100 Heat.",
                    "Heat starts depleting if you have not generated Heat within the last 6 seconds.",
                    "Heat depleats over time at a rate of 6 Heat per 0.33 seconds.",
                    "Strength: 0.25 * Heat",
                    "Intelligence: 0.25 * Heat",
                    "Attack Speed: 0.3% * Heat",
                    "Basic Attack Damage: 15%"
                ]
            },
            {
                "name": "1st Ability  - Radiance",
                "description": "Create a Pool of Flames at your location. Heal yourself over time, and instantly generate Heat. The pool repeatedly deals Magical Damage to enemies in the area. The more Heat you have at the time the pool is created, the larger its area will be.",
                "imageURL": require("images/Sol_ability_3.png"),
                "notes": [
                    "Pool scales from 1x radius at 0 Heat to 2x radius at 100 Heat.",
                    "This ability hits 3 times over 3 seconds.",
                    "Heals 6 times over 5 seconds.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 11 seconds",
                    "Radius: 2.08 meters",
                    "Damage Per Tick: 30/50/70/90/110",
                    "Damage Scaling Per Tick: 30% Intelligence",
                    "Heal Per Tick: 3% Missing Health",
                    "Heat Generated: 30/40/50/60/70"
                ]
            },
            {
                "name": "2nd Ability  - Stellar Burst",
                "description": "Your next basic attack fires a projectile that explodes, then retracts, and generates Heat. Both the explosion and the retraction deal Magical Damage to enemies and Slows them.",
                "imageURL": require("images/Sol_ability_4.png"),
                "notes": [
                    "Projectile stops and explodes on first enemy hit, walls, or max range.",
                    "Can only trigger ability based items and effects.",
                    "Grants Haste.",
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 10 seconds",
                    "Range: 8.8 meters",
                    "Radius: 3.2 meters",
                    "Damage: 40/70/100/130/160",
                    "Damage Scaling: 45% Intelligence + 25% Strength",
                    "Heat Generated: 10"
                ]
            },
            {
                "name": "3rd Ability  - Disapparate",
                "description": "Gain Movement Speed, and Slow Immunity, begin creating a Trail of Flames behind you, and instantly generate Heat. The Trail persists and repeatedly deals Magical Damage to enemies in the area. After 3 seconds, detonate the Trail dealing Magical Damage, become Immune and unable to attack.",
                "imageURL": require("images/Sol_ability_5.png"),
                "notes": [
                    "You can cancel out of the Immune state early.",
                    "This Immune state is Damage Immunity, Healing Immunity, CC Immunity, Untargettable, and makes you able to pass through allies, enemies, and Impediments.",
                    "Cost: 60 mana",
                    "Cooldown: 16 seconds",
                    "Radius: 1 meter",
                    "Damage Per Tick: 20/40/60/80/100",
                    "Damage Scaling Per Tick: 25% Intelligence",
                    "Explode Damage: 60/120/180/240/300",
                    "Explode Damage Scaling: 75% Intelligence",
                    "Movement Speed: 20/22.5/25/27.5/30%",
                    "Buff Duration: 3 seconds",
                    "Immunity Duration: 3 seconds",
                    "Heat Generated: 10"
                ]
            },
            {
                "name": "Ultimate  - Supernova",
                "description": "Channel to generate Heat, select 8 areas, then repeatedly deal Magical Damage to enemies in those areas. The first time an enemy is hit, they are Displaced. All subsequent hits deal decreased damage. You are CC Immune while Channeling.",
                "imageURL": require("images/Sol_ability_6.png"),
                "notes": [
                    "Areas are selected every 0.18 seconds or when your targeter has moved more than 1.8 meters since the last area was selected.",
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds",
                    "Range: 8.8 meters",
                    "Radius: 1.92 meters",
                    "Damage: 150/200/250/300/350",
                    "Damage Scaling: 50% Intelligence",
                    "Subsequent Damage: 30%",
                    "Heat Generated: 40"
                ]
            }
        ]
    },
    {
        "Name": "Susano",
        "Attributes": {
            "Title": "God of the Summer Storm",
            "Pantheon": "Japanese",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Jungle",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "Unreleased",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Susano (SMITE 2) voicelines",
            "Voice actor": "Jim Foronda",
            "Health": "(+)",
            "Mana": "(+)",
            "Speed": "(+)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "(+)",
            "Physical": "(+)",
            "Magical": "(+)",
            "HP/Sec": "(+)",
            "MP/Sec": "(+)",
            "imageURL": require("images/Susano.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Susano Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Susano_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center od the area will be hit.",
                    "Has a 3 hit chain. Attacks in order of 1, 1, 1.25x damage and swing time.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Storm's Edge",
                "description": "When you use an ability your next basic attack will debuff the enemy hit. Weave in basic attack hits between abilities to progressively stack the debuff.",
                "imageURL": require("images/Susano_ability_2.png"),
                "notes": [
                    "Enemies with 1-2 stacks have 10% reduced Strength.",
                    "Enemies with 3-4 stacks are Slowed by 15% and maintain previous Debuff.",
                    "Enemies with 5-6 stacks tale 10% increased damage and maintain previous Debuffs.",
                    "Debuffs last 3s and refresh on a new application.",
                    "Buff lasts 3s.",
                    "Each attack of Storm Kata can trigger ability item effects."
                ]
            },
            {
                "name": "1st Ability  - Storm Kata",
                "description": "Strike and deal Physical Damage to enemies in front of you. This ability can be used a second time to Spin and Deal Physical Damage to enemies around you. This ability can be used a third time to Dash forward and deal Physical Damage to all enemies hit.",
                "imageURL": require("images/Susano_ability_3.png"),
                "notes": [
                    "This ability Cooldown is increased by 1s for each additional attack used.",
                    "Dash passes through all enemies."
                ]
            },
            {
                "name": "2nd Ability  - Wind Siphon",
                "description": "Deal Physical Damage to enemies in front of you. Enemies in the inner area are also Pulled towards you.",
                "imageURL": require("images/Susano_ability_4.png"),
                "notes": [
                    "Enemies are Pulled to the location in front of you at the start of the attack."
                ]
            },
            {
                "name": "3rd Ability  - Jet Stream",
                "description": "Fire a projectile that stops on walls or the first enemy hit creating a Whirlwind which repeatedly deals Physical Damage. This ability can be used again to Teleport to the Whirlwind.",
                "imageURL": require("images/Susano_ability_5.png"),
                "notes": [
                    "The Whirlwind will travel with the enemy hit.",
                    "This ability Cooldown is reduced by 4s when Teleporting to an enemy.",
                    "Ability hits 6 times, over 3 seconds."
                ]
            },
            {
                "name": "Ultimate  - Typhoon",
                "description": "Create a Typhoon which repeatedly deals Physical Damage. This ability can be used again to fire the Typhoon, dealing Physical Damage and Displacing enemies hit.",
                "imageURL": require("images/Susano_ability_6.png"),
                "notes": [
                    "This ability automatically refires after 2s.",
                    "This ability starts at 50% Size and Damage and increases over the duration.",
                    "The Typhoon will travel in the duration Susano is facing on refire."
                ]
            }
        ]
    },
    {
        "Name": "Thanatos",
        "Attributes": {
            "Title": "Hand of Death",
            "Pantheon": "Greek",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Jungle",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "June 27, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Thanatos (SMITE 2) voicelines",
            "Voice actor": "Erik Braa",
            "Health": "605 (+80)",
            "Mana": "(+)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.5%)",
            "Physical": "19 (+3)",
            "Magical": "27.5 (+1.5)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "(+)",
            "imageURL": require("images/Thanatos.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Thanatos Basic Attack",
                "description": "Deal Physical Damage to an enemy in front of you.",
                "imageURL": require("images/Thanatos_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Has a 3 hit chain. Attacks in an order of 1 / 0.75 / 1.5x damage and swing time.",
                    "The final swing hits all targets in range.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 46 + 2.5 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Harvester of Souls",
                "description": "Enemy Gods at low health are revealed to you and can be Executed by Hovering Death. Killing an enemy heals Thanatos and reduced all of his cooldowns. Thanatos' abilities cost health.",
                "imageURL": require("images/Thanatos_ability_2.png"),
                "notes": [
                    "The health threshold is determined by the rank of Hovering Death, using the first rank value when Hovering Death is unranked.",
                    "Cooldown Reduction: -5 seconds",
                    "God Kill Heal: 15% of their Max Health",
                    "NPC Kill Heal: 7% of their Max Health"
                ]
            },
            {
                "name": "1st Ability  - Death Scythe",
                "description": "Fire a projectile that deals Physical Damage and Slows the first target hit.",
                "imageURL": require("images/Thanatos_ability_3.png"),
                "notes": [
                    "Projectile stops on walls.",
                    "Gods hit by the projectile take 10% of their Max Health as bonus Physical Damage.",
                    "Thanatos Heals for 50% of the total damage done.",
                    "Cost: 6% Health",
                    "Cooldown: 12 seconds",
                    "Range: 11.2 meters",
                    "Radius: 0.48 meters",
                    "Damage: 60/110/160/210/260",
                    "Damage Scaling: 60% Strength",
                    "Slow: 20%"
                ]
            },
            {
                "name": "2nd Ability  - Scent of Death",
                "description": "Gain Movement Speed and Flat Penetration. Deal Bonus Damage and run faster towards enemies in Execute Range.",
                "imageURL": require("images/Thanatos_ability_4.png"),
                "notes": [
                    "Bonus Movement Speed scales from 0% effectiveness to 100% effectiveness. 0% when the targets health is at Execute Threshold and 100% when the target is 1 health.",
                    "Cost: 4% Health",
                    "Cooldown: 13 seconds",
                    "Movement Speed: 8/12/16/20/24%",
                    "Bonus Movement Speed: Up to 8/12/16/20/24%",
                    "Flat Penetration: 10/13/16/19/22",
                    "Bonus Damage: 5/7.5/10/12.5/15%"
                ]
            },
            {
                "name": "3rd Ability  - Soul Reap",
                "description": "Sweep in front of you to deal Physical Damage and Silence enemies hit.",
                "imageURL": require("images/Thanatos_ability_5.png"),
                "notes": [
                    "Thanatos sweeps in front of him, inheriting any additional rotation during the fire.",
                    "Cost: 4% Health",
                    "Cooldown: 14 seconds",
                    "Cone Angle: 110 degrees",
                    "Damage: 60/15/150/195/230",
                    "Damage Scaling: 70% Srength",
                    "Silence Duration: 0.75 second"
                ]
            },
            {
                "name": "Ultimate  - Hovering Death",
                "description": "Fly into the sky and select a landing location. Deal Physical Damage and Stun enemies hit. Execute enemies at low health.",
                "imageURL": require("images/Thanatos_ability_6.png"),
                "notes": [
                    "You are rooted during activation.",
                    "Thanatos gains 125% Movement Speed while flying.",
                    "Execute kills enemies even if their death would normally be prevented by other god abilities.",
                    "If Thanatos is aiming at an invalid location when the ult expires, he will land on the last valid aimed location.",
                    "Thanatos is fully CC Immune during buildup, ascent, flight, and descent.",
                    "Cost: 6% Health",
                    "Cooldown: 110/105/100/95/90 seconds",
                    "Cone Angle: 2.4 degrees",
                    "Damage: 110/145/180/215/250",
                    "Damage Scaling: 80% Strength",
                    "Execute Health %: 24/28/32/36/40%",
                    "Stun Duration: 1 seconds"
                ]
            }
        ]
    },
    {
        "Name": "The Morrigan",
        "Attributes": {
            "Title": "Phantom Queen",
            "Pantheon": "Celtic",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Mid Jungle",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "June 27, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "The Morrigan (SMITE 2) voicelines",
            "Voice actor": "Elizabeth Maxwell",
            "Health": "574.8 (+76.4)",
            "Mana": "296 (+42)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "1 (+1.498%)",
            "Physical": "18.4 (+2.9)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.7 (+0.2)",
            "MP/Sec": "2.32 (+0.26)",
            "imageURL": require("images/The_Morrigan.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - The Morrigan Basic Attack",
                "description": "Throw a projectile forward that deals Magical Damage to enemies hit.",
                "imageURL": require("images/The_Morrigan_ability_1.png"),
                "notes": [
                    "The Morrigan has a 3 hit chain. Attacks in an order of 1 / 1 / 1x damage and fire time. The final fire explodes on target, applying Doomsayer.",
                    "Range: 8.8 meters",
                    "Radius: 0.8 meters",
                    "Damage: 43 + 2.33 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Doomsayer",
                "description": "Your Basic Attacks have a 3 hit chain. The final Basic Attack explodes, dealing 9% of the targets Health over 3s.",
                "imageURL": require("images/The_Morrigan_ability_2.png"),
                "notes": [
                    "This Damage Over Time can Crit."
                ]
            },
            {
                "name": "1st Ability  - Deadly Aspects",
                "description": "Deal Magical Damage and Stun enemies in front of you after a brief buildup.",
                "imageURL": require("images/The_Morrigan_ability_3.png"),
                "notes": [
                    "The buildup for this ability does not break Confusion's Stealth.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 12 seconds",
                    "Cone Angle: 45 degrees",
                    "Damage: 80/135/190/245/300",
                    "Damage Scaling: 75% Intelligence",
                    "Stun Duration: 0.75 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Dark Omen",
                "description": "Fire a projectile that deals Magical Damage. Enemy gods hit are marked. The mark triggers for Magical Damage when that god is damaged by any god ability.",
                "imageURL": require("images/The_Morrigan_ability_4.png"),
                "notes": [
                    "Projectile deals bonus damage equal to the Mark trigger when hitting Minions or Jungle Monsters.",
                    "The Morrigan deals the mark trigger damage, even if another god triggers it. She can receive kills this way.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 7 seconds",
                    "Range: 11.2 meters",
                    "Radius: 0.8 meters",
                    "Initial Damage: 45/75/105/135/165",
                    "Initial Damage Scaling: 40% Intelligence",
                    "Mark Damage Scaling: 40% Intelligence",
                    "Minion Damage Scaling: 60% Intelligence"
                ]
            },
            {
                "name": "3rd Ability  - Confusion",
                "description": "Stealth immediately and gain Movement Speed. Send a clone of yourself to a target location.",
                "imageURL": require("images/The_Morrigan_ability_5.png"),
                "notes": [
                    "When the clone is damaged, it will appear as an illusion. It will change appearance and lose its health bar.",
                    "The clone grants vision around itself.",
                    "Taking damage while stealthed breaks the effect.",
                    "Cost: 60/65/70/75/80 mana",
                    "Cooldown: 15 seconds",
                    "Movement Speed: 30/32.5/35/37.5/40%",
                    "Buff Duration: 3/3.5/4/4.5/5 seconds",
                    "Clone Lifetime: 10 seconds"
                ]
            },
            {
                "name": "Ultimate  - Changeling",
                "description": "Select a target to transform into. Gain access to their abilities and items for 10 seconds.",
                "imageURL": require("images/The_Morrigan_ability_6.png"),
                "notes": [
                    "If the god you transform into has an Ultimate Cooldown longer than this Ultimate's Cooldown, use the transformed targets Cooldown instead.",
                    "You will copy all their abilities and items, all with no cooldown.",
                    "You will copy their ability ranks. If your level is different to the transform target's it will use the order they ranked their abilities, filling with Auto Skill as needed.",
                    "If you are in the middle of firing an ability when the transform times out, you will detransform the moment that ability fire ends.",
                    "Cost: 100 mana",
                    "Cooldown: 140/130/120/110/100 seconds"
                ]
            }
        ]
    },
    {
        "Name": "Ymir",
        "Attributes": {
            "Title": "Father of the Frost Giants",
            "Pantheon": "Norse",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Support",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Ymir (SMITE 2) voicelines",
            "Voice actor": "Charles Campbell",
            "Health": "647.4 (+85.84)",
            "Mana": "296 (+42)",
            "Speed": "442 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.4%)",
            "Physical": "20.3 (+3.21)",
            "Magical": "29.4 (+1.6)",
            "HP/Sec": "1.82 (+0.211)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Ymir.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Ymir Basic Attack",
                "description": "Deal Magical Damage to an enemy in front of you.",
                "imageURL": require("images/Ymir_ability_1.png"),
                "notes": [
                    "If multiple enemies are in the area, the enemy closest to the center of the area will be hit.",
                    "Range: 1.92 meters",
                    "Cone Angle: 120 degrees",
                    "Damage: 46 + 2.47 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Frostbite",
                "description": "Your abilities apply Frostbite, causing enemies to take more basic attack damage from you and to deal less damage to you.",
                "imageURL": require("images/Ymir_ability_2.png"),
                "notes": [
                    "Frostbite's effect stacks with Critical Strikes.",
                    "Damage: 185% Strength + 37% Intelligence",
                    "Reduced Damage Dealt: 15%"
                ]
            },
            {
                "name": "1st Ability  - Ice Wall",
                "description": "Create a Wall that Displaces enemies on creation. Applies Frostbite to Displaced enemies.",
                "imageURL": require("images/Ymir_ability_3.png"),
                "notes": [
                    "The Wall Impedes all characters.",
                    "Create a Wall at your feet to Displace yourself up and forward.",
                    "Displaces enemies up and away from the Wall.",
                    "Reactivate to destroy the Wall early.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 13 seconds",
                    "Range: 11.2 meters",
                    "Radius: 3.25 meters",
                    "Lifetime: 2.5/3/3.5/4/4.5 seconds"
                ]
            },
            {
                "name": "2nd Ability  - Glacial Strike",
                "description": "Deal Magical Damage and Slow enemies. Applies Frostbite on succesful hit.",
                "imageURL": require("images/Ymir_ability_4.png"),
                "notes": [
                    "Damaging area starts at Ymir and moves away over time.",
                    "You are Slowed by 42.5% during activation.",
                    "Cost: 45/50/55/60/65 mana",
                    "Cooldown: 8/7.5/7/6.5/6 seconds",
                    "Range: 6 meters",
                    "Radius: 3.6 meters",
                    "Damage: 60/105/150/195/240",
                    "Damage Scaling: 70% Intelligence + 55% Strength",
                    "Slow: 25%",
                    "Slow Duration: 2 seconds"
                ]
            },
            {
                "name": "3rd Ability  - Frost Breath",
                "description": "Deal Magical Damage and Stun enemies in front of you. Applies Frostbite on succesful hit.",
                "imageURL": require("images/Ymir_ability_5.png"),
                "notes": [
                    "You are Rooted during activation.",
                    "Cost: 40/50/60/70/80 mana",
                    "Cooldown: 16/15.5/15/14.5/14 seconds",
                    "Cone Angle: 90 degrees",
                    "Damage: 50/85/120/155/190",
                    "Damage Scaling: 55% Intelligence",
                    "Stun Duration: 0.8/1/1.2/1.4/1.6 seconds"
                ]
            },
            {
                "name": "Ultimate  - Shards of Ice",
                "description": "Channel to Slow enemies around you. Deal a burst of Magical Damage when the Channel is complete. Applies Frostbite immediately to enemies in the area. You are CC Immune while Channeling.",
                "imageURL": require("images/Ymir_ability_6.png"),
                "notes": [
                    "Damage scales linearly from 35% + 0.03% Intelligence to 100% based on Channel time.",
                    "Max Channel time of 3 seconds.",
                    "You are Rooted while Channeling.",
                    "Cost: 80/90/100/110/120 mana",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Radius: 5.6 meters",
                    "Damage: 500/650/800/950/1100",
                    "Damage Scaling: 160% Intelligence + 30% Protections",
                    "Slow: 40%"
                ]
            }
        ]
    },
    {
        "Name": "Zeus",
        "Attributes": {
            "Title": "God of the Sky",
            "Pantheon": "Greek",
            "Type": "{{{types}}}[[Category:{{{types}}} gods]]",
            "Roles": "Mid",
            "Pros": "{{{pros}}}",
            "Difficulty": "{{{difficulty}}}",
            "Release date": "May 2, 2024",
            "Favor": "",
            "Gems": "",
            "Voicelines": "Zeus (SMITE 2) voicelines",
            "Voice actor": "Christopher Sabat",
            "Health": "586.9 (+77.55)",
            "Mana": "296 (+42)",
            "Speed": "430 (+0)",
            "Range": "{{{range}}} (+0)",
            "Attack/Sec": "0.93 (+1.358%)",
            "Physical": "19 (+3)",
            "Magical": "26.7 (+1.46)",
            "HP/Sec": "1.75 (+0.2)",
            "MP/Sec": "2.25 (+0.25)",
            "imageURL": require("images/Zeus.png")
        },
        "Abilities": [
            {
                "name": "Basic Attack  - Zeus Basic Attack",
                "description": "Fire a projectile that deals Magical Damage to the first enemy hit. Applies Charges.",
                "imageURL": require("images/Zeus_ability_1.png"),
                "notes": [
                    "Projectile stops on first target hit, and does not pass through walls.",
                    "Range: 8.8 meters",
                    "Radius: 0.48 meters",
                    "Damage: 44 + 2.42 per level",
                    "Damage Scaling: 100% Strength + 20% Intelligence"
                ]
            },
            {
                "name": "Passive  - Overcharge",
                "description": "Deal damage to apply Charges. Enemies take increased basic attack damage from you for each Charge they have.",
                "imageURL": require("images/Zeus_ability_2.png"),
                "notes": [
                    "Damage Increase: 20% Per Stack",
                    "Debuff Duration: 5 seconds",
                    "Max Debuff Stacks: 3"
                ]
            },
            {
                "name": "1st Ability  - Chain Lightning",
                "description": "Fire a projectile that hits and enemy and then chains to nearby enemies. Any enemies hit are dealt Magical Damage, Slowed, and receive a Charge",
                "imageURL": require("images/Zeus_ability_3.png"),
                "notes": [
                    "Projectile stops on walls.",
                    "Cost: 50/55/60/65/70 mana",
                    "Cooldown: 12 seconds",
                    "Range: 8.8 meters",
                    "Radius: 0.56 meters",
                    "Damage: 40/70/100/130/160",
                    "Damage Scaling: 60% Intelligence",
                    "Slow: 20%",
                    "Bounces: 5"
                ]
            },
            {
                "name": "2nd Ability  - Thunderclap",
                "description": "Deal Magical Damage and apply a Charge to enemies around you, then gain increased Attack Speed, Movement Speed, and reduced basic attack Movement Penalty.",
                "imageURL": require("images/Zeus_ability_4.png"),
                "notes": [
                    "Cost: 50/60/70/80/90 mana",
                    "Cooldown: 15 seconds",
                    "Radius: 3.2m",
                    "Damage: 80/130/180/230/280",
                    "Damage Scaling: 80% Intelligence",
                    "Attack Speed: 15/20/25/30/35%",
                    "Movement Speed: 10/12.5/15/17.5/20%",
                    "Buff Duration: 5s"
                ]
            },
            {
                "name": "3rd Ability  - Detonate Charge",
                "description": "Activate to deal Magical Damage to enemies for each Charge, and Stun enemies that had max Charges.",
                "imageURL": require("images/Zeus_ability_5.png"),
                "notes": [
                    "This ability cannot be activated unless an enemy has a Charge.",
                    "Damage is multiplied by 1/1.7/2.4 based on the number of Charges.",
                    "Cost: 70/75/80/85/90 mana",
                    "Cooldown: 14/13.5/13/12.5/12 seconds",
                    "Damage: 50/80/110/140/170",
                    "Damage Scaling: 30% Intelligence",
                    "Stun Duration: 0.5 seconds"
                ]
            },
            {
                "name": "Ultimate  - Lightning Storm",
                "description": "Deal Magical Damage repeatedly to enemies in the area, applying a Charge on each hit.",
                "imageURL": require("images/Zeus_ability_6.png"),
                "notes": [
                    "Cost: 100 mana",
                    "Cooldown: 90 seconds",
                    "Range: 8.8 meters",
                    "Radius: 4.8 meters"
                ]
            }
        ]
    }
];
export default gods;
