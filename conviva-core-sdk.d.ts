export type valueof<T> = T[keyof T];

declare enum ConvivaKeys {
    APPLICATION_VERSION = 'c3.app.version',
    ASSET_NAME = 'Conviva.assetName',
    CUSTOMER_KEY = 'customerKey',
    DEFAULT_RESOURCE = 'Conviva.defaultResource',
    DURATION = 'Conviva.duration',
    ENCODED_FRAMERATE = 'Conviva.encodedFrameRate',
    FRAMEWORK_NAME = 'Conviva.frameworkName',
    FRAMEWORK_VERSION = 'Conviva.frameworkVersion',
    IS_LIVE = 'Conviva.streamType',
    MANUFACTURER = 'DeviceManufacturer',
    PLAYER_NAME = 'Conviva.applicationName',
    POD_DURATION = 'podDuration',
    POD_INDEX = 'podIndex',
    POD_POSITION = 'podPosition',
    STREAM_URL = 'Conviva.streamUrl',
    VIEWER_ID = 'Conviva.viewerId',

    // DeviceMetadata
    BRAND = 'DeviceBrand',
    CATEGORY = 'DeviceCategory',
    MODEL = 'DeviceModel',
    OS_NAME = 'OperatingSystemName',
    OS_VERSION = 'OperatingSystemVersion',
    SCREEN_RESOLUTION_HEIGHT = 'ScreenHeight',
    SCREEN_RESOLUTION_SCALE_FACTOR = 'ScaleFactor',
    SCREEN_RESOLUTION_WIDTH = 'ScreenWidth',
    TYPE = 'DeviceType',
    VERSION = 'DeviceVersion',

    // CallbackFunctions
    CONSOLE_LOG = 'consoleLog',
    CREATE_TIMER = 'createTimer',
    GET_EPOCH_TIME_IN_MS = 'getEpochTimeInMs',
    LOAD_DATA = 'loadData',
    MAKE_REQUEST = 'makeRequest',
    SAVE_DATA = 'saveData',

    // Init options
    LOG_LEVEL = 'logLevel',
    GATEWAY_URL = 'gatewayUrl',

    // Playback
    BITRATE = 'BITRATE',
    AVG_BITRATE = 'AVG_BITRATE',
    BUFFER_LENGTH = 'BUFFER_LENGTH',
    CDN_IP = 'CDN_IP',
    PLAYER_STATE = 'PLAYER_STATE',
    PLAY_HEAD_TIME = 'PLAY_HEAD_TIME',
    RENDERED_FRAMERATE = 'RENDERED_FRAMERATE',
    RESOLUTION = 'RESOLUTION',
    SEEK_ENDED = 'SEEK_ENDED',
    SEEK_STARTED = 'SEEK_STARTED',
    AUDIO_LANGUAGE = 'AUDIO_LANGUAGE',
    SUBTITLES_LANGUAGE = 'SUBTITLES_LANGUAGE',
    CLOSED_CAPTIONS_LANGUAGE = 'CLOSED_CAPTIONS_LANGUAGE',


    // PlayerState
    BUFFERING = 'BUFFERING',
    NOT_MONITORED = 'NOT_MONITORED',
    PAUSED = 'PAUSED',
    PLAYING = 'PLAYING',
    STOPPED = 'STOPPED',
    UNKNOWN = 'UNKNOWN',

    // StreamType
    VOD = 'VOD',
    LIVE = 'LIVE',

    // Device Categories
    CAT_ANDROID_DEVICE = 'AND',
    CAT_APPLE_DEVICE = 'APL',
    CAT_CHROMECAST = 'CHR',
    CAT_DESKTOP_APP = 'DSKAPP',
    CAT_DEVICE_SIMULATOR = 'SIMULATOR',
    CAT_KAIOS_DEVICE = 'KAIOS',
    CAT_LG_TV = 'LGTV',
    CAT_NINTENDO = 'NINTENDO',
    CAT_PLAYSTATION = 'PS',
    CAT_ROKU = 'RK',
    CAT_SAMSUNG_TV = 'SAMSUNGTV',
    CAT_SET_TOP_BOX = 'STB',
    CAT_SMART_TV = 'TV',
    CAT_TIVO = 'TIVO',
    CAT_WEB = 'WEB',
    CAT_WINDOWS_DEVICE = 'WIN',
    CAT_XBOX = 'XB',
    CAT_LINUX = 'LNX',
    CAT_AMAZON = "AMZ",

