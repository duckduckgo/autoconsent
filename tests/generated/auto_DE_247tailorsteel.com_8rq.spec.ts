import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_247tailorsteel.com_8rq', ['https://247tailorsteel.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
