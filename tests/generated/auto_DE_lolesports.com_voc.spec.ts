import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lolesports.com_voc', ['https://lolesports.com/de-DE/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
