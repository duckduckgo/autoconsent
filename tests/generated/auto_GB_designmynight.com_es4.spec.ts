import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_designmynight.com_es4', ['https://www.designmynight.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
