(function() {
  const timeTableContainer = document.getElementById("timetables");

  const date = new Date();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const currentDay = weekdays[date.getDay()];

  const timetables = [
    {
      day: "Monday",
      openingHour: 08.0,
      closingHour: 20.0
    },
    {
      day: "Tuesday",
      openingHour: 08.0,
      closingHour: 15.0
    },
    {
      day: "Wednesday",
      openingHour: 08.0,
      closingHour: 20.0
    },
    {
      day: "Thursday",
      openingHour: 08.0,
      closingHour: 20.0
    },
    {
      day: "Friday",
      openingHour: 08.0,
      closingHour: 20.0
    },
    {
      day: "Saturday",
      openingHour: 08.0,
      closingHour: 20.0
    },
    {
      day: "Sunday",
      openingHour: 08.0,
      closingHour: 20.0
    }
  ];

  const currentTime = `${date.getHours()}.${date.getMinutes()}`;

  const timeTableOutput = timetables.map(row => {
    let status = "";

    if (
      row.day === currentDay &&
      currentTime < row.openingHour.toFixed(2) &&
      currentTime > row.closingHour.toFixed(2)
    ) {
      status = `<span style="color: red;">CLOSED</span>`;
    }

    if (
      row.day === currentDay &&
      currentTime > row.openingHour.toFixed(2) &&
      currentTime < row.closingHour.toFixed(2)
    ) {
      status = `<span style="color: green;">OPEN</span>`;
    }

    return `<tr>    
    <td style="${row.day === currentDay ? "font-weight: 600;" : ""}">${
      row.day
    } </td>

    <td style="${
      row.day === currentDay ? "font-weight: 600;" : ""
    }">${row.openingHour.toFixed(2)} - ${row.closingHour.toFixed(2)}</td>

    <td>${status}</td>
    </tr>
    `;
  });

  timeTableContainer.innerHTML = timeTableOutput.join(" ");
})();
