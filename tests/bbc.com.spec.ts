import generateCMPTests from '../playwright/runner';

// The first three URLs show the current banner, the rest show the legacy "orb" banner.
generateCMPTests('bbc.com', [
    'https://www.bbc.com/sport/formula1',
    'https://www.bbc.co.uk/',
    'https://www.bbc.co.uk/news',
    'https://www.bbc.co.uk/programmes/m0024pz8',
    'https://www.bbc.co.uk/iplayer',
    'https://www.bbc.co.uk/sounds',
]);
