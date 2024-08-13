// https://api.spaceflightnewsapi.net/v4/articles/?limit=4

const newsRawData = `
{
  "count": 22052,
  "next": "https://api.spaceflightnewsapi.net/v4/articles/?limit=4&offset=4",
  "previous": null,
  "results": [
    {
      "id": 25313,
      "title": "SpaceX Denies Violating Environmental Regulations at Starbase",
      "url": "https://spacepolicyonline.com/news/spacex-denies-violating-environmental-regulations-at-starbase/",
      "image_url": "https://spacepolicyonline.com/wp-content/uploads/2023/11/Starship-prior-to-IFT2-2-222x300.jpg",
      "news_site": "SpacePolicyOnline.com",
      "summary": "SpaceX is denying a report by CNBC today that it is violating environmental regulations at its Starbase facility in Boca Chica, Texas. Citing notices from the Texas environmental quality commission […]",
      "published_at": "2024-08-12T23:22:13Z",
      "updated_at": "2024-08-12T23:27:14.045744Z",
      "featured": false,
      "launches": [],
      "events": []
    },
    {
      "id": 25312,
      "title": "SpaceX to launch privately-financed international crew of four around Earth’s poles",
      "url": "https://spaceflightnow.com/2024/08/12/spacex-to-launch-privately-financed-international-crew-of-four-around-earths-poles/",
      "image_url": "http://spaceflightnow.com/wp-content/uploads/2024/08/FRAM2-Crew.jpg",
      "news_site": "Spaceflight Now",
      "summary": "A blockchain entrepreneur, a cinematographer, a polar adventurer and a robotics researcher plan to fly around Earth's poles aboard a SpaceX Crew Dragon capsule by end of year, becoming the first humans to observe the ice caps and extreme polar environments from orbit, SpaceX announced Monday.",
      "published_at": "2024-08-12T23:11:09Z",
      "updated_at": "2024-08-12T23:16:48.446226Z",
      "featured": false,
      "launches": [],
      "events": []
    },
    {
      "id": 25311,
      "title": "Launch Roundup: Progress MS-28, Indian SSLV, and Falcon 9 flights scheduled",
      "url": "https://www.nasaspaceflight.com/2024/08/launch-roundup-081224/",
      "image_url": "https://www.nasaspaceflight.com/wp-content/uploads/2024/08/IMG_4381.jpeg",
      "news_site": "NASASpaceflight",
      "summary": "The second full week of August is another busy one, with four flights scheduled including the final certification flight of a new launch vehicle from India. The Falcon 9 and Soyuz rockets are also scheduled to fly this week with one mission to the International Space Station and a pair of non-Starlink flights from both coasts of the United States.",
      "published_at": "2024-08-12T23:02:54Z",
      "updated_at": "2024-08-12T23:06:57.284511Z",
      "featured": false,
      "launches": [],
      "events": []
    },
    {
      "id": 25310,
      "title": "SpaceX announces first human mission to ever fly over the planet’s poles",
      "url": "https://arstechnica.com/space/2024/08/spacex-announces-first-human-mission-to-ever-fly-over-the-planets-poles/",
      "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2024/08/fram2.jpg",
      "news_site": "Arstechnica",
      "summary": "The highest inclination flight by a human spacecraft to date is 65.1 degrees.",
      "published_at": "2024-08-12T22:45:05Z",
      "updated_at": "2024-08-12T22:57:02.203252Z",
      "featured": false,
      "launches": [],
      "events": []
    }
  ]
}
`;
