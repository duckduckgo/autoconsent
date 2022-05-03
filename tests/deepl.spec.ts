import generateCMPTests from "./runner";

generateCMPTests('deepl.com', [
    'https://deepl.com'], {
        skipRegions: ["US"]
    }
);
