import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camptocamp.org_saj', ['https://www.camptocamp.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
