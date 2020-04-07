# musiCShare-app-react-graphql-firebase

# Check it out https://musicshare.netlify.com/ or https://musicshare.now.sh

## Routes (Pages)

- / (songs feed page)

Components: (feed & song)

- FeedPage [Display Songs Posts]
- FeedPageSkeleton [Dummy Skeleton Page]
- FeedSideSuggestions [List of followers]
- FeedPostList
- AddSong
- QueuedSongList
- SongItem
- SongPlayer

- /explore (explore page)

Components:

- ExploreSuggestions
- ExploreGrid

- /p/:postId (post page)

Components

- Post
- PostSkeleton
- PostModal
- MorePostsFromUser
- PostSongPlayer

* notification

Components

- NotificationList
- NotificationTooltip

- /:username (profile page)

Components

- ProfileTabs

- /accounts/edit (edit profile page)
- /accounts/login (login page)
- /accounts/emailsignup (signup page)
- - (not found page)
    Components

-

## Shared Components

- Navbar
- FollowSuggestions
- FollowButton
- UserCard
- LoadingScreen
- OptionsDialog
- ProfilePicture
- Layout
- SEO
