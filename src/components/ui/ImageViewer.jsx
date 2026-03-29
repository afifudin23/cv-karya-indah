import { useEffect, useRef, useState } from "react";

export default function ImageViewer({ image, onClose }) {
    const items = image?.items?.length ? image.items : image ? [image] : [];
    const [currentIndex, setCurrentIndex] = useState(() =>
        Math.min(image?.index ?? 0, Math.max(items.length - 1, 0)),
    );
    const currentItem = items[currentIndex] ?? null;
    const hasNavigation = items.length > 1;

    if (!image) {
        return null;
    }

    if (!currentItem) {
        return null;
    }

    const showPrevious = () => setCurrentIndex((current) => (current - 1 + items.length) % items.length);
    const showNext = () => setCurrentIndex((current) => (current + 1) % items.length);

    return (
        <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(8,14,18,0.2)] px-0 py-0 backdrop-blur-2xl sm:px-6 sm:py-4"
            onClick={onClose}
        >
            <div className="relative flex h-full w-full items-center justify-center">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,52,67,0.72)] text-[1.6rem] leading-none text-white shadow-[0_12px_34px_rgba(10,27,36,0.22)] backdrop-blur-md transition hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(24,68,85,0.86)] sm:right-5 sm:top-5"
                    aria-label="Tutup viewer"
                >
                    <span className="translate-y-[-1px]">x</span>
                </button>

                <ImageViewerStage
                    key={currentItem.src}
                    currentItem={currentItem}
                    hasNavigation={hasNavigation}
                    itemsLength={items.length}
                    onClose={onClose}
                    onNext={showNext}
                    onPrevious={showPrevious}
                />

                {hasNavigation ? (
                    <div
                        className="absolute bottom-4 left-1/2 z-20 w-[min(92vw,24rem)] -translate-x-1/2 sm:bottom-5 sm:w-[min(28rem,46vw)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="rounded-[1.25rem] border border-white/10 bg-[rgba(18,52,67,0.62)] px-4 py-3 text-white shadow-[0_12px_34px_rgba(10,27,36,0.18)] backdrop-blur-md">
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    type="button"
                                    onClick={showPrevious}
                                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,52,67,0.72)] text-lg leading-none text-white transition hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(24,68,85,0.86)]"
                                    aria-label="Gambar sebelumnya"
                                >
                                    &larr;
                                </button>

                                <div className="min-w-0 flex-1 text-center">
                                    <p className="truncate text-[10px] uppercase tracking-[0.24em] text-cyan-100/78">
                                        {currentItem.eyebrow || `Image ${String(currentIndex + 1).padStart(2, "0")}`}
                                    </p>
                                    <p className="mt-1 truncate text-sm font-semibold leading-5 text-white sm:text-[0.95rem]">
                                        {currentItem.title || currentItem.alt}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={showNext}
                                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,52,67,0.72)] text-lg leading-none text-white transition hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(24,68,85,0.86)]"
                                    aria-label="Gambar berikutnya"
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

