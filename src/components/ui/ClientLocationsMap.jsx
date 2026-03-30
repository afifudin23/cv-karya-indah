import { useEffect, useMemo, useRef, useState } from 'react'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'

const LEAFLET_CSS_ID = 'leaflet-css-cdn'
const LEAFLET_SCRIPT_ID = 'leaflet-js-cdn'
const LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
const LEAFLET_JS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'

const MAP_STYLE_ID = 'client-map-premium-style'
const INDONESIA_CENTER = [-2.8, 118]
const DEFAULT_ZOOM = 5
const MAX_AUTO_ZOOM = 6

let leafletPromise = null

function loadStylesheet(id, href) {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  const existing = document.getElementById(id)
  if (existing) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => resolve()
    link.onerror = () => reject(new Error(`Gagal memuat stylesheet ${href}`))
    document.head.appendChild(link)
  })
}

function loadScript(id, src) {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  const existing = document.getElementById(id)
  if (existing?.dataset.loaded === 'true') {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      if (existing) {
        existing.dataset.loaded = 'true'
      }
      resolve()
    }

    const handleError = () => reject(new Error(`Gagal memuat script ${src}`))

    if (existing) {
      existing.addEventListener('load', handleLoad, { once: true })
      existing.addEventListener('error', handleError, { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = handleError
    document.body.appendChild(script)
  })
}

async function loadLeafletBundle() {
  if (typeof window === 'undefined') {
    return null
  }

  if (window.L) {
    return window.L
  }

  if (!leafletPromise) {
    leafletPromise = (async () => {
      await loadStylesheet(LEAFLET_CSS_ID, LEAFLET_CSS_URL)
      await loadScript(LEAFLET_SCRIPT_ID, LEAFLET_JS_URL)
      return window.L
    })()
  }

  return leafletPromise
}

function ensureMapStyles() {
  if (typeof document === 'undefined' || document.getElementById(MAP_STYLE_ID)) {
    return
  }

  const style = document.createElement('style')
  style.id = MAP_STYLE_ID
  style.textContent = `
    .coverage-map__container .leaflet-control-zoom {
      border: 1px solid rgba(255, 255, 255, 0.18);
      overflow: hidden;
      border-radius: 18px;
      box-shadow: 0 20px 44px rgba(6, 18, 25, 0.24);
    }

    .coverage-map__container .leaflet-control-zoom a {
      background: rgba(11, 32, 41, 0.92);
      color: #f8fbfd;
      border-bottom-color: rgba(255, 255, 255, 0.12);
      transition: background 180ms ease, color 180ms ease;
    }

    .coverage-map__container .leaflet-control-zoom a:hover {
      background: rgba(21, 61, 75, 0.96);
      color: #74d7e7;
    }

    .coverage-map__container .leaflet-control-attribution {
      border-radius: 12px 0 0 0;
      background: rgba(11, 32, 41, 0.78);
      color: rgba(255, 255, 255, 0.74);
      backdrop-filter: blur(14px);
    }

    .coverage-map__container .leaflet-control-attribution a {
      color: #8ce6f0;
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
      box-shadow: 0 0 0 5px rgba(255, 92, 92, 0.16), 0 10px 24px rgba(3, 10, 14, 0.26);
    }

    .coverage-map__popup.leaflet-popup-content-wrapper,
    .coverage-map__popup .leaflet-popup-tip {
      background: rgba(10, 29, 38, 0.96);
      color: #eff9fb;
      box-shadow: 0 24px 50px rgba(3, 10, 14, 0.3);
      border: 1px solid rgba(130, 222, 236, 0.16);
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
      color: rgba(140, 230, 240, 0.82);
    }

    .coverage-map__popup-title {
      margin: 10px 0 0;
      font-size: 18px;
      line-height: 1.2;
      font-weight: 600;
    }

    .coverage-map__popup-copy {
      margin: 10px 0 0;
      font-size: 13px;
      line-height: 1.7;
      color: rgba(239, 249, 251, 0.86);
    }

    .coverage-map__popup-tag {
      display: inline-flex;
      margin-top: 12px;
      border-radius: 9999px;
      border: 1px solid rgba(130, 222, 236, 0.2);
      padding: 6px 10px;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(247, 254, 255, 0.88);
      background: rgba(255, 255, 255, 0.04);
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
  `

  document.head.appendChild(style)
}

function buildPopupMarkup(location) {
  return `
    <div class="coverage-map__popup-layout">
      <p class="coverage-map__popup-eyebrow">Titik Referensi</p>
      <p class="coverage-map__popup-title">${location.companyName}</p>
      <p class="coverage-map__popup-copy">${location.city}, ${location.province}</p>
      <span class="coverage-map__popup-tag">${location.projectType}</span>
    </div>
  `
}

function createMarkerIcon(Leaflet) {
  return Leaflet.divIcon({
    className: 'coverage-map-marker',
    html: `
      <div class="coverage-map-marker__wrap">
        <span class="coverage-map-marker__pulse"></span>
        <span class="coverage-map-marker__dot"></span>
      </div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  })
}

export default function ClientLocationsMap({ locations = [] }) {
  const mapContainerRef = useRef(null)
  const leafletMapRef = useRef(null)
  const markerLayerRef = useRef(null)
  const [status, setStatus] = useState('loading')
  const [selectedProvince, setSelectedProvince] = useState('')

  const provinces = useMemo(
    () => [...new Set(locations.map((location) => location.province))],
    [locations],
  )
  const effectiveSelectedProvince = useMemo(() => {
    if (!provinces.length) {
      return ''
    }

    return provinces.includes(selectedProvince) ? selectedProvince : provinces[0]
  }, [provinces, selectedProvince])

  const filteredLocations = useMemo(() => {
    if (!effectiveSelectedProvince) {
      return locations
    }

    return locations.filter((location) => location.province === effectiveSelectedProvince)
  }, [effectiveSelectedProvince, locations])

  useEffect(() => {
    let isActive = true

    const setupMap = async () => {
      try {
        setStatus('loading')

        const Leaflet = await loadLeafletBundle()

        if (!Leaflet || !mapContainerRef.current || !isActive) {
          return
        }

        ensureMapStyles()

        if (!leafletMapRef.current) {
          const map = Leaflet.map(mapContainerRef.current, {
            center: INDONESIA_CENTER,
            zoom: DEFAULT_ZOOM,
            minZoom: 4,
            maxZoom: 12,
            zoomControl: true,
            scrollWheelZoom: false,
            attributionControl: true,
          })

          Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
          }).addTo(map)

          leafletMapRef.current = map
        }

        const map = leafletMapRef.current

        if (markerLayerRef.current) {
          markerLayerRef.current.clearLayers()
          map.removeLayer(markerLayerRef.current)
          markerLayerRef.current = null
        }

        const markerIcon = createMarkerIcon(Leaflet)
        const markerLayer = Leaflet.layerGroup()

        locations.forEach((location) => {
          Leaflet.marker([location.lat, location.lng], {
            icon: markerIcon,
            keyboard: false,
            title: location.companyName,
          })
            .bindPopup(buildPopupMarkup(location), {
              className: 'coverage-map__popup',
              closeButton: false,
              offset: [0, -10],
            })
            .addTo(markerLayer)
        })

        markerLayer.addTo(map)
        markerLayerRef.current = markerLayer

        if (locations.length) {
          const bounds = Leaflet.latLngBounds(locations.map((location) => [location.lat, location.lng]))

          if (bounds.isValid()) {
            map.fitBounds(bounds, {
              padding: [28, 28],
            })

            if (map.getZoom() > MAX_AUTO_ZOOM) {
              map.setZoom(MAX_AUTO_ZOOM)
            }
          } else {
            map.setView(INDONESIA_CENTER, DEFAULT_ZOOM)
          }
        } else {
          map.setView(INDONESIA_CENTER, DEFAULT_ZOOM)
        }

        setTimeout(() => {
          map.invalidateSize()
        }, 80)

        if (isActive) {
          setStatus(locations.length ? 'ready' : 'empty')
        }
      } catch (error) {
        console.log(error)
        if (isActive) {
          setStatus('error')
        }
      }
    }

    setupMap()

    return () => {
      isActive = false
    }
  }, [locations])

  useEffect(() => {
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove()
        leafletMapRef.current = null
      }
      markerLayerRef.current = null
    }
  }, [])

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 shadow-[0_22px_56px_rgba(6,18,25,0.22)] backdrop-blur-md">
        <div className="relative coverage-map__container">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[400] h-24 bg-[linear-gradient(180deg,rgba(6,18,25,0.18),rgba(6,18,25,0))]"
            aria-hidden="true"
          />
          <div ref={mapContainerRef} className="h-[360px] w-full sm:h-[440px] lg:h-[560px]" />
        </div>

        <div className="border-t border-white/10 px-5 py-4 text-sm text-slate-300">
          {status === 'loading' && 'Memuat sebaran perusahaan Indonesia di peta...'}
          {status === 'empty' && 'Data titik referensi belum tersedia.'}
          {status === 'error' && 'Peta belum berhasil dimuat. Coba refresh halaman.'}
          {status === 'ready' &&
            'Klik marker merah untuk melihat nama perusahaan, kota, provinsi, dan jenis layanan yang relevan.'}
        </div>
      </div>

      <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_44px_rgba(6,18,25,0.18)] backdrop-blur-md sm:p-6">
        <div className="flex flex-wrap gap-3">
          {provinces.map((province) => {
            const isActive = province === effectiveSelectedProvince

            return (
              <button
                key={province}
                type="button"
                onClick={() => setSelectedProvince(province)}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'border-[rgba(146,221,235,0.42)] bg-[rgba(88,182,197,0.16)] text-white shadow-[0_14px_28px_rgba(6,18,25,0.18)]'
                    : 'border-white/10 bg-white/6 text-cyan-100/86 hover:border-[rgba(146,221,235,0.26)] hover:bg-white/[0.08]'
                }`}
              >
                {province}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        {filteredLocations.map((location, index) => (
          <article
            key={location.id}
            className="group relative overflow-hidden rounded-[1.45rem] border border-[rgba(118,212,227,0.2)] bg-[linear-gradient(180deg,rgba(8,23,31,0.96),rgba(14,39,50,0.94))] p-5 shadow-[0_18px_42px_rgba(5,18,25,0.22),0_0_24px_rgba(88,182,197,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(146,221,235,0.34)] hover:shadow-[0_24px_52px_rgba(5,18,25,0.26),0_0_28px_rgba(88,182,197,0.1)] sm:rounded-[1.65rem] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(88,182,197,0),rgba(88,182,197,0.85),rgba(88,182,197,0))]" />

            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/18 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <FiBriefcase className="text-[1.05rem]" />
              </div>
              <span className="inline-flex min-w-[2.6rem] items-center justify-center rounded-full border border-white/24 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/88">
              {location.province}
            </p>
            <h3 className="mt-3 font-display text-[1.25rem] uppercase leading-[1] text-white sm:text-[1.45rem]">
              {location.companyName}
            </h3>

            <div className="mt-4 h-px w-full bg-[linear-gradient(90deg,rgba(88,182,197,0.5),rgba(88,182,197,0.08),rgba(88,182,197,0))]" />

            <div className="mt-4 flex items-start gap-3">
              <FiMapPin className="mt-1 shrink-0 text-[0.95rem] text-white" />
              <p className="text-[0.92rem] leading-7 text-white/92">
                {location.city}, {location.province}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
