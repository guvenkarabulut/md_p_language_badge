const getSimpleIconsBadge = require('./getSimpleIconsBadge')
function createBadge(badge_slug, logo_color, border_color) {
  const originalSVG = getSimpleIconsBadge(badge_slug);
  // Bu satırı gerçek veri ile değiştirin
  var modifiedSVG;
  const newViewBox = 'viewBox="-17 -17 24 24"';
  const oldViewBoxPattern = /viewBox="[^"]*"/;
  const oldViewBox = originalSVG.match(oldViewBoxPattern);
  if (oldViewBox) {
    modifiedSVG = originalSVG.replace(oldViewBoxPattern, newViewBox);
  } else {
    console.log("viewBox values is not exists");
  }
  const svgContent = `
      <svg width="96" height="97" viewBox="0 0 96 97" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.9353 3.39776C46.4432 1.91836 49.5568 1.91837 52.0647 3.39776L83.9019 22.1786C86.3406 23.6171 87.8372 26.2376 87.8372 29.069V66.931C87.8372 69.7624 86.3405 72.3829 83.9019 73.8214L52.0647 92.6022C49.5568 94.0816 46.4432 94.0816 43.9353 92.6022L12.0981 73.8214C9.65945 72.3829 8.16283 69.7624 8.16283 66.931V29.069C8.16283 26.2376 9.65945 23.6171 12.0981 22.1786L43.9353 3.39776Z"/>
      <path fill-rule="evenodd" d="M84.2763 22.9272L51.6205 4.07336C49.3801 2.77989 46.6199 2.77989 44.3795 4.07336L11.7237 22.9272C9.48337 24.2207 8.10326 26.6111 8.10326 29.198V66.9057C8.10326 69.4927 9.48337 71.8831 11.7237 73.1766L44.3795 92.0304C46.6199 93.3239 49.3801 93.3239 51.6205 92.0304L84.2763 73.1766C86.5166 71.8831 87.8967 69.4927 87.8967 66.9057V29.198C87.8967 26.6111 86.5166 24.2207 84.2763 22.9272ZM53.1721 1.38586C49.9716 -0.461953 46.0284 -0.461954 42.8279 1.38586L10.1721 20.2397C6.97159 22.0875 5 25.5024 5 29.198V66.9057C5 70.6014 6.97159 74.0162 10.1721 75.8641L42.8279 94.7179C46.0284 96.5657 49.9716 96.5657 53.1721 94.7179L85.8279 75.8641C89.0284 74.0162 91 70.6014 91 66.9057V29.198C91 25.5024 89.0284 22.0875 85.8279 20.2397L53.1721 1.38586Z" fill="#${border_color}"/>
        <g x="500" y="500" transform="scale(0.4)" fill="#${logo_color}">
          ${modifiedSVG}
        </g>
      </svg>
  `
  return svgContent;
}

module.exports = createBadge
