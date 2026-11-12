import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'swis-avg',
    ['https://www.ntvg.nl/', 'https://www.swis.nl/', 'https://zorginkoopnetwerknederland.nl/', 'https://prelumacademy.nl/'],
    {},
);
