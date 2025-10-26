const { combineStats, addAura, makeAuto, weaponArray, dereference } = require('../facilitators.js');
const { smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');

// Extended body stats for higher tier dreadnoughts
const heptanoughtBody = {
	SPEED: base.SPEED * 0.5,
	HEALTH: base.HEALTH * 6,
	SHIELD: base.SHIELD * 3.5,
	REGEN: base.REGEN * 1.65,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 3.75,
	ACCELERATION: base.ACCEL * 0.35,
};
const octanoughtBody = {
	SPEED: base.SPEED * 0.45,
	HEALTH: base.HEALTH * 7.25,
	SHIELD: base.SHIELD * 3.7,
	REGEN: base.REGEN * 1.7,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 4,
	ACCELERATION: base.ACCEL * 0.3,
};
const enneagonnoughtBody = {
	SPEED: base.SPEED * 0.4,
	HEALTH: base.HEALTH * 8.5,
	SHIELD: base.SHIELD * 3.9,
	REGEN: base.REGEN * 1.75,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 4.25,
	ACCELERATION: base.ACCEL * 0.25,
};
const decagonnoughtBody = {
	SPEED: base.SPEED * 0.35,
	HEALTH: base.HEALTH * 10,
	SHIELD: base.SHIELD * 4.1,
	REGEN: base.REGEN * 1.8,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 4.5,
	ACCELERATION: base.ACCEL * 0.2,
};
const hendecagonnoughtBody = {
	SPEED: base.SPEED * 0.3,
	HEALTH: base.HEALTH * 12,
	SHIELD: base.SHIELD * 4.3,
	REGEN: base.REGEN * 1.85,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 4.75,
	ACCELERATION: base.ACCEL * 0.18,
};
const dodecagonnoughtBody = {
	SPEED: base.SPEED * 0.25,
	HEALTH: base.HEALTH * 14,
	SHIELD: base.SHIELD * 4.5,
	REGEN: base.REGEN * 1.9,
	FOV: base.FOV * 0.95,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 5,
	ACCELERATION: base.ACCEL * 0.15,
};

// Misc
Class.genericDreadnoughtOfficialV3 = {
	PARENT: "genericTank",
	SKILL_CAP: Array(10).fill(smshskl),
	REROOT_UPGRADE_TREE: ["dreadWeaponOfficialV3", "dreadBodyOfficialV3"],
}
Class.genericHeptanought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: heptanoughtBody,
	SHAPE: 7,
	COLOR: 'hexagon',
	SIZE: 27,
	DANGER: 13,
}
Class.genericOctanought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: octanoughtBody,
	SHAPE: 8,
	COLOR: 'hexagon',
	SIZE: 28,
	DANGER: 14,
}
Class.genericEnneagonnought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: enneagonnoughtBody,
	SHAPE: 9,
	COLOR: 'hexagon',
	SIZE: 29,
	DANGER: 15,
}
Class.genericDecagonnought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: decagonnoughtBody,
	SHAPE: 10,
	COLOR: 'hexagon',
	SIZE: 30,
	DANGER: 16,
}
Class.genericHendecagonnought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: hendecagonnoughtBody,
	SHAPE: 11,
	COLOR: 'hexagon',
	SIZE: 31,
	DANGER: 17,
}
Class.genericDodecagonnought = {
	PARENT: "genericDreadnoughtOfficialV3",
	BODY: dodecagonnoughtBody,
	SHAPE: 12,
	COLOR: 'hexagon',
	SIZE: 32,
	DANGER: 18,
}

// Auras for V3 dreadnoughts
Class.heptanoughtBigAura = addAura(1.4, 1.4);
Class.heptanoughtSmallAura = addAura(1.4, 1.55, 0.15);
Class.octanoughtBigAura = addAura(1.6, 1.35);
Class.octanoughtSmallAura = addAura(1.6, 1.5, 0.15);
Class.enneagonnoughtBigAura = addAura(1.8, 1.3);
Class.enneagonnoughtSmallAura = addAura(1.8, 1.45, 0.15);
Class.decagonnoughtBigAura = addAura(2.0, 1.25);
Class.decagonnoughtSmallAura = addAura(2.0, 1.4, 0.15);
Class.hendecagonnoughtBigAura = addAura(2.2, 1.2);
Class.hendecagonnoughtSmallAura = addAura(2.2, 1.35, 0.15);
Class.dodecagonnoughtBigAura = addAura(2.5, 1.15);
Class.dodecagonnoughtSmallAura = addAura(2.5, 1.3, 0.15);

