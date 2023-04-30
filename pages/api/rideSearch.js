const getQuotes = (searchId) => {
  if (searchId) {
    return {
      quotes: [
        {
          onDemandCab: {
            createdAt: "2016-07-22T00:00:00Z",
            discount: 9223372036854776000,
            estimatedTotalFare: 9223372036854776000,
            agencyName: "Agency 1",
            tripTerms: ["food"],
            id: "onDemand1",
            agencyNumber: "7854123690",
            quoteDetails: {
              contents: {
                distanceToNearestDriver: "0.96",
              },
              fareProductType: "ONE_WAY",
            },
            vehicleVariant: "SEDAN",
            estimatedFare: 822,
            agencyCompletedRidesCount: 9223372036854776000,
          },
        },
        {
          onDemandCab: {
            createdAt: "2016-07-22T00:00:00Z",
            discount: 9223372036854776000,
            estimatedTotalFare: 9223372036854776000,
            agencyName: "Agency 2",
            tripTerms: ["mask"],
            id: "onDemand2",
            agencyNumber: "1452369870",
            quoteDetails: {
              contents: {
                distanceToNearestDriver: "1.2",
              },
              fareProductType: "ONE_WAY",
            },
            vehicleVariant: "SEDAN",
            estimatedFare: 872,
            agencyCompletedRidesCount: 9223372036854776000,
          },
        },
        {
          metro: {
            createdAt: "2016-07-22T00:00:00Z",
            rideSearchId: "string",
            rides: [
              {
                schedule: [
                  {
                    arrivalTime: "2016-07-22T00:00:00Z",
                    departureTime: "2016-07-22T00:00:00Z",
                  },
                ],
                price: 9223372036854776000,
                departureStation: {
                  stationCode: "string",
                  name: "string",
                  point: {
                    lat: 0,
                    lon: 0,
                  },
                },
                arrivalStation: {
                  stationCode: "string",
                  name: "string",
                  point: {
                    lat: 0,
                    lon: 0,
                  },
                },
              },
            ],
            description: "string",
          },
        },
        {
          publicTransport: {
            createdAt: "2016-07-22T00:00:00Z",
            fare: 9223372036854776000,
            arrivalTime: "2016-07-22T00:00:00Z",
            id: "string",
            departureStation: {
              stationCode: "string",
              lat: 0,
              name: "string",
              lon: 0,
            },
            departureTime: "2016-07-22T00:00:00Z",
            description: "string",
            arrivalStation: {
              stationCode: "string",
              lat: 0,
              name: "string",
              lon: 0,
            },
          },
        },
      ],
      estimates: [
        {
          createdAt: "2016-07-22T00:00:00Z",
          totalFareRange: {
            minFare: 9223372036854776000,
            maxFare: 9223372036854776000,
          },
          discount: 9223372036854776000,
          estimatedTotalFare: 9223372036854776000,
          agencyName: "string",
          driversLatLong: [
            {
              lat: 0,
              lon: 0,
            },
          ],
          tripTerms: ["string"],
          id: "string",
          nightShiftRate: {
            nightShiftEnd: "12:33:15",
            nightShiftStart: "12:33:15",
            nightShiftMultiplier: "string",
          },
          agencyNumber: "string",
          estimateFareBreakup: [
            {
              price: 9223372036854776000,
              title: "string",
            },
          ],
          waitingCharges: {
            waitingChargePerMin: 9223372036854776000,
            waitingTimeEstimatedThreshold: 9223372036854776000,
          },
          vehicleVariant: "SEDAN",
          estimatedFare: 9223372036854776000,
          agencyCompletedRidesCount: 9223372036854776000,
        },
      ],
      fromLocation: {
        lat: 14.44533,
        lon: 75.91903,
      },
      toLocation: {
        lat: 14.44155,
        lon: 75.92226000000001,
      },
    };
  } else {
    return {};
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const serverData = {
      searchExpiry: "2023-04-26T13:24:54.124146807Z",
      routeInfo: {
        points: data.points,
        boundingBox: [14.445332, 75.919028, 14.441555, 75.922259],
        snappedWaypoints: [],
        distance: 545,
        duration: 54,
      },
      searchId: "01d4d725-f7a2-4669-a27d-49937715de9a",
    }; // replace with the server api

    const searchId = serverData.searchId;

    const rides = getQuotes(searchId); // replace with the quotes api

    const resData = rides.quotes.filter((item) => item.onDemandCab);

    res.json({data: resData});
  }
}
