import SectionShell from '../ui/SectionShell'
import ShowcaseGallery from '../ui/ShowcaseGallery'
import { reviewShowcaseItems } from '../../data/showcaseData'

export default function ReviewsSection({
  id = 'review-pelanggan',
  tone = 'muted',
  paddingClassName = 'pb-20 pt-28 sm:pt-32',
}) {
  return (
    <SectionShell
      id={id}
      tone={tone}
      paddingClassName={paddingClassName}
      eyebrow="Pelanggan"
      title="Testimoni Pelanggan"
      intro="Tangkapan review pelanggan ditampilkan dalam format visual agar testimoni terasa lebih nyata, mudah dipindai, dan tetap selaras dengan tampilan showcase halaman company profile."
    >
      <ShowcaseGallery
        items={reviewShowcaseItems}
        showcaseEyebrow="Customer Review Showcase"
        showcaseIntro="Dokumentasi review pelanggan ditampilkan ulang sebagai bukti kepuasan, trust, dan hubungan kerja yang terus terjaga."
        counterLabel="Review"
        metaLabel="Review No."
        imageClassName="max-h-[320px] sm:max-h-[420px] lg:max-h-[320px] xl:max-h-[360px]"
      />
    </SectionShell>
  )
}
