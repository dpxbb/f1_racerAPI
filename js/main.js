/* ======= API ==========
    Reading API documentation 
    1) find base url
    2) look for endpoints (after slashes)
    3) look for data I can query in the url 
*/

function getJson() {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Create HTML element and place givenName on page
      for (let i=0; i<7; i++) {
      // Get Name data
      let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
      let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
      let fullName = `${givenName} ${familyName}`;
      document.querySelector(`#name-${i}`).innerHTML = fullName;

        // get Nationality
        let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        document.querySelector(`#nat-${i}`).innerHTML = nationality

        //   let nationality_text = document.querySelector('#nat')
        //   nationality_text.innerHTML = nationality

        // get constructor/sponser data
        let constructor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        document.querySelector(`#sponser-${i}`).innerHTML = constructor

        // let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name
        // let sponsor_text = document.querySelector('#sponsor')
        // sponsor_text.innerHTML = sponsor

        // get points data
        let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        document.querySelector(`#pts-${i}`).innerHTML = points;

        // let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
        // let points_text = document.querySelector('#pts')
        // points_text.innerHTML = points
      }

    })
}
