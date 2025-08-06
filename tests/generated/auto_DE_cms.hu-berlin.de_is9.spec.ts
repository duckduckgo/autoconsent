import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cms.hu-berlin.de_is9', ['https://www.cms.hu-berlin.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
