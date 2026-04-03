export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { q = 'Nike 复刻' } = req.query;
  try {
    const response = await fetch(
      `https://taobao-datahub.p.rapidapi.com/item_search_x?q=${encodeURIComponent(q)}&pageSize=20`,
      { headers: { 'x-rapidapi-key': '07349e86bfmshf9ee4dfb09c3d65p18daf6jsn7116049f9b71', 'x-rapidapi-host': 'taobao-datahub.p.rapidapi.com' } }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}
