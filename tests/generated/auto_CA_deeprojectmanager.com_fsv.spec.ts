import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deeprojectmanager.com_fsv', ['https://deeprojectmanager.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
