import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_revouninstaller.com_67k', ['https://www.revouninstaller.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
