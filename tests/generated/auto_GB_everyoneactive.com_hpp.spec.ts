import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_everyoneactive.com_hpp', ['https://www.everyoneactive.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
