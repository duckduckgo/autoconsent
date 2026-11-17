import generateCMPTests from '../playwright/runner';

const urls = ['https://darkounity.com/blog/how-i-learned-unity-the-wrong-way'];

// the banner is only shown in GDPR regions
generateCMPTests('darkounity.com', urls, { onlyRegions: ['DE', 'GB', 'FR'] });
