//=============================================================================
// MikiitoFootstepSound.js
//=============================================================================
/*:
 * Version: 1.0
 * @plugindesc [1.0] MIKIITO FOOTSTEP SOUND SYSTEM
 * @author Miguel Gonzalez ( mikiito - http://www.mikiito.es/ )
 *
 * @param Pitch Volume
 * @desc Sound effect pitch.
 * (Number 50 ~ 150)
 * @default 100
 *
 * @param Region 01 Sound
 * @desc Sound that will be reproduced when walking on the region 01
 * @default Knock
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 02 Sound
 * @desc Sound that will be reproduced when walking on the region 02
 * @default Absorb1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 03 Sound
 * @desc Sound that will be reproduced when walking on the region 03
 * @default Splash
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 04 Sound
 * @desc Sound that will be reproduced when walking on the region 04
 * @default Water1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 05 Sound
 * @desc Sound that will be reproduced when walking on the region 05
 * @default Open1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 06 Sound
 * @desc Sound that will be reproduced when walking on the region 06
 * @default Thunder3
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 07 Sound
 * @desc Sound that will be reproduced when walking on the region 07
 * @default Jump1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 08 Sound
 * @desc Sound that will be reproduced when walking on the region 08
 * @default Parry
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 09 Sound
 * @desc Sound that will be reproduced when walking on the region 09
 * @default Slash5
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param Region 10 Sound
 * @desc Sound that will be reproduced when walking on the region 10
 * @default Run
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param 
 *
 * @param Region 01 Volume
 * @type number
 * @desc Sound effect volume of Region 01.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 02 Volume
 * @type number
 * @desc Sound effect volume of Region 02.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 03 Volume
 * @type number
 * @desc Sound effect volume of Region 03.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 04 Volume
 * @type number
 * @desc Sound effect volume of Region 04.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 05 Volume
 * @type number
 * @desc Sound effect volume of Region 05.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 06 Volume
 * @type number
 * @desc Sound effect volume of Region 06.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 07 Volume
 * @type number
 * @desc Sound effect volume of Region 07.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 08 Volume
 * @type number
 * @desc Sound effect volume of Region 08.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 09 Volume
 * @type number
 * @desc Sound effect volume of Region 09.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @param Region 10 Volume
 * @type number
 * @desc Sound effect volume of Region 10.
 * (Number 0 ~ 100)
 * @default 80
 * @max 100
 * @min 0
 * @decimals 0
 *
 * @help
 * ==============================================================================
 *               W H A T   D O E S   T H I S   P L U G I N   D O   ?             
 * ==============================================================================
 * This script allows to add sound to the step for actors by map regions.
 *
 * ==============================================================================
 *                       H O W   D O E S   I T   W O R K   ?                     
 * ==============================================================================
 * By default the plugin does not need any additional files, it should be able to
 * work by just activating it and setting regions on the map.
 *
 * Use the "Regions" tab that you will find in the rpg maker map editor, use 
 * regions 1 to 10 to define different types of floor and test the game.
 *
 * Once you see how it works, you can change the sounds of each region from the 
 * plugin parameters.
 *
 * ==============================================================================
 *                             T E R M S   O F   U S E                           
 * ==============================================================================
 * This plugin is totally free, both for "free" and "commercial use", the only 
 * thing I would appreciate is that you include me in the credits or make a 
 * mention about me.
 *
 * I would be excited if you show me your game with the script to try it :)
 *
 * ==============================================================================
 *                                  C O N T A C T                                
 * ==============================================================================
 * If you want to contact me to comment something related to the plugin, you can
 * do it through one of the following contact networks
 * · http://www.mikiito.es/
 * · https://steamcommunity.com/id/mikiito
 *
 */
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.MikiitoFootstepSound = 1.00;
var Mikiito = Mikiito || {};
Mikiito.MikiitoFootstepSound = Mikiito.MikiitoFootstepSound || {};

function MikiitoFootstepSound(){}

var parameters = PluginManager.parameters('MikiitoFootstepSound');

