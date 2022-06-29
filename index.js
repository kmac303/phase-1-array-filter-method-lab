function findMatching(driversNames, string) {
    return driversNames.filter(
        matchingDrivers => (matchingDrivers.toLowerCase() === string.toLowerCase())
    );
  }

  function fuzzyMatch(driversNames, string) {
    return driversNames.filter(
        matchingDrivers => (matchingDrivers.toLowerCase().indexOf(string.toLowerCase())) === 0
    );
  }

  function matchName(driverObjects, string) {
    return driverObjects.filter((record) => record.name === string)
  }