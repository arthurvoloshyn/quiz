package com.quizapp;

import android.content.Context;

import com.facebook.react.devsupport.interfaces.DevOptionHandler;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.jakewharton.processphoenix.ProcessPhoenix;

public class StorybookDevMenuOptionHandler implements DevOptionHandler {

    private final Context mContext;

    public static void initDevMenuItem(Context context, DevSupportManager devSupportManager) {
        devSupportManager.addCustomDevOption(
                "Toggle Storybook",
                new StorybookDevMenuOptionHandler(context)
        );
    }

    public StorybookDevMenuOptionHandler(Context context) {
        mContext = context;
    }

    @Override
    public void onOptionSelected() {
        StorybookDevMenuPreferencesService.toggleStorybookFlag(mContext);
        ProcessPhoenix.triggerRebirth(mContext);
    }

}
