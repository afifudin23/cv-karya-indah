import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import ImageViewer from './ImageViewer'
import { Reveal, RevealStagger } from './Reveal'

export default function ShowcaseGallery({
  items,
  showcaseEyebrow,
  showcaseIntro,
  counterLabel,
  metaLabel = 'Project No.',
  imageClassName = 'max-h-[380px] sm:max-h-[520px] lg:max-h-[400px] xl:max-h-[450px]',
}) {
  const [activeImage, setActiveImage] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items?.length) {
    return null
  }

  const activeItem = items[activeIndex]
  const previewItems = items.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    eyebrow: item.category,
  }))

  const openPreview = (index) => {
    setActiveImage({
      items: previewItems,
      index,
    })
  }

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length)
  }

  return (
    <>
      <Reveal
        as="div"
        className="mx-auto max-w-6xl rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.8rem] sm:border sm:border-[rgba(196,223,235,0.8)] sm:bg-[linear-gradient(180deg,rgba(247,252,254,0.98),rgba(238,246,250,0.94))] sm:p-6 sm:shadow-[0_34px_90px_rgba(72,155,214,0.12)] lg:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">
              {showcaseEyebrow}
            </p>
            <p className="descriptive-copy mt-2 text-[0.9rem] leading-7 text-slate-600 sm:text-[0.95rem] sm:leading-6 sm:text-slate-500">
              {showcaseIntro}
            </p>
          </div>

          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-deep)] sm:rounded-full sm:border sm:border-[rgba(190,219,231,0.95)] sm:bg-white/88 sm:px-4 sm:py-2 sm:shadow-[0_10px_26px_rgba(72,155,214,0.08)]">
            {counterLabel} {activeItem.id} / {String(items.length).padStart(2, '0')}
          </div>
        </div>

        <div className="relative mt-4 rounded-none border-0 bg-transparent p-0 shadow-none sm:mt-5 sm:rounded-[2.3rem] sm:border sm:border-[rgba(214,231,240,0.86)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,248,251,0.88))] sm:p-5 sm:shadow-[0_24px_64px_rgba(72,155,214,0.12)] lg:p-5">
          <div className="pointer-events-none absolute inset-x-12 top-0 hidden h-20 bg-[radial-gradient(circle,rgba(88,182,197,0.18)_0%,rgba(88,182,197,0)_72%)] blur-2xl sm:block" />
          <div className="pointer-events-none absolute inset-0 hidden rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0)_16%,rgba(88,182,197,0.03)_100%)] sm:block" />

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-2 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(196,223,235,0.95)] bg-white text-[var(--teal-deep)] shadow-[0_16px_34px_rgba(72,155,214,0.16)] transition hover:-translate-y-1/2 hover:border-[var(--teal)] hover:bg-[var(--hero)] hover:text-white sm:left-5 sm:h-12 sm:w-12 lg:left-6 lg:h-14 lg:w-14"
            aria-label="Sebelumnya"
          >
            <FiArrowLeft className="text-[1.05rem] sm:text-[1.15rem] lg:text-[1.3rem]" />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(196,223,235,0.95)] bg-white text-[var(--teal-deep)] shadow-[0_16px_34px_rgba(72,155,214,0.16)] transition hover:-translate-y-1/2 hover:border-[var(--teal)] hover:bg-[var(--hero)] hover:text-white sm:right-5 sm:h-12 sm:w-12 lg:right-6 lg:h-14 lg:w-14"
            aria-label="Berikutnya"
          >
            <FiArrowRight className="text-[1.05rem] sm:text-[1.15rem] lg:text-[1.3rem]" />
          </button>

          <button
            type="button"
            onClick={() => openPreview(activeIndex)}
            className="group relative flex w-full justify-center overflow-hidden rounded-[1.2rem] border-0 bg-transparent px-0 py-0 shadow-none transition sm:rounded-[1.9rem] sm:border sm:border-white/95 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,251,253,0.96))] sm:px-20 sm:py-6 sm:shadow-[0_18px_40px_rgba(72,155,214,0.1),inset_0_1px_0_rgba(255,255,255,0.88)] sm:hover:shadow-[0_24px_52px_rgba(72,155,214,0.14)] lg:px-20 lg:py-5"
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 hidden h-12 bg-[linear-gradient(180deg,rgba(88,182,197,0.1),rgba(88,182,197,0))] sm:block" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(232,243,248,0.58))] sm:block" />
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className={`relative h-auto w-full max-w-none rounded-[1rem] object-contain shadow-none transition duration-500 group-hover:scale-[1.01] sm:w-auto sm:max-w-full sm:rounded-[1.2rem] sm:shadow-[0_18px_40px_rgba(17,43,57,0.08)] sm:group-hover:scale-[1.015] ${imageClassName}`}
            />
          </button>
        </div>

        <div className="mt-5 px-1 pb-1 sm:mt-6 sm:px-2">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">
                {activeItem.category}
              </p>
              <h3 className="content-title-size mt-3 font-display uppercase leading-[0.94] text-[var(--ink-strong)]">
                {activeItem.title}
              </h3>
              <p className="descriptive-copy mt-2.5 text-[0.98rem] font-medium leading-7 text-slate-700 sm:text-[1.08rem] sm:leading-8 xl:text-[1.15rem]">
                {activeItem.subtitle}
              </p>

              <p className="descriptive-copy mt-3 max-w-4xl text-[0.94rem] leading-7 text-slate-600 sm:mt-4 sm:text-[1rem] sm:leading-7 xl:text-[1.05rem] xl:leading-8">
                {activeItem.note}
              </p>
            </div>

            <div className="rounded-none bg-transparent p-0 shadow-none sm:rounded-[1.7rem] sm:bg-[linear-gradient(180deg,rgba(241,249,252,0.58),rgba(255,255,255,0.8))] sm:p-5 sm:shadow-[0_14px_34px_rgba(72,155,214,0.06)] lg:p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  {metaLabel}
                </p>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hero)] text-[0.9rem] font-semibold text-white shadow-[0_16px_38px_rgba(17,43,57,0.18)] sm:h-14 sm:w-14 sm:text-sm">
                  {activeItem.id}
                </span>
              </div>

              <RevealStagger as="div" className="mt-4 flex flex-wrap gap-2.5" stagger={55}>
                {activeItem.meta.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-deep)] sm:rounded-full sm:border sm:border-[rgba(190,219,231,0.95)] sm:bg-[rgba(88,182,197,0.08)] sm:px-4 sm:py-2"
                  >
                    {item}
                  </span>
                ))}
              </RevealStagger>
            </div>
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
