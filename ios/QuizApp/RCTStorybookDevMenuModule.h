#ifndef RCTStorybookTriggerModule_h
#define RCTStorybookTriggerModule_h

#import <React/RCTBridgeModule.h>

RCT_EXTERN BOOL RCTStorybookDevMenuIsStorybookEnabled(void);

@interface RCTStorybookDevMenuModule : NSObject <RCTBridgeModule>

@end

#endif /* RCTStorybookTriggerModule_h */