function ImageViewerStage({ currentItem, hasNavigation, itemsLength, onClose, onNext, onPrevious }) {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [imageMeta, setImageMeta] = useState(null);
    const [viewportSize, setViewportSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1440,
        height: typeof window !== "undefined" ? window.innerHeight : 900,
    });
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key === "+" || event.key === "=") {
                setZoomLevel((current) => Math.min(current + 0.25, 3));
                return;
            }

            if (event.key === "-") {
                setZoomLevel((current) => Math.max(current - 0.25, 1));
                return;
            }

            if (event.key === "0") {
                setZoomLevel(1);
                return;
            }

            if (hasNavigation && event.key === "ArrowRight") {
                onNext();
                return;
            }

            if (hasNavigation && event.key === "ArrowLeft") {
                onPrevious();
            }
        };

        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        const preloadImage = new window.Image();
        preloadImage.onload = () => {
            setImageMeta({
                width: preloadImage.naturalWidth,
                height: preloadImage.naturalHeight,
                orientation: preloadImage.naturalWidth >= preloadImage.naturalHeight ? "landscape" : "portrait",
            });
        };
        preloadImage.src = currentItem.src;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, [currentItem.src, hasNavigation, itemsLength, onClose, onNext, onPrevious]);

    useEffect(() => {
        if (!scrollRef.current) {
            return;
        }

        const container = scrollRef.current;
        const isMobile = viewportSize.width < 640;

        const center = () => {
            const maxScrollLeft = Math.max(container.scrollWidth - container.clientWidth, 0);
            const maxScrollTop = Math.max(container.scrollHeight - container.clientHeight, 0);

            if (zoomLevel <= 1) {
                // Always start centered (important on mobile where the stage can be taller than the viewport).
                container.scrollTo({ left: maxScrollLeft / 2, top: maxScrollTop / 2 });
                return;
            }

            container.scrollTo({
                left: maxScrollLeft / 2,
                top: isMobile ? maxScrollTop / 2 : 0,
            });
        };

        // Run after layout so scrollWidth/scrollHeight are final.
        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(center);
            // Store raf2 on container so we can cancel on cleanup if needed.
            container.__imageViewerRaf2 = raf2;
        });

        return () => {
            cancelAnimationFrame(raf1);
            if (container.__imageViewerRaf2) {
                cancelAnimationFrame(container.__imageViewerRaf2);
            }
        };
    }, [currentItem.src, viewportSize.width, viewportSize.height, zoomLevel, imageMeta]);

    const orientation = imageMeta?.orientation ?? "landscape";
    const naturalWidth = imageMeta?.width ?? 1600;
    const naturalHeight = imageMeta?.height ?? 900;
    const widthLimit =
        orientation === "landscape"
            ? viewportSize.width < 640
              ? viewportSize.width * 0.98
              : Math.min(viewportSize.width * 0.52, 860)
            : viewportSize.width < 640
              ? viewportSize.width * 0.94
              : Math.min(viewportSize.width * 0.46, 760);
    const heightLimit = Math.min(viewportSize.height * 0.82, orientation === "landscape" ? 880 : 980);
    const fitScale = Math.min(widthLimit / naturalWidth, heightLimit / naturalHeight);
    const baseWidth = Math.max(naturalWidth * fitScale, 220);
    const baseHeight = Math.max(naturalHeight * fitScale, 220);
    const isMobile = viewportSize.width < 640;
    const isZoomed = zoomLevel > 1;
    const imageWidth = baseWidth * zoomLevel;
    const imageHeight = baseHeight * zoomLevel;
    const mobileStageWidth = Math.max(imageWidth + 40, viewportSize.width);
    const mobileStageHeight = Math.max(imageHeight + 168, viewportSize.height);

    const zoomIn = () => setZoomLevel((current) => Math.min(current + 0.18, 2.4));
    const zoomOut = () => setZoomLevel((current) => Math.max(current - 0.18, 1));
    const handleDoubleClick = () => {
        const targetZoom = orientation === "landscape" ? 1.18 : 1.55;
        setZoomLevel((current) => (current > 1 ? 1 : targetZoom));
    };

    return (
        <>
            <div
                className="absolute bottom-[6.75rem] right-3 z-20 flex items-center gap-2 sm:bottom-[7rem] sm:right-5 md:bottom-5"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={zoomOut}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,52,67,0.72)] text-xl leading-none text-white shadow-[0_12px_34px_rgba(10,27,36,0.22)] backdrop-blur-md transition hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(24,68,85,0.86)]"
                    aria-label="Perkecil gambar"
                >
                    -
                </button>
                <button
                    type="button"
                    onClick={zoomIn}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-[rgba(18,52,67,0.72)] text-xl leading-none text-white shadow-[0_12px_34px_rgba(10,27,36,0.22)] backdrop-blur-md transition hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(24,68,85,0.86)]"
                    aria-label="Perbesar gambar"
                >
                    +
                </button>
            </div>

            <div
                ref={scrollRef}
                className={`h-screen w-screen max-w-none overflow-auto rounded-none [scrollbar-width:none] [touch-action:pan-x_pan-y] [&::-webkit-scrollbar]:hidden sm:h-[84vh] sm:w-full sm:max-w-[88vw] sm:rounded-[1.5rem] lg:h-[85vh] lg:max-w-[70vw] ${
                    isZoomed ? "items-start justify-start" : "items-center justify-center"
                }`}
            >
                <div
                    className={`flex ${isMobile ? "items-center justify-center" : isZoomed ? "items-start justify-center" : "items-center justify-center"}`}
                    style={{
                        width: isMobile
                            ? `${mobileStageWidth}px`
                            : isZoomed
                              ? `max(${imageWidth}px, 100%)`
                              : `${imageWidth}px`,
                        height: isMobile ? `${mobileStageHeight}px` : `${imageHeight}px`,
                        minWidth: isMobile ? undefined : isZoomed ? undefined : "100%",
                        minHeight: isMobile ? undefined : isZoomed ? undefined : "100%",
                    }}
                >
                    <img
                        src={currentItem.src}
                        alt={currentItem.alt}
                        onDoubleClick={handleDoubleClick}
                        onClick={(event) => event.stopPropagation()}
                        className="block object-contain"
                        style={{
                            width: `${imageWidth}px`,
                            height: `${imageHeight}px`,
                            maxWidth: "none",
                            userSelect: "none",
                        }}
                        draggable={false}
                    />
                </div>
            </div>
        </>
    );
}
