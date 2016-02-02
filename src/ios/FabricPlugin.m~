//
//  FabricPlugin.m
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>
#import <Crashlytics/Answers.h>

@interface FabricPlugin : CDVPlugin

// Answers Events
- (void)sendSignUp:(CDVInvokedUrlCommand*)command;
- (void)sendLogIn:(CDVInvokedUrlCommand*)command;
- (void)sendContentView:(CDVInvokedUrlCommand*)command;
- (void)sendCustomEvent:(CDVInvokedUrlCommand*)command;

// Set user information
- (void)setUserIdentifier:(CDVInvokedUrlCommand*)command;
- (void)setUserName:(CDVInvokedUrlCommand*)command;
- (void)setUserEmail:(CDVInvokedUrlCommand*)command;

// Log
- (void)addLog:(CDVInvokedUrlCommand*)command;

- (void)setObjectValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setIntValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setBoolValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setFloatValueForKey:(CDVInvokedUrlCommand*)command;

// Crash
- (void)sendCrash:(CDVInvokedUrlCommand*)command;

@end

@implementation FabricPlugin

#pragma mark - Events

-(void) sendSignUp:(CDVInvokedUrlCommand *)command {
    [self.commandDelegate runInBackground:^{
        [Answers logSignUpWithMethod:@"Direct" success:@YES customAttributes:@{}];
    }];
}

-(void) sendLogIn:(CDVInvokedUrlCommand *)command {
    [self.commandDelegate runInBackground:^{
        [Answers logLoginWithMethod:@"Direct" success:@YES customAttributes:@{}];
    }];
}

-(void) sendContentView:(CDVInvokedUrlCommand *)command {
    NSMutableDictionary *obj = [command argumentAtIndex:0];

    NSString *name = [obj valueForKey:@"name"];
    NSString *type = [obj valueForKey:@"type"];
    NSString *_id = [obj valueForKey:@"id"];

    NSDictionary *attributes = [obj objectForKey:@"attributes"];

    [self.commandDelegate runInBackground:^{
        [Answers logContentViewWithName:name contentType:type contentId:_id customAttributes:attributes];
    }];
}

-(void) sendCustomEvent:(CDVInvokedUrlCommand *)command {
    NSMutableDictionary *obj = [command argumentAtIndex:0];

    NSString *name = [obj valueForKey:@"name"];

    NSDictionary *attributes = [obj objectForKey:@"attributes"];

    [self.commandDelegate runInBackground:^{
        [Answers logCustomEventWithName:name customAttributes:attributes];
    }];
}

#pragma mark - Logging
- (void)addLog:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *logMessage = [options objectForKey:@"message"];
    if(logMessage)
    {
        CLSNSLog(@"%@",logMessage);
    }
}

#pragma mark - User Information

- (void)setUserIdentifier:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *identifier = [options objectForKey:@"value"];
    if(identifier)
    {
        [[Crashlytics sharedInstance] setUserIdentifier:identifier];
    }
}

- (void)setUserName:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *username = [options objectForKey:@"value"];
    if(username)
    {
        [[Crashlytics sharedInstance] setUserName:username];
    }
}

- (void)setUserEmail:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *email = [options objectForKey:@"value"];
    if(email)
    {
        [[Crashlytics sharedInstance] setUserEmail:email];
    }
}

#pragma mark ) Crash
- (void)sendCrash:(CDVInvokedUrlCommand*)command
{
    [[Crashlytics sharedInstance] crash];
}

#pragma mark - Custom Keys
- (void)setObjectValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *value = [options objectForKey:@"value"];
    NSString *key = [options objectForKey:@"key"];
    if(value && key)
    {
        [[Crashlytics sharedInstance] setObjectValue:value forKey:key];
    }
}

- (void)setIntValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    int value = [[options objectForKey:@"value"] intValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setIntValue:value forKey:key];
    }
}

- (void)setBoolValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    BOOL value = [[options objectForKey:@"value"] boolValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setBoolValue:value forKey:key];
    }
}

- (void)setFloatValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    float value = [[options objectForKey:@"value"] floatValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setFloatValue:value forKey:key];
    }
}

@end
