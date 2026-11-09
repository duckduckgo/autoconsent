import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'whcookies',
    [
        'https://www.prawo-pracy.pl/',
        'https://wanatowka.pl/',
        'https://promkultury.pl/',
        'https://szpitalplock.pl/',
        'https://cbos.pl/PL/home/home.php',
    ],
    {
        onlyRegions: ['PL', 'DE', 'GB', 'US'],
    },
);
