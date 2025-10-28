import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.powerthesaurus.org_3ee', ['https://fr.powerthesaurus.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
