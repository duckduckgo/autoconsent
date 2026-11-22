import generateCMPTests from '../playwright/runner';

generateCMPTests('hg-privacy', ['https://lonase.bet/']);

// geo-restricted to their home countries
generateCMPTests('hg-privacy', ['https://bissaugames.net/'], { onlyRegions: ['GW'] });
generateCMPTests('hg-privacy', ['https://gambibet.net/'], { onlyRegions: ['GM'] });
