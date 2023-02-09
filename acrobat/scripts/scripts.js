import ContentSecurityPolicy from './contentSecurityPolicy/csp.js';

ContentSecurityPolicy();

// Add project-wide styles here.
const STYLES = '/acrobat/styles/styles.css';

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

(function loadStyles() {
  const paths = [STYLES];
  paths.forEach((path) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', path);
    document.head.appendChild(link);
  });
}());

(async function loadPage() {
  const dcConverterWidget = document.querySelector('.dc-converter-widget');
  if (dcConverterWidget) {
    const { default: converter } = await import('../blocks/dc-converter-widget/dc-converter-widget.js');
    converter(dcConverterWidget);
  }


  // IMS Ready
  const imsReady = setInterval(() => {
    if (window.adobeIMS && window.adobeIMS.initialized) {
      clearInterval(imsReady);
      const imsIsReady = new CustomEvent('IMS:Ready');
      window.dispatchEvent(imsIsReady);
    }
  }, 1000);

  // DC Hosted Ready...
  const dcHostedReady = setInterval(() => {
    if (window.dc_hosted) {
      clearInterval(dcHostedReady);
      const imsIsReady = new CustomEvent('DC_Hosted:Ready');
      window.dispatchEvent(imsIsReady);
    }
  }, 1000);
}());
