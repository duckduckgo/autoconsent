import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_content.nexus.support.com_clj', ['https://content.nexus.support.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
