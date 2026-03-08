import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_everydayape.com_x5z', ['https://everydayape.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
