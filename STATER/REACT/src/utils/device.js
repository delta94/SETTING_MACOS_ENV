import { memoize } from 'lodash';

export const isNotAppleDevice = () =>
  !/iPhone|iPod|iPad/i.test(navigator.userAgent);

export const inBrowser = typeof window !== 'undefined';

// get user agent
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();

// detect browser
export const isIE = UA && /msie|trident/.test(UA);
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const isEdge = UA && UA.indexOf('edge/') > 0;
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
export const isPhantomJS = UA && /phantomjs/.test(UA);
export const isFF = UA && UA.match(/firefox\/(\d+)/);

// detect OS
export const isAndroid = UA && UA.indexOf('android') > 0;
export const isIOS = memoize(() => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);

