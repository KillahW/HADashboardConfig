$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main Panel");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-samuel-presence" id="default-samuel-presence"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-bea-presence" id="default-bea-presence"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-john-presence" id="default-john-presence"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-yrtemp" id="default-yrtemp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-yrnederbord" id="default-yrnederbord"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basemedia-default-media-player-vardagsrum" id="default-media-player-vardagsrum"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="artist" data-bind="text: artist, attr:{style: artist_style}"></h1><h1 class="media_title" data-bind="text: media_title, attr:{style: media_title_style}"></h1><h1 class="album" data-bind="text: album, attr:{style: album_style}"></h1><h2 id="previous" class="previous" data-bind="attr:{style: previous_icon_style}"><i data-bind="attr: {class: previous_icon}"></i></h2><h2 id="play" class="play" data-bind="attr:{style: play_icon_style}"><i data-bind="attr: {class: play_icon}"></i></h2><h2 id="next" class="next" data-bind="attr:{style: next_icon_style}"><i data-bind="attr: {class: next_icon}"></i></h2><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="attr:{style: units_style}">%</p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basemedia-default-media-player-yamaha-receiver" id="default-media-player-yamaha-receiver"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="artist" data-bind="text: artist, attr:{style: artist_style}"></h1><h1 class="media_title" data-bind="text: media_title, attr:{style: media_title_style}"></h1><h1 class="album" data-bind="text: album, attr:{style: album_style}"></h1><h2 id="previous" class="previous" data-bind="attr:{style: previous_icon_style}"><i data-bind="attr: {class: previous_icon}"></i></h2><h2 id="play" class="play" data-bind="attr:{style: play_icon_style}"><i data-bind="attr: {class: play_icon}"></i></h2><h2 id="next" class="next" data-bind="attr:{style: next_icon_style}"><i data-bind="attr: {class: next_icon}"></i></h2><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="attr:{style: units_style}">%</p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basemedia-default-media-player-libreelec-tradad" id="default-media-player-libreelec-tradad"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="artist" data-bind="text: artist, attr:{style: artist_style}"></h1><h1 class="media_title" data-bind="text: media_title, attr:{style: media_title_style}"></h1><h1 class="album" data-bind="text: album, attr:{style: album_style}"></h1><h2 id="previous" class="previous" data-bind="attr:{style: previous_icon_style}"><i data-bind="attr: {class: previous_icon}"></i></h2><h2 id="play" class="play" data-bind="attr:{style: play_icon_style}"><i data-bind="attr: {class: play_icon}"></i></h2><h2 id="next" class="next" data-bind="attr:{style: next_icon_style}"><i data-bind="attr: {class: next_icon}"></i></h2><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="attr:{style: units_style}">%</p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 1, 3, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-samuel-presence"] = new basedisplay("default-samuel-presence", "", "default", {'static_css': {'title2_style': 'color: #fff;', 'value_style': '', 'unit_style': '', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'font-size: 100%;color: #fff;'}, 'sub_entity': '', 'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.samuels_plats', 'use_comma': 0, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'static_icons': [], 'use_hass_icon': 1, 'fields': {'title2': '', 'state_text': '', 'title': 'Samuel', 'value': '', 'unit': ''}, 'icons': []})
    
        widgets["default-bea-presence"] = new basedisplay("default-bea-presence", "", "default", {'static_css': {'title2_style': 'color: #fff;', 'value_style': '', 'unit_style': '', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'font-size: 100%;color: #fff;'}, 'sub_entity': '', 'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.ar_bea_hemma', 'use_comma': 0, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'static_icons': [], 'use_hass_icon': 1, 'fields': {'title2': '', 'state_text': '', 'title': 'Beatrice', 'value': '', 'unit': ''}, 'icons': []})
    
        widgets["default-john-presence"] = new basedisplay("default-john-presence", "", "default", {'static_css': {'title2_style': 'color: #fff;', 'value_style': '', 'unit_style': '', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'font-size: 100%;color: #fff;'}, 'sub_entity': '', 'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.ar_john_hemma', 'use_comma': 0, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'static_icons': [], 'use_hass_icon': 1, 'fields': {'title2': '', 'state_text': '', 'title': 'John', 'value': '', 'unit': ''}, 'icons': []})
    
        widgets["default-yrtemp"] = new basedisplay("default-yrtemp", "", "default", {'static_css': {'title2_style': 'color: #fff;', 'value_style': '', 'unit_style': '', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'font-size: 100%;color: #fff;'}, 'sub_entity': '', 'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.yr_temperature', 'use_comma': 0, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'static_icons': [], 'use_hass_icon': 1, 'fields': {'title2': '', 'state_text': '', 'title': 'Temperatur enligt Yr', 'value': '', 'unit': ''}, 'icons': []})
    
        widgets["default-yrnederbord"] = new basedisplay("default-yrnederbord", "", "default", {'static_css': {'title2_style': 'color: #fff;', 'value_style': '', 'unit_style': '', 'title_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'font-size: 100%;color: #fff;'}, 'sub_entity': '', 'widget_type': 'basedisplay', 'precision': 1, 'entity': 'sensor.yr_precipitation', 'use_comma': 0, 'css': {'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;', 'value_style': 'font-size: 250%;color: #00aaff;'}, 'static_icons': [], 'use_hass_icon': 1, 'fields': {'title2': '', 'state_text': '', 'title': 'Nederbörd', 'value': '', 'unit': ''}, 'icons': []})
    
        widgets["default-media-player-vardagsrum"] = new basemedia("default-media-player-vardagsrum", "", "default", {'static_css': {'previous_icon_style': 'color: #888;', 'artist_style': 'color: #fff;', 'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'units_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'next_icon_style': 'color: #888;', 'level_up_style': 'color: #888;', 'album_style': 'color: #fff;', 'media_title_style': 'color: #fff;'}, 'post_service_next': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/media_next_track'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'title_is_friendly_name': 1, 'post_service_pause': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/media_pause'}, 'fields': {'play_icon_style': '', 'level': '', 'artist': '', 'pause_icon_style': '', 'previous_icon_style': '', 'state_text': '', 'album': '', 'media_title': '', 'next_icon_style': '', 'title': ''}, 'precision': 1, 'icons': {'pause_icon': 'fa-pause', 'play_icon': 'fa-play'}, 'post_service_previous': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/media_previous_track'}, 'post_service_level': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/volume_set'}, 'post_service_stop': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/media_stop'}, 'entity': 'media_player.vardagsrum', 'use_comma': 0, 'post_service_play_pause': {'entity_id': 'media_player.vardagsrum', 'service': 'media_player/media_play_pause'}, 'widget_type': 'basemedia', 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus', 'next_icon': 'fa-step-forward', 'previous_icon': 'fa-step-backward'}})
    
        widgets["default-media-player-yamaha-receiver"] = new basemedia("default-media-player-yamaha-receiver", "", "default", {'static_css': {'previous_icon_style': 'color: #888;', 'artist_style': 'color: #fff;', 'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'units_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'next_icon_style': 'color: #888;', 'level_up_style': 'color: #888;', 'album_style': 'color: #fff;', 'media_title_style': 'color: #fff;'}, 'post_service_next': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/media_next_track'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'title_is_friendly_name': 1, 'post_service_pause': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/media_pause'}, 'fields': {'play_icon_style': '', 'level': '', 'artist': '', 'pause_icon_style': '', 'previous_icon_style': '', 'state_text': '', 'album': '', 'media_title': '', 'next_icon_style': '', 'title': ''}, 'precision': 1, 'icons': {'pause_icon': 'fa-pause', 'play_icon': 'fa-play'}, 'post_service_previous': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/media_previous_track'}, 'post_service_level': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/volume_set'}, 'post_service_stop': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/media_stop'}, 'entity': 'media_player.yamaha_receiver', 'use_comma': 0, 'post_service_play_pause': {'entity_id': 'media_player.yamaha_receiver', 'service': 'media_player/media_play_pause'}, 'widget_type': 'basemedia', 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus', 'next_icon': 'fa-step-forward', 'previous_icon': 'fa-step-backward'}})
    
        widgets["default-media-player-libreelec-tradad"] = new basemedia("default-media-player-libreelec-tradad", "", "default", {'static_css': {'previous_icon_style': 'color: #888;', 'artist_style': 'color: #fff;', 'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'units_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'next_icon_style': 'color: #888;', 'level_up_style': 'color: #888;', 'album_style': 'color: #fff;', 'media_title_style': 'color: #fff;'}, 'post_service_next': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/media_next_track'}, 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'title_is_friendly_name': 1, 'post_service_pause': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/media_pause'}, 'fields': {'play_icon_style': '', 'level': '', 'artist': '', 'pause_icon_style': '', 'previous_icon_style': '', 'state_text': '', 'album': '', 'media_title': '', 'next_icon_style': '', 'title': ''}, 'precision': 1, 'icons': {'pause_icon': 'fa-pause', 'play_icon': 'fa-play'}, 'post_service_previous': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/media_previous_track'}, 'post_service_level': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/volume_set'}, 'post_service_stop': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/media_stop'}, 'entity': 'media_player.libreelec_tradad', 'use_comma': 0, 'post_service_play_pause': {'entity_id': 'media_player.libreelec_tradad', 'service': 'media_player/media_play_pause'}, 'widget_type': 'basemedia', 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus', 'next_icon': 'fa-step-forward', 'previous_icon': 'fa-step-backward'}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Main Panel", widgets);

});