import generateCMPTests from '../playwright/runner';

const urls = ['https://www.yachtclubgames.com/'];

generateCMPTests('yachtclubgames.com', urls);

generateCMPTests('yachtclubgames.com', urls, {
    mobile: true,
});