    // Device Metadata Keys
    META_BRAND = 'DeviceBrand',
    META_CATEGORY = 'DeviceCategory',
    META_MANUFACTURER = 'DeviceManufacturer',
    META_MODEL = 'DeviceModel',
    META_OS_NAME = 'OperatingSystemName',
    META_OS_VERSION = 'OperatingSystemVersion',
    META_TYPE = 'DeviceType',
    META_VERSION = 'DeviceVersion',

    // DeviceType
    TYPE_CONSOLE = 'Console',
    TYPE_DESKTOP = 'DESKTOP',
    TYPE_MOBILE = 'Mobile',
    TYPE_SETTOP = 'Settop',
    TYPE_SMARTTV = 'SmartTV',
    TYPE_TABLET = 'Tablet',
    TYPE_VEHICLE = 'Vehicle',
    TYPE_OTHER = 'Other',

    // setAdListener info
    AD_PRELOAD_FEATURE = 'adPreloading',
    AD_TAG_URL = 'adTagUrl',
    IMASDK_CONTENT_PLAYER = 'imaMainContentPlayer',

    // setPlayer extraListeners
    CONVIVA_AD_MODULE = 'convivaAdModule',
    CONVIVA_MODULE = 'convivaModule',
    MEDIA_ELEMENT = 'mediaElement',
}

export interface ConvivaUtils {
    [ConvivaKeys.CONSOLE_LOG]?(message: string, logLevel: valueof<ConvivaConstants['LogLevel']>): void;
    [ConvivaKeys.MAKE_REQUEST]?(
        method: 'GET' | 'POST',
        url: string,
        data: any,
        contentType: string,
        timeout: number,
        callback: (succes: boolean, response: string) => void,
    ): void;
    [ConvivaKeys.SAVE_DATA]?(
        path: string,
        key: string,
        data: string,
        callback: (success: boolean, data: string) => void,
    ): void;
    [ConvivaKeys.LOAD_DATA]?(path: string, key: string, callback: (success: boolean, data: string) => void): void;
    [ConvivaKeys.GET_EPOCH_TIME_IN_MS]?(): number;
    [ConvivaKeys.CREATE_TIMER]?(action: () => void, time: number, actionName?: string): () => void;
}

export interface ConvivaOptions {
    [ConvivaKeys.LOG_LEVEL]?: number;
    [ConvivaKeys.GATEWAY_URL]?: string;
}

export interface ConvivaDeviceMetadata {
    [ConvivaKeys.BRAND]?: string;
    [ConvivaKeys.MANUFACTURER]?: string;
    [ConvivaKeys.MODEL]?: string;
    [ConvivaKeys.TYPE]?: valueof<ConvivaConstants['DeviceType']>;
    [ConvivaKeys.VERSION]?: string;
    [ConvivaKeys.OS_NAME]?: string;
    [ConvivaKeys.OS_VERSION]?: string;
    [ConvivaKeys.CATEGORY]?: valueof<ConvivaConstants['DeviceCategory']>;
    [ConvivaKeys.SCREEN_RESOLUTION_WIDTH]?: number;
    [ConvivaKeys.SCREEN_RESOLUTION_HEIGHT]?: number;
    [ConvivaKeys.SCREEN_RESOLUTION_SCALE_FACTOR]?: number;
}

export interface ConvivaPlayerInfo {
    [ConvivaKeys.FRAMEWORK_NAME]?: string;
    [ConvivaKeys.FRAMEWORK_VERSION]?: string;
}

export interface ConvivaPlayerExtraListeners {
    [Constants.MEDIA_ELEMENT]?: object;
    [Constants.CONVIVA_MODULE]?: object;
    [Constants.CONVIVA_AD_MODULE]?: object;
}

export interface ConvivaAdBreakInfo {
    [ConvivaKeys.POD_POSITION]?: string;
    [ConvivaKeys.POD_DURATION]?: number;
    [ConvivaKeys.POD_INDEX]?: number;
}

