import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.ubisoft.com/en-us/company/social-impact/family-gaming/articles/ubisoft-s-young-player-account',
    'https://www.ubisoft.com/en-gb/help',
];

generateCMPTests('ubisoft.com', urls);

generateCMPTests('ubisoft.com', urls, {
    mobile: true,
});
