# DESIGN_SYSTEM.md

## Purpose

This document defines the visual language of LearnFootball.

Every page, component, animation, and interaction should follow this system to ensure consistency across the platform.

---

# Brand Personality

LearnFootball should feel:

* Educational
* Modern
* Intelligent
* Approachable
* Interactive
* Premium

Users should feel like they are entering a football academy, not a statistics website.

---

# Color Palette

## Light Mode

### Background

```css
#FFF8F0
```

### Primary Text

```css
#053225
```

### Accent

```css
#2D6A4F
```

### Success

```css
#52B788
```

### Warning

```css
#FFB703
```

### Error

```css
#D62828
```

---

## Dark Mode

### Background

```css
#201A23
```

### Primary Text

```css
#F7F7FF
```

### Accent

```css
#52B788
```

### Success

```css
#95D5B2
```

### Warning

```css
#FFD166
```

### Error

```css
#FF6B6B
```

---

# Typography

## Primary Font

Geist

Fallback:

```css
sans-serif
```

---

## Secondary Font

Inter

Used for:

* Paragraphs
* Cards
* Forms
* Tables

---

## Code Font

JetBrains Mono

Used for:

* Technical examples
* Developer documentation

---

# Heading Scale

## H1

48px

Weight: 700

---

## H2

40px

Weight: 700

---

## H3

32px

Weight: 600

---

## H4

24px

Weight: 600

---

## H5

20px

Weight: 600

---

# Spacing System

Use an 8px spacing grid.

Examples:

```text
8px
16px
24px
32px
40px
48px
64px
```

Avoid arbitrary spacing values.

---

# Border Radius

Small

```css
8px
```

Medium

```css
12px
```

Large

```css
16px
```

Cards

```css
20px
```

---

# Shadows

## Card Shadow

```css
0 4px 12px rgba(0,0,0,0.08)
```

---

## Hover Shadow

```css
0 8px 24px rgba(0,0,0,0.12)
```

---

# Buttons

## Primary Button

Background:

```css
#053225
```

Text:

```css
#FFF8F0
```

Hover:

```css
scale(1.02)
```

---

## Secondary Button

Outline style.

Used for:

* Cancel
* Back
* Learn More

---

# Cards

Cards should include:

* Soft shadow
* Rounded corners
* Hover animation
* Consistent padding

Used for:

* Players
* Teams
* Coaches
* Lessons

---

# Animations

## Duration

Fast:

```css
150ms
```

Normal:

```css
250ms
```

Slow:

```css
400ms
```

---

## Allowed Animations

* Fade
* Slide
* Scale
* Layout transitions

---

## Avoid

* Excessive spinning
* Long loading animations
* Distracting effects

---

# Icons

Preferred:

* Lucide Icons

Fallback:

* Heroicons

---

# Custom Cursor

Football cursor.

Requirements:

* Lightweight
* Disable on touch devices
* Respect accessibility settings

---

# Player Cards

Display:

* Image
* Name
* Nationality
* Position

Hover:

* Slight elevation
* Quick stats preview

---

# Team Cards

Display:

* Badge
* Team Name
* Country

Hover:

* Elevation
* Quick achievements preview

---

# Accessibility

Must support:

* Keyboard navigation
* Reduced motion
* Screen readers
* High contrast mode

WCAG AA compliance required.

---

# Responsive Breakpoints

Mobile

```css
320px
```

---

Tablet

```css
768px
```

---

Desktop

```css
1024px
```

---

Large Desktop

```css
1440px
```

---

# Design Rule

Whenever there is a conflict between aesthetics and clarity:

Choose clarity.

```
```
