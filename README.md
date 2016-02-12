# Humanize

[![Build Status](https://travis-ci.org/idmontie/meteor-humanize.svg)](https://travis-ci.org/idmontie/meteor-humanize)

Humanize values to make them readable for regular people

## Installation

```
meteor add idmontie:humanize
```

## Usage

### String

```js
Humanize.String.humanize('field_name') === 'Field Name'
Humanize.String.humanize('field_name', false) === 'field name'
Humanize.String.humanize('user_id') === 'User'

var text = 'Lorem ipsum dolorem si amet, lorem ipsum. Dolorem sic et nunc.';
Humanize.String.truncate(text, 8) === 'Lorem ipsum'
Humanize.String.truncate(text, 8, '...') === 'Lorem ipsum...'
Humanize.String.truncate(text, 2) === 'Lorem'
Humanize.String.truncate(text, text.length) === text
```

### Number

```js
Humanize.Number.ordinalize(0) === '0th'
Humanize.Number.ordinalize('0') === '0th'
Humanize.Number.ordinalize(1) === '1st'
Humanize.Number.ordinalize('1') === '1st'
Humanize.Number.ordinalize(2) === '2nd'
Humanize.Number.ordinalize('2') === '2nd'
Humanize.Number.ordinalize(23) === '23rd'
Humanize.Number.ordinalize('23') === '23rd'
Humanize.Number.ordinalize(1002) === '1002nd'
Humanize.Number.ordinalize('1002') === '1002nd'
Humanize.Number.ordinalize(-111) === '-111th'
Humanize.Number.ordinalize('-111') === '-111th'
```

```js
Humanize.Number.ordinal(0) === 'th'
Humanize.Number.ordinal('0') === 'th'
Humanize.Number.ordinal(1) === 'st'
Humanize.Number.ordinal('1') === 'st'
Humanize.Number.ordinal(2) === 'nd'
Humanize.Number.ordinal('2') === 'nd'
Humanize.Number.ordinal(23) === 'rd'
Humanize.Number.ordinal('23') === 'rd'
Humanize.Number.ordinal(1002) === 'nd'
Humanize.Number.ordinal('1002') === 'nd'
Humanize.Number.ordinal(-111) === 'th'
Humanize.Number.ordinal('-111') === 'th'
```

```js
Humanize.Number.toRoman(1) === 'I'
Humanize.Number.toRoman('1') === 'I'
Humanize.Number.toRoman(5) === 'V'
Humanize.Number.toRoman('5') === 'V'
Humanize.Number.toRoman(1300) === 'MCCC'
Humanize.Number.toRoman('1300') === 'MCCC'
Humanize.Number.toRoman(3999) === 'MMMCMXCIX'
Humanize.Number.toRoman('3999') === 'MMMCMXCIX'
```

```js
Humanize.Number.fromRoman('I') === 1
Humanize.Number.fromRoman('V') === 5
Humanize.Number.fromRoman('MCCC') === 1300
Humanize.Number.fromRoman('MMMCMXCIX') === 3999
```

```js
Humanize.Number.binarySuffix(0) === '0 bytes'
Humanize.Number.binarySuffix(1) === '1 bytes'
Humanize.Number.binarySuffix(1024) === '1 kB'
Humanize.Number.binarySuffix(1025) === '1 kB'
Humanize.Number.binarySuffix(1536) === '1.5 kB'
Humanize.Number.binarySuffix(1048576 * 5) === '5 MB'
Humanize.Number.binarySuffix(1073741824 * 2) === '2 GB'
Humanize.Number.binarySuffix(1099511627776 * 3) === '3 TB'
Humanize.Number.binarySuffix(1325899906842624) === '1.18 PB'
```

```js
Humanize.Number.preciseBinarySuffix(1024, 2) === '1.00 kB'
Humanize.Number.preciseBinarySuffix(1325899906842624, 3) === '1.178 PB'
```

## Running Tests

```sh
cd src
meteor test-packages ./
```

## Publishing

```sh
cd src
meteor publish
```
