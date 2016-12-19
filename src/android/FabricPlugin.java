package com.sarriaroman.fabric;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.crashlytics.android.Crashlytics;
import com.crashlytics.android.answers.AddToCartEvent;
import com.crashlytics.android.answers.Answers;
import com.crashlytics.android.answers.AnswersEvent;
import com.crashlytics.android.answers.ContentViewEvent;
import com.crashlytics.android.answers.CustomEvent;
import com.crashlytics.android.answers.InviteEvent;
import com.crashlytics.android.answers.LevelEndEvent;
import com.crashlytics.android.answers.LevelStartEvent;
import com.crashlytics.android.answers.LoginEvent;
import com.crashlytics.android.answers.PurchaseEvent;
import com.crashlytics.android.answers.RatingEvent;
import com.crashlytics.android.answers.SearchEvent;
import com.crashlytics.android.answers.ShareEvent;
import com.crashlytics.android.answers.SignUpEvent;
import com.crashlytics.android.answers.StartCheckoutEvent;

import android.util.Log;

import java.lang.reflect.Method;
import java.lang.StackTraceElement;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Currency;
import java.util.Iterator;

import io.fabric.sdk.android.Fabric;

public class FabricPlugin extends CordovaPlugin {
	private final String pluginName = "FabricPlugin";

	@Override
	protected void pluginInitialize() {
		Fabric.with(this.cordova.getActivity().getApplicationContext(), new Crashlytics(), new Answers());
	}

	@Override
	public boolean execute(final String action, final JSONArray data, final CallbackContext callbackContext) {
		Log.d(pluginName, pluginName + " called with options: " + data);

		if (action.equals("addLog")) {
			addLog(data, callbackContext);
		} else if (action.equals("sendCrash")) {
			sendCrash(data, callbackContext);
		} else if (action.equals("sendNonFatalCrash")) {
			sendNonFatalCrash(data, callbackContext);
		} else if (action.equals("setUserIdentifier")) {
			setUserIdentifier(data, callbackContext);
		} else if (action.equals("setUserName")) {
			setUserName(data, callbackContext);
		} else if (action.equals("setUserEmail")) {
			setUserEmail(data, callbackContext);
		} else if (action.equals("setStringValueForKey")) {
			setStringValueForKey(data, callbackContext);
		} else if (action.equals("setIntValueForKey")) {
			setIntValueForKey(data, callbackContext);
		} else if (action.equals("setBoolValueForKey")) {
			setBoolValueForKey(data, callbackContext);
		} else if (action.equals("setFloatValueForKey")) {
			setFloatValueForKey(data, callbackContext);
		} else if (action.equals("sendPurchase")) {
			sendPurchase(data, callbackContext);
		} else if (action.equals("sendAddToCart")) {
			sendAddToCart(data, callbackContext);
		} else if (action.equals("sendStartCheckout")) {
			sendStartCheckout(data, callbackContext);
		} else if (action.equals("sendSearch")) {
			sendSearch(data, callbackContext);
		} else if (action.equals("sendShare")) {
			sendShare(data, callbackContext);
		} else if (action.equals("sendRatedContent")) {
			sendRatedContent(data, callbackContext);
		} else if (action.equals("sendSignUp")) {
			sendSignUp(data, callbackContext);
		} else if (action.equals("sendLogIn")) {
			sendLogIn(data, callbackContext);
		} else if (action.equals("sendInvite")) {
			sendInvite(data, callbackContext);
		} else if (action.equals("sendLevelStart")) {
			sendLevelStart(data, callbackContext);
		} else if (action.equals("sendLevelEnd")) {
			sendLevelEnd(data, callbackContext);
		} else if (action.equals("sendContentView")) {
			sendContentView(data, callbackContext);
		} else if (action.equals("sendCustomEvent")) {
			sendCustomEvent(data, callbackContext);
		}
		else {
			callbackContext.error(pluginName + ": Method '" + action + "' not supported.");
			return false;
		}

		return true;
	}

	/* Crashlytics Events */

	private void addLog(final JSONArray data,
						final CallbackContext callbackContext) {

		String message = data.optString(0);
		Crashlytics.log(message);
		callbackContext.success();
	}

