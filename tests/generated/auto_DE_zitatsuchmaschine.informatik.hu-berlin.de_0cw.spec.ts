import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zitatsuchmaschine.informatik.hu-berlin.de_0cw', ['https://zitatsuchmaschine.informatik.hu-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
