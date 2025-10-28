import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mediamarkt.be_yup', ['https://www.mediamarkt.be/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
