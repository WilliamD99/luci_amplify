export function request(ctx) {
  let args = ctx.args;

  return {
    version: "2018-05-29",
    operation: "DeleteItem",
    key: {
      id: {
        S: args.id,
      },
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
