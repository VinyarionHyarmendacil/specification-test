import { state } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

const currentUser = state.get("current-user");
const groupId = state.get("groupId");

const inOneHour = new Date(currentUser.last_activity); inOneHour.setHours(inOneHour.getHours() + 1);
const inTwoHours = new Date(currentUser.last_activity); inTwoHours.setHours(inTwoHours.getHours() + 1);
const calendarEventTitle = "Test Event " + currentUser.last_activity;
const calendarEventDescription = "Test Event Description " + currentUser.last_activity;
const calendarEventDescriptionUpdate = "Test Event Description Updated " + currentUser.last_activity;
const calendarSearchTerm = "Test Event";

test.before(failUnauthenticated);

test(
	testOperation,
	"getCalendarEvents",
	{
		parameters: {
			number: 100,
			offset: 0,
			monthDate: now.toISOString()
		},
		statusCode: 200,
		unstable: true
	}
);

test(
	testOperation,
	"getFeaturedCalendarEvents",
	{
		parameters: {
			number: 100,
			offset: 0,
			monthDate: now.toISOString()
		},
		statusCode: 200,
		unstable: true
	}
);

test.serial(
	testOperation,
	"createGroupCalendarEvent",
	{
		parameters: {
			groupId: groupId
		},
		requestBody: {
			title: calendarEventTitle,
			accessType: "group",
			startsAt: inOneHour.toISOString(),
			endsAt: inTwoHours.toISOString(),
			description: calendarEventDescription,
			category: "other",
			sendCreationNotification: false
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		state.set("calendar-event", body);
	}
);

test.serial(
	testOperation,
	"followGroupCalendarEvent",
	() => ({
		parameters: {
			groupId: groupId,
			calendarId: state.get("calendar-event").id
		},
		requestBody: {
			isFollowing: true
		},
		statusCode: 200,
		unstable: true
	})
);

test.serial(
	testOperation,
	"getFollowedCalendarEvents",
	{
		parameters: {
			number: 100,
			offset: 0,
			monthDate: currentUser.last_activity
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		t.is(body.totalCount, 1, "Should be following one event");
	}
);

test.serial(
	testOperation,
	"updateGroupCalendarEvent",
	() => ({
		parameters: {
			groupId: groupId,
			calendarId: state.get("calendar-event").id
		},
		requestBody: {
			description: calendarEventDescriptionUpdate
		},
		statusCode: 200,
		unstable: true
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.description, calendarEventDescriptionUpdate, "Should have updated calendar event description");
	}
);

test.serial(
	testOperation,
	"getGroupCalendarEvents",
	{
		parameters: {
			groupId: groupId,
			number: 100,
			offset: 0,
			monthDate: now.toISOString()
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		t.is(body.totalCount, 1, "Should have one group event");
	}
);

test.todo("Download calendar event as ICS");

test.serial(
	testOperation,
	"getGroupCalendarEvent",
	() => ({
		parameters: {
			groupId: groupId,
			calendarId: state.get("calendar-event").id
		},
		statusCode: 200,
		unstable: true
	})
);

test.serial(
	testOperation,
	"searchCalendarEvents",
	{
		parameters: {
			number: 100,
			offset: 0,
			utcOffset: 0,
			calendarSearchTerm: calendarSearchTerm
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		t.is(body.totalCount >= 1, true, "Should have at least one search result");
	}
);

test.serial(
	testOperation,
	"deleteGroupCalendarEvent",
	() => ({
		parameters: {
			groupId: groupId,
			calendarId: state.get("calendar-event").id
		},
		statusCode: 200,
		unstable: true
	})
);
