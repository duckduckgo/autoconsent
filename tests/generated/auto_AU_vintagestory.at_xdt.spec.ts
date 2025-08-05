import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_vintagestory.at_xdt',
    [
        'https://www.vintagestory.at/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly93d3cudmludGFnZXN0b3J5LmF0Lw==&csrfKey=6cb29b5a8f64ae82edfb659966f9a76b',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