	private void sendCrash(final JSONArray data,
						   final CallbackContext callbackContext) {

		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				throw new RuntimeException("This is a crash");
			}
		});
	}

	private void sendNonFatalCrash(final JSONArray data,
								   final CallbackContext callbackContext) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				if (data.length() == 2) {
					// well, we got more, let's asume arg 2 was a stack trace
					try {
						JSONArray stackTrace = data.getJSONArray(1);

						StackTraceElement[] trace = new StackTraceElement[stackTrace.length()];
						for(int i = 0; i < stackTrace.length(); i++) {
	 						JSONObject elem = stackTrace.getJSONObject(i);

	 						trace[i] = new StackTraceElement("undefined", elem.getString("functionName"),elem.getString("fileName"), elem.getInt("lineNumber"));
	 					}

						JavaScriptException ex = new JavaScriptException(data.getString(0));
	                    ex.setStackTrace(trace);

	                    Crashlytics.logException(ex);
					} catch (JSONException e) {
						Crashlytics.logException(e);
					}
				} else {
					Crashlytics.logException(new Throwable(data.optString(0, "No Message Provided")));
				}
			}
		});
	}

	private void setUserIdentifier(final JSONArray data,
								   final CallbackContext callbackContext) {

		String identifier = data.optString(0);
		Crashlytics.setUserIdentifier(identifier);
		callbackContext.success();
	}

	private void setUserName(final JSONArray data,
							 final CallbackContext callbackContext) {

		String userName = data.optString(0);
		Crashlytics.setUserName(userName);
		callbackContext.success();
	}

	private void setUserEmail(final JSONArray data,
							  final CallbackContext callbackContext) {

		String email = data.optString(0);
		Crashlytics.setUserEmail(email);
		callbackContext.success();
	}

	private void setStringValueForKey(final JSONArray data,
									  final CallbackContext callbackContext) {

		String value = data.optString(0);
		String key = data.optString(1);
		Crashlytics.setString(key, value);
		callbackContext.success();
	}

	private void setIntValueForKey(final JSONArray data,
								   final CallbackContext callbackContext) {

		int value = data.optInt(0);
		String key = data.optString(1);

		Crashlytics.setInt(key, value);
		callbackContext.success();
	}

	private void setBoolValueForKey(final JSONArray data,
									final CallbackContext callbackContext) {

		boolean value = data.optBoolean(0);
		String key = data.optString(1);

		Crashlytics.setBool(key, value);
		callbackContext.success();
	}

	private void setFloatValueForKey(final JSONArray data,
									 final CallbackContext callbackContext) {

		double value = data.optDouble(0);
		String key = data.optString(1);

		Crashlytics.setDouble(key, value);
		callbackContext.success();
	}

	/* Answers Events */

	public void sendPurchase(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				PurchaseEvent evt = new PurchaseEvent();

				if (!data.isNull(0)) {
					evt.putItemPrice(new BigDecimal(data.optDouble(0, 0)));
				}

				try {
					evt.putCurrency(Currency.getInstance(data.optString(1)));
				}
				catch (Exception ex) {
					Log.w(pluginName, "Unable to parse currency: " + ex.getMessage());
				}

				evt.putSuccess(data.optBoolean(2, true));
				evt.putItemName(data.optString(3));
				evt.putItemType(data.optString(4));
				evt.putItemId(data.optString(5));

				if (!data.isNull(6)) {
					populateCustomAttributes(evt, data.optJSONObject(6));
				}

				Answers.getInstance().logPurchase(evt);
			}
		});
	}

	public void sendAddToCart(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				AddToCartEvent evt = new AddToCartEvent();

				if (!data.isNull(0)) {
					evt.putItemPrice(new BigDecimal(data.optDouble(0, 0)));
				}

				try {
					evt.putCurrency(Currency.getInstance(data.optString(1)));
				}
				catch (Exception ex) {
					Log.w(pluginName, "Unable to parse currency: " + ex.getMessage());
				}

				evt.putItemName(data.optString(2));
				evt.putItemType(data.optString(3));
				evt.putItemId(data.optString(4));

				if (!data.isNull(5)) {
					populateCustomAttributes(evt, data.optJSONObject(5));
				}

				Answers.getInstance().logAddToCart(evt);
			}
		});
	}

	public void sendStartCheckout(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				StartCheckoutEvent evt = new StartCheckoutEvent();

				if (!data.isNull(0)) {
					evt.putTotalPrice(new BigDecimal(data.optDouble(0, 0)));
				}

				try {
					evt.putCurrency(Currency.getInstance(data.optString(1)));
				}
				catch (Exception ex) {
					Log.w(pluginName, "Unable to parse currency: " + ex.getMessage());
				}

				evt.putItemCount(data.optInt(2));

				if (!data.isNull(3)) {
					populateCustomAttributes(evt, data.optJSONObject(3));
				}

				Answers.getInstance().logStartCheckout(evt);
			}
		});
	}

	public void sendSearch(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				SearchEvent evt = new SearchEvent();

				evt.putQuery(data.optString(0));

				if (!data.isNull(1)) {
					populateCustomAttributes(evt, data.optJSONObject(1));
				}

				Answers.getInstance().logSearch(evt);
			}
		});
	}

	public void sendShare(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				ShareEvent evt = new ShareEvent();

				evt.putMethod(data.optString(0));
				evt.putContentName(data.optString(1));
				evt.putContentType(data.optString(2));
				evt.putContentId(data.optString(3));

				if (!data.isNull(4)) {
					populateCustomAttributes(evt, data.optJSONObject(4));
				}

				Answers.getInstance().logShare(evt);
			}
		});
	}

	public void sendRatedContent(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				RatingEvent evt = new RatingEvent();

				evt.putRating(data.optInt(0));
				evt.putContentName(data.optString(1));
				evt.putContentType(data.optString(2));
				evt.putContentId(data.optString(3));

				if (!data.isNull(4)) {
					populateCustomAttributes(evt, data.optJSONObject(4));
				}

				Answers.getInstance().logRating(evt);
			}
		});
	}

	public void sendSignUp(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				SignUpEvent evt = new SignUpEvent();

				evt.putMethod(data.optString(0, "Direct"));
				evt.putSuccess(data.optBoolean(1, true));

				if (!data.isNull(2)) {
					populateCustomAttributes(evt, data.optJSONObject(2));
				}

				Answers.getInstance().logSignUp(evt);
			}
		});
	}

	public void sendLogIn(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				LoginEvent evt = new LoginEvent();

				evt.putMethod(data.optString(0, "Direct"));
				evt.putSuccess(data.optBoolean(1, true));

				if (!data.isNull(2)) {
					populateCustomAttributes(evt, data.optJSONObject(2));
				}

				Answers.getInstance().logLogin(evt);
			}
		});
	}

	public void sendInvite(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				InviteEvent evt = new InviteEvent();

				evt.putMethod(data.optString(0, "Direct"));

				if (!data.isNull(1)) {
					populateCustomAttributes(evt, data.optJSONObject(1));
				}

				Answers.getInstance().logInvite(evt);
			}
		});
	}

	public void sendLevelStart(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				LevelStartEvent evt = new LevelStartEvent();

				evt.putLevelName(data.optString(0));

				if (!data.isNull(1)) {
					populateCustomAttributes(evt, data.optJSONObject(1));
				}

				Answers.getInstance().logLevelStart(evt);
			}
		});
	}

	public void sendLevelEnd(final JSONArray data, final CallbackContext context) {
		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				LevelEndEvent evt = new LevelEndEvent();

				evt.putLevelName(data.optString(0));
				evt.putScore(data.optInt(1));
				evt.putSuccess(data.optBoolean(2, true));

				if (!data.isNull(3)) {
					populateCustomAttributes(evt, data.optJSONObject(3));
				}

				Answers.getInstance().logLevelEnd(evt);
			}
		});
	}

	public void sendContentView(final JSONArray data, final CallbackContext context) {

		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				ContentViewEvent evt = new ContentViewEvent();

				evt.putContentName(data.optString(0));
				evt.putContentType(data.optString(1));
				evt.putContentId(data.optString(2));

				if (!data.isNull(3)) {
					populateCustomAttributes(evt, data.optJSONObject(3));
				}

				Answers.getInstance().logContentView(evt);
			}
		});
	}

	public void sendCustomEvent(final JSONArray data, final CallbackContext context) {

		this.cordova.getActivity().runOnUiThread(new Runnable() {
			@Override
			public void run() {
				CustomEvent evt = new CustomEvent(data.optString(0, "Custom Event"));

				if (!data.isNull(1)) {
					populateCustomAttributes(evt, data.optJSONObject(1));
				}

				Answers.getInstance().logCustom(evt);
			}
		});
	}

	/* Helpers */

	/**
	 * Helper method used to populate custom attributes of the given event with
	 * the values propvided in the given JSON object.
	 *
	 * @param evt The event to populate with custom attribute key/value pairs.
	 * @param attributes A JSON object of key/value pairs used to populate the event.
	 */
	private void populateCustomAttributes(AnswersEvent evt, JSONObject attributes) {

		if (attributes == null || evt == null) {
			return;
		}

		try {
			Iterator<String> keys = attributes.keys();

			while (keys.hasNext()) {
				String key = keys.next();

				try {
					evt.putCustomAttribute(key, attributes.getString(key));
				}
				catch (Exception e) {
					Log.w(pluginName, "Error while populating custom attribute with key '" + key + "': " + e.getMessage());
				}
			}
		}
		catch (Exception ex) {
			Log.w(pluginName, "Error while populating custom attributes: " + ex.getMessage());
		}
	}
}
