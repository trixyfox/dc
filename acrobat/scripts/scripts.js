import ContentSecurityPolicy from './contentSecurityPolicy/csp.js';

ContentSecurityPolicy();

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

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
