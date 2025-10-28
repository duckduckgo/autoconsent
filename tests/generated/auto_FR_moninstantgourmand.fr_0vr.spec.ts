import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moninstantgourmand.fr_0vr', ['https://moninstantgourmand.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
