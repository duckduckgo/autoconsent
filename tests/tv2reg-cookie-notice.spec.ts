import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tv2reg-cookie-notice',
    [
        'https://www.tv2ostjylland.dk/',
        'https://www.tv2fyn.dk/',
        'https://www.tv2nord.dk/',
        'https://www.tvmidtvest.dk/',
        'https://www.tvsyd.dk/',
        'https://www.tv2east.dk/',
        'https://www.tv2kosmopol.dk/',
        'https://www.tv2bornholm.dk/',
    ],
    {},
);
