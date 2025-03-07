import {AccountList, BookMark, Translate, Tweet, UserInfo} from "./Content";

//TODO fix type
export type TweetMode = string//'timeline' | 'tag' | 'search' | 'status'
export type TweetType = string//'all' | 'self' | 'retweet' | 'media'
export interface userListInterface {name: string; display_name: string; project: string; tag: string}


export interface State {
  now: Date
  userTimeZone: string
  darkMode: boolean
  devmode: boolean
  forceOnline: boolean

  projects: string[]
  links: {url: string; display: string}[]
  names: AccountList
  userList: userListInterface[]
  topTweetId: string//BigInt as String
  languageList: { code: string; name: string; local_name: string; status: string}[]
  tweets: Tweet[]
  translate: { [p: string]: Translate }//{tweet_id: Translate}
  userExists: boolean
  tweetMode: TweetMode
  tweetType: TweetType
  updatedCharts: boolean

  userInfo: UserInfo

  home: boolean
  project: string
  title: string

  height: number
  width: number
  siteHeight: number
  viewportHeight: number
  altitudeDifference: number
  scrollBarWidth: number

  settings: {
    language: string
    cookie_accept: boolean
    displayPicture: boolean
    autoLoadTweets: boolean
    autoRefresh: boolean
    onlineMode: boolean
    loadConversation: boolean
    basePath: string
    mediaPath: string
    translatorPlatform: 'google' | 'microsoft' | 'sogou' | 'yandex' | 'deepl'
  }

  adminMode: boolean

  image: {
    mode: 'photo' | 'banner' | 'avatar'
    offset: number
    imageList: {url: string; blurhash: string | null}[]
  }

  hasBeenSyncFromLocalStorage: boolean
  samePath: boolean
  realMediaPath: string
  twemojiBasePath: string
  onlinePath: string
  translatorMode: boolean
  spacesPlayer: {
    display: boolean
    link: string
    id: string
    displayName: string
    title: string
    start: string
    end: string
  }
  bookmarks: BookMark[]
}
