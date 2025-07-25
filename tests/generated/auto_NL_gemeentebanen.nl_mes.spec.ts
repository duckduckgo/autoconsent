import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gemeentebanen.nl_mes', ['https://www.gemeentebanen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
