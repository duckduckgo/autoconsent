import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'dpgmedia-nl',
    ['https://tweakers.net', 'https://parool.nl', 'https://www.nu.nl/', 'https://www.volkskrant.nl/', 'https://www.hln.be/'],
    {},
);
