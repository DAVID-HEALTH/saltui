/**
 * Progress Component Demo for tingle
 * @author shallker.wxd(dongnan)
 *
 * Copyright 2014-2017, Tingle Team.
 * All rights reserved.
 */
import ReactDOM from 'react-dom';
import '@ali/tingle-context';
import Demo from './ProgressDemo';

window.FastClick && FastClick.attach(document.body);

// 渲染demo
ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));
