# CV. Karya Indah Design System

## Konsep Visual
CV. Karya Indah menggunakan arah visual `dark futuristic corporate` yang memadukan kesan modern, teknikal, industrial, dan premium. Fondasi utamanya adalah `dark navy` dan `deep blue` untuk rasa kuat dan profesional, `electric blue glow` untuk sentuhan futuristik, `white` dan `soft gray` untuk menjaga keterbacaan, serta sedikit `orange accent` untuk CTA dan penekanan aksi bisnis.

Prinsip visual:
- kuat dan terpercaya untuk bidang periklanan dan konstruksi
- modern dan rapi untuk company profile B2B
- glow biru dipakai sebagai aksen, bukan dekorasi berlebihan
- permukaan terang untuk konten utama, panel gelap untuk section premium
- sudut rounded besar dan shadow halus untuk kesan polished

## Design Tokens

### CSS Variables
Semua token utama sudah disiapkan di [index.css](/home/andev/Documents/cv-karya-indah/src/index.css) pada `:root`.

Kategori token:
- `color`
- `typography`
- `spacing`
- `radius`
- `shadow`
- `transition`
- `layout`

Token penting:
```css
:root {
  --color-bg-canvas: #08141d;
  --color-bg-surface: #0e2230;
  --color-bg-panel: #112b3d;
  --color-bg-panel-soft: #eff6fb;
  --color-primary-500: #0ea8d4;
  --color-primary-700: #0a6784;
  --color-accent-orange: #f28c28;
  --color-text-strong: #091117;
  --color-text-primary: #1d2e39;
  --color-text-secondary: #516473;
  --color-text-on-dark: #f7fbff;
  --color-border-soft: rgba(18, 44, 61, 0.1);
  --color-border-on-dark: rgba(202, 238, 250, 0.16);
  --color-glow-primary: rgba(39, 200, 242, 0.28);
}
```

## Typography Scale

### Rekomendasi Font
- Heading: `Sora`
- Body: `Manrope`
- Optional mono / code: `SFMono-Regular, Consolas, Liberation Mono`

### Hierarchy
#### Desktop
| Style | Size | Weight | Line Height | Letter Spacing |
|---|---:|---:|---:|---:|
| Hero Title | `clamp(3rem, 7vw, 5.75rem)` | 800 | 0.96 | 0.04em |
| Section Title | `clamp(2.25rem, 5vw, 3.5rem)` | 700 | 0.96 | 0.02em |
| Content Title | `clamp(1.625rem, 3.6vw, 2.375rem)` | 700 | 1.08 | 0.02em |
| Subtitle | `clamp(1.125rem, 2vw, 1.5rem)` | 500 | 1.55 | 0.01em |
| Body Large | `1.125rem` | 500 | 1.7 | normal |
| Body | `1rem` | 500 | 1.7 | normal |
| Caption | `0.875rem` | 500 | 1.55 | normal |
| Button Text | `0.92rem` | 700 | 1 | 0.12em |
| Label / Eyebrow | `0.75rem` | 700 | 1.2 | 0.28em |

#### Mobile
| Style | Size |
|---|---:|
| Hero Title | `2.4rem - 3.2rem` |
| Section Title | `1.9rem - 2.4rem` |
| Content Title | `1.35rem - 1.7rem` |
| Subtitle | `1rem - 1.125rem` |
| Body | `0.95rem - 1rem` |
| Caption | `0.8rem - 0.875rem` |
| Button Text | `0.85rem - 0.92rem` |

### Usage
- Hero title: headline utama homepage
- Section title: about, services, portfolio, contact
- Content title: card title, feature title, project title
- Label: section eyebrow seperti `Profil Perusahaan`, `Mengapa Pilih Kami`

## Color Palette

### Primary
| Token | Hex | Fungsi |
|---|---|---|
| `--color-primary-300` | `#5fddff` | glow highlight |
| `--color-primary-400` | `#27c8f2` | accent terang |
| `--color-primary-500` | `#0ea8d4` | primary action |
| `--color-primary-700` | `#0a6784` | button depth / hover |
| `--color-primary-900` | `#0d3446` | dark accent |

### Background
| Token | Hex | Fungsi |
|---|---|---|
| `--color-bg-canvas` | `#08141d` | hero dark background |
| `--color-bg-surface` | `#0e2230` | navbar / dark panel |
| `--color-bg-panel` | `#112b3d` | premium dark card |
| `--color-bg-panel-soft` | `#eff6fb` | light section surface |
| `--color-bg-panel-muted` | `#dfeaf1` | alternate background |

### Text
| Token | Hex | Fungsi |
|---|---|---|
| `--color-text-strong` | `#091117` | heading utama |
| `--color-text-primary` | `#1d2e39` | body text |
| `--color-text-secondary` | `#516473` | secondary copy |
| `--color-text-muted` | `#6f8392` | caption / helper |
| `--color-text-on-dark` | `#f7fbff` | dark surface text |

### Accent
| Token | Hex | Fungsi |
|---|---|---|
| `--color-accent-orange` | `#f28c28` | CTA / callout |
| `--color-accent-orange-soft` | `#ffb266` | CTA hover / warm highlight |