export interface ConvivaAdListenerInfo {
    [ConvivaKeys.AD_TAG_URL]?: string;
    [ConvivaKeys.AD_PRELOAD_FEATURE]?: boolean;
    [ConvivaKeys.IMASDK_CONTENT_PLAYER]: object;
}

export type ConvivaMetadata = {
    [ConvivaKeys.IS_LIVE]?:
        | ConvivaConstants['StreamType']['LIVE']
        | ConvivaConstants['StreamType']['UNKNOWN']
        | ConvivaConstants['StreamType']['VOD'];
    [ConvivaKeys.ASSET_NAME]?: string | null;
    [ConvivaKeys.DURATION]?: number | null;
    [ConvivaKeys.PLAYER_NAME]?: string;
    [ConvivaKeys.STREAM_URL]?: string | null;
    [ConvivaKeys.ENCODED_FRAMERATE]?: number | null;
    [ConvivaKeys.VIEWER_ID]?: string | null;
    [ConvivaKeys.DEFAULT_RESOURCE]?: string | null;
} & { [key: string]: string | number | null }; // Custom tags

export interface VideoAnalytics {
    configureExistingSession(sessionKey: string): void;
    release(): void;
    reportAdBreakEnded(): void;
    reportAdBreakStarted(
        type: valueof<ConvivaConstants['AdType']>,
        value: valueof<ConvivaConstants['AdPlayer']>,
        adBreakInfo?: object,
    ): void;
    reportPlaybackEnded(): void;
    reportPlaybackError(errorMessage: string, errorSeverity?: valueof<ConvivaConstants['ErrorSeverity']>): void;
    reportPlaybackEvent(eventType: string, eventDetail?: object): void;
    reportPlaybackFailed(errorMessage: string, contentInfo?: ConvivaMetadata): void;
    reportPlaybackMetric(
        metricKey: valueof<ConvivaConstants['Playback']>,
        metricValue?: valueof<ConvivaConstants['PlayerState']> | number | string,
        metricValue2?: valueof<ConvivaConstants['PlayerState']> | number | string,
    ): void;
    reportPlaybackRequested(contentInfo?: ConvivaMetadata): void;
    setCallback(callback: () => void | null): void;
    setContentInfo(contentInfo: ConvivaMetadata): void;
    setPlayer(playerInstance: object, extraListeners?: ConvivaPlayerExtraListeners): void;
    setPlayerInfo(playerInfo: ConvivaPlayerInfo): void;
}

export interface AdAnalytics {
    release(): void;
    reportAdEnded(): void;
    reportAdError(errorMessage: string, errorSeverity: valueof<ConvivaConstants['ErrorSeverity']>): void;
    reportAdFailed(errorMessage: string, adInfo?: ConvivaMetadata): void;
    reportAdLoaded(adInfo?: ConvivaMetadata): void;
    reportAdMetric(
        metricKey: valueof<ConvivaConstants['Playback']>,
        metricValue?: valueof<ConvivaConstants['PlayerState']> | number | string,
        metricValue2?: valueof<ConvivaConstants['PlayerState']> | number | string,
    ): void;
    reportAdPlayerEvent(eventType: valueof<ConvivaConstants['Events']>, detail?: object): void;
    reportAdSkipped(): void;
    reportAdStarted(adInfo?: ConvivaMetadata): void;
    setAdInfo(adInfo: ConvivaMetadata): void;
    setAdListener(adsLoader: object, info: ConvivaAdListenerInfo): void;
    setAdPlayerInfo(adPlayerInfo: ConvivaPlayerInfo): void;
    setCallback(callback: () => void | null): void;
}

