import generateCMPTests from '../playwright/runner';

generateCMPTests('magefan', ['https://www.tileexperience.co.uk/']);

// the popup is only shown to visitors from Germany
generateCMPTests('magefan', ['https://www.meinduft.de/'], { onlyRegions: ['DE'] });

// the shop hides the decline button; the site blocks visitors from Germany
generateCMPTests('magefan', ['https://www.silencershop.com/'], { skipRegions: ['DE'] });
