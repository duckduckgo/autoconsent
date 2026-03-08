import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_essenceofsymbols.com_m4b', ['https://essenceofsymbols.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
