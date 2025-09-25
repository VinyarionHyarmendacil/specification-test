import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state } from "./_cache.js";

const unstableGroupKeys = [
	"id",
	"discriminator",
	"createdAt",
	"memberCountSyncedAt",
	"myMember.createdAt",
	"myMember.groupId",
	"myMember.id",
	"myMember.joinedAt",
	"myMember.roleIds",
	"updatedAt"
];

test.before(failUnauthenticated);

// Moved from ./groups.ts to allow for group-dependent operations in other categories
test.serial(testOperation, "deleteGroup", () => ({
	parameters: {
		groupId: state.get("groupId")
	},
	statusCode: 200,
	unstable: unstableGroupKeys
}));
