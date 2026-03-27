import SectionShell from "../ui/SectionShell";
import ShowcaseGallery from "../ui/ShowcaseGallery";
import { productionShowcaseItems } from "../../data/showcaseData";

export default function ProductionSection() {
    return (
        <SectionShell
            id="produksi"
            tone="muted"
            paddingClassName="pb-20 pt-28 sm:pt-32"
            eyebrow="Portofolio"
            title="Hasil Produksi"
            intro="Dokumentasi proyek produksi ditampilkan ulang memakai foto asli perusahaan supaya halaman produksi terasa lebih kuat, relevan, dan meyakinkan."
        >
            <ShowcaseGallery
                items={productionShowcaseItems}
                showcaseEyebrow="Production Showcase"
                showcaseIntro="Dokumentasi proyek visual branding dan signage yang dipilih untuk ditampilkan lebih fokus."
                counterLabel="Produksi"
                metaLabel="Project No."
                imageClassName="max-h-[320px] sm:max-h-[420px] lg:max-h-[320px] xl:max-h-[360px]"
            />
        </SectionShell>
    );
}
