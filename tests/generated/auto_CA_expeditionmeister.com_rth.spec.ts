import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_expeditionmeister.com_rth', ['https://expeditionmeister.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
