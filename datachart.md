User Interaction                  Frontend              Backend (Server)         Weatherbit API
      |                                |                         |                       |
      | CityForm interaction           |                         |                       |
      | (e.g., input location)         |                         |                       |
      |----------------> getLocation() |                         |                       |
      |          |                     |                         |                       |
      |          | (Axios GET request) |                         |                       |
      |          | ------------------->|                         |                       |
      |          |                     |                         |                       |
      |          |                     | Express listens for     |                       |
      |          |                     | '/weather' endpoint     |                       |
      |          |                     |------------------------>|                       |
      |          |                     |                         |                       |
      |          |                     | (Axios GET request to   |                       |
      |          |                     | Weatherbit API)          |                      |
      |          |                     | ----------------------->|                       |
      |          |                     |                         |  Weatherbit API       |
      |          |                     |                         |  processes request   |
      |          |                     |                         |  and sends response  |
      |          |                     |                         |  -------------------->|
      |          |                     |                         |                       |
      |          |                     | Receives Weatherbit API |                       |
      |          |                     | response                |                       |
      |          |                     |<-------------------------|                      |
      |          |                     |                         |                       |
      |          | Backend processes   |                         |                       |
      |          | Weatherbit API data |                         |                       |
      |          | and responds        |                         |                       |
      |<---------|---------------------|                         |                       |
      |          |                     |                         |                       |
      | Updates Weather component      |                         |                       |
      | with fetched data              |                         |                       |
      | and displays to the user       |                         |                       |
      |<------------------------------|                         |                       |
