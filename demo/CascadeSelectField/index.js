/**
 * CascadeSelectField Component Demo for tingle
 * @author caoke.ck
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
require('@ali/tingle-context');
window.FastClick && FastClick.attach(document.body);

// 插入svg
var IconSymbols = require('./svg/tingle-icon-symbols.svg');
ReactDOM.render(<IconSymbols/>, document.getElementById('TingleIconSymbols'));

// 渲染demo
var Demo = require('./CascadeSelectFieldDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
