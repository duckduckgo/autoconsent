import generateCMPTests from '../playwright/runner';

// The page reloads after the reject click, so the self-test never runs
generateCMPTests(
    'vortex-consent',
    [
        'https://www.inn.no/',
        'https://www.uio.no/',
        'https://www.hiof.no/',
        'https://www.nih.no/',
        'https://www.himolde.no/',
        'https://www.samordnaopptak.no/',
        'https://www.aho.no/',
    ],
    {
        testSelfTest: false,
    },
);
