import generateCMPTests from '../playwright/runner';

// The TCF notice is only shown in the EEA; other regions get Clym's main-page notice or nothing
generateCMPTests('clym-tcf-frame', ['https://www.peoplefinders.com/', 'https://www.spydialer.com/'], {
    onlyRegions: ['DE', 'ES', 'FR', 'NL', 'PL'],
});
