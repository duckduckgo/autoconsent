import generateCMPTests from '../playwright/runner';

// The popup is only served in the EEA/UK.
generateCMPTests('tri-table', ['https://teledyski.info/', 'https://matzoo.pl/', 'https://webcamera.pl/', 'https://hostuje.net/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