// Heal auras
Class.heptanoughtBigHealAura = addAura(-1.0, 1.4);
Class.heptanoughtSmallHealAura = addAura(-1.0, 1.55, 0.15);
Class.octanoughtBigHealAura = addAura(-1.2, 1.35);
Class.octanoughtSmallHealAura = addAura(-1.2, 1.5, 0.15);
Class.enneagonnoughtBigHealAura = addAura(-1.4, 1.3);
Class.enneagonnoughtSmallHealAura = addAura(-1.4, 1.45, 0.15);
Class.decagonnoughtBigHealAura = addAura(-1.6, 1.25);
Class.decagonnoughtSmallHealAura = addAura(-1.6, 1.4, 0.15);
Class.hendecagonnoughtBigHealAura = addAura(-1.8, 1.2);
Class.hendecagonnoughtSmallHealAura = addAura(-1.8, 1.35, 0.15);
Class.dodecagonnoughtBigHealAura = addAura(-2.0, 1.15);
Class.dodecagonnoughtSmallHealAura = addAura(-2.0, 1.3, 0.15);

// Advanced auto turrets
Class.hyperAutoTurret = {
	PARENT: "autoTankGun",
	INDEPENDENT: true,
	GUNS: [
		{
			POSITION: [24, 11, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret, g.pounder, {reload: 0.9, health: 1.4, recoil: 0.1}]),
				TYPE: "bullet",
			},
		},
	],
}
Class.rapidAutoTurret = {
	PARENT: "autoTankGun",
	INDEPENDENT: true,
	GUNS: weaponArray([
		{
			POSITION: [20, 7, 1, 0, 3, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.autoTurret, {reload: 0.8, recoil: 0.1}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [20, 7, 1, 0, -3, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.autoTurret, {reload: 0.8, recoil: 0.1}]),
				TYPE: "bullet",
			},
		},
	], 1),
}

// T0
Class.dreadOfficialV3 = {
	PARENT: "genericHeptanought",
	LABEL: "Dreadnought V3",
	UPGRADE_LABEL: "Dreads V3",
	SEND_ALL_MOCKUPS: true,
	LEVEL: 90,
	EXTRA_SKILL: 18,
}
Class.dreadWeaponOfficialV3 = {
	LABEL: "",
	COLOR: 'hexagon',
	REROOT_UPGRADE_TREE: "dreadWeaponOfficialV3",
}
Class.dreadBodyOfficialV3 = {
	LABEL: "",
	COLOR: 'hexagon',
	REROOT_UPGRADE_TREE: "dreadBodyOfficialV3",
}

// HEPTANOUGHT (7-sided) WEAPONS
Class.destroyerHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Annihilator",
	GUNS: weaponArray([
		{
			POSITION: [20, 13, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, {reload: 0.95, health: 1.5, damage: 1.2}]),
				TYPE: "bullet",
			},
		},
	], 7),
}
Class.sniperHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Executioner",
	BODY: {
		FOV: heptanoughtBody.FOV * 1.3,
	},
	GUNS: weaponArray([
		{
			POSITION: [26, 7, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.assassin, {reload: 0.9, health: 1.6, damage: 1.1, speed: 1.15, maxSpeed: 1.15}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [5, 7, -1.5, 7, 0, 0, 0],
		},
	], 7),
}
Class.machineGunHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Obliterator",
	GUNS: weaponArray([
		{
			POSITION: [12, 10, 1.4, 8, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.machineGun, {reload: 0.7, health: 1.3, spray: 0.8}]),
				TYPE: "bullet",
			},
		},
	], 7),
}
Class.droneHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Overseer Prime",
	BODY: {
		FOV: heptanoughtBody.FOV * 1.15,
		SPEED: heptanoughtBody.SPEED * 0.9,
	},
	GUNS: weaponArray({
		POSITION: [6, 12, 1.2, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.75, health: 1.4, maxSpeed: 1.1}]),
			TYPE: "drone",
			MAX_CHILDREN: 5,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 7),
}
Class.trapperHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Fortress",
	GUNS: weaponArray([
		{
			POSITION: [14, 8, 1, 0, 0, 0, 0],
		},
		{
			POSITION: [4, 8, 1.8, 14, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, {reload: 0.85, health: 1.5, speed: 0.9, range: 0.8}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
	], 7),
}
Class.missileHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Bombardier",
	GUNS: weaponArray([
		{
			POSITION: [13, 8, 1, 6, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, {reload: 0.8, health: 1.5, speed: 0.85}]),
				TYPE: "missile",
				STAT_CALCULATOR: "sustained",
			},
		},
		{
			POSITION: [17, 10, 1, 0, 0, 0, 0],
		},
	], 7),
}
Class.twinHeptanought = {
	PARENT: "genericHeptanought",
	LABEL: "Duelist",
	GUNS: weaponArray([
		{
			POSITION: [18, 7, 1, 0, 4, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.85, health: 1.25}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 7, 1, 0, -4, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.85, health: 1.25}]),
				TYPE: "bullet",
			},
		},
	], 7),
}

