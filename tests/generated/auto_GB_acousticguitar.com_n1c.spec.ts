import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_acousticguitar.com_n1c', ['https://acousticguitar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
