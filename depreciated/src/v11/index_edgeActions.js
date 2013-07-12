/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindElementAction(compId, symbolName, "${_settings} > span:nth-child(12) > a:nth-child(1)", "mouseover", function(e) {
// Show an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("helpText")).show();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_settings} > span:nth-child(12) > a:nth-child(1)", "click", function(e) {
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("settings")).hide();
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_settings} > span:nth-child(12) > a:nth-child(1)", "mouseout", function(e) {
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("helpText")).hide();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "document", "loaded", function(e) {
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("helpText")).hide();
// insert code for loaded event here
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_settings} > span:nth-child(17) > a:nth-child(1)", "mouseover", function(e) {
// Show an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("helpText")).show();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_settings} > span:nth-child(17) > a:nth-child(1)", "mouseout", function(e) {
// Hide an Element.
//  (lookupSelector resolves an Edge element name to a DOM
//  selector that can be used with jQuery)
$(this.lookupSelector("helpText")).hide();

});
//Edge binding end

})("stage");
//Edge symbol end:'stage'

})(jQuery, jQuery.Edge, "EDGE-257163");