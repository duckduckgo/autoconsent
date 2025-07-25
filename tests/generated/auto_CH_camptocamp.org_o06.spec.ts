import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camptocamp.org_o06', ['https://www.camptocamp.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
