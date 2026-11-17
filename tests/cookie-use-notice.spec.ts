import generateCMPTests from '../playwright/runner';

// the notice is only shown in the EEA, the UK, Brazil and Canada
generateCMPTests('cookie-use-notice', ['https://chatrandom.com/', 'https://privr.com/'], {
    onlyRegions: ['GB', 'DE', 'FR', 'NL', 'NO', 'CA'],
});
