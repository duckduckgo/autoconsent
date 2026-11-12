import generateCMPTests from '../playwright/runner';

// "Choose your cookies in the Privacy Center" (CA) and "Privacy & cookies" (NL) notices
generateCMPTests('poki', ['https://poki.com/'], {
    onlyRegions: ['CA', 'NL'],
});
