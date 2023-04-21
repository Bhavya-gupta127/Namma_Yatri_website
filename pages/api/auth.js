export default async function handler(req, res) {
    const res1 = await fetch(`http://127.0.0.1:8013/v2/auth`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobileCountryCode: "+91",
        mobileNumber: "7777777777",
        merchantId: "NAMMA_YATRI",
      }),
    }).then(res => res.json());

    return res.json(res1);
}