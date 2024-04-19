window.onload = function () {
    if (document.cookie.indexOf("_instance=true") === -1) {
      document.cookie = "_instance=true";
      var date = new Date();
      window.onunload = function () {
        document.cookie =
          "_instance=true;expires=Thu, 01-Jan-1970 00:00:01 GMT";
      };
    } else {
      // Notify the user
      alert("Security Alert: You Are Opening Multiple Window.");
      var win = window.open("about:blank", "_self");
      // eslint-disable-next-line no-restricted-globals
      self.close();
    }
  };
