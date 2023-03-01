const fetchVidgetVersion =  async function() {
    await fetch('https://main--dc--adobecom.hlx.page/drafts/sonja/book.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data[0].version);
        let VERSION = data.data[0].version;
        return VERSION;
      });
  }

  const validateVersion =  function(version) {
  console.log('checking does version specified in excel  exist', version);
  }
  const getLatestVersion  = function() {
  console.log('fetch and check - same as in rundeck job');
  }
export {fetchVidgetVersion, getLatestVersion};
