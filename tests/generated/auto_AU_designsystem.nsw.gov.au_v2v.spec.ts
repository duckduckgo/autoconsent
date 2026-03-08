import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_designsystem.nsw.gov.au_v2v', ['https://designsystem.nsw.gov.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
