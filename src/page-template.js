const generateTeam = team =>{
    //manager
    const generateManager = manager => {
      return `
      <section class="flex-row weather-card"><section class="weather-card" id="day0">
            <header>${manager.getName()}</header>
            <img src="http://openweathermap.org/img/wn/10d@4x.png" alt="light rain">
            <p>ID: 17.2 F</p>
            <p>Email: 7.68 MPH</p>
            <p>OfficeNumber:</p></section><p> UV Index:<span class="uvi-moderate"> 2.03</span></p>
                </section>
      `
    };



}