import SectionShell from '../ui/SectionShell'
import ShowcaseGallery from '../ui/ShowcaseGallery'
import { officeWorkshopShowcaseItems } from '../../data/showcaseData'

export default function OfficeWorkshopSection({
  id = 'office-workshop',
  tone = 'muted',
  paddingClassName = 'pb-20 pt-14 sm:pt-16 lg:pt-16',
}) {
  return (
    <SectionShell
      id={id}
      tone={tone}
      paddingClassName={paddingClassName}
      headingClassName="max-w-none"
      introClassName="max-w-none"
      eyebrow="Office & Workshop"
      title="Lingkungan Kerja"
      intro="Ruang kantor, area koordinasi, dan workshop ditampilkan sebagai bagian dari alur kerja CV Karya Indah agar klien dapat melihat kesiapan fasilitas, ritme produksi, dan dukungan operasional yang dimiliki perusahaan."
    >
      <ShowcaseGallery
        items={officeWorkshopShowcaseItems}
        showcaseEyebrow="Office & Workshop Showcase"
        showcaseIntro="Dokumentasi area kerja dan workshop ditampilkan dengan pendekatan visual yang sama agar suasananya tetap rapi, modern, dan mudah dipindai."
        counterLabel="Area"
        metaLabel="Area No."
        imageClassName="max-h-[310px] sm:max-h-[400px] lg:max-h-[310px] xl:max-h-[350px]"
      />
    </SectionShell>
  )
}
