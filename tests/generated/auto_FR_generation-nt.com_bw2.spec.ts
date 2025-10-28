import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generation-nt.com_bw2', ['https://www.generation-nt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
