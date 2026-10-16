import generateCMPTests from '../playwright/runner';

generateCMPTests('kobo.com', ['https://www.kobo.com/'], { skipRegions: ['US', 'CA', 'JP', 'AU'] });
