export default async function (req, res) {
  try {
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.MY_NOTION_TOKEN}`,
        'Notion-Version': '2021-05-13',
      },
      body: JSON.stringify({
        parent: { database_id: `${process.env.DATABASE_ID}` },
        properties: {
          Email: {
            title: [
              {
                text: {
                  content: `${req.body.email}`,
                },
              },
            ],
          },
        },
      }),
    })
  } catch (err) {
    console.log('Error', err)
  }

  res.status(200).json({ status: 'success' })
}
