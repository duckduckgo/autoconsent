import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_vintagestory.at_3eu',
    [
        'https://www.vintagestory.at/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly93d3cudmludGFnZXN0b3J5LmF0Lw==&csrfKey=0c935856d9a9e6b12a5ca4cdc7956ff3',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
