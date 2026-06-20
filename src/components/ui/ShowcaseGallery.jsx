import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi'
import ImageViewer from './ImageViewer'
import { Reveal, RevealStagger } from './Reveal'

export default function ShowcaseGallery({
  items,
  showcaseEyebrow,
  showcaseIntro,
  counterLabel,
  metaLabel = 'Project No.',
  imageClassName,
}) {
  const [activeImage, setActiveImage] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items?.length) return null

  const activeItem = items[activeIndex]
  const previewItems = items.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    eyebrow: item.category,
  }))

  const openPreview = (index) => setActiveImage({ items: previewItems, index })
  const showPrevious = () => setActiveIndex((cur) => (cur - 1 + items.length) % items.length)
  const showNext = () => setActiveIndex((cur) => (cur + 1) % items.length)

  return (
    <>
      <Reveal as="div" className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 px-6 py-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-600)]">
              {showcaseEyebrow}
            </p>
            <p className="mt-1.5 text-[0.88rem] leading-6 text-gray-500">{showcaseIntro}</p>
          </div>
          <span className="shrink-0 rounded-full border border-gray-200 px-3 py-1 text-[0.72rem] font-semibold text-gray-400">
            {counterLabel} {activeItem.id} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        {/* â”€â”€ Main Image â”€â”€ */}
        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="h-[260px] w-full object-cover transition-all duration-500 sm:h-[360px] lg:h-[420px]"
          />

          {/* overlay gradient bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Prev / Next */}
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg sm:h-12 sm:w-12"
            aria-label="Sebelumnya"
          >
            <FiArrowLeft className="text-[1rem] sm:text-[1.1rem]" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg sm:h-12 sm:w-12"
            aria-label="Berikutnya"
          >
            <FiArrowRight className="text-[1rem] sm:text-[1.1rem]" />
          </button>

          {/* Fullscreen button */}
          <button
            type="button"
            onClick={() => openPreview(activeIndex)}
            className="absolute bottom-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-white"
            aria-label="Perbesar gambar"
          >
            <FiMaximize2 className="text-[0.9rem]" />
          </button>
        </div>

        {/* â”€â”€ Info Panel â”€â”€ */}
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* Left: text */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-600)] mb-2">
              {activeItem.category}
            </p>
            <h3 className="font-bold text-[1.4rem] leading-snug text-gray-900 sm:text-[1.6rem]">
              {activeItem.title}
            </h3>
            <p className="mt-2 text-[0.95rem] font-medium leading-6 text-gray-700">
              {activeItem.subtitle}
            </p>
            <p className="mt-3 text-[0.9rem] leading-7 text-gray-500">
              {activeItem.note}
            </p>
          </div>

          {/* Right: meta */}
          <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gray-400">
                {metaLabel}
              </p>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-600)] text-[0.85rem] font-bold text-white shadow-sm">
                {activeItem.id}
              </span>
            </div>
            <RevealStagger as="div" className="flex flex-wrap gap-2" stagger={50}>
              {activeItem.meta.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-700)]"
                >
                  {tag}
                </span>
              ))}
            </RevealStagger>
          </div>
        </div>

        {/* â”€â”€ Thumbnail Dots + Strip â”€â”€ */}
        <div className="border-t border-gray-100 px-6 pb-6 pt-4 sm:px-8">
          {/* dot navigation */}
          <div className="mb-4 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'h-2 w-6 bg-[var(--color-primary-600)]'
                    : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Item ${i + 1}`}
              />
            ))}
          </div>

          {/* thumbnail strip */}
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 overflow-hidden rounded-xl border-2 transition duration-200 ${
                  i === activeIndex
                    ? 'border-[var(--color-primary-500)] shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-14 w-20 object-cover sm:h-16 sm:w-24"
                />
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {typeof document !== 'undefined' && activeImage
        ? createPortal(
            <ImageViewer
              key={activeImage?.index ?? `${counterLabel}-viewer`}
              image={activeImage}
              onClose={() => setActiveImage(null)}
            />,
            document.body,
          )
        : null}
    </>
  )
}