// HEPTANOUGHT BODIES
Class.heptanoughtAuraBody = {
	PARENT: "genericHeptanought",
	LABEL: "Exosphere",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 360, 2],
			TYPE: 'heptanoughtBigAura',
		},
		{
			POSITION: [11, 0, 0, 0, 360, 2],
			TYPE: 'heptanoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.heptanoughtHealAuraBody = {
	PARENT: "genericHeptanought",
	LABEL: "Ionosphere",
	TURRETS: [
		{
			POSITION: [13, 0, 0, 0, 360, 2],
			TYPE: 'heptanoughtBigHealAura',
		},
		{
			POSITION: [11, 0, 0, 0, 360, 2],
			TYPE: 'heptanoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.heptanoughtAutoBody = {
	PARENT: "genericHeptanought",
	LABEL: "Megabyte",
	TURRETS: weaponArray({
		POSITION: [4.5, 10, 0, 360/14, 180, 2],
		TYPE: "hyperAutoTurret",
	}, 7),
	PROPS: [
		{
			POSITION: [13, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}

// OCTANOUGHT (8-sided) WEAPONS
Class.destroyerOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Cataclysm",
	GUNS: weaponArray([
		{
			POSITION: [21, 14, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, {reload: 0.9, health: 1.7, damage: 1.3}]),
				TYPE: "bullet",
			},
		},
	], 8),
}
Class.sniperOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Terminus",
	BODY: {
		FOV: octanoughtBody.FOV * 1.4,
	},
	GUNS: weaponArray([
		{
			POSITION: [29, 7, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.assassin, g.assassin, {reload: 0.85, health: 1.8, damage: 1.15, speed: 1.2, maxSpeed: 1.2}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [5, 7, -1.4, 7, 0, 0, 0],
		},
	], 8),
}
Class.rapidfireOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Decimator",
	GUNS: weaponArray([
		{
			POSITION: [16, 8, 1, 0, 4, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, {reload: 0.6, health: 1.4}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 8, 1, 0, -4, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, {reload: 0.6, health: 1.4}]),
				TYPE: "bullet",
			},
		},
	], 8),
}
Class.droneOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Dominus",
	BODY: {
		FOV: octanoughtBody.FOV * 1.2,
		SPEED: octanoughtBody.SPEED * 0.85,
	},
	GUNS: weaponArray({
		POSITION: [6, 13, 1.3, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.7, health: 1.6, maxSpeed: 1.15}]),
			TYPE: "drone",
			MAX_CHILDREN: 6,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 8),
}
Class.multiTrapOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Citadel",
	GUNS: weaponArray([
		{
			POSITION: [13, 6, 1, 0, 4, 0, 0],
		},
		{
			POSITION: [3, 6, 1.7, 13, 4, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.twin, {reload: 0.8, health: 1.6, range: 0.85}]),
				TYPE: "trap",
				STAT_CALCULATOR: "trap",
			},
		},
		{
			POSITION: [13, 6, 1, 0, -4, 0, 0],
		},
		{
			POSITION: [3, 6, 1.7, 13, -4, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.twin, {reload: 0.8, health: 1.6, range: 0.85}]),
				TYPE: "trap",
				STAT_CALCULATOR: "trap",
			},
		},
	], 8),
}
Class.spreadOctanought = {
	PARENT: "genericOctanought",
	LABEL: "Scatterer",
	GUNS: weaponArray([
		{
			POSITION: [14, 4, 1, 0, -3, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.7, health: 1.1, speed: 0.9}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 4, 1, 0, 3, 0, 0.25],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.7, health: 1.1, speed: 0.9}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, 0, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.7, health: 1.1}]),
				TYPE: "bullet",
			},
		},
	], 8),
}

