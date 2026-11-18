import generateCMPTests from '../playwright/runner';

// in the EU and UK, Google Funding Choices is shown first and handled by its own rule
generateCMPTests('myhora.com', ['https://myhora.com/'], { onlyRegions: ['US', 'CA', 'AU', 'JP'] });
