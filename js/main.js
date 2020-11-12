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
      let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
      let given_name_text = document.querySelector('#name')
      given_name_text.innerHTML = givenName

      let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
      let nationality_text = document.querySelector('#nat')
      nationality_text.innerHTML = nationality

      let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name
      let sponsor_text = document.querySelector('#sponsor')
      sponsor_text.innerHTML = sponsor

      let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
      let points_text = document.querySelector('#pts')
      points_text.innerHTML = points
      }

    })
}
