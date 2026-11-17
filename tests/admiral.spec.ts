import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Admiral',
    [
        'https://steamcharts.com/',
        'https://www.linguee.com/',
        'https://www.buchstaben.com/',
        'https://www.dexerto.com/',
        'https://www.last.fm/',
    ],
    { testOptIn: false },
);
