#!/usr/bin/env python3
"""Render deterministic The Dutch Realtor Instagram carousel slides.

Usage:
  python3 scripts/render_carousel.py output_dir slides.json

slides.json:
[
  {"eyebrow":"WOONWAARDE", "title":"PRIJS PER M2", "body":"Vergelijk niet alleen de totaalprijs", "footer":"THE DUTCH REALTOR"}
]
"""
from __future__ import annotations

import json
import sys
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W = H = 1080
NAVY = "#071B3A"
NAVY2 = "#0B2348"
GOLD = "#C0A062"
WHITE = "#F8F4EA"
MUTED = "#D7D0C4"

FONT_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Helvetica Neue.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/Library/Fonts/Arial.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]


def font(size: int, bold: bool = False):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size=size, index=1 if bold and path.endswith(".ttc") else 0)
            except Exception:
                continue
    return ImageFont.load_default()


def center_text(draw: ImageDraw.ImageDraw, text: str, y: int, fnt, fill: str, spacing: int = 8) -> int:
    lines = text.split("\n")
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=fnt)
        x = (W - (bbox[2] - bbox[0])) // 2
        draw.text((x, y), line, font=fnt, fill=fill)
        y += (bbox[3] - bbox[1]) + spacing
    return y


def wrap(text: str, width: int) -> str:
    return "\n".join(textwrap.wrap(text, width=width, break_long_words=False))


def render(slide: dict, out: Path, idx: int, total: int) -> None:
    img = Image.new("RGB", (W, H), NAVY)
    draw = ImageDraw.Draw(img)

    # subtle panels / lines
    draw.rectangle((0, 0, W, H), fill=NAVY)
    draw.ellipse((-320, -260, 520, 520), fill=NAVY2)
    draw.ellipse((720, 760, 1320, 1360), fill="#102B55")
    draw.line((110, 145, 970, 145), fill=GOLD, width=2)
    draw.line((110, 935, 970, 935), fill=GOLD, width=2)
    draw.rounded_rectangle((96, 96, 984, 984), radius=44, outline="#254166", width=2)

    eyebrow = str(slide.get("eyebrow", "THE DUTCH REALTOR")).upper()
    title = str(slide.get("title", ""))
    body = str(slide.get("body", ""))
    footer = str(slide.get("footer", "THE DUTCH REALTOR"))

    # Exact text comes from JSON. No AI text rendering.
    center_text(draw, eyebrow, 205, font(30, True), GOLD, spacing=6)
    center_text(draw, wrap(title, 16), 330, font(82, True), WHITE, spacing=18)
    center_text(draw, wrap(body, 34), 600, font(42), MUTED, spacing=14)

    pill = f"{idx}/{total}"
    draw.rounded_rectangle((470, 805, 610, 862), radius=28, outline=GOLD, width=2)
    center_text(draw, pill, 815, font(28, True), GOLD)
    center_text(draw, footer.upper(), 910, font(24, True), GOLD)

    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, quality=96)


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: render_carousel.py output_dir slides.json")
    out_dir = Path(sys.argv[1])
    slides = json.loads(Path(sys.argv[2]).read_text())
    total = len(slides)
    for i, slide in enumerate(slides, 1):
        render(slide, out_dir / f"slide-{i}.png", i, total)
    print(json.dumps({"ok": True, "count": total, "output_dir": str(out_dir)}))


if __name__ == "__main__":
    main()
