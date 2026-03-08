import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_careers.adobe.com_86y', ['https://careers.adobe.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
