import generateCMPTests from '../playwright/runner';

// time.com loads Ketch but often does not surface a consent banner in headless NA;
// these sites reliably show the Ketch consent UI for E2E.
generateCMPTests('Ketch', ['https://tailscale.com/', 'https://rivian.com/', 'https://help.smartsheet.com/']);
