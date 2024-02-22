import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";

export default function PriceFilter({
  min,
  max,
  minProgress,
  maxProgress,
  handleSliderChange,
  minChange,
  maxChange,
  setMinMax,
}) {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      if (slider.noUiSlider) {
        slider.noUiSlider.updateOptions({
          range: {
            min: min,
            max: max,
          },
          start: [minProgress, maxProgress],
        });
      } else {
        noUiSlider.create(slider, {
          start: [minProgress, maxProgress],
          connect: true,
          range: {
            min: min,
            max: max,
          },
          set: handleSliderChange,
        });
        slider.noUiSlider.on("slide", (values, handle) => {
          handleSliderChange(values, handle);
        });
      }
    }
  }, [minProgress, maxProgress]);

  return (
    <div className={`price ${active ? "price__active" : ""}`}>
      <h6
        className={`name ${active ? "name__active" : ""}`}
        onClick={handleClick}
      >
        Ціна
      </h6>
      <div className="price__selector">
        <div className="price__input">
          <input
            type="number"
            min={min}
            max={max}
            value={minProgress}
            onChange={minChange}
          />
          <span>-</span>
          <input
            type="number"
            min={min}
            max={max}
            value={maxProgress}
            onChange={maxChange}
          />
          <button onClick={setMinMax}>Ок</button>
        </div>
        <div ref={sliderRef} className="price__slider" />
      </div>
    </div>
  );
}