export namespace Analytics {
    function buildAdAnalytics(videoAnalytics?: VideoAnalytics): AdAnalytics;
    function buildVideoAnalytics(): VideoAnalytics;
    function configureExistingClient(convivaLegacyClient: object): void;
    function init(customerKey: string, callbackFunctions: ConvivaUtils | null, options: ConvivaOptions): void;
    function release(): void;
    function reportAppBackgrounded(): void;
    function reportAppEvent(eventType: string, eventDetail?: { [key: string]: string }): void;
    function reportAppForegrounded(): void;
    function reportDeviceMetric(metricKey: string, metricValue: number | string): void;
    function setDeviceMetadata(deviceMetadata: ConvivaDeviceMetadata): void;
    function setUniqueIdentifier(indentifiers: object, callback?: () => void): void; // TODO: Define identifiers type
    function setUserPreferenceForDataCollection(identifiers: object, forAllApps: boolean): void; // TODO: Define identifiers type
    function setUserPreferenceForDataDeletion(identifiers: object): void; // TODO: Define identifiers type
}

export interface ConvivaConstants {
    AD_PRELOAD_FEATURE: ConvivaKeys.AD_PRELOAD_FEATURE;
    AD_TAG_URL: ConvivaKeys.AD_TAG_URL;
    AdPlayer: {
        CONTENT: 'CONTENT';
        SEPARATE: 'SEPARATE';
    };
    AdPosition: {
        MIDROLL: 'Mid-roll';
        POSTROLL: 'Post-roll';
        PREROLL: 'Pre-roll';
    };
    AdServingType: {
        INLINE: 'Inline';
        WRAPPER: 'Wrapper';
    };
    AdSlates: {
        BLACKOUT_SLATE: 'Blackout slate';
        COMMERCIAL_SLATE: 'Commercial Break slate';
        OTHER_SLATE: 'Other slate';
        REGULAR: 'Regular Ad';
        TECHNICAL_DIFFICULTIES_SLATE: 'Technical Difficulties slate';
        VPAID: 'VPAID';
    };
    AdType: {
        CLIENT_SIDE: 'Client Side';
        SERVER_SIDE: 'Server Side';
    };
    APPLICATION_VERSION: ConvivaKeys.APPLICATION_VERSION;
    ASSET_NAME: ConvivaKeys.ASSET_NAME;
    CONVIVA_AD_MODULE: ConvivaKeys.CONVIVA_AD_MODULE;
    CONVIVA_MODULE: ConvivaKeys.CONVIVA_MODULE;
    CUSTOMER_KEY: ConvivaKeys.CUSTOMER_KEY;
    CallbackFunctions: {
        CONSOLE_LOG: ConvivaKeys.CONSOLE_LOG;
        MAKE_REQUEST: ConvivaKeys.MAKE_REQUEST;
        SAVE_DATA: ConvivaKeys.SAVE_DATA;
        LOAD_DATA: ConvivaKeys.LOAD_DATA;
        GET_EPOCH_TIME_IN_MS: ConvivaKeys.GET_EPOCH_TIME_IN_MS;
        CREATE_TIMER: ConvivaKeys.CREATE_TIMER;
    };
    DEFAULT_RESOURCE: ConvivaKeys.DEFAULT_RESOURCE;
    DURATION: ConvivaKeys.DURATION;
    DeviceCategory: {
        ANDROID_DEVICE: ConvivaKeys.CAT_ANDROID_DEVICE;
        APPLE_DEVICE: ConvivaKeys.CAT_APPLE_DEVICE;
        CHROMECAST: ConvivaKeys.CAT_CHROMECAST;
        DESKTOP_APP: ConvivaKeys.CAT_DESKTOP_APP;
        DEVICE_SIMULATOR: ConvivaKeys.CAT_DEVICE_SIMULATOR;
        KAIOS_DEVICE: ConvivaKeys.CAT_KAIOS_DEVICE;
        LG_TV: ConvivaKeys.CAT_LG_TV;
        NINTENDO: ConvivaKeys.CAT_NINTENDO;
        PLAYSTATION: ConvivaKeys.CAT_PLAYSTATION;
        ROKU: ConvivaKeys.CAT_ROKU;
        SAMSUNG_TV: ConvivaKeys.CAT_SAMSUNG_TV;
        SET_TOP_BOX: ConvivaKeys.CAT_SET_TOP_BOX;
        SMART_TV: ConvivaKeys.CAT_SMART_TV;
        TIVO: ConvivaKeys.CAT_TIVO;
        WEB: ConvivaKeys.CAT_WEB;
        WINDOWS_DEVICE: ConvivaKeys.CAT_WINDOWS_DEVICE;
        XBOX: ConvivaKeys.CAT_XBOX;
        LINUX: ConvivaKeys.CAT_LINUX;
        AMAZON: ConvivaKeys.CAT_AMAZON;
    };
    DeviceMetadata: {
        BRAND: ConvivaKeys.META_BRAND;
        CATEGORY: ConvivaKeys.META_CATEGORY;
        MANUFACTURER: ConvivaKeys.META_MANUFACTURER;
        MODEL: ConvivaKeys.META_MODEL;
        OS_NAME: ConvivaKeys.META_OS_NAME;
        OS_VERSION: ConvivaKeys.META_OS_VERSION;
        TYPE: ConvivaKeys.META_TYPE;
        VERSION: ConvivaKeys.META_VERSION;
        SCREEN_RESOLUTION_WIDTH: ConvivaKeys.SCREEN_RESOLUTION_WIDTH;
        SCREEN_RESOLUTION_HEIGHT: ConvivaKeys.SCREEN_RESOLUTION_HEIGHT;
        SCREEN_RESOLUTION_SCALE_FACTOR: ConvivaKeys.SCREEN_RESOLUTION_SCALE_FACTOR;
    };
    DeviceType: {
        CONSOLE: ConvivaKeys.TYPE_CONSOLE;
        DESKTOP: ConvivaKeys.TYPE_DESKTOP;
        MOBILE: ConvivaKeys.TYPE_MOBILE;
        SETTOP: ConvivaKeys.TYPE_SETTOP;
        SMARTTV: ConvivaKeys.TYPE_SMARTTV;
        TABLET: ConvivaKeys.TYPE_TABLET;
        VEHICLE: ConvivaKeys.TYPE_VEHICLE;
        OTHER: ConvivaKeys.TYPE_OTHER;
    };
    ENCODED_FRAMERATE: ConvivaKeys.ENCODED_FRAMERATE;
    ErrorSeverity: {
        FATAL: 1;
        WARNING: 0;
    };
    ErrorType: {
        ERROR_3P_COMPONENT: 'ERROR_3P_COMPONENT';
        ERROR_DEVICE_LIMIT: 'ERROR_DEVICE_LIMIT';
        ERROR_INVALID_SLOT: 'ERROR_INVALID_SLOT';
        ERROR_INVALID_VALUE: 'ERROR_INVALID_VALUE';
        ERROR_IO: 'ERROR_IO';
        ERROR_MISSING_PARAMETER: 'ERROR_MISSING_PARAMETER';
        ERROR_NO_AD_AVAILABLE: 'ERROR_NO_AD_AVAILABLE';
        ERROR_NULL_ASSET: 'ERROR_NULL_ASSET';
        ERROR_PARSE: 'ERROR_PARSE';
        ERROR_TIMEOUT: 'ERROR_TIMEOUT';
        ERROR_UNKNOWN: 'ERROR_UNKNOWN';
        ERROR_UNMATCHED_SLOT_SIZE: 'ERROR_UNMATCHED_SLOT_SIZE';
        ERROR_UNSUPPORTED_3P_FEATURE: 'ERROR_UNSUPPORTED_3P_FEATURE';
    };
    Events: {
        AD_ATTEMPTED: 'Conviva.AdAttempted';
        AD_CLOSE: 'Conviva.AdClose';
        AD_COMPLETE: 'Conviva.AdComplete';
        AD_END: 'Conviva.AdEnd';
        AD_ERROR: 'Conviva.AdError';
        AD_FIRST_QUARTILE: 'Conviva.AdFirstQuartile';
        AD_IMPRESSION_END: 'Conviva.AdImpressionEnd';
        AD_IMPRESSION_START: 'Conviva.AdImpression';
        AD_MID_QUARTILE: 'Conviva.AdMidQuartile';
        AD_PROGRESS: 'Conviva.AdProgress';
        AD_REQUESTED: 'Conviva.AdRequested';
        AD_RESPONSE: 'Conviva.AdResponse';
        AD_SKIPPED: 'Conviva.AdSkipped';
        AD_SLOT_ENDED: 'Conviva.SlotEnded';
        AD_SLOT_STARTED: 'Conviva.SlotStarted';
        AD_START: 'Conviva.AdStart';
        AD_THIRD_QUARTILE: 'Conviva.AdThirdQuartile';
        BUMPER_VIDEO_ENDED: 'Conviva.BumperVideoEnded';
        BUMPER_VIDEO_STARTED: 'Conviva.BumperVideoStarted';
        CONTENT_PAUSED: 'Conviva.PauseContent';
        CONTENT_RESUMED: 'Conviva.ResumeContent';
        POD_END: 'Conviva.PodEnd';
        POD_START: 'Conviva.PodStart';
        USER_WAIT_ENDED: 'Conviva.UserWaitEnded';
        USER_WAIT_STARTED: 'Conviva.UserWaitStarted';
    };
    FRAMEWORK_NAME: ConvivaKeys.FRAMEWORK_NAME;
    FRAMEWORK_VERSION: ConvivaKeys.FRAMEWORK_VERSION;
    GATEWAY_URL: ConvivaKeys.GATEWAY_URL;
    IMASDK_CONTENT_PLAYER: ConvivaKeys.IMASDK_CONTENT_PLAYER;
    IS_LIVE: ConvivaKeys.IS_LIVE;
    LOG_LEVEL: ConvivaKeys.LOG_LEVEL;
    LogLevel: {
        DEBUG: 0;
        INFO: 1;
        WARNING: 2;
        ERROR: 3;
        NONE: 4;
    };
    MEDIA_ELEMENT: ConvivaKeys.MEDIA_ELEMENT;
    MODULE_NAME: string;
    MODULE_VERSION: string;
    Network: {
        CONNECTION_TYPE: 'CONNECTION_TYPE';
        LINK_ENCRYPTION: 'LINK_ENCRYPTION';
        SIGNAL_STRENGTH: 'SIGNAL_STRENGTH';
    };
    NO_SESSION_KEY: number;
    PLAYER_NAME: ConvivaKeys.PLAYER_NAME;
    POD_DURATION: ConvivaKeys.POD_DURATION;
    POD_INDEX: ConvivaKeys.POD_INDEX;
    POD_POSITION: ConvivaKeys.POD_POSITION;
    Playback: {
        BITRATE: 'BITRATE';
        AVG_BITRATE: 'AVG_BITRATE';
        PLAY_HEAD_TIME: 'PLAY_HEAD_TIME';
        RESOLUTION: 'RESOLUTION';
        BUFFER_LENGTH: 'BUFFER_LENGTH';
        PLAYER_STATE: 'PLAYER_STATE';
        RENDERED_FRAMERATE: 'RENDERED_FRAMERATE';
        SEEK_STARTED: 'SEEK_STARTED';
        SEEK_ENDED: 'SEEK_ENDED';
        CDN_IP: 'CDN_IP';
        DROPPED_FRAMES_TOTAL: 'DROPPED_FRAMES_TOTAL';
        DROPPED_FRAMES_COUNT: 'DROPPED_FRAMES_COUNT';
        AUDIO_LANGUAGE: 'AUDIO_LANGUAGE';
        SUBTITLES_LANGUAGE: 'SUBTITLES_LANGUAGE';
        CLOSED_CAPTIONS_LANGUAGE: 'CLOSED_CAPTIONS_LANGUAGE';
    };
    PlayerState: {
        BUFFERING: ConvivaKeys.BUFFERING;
        NOT_MONITORED: ConvivaKeys.NOT_MONITORED;
        PAUSED: ConvivaKeys.PAUSED;
        PLAYING: ConvivaKeys.PLAYING;
        STOPPED: ConvivaKeys.STOPPED;
        UNKNOWN: ConvivaKeys.UNKNOWN;
    };
    STREAM_URL: ConvivaKeys.STREAM_URL;
    StreamType: {
        UNKNOWN: 'UNKNOWN';
        VOD: 'VOD';
        LIVE: 'LIVE';
    };
    VIEWER_ID: ConvivaKeys.VIEWER_ID;
    version: string;
}

export const Constants: ConvivaConstants;
