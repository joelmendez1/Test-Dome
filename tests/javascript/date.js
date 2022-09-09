function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  //"12/31/2014" to "20141231"
  const dateSplit = userDate.split("/");

  return `${dateSplit[2]}${
    dateSplit[0].length > 1 ? dateSplit[0] : "0" + dateSplit[0]
  }${dateSplit[1].length > 1 ? dateSplit[1] : "0" + dateSplit[1]}`;
}

console.log(formatDate("1/3/2014"));
