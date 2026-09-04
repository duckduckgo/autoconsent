import generateCMPTests from '../playwright/runner';

generateCMPTests('iubenda', ['https://www.rossignol.com/us/', 'https://www.lofficielusa.com/', 'https://www.3bmeteo.com/'], {
    skipRegions: ['AU'],
});

// Banner content overflows on small screens, so iubenda asks for a second press to confirm.
// The self test is skipped because this site reloads right after the choice is saved, which
// tears down the content script before it can run.
generateCMPTests('iubenda', ['https://borromees.com/'], {
    skipRegions: ['AU'],
    testSelfTest: false,
});