### Border, Overlay, Glow
| Token | Value | Fungsi |
|---|---|---|
| `--color-border-soft` | `rgba(18, 44, 61, 0.1)` | border light UI |
| `--color-border-on-dark` | `rgba(202, 238, 250, 0.16)` | border dark UI |
| `--color-bg-overlay` | `rgba(5, 16, 24, 0.58)` | image overlay dark |
| `--color-bg-overlay-soft` | `rgba(11, 30, 43, 0.18)` | overlay ringan |
| `--color-glow-primary` | `rgba(39, 200, 242, 0.28)` | glow utama |
| `--color-glow-orange` | `rgba(242, 140, 40, 0.22)` | glow CTA |

## Button System

### Primary
- fungsi: action utama seperti `Hubungi Kami`, `Konsultasi Sekarang`
- background: linear gradient blue
- text: white
- radius: pill
- hover: lebih terang + glow meningkat
- active: kembali rata
- disabled: opacity 48%

### Secondary
- fungsi: action di dark panel
- background: dark blue gradient
- border: soft cyan border
- text: white
- hover: border lebih terang

### Outline
- fungsi: action ringan di light background
- background: translucent white
- border: soft blue-gray
- text: deep blue
- hover: background lebih solid

### CTA
- fungsi: form submit, WhatsApp CTA, request quote
- background: orange gradient
- text: off-white
- hover: orange lebih cerah

### Ukuran Button
| Size | Height | Padding | Radius |
|---|---:|---:|---:|
| Small | 40px | `0 16px` | 999px |
| Medium | 48px | `0 24px` | 999px |
| Large | 56px | `0 32px` | 999px |

## Spacing System

### 8px Grid
| Token | Value |
|---|---:|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-28` | 112px |
| `--space-32` | 128px |

### Rekomendasi Penggunaan
- Navbar: `16px - 24px`
- Button: `14px 24px`
- Form field gap: `16px`
- Card padding: `24px - 32px`
- Section padding Y: `72px - 112px`
- Hero content gap: `24px - 40px`

## Layout System

### Container
- max width: `1280px`
- horizontal padding: `16px mobile`, `24px tablet`, `32px desktop`

### Grid
- Desktop: 12 column
- Tablet: 8 column
- Mobile: 4 column
- Default gap: `16px - 24px`

### Section Structure
#### Hero
- full viewport visual
- dark image overlay
- logo / brand block center
- strong title + supporting tagline
- CTA optional

#### About
- intro text kiri
- company facts / badge kanan
- light surface background

#### Services
- 3-column premium card desktop
- 2-column tablet
- 1-column mobile

#### Portfolio
- masonry or showcase grid
- image dominant
- project title + category + short description

#### Contact
- split layout desktop: info + form
- stacked layout mobile

## Component Style

### Card
- rounded large: `24px - 32px`
- dark card untuk value proposition atau highlight
- light card untuk content-heavy section
- gunakan shadow lembut + border tipis

### Input Field
- tinggi minimal `52px`
- background putih lembut
- border soft blue-gray
- focus ring electric blue

### Badge / Label
- uppercase kecil
- tracking lebar
- pill shape
- cocok untuk status, tag layanan, facts

### Divider
- garis tipis dengan gradient dan glow halus
- dipakai antar section atau heading separator

### Navbar
- translucent dark navy
- blur background
- active item berbentuk pill
- padding horizontal longgar

### Footer
- dark surface
- headline putih
- secondary text soft blue-gray
- divider cyan glow tipis

### Icon Usage
- gunakan outline icons atau geometric icons
- ukuran umum: `20px`, `24px`, `32px`
- warna: `primary 400/500` pada dark surface, `primary 700` pada light surface

### Glow Effect Guideline
- gunakan hanya pada CTA, hero accent line, featured card, atau image highlight
- hindari glow terlalu banyak dalam satu viewport
- opacity glow ideal `0.12 - 0.28`

### Border Style Guideline
- light surface: `rgba(18, 44, 61, 0.1)`
- dark surface: `rgba(202, 238, 250, 0.16)`
- border harus terasa subtle dan premium, bukan keras

## CSS Sample

### Button
```css
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
}
```

### Card
```css
.card-premium {
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(238, 246, 251, 0.94));
  box-shadow: var(--shadow-card);
}
```

### Container
```css
.site-container {
  width: min(100% - 2rem, var(--container-max));
  margin-inline: auto;
}
```

### Section Title
```css
.section-eyebrow {
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--teal-deep);
}

.section-title {
  font-family: var(--font-heading);
  font-size: var(--text-section-title);
  line-height: var(--lh-tight);
  text-transform: uppercase;
  color: var(--color-text-strong);
}
```

## Notes Implementasi
- Design token utama sudah tersedia di [index.css](/home/andev/Documents/cv-karya-indah/src/index.css)
- Gunakan token ini sebagai sumber tunggal sebelum menambah warna atau ukuran baru
- Bila perlu dark panel baru, prioritaskan turunan dari `--color-bg-surface` atau `--color-bg-panel`
- Bila perlu CTA baru, prioritaskan `primary` untuk aksi umum dan `orange` untuk aksi penutup / conversion
