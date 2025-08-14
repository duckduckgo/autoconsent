import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_vintagestory.at_q3i',
    [
        'https://www.vintagestory.at/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly93d3cudmludGFnZXN0b3J5LmF0Lw==&csrfKey=f1abb910721e6f8d1dcb04d23ed34d93',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
