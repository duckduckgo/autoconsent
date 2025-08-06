import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gemeentebanen.nl_uom', ['https://www.gemeentebanen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
