import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_miles-and-more.com_xj9', ['https://www.miles-and-more.com/ch/en.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
