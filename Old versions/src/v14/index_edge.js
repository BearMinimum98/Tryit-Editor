/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var symbols = {
"stage": {
   version: "0.1.3",
   baseState: "Base State",
   initialState: "Base State",
   content: {
      dom: [
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
],
      symbolInstances: [
      ]
   },
   states: {
      "Base State": {
         "${_footerText}": [
            ["style", "opacity", '0']
         ],
         "${_status2}": [
            ["style", "opacity", '0']
         ],
         "${_view}": [
            ["style", "opacity", '0']
         ],
         "body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1)": [
            ["style", "opacity", '0']
         ],
         "${_submit}": [
            ["style", "-webkit-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "body > table:nth-child(1)": [
            ["style", "opacity", '0']
         ],
         "${_helpText}": [
            ["style", "overflow", 'hidden'],
            ["style", "opacity", '1']
         ],
         "${_settings}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2005,
         labels: {

         },
         timeline: [
            { id: "eid16", tween: [ "style", "body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid12", tween: [ "style", "${_footerText}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeInOutBounce" },
            { id: "eid24", tween: [ "style", "${_status2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeInOutBounce" },
            { id: "eid18", tween: [ "style", "${_view}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid20", tween: [ "style", "body > table:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeInOutBounce" },
            { id: "eid27", tween: [ "style", "${_helpText}", "opacity", '1', { fromValue: '1'}], position: 2005, duration: 0 },
            { id: "eid9", tween: [ "style", "${_settings}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeInOutBounce" }]
      }
   }
}};

var comp;
Edge.registerCompositionDefn(compId, symbols);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     comp = new Edge.Composition(compId, {stage: "." + compId}, {});
	   /**
 * Adobe Edge Timeline Launch
 */
     comp.ready(function() {
         comp.play();
     });
});
})(jQuery, jQuery.Edge, "EDGE-257163");
