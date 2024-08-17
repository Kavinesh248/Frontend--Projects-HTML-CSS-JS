# Essential Stuff

## Html import links

Google font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

---

## Colors

### Background color

```css
--background: hsla(220, 17%, 7%, 1);
--banner-background: hsla(250, 6%, 20%, 1);
--white-alpha-20: hsla(0, 0%, 100%, 0.2);
--on-background: hsla(220, 100%, 95%, 1);
--on-surface: hsla(250, 100%, 95%, 1);
--on-surface-variant: hsla(250, 1%, 44%, 1);
--primary: hsla(349, 100%, 43%, 1);
--primary-variant: hsla(349, 69%, 51%, 1);
--rating-color: hsla(44, 100%, 49%, 1);
--surface: hsla(250, 13%, 11%, 1);
--text-color: hsla(250, 2%, 59%, 1);
--white: hsla(0, 0%, 100%, 1);
```

### Gradient color

```css
--banner-overlay: 90deg, hsl(220, 17%, 7%) 0%, hsla(220, 17%, 7%, 0.5) 100%;
--bottom-overlay: 180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1);
```

## Typography

```css
--ff-dm-sans: "DM Sans", sans-serif;

--fs-heading: 4rem;
--fs-title-lg: 2.6rem;
--fs-title: 2rem;
--fs-body: 1.8rem;
--fs-button: 1.5rem;
--fs-label: 1.4rem;

--weight-bold: 700;
```

## Shadow

```css
--shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.75);
--shadow-2: 0 2px 4px hsla(350, 100%, 43%, 0.3);
```

## Border Radius

```css
--radius-4: 4px;
--radius-8: 8px;
--radius-16: 16px;
--radius-24: 24px;
--radius-36: 36px;
```

## Transition

```css
--transition-short: 250ms ease;
--transition-long: 500ms ease;
```

/\*
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
  Default: 400
  Medium: 500
  Semi-bold: 600
  Bold: 700

- Line heights
  Default: 1
  Small: 1.05
  Medium: 1.2
  Paragraph default: 1.6
  Large: 1.8

- Letter spacing
  -0.5px
  0.75px

--- 02 COLORS

- Primary: #e67e22
- Tints:
  #fdf2e9
  #fae5d3
  #eb984e

- Shades:
  #cf711f
  #45260a

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f (lightest grey allowed on #fdf2e9)
#555
#333

--- 05 SHADOWS

0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER-RADIUS

Default: 9px
Medium: 11px

--- 07 WHITESPACE

- Spacing system (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
  \*/
