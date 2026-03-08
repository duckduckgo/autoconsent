import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesoverlithium.nl_ru8', ['https://allesoverlithium.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
