import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'passenger-cookie-opt-in',
    [
        'https://www.traveline.info/',
        'https://www.nctx.co.uk/',
        'https://www.cardiffbus.com/',
        'https://www.reading-buses.co.uk/',
        'https://www.mcgillsbuses.co.uk/',
        'https://www.transdevbus.co.uk/',
    ],
    {},
);
