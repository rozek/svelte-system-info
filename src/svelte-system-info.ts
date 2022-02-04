//----------------------------------------------------------------------------//
//                             Svelte System Info                             //
//----------------------------------------------------------------------------//

  const UserAgent = {
    Value:    window.navigator.userAgent,
    contains: function contains (ValueToSearchFor:string):boolean {
      return (this.Value.indexOf(ValueToSearchFor) >= 0)
    },
    lacks:    function lacks (ValueToSearchFor:string):boolean {
      return (this.Value.indexOf(ValueToSearchFor) < 0)
    },
    match:    function match (Pattern:RegExp):any {
      return this.Value.match(Pattern)
    },
    matches:  function matches (Pattern:RegExp):boolean {
      return (this.Value.match(Pattern) != null)
    },
  }

  /**** DeviceBrowserName ****/
  // based on: https://github.com/keithws/browser-report

    let DeviceBrowserName:string = '(n/a)'

    if (UserAgent.contains('Trident') || UserAgent.contains('MSIE')) {
      DeviceBrowserName = (UserAgent.contains('Mobile') ? 'IE Mobile' : 'Internet Explorer')
    }

    if (UserAgent.contains('Firefox') && UserAgent.lacks('Seamonkey')) {
      DeviceBrowserName = (UserAgent.contains('Android') ? 'Firefox for Android' : 'Firefox')
    }

    if (
      UserAgent.contains('Safari') && UserAgent.lacks('Chrome') &&
      UserAgent.lacks('Chromium')  && UserAgent.lacks('Android')
    ) {
      DeviceBrowserName = (
        UserAgent.contains('CriOS')
        ? 'Chrome for iOS'
        : (UserAgent.contains('FxiOS') ? 'Firefox for iOS' : 'Safari')
      )
    }

    if (UserAgent.contains('Chrome')) {
      if (UserAgent.matches(/\bChrome\/[.0-9]* Mobile\b/)) {
        DeviceBrowserName = (UserAgent.matches(/\bVersion\/\d+\.\d+\b/) || UserAgent.matches(/\bwv\b/)
          ? 'WebView on Android'
          : 'Chrome for Android'
        )
      } else {
        DeviceBrowserName = 'Chrome'
      }
    }

    if (
      UserAgent.contains('Android') && UserAgent.lacks('Chrome')  &&
      UserAgent.lacks('Chromium')   && UserAgent.lacks('Trident') &&
      UserAgent.lacks('Firefox')
    ) {
      DeviceBrowserName = 'Android Browser'
    }

    if (UserAgent.contains('Edge')) {
      DeviceBrowserName = 'Edge'
    }

    if (UserAgent.contains('UCBrowser')) {
      DeviceBrowserName = 'UC Browser for Android'
    }

    if (UserAgent.contains('SamsungBrowser')) {
      DeviceBrowserName = 'Samsung Internet'
    }

    if (UserAgent.contains('OPR') || UserAgent.contains('Opera')) {
      DeviceBrowserName = (
        UserAgent.contains('Opera Mini')
        ? 'Opera Mini'
        : (
          UserAgent.contains('Opera Mobi') ||
          UserAgent.contains('Opera Tablet') ||
          UserAgent.contains('Mobile')
          ? 'Opera Mobile'
          : 'Opera'
        )
      )
    }

    if (UserAgent.contains('BB10') || UserAgent.contains('PlayBook') || UserAgent.contains('BlackBerry')) {
      DeviceBrowserName = 'Blackberry'
    }

  /**** DeviceBrowserVersion ****/
  // based on: https://github.com/keithws/browser-report

    let VersionMatch
      switch (DeviceBrowserName) {
        case 'Chrome':
        case 'Chrome for Android':
        case 'WebView for Android':
          VersionMatch = UserAgent.match(/Chrome\/((\d+\.)+\d+)/)
          break
        case 'Firefox':
        case 'Firefox for Android':
          VersionMatch = UserAgent.match(/Firefox\/((\d+\.)+\d+)/)
          break
        case 'Firefox for iOS':
          VersionMatch = UserAgent.match(/FxiOS\/((\d+\.)+\d+)/)
          break
        case 'Edge':
        case 'Internet Explorer':
        case 'IE Mobile':
          VersionMatch =
            UserAgent.match(/Edge\/((\d+\.)+\d+)/) ||
            UserAgent.match(/rv:((\d+\.)+\d+)/)    ||
            UserAgent.match(/MSIE\ ((\d+\.)+\d+)/)
          break
        case 'Safari':
        case 'Android Browser':
          VersionMatch = UserAgent.match(/Version\/((\d+\.)+\d+)/)
        case 'UC Browser for Android':
          VersionMatch = UserAgent.match(/UCBrowser\/((\d+\.)+\d+)/)
        case 'Samsung Internet':
          VersionMatch = UserAgent.match(/SamsungBrowser\/((\d+\.)+\d+)/)
        case 'Opera Mini':
          VersionMatch = UserAgent.match(/Opera Mini\/((\d+\.)+\d+)/)
        case 'Opera':
          VersionMatch =
            UserAgent.match(/OPR\/((\d+\.)+\d+)/)     ||
            UserAgent.match(/Version\/((\d+\.)+\d+)/) ||
            UserAgent.match(/Opera\/((\d+\.)+\d+)/)
        case 'BlackBerry':
          VersionMatch = UserAgent.match(/Version\/((\d+\.)+\d+)/)
        default:
          VersionMatch = UserAgent.match(/\/((\d+\.)+\d+)$/)
      }
    let DeviceBrowserVersion = (VersionMatch && VersionMatch[1]) || '(n/a)'

  /**** DeviceOSName ****/
  // based on: https://github.com/keithws/browser-report

    let DeviceOSName:string = '(n/a)'

    if (UserAgent.contains('Windows')) {
      DeviceOSName = (UserAgent.contains('Windows Phone') ? 'Windows Phone' : 'Windows')
    }

    if (UserAgent.contains('OS X') && UserAgent.lacks('Android')) {
      DeviceOSName = 'macOS'
    }

    if (UserAgent.contains('Linux') && UserAgent.lacks('Android')) {
      DeviceOSName = 'Linux'
    }

    if (UserAgent.contains('like Mac OS X') && UserAgent.contains('iPhone')) {
      DeviceOSName = 'iOS'
    }

    if (UserAgent.contains('like Mac OS X') && UserAgent.contains('iPad')) {
      let VersionMatch = UserAgent.match(/OS ((\d+[._])+\d+) like Mac OS\ X/)
      DeviceOSName = (parseInt(VersionMatch[1] || '',10) >= 13 ? 'iPadOS' : 'iOS')
    }

    if (
      (UserAgent.contains('Android') || UserAgent.contains('Adr')) &&
      UserAgent.lacks('Windows Phone')
    ) {
      DeviceOSName = 'Android'
    }

    if (UserAgent.contains('CrOS')) {
      DeviceOSName = 'ChromeOS'
    }

    if (UserAgent.contains('BB10')) {
      DeviceOSName = 'BlackBerry'
    }

    if (UserAgent.contains('RIM Tablet OS')) {
      DeviceOSName = 'BlackBerry Tablet OS'
    }

    if (UserAgent.contains('BlackBerry')) {
      DeviceOSName = 'BlackBerryOS'
    }

  /**** DeviceOSVersion ****/
  // based on: https://github.com/keithws/browser-report

    let DeviceOSVersion:string = '(n/a)'
      switch (DeviceOSName) {
        case 'Windows':
        case 'Windows Phone':
          if (UserAgent.contains('Win16')) {
            DeviceOSVersion = '3.1.1'
          } else if (UserAgent.contains('Windows CE')) {
            DeviceOSVersion = 'CE'
          } else if (UserAgent.contains('Windows 95')) {
            DeviceOSVersion = '95'
          } else if (UserAgent.contains('Windows 98')) {
            DeviceOSVersion = (
              UserAgent.contains('Windows 98; Win 9x 4.90')
              ? 'Millennium Edition'
              : '98'
            )
          } else {
            VersionMatch = UserAgent.match(/Win(?:dows)?(?: Phone)?[\ _]?(?:(?:NT|9x) )?((?:(\d+\.)*\d+)|XP|ME|CE)\b/)
            if (VersionMatch && VersionMatch[1]) {
              switch (VersionMatch[1]) {
                case '10.0':
                case '6.4':  DeviceOSVersion = '10.0';        break
                case '6.3':  DeviceOSVersion = '8.1';         break
                case '6.2':  DeviceOSVersion = '8';           break
                case '6.1':  DeviceOSVersion = '7';           break
                case '6.0':  DeviceOSVersion = 'Vista';       break
                case '5.2':  DeviceOSVersion = 'Server 2003'; break
                case '5.1':  DeviceOSVersion = 'XP';          break
                case '5.01': DeviceOSVersion = '2000 SP1';    break
                case '5.0':  DeviceOSVersion = '2000';        break
                case '4.0':  DeviceOSVersion = '4.0';         break
              }
            }
          }
        case 'macOS':
          VersionMatch = UserAgent.match(/OS X ((\d+[._])+\d+)\b/)
          break
        case 'iOS':
        case 'iPadOS':
          VersionMatch = UserAgent.match(/OS ((\d+[._])+\d+) like Mac OS\ X/)
          break
        case 'Android':
          VersionMatch = UserAgent.match(/(?:Android|Adr) (\d+([._]\d+)*)/)
          break
        case 'ChromeOS':
          VersionMatch = UserAgent.match(/(?:CrOS) [^ ]+ ((\d+[._])+\d+)/)
          break
        case 'BlackBerry':
        case 'BlackBerryOS':
          VersionMatch = UserAgent.match(/Version\/((\d+\.)+\d+)/)
          break
        case 'BlackBerry Tablet OS':
          VersionMatch = UserAgent.match(/RIM Tablet OS ((\d+\.)+\d+)/)
          break
      }
    if (VersionMatch && VersionMatch[1]) {
      DeviceOSVersion = VersionMatch[1].replace(/_/g,'.')
    }

  export default {
    get BrowserName ()    { return DeviceBrowserName },
    get BrowserVersion () { return DeviceBrowserVersion },
    get OSName ()         { return DeviceOSName },
    get OSVersion ()      { return DeviceOSVersion },
  }

