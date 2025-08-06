import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_vintagestory.at_c8y',
    [
        'https://www.vintagestory.at/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly93d3cudmludGFnZXN0b3J5LmF0Lw==&csrfKey=ee75426162745a0ac39d31de00b8b784',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
