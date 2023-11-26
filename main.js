const process = () => {
    try {
        let secs = parseInt(document.querySelector('input').value);
        let minutes = parseInt(secs / 60); // calculate minutes
        let hours = parseInt(minutes / 60); // calculate hours
        let days = parseInt(hours / 24); // calculate days
        let years = parseInt(days / 365); // calculate years
        secs -= minutes*60; // substract the equivalent of minutes in secs
        minutes -= hours*60; // substract the equivalent of hours in minutes
        hours -= days*24; // substract the equivalent of days in hours
        days -= years*365; // substract the equivalent of years in days
        document.querySelector('p').innerHTML = `${years} Years, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${secs} Seconds`;
    } catch {
        document.querySelector('p').innerHTML = "An error occured try again!";
    }
}

document.querySelector('button').addEventListener('click', process);