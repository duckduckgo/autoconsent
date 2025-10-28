import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mediamarkt.be_pf1', ['https://www.mediamarkt.be/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
