var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function () {


    //Manual weather override
    function clickWeather(weather, action) {
        $(weather).on("click", function () {
            //$('.weather').html('<img src="'+action+'.png">');
            $('.weather').text(action);
            if (action !== "none") {
                $('.weathermaster').html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="' + action + '.png" width="32" height="32">')
            } else {
                $('.weathermaster').html('')
            }
            if (action == 'none') {
                counter = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
            } else if (action == 'sun') {
                counter = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]
            } else if (action == 'rain') {
                counter = [[2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2]]
            } else if (action == 'hail') {
                counter = [[3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3]]
            } else if (action == 'sand') {
                counter = [[4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4]]
            } else if (action == 'fog') {
                counter = [[5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5]]
            }
        });
    }

    //Specific weather override
    function weatherSelect(a, b) {
        $('#weather' + a + b).on("click", function () {
            if (counter[a][b] == 0) {
                $(this).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sun.png" width="32" height="32">')
                counter[a][b]++;
            } else if (counter[a][b] == 1) {
                $(this).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="rain.png" width="32" height="32">')
                counter[a][b]++;
            } else if (counter[a][b] == 2) {
                $(this).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="hail.png" width="32" height="32">')
                counter[a][b]++;
            } else if (counter[a][b] == 3) {
                $(this).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sand.png" width="32" height="32">')
                counter[a][b]++;
            } else if (counter[a][b] == 4) {
                $(this).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="fog.png" width="32" height="32">')
                counter[a][b]++;
            } else if (counter[a][b] == 5) {
                $(this).html('')
                counter[a][b] = 0;
            }
        })
    }

    var counter = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

    for (i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            weatherSelect(i, j);
        }
    }

    var trickRoom
    trickRoom = false
    var gravity
    gravity = false

    $('#trickRoom').on("click", function () {
        if (trickRoom) {
            trickRoom = false
        } else {
            trickRoom = true
        }
        transformRevisualize();
    });

    $('#gravity').on("click", function () {
        if (gravity) {
            gravity = false
        } else {
            gravity = true
        }
        transformRevisualize();
    });


    clickWeather("#none", "none");
    clickWeather("#sun", "sun");
    clickWeather("#rain", "rain");
    clickWeather("#hail", "hail");
    clickWeather("#sand", "sand");
    clickWeather("#fog", "fog");

    function resetStatMods() {
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 2; j++) {
                for (k = 0; k < 5; k++) {
                    $('#' + j + '_' + i + '_' + k).html(0)
                }
            }
        }
    }

    var StatModArr = [];

    function setStatModArr() {
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 6; j++) {
                b = [];
                for (k = 0; k < 6; k++) {
                    a = i + "_" + j + "_" + k;
                    c = '#' + a;
                    b[k] = parseInt($(c).html(), 10);
                }
                StatModArr.push(b)
            }
        }
    }
    var bluedittoposition
    var reddittoposition
    bluedittoposition = 3
    reddittoposition = 3

    function displayTransformBoxes() {
        /* TODO: missing from HTML */
        return;
        
        //if ditto is on blue team and has transform
        $('#bluetarget0').html(teams[1][0].species.name)
        $('#bluetarget1').html(teams[1][1].species.name)
        $('#bluetarget2').html(teams[1][2].species.name)
        $('#redtarget0').html(teams[0][0].species.name)
        $('#redtarget1').html(teams[0][1].species.name)
        $('#redtarget2').html(teams[0][2].species.name)
        bluedittoposition = 3
        reddittoposition = 3
        for (j = 0; j < 3; j++) {
            for (i = 0; i < teams[0][j].moves.length; i++) {
                if ((teams[0][j].moves[i].name == "Transform")) {
                    bluedittoposition = j
                    $('#blueditto0').show();
                    $('#blueditto1').show();
                    $('#blueditto2').show();
                }
            }
        }
        if (bluedittoposition == 3) {
            $('#blueditto0').hide();
            $('#blueditto1').hide();
            $('#blueditto2').hide();
        }
        for (j = 0; j < 3; j++) {
            for (i = 0; i < teams[1][j].moves.length; i++) {
                if ((teams[1][j].moves[i].name == "Transform")) {
                    reddittoposition = j
                    $('#redditto0').show();
                    $('#redditto1').show();
                    $('#redditto2').show();
                }
            }
        }
        if (reddittoposition == 3) {
            $('#redditto0').hide();
            $('#redditto1').hide();
            $('#redditto2').hide();
        }
    }

    $('#blueditto0').on("click", function () {
        teams[0][bluedittoposition].species.name = teams[1][0].species.name
        teams[0][bluedittoposition].ability.name = teams[1][0].ability.name
        teams[0][bluedittoposition].gender = teams[1][0].gender
        teams[0][bluedittoposition].moves = teams[1][0].moves
        teams[0][bluedittoposition].nature.name = teams[1][0].nature.name
        teams[0][bluedittoposition].stats.atk = teams[1][0].stats.atk
        teams[0][bluedittoposition].stats.def = teams[1][0].stats.def
        teams[0][bluedittoposition].stats.spA = teams[1][0].stats.spA
        teams[0][bluedittoposition].stats.spD = teams[1][0].stats.spD
        teams[0][bluedittoposition].stats.spe = teams[1][0].stats.spe
        teams[0][bluedittoposition].species.types = teams[1][0].species.types
        transformRevisualize();
    });
    $('#blueditto1').on("click", function () {
        teams[0][bluedittoposition].species.name = teams[1][1].species.name
        teams[0][bluedittoposition].ability.name = teams[1][1].ability.name
        teams[0][bluedittoposition].gender = teams[1][1].gender
        teams[0][bluedittoposition].moves = teams[1][1].moves
        teams[0][bluedittoposition].nature.name = teams[1][1].nature.name
        teams[0][bluedittoposition].stats.atk = teams[1][1].stats.atk
        teams[0][bluedittoposition].stats.def = teams[1][1].stats.def
        teams[0][bluedittoposition].stats.spA = teams[1][1].stats.spA
        teams[0][bluedittoposition].stats.spD = teams[1][1].stats.spD
        teams[0][bluedittoposition].stats.spe = teams[1][1].stats.spe
        teams[0][bluedittoposition].species.types = teams[1][1].species.types
        transformRevisualize();
    });
    $('#blueditto2').on("click", function () {
        teams[0][bluedittoposition].species.name = teams[1][2].species.name
        teams[0][bluedittoposition].ability.name = teams[1][2].ability.name
        teams[0][bluedittoposition].gender = teams[1][2].gender
        teams[0][bluedittoposition].moves = teams[1][2].moves
        teams[0][bluedittoposition].nature.name = teams[1][2].nature.name
        teams[0][bluedittoposition].stats.atk = teams[1][2].stats.atk
        teams[0][bluedittoposition].stats.def = teams[1][2].stats.def
        teams[0][bluedittoposition].stats.spA = teams[1][2].stats.spA
        teams[0][bluedittoposition].stats.spD = teams[1][2].stats.spD
        teams[0][bluedittoposition].stats.spe = teams[1][2].stats.spe
        teams[0][bluedittoposition].species.types = teams[1][2].species.types
        transformRevisualize();
    });

    $('#redditto0').on("click", function () {
        teams[1][reddittoposition].species.name = teams[0][0].species.name
        teams[1][reddittoposition].ability.name = teams[0][0].ability.name
        teams[1][reddittoposition].gender = teams[0][0].gender
        teams[1][reddittoposition].moves = teams[0][0].moves
        teams[1][reddittoposition].nature.name = teams[0][0].nature.name
        teams[1][reddittoposition].stats.atk = teams[0][0].stats.atk
        teams[1][reddittoposition].stats.def = teams[0][0].stats.def
        teams[1][reddittoposition].stats.spA = teams[0][0].stats.spA
        teams[1][reddittoposition].stats.spD = teams[0][0].stats.spD
        teams[1][reddittoposition].stats.spe = teams[0][0].stats.spe
        teams[1][reddittoposition].species.types = teams[0][0].species.types
        transformRevisualize();
    });
    $('#redditto1').on("click", function () {
        teams[1][reddittoposition].species.name = teams[0][1].species.name
        teams[1][reddittoposition].ability.name = teams[0][1].ability.name
        teams[1][reddittoposition].gender = teams[0][1].gender
        teams[1][reddittoposition].moves = teams[0][1].moves
        teams[1][reddittoposition].nature.name = teams[0][1].nature.name
        teams[1][reddittoposition].stats.atk = teams[0][1].stats.atk
        teams[1][reddittoposition].stats.def = teams[0][1].stats.def
        teams[1][reddittoposition].stats.spA = teams[0][1].stats.spA
        teams[1][reddittoposition].stats.spD = teams[0][1].stats.spD
        teams[1][reddittoposition].stats.spe = teams[0][1].stats.spe
        teams[1][reddittoposition].species.types = teams[0][1].species.types
        transformRevisualize();
    });
    $('#redditto2').on("click", function () {
        teams[1][reddittoposition].species.name = teams[0][2].species.name
        teams[1][reddittoposition].ability.name = teams[0][2].ability.name
        teams[1][reddittoposition].gender = teams[0][2].gender
        teams[1][reddittoposition].moves = teams[0][2].moves
        teams[1][reddittoposition].nature.name = teams[0][2].nature.name
        teams[1][reddittoposition].stats.atk = teams[0][2].stats.atk
        teams[1][reddittoposition].stats.def = teams[0][2].stats.def
        teams[1][reddittoposition].stats.spA = teams[0][2].stats.spA
        teams[1][reddittoposition].stats.spD = teams[0][2].stats.spD
        teams[1][reddittoposition].stats.spe = teams[0][2].stats.spe
        teams[1][reddittoposition].species.types = teams[0][2].species.types
        transformRevisualize();
    });

    function applyDefaultAbilites() {
        blueAbilities = []
        for (var i = 0; i < 6; i++) {
            blueAbilities[i] = teams[0][i]? teams[0][i].ability.name : ""
        }
        
        redAbilities = []
        for (var i = 0; i < 6; i++) {
            redAbilities[i] = teams[1][i]? teams[1][i].ability.name : ""
        }
        
        //Intimidate
        if (blueAbilities[0] == "Intimidate") {
            if (redAbilities[0] !== 'Hyper Cutter' || redAbilities[0] !== 'Clear Body' || redAbilities[0] !== 'White Smoke') {
                $('#1_0_0').html(-1)
                StatModArr[6][0] = StatModArr[6][0] - 1;
            }
        }
        if (redAbilities[0] == "Intimidate") {
            if (blueAbilities[0] !== 'Hyper Cutter' || blueAbilities[0] !== 'Clear Body' || blueAbilities[0] !== 'White Smoke') {
                $('#0_0_0').html(-1)
                StatModArr[0][0] = StatModArr[0][0] - 1;
            }
        }
        
        //download
        if (blueAbilities[0] == "Download") {
            if (teams[1][0].stats.spD > teams[1][0].stats.def) {
                $('#0_0_0').html(1)
                StatModArr[0][0]++;
            } else {
                $('#0_0_2').html(1)
                StatModArr[0][2]++;
            }
        }
        if (redAbilities[0] == "Download") {
            if (teams[0][0].stats.spD > teams[0][0].stats.def) {
                $('#1_0_0').html(1)
                StatModArr[6][0] = 1
            } else {
                $('#1_0_2').html(1)
                StatModArr[6][2] = 1
            }
        }
        
        for (var blue = 0; blue < 6; blue++) {
            if (!teams[0][blue]) continue;
            for (var red = 0; red < 6; red++) {
                if (!teams[1][red]) continue;
                if (blue > red) {
                    lateAbility = blueAbilities[blue];
                    earlyAbility = redAbilities[red];
                }
                else if (blue < red) {
                    earlyAbility = blueAbilities[blue];
                    lateAbility = redAbilities[red];
                }
                else {
                    if (CalculateSpeedTie(teams[0][blue].stats.spe, teams[1][red].stats.spe, teams[0][blue].item.name, teams[1][red].item.name, teams[0][blue].ability.name, teams[1][red].ability.name, StatModArr[blue][4], StatModArr[6 + red][4], 0, 0) == 'blue') {
                        earlyAbility = blueAbilities[blue];
                        lateAbility = redAbilities[red];
                    }
                    else {
                        earlyAbility = blueAbilities[blue];
                        lateAbility = redAbilities[red];
                    }
                }
            
                if (lateAbility == 'Drought') {
                    counter[blue][red] = 1
                    $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sun.png" width="32" height="32">')
                } else if (lateAbility == 'Drizzle') {
                    counter[blue][red] = 2
                    $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="rain.png" width="32" height="32">')
                } else if (lateAbility == 'Snow Warning') {
                    counter[blue][red] = 3
                    $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="hail.png" width="32" height="32">')
                } else if (lateAbility == 'Sand Stream') {
                    counter[blue][red] = 4
                    $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sand.png" width="32" height="32">')
                } else {
                    if (earlyAbility== 'Drought') {
                        counter[blue][red] = 1
                        $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sun.png" width="32" height="32">')
                    } else if (earlyAbility == 'Drizzle') {
                        counter[blue][red] = 2
                        $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="rain.png" width="32" height="32">')
                    } else if (earlyAbility == 'Snow Warning') {
                        counter[blue][red] = 3
                        $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="hail.png" width="32" height="32">')
                    } else if (earlyAbility == 'Sand Stream') {
                        counter[blue][red] = 4
                        $('#weather' + blue + red).html('<img style="transform: rotate(315deg); position: relative; top: -1em; left: -1em;" src="sand.png" width="32" height="32">')
                    }
                }
                
                if (counter[blue][red] == 0) {
                    if (blue != 0 && counter[blue - 1][red]) {
                        counter[blue][red] = counter[blue - 1][red];
                        $('#weather' + blue + red).html($('#weather' + (blue - 1) + red));
                    }
                    else if (red != 0 && counter[blue][red - 1]) {
                        counter[blue][red] = counter[blue][red - 1];
                        $('#weather' + blue + red).html($('#weather' + blue + (red - 1)));
                    }
                }
            }
        }
    }

    function spemodToMultiplier(mod, ability) {
        if (ability !== 'Simple') {
            if (mod < 0) {
                return (2) / (2 - (mod));
            } else if (mod == 0) {
                return 1;
            } else if (mod >= 1) {
                return ((2 + mod) / 2);
            }
        } else if (ability == 'Simple') {
            if (mod > 3) {
                mod = 3
            } else if (mod < -3) {
                mod = -3
            }
            if (mod < 0) {
                return (2) / (2 - (2 * mod));
            } else if (mod == 0) {
                return 1;
            } else if (mod >= 1) {
                return ((2 + 2 * mod) / 2);
            }
        }
    }

    function ModToMultiplier(mod, selfability, foeability) {
        if (foeability !== 'Unaware') {
            if (selfability !== 'Simple') {
                if (mod < 0) {
                    return (2) / (2 - (mod));
                } else if (mod == 0) {
                    return 1;
                } else if (mod >= 1) {
                    return ((2 + mod) / 2);
                }
            } else if (selfability == 'Simple') {
                if (mod > 3) {
                    mod = 3
                } else if (mod < -3) {
                    mod = -3
                }
                if (mod < 0) {
                    return (2) / (2 - (2 * mod));
                } else if (mod == 0) {
                    return 1;
                } else if (mod >= 1) {
                    return ((2 + 2 * mod) / 2);
                }
            }
        } else {
            return 1;
        }
    }

    $('.revisualise').on("click", function () {
        setTimeout(function () {
            damageMatrix = [];
            StatModArr = [];
            setStatModArr();
            getDamage();
            insertMoves();
            fillentries();
            AllSpeedTies();
        }, 40);
    });

    function LoadNewMatch() {
        teams = data.teams;
        for (j = 0; j < 2; j++) {
            for (i = 0; i < 6; i++) {
                StatModArr.push([0, 0, 0, 0, 0, teams[j][i]? teams[j][i].stats.hp : 0]);
            }
        }
        insertNames();
        insertMoves();
        insertStats();
        applyDefaultAbilites();
        getDamage();
        fillentries();
        AllSpeedTies();
        LoadImgSprites();
        match_id = data.id;
    }

    $('#bgtoggle').on("click", function () {
        bgtoggle();
    });

    typeIndices = {
        'Normal': 0,
        'Fighting': 1,
        'Flying': 2,
        'Poison': 3,
        'Ground': 4,
        'Rock': 5,
        'Bug': 6,
        'Ghost': 7,
        'Steel': 8,
        'Fire': 9,
        'Water': 10,
        'Grass': 11,
        'Electric': 12,
        'Psychic': 13,
        'Ice': 14,
        'Dragon': 15,
        'Dark': 16,
        'None': 17
    }
    typeChart = [[1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00, 0.00, 0.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
                 [2.00, 1.00, 0.50, 0.50, 1.00, 2.00, 0.50, 0.00, 2.00, 1.00, 1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 2.00],
                 [1.00, 2.00, 1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 0.50, 1.00, 1.00, 2.00, 0.50, 1.00, 1.00, 1.00, 1.00],
                 [1.00, 1.00, 1.00, 0.50, 0.50, 0.50, 1.00, 0.50, 0.00, 1.00, 1.00, 2.00, 1.00, 1.00, 1.00, 1.00, 1.00],
                 [1.00, 1.00, 0.00, 2.00, 1.00, 2.00, 0.50, 1.00, 2.00, 2.00, 1.00, 0.50, 2.00, 1.00, 1.00, 1.00, 1.00],
                 [1.00, 0.50, 2.00, 1.00, 0.50, 1.00, 2.00, 1.00, 0.50, 2.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00],
                 [1.00, 0.50, 0.50, 0.50, 1.00, 1.00, 1.00, 0.50, 0.50, 0.50, 1.00, 2.00, 1.00, 2.00, 1.00, 1.00, 2.00],
                 [0.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.50, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 0.50],
                 [1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 0.50, 0.50, 0.50, 1.00, 0.50, 1.00, 2.00, 1.00, 1.00],
                 [1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 2.00, 1.00, 2.00, 0.50, 0.50, 2.00, 1.00, 1.00, 2.00, 0.50, 1.00],
                 [1.00, 1.00, 1.00, 1.00, 2.00, 2.00, 1.00, 1.00, 1.00, 2.00, 0.50, 0.50, 1.00, 1.00, 1.00, 0.50, 1.00],
                 [1.00, 1.00, 0.50, 0.50, 2.00, 2.00, 0.50, 1.00, 0.50, 0.50, 2.00, 0.50, 1.00, 1.00, 1.00, 0.50, 1.00],
                 [1.00, 1.00, 2.00, 1.00, 0.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.50, 0.50, 1.00, 1.00, 0.50, 1.00],
                 [1.00, 2.00, 1.00, 2.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00, 1.00, 0.00],
                 [1.00, 1.00, 2.00, 1.00, 2.00, 1.00, 1.00, 1.00, 0.50, 0.50, 0.50, 2.00, 1.00, 1.00, 0.50, 2.00, 1.00],
                 [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 0.50, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00],
                 [1.00, 0.50, 1.00, 1.00, 1.00, 1.00, 1.00, 2.00, 0.50, 1.00, 1.00, 1.00, 1.00, 2.00, 1.00, 1.00, 0.50],
                 [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00]]

    RecoilMoves = ['Double-Edge', 'Brave Bird', 'Wood Hammer', 'Flare Blitz', 'Volt Tackle', 'Take Down', 'Submission', 'Head Smash']
    PunchMoves = ['Bullet Punch', 'Comet Punch', 'Dizzy Punch', 'Drain Punch', 'Dynamic Punch', 'Fire Punch', 'Focus Punch', 'Hammer Arm', 'Ice Punch', 'Mach Punch', 'Mega Punch', 'Meteor Mash', 'Shadow Punch', 'Sky Uppercut', 'Thunder Punch']
    SoundMoves = ['Hyper Voice', 'Bug Buzz', 'Chatter', 'Grass Whistle', 'Growl', 'Heal Bell', 'Metal Sound', 'Roar', 'Screech', 'Sing', 'Snore', 'Supersonic', 'Uproar']
    MultistrikeMoves = ['Arm Thrust', 'Barrage', 'Bone Rush', 'Bullet Seed', 'Comet Punch', 'Double Slap', 'Fury Attack', 'Fury Swipes', 'Icicle Spear', 'Pin Missile', 'Rock Blast', 'Spike Cannon']
    DoublestrikeMoves = ['Bonemerang', 'Double Hit', 'Double Kick', 'Twineedle']

    var damageMatrix = [
        //Pokemon attacking
        //[],
        //Pokemon defending
        //[]
        //Move
    ];

    function getDamage() {
        //for both sides attacking
        for (h = 0; h < 2; h++) {
            //for all attacking pokemon on that side
            for (i = 0; i < 6; i++) {
                // and the defenders on the other side
                for (j = 0; j < 6; j++) {
                    //and all attacking moves for the attacking side
                    for (k = 0; k < 4; k++) {
                        if (!teams[h][i] || !teams[(h * (-1) + 1)][j]) {
                            damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                            continue;
                        }
                        if (teams[(h * (-1) + 1)][j].stats.def == "???") {
                            damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                        } else {
                            if (teams[h][i].moves[k] == null) {
                                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                            } else if (teams[h][i].moves[k] == "???") {
                                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                            } else {
                                var weather
                                weather = "none";
                                if (h == 0) {
                                    r2 = counter[i][j]
                                } else {
                                    r2 = counter[j][i]
                                }
                                switch (r2) {
                                    case 0:
                                        weather = "none";
                                        break;
                                    case 1:
                                        weather = "sun";
                                        break;
                                    case 2:
                                        weather = "rain";
                                        break;
                                    case 3:
                                        weather = "hail";
                                        break;
                                    case 4:
                                        weather = "sand";
                                        break;
                                    case 5:
                                        weather = "fog";
                                        break;
                                    default:
                                        weather = "none";
                                }



                                if (teams[h][i].moves[k].category === "Physical") {
                                    if (teams[h][i].moves[k].power > 0) {
                                        damageMatrix.push(rawDamage(teams[h][i].moves[k].name, teams[h][i].stats.atk, teams[(h * (-1) + 1)][j].stats.def, teams[h][i].moves[k].power, teams[h][i].level, teams[h][i].moves[k].type, teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Physical", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather))
                                    } else {
                                        findPower(teams[h][i].moves[k].name, teams[h][i].stats.atk, teams[(h * (-1) + 1)][j].stats.def, teams[h][i].moves[k].power, teams[h][i].level, teams[h][i].moves[k].type, teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Physical", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather, StatModArr[(6 * h + i)][4], StatModArr[(6 * (h * (-1) + 1) + j)][4], teams[h][i].moves[k].pp)
                                    }
                                } else if (teams[h][i].moves[k].category === "Special") {
                                    if (teams[h][i].moves[k].power > 0) {
                                        damageMatrix.push(rawDamage(teams[h][i].moves[k].name, teams[h][i].stats.spA, teams[(h * (-1) + 1)][j].stats.spD, teams[h][i].moves[k].power, teams[h][i].level, teams[h][i].moves[k].type, teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Special", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather))
                                    } else {
                                        findPower(teams[h][i].moves[k].name, teams[h][i].stats.spA, teams[(h * (-1) + 1)][j].stats.spD, teams[h][i].moves[k].power, teams[h][i].level, teams[h][i].moves[k].type, teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Special", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather, StatModArr[(6 * h + i)][4], StatModArr[(6 * (h * (-1) + 1) + j)][4], teams[h][i].moves[k].pp)
                                    }
                                } else if (teams[h][i].moves[k].category === "Status") {
                                    if (teams[h][i].setname.substr(0, 2) == "m-") {
                                        if (teams[h][i].moves[k].name == 'Metronome') {
                                            PHYSDMG = rawDamage(teams[h][i].moves[k].name, teams[h][i].stats.atk, teams[(h * (-1) + 1)][j].stats.def, 67, teams[h][i].level, "None", teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Physical", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather)
                                            SPCDMG = rawDamage(teams[h][i].moves[k].name, teams[h][i].stats.spA, teams[(h * (-1) + 1)][j].stats.spD, 77, teams[h][i].level, "None", teams[h][i].species.types, teams[(h * (-1) + 1)][j].species.types, teams[h][i].item.name, teams[(h * (-1) + 1)][j].item.name, teams[h][i].ability.name, teams[(h * (-1) + 1)][j].ability.name, teams[(h * (-1) + 1)][j].stats.hp, teams[h][i].species.name, teams[(h * (-1) + 1)][j].species.name, "Special", teams[h][i].gender, teams[(h * (-1) + 1)][j].gender, teams[h][i].stats.spe, teams[(h * (-1) + 1)][j].stats.spe, StatModArr[(6 * h + i)][0], StatModArr[(6 * h + i)][2], StatModArr[(6 * (h * (-1) + 1) + j)][1], StatModArr[(6 * (h * (-1) + 1) + j)][3], teams[h][i].stats.hp, StatModArr[(6 * (h * (-1) + 1) + j)][5], StatModArr[(6 * h + i)][5], weather)
                                            av1 = Math.floor((164 * parseInt(PHYSDMG[0].substr(0, PHYSDMG[0].indexOf("<"))) + 97 * parseInt(SPCDMG[0].substr(0, SPCDMG[0].indexOf("<")))) / 442)
                                            av2 = Math.floor((164 * parseInt(PHYSDMG[0].substr(PHYSDMG[0].indexOf(">") + 1)) + 97 * parseInt(SPCDMG[0].substr(SPCDMG[0].indexOf(">") + 1))) / 442)
                                            av3 = Math.floor((164 * parseInt(PHYSDMG[1][0].substr(0, PHYSDMG[1][0].indexOf("<"))) + 97 * parseInt(SPCDMG[1][0].substr(0, SPCDMG[1][0].indexOf("<")))) / 442)
                                            av4 = Math.floor((164 * parseInt(PHYSDMG[1][0].substr(PHYSDMG[1][0].indexOf(">") + 1)) + 97 * parseInt(SPCDMG[1][0].substr(SPCDMG[1][0].indexOf(">") + 1))) / 442)
                                            damageMatrix.push([av1 + "<br>" + av2, [av3 + "%<br>" + av4 + "%", 1]]);
                                        } else {
                                            damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                                        }
                                    } else {
                                        damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    function findPower(MoveName, Attack, Defense, Power, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather, AttackSpeedMod, DefenseSpeedMod, MovePP) {
        var weather = $('.weather').text();
        if (MoveName == 'Guillotine' || MoveName == 'Sheer Cold' || MoveName == 'Horn Drill' || MoveName == 'Fissure') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 9999, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Sonic Boom' || MoveName == 'Seismic Toss' || MoveName == 'Night Shade' || MoveName == 'Dragon Rage' || MoveName == 'Psywave') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 1, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Magnitude') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 70, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        }
        /*else if (MoveName == 'Nature Power'){
         *	if (data.Stage == 'sunset'){
         *		damageMatrix.push(rawDamage("Earthquake", Attack, Defense, 100, Level, "Ground", AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, "Physical"))
         *	}
         *	else if (data.Stage == 'gateway'){
         *		damageMatrix.push(rawDamage("Hydro Pump", Attack, Defense, 120, Level, "Water", AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, "Special"))
         *	}
         *	else if (data.Stage == 'crystal' || data.Stage == 'magma' || data.Stage == 'stargazer'){
         *		damageMatrix.push(rawDamage("Rock Slide", Attack, Defense, 75, Level, "Rock", AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, "Physical"))
         *	}
         *	else if (data.Stage == 'waterfall' || data.Stage == 'sunny park'){
         *		damageMatrix.push(rawDamage("Seed Bomb", Attack, Defense, 80, Level, "Grass", AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, "Physical"))
         *	}
         *	else if (data.Stage == 'lagoon' || data.Stage == 'main Street' || data.Stage == 'neon' || data.Stage == 'courtyard' || data.gimmick.includes("chance_of_fog")){
         *		damageMatrix.push(rawDamage("Tri Attack", Attack, Defense, 80, Level, "Grass", AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, "Special"))
         *	}
         *	else {
         *		//Pass
         *	}
         *}
         */
        else if (MoveName == 'Crush Grip' || MoveName == 'Wring Out') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 121, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Flail' || MoveName == 'Reversal') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 20, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Punishment') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 60, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Endeavor') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 0, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Grass Knot' || MoveName == 'Low Kick') {
            Pkmn0to10kg = ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Spearow', 'Ekans', 'Pikachu', 'Nidoran♀', 'Nidoran♂', 'Clefairy', 'Vulpix', 'Jigglypuff', 'Zubat', 'Oddish', 'Gloom', 'Paras', 'Diglett', 'Meowth', 'Bellsprout', 'Weepinbell', 'Magnemite', 'Shellder', 'Gastly', 'Haunter', 'Krabby', 'Exeggcute', 'Cubone', 'Koffing', 'Weezing', 'Horsea', 'Magikarp', 'Ditto', 'Eevee', 'Omanyte', 'Dratini', 'Mew', 'Chikorita', 'Cyndaquil', 'Totodile', 'Sentret', 'Spinarak', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Mareep', 'Bellossom', 'Marill', 'Hoppip', 'Skiploom', 'Jumpluff', 'Sunkern', 'Sunflora', 'Wooper', 'Murkrow', 'Misdreavus', 'Unown', 'Pineco', 'Snubbull', 'Qwilfish', 'Teddiursa', 'Swinub', 'Corsola', 'Smoochum', 'Celebi', 'Treecko', 'Torchic', 'Mudkip', 'Wurmple', 'Silcoon', 'Lotad', 'Seedot', 'Taillow', 'Wingull', 'Ralts', 'Surskit', 'Masquerain', 'Shroomish', 'Nincada', 'Shedinja', 'Azurill', 'Plusle', 'Minun', 'Roselia', 'Spinda', 'Swablu', 'Barboach', 'Feebas', 'Castform', 'Shuppet', 'Chimecho', 'Luvdisc', 'Jirachi', 'Chimchar', 'Piplup', 'Starly', 'Kricketot', 'Shinx', 'Budew', 'Burmy', 'Wormadam', 'Combe', 'Pachirisu', 'Cherubi', 'Cherrim', 'Shellos', 'Drifloon', 'Buneary', 'Mismagius', 'Glameow', 'Chingling', 'Chatot', 'Finneon', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Phione', 'Manaphy', 'Shaymin']
            Pkmn10to25kg = ['Ivysaur', 'Charmeleon', 'Wartortle', 'Raticate', 'Sandshrew', 'Nidorina', 'Nidorino', 'Ninetales', 'Wigglytuff', 'Vileplume', 'Venomoth', 'Psyduck', 'Growlithe', 'Poliwag', 'Poliwhirl', 'Abra', 'Machop', 'Victreebel', 'Geodude', "Farfetch'd", 'Voltorb', 'Seadra', 'Goldeen', 'Jolteon', 'Flareon', 'Kabuto', 'Dragonair', 'Bayleef', 'Quilava', 'Croconaw', 'Hoothoot', 'Ledyba', 'Chinchou', 'Lanturn', 'Xatu', 'Flaaffy', 'Aipom', 'Dunsparce', 'Shuckle', 'Remoraid', 'Delibird', 'Houndour', 'Tyrogue', 'Elekid', 'Magby', 'Grovyle', 'Combusken', 'Poochyena', 'Zigzagoon', 'Cascoon', 'Swellow', 'Kirlia', 'Slakoth', 'Ninjask', 'Whismur', 'Skitty', 'Sableye', 'Mawile', 'Meditite', 'Electrike', 'Volbeat', 'Illumise', 'Gulpin', 'Carvanha', 'Numel', 'Trapinch', 'Vibrava', 'Altaria', 'Whiscash', 'Corphish', 'Baltoy', 'Lileep', 'Anorith', 'Kecleon', 'Banette', 'Duskull', 'Wynaut', 'Snorunt', 'Gorebyss', 'Relicanth', 'Turtwig', 'Monferno', 'Prinplup', 'Staravia', 'Bidoof', 'Roserade', 'Mothim', 'Ambipom', 'Drifblim', 'Stunky', 'Bonsly', 'Mime Jr.', 'Happiny', 'Gible', 'Riolu', 'Skorupi', 'Croagunk', 'Lumineon']
            Pkmn25to50kg = ['Butterfree', 'Beedrill', 'Pidgeottot', 'Pidgeot', 'Fearow', 'Sandslash', 'Clefable', 'Parasect', 'Venonat', 'Dugtrio', 'Persian', 'Mankey', 'Primeape', 'Alakazam', 'Tentacool', 'Ponyta', 'Slowpoke', 'Doduo', 'Grimer', 'Muk', 'Gengar', 'Drowzee', 'Marowak', 'Hitmonlee', 'Chansey', 'Tangela', 'Seaking', 'Staryu', 'Jynx', 'Electabuzz', 'Magmar', 'Vaporeon', 'Porygon', 'Omastar', 'Kabutops', 'Furret', 'Noctowl', 'Ledian', 'Ariados', 'Azumarill', 'Sudowoodo', 'Politoed', 'Yanma', 'Espeon', 'Umbreon', 'Wobbuffet', 'Girafarig', 'Granbull', 'Sneasel', 'Slugma', 'Octillery', 'Houndoom', 'Phanpy', 'Porygon2', 'Hitmontop', 'Blissey', 'Marshtomp', 'Mightyena', 'Linoone', 'Beautifly', 'Dustox', 'Lombre', 'Nuzleaf', 'Pelipper', 'Gardevoir', 'Breloom', 'Vigoroth', 'Loudred', 'Delcatty', 'Medicham', 'Manectric', 'Spoink', 'Zangoose', 'Crawdaunt', 'Dusclops', 'Absol', 'Spheal', 'Carnivine', 'Huntail', 'Bagon', 'Latias', 'Bibarel', 'Kricketune', 'Luxio', 'Luxray', 'Cranidos', 'Vespiquen', 'Buizel', 'Floatzel', 'Gastrodon', 'Lopunny', 'Honchkrow', 'Purugly', 'Skuntank', 'Hippopotas', 'Toxicroak', 'Carvnivine', 'Weavile', 'Togekiss', 'Leafeon', 'Glaceon', 'Gliscor', 'Porygon-Z', 'Froslass']
            Pkmn50to100kg = ['Venusaur', 'Charizard', 'Blastoise', 'Arbok', 'Nidoqueen', 'Nidoking', 'Golbat', 'Dugtrio', 'Golduck', 'Poliwrath', 'Kadabra', 'Machoke', 'Tenacruel', 'Rapidash', 'Slowbro', 'Magneton', 'Dodrio', 'Seel', 'Hypno', 'Kingler', 'Electrode', 'Hitmonchan', 'Lickitung', 'Kangaskhan', 'Starmie', 'Mr. Mime', 'Scyther', 'Pinsir', 'Tauros', 'Aerodactyl', 'Articuno', 'Zapdos', 'Moltres', 'Typhlosion', 'Feraligatr', 'Crobat', 'Ampharos', 'Quagsire', 'Slowking', 'Gligar', 'Heracross', 'Magcargo', 'Piloswine', 'Skarmory', 'Stantler', 'Smeargle', 'Miltank', 'Larvitar', 'Sceptile', 'Blaziken', 'Swampert', 'Ludicolo', 'Shiftry', 'Exploud', 'Makuhita', 'Nosepass', 'Aron', 'Swalot', 'Sharpedo', 'Torkoal', 'Grumpig', 'Flygon', 'Cacnea', 'Cacturne', 'Seviper', 'Cradily', 'Armaldo', 'Tropius', 'Sealeo', 'Clamperl', 'Beldum', 'Latios', 'Deoxys', 'Grotle', 'Infernape', 'Empoleon', 'Shieldon', 'Bronzor', 'Gabite', 'Garchomp', 'Lucario', 'Drapion', 'Mantyke', 'Snover', 'Magmortar', 'Yanmega', 'Gallade', 'Cresselia', 'Darkrai']
            Pkmn100to200kg = ['Arcanine', 'Machamp', 'Graveler', 'Dewgong', 'Cloyster', 'Exeggutor', 'Rhyhorn', 'Rhydon', 'Mewtwo', 'Meganium', 'Forretress', 'Scizor', 'Ursaring', 'Kingdra', 'Donphan', 'Raikou', 'Entei', 'Suicune', 'Pupitar', 'Ho-Oh', 'Slaking', 'Lairon', 'Wailmer', 'Lunatone', 'Solrock', 'Claydol', 'Milotic', 'Walrein', 'Shelgon', 'Salamence', 'Regice', 'Rampardos', 'Bastiodon', 'Bronzong', 'Spiritomb', 'Munchlax', 'Abomasnow', 'Magnezone', 'Lickilicky', 'Tangrowth', 'Electivire', 'Dusknoir']
            PkmnOver200kg = ['Golem', 'Onix', 'Gyarados', 'Lapras', 'Snorlax', 'Dragonite', 'Steelix', 'Mantine', 'Tyranitar', 'Lugia', 'Hariyama', 'Aggron', 'Wailord', 'Camerupt', 'Glalie', 'Metang', 'Metagross', 'Regirock', 'Registeel', 'Kyogre', 'Groudon', 'Rayquaza', 'Torterra', 'Hippowdon', 'Rhyperior', 'Mamoswine', 'Probopass', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Arceus']
            if (Pkmn0to10kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 20, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Pkmn10to25kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 40, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Pkmn25to50kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 60, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Pkmn50to100kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 80, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Pkmn100to200kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 100, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (PkmnOver200kg.includes(DefenderName)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 120, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else {
                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
            }
        } else if (MoveName == 'Trump Card') {
            if (MovePP == 1) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 200, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (MovePP == 2) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 80, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (MovePP == 3) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 60, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (MovePP == 4) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 50, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 40, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            }
        } else if (MoveName == 'Gyro Ball') {
            var atkSpeMod = 1;
            var defSpeMod = 1;
            if (AttackItem == 'Choice Scarf') {
                atkSpeMod = atkSpeMod * 1.5
            } else if (AttackItem == 'Iron Ball' | AttackItem == 'Macho Brace' | AttackItem == 'Power Weight' | AttackItem == 'Power Bracer' | AttackItem == 'Power Belt' | AttackItem == 'Power Lens' | AttackItem == 'Power Band' | AttackItem == 'Power Anklet') {
                atkSpeMod = atkSpeMod * 0.5
            }
            if (DefenseItem == 'Choice Scarf') {
                defSpeMod = defSpeMod * 1.5
            } else if (DefenseItem == 'Iron Ball' | DefenseItem == 'Macho Brace' | DefenseItem == 'Power Weight' | DefenseItem == 'Power Bracer' | DefenseItem == 'Power Belt' | DefenseItem == 'Power Lens' | DefenseItem == 'Power Band' | DefenseItem == 'Power Anklet') {
                defSpeMod = defSpeMod * 0.5
            }
            if (AttackAbility == 'Slow Start') {
                atkSpeMod = atkSpeMod * 0.5
            }
            if (DefenseAbility == 'Slow Start') {
                defSpeMod = defSpeMod * 0.5
            }
            if (AttackAbility == 'Swift Swim' && weather == 'rain') {
                atkSpeMod = atkSpeMod * 2
            } else if (AttackAbility == 'Chlorophyll' && weather == 'sun') {
                atkSpeMod = atkSpeMod * 2
            }
            if (DefenseAbility == 'Swift Swim' && weather == 'rain') {
                defSpeMod = defSpeMod * 2
            } else if (DefenseAbility == 'Chlorophyll' && weather == 'sun') {
                defSpeMod = defSpeMod * 2
            }
            if ((25 / (AttackSpeed * atkSpeMod * spemodToMultiplier(AttackSpeedMod, AttackAbility)) * (DefenseSpeed * defSpeMod * spemodToMultiplier(DefenseSpeedMod, DefenseAbility))) > 150) {
                Power = 150;
            } else {
                Power = (25 / (AttackSpeed * atkSpeMod * spemodToMultiplier(AttackSpeedMod, AttackAbility)) * (DefenseSpeed * defSpeMod * spemodToMultiplier(DefenseSpeedMod, DefenseAbility)));
            }
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, Power, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Super Fang') {
            damageMatrix.push(rawDamage(MoveName, Attack, Defense, 1, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
        } else if (MoveName == 'Fling') {
            Fling10 = ['Lagging Tail', 'Silk Scarf']
            Fling30 = ['Tiny Mushroom', 'Light Ball', 'Flame Orb', 'Toxic Orb', "King's Rock", 'Poké Doll', 'Escape Rope', 'Rare Candy', 'Lemonade', 'Nugget', 'Smoke Ball', 'Damp Mulch', 'Burn Heal', 'Honey', 'Repel', 'Sacred Ash', 'BlackGlasses', 'Razor Fang', 'Black Belt']
            Fling50 = ['Dubious Disc', 'Sharp Beak']
            Fling40 = ['Icy Rock', 'Lucky Punch']
            Fling60 = ['Adamant Orb', 'Damp Rock', 'Griseous Orb', 'Heat Rock', 'Lustrous Orb', 'Macho Brace', 'Stick']
            Fling70 = ['Dragon Fang', 'Poison Barb', 'Power Anklet', 'Power Band', 'Power Belt', 'Power Bracer', 'Power Lens', 'Power Weight']
            Fling80 = ['Dawn Stone', 'Dusk Stone', 'Electirizer', 'Magmarizer', 'Odd Keystone', 'Oval Stone', 'Protector', 'Quick Claw', 'Razor Claw', 'Shiny Stone', 'Sticky Barb']
            Fling90 = ['Draco Plate', 'Dread Plate', 'Earth Plate', 'Fist Plate', 'Flame Plate', 'Icicle Plate', 'Insect Plate', 'Iron Plate', 'Meadow Plate', 'Mind Plate', 'Sky Plate', 'Splash Plate', 'Spooky Plate', 'Stone Plate', 'Toxic Plate', 'Zap Plate', 'DeepSeaTooth', 'Grip Claw', 'Thick Club']
            Fling100 = ['Hard Stone', 'Rare Bone', 'Dome Fossil', 'Helix Fossil', 'Old Amber', 'Root Fossil', 'Claw Fossil', 'Skull Fossil', 'Armor Fossil']
            Fling130 = ['Iron Ball']
            if (AttackItem == null) {
                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
            } else if (Fling10.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 10, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling30.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 30, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling40.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 40, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling50.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 50, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling60.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 60, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling70.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 70, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling80.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 80, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling90.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 90, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling100.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 100, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else if (Fling130.includes(AttackItem)) {
                damageMatrix.push(rawDamage(MoveName, Attack, Defense, 130, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName,
                    MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather))
            } else {
                damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
            }
        } else {
            damageMatrix.push([0 + "<br>" + 0, [0 + "<br>" + 0, 1]]);
        }
    }

    //USE https://github.com/Zarel/honko-damagecalc/blob/master/js/damage_dpp.js
    function rawDamage(MoveName, Attack, Defense, Power, Level, MoveType, AttackTypes, DefenseTypes, AttackItem, DefenseItem, AttackAbility, DefenseAbility, Defensehp, AttackerName, DefenderName, MoveCategory, AttackGender, DefenseGender, AttackSpeed, DefenseSpeed, AtkAtkMod, AtkSpAMod, DefDefMod, DefSpdefMod, Attackhp, DefCurrenthp, AtkCurrenthp, weather) {
        if (AttackAbility == 'Air Lock' || DefenseAbility == 'Air Lock' || AttackAbility == 'Cloud Nine' || DefenseAbility == 'Cloud Nine') {
            weather = "none";
        }
        var movetype;
        movetype = MoveType
        var attackTypes;
        attackTypes = AttackTypes
        var defenseTypes;
        defenseTypes = DefenseTypes
        var FinalEffectiveness;
        FinalEffectiveness = 1;
        var atkAbilityMod;
        atkAbilityMod = 1;
        var Power;
        Power = Power

        var ATKMOD;
        var DEFMOD;
        if (MoveCategory == 'Physical') {
            ATKMOD = ModToMultiplier(AtkAtkMod, AttackAbility, DefenseAbility)
            DEFMOD = ModToMultiplier(DefDefMod, DefenseAbility, AttackAbility)
        } else if (MoveCategory == 'Special') {
            ATKMOD = ModToMultiplier(AtkSpAMod, AttackAbility, DefenseAbility)
            DEFMOD = ModToMultiplier(DefSpdefMod, DefenseAbility, AttackAbility)
        } else {
            ATKMOD = 1;
            DEFMOD = 1;
        }

        var atkMod = 1;
        var defMod = 1;
        var LifeOrb = 1;
        var ebeltMod = 1;
        var weatherMod = 1;
        var weatherBallMod = 1;
        var tintedMod = 1;
        var berryMod = 1;

        var cancelDamage = false
        //sort out pokemon with awkward dynamic types
        if (AttackerName == 'Castform' && AttackAbility == 'Forecast') {
            if (weather == 'sun') {
                attackTypes = ["Fire"]
            } else if (weather == 'rain') {
                attackTypes = ["Water"]
            } else if (weather == 'hail') {
                attackTypes = ["Ice"]
            }
        } else if (AttackerName == 'Arceus') {
            if (AttackAbility == 'Multitype') {
                if (AttackItem == 'Draco Plate') {
                    attackTypes = ["Dragon"]
                } else if (AttackItem == 'Dread Plate') {
                    attackTypes = ["Dark"]
                } else if (AttackItem == 'Earth Plate') {
                    attackTypes = ["Ground"]
                } else if (AttackItem == 'Fist Plate') {
                    attackTypes = ["Fighting"]
                } else if (AttackItem == 'Flame Plate') {
                    attackTypes = ["Fire"]
                } else if (AttackItem == 'Icicle Plate') {
                    attackTypes = ["Ice"]
                } else if (AttackItem == 'Insect Plate') {
                    attackTypes = ["Bug"]
                } else if (AttackItem == 'Iron Plate') {
                    attackTypes = ["Steel"]
                } else if (AttackItem == 'Meadow Plate') {
                    attackTypes = ["Grass"]
                } else if (AttackItem == 'Mind Plate') {
                    attackTypes = ["Psychic"]
                } else if (AttackItem == 'Sky Plate') {
                    attackTypes = ["Flying"]
                } else if (AttackItem == 'Splash Plate') {
                    attackTypes = ["Water"]
                } else if (AttackItem == 'Spooky Plate') {
                    attackTypes = ["Ghost"]
                } else if (AttackItem == 'Stone Plate') {
                    attackTypes = ["Rock"]
                } else if (AttackItem == 'Toxic Plate') {
                    attackTypes = ["Poison"]
                } else if (AttackItem == 'Zap Plate') {
                    attackTypes = ["Electric"]
                }
            } else {
                attackTypes = ["Normal"]
            }
        }
        if (DefenderName == 'Castform' && DefenseAbility == 'Forecast') {
            if (weather == 'sun') {
                defenseTypes = ["Fire"];
            } else if (weather == 'rain') {
                defenseTypes = ["Water"];
            } else if (weather == 'hail') {
                defenseTypes = ["Ice"];
            }
        } else if (DefenderName == 'Arceus') {
            if (DefenseAbility == 'Multitype') {
                if (DefenseItem == 'Draco Plate') {
                    defenseTypes = ["Dragon"]
                } else if (DefenseItem == 'Dread Plate') {
                    defenseTypes = ["Dark"]
                } else if (DefenseItem == 'Earth Plate') {
                    defenseTypes = ["Ground"]
                } else if (DefenseItem == 'Fist Plate') {
                    defenseTypes = ["Fighting"]
                } else if (DefenseItem == 'Flame Plate') {
                    defenseTypes = ["Fire"]
                } else if (DefenseItem == 'Icicle Plate') {
                    defenseTypes = ["Ice"]
                } else if (DefenseItem == 'Insect Plate') {
                    defenseTypes = ["Bug"]
                } else if (DefenseItem == 'Iron Plate') {
                    defenseTypes = ["Steel"]
                } else if (DefenseItem == 'Meadow Plate') {
                    defenseTypes = ["Grass"]
                } else if (DefenseItem == 'Mind Plate') {
                    defenseTypes = ["Psychic"]
                } else if (DefenseItem == 'Sky Plate') {
                    defenseTypes = ["Flying"]
                } else if (DefenseItem == 'Splash Plate') {
                    defenseTypes = ["Water"]
                } else if (DefenseItem == 'Spooky Plate') {
                    defenseTypes = ["Ghost"]
                } else if (DefenseItem == 'Stone Plate') {
                    defenseTypes = ["Rock"]
                } else if (DefenseItem == 'Toxic Plate') {
                    defenseTypes = ["Poison"]
                } else if (DefenseItem == 'Zap Plate') {
                    defenseTypes = ["Electric"]
                }
            } else {
                defenseTypes = ["Normal"]
            }
        }

        //Incorporation of weather
        if (weather !== 'none') {
            if (MoveName == 'Weather Ball') {
                weatherBallMod = 2;
                if (weather == 'sun') {
                    movetype = 'Fire'
                } else if (weather == 'rain') {
                    movetype = 'Water'
                } else if (weather == 'hail') {
                    movetype = 'Ice'
                } else if (weather == 'sand') {
                    movetype = 'Rock'
                }
            }
            if (weather == 'sun') {
                if (movetype == 'Fire') {
                    weatherMod = weatherMod * 1.5;
                } else if (movetype == 'Water') {
                    weatherMod = weatherMod * 0.5;
                }
            }
            if (weather == 'rain') {
                if (movetype == 'Fire') {
                    weatherMod = weatherMod * 0.5;
                } else if (movetype == 'Water') {
                    weatherMod = weatherMod * 1.5;
                }
            }
            if (weather == 'sand' && defenseTypes.includes("Rock") && MoveCategory == 'Special') {
                defMod = defMod * 1.5;
            }
            if (MoveName == 'Solar Beam' && weather !== 'sun') {
                Power = Power * 0.5
            }
        }

        //Changing Judgment type for plates
        if (MoveName == 'Judgment') {
            if (AttackItem == 'Draco Plate') {
                movetype = ["Dragon"];
            } else if (AttackItem == 'Dread Plate') {
                movetype = ["Dark"];
            } else if (AttackItem == 'Earth Plate') {
                movetype = ["Ground"];
            } else if (AttackItem == 'Fist Plate') {
                movetype = ["Fighting"];
            } else if (AttackItem == 'Flame Plate') {
                movetype = ["Fire"];
            } else if (AttackItem == 'Icicle Plate') {
                movetype = ["Ice"];
            } else if (AttackItem == 'Insect Plate') {
                movetype = ["Bug"];
            } else if (AttackItem == 'Iron Plate') {
                movetype = ["Steel"];
            } else if (AttackItem == 'Meadow Plate') {
                movetype = ["Grass"];
            } else if (AttackItem == 'Mind Plate') {
                movetype = ["Psychic"];
            } else if (AttackItem == 'Sky Plate') {
                movetype = ["Flying"];
            } else if (AttackItem == 'Splash Plate') {
                movetype = ["Water"];
            } else if (AttackItem == 'Spooky Plate') {
                movetype = ["Ghost"];
            } else if (AttackItem == 'Stone Plate') {
                movetype = ["Rock"];
            } else if (AttackItem == 'Toxic Plate') {
                movetype = ["Poison"];
            } else if (AttackItem == 'Zap Plate') {
                movetype = ["Electric"];
            }
        }

        //Normalize
        if (AttackAbility == 'Normalize') {
            movetype = ["Normal"]
        } else {
            movetype = movetype
        }


        //STAB and Effectiveness
        var STAB;
        var mult1;
        var mult2;
        STAB = 1;
        mult1 = 1;
        mult2 = 1;


        if (attackTypes[0] == (movetype) || attackTypes[1] == movetype) {
            if (AttackAbility == 'Adaptability') {
                STAB = 2;
            } else {
                STAB = 1.5;
            }
        }

        if (defenseTypes[0] == null) {
            mult1 = 1;
        } else {
            Defense1 = defenseTypes[0]
            row = typeIndices[movetype]
            col1 = typeIndices[Defense1]
            mult1 = typeChart[row][col1]
            if (AttackAbility == 'Scrappy' && Defense1 == 'Ghost' && (movetype == 'Fighting' || movetype == 'Normal')) {
                mult1 = 1;
            } else if (DefenseItem == 'Iron Ball' && movetype == 'Ground') {
                if (defenseTypes[0] == 'Fire' || defenseTypes[0] == 'Steel' || defenseTypes[0] == 'Rock' || defenseTypes[0] == 'Electric' || defenseTypes[0] == 'Poison') {
                    mult1 = 2;
                } else if (defenseTypes[0] == 'Bug' || defenseTypes[0] == 'Grass') {
                    mult1 = 0.5;
                } else {
                    mult1 = 1;
                }
            }
        }
        if (defenseTypes[1] == null) {
            mult2 = 1
        } else {
            Defense2 = defenseTypes[1]
            row = typeIndices[movetype]
            col2 = typeIndices[Defense2]
            mult2 = typeChart[row][col2]
            if (AttackAbility == 'Scrappy' && Defense2 == 'Ghost' && movetype == 'Normal') {
                mult2 = 1;
            } else if (DefenseItem == 'Iron Ball' && movetype == 'Ground') {
                if (defenseTypes[1] == 'Fire' || defenseTypes[1] == 'Steel' || defenseTypes[1] == 'Rock' || defenseTypes[1] == 'Electric' || defenseTypes[1] == 'Poison') {
                    mult2 = 2;
                } else if (defenseTypes[1] == 'Bug' || defenseTypes[1] == 'Grass') {
                    mult2 = 0.5;
                } else {
                    mult2 = 1;
                }
            }
        }

        if (MoveName == 'Future Sight' || MoveName == 'Doom Desire' || MoveName == 'Beat Up' || MoveName == 'Night Shade' || MoveName == 'Seismic Toss' || MoveName == 'Dragon Rage' || MoveName == 'Psywave' || MoveName == 'Super Fang' ||
            MoveName == 'Sonic Boom' || MoveName == 'counter' || MoveName == 'Mirror Coat' || MoveName == 'Metal Burst' || MoveName == 'Guillotine' || MoveName == 'Horn Drill' || MoveName == 'Sheer Cold' || MoveName == 'Fissure' || MoveName == 'Endeavor') {
            STAB = 1;
            if ((mult1 * mult2 > 0) || MoveName == 'Future Sight') {
                mult1 = 1;
                mult2 = 1;
            }
        }
        //Moves With variable damage depending on HP
        if (MoveName == 'Flail' || MoveName == 'Reversal') {
            var a = Math.floor(64 * AtkCurrenthp / Attackhp)
            Power = a <= 1 ? 200 : a <= 5 ? 150 : a <= 12 ? 100 : a <= 21 ? 80 : a <= 42 ? 40 : 20;
        } else if (MoveName == 'Eruption' || MoveName == 'Water Spout') {
            a = Math.min(150, Math.floor(Power * AtkCurrenthp / Attackhp));
            Power = a;
        } else if (MoveName == 'Wring Out' || MoveName == 'Crush Grip') {
            Power = Math.min(121, Math.floor(DefCurrenthp * 120 / Defensehp) + 1);
        } else if (MoveName == 'Brine') {
            if (DefCurrenthp <= (Defensehp / 2)) {
                Power = Power * 2
            }
        }


        //AttackerItem mods
        if (AttackAbility !== 'Klutz') {
            if (AttackItem == 'None') {
                itemMod = 1;
            } else if (AttackItem == 'Muscle Band' && MoveCategory == 'Physical' || AttackItem == 'Wise Glasses' && MoveCategory == 'Special') {
                itemMod = 1.1;
            } else if (AttackItem == 'Expert Belt' && mult1 * mult2 > 1) {
                itemMod = 1;
                ebeltMod = 1.2;
            } else if (AttackItem == 'Choice Band' && MoveCategory == 'Physical' || AttackItem == 'Choice Specs' && MoveCategory == 'Special') {
                itemMod = 1;
                atkMod = atkMod * 1.5;
            } else if (AttackItem == 'Adamant Orb' && AttackerName == 'Dialga' && (movetype == 'Dragon' || movetype == 'Steel') || AttackItem == 'Lustrous Orb' && AttackerName == 'Palkia' && (movetype == 'Dragon' || movetype == 'Water') ||
                AttackItem == 'Griseous Orb' && AttackerName == 'Giratina' && (movetype == 'Dragon' || movetype == 'Ghost')) {
                itemMod = 1.2;
            } else if (AttackItem == 'Silk Scarf' && movetype == 'Normal' || (AttackItem == 'Draco Plate' || AttackItem == 'Dragon Fang') && movetype == 'Dragon' || (AttackItem == 'Dread Plate' || AttackItem == 'BlackGlasses') && movetype == 'Dark' ||
                (AttackItem == 'Earth Plate' || AttackItem == 'Soft Sand') && movetype == 'Ground' || (AttackItem == 'Fist Plate' || AttackItem == 'Black Belt') && movetype == 'Fighting' ||
                (AttackItem == 'Flame Plate' || AttackItem == 'Charcoal') && movetype == 'Fire' || (AttackItem == 'Icicle Plate' || AttackItem == 'NeverMeltIce') && movetype == 'Ice' || (AttackItem == 'Insect Plate' || AttackItem == 'SilverPowder') && movetype == 'Bug' ||
                (AttackItem == 'Iron Plate' || AttackItem == 'Metal Coat') && movetype == 'Steel' || (AttackItem == 'Meadow Plate' || AttackItem == 'Miracle Seed' || AttackItem == 'Rose Incense') && movetype == 'Grass' ||
                (AttackItem == 'Mind Plate' || AttackItem == 'TwistedSpoon' || AttackItem == 'Odd Incense') && movetype == 'Psychic' || (AttackItem == 'Sky Plate' || AttackItem == 'Sharp Beak') && movetype == 'Flying' ||
                (AttackItem == 'Splash Plate' || AttackItem == 'Mystic Water' || AttackItem == 'Sea Incense' || AttackItem == 'Wave Incense') && movetype == 'Water' || (AttackItem == 'Spooky Plate' || AttackItem == 'Spell Tag') && movetype == 'Ghost' ||
                (AttackItem == 'Stone Plate' || AttackItem == 'Hard Stone' || AttackItem == 'Rock Incense') && movetype == 'Rock' || (AttackItem == 'Toxic Plate' || AttackItem == 'Poison Barb') && movetype == 'Poison' ||
                (AttackItem == 'Zap Plate' || AttackItem == 'Magnet') && movetype == 'Electric') {
                itemMod = 1.2;
            } else if (AttackItem == 'Light Ball' && AttackerName == 'Pikachu' || AttackItem == 'Thick Club' && (AttackerName == 'Cubone' || AttackerName == 'Marowak') && MoveCategory == 'Physical' || AttackItem == 'DeepSeaTooth' && AttackerName == 'Clamperl' && MoveCategory == 'Special') {
                itemMod = 1;
                atkMod = atkMod * 2;
            } else if (AttackItem == 'Soul Dew' && (AttackerName == 'Latios' || AttackerName == 'Latias') && MoveCategory == 'Special') {
                itemMod = 1
                atkMod = atkMod * 1.5;
            } else if (AttackItem == 'Life Orb') {
                itemMod = 1;
                LifeOrb = 1.3;
            } else {
                itemMod = 1;
            }
        } else {
            itemMod = 1;
        }

        Power = Power * weatherBallMod

        //AttackAbility mods
        if (AttackAbility == 'None') {
            atkAbilityMod = 1;
        } else if (AttackAbility == 'Slow Start') {
            if (MoveCategory == 'Physical') {
                atkMod = atkMod * 0.5;
            }
        } else if (AttackAbility == 'Rivalry') {
            if ((AttackGender == 'm' && DefenseGender == 'f') || (AttackGender == 'f' && DefenseGender == 'm')) {
                atkAbilityMod = atkAbilityMod * 0.75;
            } else if ((AttackGender == 'm' && DefenseGender == 'm') || (AttackGender == 'f' && DefenseGender == 'f')) {
                atkAbilityMod = atkAbilityMod * 1.25;
            } else {
                atkAbilityMod = atkAbilityMod * 1;
            }
        } else if (AttackAbility == 'Reckless' && RecoilMoves.includes(MoveName) || AttackAbility == 'Iron Fist' && PunchMoves.includes(MoveName)) {
            atkAbilityMod = 1.2;
        } else if (AttackAbility == 'Technician' && Power <= 60) {
            atkAbilityMod = 1.5;
        } else if ((AttackAbility == 'Pure Power' || AttackAbility == 'Huge Power') && MoveCategory == 'Physical') {
            atkAbilityMod = 1;
            atkMod = atkMod * 2;
        } else if (weather == 'sun' && (MoveCategory == 'Physical' && AttackAbility == 'Flower Gift' || MoveCategory == 'Special' && AttackAbility == 'Solar Power')) {
            atkAbilityMod = 1;
            atkMod = atkMod * 1.5;
        } else if (AttackAbility == 'Hustle' && MoveCategory == 'Physical') {
            atkAbilityMod = 1;
            atkMod = atkMod * 1.5;
        } else if (AttackAbility == 'Tinted Lens' && mult1 * mult2 < 1) {
            tintedMod = 2;
        } else if ((AttackAbility == 'Blaze' && movetype == 'Fire' || AttackAbility == 'Overgrow' && movetype == 'Grass' || AttackAbility == 'Torrent' && movetype == 'Water' || AttackAbility == 'Swarm' && movetype == 'Bug') && AtkCurrenthp <= Attackhp / 3) {
            atkMod = atkMod * 1.5;
        } else {
            atkAbilityMod = 1;
        }

        if ((AttackAbility == 'Damp' || DefenseAbility == 'Damp') && (MoveName == 'Explosion' || MoveName == 'Self-Destruct')) {
            cancelDamage = true;
        }

        //Defender Item mods
        if (DefenseItem == 'Soul Dew' && (DefenderName == 'Latios' || DefenderName == 'Latias') && MoveCategory == 'Special') {
            defMod = defMod * 1.5;
        } else if (DefenseItem == 'DeepSeaScale' && DefenderName == 'Clamperl' && MoveCategory == 'Special') {
            defMod = defMod * 2;
        } else if ((DefenseItem == 'Occa Berry' && movetype == 'Fire' && mult1 * mult2 > 1) || (DefenseItem == 'Passho Berry' && movetype == 'Water' && mult1 * mult2 > 1) || (DefenseItem == 'Wacan Berry' && movetype == 'Electric' && mult1 * mult2 > 1) ||
            (DefenseItem == 'Rindo Berry' && movetype == 'Grass' && mult1 * mult2 > 1) || (DefenseItem == 'Yache Berry' && movetype == 'Ice' && mult1 * mult2 > 1) || (DefenseItem == 'Chople Berry' && movetype == 'Fighting' && mult1 * mult2 > 1) ||
            (DefenseItem == 'Kebia Berry' && movetype == 'Poison' && mult1 * mult2 > 1) || (DefenseItem == 'Shuca Berry' && movetype == 'Ground' && mult1 * mult2 > 1) || (DefenseItem == 'Coba Berry' && movetype == 'Flying' && mult1 * mult2 > 1) ||
            (DefenseItem == 'Papaya Berry' && movetype == 'Psychic' && mult1 * mult2 > 1) || (DefenseItem == 'Tanga Berry' && movetype == 'Bug' && mult1 * mult2 > 1) || (DefenseItem == 'Charti Berry' && movetype == 'Rock' && mult1 * mult2 > 1) ||
            (DefenseItem == 'Kasib Berry' && movetype == 'Ghost' && mult1 * mult2 > 1) || (DefenseItem == 'Haban Berry' && movetype == 'Dragon' && mult1 * mult2 > 1) || (DefenseItem == 'Colbur Berry' && movetype == 'Dark' && mult1 * mult2 > 1) ||
            (DefenseItem == 'Babiri Berry' && movetype == 'Steel' && mult1 * mult2 > 1) || (DefenseItem == 'Chilan Berry' && movetype == 'Normal')) {
            berryMod = 0.5;
        }

        //Defender Abilty mods
        var filterMod = 1;
        var defAbilityMod = 1;
        if (AttackAbility !== 'Mold Breaker') {
            if ((DefenseAbility === "Thick Fat" && (movetype === "Fire" || movetype === "Ice")) || (DefenseAbility === "Heatproof" && movetype === "Fire")) {
                defAbilityMod = 0.5;
            } else if (DefenseAbility == 'Dry Skin' && movetype == 'Fire') {
                defAbilityMod = 1.25;
            } else if ((DefenseAbility == 'Wonder Guard' && mult1 * mult2 <= 1) || (movetype == 'Fire' && DefenseAbility == 'Flash Fire') || (movetype == 'Water' && (DefenseAbility == 'Dry Skin' || DefenseAbility == 'Water Absorb')) ||
                (movetype == 'Electric' && (DefenseAbility == 'Volt Absorb' || DefenseAbility == 'Motor Drive')) || (DefenseAbility == 'Levitate' && movetype == 'Ground' && DefenseItem !== 'Iron Ball') || (SoundMoves.includes(MoveName) && DefenseAbility == 'Soundproof')) {
                cancelDamage = true;
            } else if ((DefenseAbility == 'Solid Rock' || DefenseAbility == 'Filter') && mult1 * mult2 > 1) {
                defAbilityMod = 1;
                filterMod = 0.75;
            } else if (DefenseAbility == 'Flower Gift' && weather == 'sun' && MoveCategory == 'Special') {
                defAbilityMod = 1;
                defMod = defMod * 1.5;
            } else if ((MoveName == 'Guillotine' || MoveName == 'Sheer Cold' || MoveName == 'Horn Drill' || MoveName == 'Fissure') && DefenseAbility == 'Sturdy') {
                cancelDamage = true;
            } else {
                defAbilityMod = 1;
            }
        }

        raw = Math.floor(Math.floor((Math.floor((2 * Level) / 5 + 2) * Math.floor(Math.floor(Power * atkAbilityMod * itemMod) * defAbilityMod) * Math.floor(Attack * ATKMOD * atkMod)) / Math.floor(Defense * DEFMOD * defMod)) / 50)

        raw = Math.floor(raw * weatherMod + 2)

        FinalEffectiveness = mult1 * mult2

        var min;
        var max;
        var minPerc;
        var maxPerc;
        min = Math.max(Math.ceil(FinalEffectiveness / 4), Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(LifeOrb * raw) * 0.85) * STAB) * FinalEffectiveness) * filterMod) * ebeltMod) * tintedMod) * berryMod))
        max = Math.max(Math.ceil(FinalEffectiveness / 4), Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(raw * LifeOrb) * STAB) * FinalEffectiveness) * filterMod) * ebeltMod) * tintedMod) * berryMod))

        //if(min == 0){
        //	min = 1;
        //}
        //if (max == 0){
        //	max = 1;
        //}

        minPerc = (Math.floor(1000 * min / Defensehp) / 10) + "%"
        maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"

        if (FinalEffectiveness > 0) {
            if (MoveName == 'Dragon Rage') {
                min = 40
                max = 40
                minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
            } else if (MoveName == 'Seismic Toss' || MoveName == 'Night Shade') {
                if (mult1 * mult2 > 0) {
                    min = Level
                    max = Level
                    minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                    maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
                }
            } else if (MoveName == 'Sonic Boom') {
                if (mult1 * mult2 > 0) {
                    min = 20
                    max = 20
                    minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                    maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
                }
            } else if (MoveName == 'Psywave') {
                if (mult1 * mult2 > 0) {
                    min = Math.floor(Level * 0.5)
                    max = Math.floor(Level * 1.5)
                    minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                    maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
                }
            } else if (MoveName == 'Super Fang') {
                min = Math.max(1, Math.floor(DefCurrenthp / 2))
                max = Math.max(1, Math.floor(DefCurrenthp / 2))
                minPerc = (Math.round(1000 * min / DefCurrenthp) / 10) + "%"
                maxPerc = (Math.round(1000 * max / DefCurrenthp) / 10) + "%"
            } else if (MoveName == 'Endeavor') {
                min = Math.max(0, DefCurrenthp - AtkCurrenthp)
                max = Math.max(0, DefCurrenthp - AtkCurrenthp)
                minPerc = (Math.floor(1000 * min / Defensehp) / 10) + "%"
                maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
            }

            if (DoublestrikeMoves.includes(MoveName)) {
                min = min * 2
                max = max * 2
                minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
            } else if (MultistrikeMoves.includes(MoveName)) {
                if (AttackAbility == 'Skill Link') {
                    min = min * 5
                    max = max * 5
                    minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                    maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
                } else {
                    min = min * 2
                    max = max * 5
                    minPerc = (Math.round(1000 * min / Defensehp) / 10) + "%"
                    maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
                }
            } else if (MoveName == 'Triple Kick') {
                max = max + Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(raw * LifeOrb) * filterMod) * ebeltMod) * tintedMod) * berryMod) * STAB) * FinalEffectiveness) * 5
                maxPerc = (Math.round(1000 * max / Defensehp) / 10) + "%"
            } else if ((MoveName == 'Guillotine' || MoveName == 'Sheer Cold' || MoveName == 'Horn Drill' || MoveName == 'Fissure') && DefenseAbility != 'Sturdy') {
                minPerc = 'OHKO'
                maxPerc = 'OHKO'
            }
        }



        if (cancelDamage) {
            min = 0
            max = 0
            minPerc = 0
            maxPerc = 0
        }

        return [min + "<br>" + max, [minPerc + "<br>" + maxPerc, FinalEffectiveness]]
    };

    /*function ifempty(matrixElement, entry){
        if(matrixElement == "0<br>0"){
            //pass
        }
        else{
            $(entry).html('<div style="text-shadow: -0.3px -0.3px 0 blue, 0.3px -0.3px 0 blue,-0.3px 0.3px 0 blue, 0.3px 0.3px 0 blue;">'+matrixElement+'</div>')
        }
    }*/

    function ifemptyPerc(matrixElement1, entry1, matrixElement2, entry2) {
        if (matrixElement1[0] == "0<br>0") {
            $(entry1).html('')
            $(entry2).html('')
        } else {
            matrixElement1[0] = '<div style="margin-left:-12px; position:relative; left:6px;">' + matrixElement1[0] + "</div>";
            if (matrixElement1[1] == 0) {
                $(entry1).html('<div style="font-weight: bold; background-color: grey; border-radius: 0px 10px 10px 0px; border: none;">' + matrixElement1[0] + '</div>')
                $(entry2).html('<div style="background-color: grey; border: none;">' + matrixElement2 + '</div>')
            } else if (matrixElement1[1] < 1) {
                $(entry1).html('<div style="font-weight: bold; background-color: #ff7777; border-radius: 0px 10px 10px 0px; border: none;">' + matrixElement1[0] + '</div>')
                $(entry2).html('<div style="background-color: #ff7777; border: none;">' + matrixElement2 + '</div>')
            } else if (matrixElement1[1] == 1) {
                $(entry1).html('<div style="font-weight: bold; background-color: #ffff77; border-radius: 0px 10px 10px 0px; border: none;">' + matrixElement1[0] + '</div>')
                $(entry2).html('<div style="background-color: #ffff77; border: none;">' + matrixElement2 + '</div>')
            } else if (matrixElement1[1] > 1) {
                $(entry1).html('<div style="font-weight: bold; background-color: #77ff77; border-radius: 0px 10px 10px 0px; border: none;">' + matrixElement1[0] + '</div>')
                $(entry2).html('<div style="background-color: #77ff77; border: none;">' + matrixElement2 + '</div>')
            }
        }
    }

    /*function redifempty(matrixElement, entry){
        if(matrixElement == "0<br>0"){
            //pass
        }
        else{
            $(entry).html('<div style="transform: rotate(270deg); text-shadow: -0.3px -0.3px 0 red, 0.3px -0.3px 0 red,-0.3px 0.3px 0 red, 0.3px 0.3px 0 red;">'+matrixElement+'</div>')
        }
    }*/

    function redifemptyPerc(matrixElement1, entry1, matrixElement2, entry2) {
        $(entry2).removeClass();
        $(entry1).removeClass();
        if (matrixElement2[0] == "0<br>0") {
            $(entry1).html('')
            $(entry2).html('')
        } else {
            matrixElement1[0] = '<div style="margin-top:-12px; position:relative; top:6px;">' + matrixElement1[0] + "</div>";
            matrixElement2[0] = '<div style="margin-left:-12px; position:relative; top:0px;left:6px;">' + matrixElement2[0] + "</div>";

            if (matrixElement2[1] == 0) {
                $(entry1).addClass("red0Int")
                $(entry2).addClass("red0Final")
                $(entry2).html('<div style="transform: rotate(270deg); font-weight: bold; border: none;">' + matrixElement2[0] + '</div>')
                $(entry1).html('<div style="transform: rotate(270deg);">' + matrixElement1 + '</div>')
            } else if (matrixElement2[1] < 1) {
                $(entry1).addClass("redlt1Int")
                $(entry2).addClass("redlt1Final")
                $(entry2).html('<div style="transform: rotate(270deg); font-weight: bold; border: none;">' + matrixElement2[0] + '</div>')
                $(entry1).html('<div style="transform: rotate(270deg);">' + matrixElement1 + '</div>')
            } else if (matrixElement2[1] == 1) {
                $(entry1).addClass("red1Int")
                $(entry2).addClass("red1Final")
                $(entry2).html('<div style="transform: rotate(270deg); font-weight: bold; border: none;">' + matrixElement2[0] + '</div>')
                $(entry1).html('<div style="transform: rotate(270deg);">' + matrixElement1 + '</div>')
            } else if (matrixElement2[1] > 1) {
                $(entry1).addClass("redmt1Int")
                $(entry2).addClass("redmt1Final")
                $(entry2).html('<div style="transform: rotate(270deg); font-weight: bold; border: none;">' + matrixElement2[0] + '</div>')
                $(entry1).html('<div style="transform: rotate(270deg);">' + matrixElement1 + '</div>')
            }
            $(entry1).addClass("redVert")
            $(entry2).addClass("redVert")

        }
    }



    function fillentries() {

        // Blue damages
        for (var i = 0; i < 6; i++) {
            ifemptyPerc(damageMatrix[0  + 24 * i][1], "#b" + (3 + 6 * i), damageMatrix[0  + 24 * i][0], "#a" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[1  + 24 * i][1], "#b" + (4 + 6 * i), damageMatrix[1  + 24 * i][0], "#a" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[2  + 24 * i][1], "#b" + (5 + 6 * i), damageMatrix[2  + 24 * i][0], "#a" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[3  + 24 * i][1], "#b" + (6 + 6 * i), damageMatrix[3  + 24 * i][0], "#a" + (6 + 6 * i))
            
            ifemptyPerc(damageMatrix[4  + 24 * i][1], "#h" + (3 + 6 * i), damageMatrix[4  + 24 * i][0], "#g" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[5  + 24 * i][1], "#h" + (4 + 6 * i), damageMatrix[5  + 24 * i][0], "#g" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[6  + 24 * i][1], "#h" + (5 + 6 * i), damageMatrix[6  + 24 * i][0], "#g" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[7  + 24 * i][1], "#h" + (6 + 6 * i), damageMatrix[7  + 24 * i][0], "#g" + (6 + 6 * i))
    
            ifemptyPerc(damageMatrix[8  + 24 * i][1], "#n" + (3 + 6 * i), damageMatrix[8  + 24 * i][0], "#m" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[9  + 24 * i][1], "#n" + (4 + 6 * i), damageMatrix[9  + 24 * i][0], "#m" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[10 + 24 * i][1], "#n" + (5 + 6 * i), damageMatrix[10 + 24 * i][0], "#m" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[11 + 24 * i][1], "#n" + (6 + 6 * i), damageMatrix[11 + 24 * i][0], "#m" + (6 + 6 * i))
            
            ifemptyPerc(damageMatrix[12 + 24 * i][1], "#p" + (3 + 6 * i), damageMatrix[12 + 24 * i][0], "#o" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[13 + 24 * i][1], "#p" + (4 + 6 * i), damageMatrix[13 + 24 * i][0], "#o" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[14 + 24 * i][1], "#p" + (5 + 6 * i), damageMatrix[14 + 24 * i][0], "#o" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[15 + 24 * i][1], "#p" + (6 + 6 * i), damageMatrix[15 + 24 * i][0], "#o" + (6 + 6 * i))
            
            ifemptyPerc(damageMatrix[16 + 24 * i][1], "#r" + (3 + 6 * i), damageMatrix[16 + 24 * i][0], "#q" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[17 + 24 * i][1], "#r" + (4 + 6 * i), damageMatrix[17 + 24 * i][0], "#q" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[18 + 24 * i][1], "#r" + (5 + 6 * i), damageMatrix[18 + 24 * i][0], "#q" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[19 + 24 * i][1], "#r" + (6 + 6 * i), damageMatrix[19 + 24 * i][0], "#q" + (6 + 6 * i))
            
            ifemptyPerc(damageMatrix[20 + 24 * i][1], "#t" + (3 + 6 * i), damageMatrix[20 + 24 * i][0], "#s" + (3 + 6 * i))
            ifemptyPerc(damageMatrix[21 + 24 * i][1], "#t" + (4 + 6 * i), damageMatrix[21 + 24 * i][0], "#s" + (4 + 6 * i))
            ifemptyPerc(damageMatrix[22 + 24 * i][1], "#t" + (5 + 6 * i), damageMatrix[22 + 24 * i][0], "#s" + (5 + 6 * i))
            ifemptyPerc(damageMatrix[23 + 24 * i][1], "#t" + (6 + 6 * i), damageMatrix[23 + 24 * i][0], "#s" + (6 + 6 * i))
        }


        columns = "cdefijklopqrtuvwxyzABCDE"
        
        // Red  damages
        for (var i = 0; i < 6; i++) {
            redifemptyPerc(damageMatrix[0  + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "1", damageMatrix[0  + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "2")
            redifemptyPerc(damageMatrix[1  + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "1", damageMatrix[1  + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "2")
            redifemptyPerc(damageMatrix[2  + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "1", damageMatrix[2  + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "2")
            redifemptyPerc(damageMatrix[3  + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "1", damageMatrix[3  + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "2")
    
            redifemptyPerc(damageMatrix[4  + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "7", damageMatrix[4  + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "8")
            redifemptyPerc(damageMatrix[5  + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "7", damageMatrix[5  + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "8")
            redifemptyPerc(damageMatrix[6  + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "7", damageMatrix[6  + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "8")
            redifemptyPerc(damageMatrix[7  + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "7", damageMatrix[7  + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "8")
    
            redifemptyPerc(damageMatrix[8  + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "13", damageMatrix[8  + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "14")
            redifemptyPerc(damageMatrix[9  + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "13", damageMatrix[9  + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "14")
            redifemptyPerc(damageMatrix[10 + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "13", damageMatrix[10 + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "14")
            redifemptyPerc(damageMatrix[11 + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "13", damageMatrix[11 + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "14")
            
            redifemptyPerc(damageMatrix[12 + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "19", damageMatrix[12 + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "20")
            redifemptyPerc(damageMatrix[13 + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "19", damageMatrix[13 + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "20")
            redifemptyPerc(damageMatrix[14 + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "19", damageMatrix[14 + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "20")
            redifemptyPerc(damageMatrix[15 + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "19", damageMatrix[15 + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "20")
    
            redifemptyPerc(damageMatrix[16 + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "25", damageMatrix[16 + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "26")
            redifemptyPerc(damageMatrix[17 + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "25", damageMatrix[17 + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "26")
            redifemptyPerc(damageMatrix[18 + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "25", damageMatrix[18 + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "26")
            redifemptyPerc(damageMatrix[19 + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "25", damageMatrix[19 + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "26")
    
            redifemptyPerc(damageMatrix[20 + 24 * (i + 6)][0], "#" + columns[i * 4 + 0] + "31", damageMatrix[20 + 24 * (i + 6)][1], "#" + columns[i * 4 + 0] + "32")
            redifemptyPerc(damageMatrix[21 + 24 * (i + 6)][0], "#" + columns[i * 4 + 1] + "31", damageMatrix[21 + 24 * (i + 6)][1], "#" + columns[i * 4 + 1] + "32")
            redifemptyPerc(damageMatrix[22 + 24 * (i + 6)][0], "#" + columns[i * 4 + 2] + "31", damageMatrix[22 + 24 * (i + 6)][1], "#" + columns[i * 4 + 2] + "32")
            redifemptyPerc(damageMatrix[23 + 24 * (i + 6)][0], "#" + columns[i * 4 + 3] + "31", damageMatrix[23 + 24 * (i + 6)][1], "#" + columns[i * 4 + 3] + "32")
        }
    }

    function CalculateSpeedTie(BlueSpeed, RedSpeed, BlueItem, RedItem, BlueAbility, RedAbility, BlueSpeMod, RedSpeMod, blueNumber, redNumber) {

        var weather
        weather = "none";
        r1 = counter[blueNumber][redNumber]
        switch (r1) {
            case 0:
                weather = "none";
                break;
            case 1:
                weather = "sun";
                break;
            case 2:
                weather = "rain";
                break;
            case 3:
                weather = "hail";
                break;
            case 4:
                weather = "sand";
                break;
            case 5:
                weather = "fog";
                break;
            default:
                weather = "none";
        }
        var BlueSpeed;
        var RedSpeed;
        if (BlueSpeed == "???") {
            BlueSpeed = 0
        }
        if (RedSpeed == "???") {
            RedSpeed = 0
        }
        var blueMod = 1;
        var redMod = 1;
        if (BlueAbility !== 'Klutz') {
            if (BlueItem == 'Choice Scarf') {
                blueMod = blueMod * 1.5
            } else if (BlueItem == 'Iron Ball' | BlueItem == 'Macho Brace' | BlueItem == 'Power Weight' | BlueItem == 'Power Bracer' | BlueItem == 'Power Belt' | BlueItem == 'Power Lens' | BlueItem == 'Power Band' | BlueItem == 'Power Anklet') {
                blueMod = blueMod * 0.5
            } else if (BlueItem == 'Quick Powder' && (teams[0][0].species.name == 'Ditto' || teams[0][1].species.name == 'Ditto' || teams[0][2].species.name == 'Ditto')) {
                blueMod = blueMod * 2
            }
        }
        if (RedAbility !== 'Klutz') {
            if (RedItem == 'Choice Scarf') {
                redMod = redMod * 1.5
            } else if (RedItem == 'Iron Ball' | RedItem == 'Macho Brace' | RedItem == 'Power Weight' | RedItem == 'Power Bracer' | RedItem == 'Power Belt' | RedItem == 'Power Lens' | RedItem == 'Power Band' | RedItem == 'Power Anklet') {
                redMod = redMod * 0.5
            } else if (RedItem == 'Quick Powder' && (teams[1][0].species.name == 'Ditto' || teams[1][1].species.name == 'Ditto' || teams[1][2].species.name == 'Ditto')) {
                redMod = redMod * 2
            }
        }
        if (BlueAbility == 'Slow Start') {
            blueMod = blueMod * 0.5
        }
        if (RedAbility == 'Slow Start') {
            redMod = redMod * 0.5
        }
        if (BlueAbility == 'Swift Swim' && weather == 'rain' && RedAbility !== 'Air Lock' && RedAbility !== 'Cloud Nine') {
            blueMod = blueMod * 2
        } else if (BlueAbility == 'Chlorophyll' && weather == 'sun' && RedAbility !== 'Air Lock' && RedAbility !== 'Cloud Nine') {
            blueMod = blueMod * 2
        }
        if (RedAbility == 'Swift Swim' && weather == 'rain' && BlueAbility !== 'Air Lock' && BlueAbility !== 'Cloud Nine') {
            redMod = redMod * 2
        } else if (RedAbility == 'Chlorophyll' && weather == 'sun' && BlueAbility !== 'Air Lock' && BlueAbility !== 'Cloud Nine') {
            redMod = redMod * 2
        }

        blueMidSpeed = Math.floor(BlueSpeed * blueMod * spemodToMultiplier(BlueSpeMod, BlueAbility))
        redMidSpeed = Math.floor(RedSpeed * redMod * spemodToMultiplier(RedSpeMod, RedAbility));

        if (trickRoom) {
            var temp;
            temp = blueMidSpeed
            blueMidSpeed = redMidSpeed
            redMidSpeed = temp
        }

        if (BlueAbility == 'Stall') {
            blueMidSpeed = blueMidSpeed * 0.001
        }
        if (RedAbility == 'Stall') {
            redMidSpeed = redMidSpeed * 0.001
        }
        if ((RedItem == 'Full Incense' || RedItem == 'Lagging Tail') && RedAbility !== 'Klutz') {
            redMidSpeed = redMidSpeed * 0.0001
        }
        if ((BlueItem == 'Full Incense' || BlueItem == 'Lagging Tail') && BlueAbility !== 'Klutz') {
            blueMidSpeed = blueMidSpeed * 0.0001
        }

        result = (Math.floor(blueMidSpeed) - Math.floor(redMidSpeed));
        if (result > 0) {
            return "blue"
        } else if (result < 0) {
            return "red"
        } else {
            return "tie"
        }
    };

    function AllSpeedTies() {
        weather = $('.weather').text()
        //blue0red0 aka speedtie00
        for (var i = 0; i < 6; i++) {
            if (!teams[0][i]) continue;
            for (var j = 0; j < 6; j++) {
                if (!teams[1][j]) continue;
                if      (CalculateSpeedTie(teams[0][i].stats.spe, teams[1][j].stats.spe, teams[0][i].item.name, teams[1][j].item.name, teams[0][i].ability.name, teams[1][j].ability.name, StatModArr[i][4], StatModArr[6 + j][4], 0, 0) == 'blue') {
                    $('.speedtie' + i + j).css("background-color", "#24c");
                } 
                else if (CalculateSpeedTie(teams[0][i].stats.spe, teams[1][j].stats.spe, teams[0][i].item.name, teams[1][j].item.name, teams[0][i].ability.name, teams[1][j].ability.name, StatModArr[i][4], StatModArr[6 + j][4], 0, 0) == 'red') {
                    $('.speedtie' + i + j).css("background-color", "#d22");
                } 
                else if (CalculateSpeedTie(teams[0][i].stats.spe, teams[1][j].stats.spe, teams[0][i].item.name, teams[1][j].item.name, teams[0][i].ability.name, teams[1][j].ability.name, StatModArr[i][4], StatModArr[6 + j][4], 0, 0) == 'tie') {
                    $('.speedtie' + i + j).css("background-color", "#939");
                }
            }
        }
    }

    var match_id
    match_id = 0
    var match_showing

    function getCurrentMatch() {
        $.ajax({
            type: "GET",
            url: "https://twitchplayspokemon.tv/api/current_match",
            dataType: 'json',
            async: true,
            success: function (data) {
                data = data
                match_showing = true
                teams = data.teams;
                damageMatrix = [];
                StatModArr = [];
                for (j = 0; j < 2; j++) {
                    for (i = 0; i < 6; i++) {
                        StatModArr.push([0, 0, 0, 0, 0, teams[j][i]? teams[j][i].stats.hp : 0]);
                    }
                }
                gravity = false;
                trickRoom = false;
                resetStatMods();
                $('.weather').text("None");
                $('.weathermaster').html('');
                counter = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
                insertNames();
                insertMoves();
                insertStats();
                applyDefaultAbilites();
                getDamage();
                fillentries();
                AllSpeedTies();
                LoadImgSprites();
                displayTransformBoxes();
                displaySwitching(data);
                displayMetagames(data);
                displayGimmicks(data);
                match_id = data.id;
                $('#matchid').html(match_id);
            },
            error: function () {
                match_showing = false
            }
        });
    }
    getCurrentMatch();

    function transformRevisualize() {
        insertNames();
        insertMoves();
        insertStats();
        LoadImgSprites();
        damageMatrix = [];
        StatModArr = [];
        setStatModArr();
        getDamage();
        fillentries();
        AllSpeedTies();
    }

    function pingCurrentMatch() {
        $.ajax({
            type: "GET",
            url: "https://twitchplayspokemon.tv/api/matches/" + match_id,
            dataType: 'json',
            async: true,
            success: function (data) {
                match_showing = false
            },
            error: function () {
                match_showing = true
            }
        });
    }

    $('.minus-button').click((e) => {

        const minValue = 6

        const currentInput = $(e.currentTarget).parent().prev()[0];

        let minusInputValue = $(currentInput).html();

        minusInputValue--;
        if (minusInputValue < -6) {
            minusInputValue = -6;
        }
        $(currentInput).html(minusInputValue);

        setTimeout(function () {
            damageMatrix = [];
            StatModArr = [];
            setStatModArr();
            getDamage();
            insertMoves();
            fillentries();
            AllSpeedTies();
        }, 40);
    });

    $('.plus-button').click((e) => {

        const maxValue = 6

        const currentInput = $(e.currentTarget).parent().prev()[0];

        let plusInputValue = $(currentInput).html();

        plusInputValue++;
        if (plusInputValue > 6) {
            plusInputValue = 6;
        }
        $(currentInput).html(plusInputValue);

        setTimeout(function () {
            damageMatrix = [];
            StatModArr = [];
            setStatModArr();
            getDamage();
            insertMoves();
            fillentries();
            AllSpeedTies();
        }, 40);
    });

    function LoadImgSprites() {
        for (j = 0; j < 2; j++) {
            for (i = 0; i < 6; i++) {
                if (!teams[j][i]) continue;
                if (j == 0) {
                    team = "blue"
                } else if (j == 1) {
                    team = "red"
                }
                //If match is secrecy, id is set to 0. Will display unown-qm.
                if (teams[j][i].species.id == 0) {
                    if (team == 'red')
                        $('#' + team + 'img' + (i + 1)).html('<div style="height: 64px;"><img style="max-height: 100px; transform: rotate(315deg); position: relative; right: 5px; top: 20px; z-index: -5;" src="gifs/unown27.gif"/></div>')
                    else if (team == 'blue') {
                        $('#' + team + 'img' + (i + 1)).html('<div style="height: 64px;"><img style="max-height: 100px; transform: rotate(315deg); position: relative; right: 5px; top: 20px; z-index: -5;" src="gifs/unown27.gif"/></div>')
                    }
                }
                //Otherwise entry is a known pokemon. Need to check for form. Arceus does not have forms.
                else {
                    //Special Arceus check
                    if (teams[j][i].species.name.toLowerCase() == 'arceus') {
                        if (team == 'red') {
                            $('#' + team + 'img' + (i + 1)).html('<div style="height: 64px;"><img style="max-height: 100px; transform: rotate(315deg); position: relative; right: 5px; top: 20px; z-index: -5;" src="gifs/' +
                                (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-") + teams[j][i].species.types[0]) + '.gif"/></div>')
                        } else {
                            $('#' + team + 'img' + (i + 1)).html('<div style="max-height: 40px; text-align: center; transform: rotate(315deg); "><img style="max-height: 100px; transform: scaleX(-1); normal z-index: -5;" src="gifs/' +
                                (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-") + teams[j][i].species.types[0]) + '.gif" alt="1 (' + teams[j][i].species.id + ').jpg"/></div>')
                        }
                    } else {
                        //This only checks if form is NON ZERO <a href="http://pokemondb.net/pokedex/venusaur"><img src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/venusaur.gif" alt="Venusaur"></a>
                        if (teams[j][i].form) {
                            FORM = teams[j][i].form
                            if (team == 'red') {
                                $('#' + team + 'img' + (i + 1)).html('<div style="height: 64px;"><img style="max-height: 100px; transform: rotate(315deg); position: relative; right: 5px; top: 20px; z-index: -5;" src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/' +
                                    (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-") + FORM) + '.png"/></div>')
                            } else {
                                $('#' + team + 'img' + (i + 1)).html('<div style="max-height: 40px; text-align: center; transform: rotate(315deg); "><img style="max-height: 100px; transform: scaleX(-1); normal z-index: -5;" src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/' +
                                    (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-") + FORM) + '.png" alt="1 (' + teams[j][i].species.id + ').jpg"/></div>')
                            }
                        } else {
                            if (team == 'red') {
                                $('#' + team + 'img' + (i + 1)).html('<div style="height: 64px;"><img style="max-height: 100px; transform: rotate(315deg); position: relative; right: 5px; top: 20px; z-index: -5;" src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/' +
                                    (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-")) + '.png"/></div>')
                            } else {
                                $('#' + team + 'img' + (i + 1)).html('<div style="max-height: 40px; text-align: center; transform: rotate(315deg); "><img style="max-height: 100px; transform: scaleX(-1); normal z-index: -5;" src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/' +
                                    (teams[j][i].species.name.toLowerCase().replace("\'", "").replace("♂", "m").replace("♀", "f").replace(". ", "-")) + '.png" alt="1 (' + teams[j][i].species.id + ').jpg"/></div>')
                            }
                        }
                    }
                }
            }
        }
    }

    function bgtoggle() {
        $("main").toggleClass("bg2")
    }

    function displayGimmicks(data) {
        gimmicklist = ""
        for (i = 0; i < (data.base_gimmicks).length; i++) {
            gimmicklist += data.base_gimmicks[i];
            gimmicklist += ", "
        }
        $('#gimmick').html(gimmicklist)
    }

    function displayMetagames(data) {
        metagamelist = ""
        for (i = 0; i < (data.base_metagames).length; i++) {
            metagamelist += data.base_metagames[i];
            metagamelist += ", "
        }
        $('#metagame').html(metagamelist)
    }

    function displaySwitching(data) {
        $('#switching').html(data.switching)
    }

    $('.getMatch').on("click", function () {
        getCurrentMatch();
    });

    function insertNames() {
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 2; j++) {
                if (!teams[j][i]) continue;
                if (teams[j][i].species.types.length == 1) {
                    types = teams[j][i].species.types[0]
                } else {
                    types = teams[j][i].species.types[0] + '&nbsp;/&nbsp;' + teams[j][i].species.types[1]
                }
                if (teams[j][i].item.name) {
                    item = teams[j][i].item.name.replace(" ", "&nbsp;");
                } else {
                    item = '-'
                }
                if (teams[j][i].ability.name) {
                    ability = teams[j][i].ability.name.replace(" ", "&nbsp;");
                } else {
                    ability = '-'
                }
                if (teams[j][i].gender) {
                    gender = teams[j][i].gender.replace("f", "&#x2640").replace("m", "&#x2642");
                } else {
                    gender = '-'
                }
                if (teams[j][i].nature.name) {
                    nature = teams[j][i].nature.name
                } else {
                    nature = '-'
                }
                $('#' + j + '_' + i + '_Name').html(types + '&nbsp;<br>' + ability + '&nbsp;,&nbsp;' + item + '<br>' + gender + '&nbsp;,&nbsp;' + nature)
                //{{context.teams.1.0.species.types.0}}{% if context.teams.1.0.species.types.1%} / {{context.teams.1.0.species.types.1.split|join:"&nbsp;"}}{% endif %}
                //{% if context.teams.1.0.ability.name %}, {{context.teams.1.0.ability.name}}{% endif %}{% if context.teams.1.0.item.name %},
                //{{context.teams.1.0.item.name}}{% endif %}{% if context.teams.1.0.gender %}, {{context.teams.1.0.gender}}{% endif %}, {{ context.teams.1.0.nature.name}}
            }
        }
    }

    function insertMoves() {
        if ($('.weather').html() == 'fog') {
            fog = true
        } else {
            fog = false
        }
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 2; j++) {
                if (!teams[j][i]) continue;
                for (k = 0; k < 4; k++) {
                    if (teams[j][i].moves[k]) {
                        mod = 1
                        if (fog) {
                            if (teams[j][i].ability.name !== 'Air Lock' && teams[j][i].ability.name !== 'Cloud Nine')
                                mod = mod * 0.6
                        }
                        name = teams[j][i].moves[k].name.replace(" ", "&nbsp;").replace("-", "&nbsp;")
                        if (name == 'Hypnosis') {
                            teams[j][i].moves[k].accuracy = 70
                        }
                        if (gravity) {
                            mod = mod * 5 / 3
                        }
                        if (teams[j][i].item.name == 'Wide Lens' && teams[j][i].ability.name !== 'Klutz') {
                            mod = mod * 1.1
                        } else if (teams[j][i].item.name == 'Zoom Lens' && teams[j][i].ability.name !== 'Klutz') {
                            mod = 1.2 * mod
                        } else {
                            mod = mod * 1
                        }
                        if (teams[j][i].ability.name == 'No Guard') {
                            acc = "&#8734" + "%"
                        } else if (teams[j][i].ability.name == 'Compound Eyes') {
                            acc = Math.floor(mod * 1.3 * teams[j][i].moves[k].accuracy) + "%"
                        } else if (teams[j][i].ability.name == 'Hustle' && teams[j][i].moves[k].category == "Physical") {
                            acc = Math.floor(mod * 0.8 * teams[j][i].moves[k].accuracy) + "%"
                        } else {
                            acc = Math.floor(mod * teams[j][i].moves[k].accuracy) + "%"
                        }
                        if (acc == "0%") {
                            acc = ""
                        }
                        if ((teams[j][i].moves[k].name == 'Sheer Cold' || teams[j][i].moves[k].name == 'Guillotine' || teams[j][i].moves[k].name == 'Horn Drill' || teams[j][i].moves[k].name == 'Fissure')) {
                            if (teams[j][i].ability.name !== 'No Guard') {
                                acc = "30%"
                            }
                        }
                    } else {
                        name = ""
                        acc = ""
                    }

                    console.log(name, acc, ('#' + j + '_' + i + '_' + k + '_Acc'))
                    $('#' + j + '_' + i + '_' + k + '_Name').html(name)
                    $('#' + j + '_' + i + '_' + k + '_Acc').html(acc)
                }
            }
        }
    }

    function insertStats() {
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 2; j++) {
                if (!teams[j][i]) continue;
                hp = teams[j][i].stats.hp
                $('#' + j + '_' + i + '_5').html(hp)
                $('#' + j + '_' + i + '_hp').html(hp)
                $('#' + j + '_' + i + '_atk').html(teams[j][i].stats.atk)
                $('#' + j + '_' + i + '_def').html(teams[j][i].stats.def)
                $('#' + j + '_' + i + '_spa').html(teams[j][i].stats.spA)
                $('#' + j + '_' + i + '_spd').html(teams[j][i].stats.spD)
                $('#' + j + '_' + i + '_spe').html(teams[j][i].stats.spe)

            }
        }
    }

    var failCount
    failCount = 0
    //failcount essentially waits for hourly break, then waitings another 1.5 mins before making a call.

    setInterval(function () {
        if (match_showing === false) {
            if (failCount < 5) {
                getCurrentMatch();
                failCount++;
            } else {
                setTimeout(function () {
                    failCount = 0
                }, 60 * 5 * 1000);
            }
        } else {
            //pingCurrentMatch();
            failCount = 0
        }
    }, (1000 * 40));
});

}
