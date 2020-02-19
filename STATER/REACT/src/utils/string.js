/* eslint-disable */
// import moment from 'moment';

// export const formatUnixToDate = unit => moment.unix(unit).format();
export const safeParseJSON = str => {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (e) {
    console.error('Failed to parse JSON', e);
  }
  return result;
};

// link: https://thefullsnack.com/posts/0x0b.html

export const upperFirstChar = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = text => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};

export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const makeActionName = text => {
  return lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      '',
    ),
  );
};

export const formatMoney = (number, n = 2, x = 3) => {
  const re = `\\d(?=(\\d{${x}})+${n > 0 ? '\\.' : '$'})`;
  return Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), '$& ');
};

// export const fromNow = date => {
//   return moment(date).fromNow();
// };

export const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

// toKebabCase('camelCase'); // 'camel-case'
// toKebabCase('some text'); // 'some-text'

export const toCamelCase = str => {
  let s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

// toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
// toCamelCase('some-javascript-property'); // 'someJavascriptProperty'

export const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

// toSnakeCase('camelCase'); // 'camel_case'
// toSnakeCase('some text'); // 'some_text'

export const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

// toTitleCase('some_database_field_name'); // 'Some Database Field Name'
// toTitleCase('some-package-name'); // 'Some Package Name'

export const reverseString = str => [...str].reverse().join('');

// reverseString('foobar'); // 'raboof'

export const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);

// words('I love javaScript!!'); // ["I", "love", "javaScript"]

export const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

// capitalizeEveryWord('hello world!'); // 'Hello World!'

export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// capitalize('fooBar'); // 'FooBar'

export const isEmpty = value =>
  value === undefined || value === null || value === '';

// isEmpty(''); // true
// isEmpty(undefined) // true
// isEmpty(null) // true
// isEmpty('12') // false

export const findLongestWord = str => {
  var longestWord = str.split(' ').sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
};

// findLongestWord('The quick brown fox jumped over the lazy dog'); => jumped

export const removeSpace = str => str.replace(/\s/g, '');

export const encodeJsonToURI = params => {
  return Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const formatDateTime = text => {
  return text ? moment(text).format('DD/MM/YY, hh:mmA') : null;
};

export const formatDate = text => {
  return text ? moment(text).format(' DD/MM/YY') : null;
};

// formatDate(2019-12-15T00:00:00Z) => 15/12/2019

export const formatTime = text => {
  return text ? moment(text).format('hh:mma') : null;
};

export const generateRandomAlphaNum = length => {
  let rdmString = '';
  while (rdmString.length < length) {
    rdmString += Math.random()
      .toString(36)
      .substr(2);
  }
  return rdmString.substr(0, length);
};

// generateRandomAlphaNum(10) => bsgxfn3w8o

export const compactString = (str, length = 5) => {
  return `${str.slice(0, length)}...`;
};

// compactString('abcasasgasg', 5) => abcas...

export const generateHex = () => {
  return `#${Math.floor(Math.random() * 256 ** 3)
    .toString(16)
    .padStart(6, '0')}`;
};

// generateHex() => #fff123

export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// stripHTMLTags('<p><em>Hello</em></p>) => Hello

export const bytesToSize = bytes => {
  if (bytes === 0) return '0 B';

  var k = 1024;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};

// bytesToSize(12) => "12.0 B"
