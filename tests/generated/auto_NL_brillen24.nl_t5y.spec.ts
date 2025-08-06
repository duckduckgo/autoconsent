import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_brillen24.nl_t5y',
    ['https://www.brillen24.nl/acties/collectie/charlie-temple?source=charlietemple&utm_source=charlietemple'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
