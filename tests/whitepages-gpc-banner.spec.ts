import generateCMPTests from '../playwright/runner';

// The banner is shown only to browsers that send the GPC signal.
generateCMPTests('whitepages-gpc-banner', ['https://www.411.com/', 'https://www.whitepages.com/'], { gpc: true });
