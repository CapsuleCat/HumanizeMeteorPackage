Tinytest.add('Can humanize strings', function (test) {
  test.equal('Field Name', Humanize.String.humanize('field_name'));
  test.equal('field name', Humanize.String.humanize('field_name', false));

  test.equal('User', Humanize.String.humanize('user_id'));
});

Tinytest.add('Can truncate strings', function (test) {
  var text = 'Lorem ipsum dolorem si amet, lorem ipsum. Dolorem sic et nunc.';

  test.equal('Lorem ipsum', Humanize.String.truncate(text, 8));
  test.equal('Lorem ipsum...', Humanize.String.truncate(text, 8, '...'));
  test.equal('Lorem', Humanize.String.truncate(text, 2));
  test.equal(text, Humanize.String.truncate(text, text.length));
});
