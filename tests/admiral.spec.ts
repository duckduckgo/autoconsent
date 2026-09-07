import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Admiral',
    [
        'https://townhall.com/columnists/anthony-constantini/2026/07/23/break-googles-monopoly-for-good-n2679904',
        'https://redstate.com/',
        'https://twitchy.com/',
        'https://hotair.com/',
    ],
    { testOptIn: false },
);
