export default async function handler(req, res) {
  if (req.method === "POST") {
    const quoteId = req.body.id;

    if (quoteId === 'onDemand1') {
      res.json({
        OTP: "7891",
        bookingId: "booking1",
        merchantExoPhone: "1111111111",
        number: "KA AB 56 7895",
        estimatedFare: 822,
        name: "Driver 1"
      });
    } else {
      res.json({
        OTP: "7892",
        bookingId: "booking2",
        merchantExoPhone: "1111111122",
        number: "KA CD 75 5265",
        estimatedFare: 822,
        name: "Driver 2"
      });
    }
  }
}
