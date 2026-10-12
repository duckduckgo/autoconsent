import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://www.mcgill.ca/']);
generateCMPTests('eu-cookie-compliance-banner', ['https://healthcare.utah.edu/'], { onlyRegions: ['US'] });
generateCMPTests('eu-cookie-compliance-banner', ['https://www.loveessex.org/', 'https://www.bto.org/'], { onlyRegions: ['GB'] });
generateCMPTests('eu-cookie-compliance-banner', ['https://www.epo.org/'], { onlyRegions: ['DE'] });
