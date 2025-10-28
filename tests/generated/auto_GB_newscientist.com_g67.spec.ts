import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newscientist.com_g67', ['https://www.newscientist.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
