/**
 * Works out the prefilter literals of a detect pattern from its regex source (see docs/heuristic-prefilter.md).
 * Build-time only: `build-heuristic-literals.ts` runs it over DETECT_PATTERNS to generate lib/heuristic-literals.ts,
 * and a unit test checks that table. It is not part of the library, so pages never parse pattern sources.
 *
 * The literals must be sound: every match of the pattern contains at least one of them, or the prefilter would skip a
 * pattern that matches. When that can't be shown from the source, a pattern gets no literals and is never skipped.
 */

/** The index of the `]` closing the character class that opens at `open`, skipping escapes. */
function classEnd(src: string, open: number): number {
    let i = open + 1;
    while (i < src.length && src[i] !== ']') {
        i += src[i] === '\\' ? 2 : 1;
    }
    return i;
}

/** The index of the `)` closing the group that opens at `open`, skipping escapes and classes. */
function groupEnd(src: string, open: number): number {
    let depth = 0;
    for (let i = open; i < src.length; i++) {
        const c = src[i];
        if (c === '\\') {
            i++;
        } else if (c === '[') {
            i = classEnd(src, i);
        } else if (c === '(') {
            depth++;
        } else if (c === ')' && --depth === 0) {
            return i;
        }
    }
    return src.length;
}

/** Splits a regex source at its top-level `|`. */
function alternatives(src: string): string[] {
    const parts = [];
    let from = 0;
    for (let i = 0; i < src.length; i++) {
        const c = src[i];
        if (c === '\\') {
            i++;
        } else if (c === '[') {
            i = classEnd(src, i);
        } else if (c === '(') {
            i = groupEnd(src, i);
        } else if (c === '|') {
            parts.push(src.slice(from, i));
            from = i + 1;
        }
    }
    parts.push(src.slice(from));
    return parts;
}

/** A group's alternatives as lowercased plain literals (word boundaries dropped), or null if any has other syntax. */
function plainAlternatives(inner: string): string[] | null {
    if (/^\?(?:!|<!)/.test(inner)) {
        return null;
    }
    const plain = alternatives(inner.replace(/^\?(?::|=|<=)/, '')).map((p) => p.replace(/\\b/g, '').replace(/\\([^A-Za-z0-9])/g, '$1'));
    return plain.every((p) => p && !/[\\.^$*+?()[\]{}|]/.test(p)) ? plain.map((p) => p.toLowerCase()) : null;
}

/** The index after the escape that starts at src[i] (a backslash), including multi-character escapes such as \\uXXXX. */
function escapeEnd(src: string, i: number): number {
    const n = src[i + 1];
    const through = (close: string) => {
        const at = src.indexOf(close, i + 2);
        return at === -1 ? src.length : at + 1;
    };
    if (n === 'u') {
        return src[i + 2] === '{' ? through('}') : i + 6;
    }
    if (n === 'x') {
        return i + 4;
    }
    if (n === 'c') {
        return i + 3;
    }
    if ((n === 'p' || n === 'P') && src[i + 2] === '{') {
        return through('}');
    }
    if (n === 'k' && src[i + 2] === '<') {
        return through('>');
    }
    return i + 2;
}

function literalsOf(src: string): string[] {
    const alts = alternatives(src);
    if (alts.length > 1) {
        const each = alts.map(literalsOf);
        return each.every((l) => l.length) ? each.flat() : [];
    }
    // candidate requirements: a run of literal characters, or a required group of plain alternatives
    const candidates: string[][] = [];
    let run = '';
    const end = () => {
        candidates.push([run.toLowerCase()]);
        run = '';
    };
    const quantifier = (i: number) => {
        const q = src[i];
        if (q !== '?' && q !== '*' && q !== '+' && q !== '{') {
            return { zero: false, quantified: false, next: i };
        }
        const zero = q === '?' || q === '*' || (q === '{' && /^\{0[,}]/.test(src.slice(i)));
        let j = q === '{' ? src.indexOf('}', i) + 1 : i + 1;
        if (src[j] === '?') {
            j++;
        }
        return { zero, quantified: true, next: j };
    };
    const literalChar = (ch: string, i: number) => {
        const q = quantifier(i);
        if (!q.zero) {
            run += ch;
        }
        if (q.quantified) {
            end();
        }
        return q.next;
    };
    for (let i = 0; i < src.length;) {
        const c = src[i];
        if (c === '\\') {
            const n = src[i + 1];
            if (/[^A-Za-z0-9]/.test(n)) {
                i = literalChar(n, i + 2);
            } else {
                // a class escape (\\s, \\b…) or a character, property or backreference escape ends the run
                end();
                i = quantifier(escapeEnd(src, i)).next;
            }
        } else if (c === '[') {
            end();
            i = quantifier(classEnd(src, i) + 1).next;
        } else if (c === '(') {
            end();
            const close = groupEnd(src, i);
            const q = quantifier(close + 1);
            const plain = q.zero ? null : plainAlternatives(src.slice(i + 1, close));
            if (plain && plain.every((p) => p.length >= 3)) {
                candidates.push(plain);
            }
            i = q.next;
        } else if (c === '.' || c === '^' || c === '$') {
            end();
            i = quantifier(i + 1).next;
        } else {
            i = literalChar(c, i + 1);
        }
    }
    end();
    // the most selective cheap check: the requirement whose shortest literal is longest
    const shortest = (l: string[]) => Math.min(...l.map((x) => x.length));
    const usable = candidates.filter((l) => l.every((x) => x.trim().length >= 3));
    const best = usable.reduce((a, b) => (shortest(b) > shortest(a) ? b : a), ['']);
    return best[0] && shortest(best) >= 4 ? [...new Set(best)] : [];
}

/**
 * Lowercased literals any match of a regex must contain (at least one of them), or none if they can't be worked out.
 */
export function requiredLiterals(re: RegExp): string[] {
    return literalsOf(re.source);
}
