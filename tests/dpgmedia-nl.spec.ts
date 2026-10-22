import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'dpgmedia-nl',
    [
        'https://www.rtl.nl/',
        'https://www.ad.nl/',
        'https://www.volkskrant.nl/',
        'https://www.parool.nl/',
        'https://www.trouw.nl/',
        'https://www.nu.nl/',
        'https://www.autoweek.nl/',
        'https://tweakers.net/',
        'https://www.hln.be/',
    ],
    {},
);
