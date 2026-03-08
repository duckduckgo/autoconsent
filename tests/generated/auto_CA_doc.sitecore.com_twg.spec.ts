import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doc.sitecore.com_twg', ['https://doc.sitecore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
