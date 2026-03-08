import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-warnemuender.de_pcb', ['https://der-warnemuender.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
