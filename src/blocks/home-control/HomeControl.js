define(["leaflet"], function(L){

    L.Control.HomeControl = L.Control.extend({
        options: {
            position: "topleft"
        },
        initialize: function (options) {
            L.Util.setOptions(this, options);
        },
        onAdd: function () {
            var that = this,
                container = L.DomUtil.create('div', 'leaflet-control leaflet-bar home-control'),
                link =  L.DomUtil.create('a', 'material-icons', container);

            link.innerHTML = "home";
            link.setAttribute("href", "#");
            link.setAttribute("title", "Home");

            link.onclick = function(e){
                e.preventDefault();
                that.options.map.goHome();
            }

            return container;
        }
    });

    return L.Control.InfoPanel;
});

