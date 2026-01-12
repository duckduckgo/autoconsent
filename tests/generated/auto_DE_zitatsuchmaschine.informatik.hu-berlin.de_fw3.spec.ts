import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zitatsuchmaschine.informatik.hu-berlin.de_fw3', ['https://zitatsuchmaschine.informatik.hu-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
