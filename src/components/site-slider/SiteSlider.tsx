import type { useDrag } from '@use-gesture/react';

import siteSliderStyles from './SiteSlider.module.css';

export default function SiteSlider({
  bind,
  sliderPosition,
}: {
  bind: ReturnType<typeof useDrag>;
  sliderPosition: number;
}) {
  return (
    <div
      className={siteSliderStyles['slider-container']}
      style={{
        left: `${sliderPosition}%`,
      }}
    >
      <div className={siteSliderStyles['slider-line']} />
      <button className={siteSliderStyles['slider-button']} {...bind()}>
        &lt;&gt;
      </button>
    </div>
  );
}
