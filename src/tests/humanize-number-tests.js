Tinytest.add('Can ordinalize numbers', function (test) {
  test.equal('0th', Humanize.Number.ordinalize(0));
  test.equal('0th', Humanize.Number.ordinalize('0'));

  test.equal('1st', Humanize.Number.ordinalize(1));
  test.equal('1st', Humanize.Number.ordinalize('1'));

  test.equal('2nd', Humanize.Number.ordinalize(2));
  test.equal('2nd', Humanize.Number.ordinalize('2'));

  test.equal('23rd', Humanize.Number.ordinalize(23));
  test.equal('23rd', Humanize.Number.ordinalize('23'));

  test.equal('1002nd', Humanize.Number.ordinalize(1002));
  test.equal('1002nd', Humanize.Number.ordinalize('1002'));

  test.equal('-111th', Humanize.Number.ordinalize(-111));
  test.equal('-111th', Humanize.Number.ordinalize('-111'));
});

Tinytest.add('Can get ordinal of numbers', function (test) {
  test.equal('th', Humanize.Number.ordinal(0));
  test.equal('th', Humanize.Number.ordinal('0'));

  test.equal('st', Humanize.Number.ordinal(1));
  test.equal('st', Humanize.Number.ordinal('1'));

  test.equal('nd', Humanize.Number.ordinal(2));
  test.equal('nd', Humanize.Number.ordinal('2'));

  test.equal('rd', Humanize.Number.ordinal(23));
  test.equal('rd', Humanize.Number.ordinal('23'));

  test.equal('nd', Humanize.Number.ordinal(1002));
  test.equal('nd', Humanize.Number.ordinal('1002'));

  test.equal('th', Humanize.Number.ordinal(-111));
  test.equal('th', Humanize.Number.ordinal('-111'));
});

Tinytest.add('Can romanize numbers', function (test) {
  test.equal('I', Humanize.Number.toRoman(1));
  test.equal('I', Humanize.Number.toRoman('1'));

  test.equal('V', Humanize.Number.toRoman(5));
  test.equal('V', Humanize.Number.toRoman('5'));

  test.equal('MCCC', Humanize.Number.toRoman(1300));
  test.equal('MCCC', Humanize.Number.toRoman('1300'));

  test.equal('MMMCMXCIX', Humanize.Number.toRoman(3999));
  test.equal('MMMCMXCIX', Humanize.Number.toRoman('3999'));
});

Tinytest.add('Can unromanize numbers', function (test) {
  test.equal(1, Humanize.Number.fromRoman('I'));
  test.equal(5, Humanize.Number.fromRoman('V'));
  test.equal(1300, Humanize.Number.fromRoman('MCCC'));
  test.equal(3999, Humanize.Number.fromRoman('MMMCMXCIX'));
});

Tinytest.add('Can add binary suffix', function (test) {
  test.equal('0 bytes', Humanize.Number.binarySuffix(0));
  test.equal('1 bytes', Humanize.Number.binarySuffix(1));
  test.equal('1 kB', Humanize.Number.binarySuffix(1024));
  test.equal('1 kB', Humanize.Number.binarySuffix(1025));
  test.equal('1.5 kB', Humanize.Number.binarySuffix(1536));
  test.equal('5 MB', Humanize.Number.binarySuffix(1048576 * 5));
  test.equal('2 GB', Humanize.Number.binarySuffix(1073741824 * 2));
  test.equal('3 TB', Humanize.Number.binarySuffix(1099511627776 * 3));
  test.equal('1.18 PB', Humanize.Number.binarySuffix(1325899906842624));
});

Tinytest.add('Can add precise binary suffix', function (test) {
  test.equal('1.00 kB', Humanize.Number.preciseBinarySuffix(1024, 2));
  test.equal('1.178 PB', Humanize.Number.preciseBinarySuffix(1325899906842624, 3));
});