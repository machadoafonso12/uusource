export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { q = 'Nike 复刻', page = '1' } = req.query;

  try {
    const response = await fetch(
      `https://taobao-datahub.p.rapidapi.com/item_search_x?q=${encodeURIComponent(q)}&pageSize=20&page=${page}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '07349e86bfmshf9ee4dfb09c3d65p18daf6jsn7116049f9b71',
          'x-rapidapi-host': 'taobao-datahub.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: 'API error', status: response.status });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
