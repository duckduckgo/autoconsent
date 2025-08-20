import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cms.hu-berlin.de_c1e', ['https://www.cms.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
