import generateCMPTests from '../playwright/runner';

// Destination pages may load a separate ad consent iframe (nojazz) after the cookiewall is submitted
generateCMPTests(
    'visualreality',
    [
        'https://www.tournamentsoftware.com/',
        'https://be.tournamentsoftware.com/',
        'https://www.turnier.de/',
        'https://dbv.turnier.de/',
        'https://www.toernooi.nl/',
        'https://mijnknltb.toernooi.nl/',
        'https://www.vetts.org.uk/',
    ],
    { expectedRuns: 2, mobile: false },
);
generateCMPTests(
    'visualreality',
    [
        'https://www.tournamentsoftware.com/',
        'https://be.tournamentsoftware.com/',
        'https://www.turnier.de/',
        'https://dbv.turnier.de/',
        'https://www.toernooi.nl/',
        'https://mijnknltb.toernooi.nl/',
        'https://www.vetts.org.uk/',
    ],
    { expectedRuns: 2, mobile: true },
);
