import { useEffect, useRef, useState } from "react";

const LEAFLET_CSS_ID = "leaflet-css-cdn";
const LEAFLET_SCRIPT_ID = "leaflet-js-cdn";
const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

const MAP_STYLE_ID = "client-map-premium-style";
const INDONESIA_CENTER = [-2.8, 118];
const DEFAULT_ZOOM = 5;
const MAX_AUTO_ZOOM = 6;

let leafletPromise = null;

function loadStylesheet(id, href) {
    if (typeof document === "undefined") {
        return Promise.resolve();
    }

    const existing = document.getElementById(id);
    if (existing) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Gagal memuat stylesheet ${href}`));
        document.head.appendChild(link);
    });
}

function loadScript(id, src) {
    if (typeof document === "undefined") {
        return Promise.resolve();
    }

    const existing = document.getElementById(id);
    if (existing?.dataset.loaded === "true") {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const handleLoad = () => {
            if (existing) {
                existing.dataset.loaded = "true";
            }
            resolve();
        };

        const handleError = () => reject(new Error(`Gagal memuat script ${src}`));

        if (existing) {
            existing.addEventListener("load", handleLoad, { once: true });
            existing.addEventListener("error", handleError, { once: true });
            return;
        }

        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = true;
        script.onload = () => {
            script.dataset.loaded = "true";
            resolve();
        };
        script.onerror = handleError;
        document.body.appendChild(script);
    });
}

async function loadLeafletBundle() {
    if (typeof window === "undefined") {
        return null;
    }

    if (window.L) {
        return window.L;
    }

    if (!leafletPromise) {
        leafletPromise = (async () => {
            await loadStylesheet(LEAFLET_CSS_ID, LEAFLET_CSS_URL);
            await loadScript(LEAFLET_SCRIPT_ID, LEAFLET_JS_URL);
            return window.L;
        })();
    }

    return leafletPromise;
}

function ensureMapStyles() {
    if (typeof document === "undefined") {
        return;
    }

    let style = document.getElementById(MAP_STYLE_ID);
    const shouldAppend = !style;

    if (!style) {
        style = document.createElement("style");
        style.id = MAP_STYLE_ID;
    }

    style.textContent = `
    .coverage-map__container .leaflet-control-zoom {
      border: 1px solid rgba(15, 23, 42, 0.14);
      overflow: hidden;
      border-radius: 18px;
      box-shadow: 0 20px 44px rgba(15, 23, 42, 0.12);
    }

    .coverage-map__container .leaflet-control-zoom a {
      background: rgba(247, 251, 255, 0.96);
      color: rgba(9, 17, 23, 0.92);
      border-bottom-color: rgba(15, 23, 42, 0.12);
      transition: background 180ms ease, color 180ms ease;
    }

    .coverage-map__container .leaflet-control-zoom a:hover {
      background: rgba(14, 165, 233, 0.1);
      color: rgba(13, 79, 139, 0.96);
    }

    .coverage-map__container .leaflet-control-attribution {
      border-radius: 12px 0 0 0;
      background: rgba(247, 251, 255, 0.84);
      color: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(14px);
    }

    .coverage-map__container .leaflet-control-attribution a {
      color: rgba(13, 79, 139, 0.96);
    }

    .coverage-map-marker {
      background: transparent;
      border: 0;
    }

    .coverage-map-marker__wrap {
      position: relative;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .coverage-map-marker__pulse {
      position: absolute;
      inset: 0;
      border-radius: 9999px;
      background: rgba(255, 92, 92, 0.24);
      animation: coverageMapPulse 1.9s ease-out infinite;
    }

    .coverage-map-marker__dot {
      position: relative;
      z-index: 1;
      width: 12px;
      height: 12px;
      border-radius: 9999px;
      background: linear-gradient(180deg, #ff6b6b 0%, #f04040 100%);
      border: 2px solid rgba(255, 255, 255, 0.96);
      box-shadow: 0 0 0 5px rgba(255, 92, 92, 0.16), 0 10px 24px rgba(15, 23, 42, 0.18);
    }

    .coverage-map__popup.leaflet-popup-content-wrapper,
    .coverage-map__popup .leaflet-popup-tip {
      background: rgba(255, 255, 255, 0.98);
      color: rgba(9, 17, 23, 0.96);
      box-shadow: 0 24px 50px rgba(15, 23, 42, 0.16);
      border: 1px solid rgba(15, 23, 42, 0.1);
    }

    .coverage-map__popup .leaflet-popup-content {
      margin: 0;
    }

    .coverage-map__popup-layout {
      min-width: 220px;
      padding: 16px 18px;
    }

    .coverage-map__popup-eyebrow {
      margin: 0;
      font-size: 10px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--color-primary-700) !important;
    }

    .coverage-map__popup-title {
      margin: 10px 0 0;
      font-size: 18px;
      line-height: 1.2;
      font-weight: 600;
      color: var(--color-text-strong) !important;
    }

    .coverage-map__popup-copy {
      margin: 10px 0 0;
      font-size: 13px;
      line-height: 1.7;
      color: var(--color-text-secondary) !important;
    }

    .coverage-map__popup-tag {
      display: inline-flex;
      margin-top: 12px;
      border-radius: 9999px;
      border: 1px solid rgba(14, 165, 233, 0.22);
      padding: 6px 10px;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-text-strong) !important;
      background: rgba(14, 165, 233, 0.14);
    }

    @keyframes coverageMapPulse {
      0% {
        transform: scale(0.94);
        opacity: 0.9;
      }
      100% {
        transform: scale(2.25);
        opacity: 0;
      }
    }
  `;

    if (shouldAppend) {
        document.head.appendChild(style);
    }
}

function buildPopupMarkup(location) {
    return `
    <div class="coverage-map__popup-layout">
      <p class="coverage-map__popup-eyebrow">Titik Referensi</p>
      <p class="coverage-map__popup-title">${location.companyName}</p>
      <p class="coverage-map__popup-copy">${location.city}, ${location.province}</p>
      <span class="coverage-map__popup-tag">${location.projectType}</span>
    </div>
  `;
}

function createMarkerIcon(Leaflet) {
    return Leaflet.divIcon({
        className: "coverage-map-marker",
        html: `
      <div class="coverage-map-marker__wrap">
        <span class="coverage-map-marker__pulse"></span>
        <span class="coverage-map-marker__dot"></span>
      </div>
    `,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -12],
    });
}

export default function ClientLocationsMap({ locations = [] }) {
    const mapContainerRef = useRef(null);
    const leafletMapRef = useRef(null);
    const markerLayerRef = useRef(null);
    const markerIndexRef = useRef(new Map());
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let isActive = true;

        const setupMap = async () => {
            try {
                setStatus("loading");

                const Leaflet = await loadLeafletBundle();

                if (!Leaflet || !mapContainerRef.current || !isActive) {
                    return;
                }

                ensureMapStyles();

                if (!leafletMapRef.current) {
                    const map = Leaflet.map(mapContainerRef.current, {
                        center: INDONESIA_CENTER,
                        zoom: DEFAULT_ZOOM,
                        minZoom: 4,
                        maxZoom: 12,
                        zoomControl: true,
                        scrollWheelZoom: false,
                        attributionControl: true,
                    });

                    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: "&copy; OpenStreetMap contributors",
                    }).addTo(map);

                    leafletMapRef.current = map;
                }

                const map = leafletMapRef.current;

                if (markerLayerRef.current) {
                    markerLayerRef.current.clearLayers();
                    map.removeLayer(markerLayerRef.current);
                    markerLayerRef.current = null;
                }
                markerIndexRef.current.clear();

                const markerIcon = createMarkerIcon(Leaflet);
                const markerLayer = Leaflet.layerGroup();

                locations.forEach((location) => {
                    const marker = Leaflet.marker([location.lat, location.lng], {
                        icon: markerIcon,
                        keyboard: false,
                        title: location.companyName,
                    })
                        .bindPopup(buildPopupMarkup(location), {
                            className: "coverage-map__popup",
                            closeButton: false,
                            offset: [0, -10],
                        })
                        .addTo(markerLayer);

                    markerIndexRef.current.set(location.id, marker);
                });

                markerLayer.addTo(map);
                markerLayerRef.current = markerLayer;

                if (locations.length) {
                    const bounds = Leaflet.latLngBounds(locations.map((location) => [location.lat, location.lng]));

                    if (bounds.isValid()) {
                        map.fitBounds(bounds, {
                            padding: [28, 28],
                        });

                        if (map.getZoom() > MAX_AUTO_ZOOM) {
                            map.setZoom(MAX_AUTO_ZOOM);
                        }
                    } else {
                        map.setView(INDONESIA_CENTER, DEFAULT_ZOOM);
                    }
                } else {
                    map.setView(INDONESIA_CENTER, DEFAULT_ZOOM);
                }

                setTimeout(() => {
                    map.invalidateSize();
                }, 80);

                if (isActive) {
                    setStatus(locations.length ? "ready" : "empty");
                }
            } catch (error) {
                console.log(error);
                if (isActive) {
                    setStatus("error");
                }
            }
        };

        setupMap();

        return () => {
            isActive = false;
        };
    }, [locations]);

    useEffect(() => {
        return () => {
            if (leafletMapRef.current) {
                leafletMapRef.current.remove();
                leafletMapRef.current = null;
            }
            markerLayerRef.current = null;
        };
    }, []);

    return (
        <div>
            <div className="overflow-hidden rounded-[1.9rem] border border-[var(--color-border-soft)] bg-white shadow-[0_22px_56px_rgba(15,23,42,0.08)]">
                <div className="relative coverage-map__container">
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-[400] h-24 bg-[linear-gradient(180deg,rgba(247,251,255,0.94),rgba(247,251,255,0))]"
                        aria-hidden="true"
                    />
                    <div ref={mapContainerRef} className="h-[360px] w-full sm:h-[440px] lg:h-[560px]" />
                </div>

                <div className="border-t border-[var(--color-border-soft)] px-5 py-4 text-sm text-slate-600">
                    {status === "loading" && "Memuat sebaran perusahaan Indonesia di peta..."}
                    {status === "empty" && "Data titik referensi belum tersedia."}
                    {status === "error" && "Peta belum berhasil dimuat. Coba refresh halaman."}
                    {status === "ready" &&
                        "Klik marker merah untuk melihat nama perusahaan, kota, provinsi, dan jenis layanan yang relevan."}
                </div>
            </div>
        </div>
    );
}
