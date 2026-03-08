import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_constructiehuis.nl_2wr', ['https://constructiehuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
