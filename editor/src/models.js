var widgetDimens = {
  width: 176,
  height:58 
};
var bodyOptions = {
        stroke: '#CCCCCC'
      };
var rectOptions = {
        fill: '#395373' }
        var labelRefY = 20;
        var descriptionRefY = 70;

  function createDefaultAttrs(name, text) {
var defaultAttrs = {
      '.body': {
        stroke: '#CCCCCC'
      },
      rect: {
        fill: '#395373' },
      circle: {
      },
      '.label': {
        text: name,
        fill: '#FFFFFF',
        'ref-y': labelRefY
      },
      '.description': {
        text: text,
        fill: '#FFFFFF',
        'ref-y': descriptionRefY,
        'font-size': '12px',
        'ref-x': .5,
        'text-anchor': 'middle'
      },

      '.inPorts circle': {
        fill: '#c8c8c8',
        stroke: '#E3E3E3'
      },
      '.outPorts circle': {
        fill: '#262626',

      }
    };
    return defaultAttrs;
  }
var defaultPorts = {
        groups: {
            'in': {
                //position: 'top',
                /*
                label: {
                position: 'outside',
                },
                */
                label: {
                    // label layout definition:
                    position: {
                        name: 'manual', args: {
                            y: 20,
                            x: -6,
                            attrs: { '.': { 'text-anchor': 'middle' } }
                        }
                    }
                },
                attrs: {
                    }
            },
            'out': {
                //position: 'bottom',

                label: {
                    // label layout definition:
                    position: {
                        name: 'manual', args: {
                            y: 20,
                            x: 20,
                            attrs: { '.': { 'text-anchor': 'middle' } }
                        }
                    }
                },
            }
        }
    };

  var defaultMarkup = '<g class="rotatable"><g class="scalable"><rect rx="10" ry="10" class="body"/></g><image/><text class="label"/><text class="description"/><g class="inPorts"/><g class="outPorts"/></g>';

// Launch NODE  
joint.shapes.devs.LaunchModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: "Launch",
    type: 'devs.LaunchModel',
    size: widgetDimens,
        attrs: createDefaultAttrs("Launch", "the flow entrypoint"),
    inPorts: [],
    outPorts: [''],
    ports: defaultPorts

  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.LaunchView = joint.shapes.devs.ModelView;


// call capacity
joint.shapes.devs.CallCapacityModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,
  defaults: joint.util.deepSupplement({
    name: 'CallCapacity',
    type: 'devs.CallCapacityModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("CallCapacity", ""),
    inPorts: ['In'],
    outPorts: ['Out', 'No match'],
    ports: defaultPorts,
    creates: 'CallCapacityModel',
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.CallCapacityView = joint.shapes.devs.CallCapacityView;


// Low Cost check
joint.shapes.devs.LowCostModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'LowCost',
    type: 'devs.LowCostModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("LowCost", ""),
    inPorts: ['In'],
    outPorts: ['Out', 'No match'],
    ports: defaultPorts,

    creates: 'LowCostModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.LowCostView = joint.shapes.devs.LowCostView;

// High Cost check
joint.shapes.devs.HighCostModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'HighCost',
    type: 'devs.HighCostModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("HighCost", ""),
    inPorts: ['In'],
    outPorts: ['Out', 'No match'],
    ports: defaultPorts,

    creates: 'HighCostModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.HighCostView = joint.shapes.devs.HighCostView;

// location check
joint.shapes.devs.LocationCheckModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'LocationCheck',
    type: 'devs.LocationCheckModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("LocationCheck", ""),
    inPorts: ['In'],
    outPorts: ['Out', 'No match'],
    ports: defaultPorts,

    creates: 'LocationCheckModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.LocationCheckView = joint.shapes.devs.LocationCheckView;

joint.shapes.devs.UserPriorityModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'UserPriority',
    type: 'devs.UserPriorityModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("UserPriority", ""),
    inPorts: ['In'],
    outPorts: ['Out', 'No match'],
    ports: defaultPorts,

    creates: 'UserPriorityModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.UserPriorityView = joint.shapes.devs.UserPriorityView;


joint.shapes.devs.SortServersModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'SortServers',
    type: 'devs.SortServersModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("SortServers", ""),
    inPorts: ['In'],
    outPorts: [],
    ports: defaultPorts,

    creates: 'SortServersModel',
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.SortServersView = joint.shapes.devs.SortServersView;


joint.shapes.devs.EndRoutingModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'EndRouting',
    type: 'devs.EndRoutingModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("EndRouting", ""),
    inPorts: ['In'],
    outPorts: [],
    ports: defaultPorts,

    creates: 'EndRoutingModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.EndRoutingView = joint.shapes.devs.EndRoutingView;



joint.shapes.devs.NoRoutingModel = joint.shapes.devs.Model.extend({

  markup: defaultMarkup,

  defaults: joint.util.deepSupplement({
    name: 'NoRouting',
    type: 'devs.NoRoutingModel',
    size: widgetDimens, 
    attrs: createDefaultAttrs("NoRouting", ""),
    inPorts: ['In'],
    outPorts: [],
    ports: defaultPorts,

    creates: 'NoRoutingModel'
  }, joint.shapes.devs.Model.prototype.defaults)
});

joint.shapes.devs.NoRoutingView = joint.shapes.devs.NoRoutingView;

// Flow STYLE
joint.shapes.devs.Link.define('devs.FlowLink', {
      attrs: {
              ".connection": {
                "stroke-width": 2,  // old value: 1
                "stroke": "gray",  // old value: del param
                "stroke-dasharray": 10  // old value: del param
              } 
            }
}, {
    // inherit joint.shapes.standard.Link.markup
}, {
});