import generateCMPTests from '../playwright/runner';

// www.jobagent.ch also uses this CMP, but blocks automated browsers.
generateCMPTests('x28-privacy-settings', ['https://stellenmarkt.wvib.de/', 'https://www.x28.ch/', 'https://www.job-radar.ch/']);
