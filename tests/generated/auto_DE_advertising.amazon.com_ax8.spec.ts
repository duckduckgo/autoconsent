import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_advertising.amazon.com_ax8', ['https://advertising.amazon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
