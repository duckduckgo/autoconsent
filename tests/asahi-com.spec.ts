import generateCMPTests from '../playwright/runner';

generateCMPTests('asahi-com', ['https://www.asahi.com/'], { mobile: false });
