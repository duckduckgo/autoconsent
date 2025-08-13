import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gemeentebanen.nl_trq', ['https://www.gemeentebanen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
