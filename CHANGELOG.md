
# Changelog

### 4.2.0 (30/MAR/2021)
* Supports pooling of errors reported before playback starts and reports it after monitoring starts .

## 4.1.2 (30/DEC/2020)
* Introduces new minification logic to reduce the Conviva JavaScript SDK to ~105KB. From this release onwards Conviva releases 2 SDK files - conviva-core-sdk.debug.js for the development with complete Conviva logs and conviva-core-sdk.js for the production environments with minimal Conviva logs. Few unused API’s are deprecated which were accounting to increase of size.
* Introduces new versioning of Major.Minor.Patch<b>L</b>(Eg.. 4.1.2<b>L</b>) for the legacy Conviva JavaScript SDK Integrations to be able to differentiate from the Simplified Integrations.
* Introduces new declaration file conviva-core-sdk.d.ts for Conviva JavaScript SDK api’s to support TypeScript application.

## 4.0.20 (30/DEC/2020)
* Hot fix on top of 4.0.19 for the resolving the delay in session creation for the STB's.

## 4.0.19 (25/SEP/2020)
* Added Constants.APPLICATION_VERSION for reporting the application version.
* Fixed few null checks in corner cases.

## 4.0.18 (25/SEP/2020)
* Added api to report Screen Resolution.
* Added api to report Dropped frames.

## 4.0.15 (30/JUL/2020)
* Introduces USER_WAIT_STARTED and USER_WAIT_ENDED player events for the Ad Sessions to accommodate the slate metrics.
* Changes the implementation of the Ad Analytics to support handling of slate sessions.

## 4.0.14 (23/JUN/2020)
* Changed the implementation of the Signal Strength to allow positive values for platforms such as Tizen.

## 4.0.13 (29/MAY/2020)
* Introduces additional argument to setPlayer API to accept additional parameters specific to player or module.

## 4.0.12 (29/MAY/2020)
* Fixes issue of unable to set the custom tags with keys “applicationName”, “streamUrl” and “viewerId”.

## 4.0.10 (07/MAY/2020)
* Uses 2.151.0.xxxxx series versioning for older integrations that uses Core SDK version 4.x+.
* Collects log messages for simplified API integrations.

## 4.0.8 (09/APR/2020)
* Introduces setAdListener API to support Ad SDKs module integrations.

## 4.0.7 (31/MAR/2020)
* Supports auto detection of CDN server IP for Akamai.
* Fixes issue of missing checks for access to “navigator”, “document” and “javaEnabled()”.

## 4.0.3 (14/FEB/2020)
* Introduces a major upgrade to the SDK architecture that simplifies and accelerates Conviva integration.
* Introduces Analytics, VideoAnalytics, and AdAnalytics to simplify the integration of the SDK.

## 2.151.0.37023 (27/JAN/2020)
* Supports data collection and data compliance as per General Data Protection Regulation (GDPR), and California Consumer Privacy Act (CCPA).
* Introduces setUniqueIdentifier() API for setting user identifiers for data collection.
* Introduces setUserPreferenceForDataCollection() API for setting user preferences to opt-out of user data collection.
* Introduces setUserPreferenceForDataDeletion() API for setting user preferences to delete previously collected user data.

## 2.151.0.37016 (13/DEC/2019)
* Collects additional metadata related to browser and devices to improve device identification and classification accuracy. For example: Resolution, DPI, and more.

## 2.151.0.36995 (22/AUG/2019)
* Introduces setCDNServerIP() API to support setting of CDN Edge Server's IP address.
* Introduces a new device category called KAIOS_DEVICE.

## 2.151.0.36981 (18/MAR/2019)
* Fixes issue of JS SDK backward compatibility by removing the usage of Object.values() and Array.prototype.includes().
* Fixes JS SDK loading issue when using WebPack, where root window was replaced by "undefined".

## 2.151.0.36976 (05/FEB/2019)
* Introduces the mandatory implementation of getDeviceCategory, a new MetadataInterface API used to set the device category, for example ANDROID_DEVICE or ROKU. This API accepts only the device categories listed under DeviceCategory.
* Updates the metadata field syntax for APIs getOperatingSystemName and getOperatingSystemVersion.
* Removes "UNKNOWN" device type from DeviceType enum.

## 2.146.0.36444 (31/AUG/2018)
* Deprecates defaultbitratekbps, used with ContentMetadata object during session creation. Please refer to Set Bitrate section of the integration page.
* Fixes an issue when application did not load Conviva through require js, if Conviva object was not available when application uses require js.
* Fixes an issue where resolution, buffer length and frame rate were sent as part of a hearbeat even when value was zero.
* Fixes an issue where Player state change is triggered even if the current state is same as old one.
* Fixes an issue in which bitrate change event was not sent when old bitrate was less than or equal to -1.
* Fixes an issue when content length was not set properly as part of cwsStateChangeEvent.

## 2.141.0.35966 (04/JUN/2018)
* Enables updateContentMetadata API to be used during the entire lifetime of the session.
* Deprecates updateContentMetadata API from PlayerStateManager. Client still supports updateContentMetadata API.

## 2.139.0.35500 (20/APR/2018)
* Supports Ad Experience, part of Ad Insights.
* Supports customer specific gatewayUrl using customer's CUSTOMER_KEY.
* Removes detection and collection of SSID.
* Improves handling of tags when updating content metadata.

## 2.137.0.35314 (09/FEB/2018)
* Introduces new logic where values set by user with Client API updateContentMetadata() take higher precedence over the PlayerStateManager APIs, for encoded frame rate, duration and streamUrl.
* Introduces new interface ClientMeasureInterface for accurate measuring of Play Head Time, Buffer Length, Signal Strength and Rendered Frame Rate.
* Introduces getPlayerAttached and isPlayerAttached APIs.
* Reduces core JS SDK library download size by providing API docs as a separate download file.

### 2.124.0.33189 (29/MAY/2017)
* Fixes bugs related to mutable metadata for the Encoded Frame Rate, streamUrl, and Resource.

## 2.121.0.32789 (24/MAR/2017)
* Updates tutorial documentation, correcting a previously erroneous description of the PlayerStateManager class.

## 2.121.0.32738 (03/MAR/2017)
* Supports reporting Network metrics, Video resolution.
* Supports updating content metadata mid-session.

## 2.119.0.32091 (29/DEC/2016)
* Supports reporting video seek events.
