import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_klm.com_gyp', ['https://www.klm.ca/?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
