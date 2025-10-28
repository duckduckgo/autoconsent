import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parapharmacie-chezmoi.fr_s33', ['https://www.parapharmacie-chezmoi.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
