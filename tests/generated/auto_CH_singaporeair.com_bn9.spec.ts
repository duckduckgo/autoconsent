import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_singaporeair.com_bn9', ['https://www.singaporeair.com/de_DE/ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
