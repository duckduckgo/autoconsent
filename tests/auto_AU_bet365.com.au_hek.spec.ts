import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_bet365.com.au_hek', ["https://www.bet365.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
