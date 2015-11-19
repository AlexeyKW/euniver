var info = L.Control.extend({
    options: {
        position: 'bottomright'
    },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'info');		
            return container;
        }
	});