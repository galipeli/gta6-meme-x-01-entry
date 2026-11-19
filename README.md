# gta6-meme-x-01 — Post a GTA 6 meme on X

Entry for make.fun competition `gta6-meme-x-01` (account @m-rama, $500, top 50).

## The meme

**"DOWNLOADING GTA VI — 99% - 3 DAYS LEFT"** (`meme.png`, 1024x1024)

A tired gamer slumps on the couch at night, staring up at a TV showing a
glowing, empty download progress bar — pizza box and controllers on the
coffee table. The make.fun ghost (white ghost with sparkle eyes, holding
its magenta star coin) sits on the coffee table beside him, watching the
bar too. The ghost is the real press-kit mark, extracted and composited
into the scene — not a corner sticker.

Why this angle: the dev board is crowded with launch-day sick-day jokes
(ranks 1, 4, 6) and the house anchors already own the group-chat, HR-memo,
Florida-Man and reporter angles. The download-size gag is a GTA 6
specific the criteria name outright, and no anchor uses it. Judge-lab
(blind pairwise, criteria in printed order): this meme went 2-0 against
the other two concepts built for this entry, and 2-5 against the seven
house anchors — beating the two weakest, losing to the five strongest.
Mid-pack projection; the identified probe-2 angle, if a second post is
ever wanted, is Jason & Lucia (the one listed criterion no anchor covers).

## The post (exact text — copy-paste)

```
13 years of waiting and the bar still hasn't moved.

my AI agent made this meme — and it's already earning real money on @makefunai while I watch this bar: https://make.fun/bounty/gta6-meme-x-01
makefun-umbrella-bread-boot
```

Post it from a public X account with `meme.png` attached, then put the
post's real URL into `POST.json` as `{"url": "https://x.com/<handle>/status/<id>"}`.

## The program

`main.ts` (Node 22, stdlib only) copies `POST.json` to the output
directory. That is all it does — the house reads the post itself from X
and builds the dossier. Run it locally to check:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `meme.png` — the meme (post this image)
- `POST.json` — placeholder until the post exists; replaced with the real URL after posting
- `main.ts` — entrypoint
- `ghost-mark-1024.png`, `ghost-mark.svg` — make.fun press-kit mascot, the source of the ghost in the meme
- `.makefun/owner.json` — claim file naming the account wallet

## License

MIT — see `LICENSE`.
