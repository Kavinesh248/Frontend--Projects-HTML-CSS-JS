Background: #121212 (Dark Grey/Black)
Card Background: #1E1E1E (Slightly lighter grey)
Primary Text: #E0E0E0 (Light Grey)
Secondary Text: #B3B3B3 (Muted Grey)
Accent Color: #007BFF (Blue) or any other color that contrasts well
Button Hover: #505050 (Darker shade of grey)

:root {
--header-height: 3.5rem;

/_========== Colors ==========_/
/_Color mode HSL(hue, saturation, lightness)_/
--first-color: hsl(228, 85%, 63%);
--title-color: hsl(228, 18%, 16%);
--text-color: hsl(228, 8%, 56%);
--body-color: hsl(228, 100%, 99%);
--shadow-color: hsla(228, 80%, 4%, .1);

/_========== Font and typography ==========_/
/_.5rem = 8px | 1rem = 16px ..._/
--body-font: "Nunito Sans", system-ui;
--normal-font-size: .938rem;
--smaller-font-size: .75rem;
--tiny-font-size: .75rem;

/_========== Font weight ==========_/
--font-regular: 400;
--font-semi-bold: 600;

/_========== z index ==========_/
--z-tooltip: 10;
--z-fixed: 100;
}
