import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrepompidou.fr_nak', ['https://www.centrepompidou.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
