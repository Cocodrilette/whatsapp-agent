// Generated by https://quicktype.io

export interface Message {
  _data: Data;
  mediaKey: string;
  id: ID;
  ack: number;
  hasMedia: boolean;
  body: string;
  type: string;
  timestamp: number;
  from: string;
  to: string;
  author: string;
  deviceType: string;
  isForwarded: string;
  forwardingScore: number;
  isStatus: boolean;
  isStarred: boolean;
  broadcast: string;
  fromMe: boolean;
  hasQuotedMsg: boolean;
  hasReaction: boolean;
  duration: string;
  location: string;
  vCards: any[];
  inviteV4: string;
  mentionedIds: any[];
  orderId: string;
  token: string;
  isGif: boolean;
  isEphemeral: string;
  links: any[];
}

export interface Data {
  id: ID;
  viewed: boolean;
  body: string;
  type: string;
  t: number;
  notifyName: string;
  from: string;
  to: string;
  self: string;
  ack: number;
  invis: boolean;
  isNewMsg: boolean;
  star: boolean;
  kicNotified: boolean;
  recvFresh: boolean;
  isFromTemplate: boolean;
  thumbnail: string;
  richPreviewType: number;
  pollInvalidated: boolean;
  isSentCagPollCreation: boolean;
  latestEditMsgKey: null;
  latestEditSenderTimestampMs: null;
  mentionedJidList: any[];
  groupMentions: any[];
  isVcardOverMmsDocument: boolean;
  hasReaction: boolean;
  ephemeralDuration: number;
  ephemeralSettingTimestamp: number;
  disappearingModeInitiator: string;
  inviteGrpType: string;
  productHeaderImageRejected: boolean;
  lastPlaybackProgress: number;
  isDynamicReplyButtonsMsg: boolean;
  isMdHistoryMsg: boolean;
  stickerSentTs: number;
  isAvatar: boolean;
  lastUpdateFromServerTs: number;
  invokedBotWid: null;
  bizBotType: null;
  botResponseTargetId: null;
  botPluginType: null;
  botPluginReferenceIndex: null;
  botPluginSearchProvider: null;
  botPluginSearchUrl: null;
  requiresDirectConnection: null;
  links: any[];
}

export interface ID {
  fromMe: boolean;
  remote: string;
  id: string;
  _serialized: string;
}
