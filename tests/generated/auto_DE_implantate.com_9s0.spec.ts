import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_implantate.com_9s0', ['https://www.implantate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
