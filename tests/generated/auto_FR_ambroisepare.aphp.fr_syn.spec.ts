import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ambroisepare.aphp.fr_syn', ['https://ambroisepare.aphp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