// OCTANOUGHT BODIES
Class.octanoughtAuraBody = {
	PARENT: "genericOctanought",
	LABEL: "Magnetosphere",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 360, 2],
			TYPE: 'octanoughtBigAura',
		},
		{
			POSITION: [12, 0, 0, 0, 360, 2],
			TYPE: 'octanoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.octanoughtHealAuraBody = {
	PARENT: "genericOctanought",
	LABEL: "Stratosphere",
	TURRETS: [
		{
			POSITION: [14, 0, 0, 0, 360, 2],
			TYPE: 'octanoughtBigHealAura',
		},
		{
			POSITION: [12, 0, 0, 0, 360, 2],
			TYPE: 'octanoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.octanoughtAutoBody = {
	PARENT: "genericOctanought",
	LABEL: "Gigabyte",
	TURRETS: weaponArray({
		POSITION: [5, 10.5, 0, 360/16, 180, 2],
		TYPE: "rapidAutoTurret",
	}, 8),
	PROPS: [
		{
			POSITION: [13.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}

// ENNEAGONNOUGHT (9-sided) WEAPONS
Class.hyperDestroyerEnneagonnought = {
	PARENT: "genericEnneagonnought",
	LABEL: "Apocalypse",
	GUNS: weaponArray([
		{
			POSITION: [22, 16, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, {reload: 0.85, health: 2, damage: 1.4}]),
				TYPE: "bullet",
			},
		},
	], 9),
}
Class.tripleGunEnneagonnought = {
	PARENT: "genericEnneagonnought",
	LABEL: "Trinity",
	GUNS: weaponArray([
		{
			POSITION: [17, 7, 1, 0, 5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.75, health: 1.3}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 7, 1, 0, 0, 0, 0.33],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.75, health: 1.3}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 7, 1, 0, -5, 0, 0.67],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.75, health: 1.3}]),
				TYPE: "bullet",
			},
		},
	], 9),
}
Class.heavyDroneEnneagonnought = {
	PARENT: "genericEnneagonnought",
	LABEL: "Overlord Prime",
	BODY: {
		FOV: enneagonnoughtBody.FOV * 1.25,
		SPEED: enneagonnoughtBody.SPEED * 0.8,
	},
	GUNS: weaponArray({
		POSITION: [7, 14, 1.4, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.65, health: 1.8, maxSpeed: 1.2, size: 1.2}]),
			TYPE: "drone",
			MAX_CHILDREN: 7,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 9),
}
Class.multiCannonEnneagonnought = {
	PARENT: "genericEnneagonnought",
	LABEL: "Onslaught",
	GUNS: weaponArray([
		{
			POSITION: [16, 5, 1, 0, 4.5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.5, health: 1.2}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 5, 1, 0, 0, 0, 0.33],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.5, health: 1.2}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 5, 1, 0, -4.5, 0, 0.67],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.5, health: 1.2}]),
				TYPE: "bullet",
			},
		},
	], 9),
}
Class.megaTrapEnneagonnought = {
	PARENT: "genericEnneagonnought",
	LABEL: "Bastion",
	GUNS: weaponArray([
		{
			POSITION: [15, 10, 1, 0, 0, 0, 0],
		},
		{
			POSITION: [4.5, 10, 2, 15, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, {reload: 0.75, health: 1.8, size: 1.2, range: 0.9}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
	], 9),
}

// ENNEAGONNOUGHT BODIES
Class.enneagonnoughtAuraBody = {
	PARENT: "genericEnneagonnought",
	LABEL: "Heliosphere",
	TURRETS: [
		{
			POSITION: [15, 0, 0, 0, 360, 2],
			TYPE: 'enneagonnoughtBigAura',
		},
		{
			POSITION: [13, 0, 0, 0, 360, 2],
			TYPE: 'enneagonnoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [16, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.enneagonnoughtHealAuraBody = {
	PARENT: "genericEnneagonnought",
	LABEL: "Mesosphere",
	TURRETS: [
		{
			POSITION: [15, 0, 0, 0, 360, 2],
			TYPE: 'enneagonnoughtBigHealAura',
		},
		{
			POSITION: [13, 0, 0, 0, 360, 2],
			TYPE: 'enneagonnoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [16, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.enneagonnoughtMultiAutoBody = {
	PARENT: "genericEnneagonnought",
	LABEL: "Terabyte",
	TURRETS: weaponArray([
		{
			POSITION: [5.5, 11, 0, 0, 180, 2],
			TYPE: "hyperAutoTurret",
		},
		{
			POSITION: [5.5, 11, 0, 360/18, 180, 2],
			TYPE: "rapidAutoTurret",
		},
	], 9),
	PROPS: [
		{
			POSITION: [14, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}

// DECAGONNOUGHT (10-sided) WEAPONS
Class.ultDestroyerDecagonnought = {
	PARENT: "genericDecagonnought",
	LABEL: "Armageddon",
	GUNS: weaponArray([
		{
			POSITION: [23, 18, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, {reload: 0.8, health: 2.3, damage: 1.5}]),
				TYPE: "bullet",
			},
		},
	], 10),
}
Class.quadGunDecagonnought = {
	PARENT: "genericDecagonnought",
	LABEL: "Quartet",
	GUNS: weaponArray([
		{
			POSITION: [18, 7, 1, 0, 6, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.7, health: 1.35}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 7, 1, 0, 2, 0, 0.25],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.7, health: 1.35}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 7, 1, 0, -2, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.7, health: 1.35}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 7, 1, 0, -6, 0, 0.75],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin, {reload: 0.7, health: 1.35}]),
				TYPE: "bullet",
			},
		},
	], 10),
}
Class.supremeDroneDecagonnought = {
	PARENT: "genericDecagonnought",
	LABEL: "Omnipotent",
	BODY: {
		FOV: decagonnoughtBody.FOV * 1.3,
		SPEED: decagonnoughtBody.SPEED * 0.75,
	},
	GUNS: weaponArray({
		POSITION: [7, 15, 1.5, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.6, health: 2, maxSpeed: 1.25, size: 1.3}]),
			TYPE: "drone",
			MAX_CHILDREN: 8,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 10),
}
Class.pentaCannonDecagonnought = {
	PARENT: "genericDecagonnought",
	LABEL: "Barrage",
	GUNS: weaponArray([
		{
			POSITION: [17, 5, 1, 0, 6, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.45, health: 1.15}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 5, 1, 0, 3, 0, 0.2],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.45, health: 1.15}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 5, 1, 0, 0, 0, 0.4],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.45, health: 1.15}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 5, 1, 0, -3, 0, 0.6],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.45, health: 1.15}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [17, 5, 1, 0, -6, 0, 0.8],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.45, health: 1.15}]),
				TYPE: "bullet",
			},
		},
	], 10),
}
Class.fortifiedDecagonnought = {
	PARENT: "genericDecagonnought",
	LABEL: "Stronghold",
	GUNS: weaponArray([
		{
			POSITION: [14, 8, 1, 0, 4, 0, 0],
		},
		{
			POSITION: [3.5, 8, 1.8, 14, 4, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, {reload: 0.7, health: 2, range: 0.95}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
		{
			POSITION: [14, 8, 1, 0, -4, 0, 0],
		},
		{
			POSITION: [3.5, 8, 1.8, 14, -4, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, {reload: 0.7, health: 2, range: 0.95}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
	], 10),
}

// DECAGONNOUGHT BODIES
Class.decagonnoughtAuraBody = {
	PARENT: "genericDecagonnought",
	LABEL: "Omnisphere",
	TURRETS: [
		{
			POSITION: [16, 0, 0, 0, 360, 2],
			TYPE: 'decagonnoughtBigAura',
		},
		{
			POSITION: [14, 0, 0, 0, 360, 2],
			TYPE: 'decagonnoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [16.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.decagonnoughtHealAuraBody = {
	PARENT: "genericDecagonnought",
	LABEL: "Troposphere",
	TURRETS: [
		{
			POSITION: [16, 0, 0, 0, 360, 2],
			TYPE: 'decagonnoughtBigHealAura',
		},
		{
			POSITION: [14, 0, 0, 0, 360, 2],
			TYPE: 'decagonnoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [16.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.decagonnoughtHeavyAutoBody = {
	PARENT: "genericDecagonnought",
	LABEL: "Petabyte",
	TURRETS: weaponArray([
		{
			POSITION: [6, 11.5, 0, 0, 180, 2],
			TYPE: "hyperAutoTurret",
		},
		{
			POSITION: [6, 11.5, 0, 360/20, 180, 2],
			TYPE: "rapidAutoTurret",
		},
	], 10),
	PROPS: [
		{
			POSITION: [14.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}

// HENDECAGONNOUGHT (11-sided) WEAPONS
Class.megaDestroyerHendecagonnought = {
	PARENT: "genericHendecagonnought",
	LABEL: "Ragnarok",
	GUNS: weaponArray([
		{
			POSITION: [24, 20, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, {reload: 0.75, health: 2.6, damage: 1.6}]),
				TYPE: "bullet",
			},
		},
	], 11),
}
Class.quintupleGunHendecagonnought = {
	PARENT: "genericHendecagonnought",
	LABEL: "Quintet",
	GUNS: weaponArray([
		{
			POSITION: [18, 6, 1, 0, 7, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.65, health: 1.4}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 6, 1, 0, 3.5, 0, 0.2],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.65, health: 1.4}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 6, 1, 0, 0, 0, 0.4],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.65, health: 1.4}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 6, 1, 0, -3.5, 0, 0.6],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.65, health: 1.4}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [18, 6, 1, 0, -7, 0, 0.8],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.65, health: 1.4}]),
				TYPE: "bullet",
			},
		},
	], 11),
}
Class.masterDroneHendecagonnought = {
	PARENT: "genericHendecagonnought",
	LABEL: "Sovereign",
	BODY: {
		FOV: hendecagonnoughtBody.FOV * 1.35,
		SPEED: hendecagonnoughtBody.SPEED * 0.7,
	},
	GUNS: weaponArray({
		POSITION: [8, 16, 1.6, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.55, health: 2.2, maxSpeed: 1.3, size: 1.4}]),
			TYPE: "drone",
			MAX_CHILDREN: 9,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 11),
}
Class.spreadCannonHendecagonnought = {
	PARENT: "genericHendecagonnought",
	LABEL: "Maelstrom",
	GUNS: weaponArray([
		{
			POSITION: [15, 4, 1, 0, 6, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.4, health: 1.1, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [15, 4, 1, 0, 3, 0, 0.15],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.4, health: 1.1, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [15, 4, 1, 0, 0, 0, 0.3],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.4, health: 1.1, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [15, 4, 1, 0, -3, 0, 0.45],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.4, health: 1.1, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [15, 4, 1, 0, -6, 0, 0.6],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.4, health: 1.1, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
	], 11),
}

// HENDECAGONNOUGHT BODIES
Class.hendecagonnoughtAuraBody = {
	PARENT: "genericHendecagonnought",
	LABEL: "Hypersphere",
	TURRETS: [
		{
			POSITION: [17, 0, 0, 0, 360, 2],
			TYPE: 'hendecagonnoughtBigAura',
		},
		{
			POSITION: [15, 0, 0, 0, 360, 2],
			TYPE: 'hendecagonnoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [17, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.hendecagonnoughtHealAuraBody = {
	PARENT: "genericHendecagonnought",
	LABEL: "Ozonosphere",
	TURRETS: [
		{
			POSITION: [17, 0, 0, 0, 360, 2],
			TYPE: 'hendecagonnoughtBigHealAura',
		},
		{
			POSITION: [15, 0, 0, 0, 360, 2],
			TYPE: 'hendecagonnoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [17, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.hendecagonnoughtUltimateAutoBody = {
	PARENT: "genericHendecagonnought",
	LABEL: "Exabyte",
	TURRETS: weaponArray([
		{
			POSITION: [6.5, 12, 0, 0, 180, 2],
			TYPE: "hyperAutoTurret",
		},
		{
			POSITION: [6.5, 12, 0, 360/22, 180, 2],
			TYPE: "rapidAutoTurret",
		},
	], 11),
	PROPS: [
		{
			POSITION: [15, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}

// DODECAGONNOUGHT (12-sided) WEAPONS - ULTIMATE TIER
Class.godDestroyerDodecagonnought = {
	PARENT: "genericDodecagonnought",
	LABEL: "Oblivion",
	GUNS: weaponArray([
		{
			POSITION: [25, 22, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.destroyer, {reload: 0.7, health: 3, damage: 1.7}]),
				TYPE: "bullet",
			},
		},
	], 12),
}
Class.sextupleGunDodecagonnought = {
	PARENT: "genericDodecagonnought",
	LABEL: "Sextet",
	GUNS: weaponArray([
		{
			POSITION: [19, 6, 1, 0, 7.5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [19, 6, 1, 0, 4.5, 0, 0.16],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [19, 6, 1, 0, 1.5, 0, 0.33],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [19, 6, 1, 0, -1.5, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [19, 6, 1, 0, -4.5, 0, 0.67],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [19, 6, 1, 0, -7.5, 0, 0.83],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.6, health: 1.45}]),
				TYPE: "bullet",
			},
		},
	], 12),
}
Class.godDroneDodecagonnought = {
	PARENT: "genericDodecagonnought",
	LABEL: "Absolute",
	BODY: {
		FOV: dodecagonnoughtBody.FOV * 1.4,
		SPEED: dodecagonnoughtBody.SPEED * 0.65,
	},
	GUNS: weaponArray({
		POSITION: [8, 17, 1.7, 8, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.5, health: 2.5, maxSpeed: 1.35, size: 1.5}]),
			TYPE: "drone",
			MAX_CHILDREN: 10,
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
		},
	}, 12),
}
Class.ultimateSpreadDodecagonnought = {
	PARENT: "genericDodecagonnought",
	LABEL: "Pandemonium",
	GUNS: weaponArray([
		{
			POSITION: [16, 4, 1, 0, 7, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, 4.5, 0, 0.12],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, 2, 0, 0.24],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, 0, 0, 0.36],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, -2, 0, 0.48],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, -4.5, 0, 0.6],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 4, 1, 0, -7, 0, 0.72],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.35, health: 1.12, speed: 0.95}]),
				TYPE: "bullet",
			},
		},
	], 12),
}
Class.ultimateFortressDodecagonnought = {
	PARENT: "genericDodecagonnought",
	LABEL: "Bulwark",
	GUNS: weaponArray([
		{
			POSITION: [15, 9, 1, 0, 5, 0, 0],
		},
		{
			POSITION: [4, 9, 1.9, 15, 5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, {reload: 0.65, health: 2.2, size: 1.1, range: 1}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
		{
			POSITION: [15, 9, 1, 0, -5, 0, 0],
		},
		{
			POSITION: [4, 9, 1.9, 15, -5, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, {reload: 0.65, health: 2.2, size: 1.1, range: 1}]),
				TYPE: "unsetTrap",
				STAT_CALCULATOR: "block"
			},
		},
	], 12),
}

