export default async function handler(req, res) {
  if (req.method === "POST") {
    const quoteId = "quote1";

    res.json({
      bookingId: "booking1",
      merchantExoPhone: "1111111111",
    });
  }
}