MikiitoFootstepSound.pitchVolume = Number(parameters['Pitch Volume']);

MikiitoFootstepSound.reg01Sound  = String(parameters['Region 01 Sound']);
MikiitoFootstepSound.reg02Sound  = String(parameters['Region 02 Sound']);
MikiitoFootstepSound.reg03Sound  = String(parameters['Region 03 Sound']);
MikiitoFootstepSound.reg04Sound  = String(parameters['Region 04 Sound']);
MikiitoFootstepSound.reg05Sound  = String(parameters['Region 05 Sound']);
MikiitoFootstepSound.reg06Sound  = String(parameters['Region 06 Sound']);
MikiitoFootstepSound.reg07Sound  = String(parameters['Region 07 Sound']);
MikiitoFootstepSound.reg08Sound  = String(parameters['Region 08 Sound']);
MikiitoFootstepSound.reg09Sound  = String(parameters['Region 09 Sound']);
MikiitoFootstepSound.reg10Sound  = String(parameters['Region 10 Sound']);

MikiitoFootstepSound.reg01Volume = Number(parameters['Region 01 Volume']);
MikiitoFootstepSound.reg02Volume = Number(parameters['Region 02 Volume']);
MikiitoFootstepSound.reg03Volume = Number(parameters['Region 03 Volume']);
MikiitoFootstepSound.reg04Volume = Number(parameters['Region 04 Volume']);
MikiitoFootstepSound.reg05Volume = Number(parameters['Region 05 Volume']);
MikiitoFootstepSound.reg06Volume = Number(parameters['Region 06 Volume']);
MikiitoFootstepSound.reg07Volume = Number(parameters['Region 07 Volume']);
MikiitoFootstepSound.reg08Volume = Number(parameters['Region 08 Volume']);
MikiitoFootstepSound.reg09Volume = Number(parameters['Region 09 Volume']);
MikiitoFootstepSound.reg10Volume = Number(parameters['Region 10 Volume']);

MikiitoFootstepSound.initialize = function () {

    if (this.pitchVolume > 150) {
        this.pitchVolume = 150;
    }
    else if (this.pitchVolume < 50) {
        this.pitchVolume = 100;
    };
};

MikiitoFootstepSound.initialize();

MikiitoFootstepSound.play = function () {

    if ($gamePlayer.isMoving()) {
    	
        var idRegion = $gameMap.regionId($gamePlayer.x, $gamePlayer.y);
        var sndPisada = '';
        var sndVolume = 80;

        switch(idRegion) {
            case 01: sndPisada = this.reg01Sound; sndVolume = this.reg01Volume; break;
            case 02: sndPisada = this.reg02Sound; sndVolume = this.reg02Volume; break;
            case 03: sndPisada = this.reg03Sound; sndVolume = this.reg03Volume; break;
            case 04: sndPisada = this.reg04Sound; sndVolume = this.reg04Volume; break;
            case 05: sndPisada = this.reg05Sound; sndVolume = this.reg05Volume; break;
            case 06: sndPisada = this.reg06Sound; sndVolume = this.reg06Volume; break;
            case 07: sndPisada = this.reg07Sound; sndVolume = this.reg07Volume; break;
            case 08: sndPisada = this.reg08Sound; sndVolume = this.reg08Volume; break;
            case 09: sndPisada = this.reg09Sound; sndVolume = this.reg09Volume; break;
            case 10: sndPisada = this.reg10Sound; sndVolume = this.reg10Volume; break;
            default: return;
        }

    	AudioManager.playSe({name: sndPisada, volume: sndVolume, pitch: this.pitchVolume, pan: 0});

        return;
    }

};

Mikiito.MikiitoFootstepSound.Game_Player_executeMove = Game_Player.prototype.executeMove;

Game_Player.prototype.executeMove = function (direction) {

    Mikiito.MikiitoFootstepSound.Game_Player_executeMove.call(this, direction);

    MikiitoFootstepSound.play();

};