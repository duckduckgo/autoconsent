import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_urallawoolroom.com.au_0', ["https://www.urallawoolroom.com.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
