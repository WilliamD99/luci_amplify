import { util, extensions } from "@aws-appsync/utils";
export function request() {
  return { payload: null };
}

export const response = (ctx) => {
  const { userId, groupId } = ctx.args;

  const filter = {
    identifier: {
      eq: ctx.args.identifier,
    },
  };

  extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter));
  return null;
};
