import generateCMPTests from '../playwright/runner';

// any consent choice reloads the page, which interrupts the self-test
generateCMPTests(
    'sitevision-iw-cookie',
    ['https://kronofogden.se/', 'https://www.val.se/', 'https://skatterattsnamnden.se/', 'https://forskarskattenamnden.se/'],
    {
        testSelfTest: false,
    },
);
