import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.dachser.com_1sz', ['https://careers.dachser.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
