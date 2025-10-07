import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_implantate.com_76a', ['https://www.implantate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
