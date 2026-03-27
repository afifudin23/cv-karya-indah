import SectionShell from '../ui/SectionShell'
import ShowcaseGallery from '../ui/ShowcaseGallery'
import { inventoryShowcaseItems } from '../../data/showcaseData'

export default function InventorySection({
  id = 'inventaris',
  tone = 'muted',
  paddingClassName = 'pb-20 pt-20 sm:pt-24',
}) {
  return (
    <SectionShell
      id={id}
      tone={tone}
      paddingClassName={paddingClassName}
      eyebrow="Inventaris"
      title="Mesin & Kendaraan"
      intro="Inventaris mesin dan kendaraan ditampilkan ulang dalam format visual agar kesiapan produksi dan dukungan operasional CV Karya Indah terasa lebih nyata, rapi, dan profesional."
    >
      <ShowcaseGallery
        items={inventoryShowcaseItems}
        showcaseEyebrow="Inventory Showcase"
        showcaseIntro="Mesin produksi dan armada operasional ditampilkan dengan pendekatan visual yang sama agar inventaris perusahaan lebih mudah dipindai."
        counterLabel="Inventaris"
        metaLabel="Asset No."
        imageClassName="max-h-[300px] sm:max-h-[380px] lg:max-h-[300px] xl:max-h-[340px]"
      />
    </SectionShell>
  )
}