// DODECAGONNOUGHT BODIES
Class.dodecagonnoughtAuraBody = {
	PARENT: "genericDodecagonnought",
	LABEL: "Omnipresence",
	TURRETS: [
		{
			POSITION: [18, 0, 0, 0, 360, 2],
			TYPE: 'dodecagonnoughtBigAura',
		},
		{
			POSITION: [16, 0, 0, 0, 360, 2],
			TYPE: 'dodecagonnoughtSmallAura',
		},
	],
	PROPS: [
		{
			POSITION: [17.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.dodecagonnoughtHealAuraBody = {
	PARENT: "genericDodecagonnought",
	LABEL: "Biosphere",
	TURRETS: [
		{
			POSITION: [18, 0, 0, 0, 360, 2],
			TYPE: 'dodecagonnoughtBigHealAura',
		},
		{
			POSITION: [16, 0, 0, 0, 360, 2],
			TYPE: 'dodecagonnoughtSmallHealAura',
		},
	],
	PROPS: [
		{
			POSITION: [17.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		}
	]
}
Class.dodecagonnoughtGodAutoBody = {
	PARENT: "genericDodecagonnought",
	LABEL: "Zettabyte",
	TURRETS: weaponArray([
		{
			POSITION: [7, 12.5, 0, 0, 180, 2],
			TYPE: "hyperAutoTurret",
		},
		{
			POSITION: [7, 12.5, 0, 360/24, 180, 2],
			TYPE: "rapidAutoTurret",
		},
	], 12),
	PROPS: [
		{
			POSITION: [15.5, 0, 0, 0, 1],
			TYPE: 'hexagon',
		},
	]
}
