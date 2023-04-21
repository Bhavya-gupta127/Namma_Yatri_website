const k = async () => {
    const res = await fetch(`http://127.0.0.1:8013/v2/auth`, {
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

    return res;
}

k().then(console.log);