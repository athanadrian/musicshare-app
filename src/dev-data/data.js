import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg",
  };
}

export const defaultSong = {
  id: uuid(),
  title: "City of angels (funky remix)",
  artist: "Maria Victoria",
  likes: 10,
  caption: `<span class="">Do you want to listen  to the City of angels (funky remix)
  ? 🤔⚛️👇<br>•<br>•<br>👉 By Maria Victoria, Listen it here for FREE and enjoy it. Whach it on the original channel now: bit.ly/Maria Victoria 🔥</span>`,
  user: defaultUser,
  thumbnail: "https://i1.sndcdn.com/artworks-000693990808-eb5lt4-t500x500.jpg",
  url:
    "https://soundcloud.com/maria-victoria-401466296/city-of-angels-funky-remix-24k",
  comments: [],
  duration: 124.003,
  created_at: "2020-02-28T03:08:14.522421+00:00",
};

export function getDefaultSong() {
  return {
    id: uuid(),
    title: "City of angels (funky remix)",
    artist: "Maria Victoria",
    likes: 10,
    caption: `<span class="">Do you want to listen  to the City of angels (funky remix)
    ? 🤔⚛️👇<br>•<br>•<br>👉 By Maria Victoria, Listen it here for FREE and enjoy it. Whach it on the original channel now: bit.ly/Maria Victoria 🔥</span>`,
    user: defaultUser,
    thumbnail:
      "https://i1.sndcdn.com/artworks-000693990808-eb5lt4-t500x500.jpg",
    url:
      "https://soundcloud.com/maria-victoria-401466296/city-of-angels-funky-remix-24k",
    comments: [],
    duration: 124.003,
    created_at: "2020-02-28T03:08:14.522421+00:00",
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultSong,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "https://findicons.com/files/icons/2071/political_character/256/kim_yongii256.png",
  website: "https://atana.site",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "6983698300",
  posts: Array.from({ length: 10 }, () => getDefaultSong()),
  followers: [defaultUser],
  following: [defaultUser],
};
