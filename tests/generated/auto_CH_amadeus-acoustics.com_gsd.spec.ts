import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amadeus-acoustics.com_gsd', ['https://amadeus-acoustics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
