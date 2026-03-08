import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.openolat.org_onu', ['https://docs.openolat.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
